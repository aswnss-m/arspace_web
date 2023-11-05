"use client";
import { useState } from 'react';
import './Login.css';

function Login() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // You can access the username and password from the user object here
    const { username, password } = user;
    console.log('Username:', username);
    console.log('Password:', password);

    // You can perform login logic here, for example, sending the data to a server.
  };

  return (
    <div className="form-container">
      <form className="form login-form">
        <h1 className="form-title">Login</h1>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            className="text-input"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            className="text-input"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <div className="button-group">
          <input
            type="submit"
            value="Login"
            className="button button-primary"
            onClick={handleLogin}
          />
          <input
            type="button"
            value="Register"
            className="button button-secondary"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
