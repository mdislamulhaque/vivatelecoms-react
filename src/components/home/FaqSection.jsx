// FAQSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What IT services do you provide?",
    answer:
      "We provide enterprise software solutions, cloud computing services, network management, cybersecurity, and custom software development tailored to your business needs.",
  },
  {
    question: "How secure are your solutions?",
    answer:
      "Security is our top priority. We implement industry-standard encryption, regular audits, and proactive monitoring to ensure your data and systems remain safe.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer:
      "Yes! Our dedicated support team is available 24/7 to assist you with any technical issues or inquiries.",
  },
  {
    question: "Can you customize solutions for my business?",
    answer:
      "Absolutely! We analyze your requirements and design scalable, cost-effective solutions that fit your unique business model.",
  },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left items-center font-semibold text-lg hover:text-indigo-400 transition-colors"
      >
        {faq.question}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="ml-2">
          <ChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-300"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className=" text-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
