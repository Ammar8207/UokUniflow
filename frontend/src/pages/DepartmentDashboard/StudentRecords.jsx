// // src/pages/DepartmentDashboard/StudentRecords.jsx
// import React, { useState } from "react";
// import DepartmentSidebar from "../../components/department/DeptSidebar";

// // Dummy student data
// const students = [
//   { seatNo: "BSC-101", name: "Ali Khan", department: "Biochemistry", batch: "2021", shift: "Morning", semester: "5" },
//   { seatNo: "BSC-102", name: "Sara Ahmed", department: "Botany", batch: "2022", shift: "Evening", semester: "3" },
//   { seatNo: "BSC-103", name: "Hassan Raza", department: "Zoology", batch: "2021", shift: "Morning", semester: "7" },
//   { seatNo: "BSC-104", name: "Maryam Fatima", department: "Chemistry", batch: "2023", shift: "Evening", semester: "1" },
// ];

// const StudentRecords = () => {
//   const [department, setDepartment] = useState("");
//   const [batch, setBatch] = useState("");
//   const [shift, setShift] = useState("");
//   const [semester, setSemester] = useState("");
//   const [searchSeatNo, setSearchSeatNo] = useState("");

//   const departments = ["Biochemistry", "Botany", "Zoology", "Chemistry"];
//   const batches = ["2021", "2022", "2023"];
//   const shifts = ["Morning", "Evening"];
//   const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

//   const filteredStudents = students.filter((student) => {
//     return (
//       (department ? student.department === department : true) &&
//       (batch ? student.batch === batch : true) &&
//       (shift ? student.shift === shift : true) &&
//       (semester ? student.semester === semester : true) &&
//       (searchSeatNo ? student.seatNo.toLowerCase().includes(searchSeatNo.toLowerCase()) : true)
//     );
//   });

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
//       {/* ✅ Sidebar */}
//       <DepartmentSidebar active="Student Records" />

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Student Records</h1>
//           <span className="text-gray-600">Manage and view student details</span>
//         </div>

//         {/* Filters */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
//           <select value={department} onChange={(e) => setDepartment(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
//             <option value="">Department</option>
//             {departments.map((dept, idx) => (<option key={idx} value={dept}>{dept}</option>))}
//           </select>
//           <select value={batch} onChange={(e) => setBatch(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
//             <option value="">Batch</option>
//             {batches.map((b, idx) => (<option key={idx} value={b}>{b}</option>))}
//           </select>
//           <select value={shift} onChange={(e) => setShift(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
//             <option value="">Shift</option>
//             {shifts.map((s, idx) => (<option key={idx} value={s}>{s}</option>))}
//           </select>
//           <select value={semester} onChange={(e) => setSemester(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
//             <option value="">Semester</option>
//             {semesters.map((sem, idx) => (<option key={idx} value={sem}>{sem}</option>))}
//           </select>
//           <div className="flex items-center border rounded-lg p-2 shadow-sm">
//             <input type="text" placeholder="Search by Seat No" value={searchSeatNo} onChange={(e) => setSearchSeatNo(e.target.value)} className="ml-2 outline-none w-full" />
//           </div>
//         </div>

//         {/* Student Table */}
//         <div className="bg-white rounded-lg shadow-md overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-green-100 text-green-800">
//                 <th className="p-3">Seat No</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Department</th>
//                 <th className="p-3">Batch</th>
//                 <th className="p-3">Shift</th>
//                 <th className="p-3">Semester</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredStudents.length > 0 ? (
//                 filteredStudents.map((student, idx) => (
//                   <tr key={idx} className="border-b hover:bg-gray-50 transition">
//                     <td className="p-3">{student.seatNo}</td>
//                     <td className="p-3">{student.name}</td>
//                     <td className="p-3">{student.department}</td>
//                     <td className="p-3">{student.batch}</td>
//                     <td className="p-3">{student.shift}</td>
//                     <td className="p-3">{student.semester}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center p-4 text-gray-500">No student found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default StudentRecords;
import React, { useState } from "react";
import DepartmentSidebar from "../../components/department/DeptSidebar";

// Dummy student data
const students = [
  { seatNo: "BSC-101", name: "Ali Khan", department: "Biochemistry", batch: "2021", shift: "Morning", semester: "5" },
  { seatNo: "BSC-102", name: "Sara Ahmed", department: "Botany", batch: "2022", shift: "Evening", semester: "3" },
  { seatNo: "BSC-103", name: "Hassan Raza", department: "Zoology", batch: "2021", shift: "Morning", semester: "7" },
  { seatNo: "BSC-104", name: "Maryam Fatima", department: "Chemistry", batch: "2023", shift: "Evening", semester: "1" },
];

