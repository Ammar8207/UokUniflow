// src/components/university/RequestsTable.jsx
import React from "react";

const RequestsTable = ({ requests, handleUpdateRequest }) => {
  // Function to return badge color based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Student</th>
            <th className="py-2 px-4 text-left">Request Type</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{req.id}</td>
              <td className="py-2 px-4">{req.student}</td>
              <td className="py-2 px-4">{req.type}</td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                    req.status
                  )}`}
                >
                  {req.status}
                </span>
              </td>
              <td className="py-2 px-4 space-x-2">
                <button
                  onClick={() => handleUpdateRequest(req.id, "Approved")}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleUpdateRequest(req.id, "Rejected")}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsTable;
