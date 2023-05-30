import React from 'react';
import QuestionDisplay from './QuestionDisplay';

const StudentDashboard = ({ handleLogout }) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <QuestionDisplay />
    </div>
  );
};

export default StudentDashboard;