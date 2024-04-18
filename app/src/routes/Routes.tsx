import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../components/page/HomePage";

const Routes = () => {

  // Define routes accessible for anyone.
  const mainRoute = [
    {
      path: "/",
      element: <HomePage/>
    },
  ];

  // Routes.
  const router = createBrowserRouter([
    ...mainRoute,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
