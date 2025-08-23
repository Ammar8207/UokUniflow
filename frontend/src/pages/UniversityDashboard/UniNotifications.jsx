// src/pages/university/UniNotifications.jsx
import React, { useState } from "react";
import SidebarLayout from "../../components/university/SidebarLayout";
import NotificationsPanel from "../../components/university/NotificationsPanel";

const UniNotifications = ({
  userName = "Admin",
  onLogout,
  departments = [],
}) => {
  // Dummy notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New student request submitted!", type: "info" },
    { id: 2, text: "Department report generated successfully!", type: "success" },
    { id: 3, text: "Failed to load faculty data.", type: "error" },
  ]);

  return (
    <SidebarLayout userName={userName} onLogout={onLogout} departments={departments}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>

        {/* Notifications Panel */}
        <NotificationsPanel notifications={notifications} />

        {/* Optional: Add dummy notification button */}
        <button
          onClick={() =>
            setNotifications((prev) => [
              ...prev,
              { id: Date.now(), text: "Another notification added!", type: "info" },
            ])
          }
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Notification
        </button>
      </div>
    </SidebarLayout>
  );
};

export default UniNotifications;
