import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import HeaderNavLinks from "./NavLinks";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-24 z-10">
      <div className="flex- header-container border-black/10">
        {/* Left section */}
        <div className="flex- space-x-[32px] P-phone">
          <Link href="/" className="flex justify-center w-[48px] xl:w-[56px]">
            <Image
              src="/Logo.svg"
              width={1000}
              height={1000}
              alt="Fox logo"
              className="size-[40px] xl:size-[48px]"
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
            <SocialMediaIcons size={24} />
            {/* Vertical separator */}
            <div className="w-1 h-[16px] bg-black/25"></div>
          </div>
          {/* Email and phone */}
          <div className="email-phone-container">
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
    </header>
  );
}
