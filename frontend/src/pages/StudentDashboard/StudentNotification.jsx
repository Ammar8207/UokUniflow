// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiBell, FiXCircle, FiCheckCircle } from "react-icons/fi";

// const initialNotifications = [
//   {
//     id: 1,
//     title: "Transcript Approved",
//     message: "Your transcript request has been approved by the university.",
//     date: "2025-08-09",
//     read: false,
//     type: "success",
//   },
//   {
//     id: 2,
//     title: "New Comment on Your Form",
//     message: "The department added a comment on your bonafide request.",
//     date: "2025-08-08",
//     read: false,
//     type: "info",
//   },
//   {
//     id: 3,
//     title: "Form Submission Received",
//     message: "We have received your enrollment form successfully.",
//     date: "2025-08-07",
//     read: true,
//     type: "success",
//   },
// ];

// const iconMap = {
//   success: <FiCheckCircle className="text-green-600 text-xl" />,
//   info: <FiBell className="text-blue-600 text-xl" />,
//   error: <FiXCircle className="text-red-600 text-xl" />,
// };

// const Notification = () => {
//   const navigate = useNavigate();
//   const [notifications, setNotifications] = useState(initialNotifications);
//   const [selected, setSelected] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filtered = notifications.filter(
//     (n) =>
//       n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       n.message.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const openNotification = (note) => {
//     setSelected(note);
//     if (!note.read) {
//       setNotifications((prev) =>
//         prev.map((n) => (n.id === note.id ? { ...n, read: true } : n))
//       );
//     }
//   };

//   const deleteNotification = (id) => {
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//     setSelected(null);
//   };

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   return (
//     <div className="font-sans min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-3xl font-extrabold text-green-700 tracking-tight flex items-center gap-2">
//           🔔 Notifications
//           {unreadCount > 0 && (
//             <span className="bg-red-600 text-white rounded-full px-3 py-0.5 text-sm font-semibold">
//               {unreadCount} New
//             </span>
//           )}
//         </h1>
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200"
//         >
//           ← Dashboard
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="max-w-xl mx-auto mb-8">
//         <input
//           type="text"
//           placeholder="🔍 Search notifications..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full px-4 py-3 rounded-xl border border-green-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
//         />
//       </div>

//       {/* Notifications List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filtered.length === 0 ? (
//           <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-yellow-800 shadow-md col-span-full text-center">
//             <h3 className="text-lg font-semibold">No Notifications Found</h3>
//             <p className="mt-2 text-sm">
//               You have no new updates. Check again later.
//             </p>
//           </div>
//         ) : (
//           filtered.map((note) => (
//             <div
//               key={note.id}
//               onClick={() => openNotification(note)}
//               className={`relative group p-6 rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer 
//               ${
//                 note.read
//                   ? "bg-white/70 backdrop-blur-lg hover:bg-green-50"
//                   : "bg-green-50 hover:bg-green-100"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 {iconMap[note.type]}
//                 <h3
//                   className={`text-lg font-semibold ${
//                     note.read ? "text-gray-700" : "text-green-700"
//                   }`}
//                 >
//                   {note.title}
//                 </h3>
//               </div>
//               <p className="text-sm text-gray-600 mt-2">{note.message}</p>
//               <span className="block text-xs text-gray-500 mt-3">
//                 📅 {note.date}
//               </span>
//               <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Notification Modal */}
//       {selected && (
//         <div
//           onClick={() => setSelected(null)}
//           className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-lg animate-fadeIn"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold text-green-700">
//                 {selected.title}
//               </h2>
//               <button
//                 onClick={() => setSelected(null)}
//                 className="text-gray-500 hover:text-gray-800 transition"
//               >
//                 ✕
//               </button>
//             </div>
//             <p className="text-gray-700 whitespace-pre-wrap">
//               {selected.message}
//             </p>
//             <div className="mt-6 flex justify-between items-center">
//               <button
//                 onClick={() => deleteNotification(selected.id)}
//                 className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setSelected(null)}
//                 className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animation */}
//       <style>{`
//         @keyframes fadeIn {
//           from {opacity: 0; transform: scale(0.95);}
//           to {opacity: 1; transform: scale(1);}
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default StudentNotification;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiBell, FiX, FiCheckCircle } from "react-icons/fi";

