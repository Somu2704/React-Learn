import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router";
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/Home';
import DashBoard from './components/DashBoard';
import About from './components/About';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router=createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:"/about",
    element:
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:"/dashboard",
    element:
    <div>
      <Navbar/>
      <DashBoard/>
    </div>,
    children:[
      {
        path:'courses',
        element:<Courses/>
      },
      {
        path:'mock-test',
        element:<MockTest/>
      },
      {
        path:'reports',
        element:<Reports/>
      },
    ]
  },
  {
    path:"/student/:id",
    element:
    <div>
      <Navbar/>
      <ParamComp/>
    </div>
  },
  {
    path:'*',
    element:<NotFound/>
  },
])

function App() {
  

  return (
    <>
        <div>
            <RouterProvider router={router} />
        </div>

    </>
  )
}

export default App
