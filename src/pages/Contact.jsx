import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { locations } from "../data/locations";

// --- EmailJS setup ---
// 1. Create a free account at https://www.emailjs.com
// 2. Add an email service + template, then paste the three IDs below.
// 3. Your form fields (name, email, phone, message) must match your EmailJS template variables.
const EMAILJS_SERVICE_ID = "service_6yf5kmo";
const EMAILJS_TEMPLATE_ID = "template_7a0kxnf";
const EMAILJS_PUBLIC_KEY = "v1Ajb06gJ5PebpbL0";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) {
        // EmailJS not configured yet — simulate success locally so the UI is testable.
        await new Promise((r) => setTimeout(r, 600));
      } else {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form,
          EMAILJS_PUBLIC_KEY
        );
      }
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design it together."
        intro="Ready to invest in a smarter, sustainable future? Reach out to our team."
      />

      <Section tone="light">
        <div className="grid gap-12 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="coord-label block mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-[var(--color-slate-light)]/50 bg-[var(--color-paper)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brass)]"
              />
            </div>
            <div>
              <label className="coord-label block mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-[var(--color-slate-light)]/50 bg-[var(--color-paper)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brass)]"
              />
            </div>
            <div>
              <label className="coord-label block mb-2" htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-[var(--color-slate-light)]/50 bg-[var(--color-paper)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brass)]"
              />
            </div>
            <div>
              <label className="coord-label block mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-[var(--color-slate-light)]/50 bg-[var(--color-paper)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brass)]"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 bg-[var(--color-brass)] text-[var(--color-ink)] text-sm uppercase tracking-wide font-medium hover:bg-[var(--color-brass-deep)] hover:text-[var(--color-paper)] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-green-700">Thanks — your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-[var(--color-brick)]">
                Something went wrong. Please email info@homesbyasra.ca directly.
              </p>
            )}
          </form>

          <div>
            <h3 className="font-display text-2xl mb-6">Office Hubs</h3>
            <ul className="space-y-4 mb-8">
              {locations.map((l) => (
                <li key={l.code} className="border-l-2 border-[var(--color-brass)] pl-4">
                  <p className="font-medium">{l.name}</p>
                  <p className="text-sm text-[var(--color-slate)]">{l.hub}</p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--color-slate)] mb-1">
              <a href="mailto:info@homesbyasra.ca" className="hover:text-[var(--color-brass-deep)]">Homebyasra@gmail.com</a>
            </p>
            <p className="text-sm text-[var(--color-slate)]">+1(780)668-6161</p>
          </div>
        </div>
      </Section>
    </>
  );
}
