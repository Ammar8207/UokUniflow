// // // // // // // src/pages/DepartmentDashboard/DepartmentNotification.jsx
// // // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // // import DepartmentSidebar from "../../components/department/DeptSidebar";
// // // // // // import { AuthContext } from "../../context/authContext";
// // // // // // import axios from "axios";

// // // // // // const DepartmentNotification = () => {
// // // // // //   const { user } = useContext(AuthContext);
// // // // // //   const [notifications, setNotifications] = useState([]);

// // // // // //   // ✅ Abhi dummy data rakho jab tak backend nahi banta
// // // // // //   useEffect(() => {
// // // // // //     setNotifications([
// // // // // //       { id: 1, message: "New student request submitted", type: "info" },
// // // // // //       { id: 2, message: "Request #12 approved", type: "success" },
// // // // // //       { id: 3, message: "Request #7 rejected", type: "error" },
// // // // // //     ]);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
// // // // // //       {/* ✅ Sidebar */}
// // // // // //       <DepartmentSidebar active="Notifications" />

// // // // // //       {/* ✅ Main Content */}
// // // // // //       <main className="flex-1 p-6">
// // // // // //         <h1 className="text-3xl font-bold mb-6">Department Notifications</h1>

// // // // // //         {notifications.length === 0 ? (
// // // // // //           <p className="text-gray-600">No notifications yet.</p>
// // // // // //         ) : (
// // // // // //           <ul className="space-y-4">
// // // // // //             {notifications.map((note) => (
// // // // // //               <li
// // // // // //                 key={note.id}
// // // // // //                 className={`p-4 rounded-xl shadow ${
// // // // // //                   note.type === "success"
// // // // // //                     ? "bg-green-100 text-green-700"
// // // // // //                     : note.type === "error"
// // // // // //                     ? "bg-red-100 text-red-700"
// // // // // //                     : "bg-blue-100 text-blue-700"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {note.message}
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         )}
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default DepartmentNotification;
// // // // // // src/pages/DepartmentDashboard/DepartmentNotification.jsx
// // // // // import React, { useEffect, useState, useContext } from "react";
// // // // // import DepartmentSidebar from "../../components/department/DeptSidebar";
// // // // // import { AuthContext } from "../../context/authContext";
// // // // // import {
// // // // //   CheckCircleIcon,
// // // // //   XCircleIcon,
// // // // //   InformationCircleIcon,
// // // // //   ClockIcon,
// // // // // } from "@heroicons/react/24/outline";

// // // // // const typeMeta = {
// // // // //   success: {
// // // // //     icon: CheckCircleIcon,
// // // // //     bg: "bg-green-50",
// // // // //     ring: "ring-green-200",
// // // // //     text: "text-green-700",
// // // // //     dot: "bg-green-500",
// // // // //   },
// // // // //   error: {
// // // // //     icon: XCircleIcon,
// // // // //     bg: "bg-red-50",
// // // // //     ring: "ring-red-200",
// // // // //     text: "text-red-700",
// // // // //     dot: "bg-red-500",
// // // // //   },
// // // // //   info: {
// // // // //     icon: InformationCircleIcon,
// // // // //     bg: "bg-blue-50",
// // // // //     ring: "ring-blue-200",
// // // // //     text: "text-blue-700",
// // // // //     dot: "bg-blue-500",
// // // // //   },
// // // // // };

// // // // // // Simple “time ago” helper
// // // // // const timeAgo = (iso) => {
// // // // //   const diff = Date.now() - new Date(iso).getTime();
// // // // //   const s = Math.floor(diff / 1000);
// // // // //   if (s < 60) return `${s}s ago`;
// // // // //   const m = Math.floor(s / 60);
// // // // //   if (m < 60) return `${m}m ago`;
// // // // //   const h = Math.floor(m / 60);
// // // // //   if (h < 24) return `${h}h ago`;
// // // // //   const d = Math.floor(h / 24);
// // // // //   if (d < 30) return `${d}d ago`;
// // // // //   const mo = Math.floor(d / 30);
// // // // //   if (mo < 12) return `${mo}mo ago`;
// // // // //   const y = Math.floor(mo / 12);
// // // // //   return `${y}y ago`;
// // // // // };

// // // // // const DepartmentNotification = () => {
// // // // //   const { user } = useContext(AuthContext);
// // // // //   const [notifications, setNotifications] = useState([]);

