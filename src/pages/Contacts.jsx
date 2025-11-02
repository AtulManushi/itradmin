import React, { useEffect, useState } from "react";
import API from "../api";
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaCity } from "react-icons/fa";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/admin/contacts")
      .then((res) => setContacts(res.data))
      .catch(() => alert("Failed to fetch contacts"));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📋 All Contacts</h2>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white sticky top-0">
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
              </tr>
            </thead>

            <tbody>
              {contacts.length > 0 ? (
                contacts.map((c, i) => (
                  <tr
                    key={i}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="py-3 px-6 text-gray-700">{i + 1}</td>
                    <td className="py-3 px-6 text-gray-800 font-medium">{c.name}</td>
                    <td className="py-3 px-6 text-gray-700">{c.email}</td>
                    <td className="py-3 px-6 text-gray-700">{c.contact}</td>
                    <td className="py-3 px-6 text-gray-700">{c.city}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No contacts found.
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
