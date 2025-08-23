// src/components/LogoutButton.jsx
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        logout();
        navigate("/login");
      }}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
