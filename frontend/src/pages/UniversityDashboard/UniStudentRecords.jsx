// src/pages/UniversityDashboard/UniStudentRecords.jsx
import React, { useState, useEffect } from "react";
import SidebarLayout from "../../components/university/SidebarLayout";
import RequestsTable from "../../components/university/RequestsTable";

// Dummy data for student requests
const dummyRequests = [
  {
    id: 1,
    studentName: "Ali Khan",
    studentID: "UOK12345",
    requestType: "Transcript",
    status: "Pending",
    dateSubmitted: "2025-08-22",
  },
  {
    id: 2,
    studentName: "Sara Ahmed",
    studentID: "UOK12346",
    requestType: "Proforma Form",
    status: "Approved",
    dateSubmitted: "2025-08-20",
  },
  {
    id: 3,
    studentName: "Hassan Raza",
    studentID: "UOK12347",
    requestType: "Degree Verification",
    status: "Rejected",
    dateSubmitted: "2025-08-21",
  },
];

const UniStudentRecords = ({
  userName = "Admin",
  onLogout,
  departments = [],
}) => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    // Load dummy data on component mount
    setRequests(dummyRequests);
    setFilteredRequests(dummyRequests);
  }, []);

  const handleUpdateRequest = (id, newStatus) => {
    // Dummy update function
    const updated = requests.map((r) =>
      r.id === id ? { ...r, status: newStatus } : r
    );
    setRequests(updated);
    setFilteredRequests(updated);
  };

  return (
    <SidebarLayout userName={userName} onLogout={onLogout} departments={departments}>
      <h2 className="text-2xl font-bold mb-4">Student Records</h2>
      <RequestsTable requests={filteredRequests} handleUpdateRequest={handleUpdateRequest} />
    </SidebarLayout>
  );
};

export default UniStudentRecords;
