"use client";
import {
  TbBrightnessDown,
  TbBrightnessUp,
  TbCaretDownFilled,
  TbCaretLeftFilled,
  TbCaretRightFilled,
  TbCaretUpFilled,
  TbChevronUp,
  TbCommand,
  TbMicrophone,
  TbMoon,
  TbPlayerSkipForward,
  TbPlayerTrackNext,
  TbPlayerTrackPrev,
  TbSearch,
  TbTable,
  TbVolume,
  TbVolume2,
  TbVolume3,
  TbWorld,
} from "react-icons/tb";
import { PiOption } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState, useEffect, useMemo } from "react";

interface keyType {
  key: string;
  special?: boolean;
  icon?: React.ReactNode;
  align?: "start" | "center" | "end";
  width?: string;
  content?: React.ReactNode;
  topChar?: string;
  type?: string;
  topRight?: string | React.ReactNode;
  topLeft?: string | React.ReactNode;
  bottomLeft?: string | React.ReactNode;
}

const keys: Array<keyType[]> = [
  [
    { key: "esc", special: true, align: "start", width: "w-10" },
    { key: "F1", icon: <TbBrightnessDown className="h-[6px] w-[6px]" /> },
    { key: "F2", icon: <TbBrightnessUp className="h-[6px] w-[6px]" /> },
    { key: "F3", icon: <TbTable className="h-[6px] w-[6px]" /> },
    { key: "F4", icon: <TbSearch className="h-[6px] w-[6px]" /> },
    { key: "F5", icon: <TbMicrophone className="h-[6px] w-[6px]" /> },
    { key: "F6", icon: <TbMoon className="h-[6px] w-[6px]" /> },
    { key: "F7", icon: <TbPlayerTrackPrev className="h-[6px] w-[6px]" /> },
    { key: "F8", icon: <TbPlayerSkipForward className="h-[6px] w-[6px]" /> },
    { key: "F9", icon: <TbPlayerTrackNext className="h-[6px] w-[6px]" /> },
    { key: "F10", icon: <TbVolume className="h-[6px] w-[6px]" /> },
    { key: "F11", icon: <TbVolume2 className="h-[6px] w-[6px]" /> },
    { key: "F12", icon: <TbVolume3 className="h-[6px] w-[6px]" /> },
    {
      key: "power",
      content: (
        <div className="h-4 w-4 rounded-full bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
          <div className="bg-black h-full w-full rounded-full" />
        </div>
      ),
    },
  ],
  [
    { key: "`", topChar: "~" },
    { key: "1", topChar: "!" },
    { key: "2", topChar: "@" },
    { key: "3", topChar: "#" },
    { key: "4", topChar: "$" },
    { key: "5", topChar: "%" },
    { key: "6", topChar: "^" },
    { key: "7", topChar: "&" },
    { key: "8", topChar: "*" },
    { key: "9", topChar: "(" },
    { key: "0", topChar: ")" },
    { key: "_", topChar: "—" },
    { key: "=", topChar: "+" },
    { key: "delete", special: true, align: "end", width: "w-10" },
  ],
  [
    { key: "tab", special: true, align: "start", width: "w-10" },
    { key: "Q" },
    { key: "W" },
    { key: "E" },
    { key: "R" },
    { key: "T" },
    { key: "Y" },
    { key: "U" },
    { key: "I" },
    { key: "O" },
    { key: "P" },
    { key: "[", topChar: "{" },
    { key: "]", topChar: "}" },
    { key: "\\", topChar: "|" },
  ],
  [
    { key: "caps lock", special: true, align: "start", width: "w-[2.8rem]" },
    { key: "A" },
    { key: "S" },
    { key: "D" },
    { key: "F" },
    { key: "G" },
    { key: "H" },
    { key: "J" },
    { key: "K" },
    { key: "L" },
    { key: ";", topChar: ":" },
    { key: "'", topChar: '"' },
    { key: "return", special: true, align: "end", width: "w-[2.85rem]" },
  ],
  [
    { key: "shift", special: true, align: "start", width: "w-[3.65rem]" },
    { key: "Z" },
    { key: "X" },
    { key: "C" },
    { key: "V" },
    { key: "B" },
    { key: "N" },
    { key: "M" },
    { key: ",", topChar: "<" },
    { key: ".", topChar: ">" },
    { key: "/", topChar: "?" },
    { key: "shift", special: true, align: "end", width: "w-[3.65rem]" },
  ],
  [
    {
      key: "fn",
      type: "modifier",
      topRight: "fn",
      bottomLeft: <TbWorld className="h-[6px] w-[6px]" />,
    },
    {
      key: "control",
      type: "modifier",
      topRight: <TbChevronUp className="h-[6px] w-[6px]" />,
      bottomLeft: "control",
    },
    {
      key: "option",
      type: "modifier",
      topRight: <PiOption className="h-[6px] w-[6px]" />,
      bottomLeft: "option",
    },
    {
      key: "command",
      type: "modifier",
      topRight: <TbCommand className="h-[6px] w-[6px]" />,
      bottomLeft: "command",
      width: "w-8",
    },
    {
      key: "space",
      width: "w-[8.2rem]",
      content: <></>,
    },
    {
      key: "command2",
      type: "modifier",
      topLeft: <TbCommand className="h-[6px] w-[6px]" />,
      bottomLeft: "command",
      width: "w-8",
    },
    {
      key: "option2",
      type: "modifier",
      topLeft: <PiOption className="h-[6px] w-[6px]" />,
      bottomLeft: "option",
    },
    {
      key: "arrows",
      type: "arrowKeys",
    },
  ],
];

