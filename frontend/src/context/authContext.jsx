// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // { role: 'student' | 'uni_admin' | 'dept_admin', data: {...} }

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//   }, []);

//   // ✅ Login function — role ke saath store karega
//   const login = (userData, role) => {
//     const userObj = { ...userData, role };
//     setUser(userObj);
//     localStorage.setItem("user", JSON.stringify(userObj));
//   };

//   // ✅ Logout
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   // ✅ Role check helpers
//   const isStudent = user?.role === "student";
//   const isUniAdmin = user?.role === "uni_admin";
//   const isDeptAdmin = user?.role === "dept_admin";

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         isStudent,
//         isUniAdmin,
//         isDeptAdmin
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ✅ User ko synchronously load karo localStorage se
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);

  // ✅ Login function — role ke saath store karega
  const login = (userData, role) => {
    const userObj = { ...userData, role };
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // ✅ Role check helpers
  const isStudent = user?.role === "student";
  const isUniAdmin = user?.role === "uni_admin";
  const isDeptAdmin = user?.role === "dept_admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isStudent,
        isUniAdmin,
        isDeptAdmin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