const StudentRecords = () => {
  const [department, setDepartment] = useState("");
  const [batch, setBatch] = useState("");
  const [shift, setShift] = useState("");
  const [semester, setSemester] = useState("");
  const [searchSeatNo, setSearchSeatNo] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const departments = ["Biochemistry", "Botany", "Zoology", "Chemistry"];
  const batches = ["2021", "2022", "2023"];
  const shifts = ["Morning", "Evening"];
  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const filteredStudents = students
    .filter((student) => {
      return (
        (department ? student.department === department : true) &&
        (batch ? student.batch === batch : true) &&
        (shift ? student.shift === shift : true) &&
        (semester ? student.semester === semester : true) &&
        (searchSeatNo ? student.seatNo.toLowerCase().includes(searchSeatNo.toLowerCase()) : true)
      );
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      const dir = sortConfig.direction === "asc" ? 1 : -1;
      if (a[sortConfig.key] < b[sortConfig.key]) return -1 * dir;
      if (a[sortConfig.key] > b[sortConfig.key]) return 1 * dir;
      return 0;
    });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const exportCSV = () => {
    const headers = ["Seat No", "Name", "Department", "Batch", "Shift", "Semester"];
    const rows = filteredStudents.map((s) => [s.seatNo, s.name, s.department, s.batch, s.shift, s.semester]);
    let csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "student_records.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-sans">
      <DepartmentSidebar active="Student Records" />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Student Records</h1>
          <button
            onClick={exportCSV}
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
          >
            Export CSV
          </button>
        </div>
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <select value={department} onChange={(e) => setDepartment(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
            <option value="">Department</option>
            {departments.map((dept, idx) => (<option key={idx} value={dept}>{dept}</option>))}
          </select>
          <select value={batch} onChange={(e) => setBatch(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
            <option value="">Batch</option>
            {batches.map((b, idx) => (<option key={idx} value={b}>{b}</option>))}
          </select>
          <select value={shift} onChange={(e) => setShift(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
            <option value="">Shift</option>
            {shifts.map((s, idx) => (<option key={idx} value={s}>{s}</option>))}
          </select>
          <select value={semester} onChange={(e) => setSemester(e.target.value)} className="border rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400">
            <option value="">Semester</option>
            {semesters.map((sem, idx) => (<option key={idx} value={sem}>{sem}</option>))}
          </select>
          <div className="flex items-center border rounded-lg p-2 shadow-sm">
            <input type="text" placeholder="Search by Seat No" value={searchSeatNo} onChange={(e) => setSearchSeatNo(e.target.value)} className="ml-2 outline-none w-full" />
          </div>
        </div>
        {/* Student Table */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-100 text-green-800 cursor-pointer">
                <th className="p-3" onClick={() => requestSort("seatNo")}>Seat No {sortConfig.key==="seatNo" ? (sortConfig.direction==="asc"?"▲":"▼"):""}</th>
                <th className="p-3" onClick={() => requestSort("name")}>Name {sortConfig.key==="name" ? (sortConfig.direction==="asc"?"▲":"▼"):""}</th>
                <th className="p-3" onClick={() => requestSort("department")}>Department {sortConfig.key==="department" ? (sortConfig.direction==="asc"?"▲":"▼"):""}</th>
                <th className="p-3" onClick={() => requestSort("batch")}>Batch {sortConfig.key==="batch" ? (sortConfig.direction==="asc"?"▲":"▼"):""}</th>
                <th className="p-3" onClick={() => requestSort("shift")}>Shift {sortConfig.key==="shift" ? (sortConfig.direction==="asc"?"▲":"▼"):""}</th>
                <th className="p-3" onClick={() => requestSort("semester")}>Semester {sortConfig.key==="semester" ? (sortConfig.direction==="asc"?"▲":"▼"):""}</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{student.seatNo}</td>
                    <td className="p-3">{student.name}</td>
                    <td className="p-3">{student.department}</td>
                    <td className="p-3">{student.batch}</td>
                    <td className="p-3">{student.shift}</td>
                    <td className="p-3">{student.semester}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">No student found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default StudentRecords;

