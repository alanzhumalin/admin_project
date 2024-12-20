import React, { useEffect, useState } from 'react';
import { getUserDetailsByUserId } from '../services/userService';

const CustomerActivity = ({ data }) => {
  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    const fetchUserNames = async () => {
      const userMap = {};

      for (const activity of data) {
        try {
          const user = await getUserDetailsByUserId(activity.user);
          userMap[activity.user] = `${user.firstName} ${user.lastName}`;
        } catch (error) {
          console.error(`Error fetching user details for ${activity.user}:`, error);
          userMap[activity.user] = 'Deleted Account';
        }
      }

      setUserNames(userMap);
    };

    fetchUserNames();
  }, [data]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Customer Activity</h2>
      <ul className="space-y-4">
        {data.map((activity, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm bg-gray-50 sm:flex sm:justify-between sm:items-center"
          >
            <div className="mb-2 sm:mb-0">
              <strong className="block text-lg sm:inline">
                {userNames[activity.user] || 'Loading...'}
              </strong>
              <span className="block text-gray-500 sm:inline sm:ml-2">
                Last Login: {activity.lastLogin}
              </span>
            </div>
            <div className="text-sm text-gray-700 sm:text-right">
              Activity: {activity.activity}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerActivity;