// // const initialNotifications = [
// //   {
// //     id: 1,
// //     sender: "University Admin",
// //     title: "Transcript Approved",
// //     message: "Your transcript request has been approved successfully.",
// //     date: "Aug 09",
// //     read: false,
// //     type: "success",
// //   },
// //   {
// //     id: 2,
// //     sender: "Department Office",
// //     title: "New Comment on Your Form",
// //     message: "The department added a note on your bonafide request.",
// //     date: "Aug 08",
// //     read: false,
// //     type: "info",
// //   },
// //   {
// //     id: 3,
// //     sender: "System",
// //     title: "Form Submission Received",
// //     message: "We have received your enrollment form.",
// //     date: "Aug 07",
// //     read: true,
// //     type: "success",
// //   },
// // ];

// // const Notification = () => {
// //   const navigate = useNavigate();
// //   const [notifications, setNotifications] = useState(initialNotifications);
// //   const [selected, setSelected] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const filtered = notifications.filter(
// //     (n) =>
// //       n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       n.message.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const openNotification = (note) => {
// //     setSelected(note);
// //     if (!note.read) {
// //       setNotifications((prev) =>
// //         prev.map((n) => (n.id === note.id ? { ...n, read: true } : n))
// //       );
// //     }
// //   };

// //   const deleteNotification = (id) => {
// //     setNotifications((prev) => prev.filter((n) => n.id !== id));
// //     setSelected(null);
// //   };

// //   const unreadCount = notifications.filter((n) => !n.read).length;

// //   return (
// //     <div className="font-sans min-h-screen bg-white">
// //       {/* Header */}
// //       <div className="flex justify-between items-center p-6 border-b shadow-sm bg-green-50">
// //         <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
// //           🔔 Notifications
// //           {unreadCount > 0 && (
// //             <span className="bg-red-600 text-white rounded-full px-3 py-0.5 text-sm font-semibold">
// //               {unreadCount} new
// //             </span>
// //           )}
// //         </h1>
// //         <button
// //           onClick={() => navigate("/dashboard")}
// //           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
// //         >
// //           ← Dashboard
// //         </button>
// //       </div>

// //       {/* Search */}
// //       <div className="max-w-2xl mx-auto mt-6 mb-4">
// //         <input
// //           type="text"
// //           placeholder="Search notifications..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 outline-none"
// //         />
// //       </div>

// //       {/* List like Gmail */}
// //       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
// //         {filtered.length === 0 ? (
// //           <div className="p-6 text-center text-gray-500">
// //             No notifications found.
// //           </div>
// //         ) : (
// //           filtered.map((note) => (
// //             <div
// //               key={note.id}
// //               onClick={() => openNotification(note)}
// //               className={`flex items-center justify-between px-6 py-4 border-b last:border-0 cursor-pointer hover:bg-green-50 transition ${
// //                 note.read ? "bg-white" : "bg-green-50"
// //               }`}
// //             >
// //               {/* Left: unread dot + sender + subject + message */}
// //               <div className="flex items-center gap-3">
// //                 {!note.read && (
// //                   <span className="w-2 h-2 rounded-full bg-green-600"></span>
// //                 )}
// //                 <div>
// //                   <p
// //                     className={`text-sm font-semibold ${
// //                       note.read ? "text-gray-700" : "text-green-800"
// //                     }`}
// //                   >
// //                     {note.sender} — {note.title}
// //                   </p>
// //                   <p className="text-sm text-gray-500 truncate max-w-md">
// //                     {note.message}
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Right: date + delete */}
// //               <div className="flex items-center gap-4">
// //                 <span className="text-xs text-gray-400">{note.date}</span>
// //                 <button
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     deleteNotification(note.id);
// //                   }}
// //                   className="text-gray-400 hover:text-red-600"
// //                 >
// //                   <FiX />
// //                 </button>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>

