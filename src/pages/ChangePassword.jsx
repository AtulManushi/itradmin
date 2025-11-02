import React, { useState } from "react";
import API from "../api";

export default function ChangePassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      await API.post("/admin/change-password", {
        oldPassword: oldPass,
        newPassword: newPass,
      });
      alert("Password updated successfully");
      setOldPass("");
      setNewPass("");
    } catch {
      alert("Error updating password");
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form className="change-form" onSubmit={handleChange}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          required
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}
