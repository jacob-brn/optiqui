"use client";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";

type HeroMediaProps =
  | {
      type: "image";
      iframe?: never;
      thumbnailUrl: string;
      videoUrl?: never;
      className?: string;
      alt?: string;
      buttonTitle?: never;
      buttonDescription?: never;
      PopoverTitle?: never;
      PopoverDescription?: never;
    }
  | {
      type: "video";
      iframe?: boolean;
      thumbnailUrl: string;
      videoUrl: string;
      className?: string;
      alt?: string;
      buttonTitle: string;
      buttonDescription: string;
      PopoverTitle?: string;
      PopoverDescription?: string;
    };

const VideoPopover = ({
  children,
  title,
  description,
  iframe = true,
  videoUrl,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  iframe?: boolean;
  videoUrl: string;
}): JSX.Element => {
  return (
    <Dialog>
      <DialogOverlay className="bg-transparent backdrop-blur-md bg-gradient-to-br from-background/30 to-secondary/30" />
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-4xl aspect-video grid gap-y-6 bg-transparent border-none [&_button]:hidden">
        {/* delete this: "[&_button]:hidden" to show exit buttons */}
        <DialogClose className="w-min h-min bg-background/90 rounded-full p-1 border border-border">
          <X className="w-6 h-6" />
        </DialogClose>
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl text-gray-50 font-semibold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        {iframe ? (
          <iframe
            src={videoUrl}
            allowFullScreen
            loading="lazy"
            className="w-full aspect-video rounded-lg"
          />
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full aspect-video rounded-lg"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

const HeroMedia = ({
  type,
  iframe,
  thumbnailUrl,
  videoUrl,
  className,
  alt = "Image showcasing product",
  buttonTitle,
  buttonDescription,
  PopoverTitle,
  PopoverDescription,
}: HeroMediaProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="relative">
      {type === "image" ? (
        <Image
          src={thumbnailUrl}
          alt={alt}
          className={cn("rounded-xl relative z-10", className)}
          width={9999}
          height={9999}
          quality={100}
        />
      ) : (
        <div className="grid items-center justify-center">
          <Image
            src={thumbnailUrl}
            alt={alt}
            className={cn("rounded-xl relative z-10", className)}
            width={9999}
            height={9999}
            quality={100}
          />
          <VideoPopover
            title={PopoverTitle || ""}
            description={PopoverDescription || ""}
            videoUrl={videoUrl}
            iframe={iframe}
          >
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
              initial={false}
            >
              <div
                className="bg-background/80 border border-border rounded-full flex items-center justify-center group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center p-4">
                  <Play
                    className="w-9 h-9 text-foreground"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                  <AnimatePresence mode="wait">
                    {isHovered && (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{
                          width: "auto",
                          opacity: 1,
                          transition: {
                            width: {
                              type: "spring",
                              stiffness: 150,
                              damping: 18,
                            },
                            opacity: { duration: 0.2 },
                          },
                        }}
                        exit={{
                          width: 0,
                          opacity: 0,
                          transition: {
                            width: {
                              type: "spring",
                              stiffness: 150,
                              damping: 18,
                            },
                            opacity: { duration: 0.2, delay: 0.1 },
                          },
                        }}
                      >
                        <div className="grid grid-flow-row auto-rows-max ml-3 whitespace-nowrap pr-3 select-none text-left">
                          <span className="text-sm font-medium text-foreground">
                            {buttonTitle}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {buttonDescription}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </VideoPopover>
        </div>
      )}
    </div>
  );
};

export default HeroMedia;
