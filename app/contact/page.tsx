import Link from "next/link";
import Btn from "@/components/Btn";
import FQA from "@/components/FQA";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-20">
      {/* Contact-btns */}
      <div className="contact-btns-container">
        <Link href="mailto:sadkalshayee@gmail.com" target="_blank">
          <Btn bg="red" text="sadkalshayee@gmail.com" />
        </Link>
        <Link href="tel:+251968350741" target="_blank">
          <Btn text="(+251) 9-68350741" />
        </Link>
      </div>
      {/* FQA */}
      <FQA />
      {/* Contact form */}
      <ContactForm />
    </div>
  );
}
