"use client";

import Image from "next/image";
import Link from "next/link";
import { FaAmazon } from "react-icons/fa";
import ScrollBtn from "../ScrollBtn/ScrollBtn";

export default function MyWork() {
  const blogAppUrl = "https://blog-frontend-umber-two.vercel.app/";
  const commerceAppUrl = "https://kal-commerce.vercel.app";
  const weatherAppUrl = "https://kal-aa.github.io/weather-app/";
  const messageAppUrl = "https://quick-message-mu.vercel.app";

  return (
    <div id="my-work" className="space-y-10">
      <div className="flex flex-col items-center text-center space-y-6 px-8">
        <div className="H4-phone black">My Works</div>
        <div className="P-phone black-75">
          I specialize in website design and development, but i’ve also designed
          successful IoS and Android apps
        </div>
      </div>

      <div className="relative">
        <ScrollBtn />
        <div id="portfolio-scroll" className="my-work-container">
          {/* Portfolio one */}
          <div className="my-work-portfolio">
            <div className="bg-[#9DCCE1] w-full h-[585px] flex-">
              <Link href={messageAppUrl} target="_blank">
                <Image
                  src="/quick-message.png"
                  width={5000}
                  height={5000}
                  alt="messaging app"
                  className="px-[5%] mt-10 h-[545px] object-cover"
                />
              </Link>
            </div>
          </div>
          {/* Portfolio two */}
          <div data-testid="portfolio" className="my-work-portfolio">
            <div className="bg-[#1E40AF] w-full h-[585px] relative overflow-hidden">
              {/* 3 blog images */}
              <Link href={blogAppUrl} target="_blank">
                <Image
                  src="/blog-3.png"
                  width={5000}
                  height={5000}
                  alt="blog app"
                  className="portfolio-2-images top-1/2 -translate-y-1/2 left-[5%] h-[395px]"
                />
              </Link>
              <Link href={blogAppUrl} target="_blank">
                <Image
                  src="/blog-1.png"
                  width={5000}
                  height={5000}
                  alt="blog app"
                  className="portfolio-2-images left-1/2 -translate-x-1/2 -bottom-[76px] h-[395px]"
                />
              </Link>
              <Link href={blogAppUrl} target="_blank">
                <Image
                  src="/blog-2.png"
                  width={5000}
                  height={5000}
                  alt="blog app"
                  className="portfolio-2-images top-0 right-[5%] h-[395px]"
                />
              </Link>
            </div>
          </div>
          {/* Testimonial */}
          <div data-testid="portfolio" className="my-work-testimonial">
            <div className="H4_light-phone H4_light-tablet H4_light-laptop black max-w-[1000px]">
              “Working with Kalab has been an absolute pleasure and we’ll
              definitely turn to his expertise for new projects.”
            </div>
            <div className="space-y-8">
              <div className="flex items-center justify-center -space-x-2">
                <Image
                  src="/robert.png"
                  width={5000}
                  height={5000}
                  alt="Robert"
                  className="w-14 h-12 object-cover rounded-full"
                />
                <div className="bg-[#FE485D] w-14 h-12 flex- !justify-center rounded-full">
                  <FaAmazon size={32} />
                </div>
              </div>
              <div className="space-x-2">
                <div className="p_xs_extrabold-phone p_xs_extrabold-tablet black">
                  James Wittings
                </div>
                <div className="P_xs_semibold-tablet P_xs_semibold-phone black-75">
                  Marketing Director at Amazon
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio three */}
          <div data-testid="portfolio" className="my-work-portfolio">
            <div className="bg-[#525252] w-full h-[585px] relative">
              <Link href={commerceAppUrl} target="_blank">
                <Image
                  src="/commerce-1.png"
                  width={5000}
                  height={5000}
                  alt="apparel shop"
                  className="absolute left-1/2 -translate-x-1/2 top-10 w-[90%] h-[545px] object-cover"
                />
              </Link>
              <Link href={commerceAppUrl} target="_blank">
                <Image
                  src="/commerce-2.png"
                  width={5000}
                  height={5000}
                  alt="apparel shop"
                  className="absolute left-[5%] bottom-0 w-[35%] h-[140px] object-cover"
                />
              </Link>
              <Link href={commerceAppUrl} target="_blank">
                <Image
                  src="/commerce-3.png"
                  width={5000}
                  height={5000}
                  alt="apparel shop"
                  className="absolute right-[5%] bottom-0 w-[35%] h-[140px] object-cover"
                />
              </Link>
            </div>
          </div>
          {/* Portfolio four */}
          <div data-testid="portfolio" className="my-work-portfolio">
            <div className="bg-[#9DCCE1] w-full h-[585px] flex-">
              <Link href={weatherAppUrl} target="_blank">
                <Image
                  src="/Weather.png"
                  width={5000}
                  height={5000}
                  alt="messaging app"
                  className="px-[5%] mt-10 h-[545px] object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
