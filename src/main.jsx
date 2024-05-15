import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMePage from "./pages/AboutMePage";
import ErrorPage from "./pages/ErrorPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import ContactMePage from "./pages/ContactMePage";
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
        path: "/portfolioPage",
        element: <PortfolioPage />,
      },
      {
        path: "/resumePage",
        element: <ResumePage />,
      },
      {
        path: "/contactMePage",
        element: <ContactMePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
