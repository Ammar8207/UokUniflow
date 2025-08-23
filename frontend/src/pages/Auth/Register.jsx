// src/pages/auth/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Lightbulb,
  Pencil,
  Microscope,
  BookOpen,
  FlaskConical,
  Globe,
  Laptop,
} from "lucide-react";
import logo from "../../assets/logo.png"; // adjust path if needed

const Register = () => {
  const navigate = useNavigate();

  const departments = [
    "Biochemistry",
    "Botany",
    "Chemistry",
    "Computer Science",
    "Geology",
    "Mathematics",
    "Microbiology",
    "Physics",
    "Zoology",
  ];

  const [formData, setFormData] = useState({
    seatNumber: "",
    email: "",
    department: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seatNumber: formData.seatNumber,
          email: formData.email,
          department: formData.department,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Registered Successfully!");
        navigate("/login");
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error("❌ Registration Error:", error);
      alert("❌ Failed to register. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen w-screen overflow-hidden font-sans">
      {/* Left Section (Green with Icons) */}
      <div className="relative hidden md:flex w-1/2 flex-col justify-center items-center bg-gradient-to-br from-green-500 to-green-600 overflow-hidden">
        {/* Animated Icons */}
<div className="absolute inset-0 opacity-30 z-10">
  <GraduationCap className="absolute top-6 left-6 w-10 h-10 lg:w-14 lg:h-14 text-green-100 animate-float-slow" />
  <Lightbulb className="absolute top-10 right-10 w-10 h-10 lg:w-14 lg:h-14 text-yellow-200 animate-rotate-slow" />
  <BookOpen className="absolute top-1/3 left-10 w-9 h-9 lg:w-12 lg:h-12 text-green-200 animate-float-fast" />
  <Globe className="absolute top-1/2 right-16 w-10 h-10 lg:w-14 lg:h-14 text-green-200 animate-swing" />
  <Laptop className="absolute top-1/2 left-1/3 w-10 h-10 lg:w-14 lg:h-14 text-green-100 animate-bounce-subtle" />
  <Pencil className="absolute bottom-20 left-8 w-9 h-9 lg:w-12 lg:h-12 text-green-100 animate-swing" />
  <FlaskConical className="absolute bottom-20 right-14 w-10 h-10 lg:w-14 lg:h-14 text-emerald-200 animate-float-slow" />
  <Microscope className="absolute bottom-10 right-1/3 w-12 h-12 lg:w-16 lg:h-16 text-green-100 animate-bounce-subtle" />
</div>


        {/* Left Content */}
        <div className="text-center max-w-sm lg:max-w-md text-white px-6 lg:px-8 z-20 drop-shadow-lg">
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="UOK Logo"
              className="w-24 h-24 lg:w-40 lg:h-40 object-contain rounded-full drop-shadow-lg animate-fade-in"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2 animate-fade-in">
            Step Into the Future
          </h1>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 animate-fade-in delay-200">
            UOK Digital Flow
          </h2>
          <p className="text-xs lg:text-sm leading-relaxed text-green-100 animate-fade-in delay-500">
            A smarter way to manage student records and streamline registration.
          </p>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 bg-white overflow-hidden">
        <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-8 border border-gray-100 animate-fade-in-up z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Seat Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seat Number
              </label>
              <input
                type="text"
                name="seatNumber"
                placeholder="B23110006004"
                value={formData.seatNumber}
                onChange={handleChange}
                required
                pattern="^[A-Z]{1}[0-9]{2}[0-9]{9}$"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@uok.edu.pk"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
              >
                <option value="">Select Department</option>
                {departments.map((dept, i) => (
                  <option key={i} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                placeholder="Password (5–9 characters)"
                value={formData.password}
                onChange={handleChange}
                minLength={5}
                maxLength={9}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
              />
            </div>

            {/* Show Password */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="showPassword"
                checked={formData.showPassword}
                onChange={handleChange}
                className="mr-2 accent-green-600"
              />
              <label className="text-sm text-gray-700">Show Password</label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 sm:py-2.5 rounded-lg transition transform hover:scale-105 shadow-md text-sm sm:text-base"
            >
              Register
            </button>

            {/* Redirect */}
            <p className="text-xs sm:text-sm text-center mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 hover:underline font-medium"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
