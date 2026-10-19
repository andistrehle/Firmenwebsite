import { PRIVACY } from "@/lib/content";
import FeatureCard from "../ui/FeatureCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Privacy() {
  return (
    <Section id="datenschutz" tone="alt">
      <SectionHeading tag={PRIVACY.tag} headline={PRIVACY.headline} intro={PRIVACY.intro} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRIVACY.items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
