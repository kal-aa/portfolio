"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import Btn from "../Btn/Btn";

export interface FormData {
  name: string;
  email: string;
  message: string;
  timeline: string;
  budget: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    timeline: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent!");
        setTimeout(() => {
          toast.info("I usually reply within 24 hours");
        }, 3000);
        setForm({ name: "", email: "", message: "", timeline: "", budget: "" });
      }
    } catch (error) {
      toast.error("Server error");
      console.error("Error sending message:", error);
    }

    setLoading(false);
  };

  const label = "form-label P_semibold-phone ";

  return (
    <section className="contact-form-section">
      <div className="space-y-6 md:w-1/2">
        <h4 className="H4-phone H4-tablet">Got a project in mind? </h4>
        <p className="text-black/75 P-tablet">
          Use the form to give me as much detail as possible and I’ll get back
          to you as soon as I can.
        </p>
      </div>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6">
          <label className={`${label} w-1/2`} htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className={`${
                loading ? "border border-black/30 !hover:black-10" : ""
              }`}
            />
          </label>

          <label className={`${label} w-1/2`} htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className={`${
                loading ? "border border-black/30 !hover:black-10" : ""
              }`}
            />
          </label>

          <label className={`${label} w-full`} htmlFor="message">
            Description
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Project Details"
              required
              className={`${
                loading ? "border border-black/30 !hover:black-10" : ""
              }`}
            />
          </label>

          <div className="flex flex-col sm:flex-row sm:space-x-[5%] space-y-4 sm:space-y-0">
            <label htmlFor="timeline" className={`${label} w-full`}>
              Timeline
              <select
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                required
                className={`${
                  loading ? "border border-black/30 !hover:black-10" : ""
                }`}
              >
                <option value="" disabled>
                  Select a timeline
                </option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="Flexible">Flexible</option>
              </select>
            </label>

            <label htmlFor="budget" className={`${label} w-full`}>
              Budget
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className={`${
                  loading
                    ? "border border-black/30 !hover:black-10"
                    : "hover:bg-black/8"
                }`}
              >
                <option value="" disabled>
                  Select a budget
                </option>
                <option value="<$100">&lt;$100</option>
                <option value="$100–$500">$100–$500</option>
                <option value="$500–$1000">$500–$1000</option>
                <option value="$1000+">$1000+</option>
              </select>
            </label>
          </div>
        </div>
        <Btn
          width="full"
          text="Let's do this!"
          disabled={loading ? true : false}
        />
      </form>
    </section>
  );
}
