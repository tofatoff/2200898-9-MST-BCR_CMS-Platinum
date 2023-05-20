import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignIn from "./pages/SignIn/index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
