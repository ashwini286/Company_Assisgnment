
import React, { useState } from 'react';
import AdminLogin from './Componantes/AdminLogin';
import AdminDashboard from './Componantes/AdminDashboard';
import StudentLogin from './Componantes/StudentLogin';
import StudentDashboard from './Componantes/StudentDashboard';

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);

  const handleAdminLogin = (username, password) => {

    if (username === 'admin' && password === 'admin'){
      setIsAdminLoggedIn(true);
      alert("Login Successfully")
    }
    // Perform admin login validation
    // Set isAdminLoggedIn state to true if login is successful
  };

  const handleStudentLogin = (username, password) => {

    if (username === 'student' && password === 'student'){
      setIsStudentLoggedIn(true);
      console.log("Student login Successfully")
    }

    // Perform student login validation
    // Set isStudentLoggedIn state to true if login is successful
  };

  const handleAdminLogout = () => {

    // Perform admin logout logic
    setIsAdminLoggedIn(false);
  };

  const handleStudentLogout = () => {
    // Perform student logout logic
    setIsStudentLoggedIn(false);
  };

  return (
    <div>
      {!isAdminLoggedIn && !isStudentLoggedIn && (
        <>
          <AdminLogin handleLogin={handleAdminLogin} />
          <StudentLogin handleLogin={handleStudentLogin} />
        </>
      )}
      {isAdminLoggedIn && <AdminDashboard handleLogout={handleAdminLogout} />}
      {isStudentLoggedIn && (
        <StudentDashboard handleLogout={handleStudentLogout} />
      )}
    </div>
  );
};

export default App;
