import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

const Routes = () => {

    const router = createBrowserRouter([

        {
            path: '/',
            }

    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes
