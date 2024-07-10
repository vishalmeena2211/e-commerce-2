import React, { useState } from 'react';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-800 rounded mb-4 bg-gray-100 text-green-500">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className={`transform ${isOpen ? 'rotate-0' : 'rotate-180'} transition-transform duration-300 w-4 h-4`}>
          &#x25BE;
        </span>
      </div>
      <div
        className={`transition-opacity transition-height ease-in-out duration-1000 ${isOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0'} overflow-hidden`}
      >
        <div className="bg-gray-800 p-4">
          <p className="text-gray-300">{content}</p>
        </div>
      </div>
    </div>
  );
}

function Accordian() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h1>
      <AccordionItem
        title="What is React?"
        content="React is a JavaScript library for building user interfaces."
      />
      <AccordionItem
        title="How do I install React?"
        content="You can install React using npm or yarn. Visit the official React website for installation instructions."
      />
      <AccordionItem
        title="Can I use Tailwind CSS with React?"
        content="Yes, you can use Tailwind CSS with React to quickly style your components."
      />
    </div>
  );
}

export default Accordian;
