import TextScan from "../ui/TextScan";

export default function TextScanExample() {
  return (
    <div className="w-full flex items-center justify-center py-12 px-4">
      <TextScan
        className="border py-2"
        text={
          <>
            <div>Build $10k website</div>
            <div>on $0 budget.</div>
          </>
        }
      />
    </div>
  );
}
