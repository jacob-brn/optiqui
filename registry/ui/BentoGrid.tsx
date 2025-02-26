import { cn } from "@/lib/utils";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

interface BentoGridItemProps {
  title: string;
  description: string;
  gradient: string;
  image: string;
  className?: string;
}

const GrainyBackground = () => {
  return (
    <div className="z-0 absolute inset-0 mix-blend-overlay opacity-70 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(
            "data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"
          )`,
          backgroundSize: "130px 130px",
          filter: "contrast(150%)",
        }}
      />
    </div>
  );
};

const BentoGridItem = ({
  title,
  description,
  imageSrc,
  gradient,
  className,
}: {
  title: string;
  description: string;
  imageSrc: string;
  gradient: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl h-full col-span-1 group cursor-pointer",
        className
      )}
    >
      <div className={`relative h-full w-full p-6 flex flex-col`}>
        <div
          className={`z-[-1] pointer-events-none absolute inset-0 ${gradient} transition-all duration-500`}
        />
        <GrainyBackground />
        <div className="relative w-full mb-4 rounded-lg overflow-hidden flex flex-grow">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={title}
              width={1920}
              height={1920}
              quality={100}
              className="object-cover h-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="group transition-all duration-300 group-hover:scale-90">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        <span className="text-white text-lg font-semibold flex flex-row items-center justify-center gap-x-1 transition-colors duration-300">
          Learn More
          <div className="relative overflow-hidden w-5 h-5 z-10 flex items-center justify-center text-2xl">
            <div className="absolute transition-transform duration-300 ease-in-out -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowDownRight className="size-6" />
            </div>
            <div className="absolute transition-transform duration-300 ease-in-out translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:translate-y-full">
              <ArrowDownRight className="size-6" />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

const BentoGrid = ({ items }: { items: BentoGridItemProps[] }) => {
  return (
    <div className="grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-8 py-12">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          imageSrc={item.image}
          gradient={item.gradient}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default BentoGrid;
export type { BentoGridItemProps };
