// // // src/pages/DepartmentDashboard/Statistics.jsx
// // import React, { useEffect, useState, useContext } from "react";
// // import { AuthContext } from "../../context/authContext";
// // import DepartmentSidebar from "../../components/department/DeptSidebar";
// // import axios from "axios";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// // } from "recharts";


// // const Statistics = () => {
// //   const { user } = useContext(AuthContext);
// //   const [chartData, setChartData] = useState([]);

// //   useEffect(() => {
// //     const fetchChartData = async () => {
// //       try {
// //         const res = await axios.get(
// //           `http://localhost:5000/api/department/${user?.department}/stats`
// //         );
// //         setChartData(res.data.chart);
// //       } catch (err) {
// //         console.error("Error fetching chart data:", err);
// //       }
// //     };
// //     if (user?.department) {
// //       fetchChartData();
// //     }
// //   }, [user]);

// //   return (
// //     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
// //       {/* ✅ Sidebar */}
// //       <DepartmentSidebar active="Statistics" />

// //       {/* Main Content */}
// //       <main className="flex-1 p-8">
// //         <h1 className="text-3xl font-bold mb-6">
// //           {user?.department} Statistics
// //         </h1>
// //         <div className="bg-white rounded-xl shadow p-6">
// //           <h2 className="text-xl font-semibold mb-4">Requests Overview</h2>
// //           <ResponsiveContainer width="100%" height={350}>
// //             <BarChart data={chartData}>
// //               <XAxis dataKey="status" />
// //               <YAxis />
// //               <Tooltip />
// //               <Bar dataKey="count" fill="#16a34a" radius={[6, 6, 0, 0]} />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Statistics;
// // src/pages/DepartmentDashboard/Statistics.jsx
// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../context/authContext";
// import DepartmentSidebar from "../../components/department/DeptSidebar";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   LineChart,
//   Line,
//   CartesianGrid,
// } from "recharts";

// const COLORS = ["#16a34a", "#dc2626", "#facc15"]; // Approved, Rejected, Pending

// const Statistics = () => {
//   const { user } = useContext(AuthContext);
//   const [chartData, setChartData] = useState([]);
//   const [pieData, setPieData] = useState([]);
//   const [lineData, setLineData] = useState([]);

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/department/${user?.department}/stats`
//         );
//         setChartData(res.data.chart); // bar chart data

//         // ✅ Pie chart data (status distribution)
//         setPieData(res.data.pie || [
//           { name: "Approved", value: res.data.approved || 0 },
//           { name: "Rejected", value: res.data.rejected || 0 },
//           { name: "Pending", value: res.data.pending || 0 },
//         ]);

//         // ✅ Line chart data (monthly trend)
//         setLineData(res.data.monthly || []);
//       } catch (err) {
//         console.error("Error fetching chart data:", err);
//       }
//     };
//     if (user?.department) {
//       fetchChartData();
//     }
//   }, [user]);

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
//       {/* ✅ Sidebar */}
//       <DepartmentSidebar active="Statistics" />

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <h1 className="text-3xl font-bold mb-6">
//           {user?.department} Statistics
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* 📊 Bar Chart */}
//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-xl font-semibold mb-4">Requests Overview</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={chartData}>
//                 <XAxis dataKey="status" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#16a34a" radius={[6, 6, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* 🥧 Pie Chart */}
//           <div className="bg-white rounded-xl shadow p-6">
//             <h2 className="text-xl font-semibold mb-4">Status Distribution</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   dataKey="value"
//                   nameKey="name"
//                   outerRadius={100}
//                   fill="#8884d8"
//                   label
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//                 <Legend />
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* 📈 Line Chart */}
//           <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
//             <h2 className="text-xl font-semibold mb-4">Monthly Requests Trend</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={lineData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Statistics;
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import DepartmentSidebar from "../../components/department/DeptSidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const COLORS = ["#16a34a", "#dc2626", "#facc15"]; // Approved, Rejected, Pending

const Statistics = () => {
  const { user } = useContext(AuthContext);
  const [chartData, setChartData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    // ✅ Dummy data for testing
    const dummyData = {
      chart: [
        { status: "Approved", count: 45 },
        { status: "Rejected", count: 20 },
        { status: "Pending", count: 35 },
      ],
      pie: [
        { name: "Approved", value: 45 },
        { name: "Rejected", value: 20 },
        { name: "Pending", value: 35 },
      ],
      monthly: [
        { month: "Jan", count: 30 },
        { month: "Feb", count: 25 },
        { month: "Mar", count: 45 },
        { month: "Apr", count: 50 },
      ],
    };

    setChartData(dummyData.chart);
    setPieData(dummyData.pie);
    setLineData(dummyData.monthly);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* ✅ Sidebar */}
      <DepartmentSidebar active="Statistics" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          {user?.department || "Department"} Statistics
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 📊 Bar Chart */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Requests Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#16a34a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 🥧 Pie Chart */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Status Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* 📈 Line Chart */}
          <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Monthly Requests Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Statistics;
