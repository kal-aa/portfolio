import FQA from "@/components/FQA/FQA";
import ContactForm from "@/components/ContactForm/ContactForm";
import ContactBtns from "@/components/ContactBtns/ContactBtns";

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
