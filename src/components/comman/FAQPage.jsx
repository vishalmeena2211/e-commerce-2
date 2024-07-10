// FAQPage.js

import React from 'react';
import Accordiann from './Accordiann'; // Create a separate Accordion component

const FAQPage = () => {
  const faqData = [
    { question: 'How can I place an order?', answer: 'To place an order, follow these steps...' },
    { question: 'Can I track my order?', answer: 'Yes, you can track your order by...' },
    { question: 'What payment methods do you accept?', answer: 'We accept Visa, MasterCard, and PayPal.' },
    // Add more FAQ items as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="grid gap-6">
        {faqData.map((item, index) => (
          <Accordiann key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
