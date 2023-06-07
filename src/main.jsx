import ReactDOM from "react-dom/client";
import "./index.css";
import SignIn from "./pages/SignIn/index.jsx";

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import { Provider } from "react-redux";
import store from "./app/store";
import { Route } from "react-router-dom";
import { AuthLayout } from "./components/AuthLayout";
import { ProtectedLayout } from "./components/ProtectedLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="cars" element={<Cars />}></Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
