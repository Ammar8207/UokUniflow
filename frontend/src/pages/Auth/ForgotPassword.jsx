// // src/pages/Auth/ForgotPassword.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRequest } from "../../utils/api";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(""); setError("");

//     const { ok, data } = await apiRequest("/auth/forgot-password", "POST", { email });

//     if (ok) {
//       setMessage("OTP sent to your email. Redirecting...");
//       setTimeout(() => navigate("/reset-password", { state: { email } }), 1500);
//     } else {
//       setError(data.error || "Failed to send OTP");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//         <button type="submit" className="bg-green-500 text-white p-2 rounded">
//           Send OTP
//         </button>
//       </form>
//       {message && <p className="text-green-600 mt-2">{message}</p>}
//       {error && <p className="text-red-600 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../../utils/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const { ok, data } = await apiRequest("/auth/forgot-password", "POST", { email });

    if (ok) {
      setMessage("OTP sent to your email. Redirecting...");
      setTimeout(() => navigate("/reset-password", { state: { email } }), 1500);
    } else {
      setError(data.error || "Failed to send OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition"
          >
            Send OTP
          </button>
        </form>
        {message && <p className="text-green-600 mt-4 text-center">{message}</p>}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
