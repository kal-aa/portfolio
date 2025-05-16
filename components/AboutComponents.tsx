import Image from "next/image";
import { FaAmazon, FaGithub } from "react-icons/fa";
import { LuMonitorSmartphone, LuRocket, LuShoppingCart } from "react-icons/lu";
import { RiAlarmLine, RiAwardLine } from "react-icons/ri";
const canDos = [
  {
    icon: <RiAlarmLine className="can-do-icon" />,
    title: "1. On-time delivery",
    body: "I know time is money so i don’t want to waste yours or mine. So iguarantee that I will always deliver what you pay for as promised.",
  },
  {
    icon: <RiAwardLine className="can-do-icon" />,
    title: "2. Quality",
    body: "I know time is money so i don’t want to waste yours or mine. So iguarantee that I will always deliver what you pay for as promised.",
  },
];

const testimonials = [
  {
    name: "Sandra Marks",
    position: "Creative Director at Github",
    body: "Kalab is great. We worked together really well and we’ll definitely contract his services in the future.",
    img: "/sandra.jpg",
    icon: <FaGithub size={38} />,
    bg: "bg-[#E5E5E9]",
  },
  {
    name: "Robert Wittings",
    position: "Marketign Director at Amazon",
    body: "Working with Kalab has been an absolute pleasure and we’ll definetely turn to his expertise for new projects.",
    img: "/robert.png",
    icon: <FaAmazon size={38} />,
    bg: "bg-[#FF5667]",
  },
];

const offers = [
  {
    icon: <LuRocket className="can-do-icon" strokeWidth={1.3} />,
    title: "I can design and build a responsive and accessible website",
    body: "I know time is money so i don’t want to waste yours or mine. So i guarantee that I will always deliver what you pay for as promised.",
  },
  {
    icon: <LuShoppingCart className="can-do-icon" strokeWidth={1.3} />,
    title: "I can design and build an ECommerce store",
    body: "I have extensive knowledge of development on the front-end and back-end so I’m able to deliver a completely functional eCommerce website.",
  },
  {
    icon: <LuMonitorSmartphone className="can-do-icon" strokeWidth={1.3} />,
    title: "I can design and build a mobile app for iOS and Android",
    body: "I recently started designing and coding mobile apps and i love it. It’s a different process compared to traditional website design but I’ve been successful in all projects so far.",
  },
];

export default function AboutComponents() {
  return (
    <div className="space-y-[88px]">
      {/* Can-dos */}
      <div className="can-do-container">
        <div className="H3-phone H3-tablet H3-laptop">
          Regardless of project size, you will always get:
        </div>

        <section>
          {canDos.map((canDo) => (
            <div key={canDo.title}>
              {canDo.icon}
              <div className="H5_semibold-phone H5_semibold-tablet H5_semibold-laptop">
                {canDo.title}
              </div>
              <div className="P-laptop P-laptop black-75">{canDo.body}</div>
            </div>
          ))}
        </section>
      </div>

      {/* Testimonials */}
      <div className="testimonials-container">
        {testimonials.map((t) => (
          <div
            key={t.img}
            className="space-y-8 bg-white text-center black p-4 sm:p-6 xl:p-8"
          >
            <div className="text-[21px] md:text-[25px] font-light">
              {t.body}
            </div>
            <div className="space-y-4">
              <div className="flex justify-center -space-x-4">
                <Image
                  key={t.img}
                  src={t.img}
                  width="1000"
                  height="0"
                  alt={t.name}
                  className="w-16 h-16 rounded-full"
                />
                <div
                  className={`flex items-center justify-center ${t.bg} w-16 h-16 rounded-full`}
                >
                  {t.icon}
                </div>
              </div>
              <div className="p_xs_extrabold-phone">{t.name}</div>
              <div className="p_xs_semibold-phone">{t.position}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Offers */}
      <div className="offers-container">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`space-y-4 sm:space-y-6 xl:space-y-8 ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            {offer.icon}
            <div className="H5_semibold-phone H5_semibold-tablet H5_semibold-laptop black">
              {offer.title}
            </div>
            <div className="black-75">{offer.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
