import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import AboutMePage from "./Pages/AboutMePage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ResumePage from "./Pages/ResumePage.jsx";
import ContactMePage from "./Pages/ContactMePage.jsx";
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
