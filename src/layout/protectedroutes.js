import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("token");
  if (user) {
    return true;
  } else {
    return false;
  }
};

function ProtectedRoutes({ children }) {
  const user = useAuth();

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoutes;