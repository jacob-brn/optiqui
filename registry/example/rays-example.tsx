import Rays from "../ui/Rays";

export default function RaysExample() {
  return (
    <div className="w-full pt-10 pb-12 px-4">
      <main className="w-full mx-auto px-4 relative overflow-hidden py-36 border border-border rounded-xl">
        <h1 className="tracking-tight font-bold text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-t from-foreground via-neutral-400 to-neutral-600">
          Lighten up your website <br />
          with light rays
        </h1>
        <h2 className="my-4 font-normal text-muted-foreground mx-auto mt-4 max-w-5xl text-center text-base md:mt-4 md:text-lg px-4">
          Make your website stand out with moving light rays.
        </h2>
        <Rays castDirection="from-right" />
      </main>
    </div>
  );
}
