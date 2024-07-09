import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from '../../Tinbu-Cloud/src/components/Home/Home'

const Routes = () => {

    const router = createBrowserRouter([

        {
            path: '/',
            element: <Home/>,
            }

    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes
