"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AIButton = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.button
      className="bg-white text-black px-6 py-2 rounded-3xl font-semibold tracking-tight overflow-hidden relative flex flex-row hover:bg-white/90"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover="hover"
      layout
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {isHovered ? (
          <motion.div
            key="ai"
            initial={{ x: "-200%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-200%", opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-6"
            >
              <defs>
                <linearGradient
                  id="starGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#7c2d12" /> {/* yellow-950 */}
                  <stop offset="50%" stopColor="#854d0e" /> {/* yellow-800 */}
                  <stop offset="100%" stopColor="#ca8a04" /> {/* yellow-600 */}
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="url(#starGradient)"
                stroke="url(#starGradient)"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="build"
            initial={{ x: "200%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "200%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-clip text-transparent bg-clip-text bg-gradient-to-b from-yellow-950 via-yellow-800 to-yellow-600"
          >
            Build
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default AIButton;
