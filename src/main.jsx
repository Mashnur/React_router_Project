import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Contact from './components/Home/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import Erorpage from './components/Erorpage/Erorpage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Erorpage></Erorpage>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path:'/About',
        element:  <About></About>
      },
      {
        path:'/user',
        loader:()=>fetch('https://jsonplaceholder.org/users'),
        element:<User></User>
      },
     {
      path: '/users/:usersId',
      loader : ({params})=>fetch(`https://jsonplaceholder.org/users/${params.usersId}`),
      element: <UserDetails></UserDetails>
     },
     {
      path: '/Posts',
      loader:({params})=>fetch(`https://jsonplaceholder.org/posts`),
      element: <Posts></Posts>
     }
    ],
  },
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
