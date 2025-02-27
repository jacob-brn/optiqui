import PixelCard from "../ui/PixelCard";
import Script from "next/script";

export default function PixelCardExample() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <PixelCard
          text="Magical Card"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
              <path d="m14 7 3 3" />
              <path d="M5 6v4" />
              <path d="M19 14v4" />
              <path d="M10 2v2" />
              <path d="M7 8H3" />
              <path d="M21 16h-4" />
              <path d="M11 3H9" />
            </svg>
          }
          className="min-w-[250px] w-full h-24 rounded-xl border border-border"
          canvasProps={{
            gap: 0,
            colors: "#D2042D, #FF0033, #C21807, #E30B5C, #FF4D4D, #B22222",
          }}
        />
      </div>
      <Script src="/scripts/pixel.js" />
    </>
  );
}
