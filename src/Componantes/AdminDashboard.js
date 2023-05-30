import React from 'react';
import QuestionForm from './QuestionForm';

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <QuestionForm />
    </div>
  );
};

export default AdminDashboard;