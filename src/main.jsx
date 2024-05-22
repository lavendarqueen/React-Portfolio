import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMePage from "./pages/AboutMe.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import ContactMePage from "./pages/ContactMePage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },

      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/contact",
        element: <ContactMePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
