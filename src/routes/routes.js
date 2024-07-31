import { createBrowserRouter,BrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/adminlayout";
import Login from "../pages/login";
import Register from "../pages/register";
import AdminLogin from '../pages/adminlogin'
import AuthLayout from "../layout/authlayout";
import AdminDash from '../pages/admindash';


const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/",
          element: <AdminDash />,
        },
        {
          path: "*",
          element: <h1>Error Page</h1>,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/adminlogin",
            element: <AdminLogin />,
          },
        {
          path: "*",
          element: <h1>Error Page</h1>,
        },
      ],
    },
  ]);
  
  export default router;