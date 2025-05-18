'use client'
import React, { useState } from 'react';

const faqData = [
  {
    question: 'Are the courses beginner-friendly?',
    answer: 'Yes, all courses are designed to be accessible to beginners and gradually progress to advanced levels.',
  },
  {
    question: 'Will I get a certificate after course completion?',
    answer: 'Absolutely! You will receive a certificate of completion from Anutattva Foundation upon successfully finishing the course.',
  },
  {
    question: 'What are the payment options available?',
    answer: 'We accept payments via UPI, bank transfer, debit/credit cards, and also offer installment plans for select courses.',
  },
  {
    question: 'Are the classes live or recorded?',
    answer: 'We offer a hybrid model – live interactive sessions with access to recordings for revision and flexibility.',
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4" id="faqs">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-orange-100 rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                <span className="text-orange-500 text-xl">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 pt-0 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
