import React, { useContext, useState } from 'react';
import { IoIosChatboxes } from 'react-icons/io';
import { BiHome, BiUser, BiCog, BiLogOut } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvide/AuthProvide';
import { Link } from 'react-router-dom';
import useAgentRole from '../../Hoocks/useAgentRole';
import useUserRole from '../../Hoocks/useUserRole';
import useAdmin from '../../Hoocks/useAdmin';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 const {user,logout}= useContext(AuthContext);
 const [isAgent, refetch]=useAgentRole();
 const [isUser,refetch]=useUserRole();
 const [isAdmin, refetch] =useAdmin();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-white shadow-md p-6 h-full z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <IoIosChatboxes className="text-3xl text-amber-400" />
            <h2 className="text-2xl font-medium text-amber-400">FinMob</h2>
          </div>
        </div>
        <ul className="space-y-4">
        {isAdmin && (
            <>
              <li className="flex items-center">
                <BiHome className="text-gray-700 mr-2" size={24} />
                <Link to='/adminhome' className="text-gray-700 hover:text-blue-600 transition">
                  Admin Home
                </Link>
              </li>
              <li className="flex items-center">
                <BiUser className="text-gray-700 mr-2" size={24} />
                <Link to='/admintransactions' className="text-gray-700 hover:text-blue-600 transition">
                  All Transactions
                </Link>
              </li>
            </>
          )}
          {isAgent && (
            <>
              <li className="flex items-center">
                <BiHome className="text-gray-700 mr-2" size={24} />
                <Link to='/agenthome' className="text-gray-700 hover:text-blue-600 transition">
                  Agent Home
                </Link>
              </li>
              <li className="flex items-center">
                <BiUser className="text-gray-700 mr-2" size={24} />
                <Link to='/balanceinquiry' className="text-gray-700 hover:text-blue-600 transition">
                  Balance Inquiry
                </Link>
              </li>
              <li className="flex items-center">
                <BiUser className="text-gray-700 mr-2" size={24} />
                <Link to='/transactionhistory' className="text-gray-700 hover:text-blue-600 transition">
                  Transactions History
                </Link>
              </li>
            </>
          )}
          {!isAdmin && !isAgent && (
            <>
              <li className="flex items-center">
                <BiHome className="text-gray-700 mr-2" size={24} />
                <Link to='/userhome' className="text-gray-700 hover:text-blue-600 transition">
                  User Home
                </Link>
              </li>
              <li className="flex items-center">
                <BiUser className="text-gray-700 mr-2" size={24} />
                <Link to='/cashin' className="text-gray-700 hover:text-blue-600 transition">
                  Cash In
                </Link>
              </li>
              <li className="flex items-center">
                <BiUser className="text-gray-700 mr-2" size={24} />
                <Link to='/cashout' className="text-gray-700 hover:text-blue-600 transition">
                  Cash Out
                </Link>
              </li>
              <li className="flex items-center">
                <BiUser className="text-gray-700 mr-2" size={24} />
                <Link to='/balanceinquiry' className="text-gray-700 hover:text-blue-600 transition">
                  Balance Inquiry
                </Link>
              </li>
              <li className="flex items-center">
                <BiUser className="text-gray-700 mr-2" size={24} />
                <Link to='/transactionhistory' className="text-gray-700 hover:text-blue-600 transition">
                  Transactions History
                </Link>
              </li>
            </>
          )}
          <li className="flex items-center">
            <BiLogOut className="text-red-500 mr-2" size={24} />
            <button onClick={logout} className="text-red-500 hover:text-red-700 transition">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden fixed top-0 z-50 bg-primary text-white p-1">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={16} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
          <div className="w-4 h-4 rounded-full animate-pulse bg-amber-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-amber-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-amber-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
