import React, { useEffect, useState } from "react";
import API from "../api";
import {
  FaUserAlt,
  FaClipboardList,
  FaRupeeSign,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaCity,
} from "react-icons/fa";

export default function PaidOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/admin/orders/paid")
      .then((res) => setOrders(res.data))
      .catch(() => alert("Failed to fetch paid orders"));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        💰 Paid Orders
      </h2>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <tr>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider text-center">
                #
              </th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FaUserAlt className="text-sm" /> Name
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
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FaClipboardList className="text-sm" /> Plan
                </div>
              </th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FaRupeeSign className="text-sm" /> Amount
                </div>
              </th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-sm" /> Status
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((o, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="py-3 px-6 text-gray-700 text-center">
                    {i + 1}
                  </td>
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
                  <td className="py-3 px-6 text-gray-700">
                    ₹{o.amount}
                  </td>
                  <td className="py-3 px-6">
                    <span
                      className={`px-3 py-1 text-sm rounded-full font-semibold ${
                        o.status === "paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No paid orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
