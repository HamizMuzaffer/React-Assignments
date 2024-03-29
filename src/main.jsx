import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom" 
import App from './App.jsx'
import Products from './pages/Products.jsx'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import Login from './pages/Login.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/products',
        element: <Products />
      },
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