// // // // //   // ✅ Dummy data (timeline-ready)
// // // // //   useEffect(() => {
// // // // //     setNotifications([
// // // // //       {
// // // // //         id: 1,
// // // // //         message: "New student request submitted",
// // // // //         type: "info",
// // // // //         createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15m ago
// // // // //       },
// // // // //       {
// // // // //         id: 2,
// // // // //         message: "Request #12 approved",
// // // // //         type: "success",
// // // // //         createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2h ago
// // // // //       },
// // // // //       {
// // // // //         id: 3,
// // // // //         message: "Request #7 rejected",
// // // // //         type: "error",
// // // // //         createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1d ago
// // // // //       },
// // // // //     ]);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
// // // // //       {/* Sidebar */}
// // // // //       <DepartmentSidebar active="Notifications" />

// // // // //       {/* Main Content */}
// // // // //       <main className="flex-1 p-6">
// // // // //         <h1 className="text-3xl font-bold mb-6">
// // // // //           {user?.department || "Department"} Notifications
// // // // //         </h1>

// // // // //         <div className="bg-white rounded-2xl shadow p-6">
// // // // //           {notifications.length === 0 ? (
// // // // //             <p className="text-gray-600">No notifications yet.</p>
// // // // //           ) : (
// // // // //             <div className="relative pl-6">
// // // // //               {/* vertical line */}
// // // // //               <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
// // // // //               <ul className="space-y-4">
// // // // //                 {notifications.map((note) => {
// // // // //                   const meta = typeMeta[note.type] || typeMeta.info;
// // // // //                   const Icon = meta.icon;
// // // // //                   return (
// // // // //                     <li key={note.id} className="relative">
// // // // //                       {/* timeline dot */}
// // // // //                       <span
// // // // //                         className={`absolute -left-1.5 top-2 h-3 w-3 rounded-full ring-4 ${meta.dot} ${meta.ring}`}
// // // // //                       />
// // // // //                       <div
// // // // //                         className={`flex items-start gap-3 rounded-xl p-4 ${meta.bg} ${meta.text}`}
// // // // //                       >
// // // // //                         <div className="shrink-0">
// // // // //                           <Icon className="h-6 w-6" />
// // // // //                         </div>
// // // // //                         <div className="flex-1">
// // // // //                           <p className="font-medium">{note.message}</p>
// // // // //                           <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
// // // // //                             <ClockIcon className="h-4 w-4" />
// // // // //                             <span>{timeAgo(note.createdAt)}</span>
// // // // //                             <span className="text-gray-300">•</span>
// // // // //                             <span>ID: {note.id}</span>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </li>
// // // // //                   );
// // // // //                 })}
// // // // //               </ul>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DepartmentNotification;
// // // // import React, { useEffect, useState, useContext } from "react";
// // // // import DepartmentSidebar from "../../components/department/DeptSidebar";
// // // // import { AuthContext } from "../../context/authContext";
// // // // import {
// // // //   CheckCircleIcon,
// // // //   XCircleIcon,
// // // //   InformationCircleIcon,
// // // //   ClockIcon,
// // // // } from "@heroicons/react/24/outline";

// // // // const typeMeta = {
// // // //   success: {
// // // //     icon: CheckCircleIcon,
// // // //     bg: "bg-green-50",
// // // //     ring: "ring-green-200",
// // // //     text: "text-green-700",
// // // //     dot: "bg-green-500",
// // // //   },
// // // //   error: {
// // // //     icon: XCircleIcon,
// // // //     bg: "bg-red-50",
// // // //     ring: "ring-red-200",
// // // //     text: "text-red-700",
// // // //     dot: "bg-red-500",
// // // //   },
// // // //   info: {
// // // //     icon: InformationCircleIcon,
// // // //     bg: "bg-blue-50",
// // // //     ring: "ring-blue-200",
// // // //     text: "text-blue-700",
// // // //     dot: "bg-blue-500",
// // // //   },
// // // //   default: {
// // // //     icon: InformationCircleIcon,
// // // //     bg: "bg-gray-50",
// // // //     ring: "ring-gray-200",
// // // //     text: "text-gray-700",
// // // //     dot: "bg-gray-400",
// // // //   },
// // // // };

// // // // // Simple “time ago” helper
// // // // const timeAgo = (iso) => {
// // // //   const diff = Date.now() - new Date(iso).getTime();
// // // //   const s = Math.floor(diff / 1000);
// // // //   if (s < 60) return `${s}s ago`;
// // // //   const m = Math.floor(s / 60);
// // // //   if (m < 60) return `${m}m ago`;
// // // //   const h = Math.floor(m / 60);
// // // //   if (h < 24) return `${h}h ago`;
// // // //   const d = Math.floor(h / 24);
// // // //   if (d < 30) return `${d}d ago`;
// // // //   const mo = Math.floor(d / 30);
// // // //   if (mo < 12) return `${mo}mo ago`;
// // // //   const y = Math.floor(mo / 12);
// // // //   return `${y}y ago`;
// // // // };

