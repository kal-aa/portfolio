import { FaAmazon, FaApple, FaMicrosoft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Companies() {
  return (
    <div className="text-center bg-[#FFE9E9] px-8 py-6 space-y-6">
      <div className="P_xs-phone P_xs-laptop black-75">
        I had the pleasure of working with these awesome companies
      </div>
      <div className="flex justify-center items-center space-x-[5%]">
        <FaAmazon size={40} />
        <FaGithub size={40} />
        <FaApple size={40} />
        <FaMicrosoft size={40} />
      </div>
    </div>
  );
}
