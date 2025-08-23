// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user } = useContext(AuthContext);

//   if (!user) return <Navigate to="/login" replace />;
//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;



import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext"; // ✅ Tumhara original path use kiya

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  // ✅ Wait until user loads from localStorage properly
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Show loader until auth state is ready
  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  // ✅ Agar user hi nahi mila toh login bhej do
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Agar role match nahi karta toh unauthorized bhej do
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Warna page allow karo
  return children;
};

export default ProtectedRoute;
