import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignPage from "./pages/sign";
import Home from "./pages/home";
import OrderPage from "./pages/order/OrderPage";
import CategoryPage from "./pages/category";
import ProductPage from "./pages/product";


const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/sign",
            element: <SignPage/>
        },
        {
            path: "/order",
            element: <OrderPage/>
        },
        {
            path: "/category",
            element: <CategoryPage/>
        },
        {
            path: "/product",
            element: <ProductPage/>
        },
    ]);

    return (

            <RouterProvider
                router={router}
            />
    );
}

export default App;