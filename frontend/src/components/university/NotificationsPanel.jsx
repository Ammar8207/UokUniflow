// // src/components/university/NotificationsPanel.jsx
// import React from "react";

// const NotificationsPanel = ({ notifications }) => (
//   <ul className="space-y-2">
//     {notifications.map((n) => (
//       <li
//         key={n.id}
//         className={`p-2 rounded ${
//           n.type === "success"
//             ? "bg-green-100 text-green-800"
//             : n.type === "error"
//             ? "bg-red-100 text-red-800"
//             : "bg-blue-100 text-blue-800"
//         }`}
//       >
//         {n.text}
//       </li>
//     ))}
//   </ul>
// );

// export default NotificationsPanel;
// src/components/university/NotificationsPanel.jsx
import React, { useState } from "react";

const NotificationsPanel = ({ notifications: initialNotifications }) => {
  const [notifications, setNotifications] = useState(initialNotifications || []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 w-80 z-50">
      <ul className="space-y-2">
        {notifications.map((n) => (
          <li
            key={n.id}
            className={`flex justify-between items-center p-3 rounded shadow-md ${
              n.type === "success"
                ? "bg-green-100 text-green-800"
                : n.type === "error"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            <span>{n.text}</span>
            <button
              onClick={() => removeNotification(n.id)}
              className="ml-4 text-xl font-bold hover:text-gray-700"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
