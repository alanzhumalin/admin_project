import React from 'react';

const StatCardHome = ({ label, value, Icon, color }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
      <Icon className={`${color} text-5xl mr-4`} />
      <div>
        <h2 className="text-xl font-semibold mb-1">{label}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCardHome;
