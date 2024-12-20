import React from 'react';

const FAQItem = ({ index, question, answer, onChange }) => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <label className="block">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => onChange(index, 'question', e.target.value)}
          className="w-full p-2 border border-gray-300"
          placeholder="Enter the question"
        />
      </div>
      <div className="mb-2">
        <label className="block">Answer</label>
        <textarea
          value={answer}
          onChange={(e) => onChange(index, 'answer', e.target.value)}
          className="w-full p-2 border border-gray-300"
          placeholder="Enter the answer"
        />
      </div>
    </div>
  );
};

export default FAQItem;