// // // // const DepartmentNotification = () => {
// // // //   const { user } = useContext(AuthContext);
// // // //   const [notifications, setNotifications] = useState([]);
// // // //   const [, forceUpdate] = useState(0); // for auto timeAgo update

// // // //   // ✅ Dummy data (timeline-ready)
// // // //   useEffect(() => {
// // // //     setNotifications([
// // // //       {
// // // //         id: 1,
// // // //         message: "New student request submitted",
// // // //         type: "info",
// // // //         read: false,
// // // //         createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15m ago
// // // //       },
// // // //       {
// // // //         id: 2,
// // // //         message: "Request #12 approved",
// // // //         type: "success",
// // // //         read: false,
// // // //         createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2h ago
// // // //       },
// // // //       {
// // // //         id: 3,
// // // //         message: "Request #7 rejected",
// // // //         type: "error",
// // // //         read: true,
// // // //         createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1d ago
// // // //       },
// // // //     ]);
// // // //   }, []);

// // // //   // Auto-update every 1 min
// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => forceUpdate((x) => x + 1), 60000);
// // // //     return () => clearInterval(timer);
// // // //   }, []);

// // // //   return (
// // // //     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
// // // //       <DepartmentSidebar active="Notifications" />

// // // //       <main className="flex-1 p-6">
// // // //         <h1 className="text-3xl font-bold mb-6">
// // // //           {user?.department || "Department"} Notifications
// // // //         </h1>

// // // //         <div className="bg-white rounded-2xl shadow p-6">
// // // //           {notifications.length === 0 ? (
// // // //             <p className="text-gray-600 flex items-center gap-2">
// // // //               📭 No notifications yet.
// // // //             </p>
// // // //           ) : (
// // // //             <div className="relative pl-6">
// // // //               <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
// // // //               <ul className="space-y-4">
// // // //                 {notifications.map((note) => {
// // // //                   const meta = typeMeta[note.type] || typeMeta.default;
// // // //                   const Icon = meta.icon;
// // // //                   return (
// // // //                     <li key={note.id} className="relative">
// // // //                       {/* timeline dot */}
// // // //                       <span
// // // //                         className={`absolute -left-1.5 top-2 h-3 w-3 rounded-full ring-4 ${meta.dot} ${meta.ring}`}
// // // //                       />
// // // //                       <div
// // // //                         className={`flex items-start gap-3 rounded-xl p-4 ${meta.bg} ${
// // // //                           note.read ? meta.text : "font-bold " + meta.text
// // // //                         }`}
// // // //                       >
// // // //                         <div className="shrink-0">
// // // //                           <Icon className="h-6 w-6" aria-hidden="true" />
// // // //                         </div>
// // // //                         <div className="flex-1">
// // // //                           <span role="alert">{note.message}</span>
// // // //                           <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
// // // //                             <ClockIcon className="h-4 w-4" aria-hidden="true" />
// // // //                             <span>{timeAgo(note.createdAt)}</span>
// // // //                             <span className="text-gray-300">•</span>
// // // //                             <span>ID: {note.id}</span>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </li>
// // // //                   );
// // // //                 })}
// // // //               </ul>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DepartmentNotification;
// // // import React, { useEffect, useState, useContext } from "react";
// // // import DepartmentSidebar from "../../components/department/DeptSidebar";
// // // import { AuthContext } from "../../context/authContext";
// // // import {
// // //   CheckCircleIcon,
// // //   XCircleIcon,
// // //   InformationCircleIcon,
// // //   ClockIcon,
// // // } from "@heroicons/react/24/outline";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const typeMeta = {
// // //   success: {
// // //     icon: CheckCircleIcon,
// // //     bg: "bg-green-50",
// // //     ring: "ring-green-200",
// // //     text: "text-green-700",
// // //     dot: "bg-green-500",
// // //   },
// // //   error: {
// // //     icon: XCircleIcon,
// // //     bg: "bg-red-50",
// // //     ring: "ring-red-200",
// // //     text: "text-red-700",
// // //     dot: "bg-red-500",
// // //   },
// // //   info: {
// // //     icon: InformationCircleIcon,
// // //     bg: "bg-blue-50",
// // //     ring: "ring-blue-200",
// // //     text: "text-blue-700",
// // //     dot: "bg-blue-500",
// // //   },
// // //   default: {
// // //     icon: InformationCircleIcon,
// // //     bg: "bg-gray-50",
// // //     ring: "ring-gray-200",
// // //     text: "text-gray-700",
// // //     dot: "bg-gray-400",
// // //   },
// // // };

// // // // Simple timeAgo helper
// // // const timeAgo = (iso) => {
// // //   const diff = Date.now() - new Date(iso).getTime();
// // //   const s = Math.floor(diff / 1000);
// // //   if (s < 60) return `${s}s ago`;
// // //   const m = Math.floor(s / 60);
// // //   if (m < 60) return `${m}m ago`;
// // //   const h = Math.floor(m / 60);
// // //   if (h < 24) return `${h}h ago`;
// // //   const d = Math.floor(h / 24);
// // //   if (d < 30) return `${d}d ago`;
// // //   const mo = Math.floor(d / 30);
// // //   if (mo < 12) return `${mo}mo ago`;
// // //   const y = Math.floor(mo / 12);
// // //   return `${y}y ago`;
// // // };

// // // const DepartmentNotification = () => {
// // //   const { user } = useContext(AuthContext);
// // //   const [notifications, setNotifications] = useState([]);
// // //   const [, forceUpdate] = useState(0); // for auto timeAgo update

// // //   // Dummy data
// // //   useEffect(() => {
// // //     setNotifications([
// // //       {
// // //         id: 1,
// // //         message: "New student request submitted",
// // //         type: "info",
// // //         read: false,
// // //         createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
// // //       },
// // //       {
// // //         id: 2,
// // //         message: "Request #12 approved",
// // //         type: "success",
// // //         read: false,
// // //         createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
// // //       },
// // //       {
// // //         id: 3,
// // //         message: "Request #7 rejected",
// // //         type: "error",
// // //         read: true,
// // //         createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
// // //       },
// // //     ]);
// // //   }, []);

// // //   // Auto-update every 1 min
// // //   useEffect(() => {
// // //     const timer = setInterval(() => forceUpdate((x) => x + 1), 60000);
// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   const toggleRead = (id) => {
// // //     setNotifications((prev) =>
// // //       prev.map((n) => (n.id === id ? { ...n, read: true } : n))
// // //     );
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
// // //       <DepartmentSidebar active="Notifications" />

// // //       <main className="flex-1 p-6">
// // //         <h1 className="text-3xl font-bold mb-6">
// // //           {user?.department || "Department"} Notifications
// // //         </h1>

// // //         <div className="bg-white rounded-2xl shadow p-6 max-h-[600px] overflow-y-auto">
// // //           {notifications.length === 0 ? (
// // //             <p className="text-gray-600 flex items-center gap-2">
// // //               📭 No notifications yet.
// // //             </p>
// // //           ) : (
// // //             <div className="relative pl-6">
// // //               {/* vertical line */}
// // //               <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
// // //               <ul className="space-y-4">
// // //                 <AnimatePresence>
// // //                   {notifications.map((note) => {
// // //                     const meta = typeMeta[note.type] || typeMeta.default;
// // //                     const Icon = meta.icon;
// // //                     return (
// // //                       <motion.li
// // //                         key={note.id}
// // //                         className="relative"
// // //                         initial={{ opacity: 0, x: -20 }}
// // //                         animate={{ opacity: 1, x: 0 }}
// // //                         exit={{ opacity: 0, x: -20 }}
// // //                         transition={{ duration: 0.3 }}
// // //                       >
// // //                         {/* timeline dot */}
// // //                         <span
// // //                           className={`absolute -left-1.5 top-2 h-3 w-3 rounded-full ring-4 ${meta.dot} ${meta.ring}`}
// // //                         />
// // //                         <div
// // //                           className={`flex items-start gap-3 rounded-xl p-4 cursor-pointer hover:shadow-md hover:translate-x-0.5 transition-all duration-200 ${meta.bg} ${
// // //                             note.read ? meta.text : "font-bold " + meta.text
// // //                           }`}
// // //                           onClick={() => toggleRead(note.id)}
// // //                         >
// // //                           <div className="shrink-0">
// // //                             <Icon className="h-6 w-6" aria-hidden="true" />
// // //                           </div>
// // //                           <div className="flex-1">
// // //                             <span role="alert">{note.message}</span>
// // //                             <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
// // //                               <ClockIcon
// // //                                 className="h-4 w-4"
// // //                                 aria-hidden="true"
// // //                               />
// // //                               <span>{timeAgo(note.createdAt)}</span>
// // //                               <span className="text-gray-300">•</span>
// // //                               <span>ID: {note.id}</span>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </motion.li>
// // //                     );
// // //                   })}
// // //                 </AnimatePresence>
// // //               </ul>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default DepartmentNotification;
// // import React, { useEffect, useState, useContext } from "react";
// // import DepartmentSidebar from "../../components/department/DeptSidebar";
// // import { AuthContext } from "../../context/authContext";
// // import {
// //   CheckCircleIcon,
// //   XCircleIcon,
// //   InformationCircleIcon,
// //   ClockIcon,
// //   MagnifyingGlassIcon,
// // } from "@heroicons/react/24/outline";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { isToday, isYesterday, format } from "date-fns";

