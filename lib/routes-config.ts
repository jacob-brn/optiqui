// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
  badges?: string[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Templates",
    href: "/templates",
    noLink: true,
    items: [{ title: "SaaS", href: "/saas", badges: ["Pro"] }],
  },
  {
    title: "Components",
    href: "/components",
    noLink: true,
    items: [
      { title: "Sliding Badge", href: "/sliding_badge" },
      {
        title: "Text Cubic",
        href: "/text_cubic",
      },
      {
        title: "Hero Media",
        href: "/hero_media",
      },
      {
        title: "Pixel Card",
        href: "/pixel_card",
      },
      {
        title: "Text Underline",
        href: "/text_underline",
      },
      {
        title: "Text Circle",
        href: "/text_circle",
      },
      {
        title: "Text Highlight",
        href: "/text_highlight",
      },
      {
        title: "Text Noise",
        href: "/text_noise",
      },
      {
        title: "Rays",
        href: "/rays",
        badges: ["New"],
      },
      {
        title: "Text Scan",
        href: "/text_scan",
        badges: ["New"],
      },
      {
        title: "Bento Grid",
        href: "/bento_grid",
        badges: ["New"],
      },
      {
        title: "Macbook",
        href: "/macbook",
        badges: ["New"],
      },
      {
        title: "AI Button",
        href: "/ai_button",
        badges: ["New"],
      },
    ],
  },
  // {
  //   title: "Headers",
  //   href: "/headers",
  //   noLink: true,
  //   items: [{ title: "Header 1", href: "/1" }],
  // },
  // {
  //   title: "Hero Sections",
  //   href: "/hero-sections",
  //   noLink: true,
  //   items: [{ title: "Hero Section 1", href: "/1" }],
  // },
  // {
  //   title: "Features Sectionts",
  //   href: "/features",
  //   noLink: true,
  //   items: [{ title: "Features Section 1", href: "/1" }],
  // },
  // {
  //   title: "Trusted By Sections",
  //   href: "/trusted-by",
  //   noLink: true,
  //   items: [{ title: "Trusted By Section 1", href: "/1" }],
  // },
  // {
  //   title: "Pricing Sections",
  //   href: "/pricing",
  //   noLink: true,
  //   items: [{ title: "Pricing Section 1", href: "/1" }],
  // },
  // {
  //   title: "FAQs Sections",
  //   href: "/faqs",
  //   noLink: true,
  //   items: [{ title: "FAQ Section 1", href: "/1" }],
  // },
  // {
  //   title: "Footers",
  //   href: "/footers",
  //   noLink: true,
  //   items: [{ title: "Footer 1", href: "/1" }],
  // },
];

type Page = { title: string; href: string };

export function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
