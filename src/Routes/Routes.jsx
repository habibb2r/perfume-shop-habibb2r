import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Layouts/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import About from "../Pages/About/About";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/perfumedetails/:id',
            element: <ProductDetails></ProductDetails>
        },
        {
            path: '/about',
            element: <About></About>
        }
      ]
    },
  ]);