import { type Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "text-noise",
    type: "registry:component",
    title: "Text Noise",
    description: "A text animation with noise overlay",
    registryDependencies: [],
    files: [
      {
        path: "registry/ui/TextNoise.tsx",
        type: "registry:component",
      },
      {
        path: "public/noise.gif",
        type: "registry:file",
        target: "~/public/noise.gif",
      },
    ],
  },
  {
    name: "text-circle",
    type: "registry:component",
    title: "Text Circle",
    description: "A text animation with animated circle outline",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/TextCircle.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "text-underline",
    type: "registry:component",
    title: "Text Underline",
    description: "A text animation with animated underline",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/TextUnderline.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "text-highlight",
    type: "registry:component",
    title: "Text Highlight",
    description: "A text animation with marker-like highlighting",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/TextHighlight.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "text-scan",
    type: "registry:component",
    title: "Text Scan",
    description: "Text scan animation on hover",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/TextScan.tsx",
        type: "registry:component",
      },
      {
        path: "public/noise.gif",
        type: "registry:file",
        target: "~/public/noise.gif",
      },
    ],
  },
  {
    name: "sliding-badge",
    type: "registry:component",
    title: "Sliding Badge",
    description: "Animated Badge with messages sliding from left to right",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/SlidingBadge.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "pixel-card",
    type: "registry:component",
    title: "Pixel Card",
    description: "Card that reveals pixelized background on hover",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/PixelCard.tsx",
        type: "registry:component",
      },
      {
        path: "public/scripts/pixel.js",
        type: "registry:file",
        target: "~/public/scripts/pixel.js",
      },
    ],
  },
  {
    name: "rays",
    type: "registry:component",
    title: "Rays",
    description: "Light rays effect, perfect for drawing attention",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/Rays.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "hero-media",
    type: "registry:component",
    title: "Hero Media",
    description:
      "Customizable component for Hero Section capabale of displaying images or videos in a modal.",
    registryDependencies: ["motion", "dialog"],
    files: [
      {
        path: "registry/ui/HeroMedia.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "text-cubic",
    type: "registry:component",
    title: "Text Cubic",
    description:
      "Text animation with animated letters looking like rubik's cube.",
    registryDependencies: ["motion"],
    files: [
      {
        path: "registry/ui/TextCubic.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "bento-grid",
    type: "registry:component",
    title: "Bento Grid",
    description: "Bento grid with eye catching grainy gradient",
    registryDependencies: [],
    files: [
      {
        path: "registry/ui/BentoGrid.tsx",
        type: "registry:component",
      },
    ],
  },
];
