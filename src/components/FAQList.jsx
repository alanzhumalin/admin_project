import React from 'react';
import FAQItem from './FAQItem';

const FAQList = ({ faqs, onFaqChange, onAddFaq }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">FAQs</h2>
      {faqs.map((item, index) => (
        <FAQItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          onChange={onFaqChange}
        />
      ))}
      <button
        onClick={onAddFaq}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add FAQ
      </button>
    </div>
  );
};

export default FAQList;
