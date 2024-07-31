import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Homepage from '../src/components/Homepage';
import ShoppingCart from './components/Cart/ShoppingCart';
import Checkout from './components/Cart/Checkout';
import CartProvider, { CartContext } from './components/Cart/Cartcontent';

const Routes = () => {

    const router = createBrowserRouter([

        {
            path: '/',
            element: <Homepage />,
        },

        {
            path: '/shoppingcart',
            element: <ShoppingCart />
        },

        {
            path:'/checkout',
            element:<Checkout/>
        },

        {
            path:'/cart',
            element:<CartProvider/>
        }

    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes
