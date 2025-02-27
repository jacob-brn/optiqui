import TextHighlight from "../ui/TextHighlight";

export default function TextHighlightExample() {
  return (
    <div className="text-2xl lg:text-6xl text-center text-balance text-foreground">
      Cool <TextHighlight text="highlight" /> effect
    </div>
  );
}
