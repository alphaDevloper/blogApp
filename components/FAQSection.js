// components/FAQSection.jsx
"use client";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b dark:bg-black border-gray-200">
      <button
        className="w-full py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium dark:text-gray-400 text-gray-900">
            {question}
          </span>
          <span className="ml-6 flex-shrink-0">
            <svg
              className={`w-6 h-6 transform dark:text-gray-400 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 pb-6"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-gray-500">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all our products. If you're not satisfied with your purchase, simply contact our support team for a full refund.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 100 countries worldwide. Shipping rates and delivery times vary by location. You can check shipping costs during checkout.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through email at support@example.com, live chat on our website, or by phone at 1-800-123-4567.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Google Pay and Apple Pay. All payments are securely processed and encrypted.",
    },
  ];

  return (
    <section className="py-12 dark:bg-black bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg dark:text-gray-400 text-gray-600">
            Can not find the answer you are looking for? Reach out to our
            customer support team.
          </p>
        </div>
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
