import { PRIVACY } from "@/lib/content";
import FeatureCard from "../ui/FeatureCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Privacy() {
  return (
    <Section id="datenschutz" tone="alt">
      <SectionHeading eyebrow={PRIVACY.eyebrow} headline={PRIVACY.headline} intro={PRIVACY.intro} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRIVACY.items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