// // const typeMeta = {
// //   success: {
// //     icon: CheckCircleIcon,
// //     bg: "bg-green-50",
// //     ring: "ring-green-200",
// //     text: "text-green-700",
// //     dot: "bg-green-500",
// //   },
// //   error: {
// //     icon: XCircleIcon,
// //     bg: "bg-red-50",
// //     ring: "ring-red-200",
// //     text: "text-red-700",
// //     dot: "bg-red-500",
// //   },
// //   info: {
// //     icon: InformationCircleIcon,
// //     bg: "bg-blue-50",
// //     ring: "ring-blue-200",
// //     text: "text-blue-700",
// //     dot: "bg-blue-500",
// //   },
// //   default: {
// //     icon: InformationCircleIcon,
// //     bg: "bg-gray-50",
// //     ring: "ring-gray-200",
// //     text: "text-gray-700",
// //     dot: "bg-gray-400",
// //   },
// // };

// // // Simple timeAgo helper
// // const timeAgo = (iso) => {
// //   const diff = Date.now() - new Date(iso).getTime();
// //   const s = Math.floor(diff / 1000);
// //   if (s < 60) return `${s}s ago`;
// //   const m = Math.floor(s / 60);
// //   if (m < 60) return `${m}m ago`;
// //   const h = Math.floor(m / 60);
// //   if (h < 24) return `${h}h ago`;
// //   const d = Math.floor(h / 24);
// //   if (d < 30) return `${d}d ago`;
// //   const mo = Math.floor(d / 30);
// //   if (mo < 12) return `${mo}mo ago`;
// //   const y = Math.floor(mo / 12);
// //   return `${y}y ago`;
// // };

// // const DepartmentNotification = () => {
// //   const { user } = useContext(AuthContext);
// //   const [notifications, setNotifications] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [, forceUpdate] = useState(0); // auto timeAgo update

// //   // Dummy data
// //   useEffect(() => {
// //     setNotifications([
// //       {
// //         id: 1,
// //         message: "New student request submitted",
// //         type: "info",
// //         read: false,
// //         createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
// //       },
// //       {
// //         id: 2,
// //         message: "Request #12 approved",
// //         type: "success",
// //         read: false,
// //         createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
// //       },
// //       {
// //         id: 3,
// //         message: "Request #7 rejected",
// //         type: "error",
// //         read: true,
// //         createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
// //       },
// //     ]);
// //   }, []);

// //   // Auto-update every 1 min
// //   useEffect(() => {
// //     const timer = setInterval(() => forceUpdate((x) => x + 1), 60000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const toggleRead = (id) => {
// //     setNotifications((prev) =>
// //       prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
// //     );
// //   };

// //   // Group notifications by date
// //   const groupedNotifications = notifications
// //     .filter(
// //       (n) =>
// //         n.message.toLowerCase().includes(search.toLowerCase()) ||
// //         n.id.toString().includes(search)
// //     )
// //     .reduce((acc, note) => {
// //       const date = new Date(note.createdAt);
// //       let key = "Earlier";
// //       if (isToday(date)) key = "Today";
// //       else if (isYesterday(date)) key = "Yesterday";
// //       if (!acc[key]) acc[key] = [];
// //       acc[key].push(note);
// //       return acc;
// //     }, {});

// //   return (
// //     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
// //       <DepartmentSidebar active="Notifications" />

// //       <main className="flex-1 p-6">
// //         <h1 className="text-3xl font-bold mb-6">
// //           {user?.department || "Department"} Notifications
// //         </h1>

// //         {/* Search / Filter bar */}
// //         <div className="mb-4 flex items-center gap-2">
// //           <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
// //           <input
// //             type="text"
// //             placeholder="Search by message or ID"
// //             className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //           />
// //         </div>

