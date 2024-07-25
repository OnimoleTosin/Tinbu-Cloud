import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Frontapage from './components/Frontapage';
import ShoppingCart from './components/Cart/ShoppingCart';
import Checkout from './components/Cart/Cheackout';

const Routes = () => {

    const router = createBrowserRouter([

        {
            path: '/',
            element: <Frontapage />,
        },

        {
            path: '/shoppingcart',
            element: <ShoppingCart />
        },

        {
            path:'/checkout',
            element:<Checkout/>
        }

    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes
