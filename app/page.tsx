import Companies from "@/components/Companies/Companies";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/Hero/Hero";
import MyWork from "@/components/MyWork/MyWork";

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
