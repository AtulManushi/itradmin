import React, { useEffect, useState } from "react";
import API from "../api";
import {
  FaUserAlt,
  FaClipboardList,
  FaCalendarAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaCity,
} from "react-icons/fa";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/admin/orders")
      .then((res) => setOrders(res.data))
      .catch(() => alert("Failed to fetch orders"));
  }, []);

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-700 border-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      case "failed":
        return "bg-red-100 text-red-700 border-red-400";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📦 All Orders</h2>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="py-3 px-6 font-semibold">#</th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaUserAlt /> Name
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaEnvelope /> Email
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt /> Contact
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaCity /> City
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaClipboardList /> Plan
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> Tenure
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaRupeeSign /> Amount
                  </div>
                </th>
                <th className="py-3 px-6 font-semibold">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle /> Status
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((o, i) => (
                  <tr
                    key={i}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="py-3 px-6 text-gray-700">{i + 1}</td>
                    <td className="py-3 px-6 text-gray-800 font-medium">
                      {o.name || "N/A"}
                    </td>
                    <td className="py-3 px-6 text-gray-800 font-medium">
                      {o.email || "N/A"}
                    </td>
                    <td className="py-3 px-6 text-gray-800 font-medium">
                      {o.contact || "N/A"}
                    </td>
                    <td className="py-3 px-6 text-gray-800 font-medium">
                      {o.location || "N/A"}
                    </td>
                    <td className="py-3 px-6 text-gray-700">{o.plan}</td>
                    <td className="py-3 px-6 text-gray-700">{o.tenure}</td>
                    <td className="py-3 px-6 text-gray-700 font-semibold">
                      ₹{o.amount}
                    </td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusClass(
                          o.status
                        )}`}
                      >
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
