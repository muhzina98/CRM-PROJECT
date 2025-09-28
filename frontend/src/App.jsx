import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
 import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import CustomersPage from "./pages/CustomerPage";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}/>

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <CustomersPage />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>
    </div>
  );
}
