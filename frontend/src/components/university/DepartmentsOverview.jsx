// import React from "react";

// const DepartmentsOverview = ({ departments }) => (
//   <div className="grid md:grid-cols-3 gap-4 mb-6">
//     {departments.map((d) => (
//       <div key={d.name} className="bg-white p-4 shadow rounded hover:shadow-lg cursor-pointer transition">
//         <h4 className="font-semibold">{d.name}</h4>
//         <p>Total Requests: {d.total}</p>
//         <p className="text-green-600">Approved: {d.approved}</p>
//         <p className="text-yellow-600">Pending: {d.pending}</p>
//         <p className="text-red-600">Rejected: {d.rejected}</p>
//       </div>
//     ))}
//   </div>
// );

// export default DepartmentsOverview;
import React from "react";

const DepartmentsOverview = ({ departments = [] }) => (
  <div className="grid md:grid-cols-3 gap-4 mb-6">
    {departments.map((d) => (
      <div
        key={d.name}
        className="bg-white p-4 shadow rounded hover:shadow-lg cursor-pointer transition"
      >
        <h4 className="font-semibold">{d.name}</h4>
        <p>Total Requests: {d.total}</p>
        <p className="text-green-600">Approved: {d.approved}</p>
        <p className="text-yellow-600">Pending: {d.pending}</p>
        <p className="text-red-600">Rejected: {d.rejected}</p>
      </div>
    ))}
  </div>
);

export default DepartmentsOverview;
