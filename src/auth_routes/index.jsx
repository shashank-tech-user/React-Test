import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "../context";

export const AuthRoute = ({ children }) => {
  const value = useAuthState();
  if (value.token === null) {
    return children;
  }
  return <Navigate to="/" replace />;
}

export const ProtectedRoute = ({ children }) => {
  const value = useAuthState();
  if (value.token === null) {
    return <Navigate to="/login" replace />;
  }
  return children;
}