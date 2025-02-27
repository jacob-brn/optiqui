import HeroMedia from "../ui/HeroMedia";

export default function HeroMediaExample() {
  return (
    <div className="px-6 py-6">
      <HeroMedia
        type="video"
        iframe={false}
        className="border border-border"
        thumbnailUrl="/heromedia-thumbnail.jpg"
        videoUrl="/optiq-ui-saas-template.mp4"
        buttonTitle="See video"
        buttonDescription="Just click play button"
        PopoverTitle="Optiq UI SaaS Template"
        PopoverDescription="Coming out soon!"
      />
    </div>
  );
}
