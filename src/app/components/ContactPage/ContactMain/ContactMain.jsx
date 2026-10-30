"use client";

import { useState } from "react";
import { Anton, Manrope } from "next/font/google";
import {
  FiArrowUpRight,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import "./contactMain.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-main-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-main-body",
});

const recipients = {
  gaming: "etragameprod@etradreams.com",
  animation: "etraanim@etradreams.com",
};

export default function ContactMain() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const division = data.get("division");
    const recipient = recipients[division];

    if (!recipient) return;

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = `ETRA ${
      division === "gaming" ? "Gaming" : "Animation"
    } — Project Enquiry`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Studio: ${company || "Not provided"}`,
      "",
      message,
    ].join("\n");

    window.location.href =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your email app should open with a draft. Send it from there to complete your enquiry."
    );
  };

  return (
    <section
      className={`etra-contact-main ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-contact-main-title"
    >
      <div className="etra-contact-main__container">
        <div
          id="contact-form"
          className="etra-contact-main__form-panel"
        >
          <p className="etra-contact-main__label">
            Send Us a Message
          </p>

          <h2 id="etra-contact-main-title">
            Tell us about
            <br />
            <span>your project.</span>
          </h2>

          <form
            className="etra-contact-main__form"
            onSubmit={handleSubmit}
          >
            <fieldset className="etra-contact-main__division">
              <legend>I&apos;m interested in</legend>

              <div className="etra-contact-main__division-options">
                <label>
                  <input
                    type="radio"
                    name="division"
                    value="gaming"
                    defaultChecked
                    required
                  />
                  <span>Gaming</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="division"
                    value="animation"
                    required
                  />
                  <span>Animation</span>
                </label>
              </div>
            </fieldset>

            <div className="etra-contact-main__row">
              <label className="etra-contact-main__field">
                <span>Your Name *</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  maxLength={120}
                />
              </label>

              <label className="etra-contact-main__field">
                <span>Your Email *</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  maxLength={254}
                />
              </label>
            </div>

            <label className="etra-contact-main__field">
              <span>Company / Studio</span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Company or studio name"
                maxLength={160}
              />
            </label>

            <label className="etra-contact-main__field">
              <span>Tell us about your project *</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Share your idea, requirements and timeline."
                required
                maxLength={5000}
              />
            </label>

            <div className="etra-contact-main__submit-row">
              <button type="submit">
                <span>Send Message</span>
                <FiArrowUpRight aria-hidden="true" />
              </button>

              <p>Opens a draft in your email app.</p>
            </div>

            <p
              className="etra-contact-main__status"
              role="status"
            >
              {status}
            </p>

            <p className="etra-contact-main__privacy">
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        </div>

        <aside
          className="etra-contact-main__info"
          aria-labelledby="etra-contact-info-title"
        >
          <h2
            className="etra-contact-main__label"
            id="etra-contact-info-title"
          >
            Get In Touch
          </h2>

          <p className="etra-contact-main__intro">
            Reach out to us for project enquiries, collaborations and
            creative partnerships.
          </p>

          <div className="etra-contact-main__email-group">
            <a
              href="mailto:etragameprod@etradreams.com"
              className="etra-contact-main__email etra-contact-main__email--gaming"
            >
              <span className="etra-contact-main__email-heading">
                <strong>Gaming</strong>
                <FiArrowUpRight aria-hidden="true" />
              </span>
              <span>etragameprod@etradreams.com</span>
            </a>

            <a
              href="mailto:etraanim@etradreams.com"
              className="etra-contact-main__email etra-contact-main__email--animation"
            >
              <span className="etra-contact-main__email-heading">
                <strong>Animation</strong>
                <FiArrowUpRight aria-hidden="true" />
              </span>
              <span>etraanim@etradreams.com</span>
            </a>
          </div>

          <div className="etra-contact-main__detail">
            <FiPhone aria-hidden="true" />
            <div>
              <h3>Phone</h3>
              <a href="tel:+919500622644">
                +91 95006 22644
              </a>
            </div>
          </div>

          <div className="etra-contact-main__detail">
            <FiMapPin aria-hidden="true" />
            <div>
              <h3>Location</h3>
              <address>
                ETRA DREAMS ANIMATIONS PRIVATE LIMITED
                <br />
                1/400A North Street, Othaiyal
                <br />
                O. Mettuppatti Post
                <br />
                Sattur, Tamil Nadu - 626203, India
              </address>
            </div>
          </div>

          <div className="etra-contact-main__detail">
            <FiClock aria-hidden="true" />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Fri : 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}