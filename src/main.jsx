import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import ErrorPage from './Shared/ErrorPage.jsx';
import Home from './Shared/Home/Home.jsx';
import JoinAsUser from './WithOutLogIn/JoinAsUser.jsx';

import LogIn from './WithOutLogIn/LogIn.jsx';
import AuthProvider from './AuthProvide/AuthProvide.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
  children:[
   {
    path:'/',
    element:<Home></Home>
   },
  
   {
    path:'/userregister',
    element:<JoinAsUser></JoinAsUser>,
   },
   {
    path:'/login',
    element:<LogIn></LogIn>
   }

  ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  
  </React.StrictMode>,
)
