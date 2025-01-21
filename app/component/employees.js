// components/VisitingCards.js
import React from 'react';

const Employees = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main St, City, Country',
      rank: 'CEO',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+0987654321',
      address: '456 Elm St, City, Country',
      rank: 'IT Specialist',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+1122334455',
      address: '789 Oak St, City, Country',
      rank: 'Marketing Manager',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-center text-gray-600">{member.rank}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-700">
                <strong>Email:</strong> {member.email}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Phone:</strong> {member.phone}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Address:</strong> {member.address}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
