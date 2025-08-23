// src/pages/UniversityDashboard/UniAnalytics.jsx
import React from "react";
import SidebarLayout from "../../components/university/SidebarLayout";
import AnalyticsCharts from "../../components/university/AnalyticsCharts";

const UniAnalytics = ({ userName = "Admin", onLogout, departments = [] }) => {
  // Dummy analytics data
  const analyticsData = {
    requestsByDepartment: [
      { department: "Computer Science", requests: 40 },
      { department: "Business", requests: 30 },
      { department: "Engineering", requests: 50 },
      { department: "Mathematics", requests: 20 },
    ],
    requestsStatus: [
      { status: "Pending", count: 35 },
      { status: "Approved", count: 65 },
      { status: "Rejected", count: 20 },
    ],
    recentRequests: [
      { student: "Ali Khan", type: "Transcript", status: "Pending" },
      { student: "Sara Ahmed", type: "Performa Form", status: "Approved" },
      { student: "Hamza Iqbal", type: "Degree Verification", status: "Rejected" },
    ],
  };

  return (
    <SidebarLayout userName={userName} onLogout={onLogout} departments={departments}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">University Analytics</h2>
        <AnalyticsCharts data={analyticsData} />
      </div>
    </SidebarLayout>
  );
};

export default UniAnalytics;
