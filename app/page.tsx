import Companies from "@/components/Companies";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import MyWork from "@/components/MyWork";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <Companies />
      <MyWork />
      <CTA />
    </div>
  );
}
