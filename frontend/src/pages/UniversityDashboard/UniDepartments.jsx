// src/pages/UniversityDashboard/UniDepartments.jsx
import React from "react";
import SidebarLayout from "../../components/university/SidebarLayout";
import DepartmentsOverview from "../../components/university/DepartmentsOverview";

const UniDepartments = ({
  userName = "Admin",
  onLogout,
}) => {
  // Dummy departments data for main content only
  const departments = [
    { name: "Computer Science", totalRequests: 40 },
    { name: "Business", totalRequests: 30 },
    { name: "Engineering", totalRequests: 50 },
    { name: "Mathematics", totalRequests: 20 },
  ];

  return (
    <SidebarLayout userName={userName} onLogout={onLogout} departments={[]}>
      <h2 className="text-2xl font-bold mb-4">Departments Overview</h2>
      <DepartmentsOverview departments={departments} />
    </SidebarLayout>
  );
};

export default UniDepartments;
