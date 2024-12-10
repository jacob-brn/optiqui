import FeatureCard from "../FeatureCard";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";

const CursorHoverCard = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isHovered) {
      animate([
        [
          ".pointer",
          {
            top: "50%",
            right: "50%",
          },
          {
            ease: "easeInOut",
            duration: 1,
          },
        ],
        [".input", { rotate: 0 }, { ease: "easeInOut", duration: 0.5 }],
      ]);
    } else {
      animate([
        [
          ".pointer",
          { top: "170%", right: "0%" },
          { ease: "easeInOut", duration: 0.75 },
        ],
        [".input", { rotate: 4 }, { ease: "easeInOut", duration: 0.5 }],
      ]);
    }
  }, [isHovered, animate]);

  return (
    <FeatureCard
      heading="Animated Components are hard"
      description="Optiq UI makes it easy."
      handleMouseEnterProp={() => setIsHovered(true)}
      handleMouseLeaveProp={() => setIsHovered(false)}
      content={
        <div
          className="w-full flex justify-self-start self-center cursor-pointer"
          ref={scope}
        >
          <div className="w-full border-neutral-400 dark:border-border border border-dashed relative">
            <Input
              type="text"
              readOnly
              value="Hover me"
              className="w-full bg-muted text-foreground rotate-[4deg] pointer-events-none input"
            />
            <svg
              width="31"
              height="36"
              viewBox="-1 -1 31 36"
              fill="none"
              id="svg1830461565_3663"
              className="absolute pointer top-[170%] right-[-5%]"
            >
              <g filter="url(#svg1830461565_3663_filter0_dddddd_4276_1053)">
                <path
                  d="M4.2864 28.8786L1.04243 8.57167C0.775327 6.89961 2.5772 5.67289 4.03493 6.53437L22.4013 17.3884C24.0139 18.3414 23.549 20.7897 21.6993 21.0852L13.9788 22.3185C13.455 22.4022 12.9859 22.6905 12.6747 23.1201L7.88096 29.7365C6.83555 31.1794 4.56748 30.6381 4.2864 28.8786Z"
                  fill="black"
                  style={{ fillOpacity: "1" }}
                ></path>
                <path
                  d="M4.2864 28.8786L1.04243 8.57167C0.775327 6.89961 2.5772 5.67289 4.03493 6.53437L22.4013 17.3884C24.0139 18.3414 23.549 20.7897 21.6993 21.0852L13.9788 22.3185C13.455 22.4022 12.9859 22.6905 12.6747 23.1201L7.88096 29.7365C6.83555 31.1794 4.56748 30.6381 4.2864 28.8786Z"
                  stroke="white"
                  style={{ strokeOpacity: "1" }}
                  className="stroke-white"
                ></path>
              </g>
              <defs>
                <filter
                  id="svg1830461565_3663_filter0_dddddd_4276_1053"
                  x="-6.48438"
                  y="2.75"
                  width="37.3711"
                  height="39.3145"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feMorphology
                    radius="1"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_4276_1053"
                  ></feMorphology>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4276_1053"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_4276_1053"
                    result="effect2_dropShadow_4276_1053"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1.5"></feOffset>
                  <feGaussianBlur stdDeviation="0.75"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_4276_1053"
                    result="effect3_dropShadow_4276_1053"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1.25"></feOffset>
                  <feGaussianBlur stdDeviation="0.625"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect3_dropShadow_4276_1053"
                    result="effect4_dropShadow_4276_1053"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="0.75"></feOffset>
                  <feGaussianBlur stdDeviation="0.375"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect4_dropShadow_4276_1053"
                    result="effect5_dropShadow_4276_1053"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="0.25"></feOffset>
                  <feGaussianBlur stdDeviation="0.125"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="effect5_dropShadow_4276_1053"
                    result="effect6_dropShadow_4276_1053"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect6_dropShadow_4276_1053"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      }
    />
  );
};

export default CursorHoverCard;
