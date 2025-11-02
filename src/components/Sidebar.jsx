import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><NavLink to="/orders">Orders</NavLink></li>
        <li><NavLink to="/paid">Paid Orders</NavLink></li>
        <li><NavLink to="/pending">Pending Payments</NavLink></li>
        <li><NavLink to="/change-password">Change Password</NavLink></li>
      </ul>
    </div>
  );
}
