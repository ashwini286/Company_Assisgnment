import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform additional authentication or processing here
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
      // Perform further actions or grant access to the user
    } else {
      console.log('Invalid credentials. Login failed.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the login credentials
    if (username && password) {
      // Call handleLogin function with the credentials
      handleLogin();
    } else {
      console.log('Username and password are required.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
