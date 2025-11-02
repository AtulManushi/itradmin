import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/admin/login", { email, password });
      console.log("Login response:", res.data);

      localStorage.setItem("token", res.data.token);

      Swal.fire({
        title: "Login Successful 🎉",
        text: "Welcome back, Admin!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Go to Dashboard",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Login Failed ❌",
        text: "Invalid email or password.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