// //         <div className="bg-white rounded-2xl shadow p-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
// //           {notifications.length === 0 ? (
// //             // Skeleton loader or empty state illustration
// //             <div className="animate-pulse space-y-4">
// //               <div className="h-16 bg-gray-200 rounded-xl"></div>
// //               <div className="h-16 bg-gray-200 rounded-xl"></div>
// //               <div className="h-16 bg-gray-200 rounded-xl"></div>
// //             </div>
// //           ) : (
// //             <div className="relative pl-6">
// //               {/* vertical line */}
// //               <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
// //               {Object.entries(groupedNotifications).map(([group, notes]) => (
// //                 <div key={group} className="mb-6">
// //                   <h2 className="text-gray-500 font-semibold mb-2">{group}</h2>
// //                   <ul className="space-y-4">
// //                     <AnimatePresence>
// //                       {notes.map((note, idx) => {
// //                         const meta = typeMeta[note.type] || typeMeta.default;
// //                         const Icon = meta.icon;
// //                         return (
// //                           <motion.li
// //                             key={note.id}
// //                             className="relative"
// //                             initial={{ opacity: 0, x: -20 }}
// //                             animate={{ opacity: 1, x: 0 }}
// //                             exit={{ opacity: 0, x: -20 }}
// //                             transition={{ duration: 0.3, delay: idx * 0.05 }}
// //                           >
// //                             {/* timeline dot */}
// //                             <span
// //                               className={`absolute -left-1.5 sm:-left-1.5 md:-left-1.5 top-2 h-3 w-3 rounded-full ring-4 ${meta.dot} ${meta.ring}`}
// //                             />
// //                             <div
// //                               className={`flex items-start gap-3 rounded-xl p-4 cursor-pointer hover:shadow-md hover:translate-x-0.5 transition-all duration-200 ${meta.bg} ${
// //                                 note.read ? meta.text : "font-bold " + meta.text
// //                               } focus:outline-none focus:ring-2 focus:ring-blue-400`}
// //                             >
// //                               <div className="shrink-0">
// //                                 <Icon className="h-6 w-6" aria-hidden="true" />
// //                               </div>
// //                               <div className="flex-1">
// //                                 <span role="alert">{note.message}</span>
// //                                 <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
// //                                   <ClockIcon
// //                                     className="h-4 w-4"
// //                                     aria-hidden="true"
// //                                   />
// //                                   <span>{timeAgo(note.createdAt)}</span>
// //                                   <span className="text-gray-300">•</span>
// //                                   <span>ID: {note.id}</span>
// //                                 </div>
// //                               </div>
// //                               {/* Mark as read/unread button */}
// //                               <button
// //                                 onClick={() => toggleRead(note.id)}
// //                                 className="ml-2 px-2 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300"
// //                               >
// //                                 {note.read ? "Mark as unread" : "Mark as read"}
// //                               </button>
// //                             </div>
// //                           </motion.li>
// //                         );
// //                       })}
// //                     </AnimatePresence>
// //                   </ul>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default DepartmentNotification;
// import React, { useEffect, useState, useContext } from "react";
// import DepartmentSidebar from "../../components/department/DeptSidebar";
// import { AuthContext } from "../../context/authContext";
// import {
//   CheckCircleIcon,
//   XCircleIcon,
//   InformationCircleIcon,
//   ClockIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline";
// import { motion, AnimatePresence } from "framer-motion";
// import { isToday, isYesterday } from "date-fns";

// const typeMeta = {
//   success: {
//     icon: CheckCircleIcon,
//     bg: "bg-green-50",
//     ring: "ring-green-200",
//     text: "text-green-700",
//     dot: "bg-green-500",
//     hoverBg: "hover:bg-green-100",
//   },
//   error: {
//     icon: XCircleIcon,
//     bg: "bg-red-50",
//     ring: "ring-red-200",
//     text: "text-red-700",
//     dot: "bg-red-500",
//     hoverBg: "hover:bg-red-100",
//   },
//   info: {
//     icon: InformationCircleIcon,
//     bg: "bg-blue-50",
//     ring: "ring-blue-200",
//     text: "text-blue-700",
//     dot: "bg-blue-500",
//     hoverBg: "hover:bg-blue-100",
//   },
//   default: {
//     icon: InformationCircleIcon,
//     bg: "bg-gray-50",
//     ring: "ring-gray-200",
//     text: "text-gray-700",
//     dot: "bg-gray-400",
//     hoverBg: "hover:bg-gray-100",
//   },
// };

