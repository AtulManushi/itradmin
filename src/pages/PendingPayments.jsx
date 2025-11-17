import React, { useEffect, useState } from "react";
import API from "../api";
import {
  FaUserAlt,
  FaClipboardList,
  FaRupeeSign,
  FaExclamationCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaCity,
  FaTools,
} from "react-icons/fa";

export default function PendingPayments() {
  const [orders, setOrders] = useState([]);
  console.log("ror", orders);
  useEffect(() => {
    API.get("/admin/orders/pending")
      .then((res) => setOrders(res.data))
      .catch(() => alert("Failed to fetch pending payments"));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        💰 Pending Payments
      </h2>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <tr>
              <th className="py-3 px-6 font-semibold text-sm">#</th>
              <th className="py-3 px-6 font-semibold text-sm">
                <span className="inline-flex items-center gap-2">
                  <FaUserAlt /> Name
                </span>
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
              <th className="py-3 px-6 font-semibold text-sm">
                <span className="inline-flex items-center gap-2">
                  <FaClipboardList /> Plan
                </span>
              </th>
              <th className="py-3 px-6 font-semibold text-sm">
                <span className="inline-flex items-center gap-2">
                  <FaRupeeSign /> Amount
                </span>
              </th>
              <th className="py-3 px-6 font-semibold">
                <div className="flex items-center gap-2">
                  <FaTools /> Service
                </div>
              </th>
              <th className="py-3 px-6 font-semibold text-sm">
                <span className="inline-flex items-center gap-2">
                  <FaExclamationCircle /> Status
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((o, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
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
                  <td className="py-3 px-6 text-gray-700">₹{o.amount}</td>
                  <td className="py-3 px-6 text-gray-700 font-semibold">
                    {o.service}
                  </td>
                  <td className="py-3 px-6 text-gray-700">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
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
                  No pending payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
