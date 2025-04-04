import AIButton from "../ui/AIButton";

export default function AIButtonExample() {
  return (
    <div className="py-24 flex items-center justify-center flex-col gap-y-6 not-prose scale-150">
      <AIButton
        text="Generate"
        className="text-yellow-300 dark:text-yellow-600 min-w-[120px] text-base"
      />
    </div>
  );
}
