import FeatureCard from "../FeatureCard";
import { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";
const LockCard = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isHovered) {
      animate([
        [
          ".lock-card",
          { marginTop: "3rem" },
          {
            ease: "easeInOut",
            duration: 0.5,
            type: "tween",
          },
        ],
        [
          ".card-outline",
          {
            strokeOpacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          },
          {
            ease: "easeInOut",
            duration: 1,
            delay: 0.1,
          },
        ],
        [
          ".lock",
          { rotate: 90 },
          {
            ease: "easeInOut",
            duration: 0.5,
            type: "tween",
          },
        ],
      ]);
    } else {
      animate([
        [
          ".lock-card",
          { marginTop: "4rem" },
          {
            ease: "easeInOut",
            duration: 0.8,
            at: 0,
          },
        ],
        [
          ".card-outline",
          {
            strokeOpacity: 0,
            boxShadow: "3px 3px 3px 3px rgba(255, 255, 255, 1)",
          },
          {
            ease: "easeInOut",
            duration: 0.8,
          },
        ],
        [
          ".lock",
          { rotate: 0 },
          {
            ease: "easeInOut",
            duration: 0.5,
            type: "tween",
            delay: 0.2,
          },
        ],
      ]);
    }
  }, [isHovered, animate]);

  return (
    <FeatureCard
      heading="Completely Free"
      description="Optiq UI is free for everyone to use and build on. There is no paywall or subscription required."
      handleMouseEnterProp={() => setIsHovered(true)}
      handleMouseLeaveProp={() => setIsHovered(false)}
      className="col-span-2"
      content={
        <div className="w-full p-4 overflow-hidden" ref={scope}>
          <div className="relative w-full h-[200px] mt-12 lg:mt-16 lock-card">
            <svg
              viewBox="0 0 317 214"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-min"
            >
              <path
                d="M21.6502 2.38322L2.30334 22.0051C0.827423 23.502 0 25.5197 0 27.6219L0 214L317 214L317 27.6219C317 25.5197 316.173 23.502 314.697 22.0051L295.35 2.38322C293.846 0.858434 291.794 0 289.653 0L27.3468 0C25.2055 0 23.1536 0.858435 21.6502 2.38322Z"
                fill="rgb(38,38,38)"
                stroke-opacity="0"
                className="h-[10px] card-outline stroke-gray-400 stroke-[3px] dark:stroke-white dark:stroke-[0.5px]"
              ></path>
            </svg>
            <div className="absolute inset-0 grid grid-flow-row justify-center content-center">
              <div className="flex items-center justify-center absolute inset-0 top-0 overflow-hidden [mask:linear-gradient(black,transparent)]"></div>
              <div className="absolute justify-self-center -top-5 z-10 size-[4.5rem] rounded-full bg-gray-950 p-1 shadow-[0_1px_0_hsl(var(--foreground)/5%)] [&_div]:rounded-full">
                <div className="relative size-full overflow-hidden bg-gradient-to-b from-muted to-muted/90 shadow-[inset_0_1px_0_hsl(var(--muted-foreground)/50%)] lock">
                  <div className="absolute inset-4 bg-gradient-to-b from-muted to-muted/50 shadow-[0_1px_0_hsl(var(--foreground)/2%),0-1px_0_hsl(var(--foreground)/6%),0-2px_4px_hsl(var(--foreground)/6%),inset_2px_3px_3px_hsl(var(--background)/100)]"></div>
                  <div className="relative z-10 size-full bg-[repeating-radial-gradient(hsl(var(--foreground)/5%)_0.125rem,transparent_0.25rem)]">
                    <div className="flex size-full items-center justify-center drop-shadow-[0_1px_0_hsl(var(--foreground)/5%)]">
                      <div>
                        <svg
                          width="8"
                          height="36"
                          viewBox="0 0 8 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-gray-950"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 0C1.34315 0 0 1.34315 0 3V19.5858C0 19.851 0.105357 20.1054 0.292893 20.2929L3.29289 23.2929C3.68342 23.6834 3.68342 24.3166 3.29289 24.7071L0.292893 27.7071C0.105357 27.8946 0 28.149 0 28.4142V33C0 34.6569 1.34315 36 3 36H5C6.65685 36 8 34.6569 8 33V16.4142C8 16.149 7.89464 15.8946 7.70711 15.7071L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L7.70711 8.29289C7.89464 8.10536 8 7.851 8 7.58579V3C8 1.34315 6.65685 0 5 0H3Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 shadow-[inset2.5px-2.5px-0-2px_theme(colors.white/8%]"></div>
                  <div className="absolute inset-0 shadow-[inset-2.5px_2.5px0-2px_theme(colors.white/8%)]"></div>
                  <div className="absolute left-1/2 top-0 h-full w-10 bg-[linear-gradient(90deg,transparent,hsl(var(--foreground)/40%)_30%,white,hsl(var(--foreground)/50%)_70%,transparent)] opacity-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default LockCard;