const Macbook = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="w-full flex items-center justify-center max-w-full">
      <div
        className={cn(
          "w-full min-w-[32rem] max-w-[32rem] transform scale-[0.5] sm:scale-60 md:scale-100 lg:scale-105",
          className
        )}
        style={{
          transformOrigin: "center center",
        }}
      >
        <div className="relative [perspective:2500px] w-full h-[22rem] mx-auto">
          <div className="h-[22rem] w-full bg-[#403e41] dark:bg-[#6a6b6f] rounded-sm mx-auto absolute bottom-0 left-0 right-0 z-10">
            <div className="flex relative gap-x-1 py-4">
              <Speakers />
              <Keypad />
              <Speakers />
            </div>
            <div
              className="w-[40%] mx-auto h-32 rounded-xl my-1"
              style={{ boxShadow: "0px 0px 1px 1px #00000030 inset" }}
            ></div>
            <div className="h-2 w-28 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-neutral-800 to-neutral-950 rounded-tr-3xl rounded-tl-3xl" />
          </div>
          <motion.div
            className="absolute bottom-[22rem] left-0 right-0 z-20 w-full mx-auto"
            style={{
              transformOrigin: "bottom",
              transformStyle: "preserve-3d",
            }}
            initial={{ rotateX: -180 }}
            animate={{ rotateX: isOpen ? -45 : -180 }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className="h-[22rem] w-full rounded-t-lg p-[2px] relative after:[content:''] after:right-0 after:bottom-0 after:absolute after:top-0 after:left-0 after:bg-[#403e41] after:dark:bg-[#6a6b6f] after:[backface-visibility:hidden] after:[transform:rotateY(180deg)_rotateZ(180deg)] after:[transform-style:preserve-3d] after:rounded-t-lg after:rounded-b-lg after:[background-image:url('/assets/apple.svg')] after:bg-no-repeat after:[background-position:center] after:[background-size:60px]"
              style={{
                WebkitTransform: "translate3d(0, 0, 0)",
                transform: "translate3d(0, 0, 0)",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="absolute inset-0 rounded-t-lg p-[6px] pointer-events-none">
                <div
                  className="absolute inset-0 bg-black rounded-md flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow: "0 0 0 1px rgba(100, 100, 100, 0.3)",
                    border: "1px solid rgba(60, 60, 60, 0.8)",
                  }}
                >
                  <motion.div
                    className="w-full h-full flex items-center justify-center p-1 pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      transition: { delay: 1.2, duration: 0.8 },
                    }}
                    style={{
                      transform: "translateZ(0)",
                    }}
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="h-[3px] w-[95%] mx-auto bg-[#2A2A2A]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Keypad = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKeys((prev) => {
        const updated = new Set(prev);
        updated.add(e.key.toLowerCase());
        return updated;
      });
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setPressedKeys((prev) => {
        const updated = new Set(prev);
        updated.delete(e.key.toLowerCase());
        return updated;
      });
    };

    // Add event listeners
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const getKeyClassName = (keyData: keyType) => {
    let className = "";

    if (keyData.width) {
      className += ` ${keyData.width}`;
    }

    if (keyData.align === "start") {
      className += " items-end justify-start pl-[4px] pb-[2px]";
    } else if (keyData.align === "end") {
      className += " items-end justify-end pr-[4px] pb-[2px]";
    }

    if (keyData.type === "modifier") {
      className += " ";
    }

    return className.trim();
  };

  const getKeyChildrenClassName = (keyData: keyType) => {
    let className = "";

    if (keyData.align === "start") {
      className += " items-start";
    } else if (keyData.align === "end") {
      className += " items-end";
    }

    if (keyData.type === "modifier") {
      className += " h-full justify-between py-[4px]";
    }

    return className.trim();
  };

  const isKeyPressed = (keyData: keyType) => {
    // Map keyboard UI keys to their corresponding keyboard event keys
    const keyMapping: Record<string, string[]> = {
      command: ["meta", "command"],
      command2: ["meta", "command"],
      option: ["alt", "option"],
      option2: ["alt", "option"],
      shift: ["shift"],
      control: ["control", "ctrl"],
      ctrl: ["control", "ctrl"],
      esc: ["escape"],
      space: [" ", "spacebar"],
      enter: ["enter", "return"],
      return: ["enter", "return"],
      backspace: ["backspace"],
      delete: ["delete", "backspace"],
      tab: ["tab"],
      arrowup: ["arrowup"],
      arrowdown: ["arrowdown"],
      arrowleft: ["arrowleft"],
      arrowright: ["arrowright"],
      "caps lock": ["capslock"],
      f1: ["f1"],
      f2: ["f2"],
      f3: ["f3"],
      f4: ["f4"],
      f5: ["f5"],
      f6: ["f6"],
      f7: ["f7"],
      f8: ["f8"],
      f9: ["f9"],
      f10: ["f10"],
      f11: ["f11"],
      f12: ["f12"],
    };

    const keyToCheck = keyData.key.toLowerCase();
    if (keyMapping[keyToCheck]) {
      return keyMapping[keyToCheck].some((k) => pressedKeys.has(k));
    }
    return pressedKeys.has(keyToCheck);
  };

  const renderedKeys = useMemo(() => {
    return keys.map((row, rowIndex) => (
      <KeyboardRow key={`row-${rowIndex}`}>
        {row.map((keyData, keyIndex) => {
          if (keyData.key === "command2") {
            return (
              <KeyboardKey
                key={`key-${rowIndex}-${keyIndex}`}
                className={keyData.width}
                childrenClassName="h-full justify-between py-[4px]"
                isPressed={isKeyPressed(keyData)}
              >
                <div className="flex justify-start w-full pl-1">
                  <TbCommand className="h-[6px] w-[6px]" />
                </div>
                <div className="flex justify-start w-full pl-1">
                  <span className="block">command</span>
                </div>
              </KeyboardKey>
            );
          }

          if (keyData.key === "option2") {
            return (
              <KeyboardKey
                key={`key-${rowIndex}-${keyIndex}`}
                className={keyData.width}
                childrenClassName="h-full justify-between py-[4px]"
                isPressed={isKeyPressed(keyData)}
              >
                <div className="flex justify-start w-full pl-1">
                  <PiOption className="h-[6px] w-[6px]" />
                </div>
                <div className="flex justify-start w-full pl-1">
                  <span className="block">option</span>
                </div>
              </KeyboardKey>
            );
          }

          if (keyData.type === "arrowKeys") {
            const upPressed = pressedKeys.has("arrowup");
            const downPressed = pressedKeys.has("arrowdown");
            const leftPressed = pressedKeys.has("arrowleft");
            const rightPressed = pressedKeys.has("arrowright");

            return (
              <div
                key={`key-${rowIndex}-${keyIndex}`}
                className="w-[5rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center"
              >
                <KeyboardKey className="w-6 h-3" isPressed={upPressed}>
                  <TbCaretUpFilled className="h-[6px] w-[6px]" />
                </KeyboardKey>
                <div className="flex">
                  <KeyboardKey className="w-6 h-3" isPressed={leftPressed}>
                    <TbCaretLeftFilled className="h-[6px] w-[6px]" />
                  </KeyboardKey>
                  <KeyboardKey className="w-6 h-3" isPressed={downPressed}>
                    <TbCaretDownFilled className="h-[6px] w-[6px]" />
                  </KeyboardKey>
                  <KeyboardKey className="w-6 h-3" isPressed={rightPressed}>
                    <TbCaretRightFilled className="h-[6px] w-[6px]" />
                  </KeyboardKey>
                </div>
              </div>
            );
          }

          return (
            <KeyboardKey
              key={`key-${rowIndex}-${keyIndex}`}
              className={getKeyClassName(keyData)}
              childrenClassName={getKeyChildrenClassName(keyData)}
              isPressed={isKeyPressed(keyData)}
            >
              {keyData.type === "modifier" ? (
                <>
                  <div className="flex justify-end w-full pr-1">
                    {keyData.topRight}
                  </div>
                  <div className="flex justify-start w-full pl-1">
                    <span className="block">{keyData.bottomLeft}</span>
                  </div>
                </>
              ) : keyData.content ? (
                keyData.content
              ) : keyData.icon ? (
                <>
                  {keyData.icon}
                  <span className="inline-block mt-1">{keyData.key}</span>
                </>
              ) : keyData.topChar ? (
                <>
                  <span className="block">{keyData.topChar}</span>
                  <span className="block">{keyData.key}</span>
                </>
              ) : (
                <span className="block">{keyData.key}</span>
              )}
            </KeyboardKey>
          );
        })}
      </KeyboardRow>
    ));
  }, [pressedKeys]);

  return (
    <div className="mx-auto w-[80%] bg-transparent/10 h-full rounded-sm">
      <div className="h-full roundend-md mx-1 p-1">{renderedKeys}</div>
    </div>
  );
};

