import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10 mx-auto w-full min-w-0 xl:border-r border-border">
      <div className="flex-[4.5] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1 className="text-3xl -mt-2">{res.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.description}
          </p>
          <div>{res.body.code}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return null;
  const { description, title } = res;
  return {
    title: title,
    description: description,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
