import { PROBLEMS } from "@/lib/content";
import FeatureCard from "../ui/FeatureCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function Problems() {
  return (
    <Section tone="alt">
      <SectionHeading eyebrow={PROBLEMS.eyebrow} headline={PROBLEMS.headline} />
      <div className="grid gap-6 md:grid-cols-3">
        {PROBLEMS.items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
