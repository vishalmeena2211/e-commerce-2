// Accordion.js

import React, { useState } from 'react';

const Accordionn = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <div
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordionn;
