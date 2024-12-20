import React from 'react';

const PromoMessageInput = ({ promoMessage, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="promoMessage" className="block text-lg font-semibold">
        Promotional Message
      </label>
      <textarea
        id="promoMessage"
        value={promoMessage}
        onChange={onChange}
        className="w-full p-2 border border-gray-300"
        placeholder="Enter promotional message"
      />
    </div>
  );
};

export default PromoMessageInput;
