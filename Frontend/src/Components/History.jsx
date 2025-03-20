import React from 'react';

// Dummy data for the latest plant searches
const dummyData = [
  {
    user: { name: 'Alice Johnson', email: 'alice@example.com' },
    type: 'species',
    details: 'Checked information about the Monstera Deliciosa.',
    date: '2023-10-01 10:00 AM',
  },
  {
    user: { name: 'Bob Smith', email: 'bob@example.com' },
    type: 'disease',
    details: 'Checked information about Powdery Mildew.',
    date: '2023-10-02 11:30 AM',
  },
  {
    user: { name: 'Charlie Brown', email: 'charlie@example.com' },
    type: 'species',
    details: 'Checked information about the Fiddle Leaf Fig.',
    date: '2023-10-03 01:15 PM',
  },
  {
    user: { name: 'Diana Prince', email: 'diana@example.com' },
    type: 'disease',
    details: 'Checked information about Root Rot.',
    date: '2023-10-04 02:45 PM',
  },
  {
    user: { name: 'Ethan Hunt', email: 'ethan@example.com' },
    type: 'species',
    details: 'Checked information about the Snake Plant.',
    date: '2023-10-05 03:30 PM',
  },
];

const SimpleCheckDisplay = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-3xl p-8 mt-3 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Latest Plant Searches</h1>
        <div className="space-y-4">
          {dummyData.map((check, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
              <p className={`font-semibold ${check.type === 'species' ? 'text-green-600' : 'text-red-600'}`}>
                <strong>Type:</strong> {check.type.charAt(0).toUpperCase() + check.type.slice(1)}
              </p>
              <p className="text-gray-700">
                <strong>User:</strong> {check.user.name} ({check.user.email})
              </p>
              <p className="text-gray-800">
                <strong>Details:</strong> {check.details}
              </p>
              <p className="text-gray-500 italic">
                <strong>Date:</strong> {check.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCheckDisplay;