import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Aboutus from './Components/About us/Aboutus';
import Booking from './Components/Booking/Booking';
import Blogs from './Components/Blogs/Blogs';
import OurTeam from './Components/OurTeam/OurTeam';
import Faqs from './Components/Faqs/Faqs';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import Team from './Components/Team/Team';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'Home', element: <Home /> },
        { path: 'About us', element: <Aboutus /> },
        { path: 'Services', element: <Services /> },
        { path: 'contact us', element: <Contact /> },
        { path: 'Team', element: <Team /> },
        { path: 'Booking', element: <Booking /> },
        { path: 'Blogs', element: <Blogs /> },
        { path: 'Faqs', element: <Faqs /> },
        { path: 'Login', element: <Login /> },
        { path: 'OurTeam', element: <OurTeam /> },
      ]
    }])

  return <>

    <RouterProvider router={router} />

  </>
}

