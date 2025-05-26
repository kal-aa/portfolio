import Image from "next/image";
import Tools from "../../components/Tools/Tools";
import CTA from "../../components/CTA/CTA";
import AboutComponents from "@/components/AboutComponents/AboutComponents";
import AboutMeHero from "@/components/AboutMeHero/AboutMeHero";

export default function AboutMePage() {
  const images = [
    { src: "/work-image-1.png", style: "col-span-2 sm:col-span-1" },
    { src: "/work-image-2.png", style: "md:col-span-2" },
    { src: "/work-image-3.png", style: "sm:col-span-full md:col-span-1" },
  ];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <AboutMeHero />
      {/* Workspace Images */}
      <div className="about-me-img-container">
        {images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            width="1000"
            height="0"
            alt="workspace"
            className={img.style}
          />
        ))}
      </div>
      {/* Other components */}
      <AboutComponents />
      {/* Tools */}
      <Tools />
      {/* CTA */}
      <CTA bg="red" />
    </div>
  );
}
