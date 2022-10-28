import Devfest from "../pages/devfest";
import Home from "../pages/home";
import Events from "../pages/events";
import Contact from "../pages/contact";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/devfest",
    element: <Devfest />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
