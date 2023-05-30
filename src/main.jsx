import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignIn from "./pages/SignIn/index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import { useSelector } from "react-redux";
import { selectUser } from "./features/signIn/userSlice";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  const user = useSelector(selectUser);

  return <>{user ? <Dashboard /> : <SignIn />}</>;
};

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
