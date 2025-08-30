import React, { useState } from 'react';

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-6 border border-gray-700 rounded-lg overflow-hidden">
      <button
        className={`w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none transition-colors ${
          isOpen ? 'bg-blue-900/40 text-blue-300' : 'bg-gray-800/60 hover:bg-gray-700/50'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-lg">{title}</h3>
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
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-4 bg-gray-800/30">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleSection; 