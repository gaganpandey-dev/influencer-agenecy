"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "916362621090";

const budgetOptions = [
  "Below ₹50K",
  "₹50K - ₹1L",
  "₹1L - ₹5L",
  "₹5L+",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = useMemo(() => {
    const text = [
      "Hello Vmerg, I want to discuss an influencer marketing campaign.",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Company: ${form.company || "-"}`,
      `Budget: ${form.budget || "-"}`,
      `Goal: ${form.message || "-"}`,
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {
      name: "",
      email: "",
      company: "",
    };

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.company.trim()) {
      nextErrors.company = "Please enter your brand or company name.";
    }

    setErrors(nextErrors);

    return !nextErrors.name && !nextErrors.email && !nextErrors.company;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitted(true);
    window.open(whatsappMessage, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 scroll-mt-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_24%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Start your campaign
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-slate-950 sm:text-4xl">
              Get a clearer influencer campaign plan
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Share your requirement and we will understand your campaign goal,
              budget range and brand context before suggesting the right creator
              approach.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Clearer campaign planning",
                "Faster response on WhatsApp",
                "Structured brand requirement collection",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-emerald-600"
                  />
                  <p className="text-sm leading-6 text-slate-700 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 shrink-0 text-emerald-700" size={18} />
                <div>
                  <p className="text-sm font-semibold text-emerald-900">
                    Direct WhatsApp response
                  </p>
                  <p className="mt-1 text-sm leading-6 text-emerald-800">
                    After submission, the form opens WhatsApp with your campaign
                    details so the conversation can start faster.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={`min-h-12 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                      errors.name
                        ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
                        : "border-slate-300 focus:border-cyan-500 focus:ring-cyan-100"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-rose-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Business email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`min-h-12 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                      errors.email
                        ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
                        : "border-slate-300 focus:border-cyan-500 focus:ring-cyan-100"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-rose-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Brand or company name
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Enter your brand name"
                    value={form.company}
                    onChange={handleChange}
                    className={`min-h-12 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                      errors.company
                        ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
                        : "border-slate-300 focus:border-cyan-500 focus:ring-cyan-100"
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-2 text-sm text-rose-600">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-semibold text-slate-900"
                  >
                    Estimated campaign budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="min-h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-900"
                >
                  Campaign goal
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what outcome you want, such as awareness, leads, installs, sales or creator outreach."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 resize-none"
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 active:scale-[0.99] sm:w-auto"
                >
                  Submit and continue on WhatsApp
                  <ArrowUpRight size={16} />
                </button>

                <p className="max-w-md text-xs leading-6 text-slate-500 sm:text-sm">
                  Our team reviews each request manually to give a more relevant
                  and strategic response.
                </p>
              </div>

              {submitted && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                  <p className="text-sm font-medium text-emerald-800">
                    Your details are ready. WhatsApp has been opened with your
                    campaign brief.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}