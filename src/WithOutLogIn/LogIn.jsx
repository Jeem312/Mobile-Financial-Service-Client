import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvide/AuthProvide';
import toast from 'react-hot-toast';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    pin: ''
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, pin } = formData;
    try {
      const response = await login(email, pin);
      if (response.success) {
        toast.success("Logged in successfully!");
        navigate('/');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-700">
              PIN:
            </label>
            <input
              type="password"
              id="pin"
              name="pin"
              className="mt-1 p-2 w-full border rounded"
              value={formData.pin}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <label className="label mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="label-text-alt link link-hover">
              Register
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
