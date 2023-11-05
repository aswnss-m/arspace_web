"use client";
import './Register.css'
import { useState } from 'react';
function Register() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // You can access the username and password from the user object here
   console.log(user)

    // You can perform login logic here, for example, sending the data to a server.
  };

  return (
    <div className="form-container">
      <form className="form login-form">
        <h1 className="form-title">Register</h1>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            className="text-input"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            className="text-input"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </label>
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
        <label htmlFor="password">
          Confirm Password
          <input
            type="password"
            name="c_password"
            className="text-input"
            value={user.c_password}
            onChange={handleInputChange}
            required
          />
        </label>
        <div className="button-group">
          <input
            type="submit"
            value="Register"
            className="button button-primary"
            onClick={handleRegister}
          />
          <input
            type="button"
            value="Login"
            className="button button-secondary"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;