// //       {/* Modal for details */}
// //       {selected && (
// //         <div
// //           onClick={() => setSelected(null)}
// //           className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
// //         >
// //           <div
// //             onClick={(e) => e.stopPropagation()}
// //             className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg"
// //           >
// //             <div className="flex justify-between items-center mb-4">
// //               <h2 className="text-xl font-bold text-green-700">
// //                 {selected.title}
// //               </h2>
// //               <button
// //                 onClick={() => setSelected(null)}
// //                 className="text-gray-500 hover:text-gray-800"
// //               >
// //                 ✕
// //               </button>
// //             </div>
// //             <p className="text-gray-700">{selected.message}</p>
// //             <div className="mt-6 flex justify-end gap-3">
// //               <button
// //                 onClick={() => deleteNotification(selected.id)}
// //                 className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
// //               >
// //                 Delete
// //               </button>
// //               <button
// //                 onClick={() => setSelected(null)}
// //                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Notification;
// src/pages/StudentDashboard/StudentNotification.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiXCircle, FiCheckCircle } from "react-icons/fi";

const initialNotifications = [
  {
    id: 1,
    title: "Transcript Approved",
    message: "Your transcript request has been approved by the university.",
    date: "2025-08-09",
    read: false,
    type: "success",
  },
  {
    id: 2,
    title: "New Comment on Your Form",
    message: "The department added a comment on your bonafide request.",
    date: "2025-08-08",
    read: false,
    type: "info",
  },
  {
    id: 3,
    title: "Form Submission Received",
    message: "We have received your enrollment form successfully.",
    date: "2025-08-07",
    read: true,
    type: "success",
  },
];

const iconMap = {
  success: <FiCheckCircle className="text-green-600 text-xl" />,
  info: <FiBell className="text-blue-600 text-xl" />,
  error: <FiXCircle className="text-red-600 text-xl" />,
};

const StudentNotification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = notifications.filter(
    (n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openNotification = (note) => {
    setSelected(note);
    if (!note.read) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === note.id ? { ...n, read: true } : n))
      );
    }
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    setSelected(null);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-green-700 tracking-tight flex items-center gap-2">
          🔔 Notifications
          {unreadCount > 0 && (
            <span className="bg-red-600 text-white rounded-full px-3 py-0.5 text-sm font-semibold">
              {unreadCount} New
            </span>
          )}
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200"
        >
          ← Dashboard
        </button>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Search notifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-green-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
        />
      </div>

      {/* Notifications List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-yellow-800 shadow-md col-span-full text-center">
            <h3 className="text-lg font-semibold">No Notifications Found</h3>
            <p className="mt-2 text-sm">
              You have no new updates. Check again later.
            </p>
          </div>
        ) : (
          filtered.map((note) => (
            <div
              key={note.id}
              onClick={() => openNotification(note)}
              className={`relative group p-6 rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer 
              ${
                note.read
                  ? "bg-white/70 backdrop-blur-lg hover:bg-green-50"
                  : "bg-green-50 hover:bg-green-100"
              }`}
            >
              <div className="flex items-center gap-3">
                {iconMap[note.type]}
                <h3
                  className={`text-lg font-semibold ${
                    note.read ? "text-gray-700" : "text-green-700"
                  }`}
                >
                  {note.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">{note.message}</p>
              <span className="block text-xs text-gray-500 mt-3">
                📅 {note.date}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
            </div>
          ))
        )}
      </div>

      {/* Notification Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-lg animate-fadeIn"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-green-700">
                {selected.title}
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">
              {selected.message}
            </p>
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => deleteNotification(selected.id)}
                className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
              >
                Delete
              </button>
              <button
                onClick={() => setSelected(null)}
                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: scale(0.95);}
          to {opacity: 1; transform: scale(1);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default StudentNotification;
