import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../src/components/Homepage';
import ShoppingCart from './components/Cart/ShoppingCart';
import Checkout from './components/Cart/Checkout';
import CartProvider from './components/Cart/CartContext';
import BrandsPage from './components/Brand/BrandsPage';
import BrandDetails from './components/Brand/BrandDetails';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />,
        },
        {
            path: '/shoppingcart',
            element: <ShoppingCart />,
        },
        {
            path: '/brands',
            element: <BrandsPage />,
        },
        {
            path: '/:gender/:brandId',
            element: <BrandDetails />,
        },
        {
            path: '/checkout',
            element: <Checkout />,
        },
        {
            path: '*',
            element: <NotFound />,
        }
    ], {
        // Error boundary configuration
        errorElement: <ErrorBoundary />,
    });

    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
};

export default Routes;
