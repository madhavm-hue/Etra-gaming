"use client";

import { useId, useState } from "react";
import { Anton, Manrope } from "next/font/google";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./contactFAQ.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-faq-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-faq-body",
});

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "We work on game development, 2D and 3D animation, cinematics, environment art, interactive experiences and live operations support.",
  },
  {
    question: "How do you ensure the quality of your work?",
    answer:
      "Our team follows a structured review process with regular feedback, testing and refinement at every production stage.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "The timeline depends on the scope and complexity of the project. After the initial discussion, we provide a clear production schedule.",
  },
  {
    question: "What platforms and technologies do you use?",
    answer:
      "We use industry-leading tools such as Unreal Engine, Unity, Blender, Autodesk Maya, Figma and Adobe creative software.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We collaborate remotely with clients and production teams across different countries and time zones.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. We can integrate with your internal team and support specific stages of development, design or production.",
  },
];

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const instanceId = useId();

  return (
    <section
      className={`etra-contact-faq ${anton.variable} ${manrope.variable}`}
      aria-labelledby={`${instanceId}-title`}
    >
      <div className="etra-contact-faq__container">
        <div className="etra-contact-faq__heading">
          <p className="etra-contact-faq__label">FAQ</p>

          <h2 id={`${instanceId}-title`}>
            Frequently Asked
            <br />
            <span>Questions</span>
          </h2>

          <p className="etra-contact-faq__intro">
            Find quick answers to common questions about our services,
            process and project collaboration.
          </p>
        </div>

        <div className="etra-contact-faq__list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const questionId = `${instanceId}-question-${index}`;
            const answerId = `${instanceId}-answer-${index}`;

            return (
              <article
                className={`etra-contact-faq__item ${
                  isOpen ? "etra-contact-faq__item--open" : ""
                }`}
                key={faq.question}
              >
                <h3 className="etra-contact-faq__question">
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === index ? null : index
                      )
                    }
                  >
                    <span
                      className="etra-contact-faq__number"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{faq.question}</span>

                    {isOpen ? (
                      <FiMinus aria-hidden="true" />
                    ) : (
                      <FiPlus aria-hidden="true" />
                    )}
                  </button>
                </h3>

                <div
                  id={answerId}
                  className="etra-contact-faq__answer"
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}