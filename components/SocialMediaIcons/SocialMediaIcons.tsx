import Link from "next/link";
import { FaLinkedin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function SocialMediaIcons({ size = 32 }: { size?: number }) {
  return (
    <section className="flex- space-x-[16px]">
      <Link
        data-testid="social-media-link"
        href="https://www.linkedin.com/in/kalab-sisay-881139351/"
        target="_blank"
      >
        <FaLinkedin size={size} color="#0077B5" />
      </Link>
      <Link
        data-testid="social-media-link"
        href="https://wa.me/+251968350741"
        target="_blank"
      >
        <FaWhatsapp size={size} color="#25D366" />
      </Link>
      <Link
        data-testid="social-media-link"
        href="https://t.me/@Silent7951"
        target="_blank"
      >
        <FaTelegramPlane size={size} color="#0088CC" />
      </Link>
    </section>
  );
}
