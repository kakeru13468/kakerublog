import React, { useState } from 'react';

const Collapsible = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 border border-gray-700 rounded-lg overflow-hidden">
      <button
        className={`w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none ${
          isOpen ? 'bg-gray-700/50' : 'bg-gray-800/50'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-white">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 bg-gray-800/30">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible; 