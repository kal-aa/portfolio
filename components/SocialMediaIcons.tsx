import Link from "next/link";
import { FaLinkedin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function SocialMediaIcons({
  flexP = "flex-row",
}: {
  flexP?: string;
}) {
  return (
    <div
      className={`flex- ${flexP === "flex-col" ? "flex-col space-y-3" : "space-x-[16px]"}`}
    >
      <Link
        href="https://www.linkedin.com/in/kalab-sisay-881139351/"
        target="_blank"
      >
        <FaLinkedin size={32} color="#0077B5" />
      </Link>
      <Link href="https://wa.me/+251968350741" target="_blank">
        <FaWhatsapp size={32} color="#25D366" />
      </Link>
      <Link href="https://t.me/@Silent7951" target="_blank">
        <FaTelegramPlane size={32} color="#0088CC" />
      </Link>
    </div>
  );
}
