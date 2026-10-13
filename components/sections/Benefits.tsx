import { BENEFITS } from "@/lib/content";
import FeatureCard from "../ui/FeatureCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Benefits() {
  return (
    <Section>
      <SectionHeading eyebrow={BENEFITS.eyebrow} headline={BENEFITS.headline} />
      <div className="grid gap-6 md:grid-cols-3">
        {BENEFITS.items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
