import Image from "next/image";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";
import NavLinks from "./NavLinks";

export default function Footer() {
  const footerSection =
    "flex flex-col space-y-8 py-6 xl:py-8 border-t black-10-border";

  return (
    <section className={footerSection}>
      <div className="footer-container">
        {/* Left section */}
        <div className="w-full sm:w-auto flex flex-col space-y-4 items-center">
          {/* NavLinks */}
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Link href="mailto:sadkalshayee@gmail.com" target="_blank">
              <div className="primary hover:underline">
                sadkalshayee@gmail.com{" "}
              </div>
            </Link>
            <Link href="tel:+251968350741" target="_blank">
              <div className="hover:underline">(+251) 9-68350741</div>
            </Link>
          </div>

          <div className="sm:w-1/3">
            <SocialMediaIcons size={24} />
          </div>
        </div>

        {/* Right section */}
        <div className="footer-right-section">
          <div>
            <span className="md:hidden">
              <NavLinks />
            </span>
            <span className="hidden md:flex">
              <NavLinks flexP="flex-row" />
            </span>
          </div>

          <Link href="/">
            <Image
              src="/logo.svg"
              width={0}
              height={0}
              alt="Fox logo"
              className="w-[32px] sm:mb-3 xl:mb-auto"
            />
          </Link>
        </div>
      </div>

      <div className="w-full black text-center">
        © Copyright Robert Fox 2022. All rights reserved
      </div>
    </section>
  );
}
