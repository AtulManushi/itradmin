import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import Orders from "./pages/Orders";
import PendingPayments from "./pages/PendingPayments";
import ChangePassword from "./pages/ChangePassword";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PaidOrders from "./pages/PaidOrders";

// Protected Layout wrapper
function ProtectedLayout({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="layout flex">
      <Sidebar />
      <div className="main-content flex-1">
        <Navbar />
        <div className="page-container p-4">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public route */}
      <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />
      <Route
        path="/contacts"
        element={
          <ProtectedLayout>
            <Contacts />
          </ProtectedLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedLayout>
            <Orders />
          </ProtectedLayout>
        }
      />
      <Route
        path="/paid"
        element={
          <ProtectedLayout>
            <PaidOrders />
          </ProtectedLayout>
        }
      />
      <Route
        path="/pending"
        element={
          <ProtectedLayout>
            <PendingPayments />
          </ProtectedLayout>
        }
      />
      <Route
        path="/change-password"
        element={
          <ProtectedLayout>
            <ChangePassword />
          </ProtectedLayout>
        }
      />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to={token ? "/dashboard" : "/"} />} />
    </Routes>
  );
}