// const timeAgo = (iso) => {
//   const diff = Date.now() - new Date(iso).getTime();
//   const s = Math.floor(diff / 1000);
//   if (s < 60) return `${s}s ago`;
//   const m = Math.floor(s / 60);
//   if (m < 60) return `${m}m ago`;
//   const h = Math.floor(m / 60);
//   if (h < 24) return `${h}h ago`;
//   const d = Math.floor(h / 24);
//   if (d < 30) return `${d}d ago`;
//   const mo = Math.floor(d / 30);
//   if (mo < 12) return `${mo}mo ago`;
//   const y = Math.floor(mo / 12);
//   return `${y}y ago`;
// };

// const DepartmentNotification = () => {
//   const { user } = useContext(AuthContext);
//   const [notifications, setNotifications] = useState([]);
//   const [search, setSearch] = useState("");
//   const [, forceUpdate] = useState(0);

//   // Dummy data
//   useEffect(() => {
//     setNotifications([
//       {
//         id: 1,
//         message: "New student request submitted",
//         type: "info",
//         read: false,
//         createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
//       },
//       {
//         id: 2,
//         message: "Request #12 approved",
//         type: "success",
//         read: false,
//         createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
//       },
//       {
//         id: 3,
//         message: "Request #7 rejected",
//         type: "error",
//         read: true,
//         createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
//       },
//     ]);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => forceUpdate((x) => x + 1), 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const toggleRead = (id) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
//     );
//   };

//   // Group notifications by date
//   const groupedNotifications = notifications
//     .filter(
//       (n) =>
//         n.message.toLowerCase().includes(search.toLowerCase()) ||
//         n.id.toString().includes(search)
//     )
//     .reduce((acc, note) => {
//       const date = new Date(note.createdAt);
//       let key = "Earlier";
//       if (isToday(date)) key = "Today";
//       else if (isYesterday(date)) key = "Yesterday";
//       if (!acc[key]) acc[key] = [];
//       acc[key].push(note);
//       return acc;
//     }, {});

//   const isEmpty = notifications.length === 0;

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
//       <DepartmentSidebar active="Notifications" />

//       <main className="flex-1 p-6">
//         <h1 className="text-3xl font-bold mb-6">
//           {user?.department || "Department"} Notifications
//         </h1>

//         {/* Search / Filter bar */}
//         <div className="mb-4 flex items-center gap-2">
//           <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by message or ID"
//             className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <div className="bg-white rounded-2xl shadow p-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//           {isEmpty ? (
//             <div className="flex flex-col items-center justify-center py-20">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-40 w-40 text-gray-300"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M3 7h18M3 12h18M3 17h18"
//                 />
//               </svg>
//               <p className="mt-6 text-gray-500 text-lg">
//                 No notifications yet
//               </p>
//             </div>
//           ) : (
//             <div className="relative pl-6">
//               <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
//               {Object.entries(groupedNotifications).map(([group, notes]) => (
//                 <div key={group} className="mb-6">
//                   <h2 className="text-gray-500 font-semibold mb-2">{group}</h2>
//                   <ul className="space-y-4">
//                     <AnimatePresence>
//                       {notes.map((note, idx) => {
//                         const meta = typeMeta[note.type] || typeMeta.default;
//                         const Icon = meta.icon;
//                         return (
//                           <motion.li
//                             key={note.id}
//                             className="relative"
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -20 }}
//                             transition={{ duration: 0.3, delay: idx * 0.1 }}
//                           >
//                             <span
//                               className={`absolute -left-1.5 sm:-left-1.5 md:-left-1.5 top-2 h-3 w-3 rounded-full ring-4 ${meta.dot} ${meta.ring}`}
//                             />
//                             <div
//                               className={`flex items-start gap-3 rounded-xl p-4 cursor-pointer transition-all duration-200 transform ${meta.bg} ${meta.hoverBg} ${
//                                 note.read ? meta.text : "font-bold " + meta.text
//                               } focus:outline-none focus:ring-2 focus:ring-blue-400`}
//                             >
//                               <div className="shrink-0">
//                                 <Icon className="h-6 w-6" aria-hidden="true" />
//                               </div>
//                               <div className="flex-1">
//                                 <span role="alert">{note.message}</span>
//                                 <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
//                                   <ClockIcon
//                                     className="h-4 w-4"
//                                     aria-hidden="true"
//                                   />
//                                   <span>{timeAgo(note.createdAt)}</span>
//                                   <span className="text-gray-300">•</span>
//                                   <span>ID: {note.id}</span>
//                                 </div>
//                               </div>
//                               <button
//                                 onClick={() => toggleRead(note.id)}
//                                 className="ml-2 px-2 py-1 text-xs rounded bg-gray-200 hover:bg-gray-300"
//                               >
//                                 {note.read ? "Mark as unread" : "Mark as read"}
//                               </button>
//                             </div>
//                           </motion.li>
//                         );
//                       })}
//                     </AnimatePresence>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DepartmentNotification;
import React, { useEffect, useState, useContext } from "react";
import DepartmentSidebar from "../../components/department/DeptSidebar";
import { AuthContext } from "../../context/authContext";
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { isToday, isYesterday } from "date-fns";

