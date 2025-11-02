import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}
