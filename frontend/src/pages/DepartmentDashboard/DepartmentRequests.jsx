// src/pages/DepartmentDashboard/DepartmentRequests.jsx
import React, { useEffect, useState } from "react";
import DepartmentSidebar from "../../components/department/DeptSidebar";
import CommentModal from "../../components/department/CommentModal";
import { CheckCircle, XCircle, MessageSquare, Search } from "lucide-react"; // ✅ icons

export default function DepartmentRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDept, setFilterDept] = useState("all"); // ✅ Department filter
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setRequests([
        {
          id: 1,
          seat_no: "21K-1234",
          name: "Ali Khan",
          department: "CS",
          status: "pending",
          comment: "",
          date: "2025-08-15",
        },
        {
          id: 2,
          seat_no: "21K-4321",
          name: "Sara Ahmed",
          department: "Biochemistry",
          status: "approved",
          comment: "Approved for transcript issuance",
          date: "2025-08-10",
        },
        {
          id: 3,
          seat_no: "21K-6789",
          name: "Hassan Raza",
          department: "Botany",
          status: "rejected",
          comment: "Missing required documents",
          date: "2025-08-05",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleAction = (id, status) => {
    const actionText = status === "approved" ? "Approve" : "Reject";
    if (window.confirm(`Are you sure you want to ${actionText} this request?`)) {
      setRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status } : req))
      );
    }
  };

  const handleSaveComment = (comment) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === selectedRequest ? { ...req, comment } : req
      )
    );
  };

  // ✅ Get unique department list for dropdown
  const departments = ["all", ...new Set(requests.map((r) => r.department))];

  // ✅ Apply search + status filter + dept filter + sort
  const filteredAndSortedRequests = requests
    .filter((req) =>
      filterStatus === "all" ? true : req.status === filterStatus
    )
    .filter((req) =>
      filterDept === "all" ? true : req.department === filterDept
    )
    .filter((req) =>
      `${req.seat_no} ${req.name}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      <DepartmentSidebar active="Student Requests" />

      <main className="flex-1 p-8">
        {/* ✅ Title + Controls same row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Student Requests</h1>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* ✅ Search bar */}
            <div className="relative flex-1 md:w-64">
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by Seat No or Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* ✅ Department Filter */}
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "all" ? "All Departments" : dept}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {loading ? (
            <div className="text-center p-6 text-green-600 font-medium">
              Loading student requests...
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 text-left">Seat No</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Comment</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedRequests.map((req, index) => (
                  <tr
                    key={req.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="p-4 font-medium">{req.seat_no}</td>
                    <td className="p-4">{req.name}</td>
                    <td className="p-4">{req.department}</td>
                    <td className="p-4">
                      <span
                        className={`flex items-center gap-2 px-2 py-1 text-xs font-semibold rounded-full w-fit ${
                          req.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : req.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {req.status === "approved" && <CheckCircle size={14} />}
                        {req.status === "rejected" && <XCircle size={14} />}
                        {req.status === "pending" && (
                          <MessageSquare size={14} />
                        )}
                        {req.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600 italic">
                      {req.comment || "—"}
                    </td>
                    <td className="p-4">{req.date}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleAction(req.id, "approved")}
                          disabled={req.status === "approved"}
                          className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition ${
                            req.status === "approved"
                              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                              : "bg-green-600 text-white hover:bg-green-700"
                          }`}
                        >
                          <CheckCircle size={14} /> Approve
                        </button>
                        <button
                          onClick={() => handleAction(req.id, "rejected")}
                          disabled={req.status === "rejected"}
                          className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition ${
                            req.status === "rejected"
                              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                              : "bg-red-600 text-white hover:bg-red-700"
                          }`}
                        >
                          <XCircle size={14} /> Reject
                        </button>
                        <button
                          onClick={() => {
                            setSelectedRequest(req.id);
                            setIsModalOpen(true);
                          }}
                          className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                          <MessageSquare size={14} /> Comment
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <CommentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveComment}
        />
      </main>
    </div>
  );
}
