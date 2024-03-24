import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/layout/Main";
import Home from "../Component/Pages/Home/Home";
import Shop from "../Component/Pages/Shop/Shop";
import Errorpage from "../Component/Pages/ErrorPages/Errorpage";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Errorpage/>,
      children:[
         {
            path: '/',
            element: <Home/>
         },
         {
            path: '/shop',
            element: <Shop/>
         }
      ]
    },
  ]);