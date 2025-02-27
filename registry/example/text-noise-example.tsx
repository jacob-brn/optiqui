import TextNoise from "../ui/TextNoise";

export default function TextNoiseExample() {
  return (
    <div className="text-2xl lg:text-6xl text-center text-balance text-foreground">
      Components your
      <br />
      <TextNoise
        text="website"
        className="bg-gradient-to-t from-muted to-primary"
      />{" "}
      deserves
    </div>
  );
}
