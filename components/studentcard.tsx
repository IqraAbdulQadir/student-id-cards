// StudentCard.tsx

import React from 'react';

type StudentProps = {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
};

const StudentCard: React.FC<StudentProps> = ({ name, age, rollNumber, className }) => {
  return (
    <div className="max-w-xs w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">Age: {age}</p>
        <p className="text-gray-500">Roll Number: {rollNumber}</p>
        <p className="text-gray-500">Class: {className}</p>
      </div>
    </div>
  );
};

export default StudentCard;
