import React from 'react';
import StatCardHome from './StatCardHome';
import { FiPackage, FiUsers, FiShoppingCart } from 'react-icons/fi';

const ICONS = {
  FiPackage: FiPackage,
  FiUsers: FiUsers,
  FiShoppingCart: FiShoppingCart,
};

const Dashboard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = ICONS[stat.icon];
        return (
          <StatCardHome
            key={index}
            label={stat.label}
            value={stat.value}
            Icon={IconComponent}
            color={stat.color}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
