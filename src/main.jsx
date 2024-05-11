import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import AboutMePage from "./pages/AboutMePage.jsx";
import ContactMePage from "./pages/ContactMePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

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
        path: "/contact",
        element: <ContactMePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
