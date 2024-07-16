import axios from 'axios';
import React, { useContext, useState } from 'react';
import useAxiosPublic from '../Hoocks/useAxiosPublic';
import toast from 'react-hot-toast';
import { fromJSON } from 'postcss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvide/AuthProvide';

const JoinAsUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        pin: '',
        mobileNumber: '',
        email: '',
        role: 'user',
        status:'pending',
        balance:0
      });
      
   const {register}=useContext(AuthContext);
   const navigate = useNavigate();
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
       
      };
      const handleSubmit = e =>{
        e.preventDefault();
       
       register(formData);
       navigate('/login');
       
      }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-700">5-digit PIN:</label>
            <input
              type="text"
              id="pin"
              name="pin"
              className="mt-1 p-2 w-full border rounded"
              value={formData.pin}
              onChange={handleChange}
              pattern="\d{5}"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              className="mt-1 p-2 w-full border rounded"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700">Role:</label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="agent"
                  name="role"
                  value="agent"
                  className="form-radio"
                  checked={formData.role === 'agent'}
                  onChange={handleChange}
                />
                <span className="ml-2">Agent</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  id="user"
                  name="role"
                  value="user"
                  className="form-radio"
                  checked={formData.role === 'user'}
                  onChange={handleChange}
                />
                <span className="ml-2">User</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
          <label className="label">
                  Have an account?{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    Please Login
                  </Link>
                </label>
        </form>
      </div>
    </div>
    );
};

export default JoinAsUser;