const typeMeta = {
  success: {
    icon: CheckCircleIcon,
    bg: "bg-green-50",
    ring: "ring-green-200",
    text: "text-green-700",
    dot: "bg-green-500",
    hoverBg: "hover:bg-green-100",
  },
  error: {
    icon: XCircleIcon,
    bg: "bg-red-50",
    ring: "ring-red-200",
    text: "text-red-700",
    dot: "bg-red-500",
    hoverBg: "hover:bg-red-100",
  },
  info: {
    icon: InformationCircleIcon,
    bg: "bg-blue-50",
    ring: "ring-blue-200",
    text: "text-blue-700",
    dot: "bg-blue-500",
    hoverBg: "hover:bg-blue-100",
  },
  default: {
    icon: InformationCircleIcon,
    bg: "bg-gray-50",
    ring: "ring-gray-200",
    text: "text-gray-700",
    dot: "bg-gray-400",
    hoverBg: "hover:bg-gray-100",
  },
};

const timeAgo = (iso) => {
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  const y = Math.floor(mo / 12);
  return `${y}y ago`;
};

const DepartmentNotification = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    setNotifications([
      {
        id: 1,
        message: "New student request submitted",
        type: "info",
        read: false,
        createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
      },
      {
        id: 2,
        message: "Request #12 approved",
        type: "success",
        read: false,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: 3,
        message: "Request #7 rejected",
        type: "error",
        read: true,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
    ]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => forceUpdate((x) => x + 1), 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const groupedNotifications = notifications
    .filter(
      (n) =>
        n.message.toLowerCase().includes(search.toLowerCase()) ||
        n.id.toString().includes(search)
    )
    .reduce((acc, note) => {
      const date = new Date(note.createdAt);
      let key = "Earlier";
      if (isToday(date)) key = "Today";
      else if (isYesterday(date)) key = "Yesterday";
      if (!acc[key]) acc[key] = [];
      acc[key].push(note);
      return acc;
    }, {});

  const isEmpty = notifications.length === 0;

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
      <DepartmentSidebar active="Notifications" />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          {user?.department || "Department"} Notifications
        </h1>

        <div className="mb-4 flex items-center gap-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by message or ID"
            className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-2xl shadow p-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-40 w-40 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
              <p className="mt-6 text-gray-500 text-lg">
                No notifications yet
              </p>
            </div>
          ) : (
            <div className="relative pl-8">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />
              {Object.entries(groupedNotifications).map(([group, notes]) => (
                <div key={group} className="mb-8">
                  <h2 className="text-gray-500 font-semibold mb-4">{group}</h2>
                  <ul className="space-y-4">
                    <AnimatePresence>
                      {notes.map((note, idx) => {
                        const meta = typeMeta[note.type] || typeMeta.default;
                        const Icon = meta.icon;
                        return (
                          <motion.li
                            key={note.id}
                            className="relative"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                          >
                            <span
                              className={`absolute -left-5 top-5 h-4 w-4 rounded-full ring-4 ${meta.dot} ${meta.ring}`}
                            />
                            <div
                              className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl p-4 cursor-pointer transition-all duration-200 transform ${meta.bg} ${
                                meta.hoverBg
                              } ${
                                note.read ? "opacity-70" : "font-semibold"
                              } shadow-sm hover:shadow-md`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon className="h-6 w-6" aria-hidden="true" />
                                <div className="flex flex-col">
                                  <span className="text-gray-800">{note.message}</span>
                                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                                    <ClockIcon className="h-4 w-4" />
                                    <span>{timeAgo(note.createdAt)}</span>
                                    <span className="text-gray-300">•</span>
                                    <span>ID: {note.id}</span>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => toggleRead(note.id)}
                                className="ml-auto px-3 py-1 text-xs rounded-full bg-gray-200 hover:bg-gray-300 transition"
                              >
                                {note.read ? "Mark as unread" : "Mark as read"}
                              </button>
                            </div>
                          </motion.li>
                        );
                      })}
                    </AnimatePresence>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DepartmentNotification;
