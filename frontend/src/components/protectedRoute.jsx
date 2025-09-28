import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

/**
 * Redirects to /login if no token. Keeps the redirect location in state so you can
 * implement return-to behavior after login (not required now).
 */
export default function ProtectedRoute({ children }) {
  const token = useSelector((s) => s.auth.token);
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
