/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
  "index": {
    name: "index",
    description: "",
    type: "registry:style",
    registryDependencies: ["utils"],
    files: [],
    component: null,
    meta: undefined,
  },
  "text-noise": {
    name: "text-noise",
    description: "A text animation with noise overlay",
    type: "registry:component",
    registryDependencies: [],
    files: [{
      path: "registry/ui/TextNoise.tsx",
      type: "registry:component",
      target: ""
    },{
      path: "public/noise.gif",
      type: "registry:file",
      target: "~/public/noise.gif"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/TextNoise.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-circle": {
    name: "text-circle",
    description: "A text animation with animated circle outline",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/TextCircle.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/TextCircle.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-underline": {
    name: "text-underline",
    description: "A text animation with animated underline",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/TextUnderline.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/TextUnderline.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-highlight": {
    name: "text-highlight",
    description: "A text animation with marker-like highlighting",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/TextHighlight.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/TextHighlight.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-scan": {
    name: "text-scan",
    description: "Text scan animation on hover",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/TextScan.tsx",
      type: "registry:component",
      target: ""
    },{
      path: "public/noise.gif",
      type: "registry:file",
      target: "~/public/noise.gif"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/TextScan.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sliding-badge": {
    name: "sliding-badge",
    description: "Animated Badge with messages sliding from left to right",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/SlidingBadge.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/SlidingBadge.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "pixel-card": {
    name: "pixel-card",
    description: "Card that reveals pixelized background on hover",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/PixelCard.tsx",
      type: "registry:component",
      target: ""
    },{
      path: "public/scripts/pixel.js",
      type: "registry:file",
      target: "~/public/scripts/pixel.js"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/PixelCard.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "rays": {
    name: "rays",
    description: "Light rays effect, perfect for drawing attention",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/Rays.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/Rays.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "hero-media": {
    name: "hero-media",
    description: "Customizable component for Hero Section capabale of displaying images or videos in a modal.",
    type: "registry:component",
    registryDependencies: ["dialog"],
    files: [{
      path: "registry/ui/HeroMedia.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/HeroMedia.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-cubic": {
    name: "text-cubic",
    description: "Text animation with animated letters looking like rubik's cube.",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/TextCubic.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/TextCubic.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bento-grid": {
    name: "bento-grid",
    description: "Bento grid with eye catching grainy gradient",
    type: "registry:component",
    registryDependencies: [],
    files: [{
      path: "registry/ui/BentoGrid.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/BentoGrid.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "macbook": {
    name: "macbook",
    description: "Fully responsive Macbook made react and tailwindcss",
    type: "registry:component",
    registryDependencies: undefined,
    files: [{
      path: "registry/ui/Macbook.tsx",
      type: "registry:component",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/ui/Macbook.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-cubic-example": {
    name: "text-cubic-example",
    description: "Text animation with animated letters looking like rubik's cube.",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/text-cubic.json"],
    files: [{
      path: "registry/example/text-cubic-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/text-cubic-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-underline-example": {
    name: "text-underline-example",
    description: "A text animation with animated underline",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/text-underline.json"],
    files: [{
      path: "registry/example/text-underline-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/text-underline-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-circle-example": {
    name: "text-circle-example",
    description: "A text animation with animated circle outline",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/text-circle.json"],
    files: [{
      path: "registry/example/text-circle-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/text-circle-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-highlight-example": {
    name: "text-highlight-example",
    description: "A text animation with marker-like highlighting",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/text-highlight.json"],
    files: [{
      path: "registry/example/text-highlight-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/text-highlight-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-noise-example": {
    name: "text-noise-example",
    description: "A text animation with noise overlay",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/text-noise.json"],
    files: [{
      path: "registry/example/text-noise-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/text-noise-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "text-scan-example": {
    name: "text-scan-example",
    description: "Text scan animation on hover",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/text-scan.json"],
    files: [{
      path: "registry/example/text-scan-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/text-scan-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bento-grid-example": {
    name: "bento-grid-example",
    description: "Bento grid with eye catching grainy gradient",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/bento-grid.json"],
    files: [{
      path: "registry/example/bento-grid-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/bento-grid-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sliding-badge-example": {
    name: "sliding-badge-example",
    description: "Animated Badge with messages sliding from left to right",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/sliding-badge.json"],
    files: [{
      path: "registry/example/sliding-badge-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/sliding-badge-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "hero-media-example": {
    name: "hero-media-example",
    description: "Customizable component for Hero Section capabale of displaying images or videos in a modal.",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/hero-media.json"],
    files: [{
      path: "registry/example/hero-media-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/hero-media-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "rays-example": {
    name: "rays-example",
    description: "Light rays effect, perfect for drawing attention",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/rays.json"],
    files: [{
      path: "registry/example/rays-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/rays-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "pixel-card-example": {
    name: "pixel-card-example",
    description: "Card that reveals pixelized background on hover",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/pixel-card.json"],
    files: [{
      path: "registry/example/pixel-card-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/pixel-card-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "macbook-example": {
    name: "macbook-example",
    description: "Fully responsive Macbook made react and tailwindcss",
    type: "registry:example",
    registryDependencies: ["https://optiqui.com/r/macbook.json"],
    files: [{
      path: "registry/example/macbook-example.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/example/macbook-example.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  }