import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import HeaderNavLinks from "./NavLinks";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Header() {
  return (
    <div className="flex- px-[48px] py-[24px] xl:px-[64px] xl:py-[32px] border-b black-10-border black">
      {/* Left section */}
      <div className="flex- space-x-[32px] P-phone">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            alt="Fox logo"
            className="w-[48px] xl:w-[56px]"
          />
        </Link>
        <div className="hidden sm:flex sm:space-x-[32px] sm:items-center ">
          <HeaderNavLinks flexP="flex-row" />
        </div>
      </div>

      {/* Right section */}
      <div className="flex- space-x-[32px]">
        {/* Hamburger option */}
        <HamburgerMenu />

        <div className="hidden xl:flex items-center space-x-[32px]">
          {/* Social-media icons */}
          <SocialMediaIcons />

          {/* Vertical separator */}
          <div className="w-1 h-[16px] black-25-bg"></div>
        </div>
        <div className="hidden text-center sm:flex sm:flex-col sm:items-center sm:space-y-2 md:flex md:flex-row md:space-y-0 md:space-x-[32px]">
          <Link href="mailto:sadkalshayee@gmail.com" target="_blank">
            <div className="primary hover:underline cursor-pointer">
              sadkalshayee@gmail.com{" "}
            </div>
          </Link>

          <Link href="tel:+251968350741" target="_blank">
            <div className="hover:underline cursor-pointer">
              (+251) 9-68350741
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
