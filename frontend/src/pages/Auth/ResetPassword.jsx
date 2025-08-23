// // src/pages/Auth/ResetPassword.jsx
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { apiRequest } from "../../utils/api";

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email || ""; // email from previous page

//   const [form, setForm] = useState({ otp: "", newPassword: "" });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(""); setError("");

//     const { ok, data } = await apiRequest("/auth/reset-password", "POST", {
//       email,
//       otp: form.otp,
//       newPassword: form.newPassword
//     });

//     if (ok) {
//       setMessage("Password reset successful. Redirecting to login...");
//       setTimeout(() => navigate("/login"), 1500);
//     } else {
//       setError(data.error || "Reset failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="otp"
//           placeholder="Enter OTP"
//           value={form.otp}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         <input
//           type="password"
//           name="newPassword"
//           placeholder="New Password"
//           value={form.newPassword}
//           onChange={handleChange}
//           required
//           className="border p-2 rounded"
//         />
//         <button type="submit" className="bg-green-500 text-white p-2 rounded">
//           Reset Password
//         </button>
//       </form>
//       {message && <p className="text-green-600 mt-2">{message}</p>}
//       {error && <p className="text-red-600 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default ResetPassword;
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { apiRequest } from "../../utils/api";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [form, setForm] = useState({ otp: "", newPassword: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const { ok, data } = await apiRequest("/auth/reset-password", "POST", {
      email,
      otp: form.otp,
      newPassword: form.newPassword,
    });

    if (ok) {
      setMessage("Password reset successful. Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      setError(data.error || "Reset failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={form.otp}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={form.newPassword}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition"
          >
            Reset Password
          </button>
        </form>
        {message && <p className="text-green-600 mt-4 text-center">{message}</p>}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;

