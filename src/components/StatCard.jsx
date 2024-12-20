import React from 'react';

const StatCard = ({ title, value, bgColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg shadow-md`}>
      <h2 className="font-semibold">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
};

export default StatCard;
