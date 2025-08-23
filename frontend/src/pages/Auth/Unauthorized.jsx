// src/Unauthorized.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
        <h2 className="text-2xl font-semibold mb-2">Unauthorized</h2>
        <p className="text-gray-600 mb-6">
          You do not have permission to access this page.
        </p>
        <button
          onClick={() => navigate(-1)} // Goes back to previous page
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
