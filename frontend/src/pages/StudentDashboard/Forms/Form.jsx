import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DocumentTextIcon,
  UserPlusIcon,
  AcademicCapIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

const formsList = [
  {
    title: "Performa Form",
    description: "Submit your personal academic performa.",
    icon: DocumentTextIcon,
    path: "/performa",
  },
  {
    title: "Enrollment Form",
    description: "New enrollment or update.",
    icon: UserPlusIcon,
    path: "/enrollment",
  },
  {
    title: "G1 Form",
    description: "Request for G1 paper.",
    icon: AcademicCapIcon,
    path: "/g1",
  },
  {
    title: "Transcript Request",
    description: "Get your academic transcript.",
    icon: ClipboardDocumentIcon,
    path: "/transcript",
  },
];

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-green-700 tracking-tight">
          📋 Choose a Form
        </h1>
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
        {formsList.map((form, index) => (
          <div
            key={index}
            onClick={() => navigate(form.path)}
            className="relative group cursor-pointer p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center hover:-translate-y-2 h-full min-h-[200px]"
          >
            <form.icon className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-lg font-semibold text-green-700 group-hover:text-green-800">
              {form.title}
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1 flex-grow">
              {form.description}
            </p>

            {/* underline animation */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
