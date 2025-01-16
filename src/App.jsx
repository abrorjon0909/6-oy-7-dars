import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    surname: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (page === 'login') {
      loginUser();
    } else if (page === 'register') {
      registerUser();
    }
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log('Login Response:', response.data);
      setPage('home');
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        password: formData.password,
        age: formData.age,
      });
      console.log('Register Response:', response.data);
      setPage('home');
    } catch (error) {
      console.error('Register Error:', error.response?.data || error.message);
    }
  };

  const showLogin = () => {
    setPage('login');
  };

  const showRegister = () => {
    setPage('register');
  };

  return (
    <div>
      {page === 'home' && (
        <div className='wrapper'>
          <h1 className='h1'>Xush kelibsiz!</h1>
          <div className='buttons'>
            <button className='button' onClick={showLogin}>Login</button>
            <button className='button' onClick={showRegister}>Register</button>
          </div>
        </div>
      )}

      {page === 'login' && (
        <div>
          <h1 className='h1'>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='input'
              type="text"
              placeholder="Ism"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              className='input'
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              className='input'
              type="password"
              placeholder="Parol"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <br />
            <button className='buton' type="submit">Login</button>
          </form>
        </div>
      )}

      {page === 'register' && (
        <div>
          <h1 className='h1'>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='input'
              type="text"
              placeholder="Ism"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              className='input'
              type="text"
              placeholder="Familiya"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              className='input'
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              className='input'
              type="password"
              placeholder="Parol"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              className='input'
              type="number"
              placeholder="Yosh"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <br />
            <button className='buton' type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
