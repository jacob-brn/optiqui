"use client";

import { getDocsTocs } from "@/lib/markdown";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Props = { data: Awaited<ReturnType<typeof getDocsTocs>> };

export default function TocObserver({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const headingsRef = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    // Cleanup function for the previous observer
    const cleanupObserver = () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        headingsRef.current.set(entry.target.id, entry);
      });

      // Find the first visible heading
      const visibleHeadings = Array.from(headingsRef.current.values()).filter(
        (entry) => entry.isIntersecting
      );

      if (visibleHeadings.length > 0) {
        // Sort by Y position to get the topmost visible heading
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => a.boundingClientRect.y - b.boundingClientRect.y
        );

        const activeHeading = sortedVisibleHeadings[0];
        setActiveId(activeHeading.target.id);
      } else {
        // If no heading is visible, find the closest one above the viewport
        const entries = Array.from(headingsRef.current.values());
        const aboveViewport = entries.filter(
          (entry) => entry.boundingClientRect.y < 0
        );

        if (aboveViewport.length > 0) {
          const closest = aboveViewport.reduce((prev, curr) => {
            return prev.boundingClientRect.y > curr.boundingClientRect.y
              ? prev
              : curr;
          });
          setActiveId(closest.target.id);
        }
      }
    };

    // Initialize observer with more precise options
    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      // Adjust rootMargin to account for any fixed headers
      rootMargin: "-80px 0px -80% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    // Observe all heading elements
    const elements = data.map((item) =>
      document.getElementById(item.href.slice(1))
    );

    elements.forEach((el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    // Handle initial scroll position
    const handleInitialScroll = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveId(hash);
      }
    };

    handleInitialScroll();

    // Cleanup on unmount
    return () => {
      cleanupObserver();
      headingsRef.current.clear();
    };
  }, [data]);

  // Handle manual click on TOC links
  const handleLinkClick = (href: string) => {
    const id = href.slice(1);
    setActiveId(id);
  };

  return (
    <div className="flex flex-col gap-2.5 text-sm dark:text-stone-300/85 text-stone-800 ml-0.5">
      {data.map(({ href, level, text }) => {
        const isActive = activeId === href.slice(1);
        return (
          <Link
            key={href}
            href={href}
            onClick={() => handleLinkClick(href)}
            className={clsx(
              "transition-colors duration-150 hover:text-primary",
              {
                "pl-0": level === 2,
                "pl-4": level === 3,
                "pl-8": level === 4,
                "font-medium text-primary": isActive,
              }
            )}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
}
