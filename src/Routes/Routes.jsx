import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Layouts/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";



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
        }
      ]
    },
  ]);