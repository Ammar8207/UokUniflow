// // src/components/university/StatsCard.jsx
// import React from "react";

// const StatsCards = ({ stats = {} }) => {
//   const {
//     totalRequests = 0,
//     approved = 0,
//     rejected = 0,
//     pending = 0,
//     totalStudents = 0,
//   } = stats;

//   return (
//     <div className="grid md:grid-cols-5 gap-4 mb-6">
//       <div className="bg-white p-4 shadow rounded hover:shadow-lg transition text-center">
//         <h4 className="font-semibold">Total Requests</h4>
//         <p className="text-gray-600">{totalRequests}</p>
//       </div>
//       <div className="bg-white p-4 shadow rounded hover:shadow-lg transition text-center">
//         <h4 className="font-semibold">Approved</h4>
//         <p className="text-green-600">{approved}</p>
//       </div>
//       <div className="bg-white p-4 shadow rounded hover:shadow-lg transition text-center">
//         <h4 className="font-semibold">Rejected</h4>
//         <p className="text-red-600">{rejected}</p>
//       </div>
//       <div className="bg-white p-4 shadow rounded hover:shadow-lg transition text-center">
//         <h4 className="font-semibold">Pending</h4>
//         <p className="text-yellow-600">{pending}</p>
//       </div>
//       <div className="bg-white p-4 shadow rounded hover:shadow-lg transition text-center">
//         <h4 className="font-semibold">Total Students</h4>
//         <p className="text-gray-600">{totalStudents}</p>
//       </div>
//     </div>
//   );
// };

// export default StatsCards;
// src/components/university/StatsCards.jsx
import React from "react";

const StatsCards = ({ stats }) => {
  const statsArray = [
    { title: "Total Requests", value: stats.totalRequests, color: "bg-blue-100 text-blue-800" },
    { title: "Pending Requests", value: stats.pendingRequests, color: "bg-yellow-100 text-yellow-800" },
    { title: "Completed Requests", value: stats.completedRequests, color: "bg-green-100 text-green-800" },
    { title: "Active Departments", value: stats.activeDepartments, color: "bg-purple-100 text-purple-800" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      {statsArray.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow flex flex-col justify-center ${stat.color}`}
        >
          <p className="text-sm font-medium">{stat.title}</p>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
