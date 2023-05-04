import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRoute from "../private/PrivateRoute";
import LoginLayouts from "../Layouts/LoginLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://culinary-chronicles-server.vercel.app/"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://culinary-chronicles-server.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/user",
    element: <LoginLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
