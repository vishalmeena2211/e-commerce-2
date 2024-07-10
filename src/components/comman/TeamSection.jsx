// TeamSection.js

import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://placekitten.com/200/200', // Replace with team member image URL
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: 'https://placekitten.com/201/201', // Replace with team member image URL
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      role: 'Marketing Specialist',
      image: 'https://placekitten.com/202/202', // Replace with team member image URL
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 rounded-lg overflow-hidden relative group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover object-center group-hover:opacity-70 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
