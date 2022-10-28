import Devfest from "../pages/devfest";
import Home from "../pages/home";
import Speaker from "../pages/speakers";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/speakers",
    element: <Speaker />,
  },
  {
    path: "/devfest",
    element: <Devfest />,
  },
]);

export default router;
