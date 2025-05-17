import Link from "next/link";
import Btn, { CtaBtn } from "./Btn";
export default function CTA({ bg, text }: CtaBtn) {
  return (
    <div className="space-y-16  px-8 sm:px-[104px] sm:space-y-20">
      <div className="space-y-4 sm:space-y-6">
        <div className="H5-phone H5-tablet H5-laptop max-w-[500px] xl:min-w-[100%]">
          I’m currently available for freelance work
        </div>
        <div className="P-phone P-laptop max-w-[600px] xl:max-w-[700px]">
          If you’re looking for a designer and developer that likes to get stuff
          done, let’s talk.
        </div>

        {/* Email and phone no. */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 P_xs-phone">
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

      {/* CTA btn */}
      <Link href="/contact#contact-form">
        <Btn bg={bg} text={text} />
      </Link>
    </div>
  );
}
