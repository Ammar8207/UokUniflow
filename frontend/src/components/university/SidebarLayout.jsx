// src/components/university/SidebarLayout.jsx
import React from "react";
import { Users, BarChart3, Bell, BookOpen, Layers } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "../LogoutButton";

const SidebarLayout = ({ userName = "Admin", children, departments = [], notifications = [] }) => {
  const location = useLocation(); // Get current route

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col p-6 space-y-6">
        <h1 className="text-2xl font-bold text-indigo-700">Uni Admin</h1>
        <nav className="flex flex-col gap-4 text-sm">
          <Link
            to="/uni-dashboard"
            className={`flex items-center gap-3 font-semibold ${
              isActive("/uni-dashboard") ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            <Users className="w-5 h-5" /> Dashboard
          </Link>

          <Link
            to="/uni-dashboard/student-records"
            className={`flex items-center gap-3 ${
              isActive("/uni-dashboard/student-records") ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            <BookOpen className="w-5 h-5" /> Student Records
          </Link>

          <Link
            to="/uni-dashboard/departments"
            className={`flex items-center gap-3 ${
              isActive("/uni-dashboard/departments") ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            <Layers className="w-5 h-5" /> Departments
          </Link>

          <Link
            to="/uni-dashboard/analytics"
            className={`flex items-center gap-3 ${
              isActive("/uni-dashboard/analytics") ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            <BarChart3 className="w-5 h-5" /> Analytics
          </Link>

          {/* Notifications Link with Badge */}
          <Link
            to="/uni-dashboard/notifications"
            className={`relative flex items-center gap-3 ${
              isActive("/uni-dashboard/notifications") ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
            }`}
          >
            <Bell className="w-5 h-5" /> Notifications
            {notifications.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {notifications.length}
              </span>
            )}
          </Link>

          {/* Departments List */}
          {departments.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Departments</h3>
              {departments.map((d) => (
                <Link
                  key={d.name}
                  to={`/uni-dashboard/departments#${d.name}`}
                  className="w-full text-left text-gray-700 hover:text-indigo-700 mb-1"
                >
                  {d.name}
                </Link>
              ))}
            </div>
          )}

          {/* Logout */}
          <div className="mt-auto">
            <LogoutButton />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold mb-2 md:mb-0">Welcome, {userName}</h2>
          <div className="text-gray-600">University of Karachi</div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
