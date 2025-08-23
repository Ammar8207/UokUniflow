import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const formsList = [
  { title: "Performa Form" },
  { title: "Enrollment Form" },
  { title: "G1 Form" },
  { title: "Transcript Request" },
];

const statuses = [
  { title: "Submitted", date: "30/07/2025", status: "Completed", color: "bg-green-100 text-green-700" },
  { title: "Department Approval", date: "01/08/2025", status: "Completed", color: "bg-green-100 text-green-700" },
  { title: "University Approved", date: "02/08/2025", status: "Completed", color: "bg-green-100 text-green-700" },
  { title: "In Progress", date: "", status: "Ongoing", color: "bg-yellow-100 text-yellow-700" },
  { title: "Completed", date: "", status: "Pending", color: "bg-red-100 text-red-700" },
];

const Tracking = () => {
  const navigate = useNavigate();

  // yahan track karenge user ne konsi forms submit ki hain
  const [submittedForms, setSubmittedForms] = useState(["Performa Form"]); 
  const [selectedForm, setSelectedForm] = useState("Performa Form");

  const hasSubmitted = submittedForms.includes(selectedForm);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-green-700 tracking-tight">
          📊 Tracking Requests
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Return
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="bg-white/70 backdrop-blur-lg border border-green-100 rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-green-700 mb-4">Available Forms</h2>
          <ul className="space-y-3">
            {formsList.map((form, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedForm(form.title)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    selectedForm === form.title
                      ? "bg-green-100 text-green-700 font-semibold shadow-inner"
                      : "hover:bg-green-50 text-gray-700"
                  }`}
                >
                  <p className="text-sm font-medium">{form.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Status Section */}
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            {selectedForm} - Status Overview
          </h2>

          {hasSubmitted ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {statuses.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative group p-6 rounded-2xl border border-green-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 
                  ${item.status === "Completed" ? "bg-green-50 hover:bg-green-100" : "bg-white/70 backdrop-blur-lg hover:bg-green-50"}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700">
                    {item.title}
                  </h3>
                  {item.date && (
                    <p className="text-sm text-gray-600 mt-1">📅 Date: {item.date}</p>
                  )}
                  <span
                    className={`mt-4 inline-block px-3 py-1 text-sm font-medium rounded-full ${item.color}`}
                  >
                    {item.status}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-yellow-800 shadow-md">
              <h3 className="text-lg font-semibold">No Request Found</h3>
              <p className="mt-2 text-sm">
                You have not submitted this form yet. Please submit a new request to start tracking.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;


