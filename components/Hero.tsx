import Link from "next/link";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-4 space-y-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="H3-phone H3-tablet H3-laptop">Hey there I’m Kalab</div>
        <div className="H2-phone H2-tablet H2-laptop">
          Freelance Web Designer & Developer
        </div>
        <div className="P-phone P-laptop black-75 max-w-[1000px] xl:max-w-[1200px]">
          I help business grow by crafting amazing web experiences. If you’re
          looking for a designer and developer that likes to get stuff done,
          let’s talk
        </div>
      </div>

      {/* See my work btn */}
      <Link href="#my-work" className="see-my-work-btn brand-gradient">
        <span className="P_xs-phone P_xs-tablet P_xs- P_xs-laptop">
          See my work
        </span>{" "}
        <FaRegArrowAltCircleDown size={24} className="inline" />
      </Link>
    </div>
  );
}
