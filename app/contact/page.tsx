import FQA from "@/components/FQA";
import ContactForm from "@/components/ContactForm";
import ContactBtns from "@/components/ContactBtns";

export default function ContactPage() {
  return (
    <div className="space-y-20">
      {/* Contact-btns */}
      <ContactBtns />
      {/* FQA */}
      <FQA />
      {/* Contact form */}
      <ContactForm />
    </div>
  );
}
