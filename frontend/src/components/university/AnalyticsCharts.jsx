// // src/components/university/AnalyticsCharts.jsx
// import React from "react";

// const AnalyticsCharts = () => (
//   <div className="grid md:grid-cols-2 gap-4">
//     <div className="bg-gray-100 p-6 rounded text-center">Requests by Status Chart</div>
//     <div className="bg-gray-100 p-6 rounded text-center">Requests per Department Chart</div>
//   </div>
// );

// export default AnalyticsCharts;
// src/components/university/AnalyticsCharts.jsx
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

const AnalyticsCharts = ({ data }) => {
  if (!data) return <div>Loading charts...</div>;

  const { requestsByDepartment, requestsStatus, recentRequests } = data;

  return (
    <div className="space-y-8">
      {/* Requests by Department */}
      <div className="overflow-x-auto">
        <h3 className="text-xl font-semibold mb-2">Requests by Department</h3>
        <BarChart width={600} height={300} data={requestsByDepartment}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="requests" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Requests Status */}
      <div className="overflow-x-auto">
        <h3 className="text-xl font-semibold mb-2">Requests Status</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={requestsStatus}
            dataKey="count"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {requestsStatus.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Recent Requests Table */}
      <div className="overflow-x-auto">
        <h3 className="text-xl font-semibold mb-2">Recent Requests</h3>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Student</th>
              <th className="border px-4 py-2">Request Type</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentRequests.map((req, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{req.student}</td>
                <td className="border px-4 py-2">{req.type}</td>
                <td className="border px-4 py-2">{req.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
