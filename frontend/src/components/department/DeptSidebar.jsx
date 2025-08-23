// src/components/department/DeptSidebar.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, BarChart3, Bell, Users, LogOut } from "lucide-react";
import { AuthContext } from "../../context/authContext";

export default function DepartmentSidebar({ active }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [notificationCount] = useState(5);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const notificationPath =
    user?.role === "dept_admin"
      ? "/department-notifications"
      : user?.role === "uni_admin"
      ? "/uni-notifications"
      : "/notifications";

  const menuItems = [
    { name: "Dashboard", icon: FileText, path: "/department-admin" },
    { name: "Student Requests", icon: FileText, path: "/department-requests" },
    { name: "Student Records", icon: Users, path: "/student-records" },
    { name: "Statistics", icon: BarChart3, path: "/statistics" },
    { name: "Notifications", icon: Bell, path: notificationPath },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-6 space-y-6">
      <div className="text-2xl font-bold text-green-600">Dept. Dashboard</div>
      <nav className="flex flex-col gap-4 text-sm">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 ${
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
              {item.name === "Notifications" && notificationCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {notificationCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
