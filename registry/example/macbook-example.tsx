import Macbook from "../ui/Macbook";

export default function MacbookExample() {
  return (
    <div className="pt-36 md:pt-96 md:pb-24 overflow-x-hidden md:overflow-x-visible">
      <Macbook>
        <h3 className="font-semibold text-3xl text-white dark:text-foreground max-w-xs mx-auto text-center">
          What are you going to use it for?
        </h3>
      </Macbook>
    </div>
  );
}
