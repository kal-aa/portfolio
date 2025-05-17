import Image from "next/image";
import Tools from "../../components/Tools";
import CTA from "../../components/CTA";
import AboutComponents from "@/components/AboutComponents";

export default function AboutMePage() {
  const images = [
    { src: "/work-image-1.png", style: "col-span-2 sm:col-span-1" },
    { src: "/work-image-2.png", style: "md:col-span-2" },
    { src: "/work-image-3.png", style: "sm:col-span-full md:col-span-1" },
  ];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <div className="about-me-hero">
        <div className="H3_bold-phone black H3_bold-tablet H3_bold-laptop">
          I’m Kalab Fox
        </div>
        <div className="P-tablet black-75 space-y-2 max-w-[900px] xl:max-w-[1200px]">
          <p>
            I was born in Woldia, Ethiopia almost two and a half decades ago.
            From an early age, I showed interest in computers, and that
            curiosity eventually grew into a passion.
          </p>

          <p>
            I got into web design and development through passion and
            self-learning. Teaching myself and building projects out of
            curiosity helped me discover what I truly enjoy and want to pursue
            for the rest of my life.
          </p>

          <p>
            Currently, I help businesses around the world by designing and
            coding websites and mobile apps. I’ve had the pleasure of working
            with major companies like Apple, Microsoft, and Amazon — just to
            name a few. Right now, I’m based in New York.
          </p>
        </div>
      </div>

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
