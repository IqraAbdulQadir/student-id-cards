// StudentsList.tsx

import React from 'react';
import StudentCard from './StudentCard';

const StudentsList: React.FC = () => {
  const students = [
    { name: 'Ali Khan', age: 16, rollNumber: 'A123', className: '10th Grade' },
    { name: 'Sara Ahmed', age: 15, rollNumber: 'S456', className: '9th Grade' },
    { name: 'Omar Farooq', age: 17, rollNumber: 'O789', className: '11th Grade' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          className={student.className}
        />
      ))}
    </div>
  );
};

export default StudentsList;
