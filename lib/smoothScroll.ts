import { useEffect } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

interface ScrollState {
  scrollY: number;
}

const state: ScrollState = {
  scrollY: 0,
};

let isInitialized = false;

// Configuration for the smooth scrolling
const SCROLL_SPEED = 2; // Increase this value for faster scrolling
const SCROLL_SPRING_CONFIG = {
  damping: 20, // Lower value = more bouncy
  stiffness: 100, // Higher value = faster movement
  mass: 0.2, // Lower value = faster response
};

const handleWheel = (e: WheelEvent) => {
  e.preventDefault();

  const delta = e.deltaY * SCROLL_SPEED;
  const newScrollY = Math.max(
    0,
    Math.min(
      state.scrollY + delta,
      document.documentElement.scrollHeight - window.innerHeight
    )
  );
  state.scrollY = newScrollY;

  window.scrollTo({
    top: newScrollY,
    behavior: "auto",
  });
};

export const initSmoothScroll = () => {
  if (isInitialized) return;

  window.addEventListener("wheel", handleWheel, { passive: false });
  isInitialized = true;
};

export const removeSmoothScroll = () => {
  if (!isInitialized) return;

  window.removeEventListener("wheel", handleWheel);
  isInitialized = false;
};

export const useSmoothScroll = () => {
  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, SCROLL_SPRING_CONFIG);

  const transform = useTransform(
    smoothScrollY,
    (latest) => `translate3d(0, ${-latest}px, 0)`
  );

  useEffect(() => {
    initSmoothScroll();
    return () => removeSmoothScroll();
  }, []);

  return { transform, smoothScrollY };
};
