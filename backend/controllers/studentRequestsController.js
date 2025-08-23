const db = require("../db");

// Get all student requests
exports.getAllRequests = (req, res) => {
  const query = "SELECT * FROM student_requests ORDER BY submittedAt DESC";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Submit a new student request
exports.submitRequest = (req, res) => {
  const {
    type, // e.g., 'Performa', 'G1', 'Enrollment'
    studentName,
    fatherName,
    seatNo,
    department,
    semester,
    enrollmentNo,
    program,
    contactNo,
    cnic,
    address,
    serials,
    remarks,
    documents,
  } = req.body;

  const query =
    "INSERT INTO student_requests (type, studentName, fatherName, seatNo, department, semester, enrollmentNo, program, contactNo, cnic, address, serials, remarks, documents, submittedAt, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), 'Pending Department Approval')";

  db.query(
    query,
    [
      type,
      studentName,
      fatherName,
      seatNo,
      department,
      semester,
      enrollmentNo,
      program,
      contactNo,
      cnic,
      address,
      JSON.stringify(serials || []),
      remarks || "",
      JSON.stringify(documents || []),
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Request submitted successfully", requestId: result.insertId });
    }
  );
};
