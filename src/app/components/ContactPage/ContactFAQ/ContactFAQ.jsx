"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import "./contactFAQ.css";

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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="contact-faq">
      <div className="contact-faq-header">
        <span>FAQ</span>
        <h2>Frequently Asked Questions</h2>

        <p>
          Find quick answers to common questions about our services, process and
          project collaboration.
        </p>
      </div>

      <div className="contact-faq-grid">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <article
              className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              key={faq.question}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <FiChevronDown />
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}