const KeyboardKey = ({
  className,
  children,
  childrenClassName,
  isPressed,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  isPressed?: boolean;
}) => {
  return (
    <div
      className={cn(
        "p-[.5px] rounded-[3px] group hover:shadow-neutral-800 cursor-auto select-none",
        !isPressed && "shadow-sm shadow-neutral-500 dark:shadow-neutral-300",
        isPressed && "shadow-sm shadow-neutral-800"
      )}
    >
      <div
        className={cn(
          "h-6 w-6 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[2.5px] flex items-center justify-center cborder-t-[1px] border-neutral-600 [box-shadow:0px_10px_30px_-30px_#000_inset] group-hover:from-neutral-900 group-hover:to-neutral-950 group-hover:[box-shadow:0px_1px_3px_0px_rgba(0,0,0,0.8)_inset,0px_0px_2px_1px_rgba(0,0,0,0.3)_inset] group-hover:translate-y-[0.25px] group-hover:scale-[0.98]",
          !isPressed &&
            "bg-gradient-to-b from-neutral-800 to-neutral-900 border-b-[0.0px] border-t-[1px] border-neutral-600 [box-shadow:0px_10px_30px_-30px_#000_inset]",
          // Pressed state
          isPressed &&
            "bg-gradient-to-b from-neutral-900 to-neutral-950 border-t-[0.25px] [box-shadow:0px_1px_3px_0px_rgba(0,0,0,0.8)_inset,0px_0px_2px_1px_rgba(0,0,0,0.3)_inset] translate-y-[0.25px] scale-[0.98]",
          className
        )}
      >
        <div
          className={cn(
            "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
            childrenClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const KeyboardRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-[2px] mb-[2px] w-full shrink-0">{children}</div>
  );
};

const Speakers = () => {
  return (
    <div className="mx-auto w-[10%] overflow-hidden h-full">
      <div
        className="flex px-[0.5px] gap-[2px] mt-2 h-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
};

export default Macbook;
