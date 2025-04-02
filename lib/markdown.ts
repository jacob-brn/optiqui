import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import { page_routes } from "./routes-config";
import { visit } from "unist-util-visit";
import { createHighlighter } from "shiki";

// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pre from "@/components/markdown/pre";
import Note from "@/components/markdown/note";
import { Button } from "@/components/ui/button";
import { Stepper, StepperItem } from "@/components/markdown/stepper";
import Image from "@/components/markdown/image";
import Link from "@/components/markdown/link";
import Script from "next/script";

import LivePreviewButton from "@/components/LivePreviewButton";
import { Header } from "@/components/sections/header/Header1";
import { ComponentPreview } from "@/components/component-preview";
import TrustedBy1 from "@/components/sections/trusted_by/TrustedBy1";
import FeaturesSection from "@/components/sections/features/FeaturesSection1";
import PricingSection from "@/components/sections/pricing/PricingSection1";
import HeroSection from "@/components/sections/hero/HeroSection1";
import Faq1 from "@/components/sections/faq/Faq1";
import Footer from "@/components/sections/footer/Footer1";

import SlidingBadge from "@/registry/ui/SlidingBadge";
import TextCubic from "@/registry/ui/TextCubic";
import HeroMedia from "@/registry/ui/HeroMedia";
import PixelCard from "@/registry/ui/PixelCard";
import TextUnderline from "@/registry/ui/TextUnderline";
import TextCircle from "@/registry/ui/TextCircle";
import TextHighlight from "@/registry/ui/TextHighlight";
import TextNoise from "@/registry/ui/TextNoise";
import Rays from "@/registry/ui/Rays";
import TextScan from "@/registry/ui/TextScan";
import BentoGrid from "@/registry/ui/BentoGrid";

import { ComponentSource } from "@/components/component-source";
import { rehypeComponent } from "./rehype-component";
import { rehypeNpmCommand } from "./rehype-npm-command";
import { codeImport } from "remark-code-import";

// add custom components
const components = {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Script,
  Link,
  pre: Pre,
  Note,
  Stepper,
  StepperItem,
  img: Image,
  a: Link,
  LivePreviewButton,
  Header,
  ComponentPreview,
  ComponentSource,
  FeaturesSection,
  TrustedBy1,
  PricingSection,
  HeroSection,
  Footer,
  Faq1,
  //components
  SlidingBadge,
  TextCubic,
  HeroMedia,
  PixelCard,
  TextUnderline,
  TextCircle,
  TextHighlight,
  TextNoise,
  Rays,
  TextScan,
  BentoGrid,
};

const prettyCode: Options = {
  theme: "github-dark-default",
  keepBackground: true,
  getHighlighter: (options) =>
    createHighlighter({
      ...options,
    }),
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedChars(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className = ["word--highlighted"];
  },
};

// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(
  rawMdx: string,
  document?: { _meta?: { path?: string } }
) {
  const result = await compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, codeImport],
        rehypePlugins: [
          preProcess,
          rehypeSlug,
          rehypeComponent,
          () => (tree) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "pre") {
                const [codeEl] = node.children;
                if (codeEl.tagName !== "code") {
                  return;
                }
                if (codeEl.data?.meta) {
                  const regex = /event="([^"]*)"/;
                  const match = codeEl.data?.meta.match(regex);
                  if (match) {
                    node.__event__ = match ? match[1] : null;
                    codeEl.data.meta = codeEl.data.meta.replace(regex, "");
                  }
                }
                node.__rawString__ = codeEl.children?.[0].value;
                node.__src__ = node.properties?.__src__;
                node.__style__ = node.properties?.__style__;
              }
            });
          },
          [rehypePrettyCode, prettyCode],
          rehypeAutolinkHeadings,
          () => (tree) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "figure") {
                if (!("data-rehype-pretty-code-figure" in node.properties)) {
                  return;
                }
                const preElement = node.children.at(-1);
                if (preElement.tagName !== "pre") {
                  return;
                }
                preElement.properties["__withMeta__"] =
                  node.children.at(0).tagName === "div";
                preElement.properties["__rawString__"] = node.__rawString__;
                if (node.__src__) {
                  preElement.properties["__src__"] = node.__src__;
                }
                if (node.__style__) {
                  preElement.properties["__style__"] = node.__style__;
                }
              }
            });
          },
          rehypeNpmCommand,
        ],
      },
    },
    components,
  });

  // Extract metadata from frontmatter
  const metadata = (result.frontmatter as Record<string, any>) || {};

  return {
    ...metadata,
    image:
      metadata.image ||
      (process.env.NEXT_PUBLIC_APP_URL
        ? `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURI(
            metadata.title || ""
          )}&description=${encodeURI(metadata.description || "")}`
        : undefined),
    slug: document?._meta?.path ? `/${document._meta.path}` : undefined,
    slugAsParams: document?._meta?.path
      ? document._meta.path.split("/").slice(1).join("/")
      : undefined,
    body: {
      raw: rawMdx,
      code: result.content,
    },
    ...result.frontmatter,
  };
}

// logic for docs

type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

export async function getDocsForSlug(slug: string) {
  try {
    const contentPath = getDocsContentPath(slug);
    const rawMdx = await fs.readFile(contentPath, "utf-8");
    return await parseMdx<BaseMdxFrontmatter>(rawMdx);
  } catch (err) {
    console.log(err);
  }
}

export async function getDocsTocs(slug: string) {
  const contentPath = getDocsContentPath(slug);
  const rawMdx = await fs.readFile(contentPath, "utf-8");
  // captures between ## - #### can modify accordingly
  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(rawMdx)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    const slug = sluggify(headingText);
    extractedHeadings.push({
      level: headingLevel,
      text: headingText,
      href: `#${slug}`,
    });
  }
  return extractedHeadings;
}

export function getPreviousNext(path: string) {
  const index = page_routes.findIndex(({ href }) => href == `/${path}`);
  return {
    prev: page_routes[index - 1],
    next: page_routes[index + 1],
  };
}

function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}

function getDocsContentPath(slug: string) {
  return path.join(process.cwd(), "/contents/docs/", `${slug}/index.mdx`);
}

// for copying the code
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
      // console.log(node);
    }
  });
};

export type Author = {
  avatar?: string;
  handle: string;
  username: string;
  handleUrl: string;
};

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string;
  authors: Author[];
  cover: string;
};

export async function getAllBlogStaticPaths() {
  try {
    const blogFolder = path.join(process.cwd(), "/contents/blogs/");
    const res = await fs.readdir(blogFolder);
    return res.map((file) => file.split(".")[0]);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllBlogs() {
  const blogFolder = path.join(process.cwd(), "/contents/blogs/");
  const files = await fs.readdir(blogFolder);
  return await Promise.all(
    files.map(async (file) => {
      const filepath = path.join(process.cwd(), `/contents/blogs/${file}`);
      const rawMdx = await fs.readFile(filepath, "utf-8");
      return {
        ...(await parseMdx<BlogMdxFrontmatter>(rawMdx)),
        slug: file.split(".")[0],
      };
    })
  );
}

export async function getBlogForSlug(slug: string) {
  const blogs = await getAllBlogs();
  return blogs.find((it) => it.slug == slug);
}
