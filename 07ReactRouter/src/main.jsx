import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import About from './component/AboutUs/About.jsx'
import  HomeH from './component/Home/HomeH.jsx'

import Contact from './component/ContactUs/Contact.jsx'


const router = createBrowserRouter([
  { 
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeH />
      },{
        path: "/about",
        element: <About />
      },
      {
        path:"/contactus",
        element : <Contact  />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
