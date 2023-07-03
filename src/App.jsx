import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./pages/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cars from "./pages/Cars/Cars";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import FormPage from "./pages/Cars/form";
import NewCar from "./pages/Cars/NewCar";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/new-car" element={<NewCar />} />
        <Route path="/cars/:carID/edit" element={<FormPage />} />
      </Route>
    </Routes>
  );
}

export default App;
