// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql2");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const app = express();
// app.use(cors({ origin: process.env.ORIGIN || "*" }));
// app.use(express.json());

// const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_here";
// const JWT_EXPIRES_IN = "2h";

// // DB connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "rak1234",
//   database: "student_portal",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("❌ MySQL Connection Error:", err);
//     return;
//   }
//   console.log("✅ MySQL Connected!");
// });

// // Helpers: auth & RBAC
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers.authorization || "";
//   const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
//   if (!token) return res.status(401).json({ error: "No token provided" });

//   jwt.verify(token, JWT_SECRET, (err, payload) => {
//     if (err) return res.status(403).json({ error: "Invalid/expired token" });
//     req.user = payload; // { id, seatNumber, role, department }
//     next();
//   });
// }

// function authorizeRoles(...allowed) {
//   return (req, res, next) => {
//     if (!req.user || !allowed.includes(req.user.role)) {
//       return res.status(403).json({ error: "Access denied" });
//     }
//     next();
//   };
// }

// // ==========================
// // REGISTER USER (plain text)
// // ==========================
// app.post("/api/auth/register", (req, res) => {
//   const { seatNumber, email, department, password, role } = req.body;

//   if (!seatNumber || !email || !department || !password) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   db.query("SELECT id FROM users WHERE seatNumber = ?", [seatNumber], (err, rows) => {
//     if (err) return res.status(500).json({ error: err.sqlMessage || "DB error" });
//     if (rows.length) return res.status(409).json({ error: "Seat number already registered." });

//     db.query(
//       "INSERT INTO users (seatNumber, email, department, password, role) VALUES (?,?,?,?,?)",
//       [seatNumber, email, department, password, role || "student"],
//       (insErr) => {
//         if (insErr) return res.status(500).json({ error: insErr.sqlMessage || "DB insert error" });
//         return res.status(201).json({ message: "User registered successfully." });
//       }
//     );
//   });
// });

// // ==========================
// // LOGIN USER (plain text)
// // ==========================
// app.post("/api/auth/login", (req, res) => {
//   const { seatNumber, password } = req.body;
//   if (!seatNumber || !password) {
//     return res.status(400).json({ error: "Seat number and password are required" });
//   }

//   db.query("SELECT * FROM users WHERE seatNumber = ?", [seatNumber], (err, rows) => {
//     if (err) return res.status(500).json({ error: "Database error" });
//     if (!rows.length) return res.status(401).json({ error: "Invalid seat number or password" });

//     const user = rows[0];
//     if (user.password !== password) {
//       return res.status(401).json({ error: "Invalid seat number or password" });
//     }

//     const token = jwt.sign(
//       {
//         id: user.id,
//         seatNumber: user.seatNumber,
//         role: user.role || "student",
//         department: user.department || null,
//       },
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES_IN }
//     );

//     return res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user.id,
//         seatNumber: user.seatNumber,
//         role: user.role || "student",
//         department: user.department || null,
//       },
//     });
//   });
// });

// // WHOAMI endpoint
// app.get("/api/auth/me", authenticateToken, (req, res) => {
//   res.json({ user: req.user });
// });

// // Protected examples
// app.get(
//   "/api/dept/students",
//   authenticateToken,
//   authorizeRoles("dept_admin"),
//   (req, res) => {
//     const dept = req.user.department;
//     if (!dept) return res.status(400).json({ error: "No department set on admin account" });

//     db.query(
//       "SELECT id, seatNumber, email, department, role FROM users WHERE department = ? AND role = 'student' ORDER BY seatNumber",
//       [dept],
//       (err, rows) => {
//         if (err) return res.status(500).json({ error: err.sqlMessage || "DB error" });
//         res.json(rows);
//       }
//     );
//   }
// );

// app.get(
//   "/api/uni/departments",
//   authenticateToken,
//   authorizeRoles("uni_admin"),
//   (req, res) => {
//     db.query("SELECT * FROM departments ORDER BY name", (err, rows) => {
//       if (err) return res.status(500).json({ error: err.sqlMessage || "DB error" });
//       res.json(rows);
//     });
//   }
// );

// app.post(
//   "/api/uni/departments",
//   authenticateToken,
//   authorizeRoles("uni_admin"),
//   (req, res) => {
//     const { name } = req.body;
//     if (!name) return res.status(400).json({ error: "Department name is required" });

//     db.query("INSERT INTO departments (name) VALUES (?)", [name], (err) => {
//       if (err) return res.status(500).json({ error: err.sqlMessage || "DB error" });
//       res.json({ message: "Department created" });
//     });
//   }
// );

// // Server start
// const PORT = 3001;
// const HOST = "0.0.0.0";
// app.listen(PORT, HOST, () => {
//   console.log(`✅ Server running on http://${HOST}:${PORT}`);
// });
// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

// Import DB and routes
const db = require("./config/db"); // your db.js
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors({ origin: process.env.ORIGIN || "*" }));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "yourjwtsecret";

// ==========================
// JWT Authentication Middleware
// ==========================
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ error: "Invalid/expired token" });
    req.user = payload; // { id, seatNumber, role, department }
    next();
  });
}

function authorizeRoles(...allowed) {
  return (req, res, next) => {
    if (!req.user || !allowed.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
}

// ==========================
// Use auth routes
// ==========================
app.use("/api/auth", authRoutes); // all /api/auth/* handled in authRoutes.js

// ==========================
// Example protected routes
// ==========================
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: "You have access!", user: req.user });
});

app.get(
  "/api/dept/students",
  authenticateToken,
  authorizeRoles("dept_admin"),
  (req, res) => {
    const dept = req.user.department;
    if (!dept) return res.status(400).json({ error: "No department set on admin account" });

    db.query(
      "SELECT id, seatNumber, email, department, role FROM users WHERE department = ? AND role = 'student' ORDER BY seatNumber",
      [dept],
      (err, rows) => {
        if (err) return res.status(500).json({ error: err.sqlMessage || "DB error" });
        res.json(rows);
      }
    );
  }
);

app.get(
  "/api/uni/departments",
  authenticateToken,
  authorizeRoles("uni_admin"),
  (req, res) => {
    db.query("SELECT * FROM departments ORDER BY name", (err, rows) => {
      if (err) return res.status(500).json({ error: err.sqlMessage || "DB error" });
      res.json(rows);
    });
  }
);

app.post(
  "/api/uni/departments",
  authenticateToken,
  authorizeRoles("uni_admin"),
  (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Department name is required" });

    db.query("INSERT INTO departments (name) VALUES (?)", [name], (err) => {
      if (err) return res.status(500).json({ error: err.sqlMessage || "DB error" });
      res.json({ message: "Department created" });
    });
  }
);

// ==========================
// Server start
// ==========================
const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`✅ Server running on http://${HOST}:${PORT}`);
});
