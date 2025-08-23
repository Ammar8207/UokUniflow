// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./index.css";

// // Public pages
// import Register from "./pages/Auth/Register";
// import Login from "./pages/Auth/Login";
// import Unauthorized from "./pages/Auth/Unauthorized";
// import ForgotPassword from "./pages/Auth/ForgotPassword";
// import ResetPassword from "./pages/Auth/ResetPassword";

// // Student Dashboard pages
// import Dashboard from "./pages/StudentDashboard/StudentDashboard";
// import Form from "./pages/StudentDashboard/Forms/Form";
// import Tracking from "./pages/StudentDashboard/Tracking";
// import StudentNotification from "./pages/StudentDashboard/StudentNotification";
// import FAQHelp from "./pages/StudentDashboard/FAQHelp";

// // Extra forms
// import Performa from "./pages/StudentDashboard/Forms/Performa";
// import G1Form from "./pages/StudentDashboard/Forms/G1";

// // Auth
// import ProtectedRoute from "./components/ProtectedRoute";
// import { AuthProvider } from "./context/authContext";

// // Uni & Department dashboards
// import UniDashboard from "./pages/UniversityDashboard/UniDashboard";
// import DepartmentAdminDashboard from "./pages/DepartmentDashboard/DepartmentDashboard";
// import Statistics from "./pages/DepartmentDashboard/Statistics";
// import DepartmentRequests from "./pages/DepartmentDashboard/DepartmentRequests";
// import StudentRecords from "./pages/DepartmentDashboard/StudentRecords";
// import DepartmentNotification from "./pages/DepartmentDashboard/DepartmentNotification";

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Default route */}
//           <Route path="/" element={<Navigate to="/login" />} />

//           {/* Public routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password" element={<ResetPassword />} />

//           {/* Protected routes */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute allowedRoles={["student", "dept_admin", "uni_admin"]}>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/form"
//             element={
//               <ProtectedRoute allowedRoles={["student"]}>
//                 <Form />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/tracking"
//             element={
//               <ProtectedRoute allowedRoles={["student", "dept_admin", "uni_admin"]}>
//                 <Tracking />
//               </ProtectedRoute>
//             }
//           />

//           {/* Student Notifications */}
//           <Route
//             path="/student-notifications"
//             element={
//               <ProtectedRoute allowedRoles={["student"]}>
//                 <StudentNotification />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/notifications"
//             element={
//               <ProtectedRoute allowedRoles={["student"]}>
//                 <StudentNotification />
//               </ProtectedRoute>
//             }
//           />

//           {/* University Admin Dashboard */}
//           <Route
//             path="/uni-dashboard"
//             element={
//               <ProtectedRoute allowedRoles={["uni_admin"]}>
//                 <UniDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Department Admin Dashboard */}
//           <Route
//             path="/department-admin"
//             element={
//               <ProtectedRoute allowedRoles={["dept_admin"]}>
//                 <DepartmentAdminDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/department-requests"
//             element={
//               <ProtectedRoute allowedRoles={["dept_admin"]}>
//                 <DepartmentRequests />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/student-records" element={<StudentRecords />} />
//           <Route path="/statistics" element={<Statistics />} />
//           <Route
//             path="/department-notifications"
//             element={
//               <ProtectedRoute allowedRoles={["dept_admin"]}>
//                 <DepartmentNotification />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/uni-notifications"
//             element={
//               <ProtectedRoute allowedRoles={["uni_admin"]}>
//                 <DepartmentNotification />
//               </ProtectedRoute>
//             }
//           />

//           {/* Extra forms */}
//           <Route
//             path="/performa"
//             element={
//               <ProtectedRoute allowedRoles={["student"]}>
//                 <Performa />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/g1"
//             element={
//               <ProtectedRoute allowedRoles={["student"]}>
//                 <G1Form />
//               </ProtectedRoute>
//             }
//           />

