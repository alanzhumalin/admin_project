import React from 'react';

const BannerInput = ({ banner, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="banner" className="block text-lg font-semibold">
        Banner
      </label>
      <textarea
        id="banner"
        value={banner}
        onChange={onChange}
        className="w-full p-2 border border-gray-300"
        placeholder="Enter banner text"
      />
    </div>
  );
};

export default BannerInput;
