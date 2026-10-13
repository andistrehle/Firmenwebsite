import { VIDEO } from "@/lib/content";
import { BASE_PATH, SITE } from "@/lib/site-config";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/** Selbst gehostetes Demo-Video. Ohne Quelle in site-config wird nichts angezeigt. */
export default function Video() {
  if (!SITE.demoVideo.src) return null;
  return (
    <Section>
      <SectionHeading eyebrow={VIDEO.eyebrow} headline={VIDEO.headline} />
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-navy shadow-lg">
        <video
          controls
          preload="none"
          playsInline
          poster={SITE.demoVideo.poster ? `${BASE_PATH}${SITE.demoVideo.poster}` : undefined}
          className="aspect-video w-full"
        >
          <source src={`${BASE_PATH}${SITE.demoVideo.src}`} type="video/mp4" />
          {VIDEO.fallback}
        </video>
      </div>
    </Section>
  );
}