//           {/* Unauthorized */}
//           <Route path="/unauthorized" element={<Unauthorized />} />

//           {/* FAQ Help */}
//           <Route
//             path="/faq"
//             element={
//               <ProtectedRoute allowedRoles={["student", "dept_admin", "uni_admin"]}>
//                 <FAQHelp />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// Public pages
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Unauthorized from "./pages/Auth/Unauthorized";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

// Student Dashboard pages
import Dashboard from "./pages/StudentDashboard/StudentDashboard";
import Form from "./pages/StudentDashboard/Forms/Form";
import Tracking from "./pages/StudentDashboard/Tracking";
import StudentNotification from "./pages/StudentDashboard/StudentNotification";
import FAQHelp from "./pages/StudentDashboard/FAQHelp";

// Extra forms
import Performa from "./pages/StudentDashboard/Forms/Performa";
import G1Form from "./pages/StudentDashboard/Forms/G1";

// Auth
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";

// University Dashboard pages
import UniDashboard from "./pages/UniversityDashboard/UniDashboard";
import UniStudentRecords from "./pages/UniversityDashboard/UniStudentRecords";
import UniDepartments from "./pages/UniversityDashboard/UniDepartments";
import UniAnalytics from "./pages/UniversityDashboard/UniAnalytics";
import UniNotifications from "./pages/UniversityDashboard/UniNotifications";

// Department dashboards
import DepartmentAdminDashboard from "./pages/DepartmentDashboard/DepartmentDashboard";
import Statistics from "./pages/DepartmentDashboard/Statistics";
import DepartmentRequests from "./pages/DepartmentDashboard/DepartmentRequests";
import StudentRecords from "./pages/DepartmentDashboard/StudentRecords";
import DepartmentNotification from "./pages/DepartmentDashboard/DepartmentNotification";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Protected student routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["student", "dept_admin", "uni_admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/form"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Form />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tracking"
            element={
              <ProtectedRoute allowedRoles={["student", "dept_admin", "uni_admin"]}>
                <Tracking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-notifications"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentNotification />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentNotification />
              </ProtectedRoute>
            }
          />

          {/* Protected university admin routes */}
          <Route
            path="/uni-dashboard"
            element={
              <ProtectedRoute allowedRoles={["uni_admin"]}>
                <UniDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/uni-dashboard/student-records"
            element={
              <ProtectedRoute allowedRoles={["uni_admin"]}>
                <UniStudentRecords />
              </ProtectedRoute>
            }
          />
          <Route
            path="/uni-dashboard/departments"
            element={
              <ProtectedRoute allowedRoles={["uni_admin"]}>
                <UniDepartments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/uni-dashboard/analytics"
            element={
              <ProtectedRoute allowedRoles={["uni_admin"]}>
                <UniAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/uni-dashboard/notifications"
            element={
              <ProtectedRoute allowedRoles={["uni_admin"]}>
                <UniNotifications />
              </ProtectedRoute>
            }
          />

          {/* Department admin routes */}
          <Route
            path="/department-admin"
            element={
              <ProtectedRoute allowedRoles={["dept_admin"]}>
                <DepartmentAdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/department-requests"
            element={
              <ProtectedRoute allowedRoles={["dept_admin"]}>
                <DepartmentRequests />
              </ProtectedRoute>
            }
          />
          <Route path="/student-records" element={<StudentRecords />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route
            path="/department-notifications"
            element={
              <ProtectedRoute allowedRoles={["dept_admin"]}>
                <DepartmentNotification />
              </ProtectedRoute>
            }
          />

          {/* Extra forms */}
          <Route
            path="/performa"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Performa />
              </ProtectedRoute>
            }
          />
          <Route
            path="/g1"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <G1Form />
              </ProtectedRoute>
            }
          />

          {/* Unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* FAQ Help */}
          <Route
            path="/faq"
            element={
              <ProtectedRoute allowedRoles={["student", "dept_admin", "uni_admin"]}>
                <FAQHelp />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

