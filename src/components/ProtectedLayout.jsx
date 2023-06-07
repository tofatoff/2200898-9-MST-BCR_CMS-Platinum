import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../customhooks/useAuth";

export const ProtectedLayout = () => {
  const outlet = useOutlet();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <>{outlet}</>;
};
