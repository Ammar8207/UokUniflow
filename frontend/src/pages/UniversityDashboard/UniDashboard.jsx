// src/pages/UniversityDashboard/UniDashboard.jsx
import React from "react";
import SidebarLayout from "../../components/university/SidebarLayout";
import StatsCards from "../../components/university/StatsCards";
import DepartmentsOverview from "../../components/university/DepartmentsOverview";
import RequestsTable from "../../components/university/RequestsTable";

const UniDashboard = ({ userName = "Admin", onLogout }) => {
  // Dummy data for frontend display
  const stats = {
    totalRequests: 120,
    pendingRequests: 35,
    completedRequests: 85,
    activeDepartments: 8,
  };

  const filteredRequests = [
    { id: 1, student: "Ali Khan", type: "Transcript", status: "Pending" },
    { id: 2, student: "Sara Ahmed", type: "Performa Form", status: "Approved" },
    { id: 3, student: "Hamza Iqbal", type: "Degree Verification", status: "Rejected" },
  ];

  const handleUpdateRequest = (requestId, status) => {
    console.log(`Request ${requestId} updated to ${status}`);
  };

  return (
    // Note: departments prop is removed here to avoid showing the list in dashboard sidebar
    <SidebarLayout userName={userName} onLogout={onLogout}>
      <StatsCards stats={stats} />
      <DepartmentsOverview departments={[]} /> {/* Empty array or remove if not needed */}
      <RequestsTable requests={filteredRequests} handleUpdateRequest={handleUpdateRequest} />
    </SidebarLayout>
  );
};

export default UniDashboard;


