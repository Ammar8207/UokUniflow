// // src/pages/DepartmentDashboard/DepartmentDashboard.jsx
// import React, { useEffect, useState, useContext } from "react";
// import DepartmentSidebar from "../../components/department/DeptSidebar";
// import { AuthContext } from "../../context/authContext";
// import { CheckCircle, XCircle, Hourglass, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const DepartmentAdminDashboard = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [stats, setStats] = useState({
//     approved: 0,
//     rejected: 0,
//     pending: 0,
//   });

//   const [searchQuery, setSearchQuery] = useState(""); // ✅ new search state
//   const [requests, setRequests] = useState([]); // ✅ store department requests

//   // ✅ Fetch department requests stats
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/department/${user?.department}/stats`
//         );
//         setStats(res.data.stats);
//       } catch (err) {
//         console.error("Error fetching department stats:", err);
//       }
//     };
//     if (user?.department) fetchStats();
//   }, [user]);

//   // ✅ Fetch recent department requests
//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/department/${user?.department}/requests`
//         );
//         setRequests(res.data.requests);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         // Dummy fallback data
//         setRequests([
//           { id: 1, student: "Ali Khan", type: "Transcript", status: "Pending" },
//           { id: 2, student: "Sara Ahmed", type: "Degree Verification", status: "Approved" },
//           { id: 3, student: "Bilal Iqbal", type: "Bonafide Certificate", status: "Rejected" },
//         ]);
//       }
//     };
//     if (user?.department) fetchRequests();
//   }, [user]);

//   // ✅ Filter requests based on search
//   const filteredRequests = requests.filter(
//     (req) =>
//       req.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       req.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       req.status.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
//       {/* ✅ Sidebar */}
//       <DepartmentSidebar active="Dashboard" />

//       {/* Main Content */}
//       <main className="flex-1 p-6 relative">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//           <div>
//             <h1 className="text-3xl font-bold">
//               Welcome, {user?.name || "Department Admin"}
//             </h1>
//             <span className="text-gray-600">
//               Department: <b>{user?.department}</b>
//             </span>
//           </div>

//           {/* ✅ Search bar */}
//           <div className="relative w-full md:w-72">
//             <Search
//               size={16}
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//             />
//             <input
//               type="text"
//               placeholder="Search requests..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* ✅ Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
//           <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
//             <CheckCircle className="text-green-600" size={40} />
//             <div>
//               <p className="text-xl font-semibold">{stats.approved}</p>
//               <p className="text-gray-600">Approved Requests</p>
//             </div>
//           </div>
//           <div className="bg-red-100 p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
//             <XCircle className="text-red-600" size={40} />
//             <div>
//               <p className="text-xl font-semibold">{stats.rejected}</p>
//               <p className="text-gray-600">Rejected Requests</p>
//             </div>
//           </div>
//           <div className="bg-yellow-100 p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
//             <Hourglass className="text-yellow-600" size={40} />
//             <div>
//               <p className="text-xl font-semibold">{stats.pending}</p>
//               <p className="text-gray-600">Pending Requests</p>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Recent Requests Table */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-bold mb-4">Recent Requests</h2>
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="p-3">Student</th>
//                 <th className="p-3">Request Type</th>
//                 <th className="p-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredRequests.length > 0 ? (
//                 filteredRequests.map((req) => (
//                   <tr
//                     key={req.id}
//                     className="border-b hover:bg-gray-50 transition"
//                   >
//                     <td className="p-3">{req.student}</td>
//                     <td className="p-3">{req.type}</td>
//                     <td className="p-3">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm ${
//                           req.status === "Approved"
//                             ? "bg-green-200 text-green-700"
//                             : req.status === "Rejected"
//                             ? "bg-red-200 text-red-700"
//                             : "bg-yellow-200 text-yellow-700"
//                         }`}
//                       >
//                         {req.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="3" className="p-3 text-center text-gray-500">
//                     No requests found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DepartmentAdminDashboard;
import React, { useEffect, useState, useContext } from "react";
import DepartmentSidebar from "../../components/department/DeptSidebar";
import { AuthContext } from "../../context/authContext";
import { CheckCircle, XCircle, Hourglass, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DepartmentAdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    approved: 0,
    rejected: 0,
    pending: 0,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [requests, setRequests] = useState([]);

  // Fetch department stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/department/${user?.department}/stats`
        );
        setStats(res.data.stats);
      } catch (err) {
        console.error("Error fetching department stats:", err);
      }
    };
    if (user?.department) fetchStats();
  }, [user]);

  // Fetch recent department requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/department/${user?.department}/requests`
        );
        setRequests(res.data.requests);
      } catch (err) {
        console.error("Error fetching requests:", err);
        // Dummy fallback data
        setRequests([
          { id: 1, student: "Ali Khan", type: "Transcript", status: "Pending" },
          { id: 2, student: "Sara Ahmed", type: "Degree Verification", status: "Approved" },
          { id: 3, student: "Bilal Iqbal", type: "Bonafide Certificate", status: "Rejected" },
        ]);
      }
    };
    if (user?.department) fetchRequests();
  }, [user]);

  // Filter requests based on search
  const filteredRequests = requests.filter(
    (req) =>
      req.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Frontend-only approve/reject toggle
  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status: action === "approve" ? "Approved" : "Rejected" }
          : req
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Sidebar */}
      <DepartmentSidebar active="Dashboard" />

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {user?.name || "Department Admin"}
            </h1>
            <span className="text-gray-600">
              Department: <b>{user?.department}</b>
            </span>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search requests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
            <CheckCircle className="text-green-600" size={40} />
            <div>
              <p className="text-xl font-semibold">{stats.approved}</p>
              <p className="text-gray-600">Approved Requests</p>
            </div>
          </div>
          <div className="bg-red-100 p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
            <XCircle className="text-red-600" size={40} />
            <div>
              <p className="text-xl font-semibold">{stats.rejected}</p>
              <p className="text-gray-600">Rejected Requests</p>
            </div>
          </div>
          <div className="bg-yellow-100 p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg transition">
            <Hourglass className="text-yellow-600" size={40} />
            <div>
              <p className="text-xl font-semibold">{stats.pending}</p>
              <p className="text-gray-600">Pending Requests</p>
            </div>
          </div>
        </div>

        {/* Recent Requests Table */}
        <div className="bg-white p-6 rounded-xl shadow mt-6">
          <h2 className="text-xl font-bold mb-4">Recent Requests</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Student</th>
                <th className="p-3">Request Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr
                    key={req.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{req.student}</td>
                    <td className="p-3">{req.type}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          req.status === "Approved"
                            ? "bg-green-200 text-green-700"
                            : req.status === "Rejected"
                            ? "bg-red-200 text-red-700"
                            : "bg-yellow-200 text-yellow-700"
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="p-3 flex gap-2">
                      {req.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleAction(req.id, "approve")}
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction(req.id, "reject")}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-500">
                    No requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DepartmentAdminDashboard;
