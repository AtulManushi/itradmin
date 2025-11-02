import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaBox,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import API from "../api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    orders: 0,
    paid: 0,
    unpaid: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contacts, orders, paid, unpaid] = await Promise.all([
          API.get("/admin/contacts/count"),
          API.get("/admin/orders/count"),
          API.get("/admin/orders/paid/count"),
          API.get("/admin/orders/unpaid"),
        ]);
        setStats({
          contacts: contacts.data,
          orders: orders.data,
          paid: paid.data,
          unpaid: unpaid.data,
        });
      } catch {
        alert("Error fetching dashboard data");
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contacts */}
        <Link to="/contacts">
          <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300">
            <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
              <FaUsers className="text-3xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Contacts
              </h3>
              <p className="text-3xl font-bold text-indigo-600">
                {stats.contacts}
              </p>
            </div>
          </div>
        </Link>
        {/* Orders */}
        <Link to="/orders">
          <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300">
            <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
              <FaBox className="text-3xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Total Orders
              </h3>
              <p className="text-3xl font-bold text-blue-600">{stats.orders}</p>
            </div>
          </div>
        </Link>
        {/* Paid Orders */}
        <Link to="/paid">
          <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300">
            <div className="p-4 bg-green-100 text-green-600 rounded-full">
              <FaMoneyBillWave className="text-3xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Paid Orders
              </h3>
              <p className="text-3xl font-bold text-green-600">{stats.paid}</p>
            </div>
          </div>
        </Link>
        {/* Unpaid Orders */}
        <Link to="/pending">
          <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300">
            <div className="p-4 bg-red-100 text-red-600 rounded-full">
              <FaMoneyCheckAlt className="text-3xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Unpaid Orders
              </h3>
              <p className="text-3xl font-bold text-red-600">{stats.unpaid}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
