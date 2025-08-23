// // // // controllers/authController
// // // const db = require("../config/db");
// // // const jwt = require("jsonwebtoken");
// // // const nodemailer = require("nodemailer");

// // // // JWT Secret & Expiry
// // // const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// // // const JWT_EXPIRES = "1h";

// // // // OTP store (temporary in memory)
// // // let otpStore = {};

// // // // =============================
// // // // REGISTER USER
// // // // =============================
// // // const registerUser = (req, res) => {
// // //   const { seatNumber, email, department, password, role } = req.body;

// // //   if (!seatNumber || !email || !department || !password) {
// // //     return res.status(400).json({ error: "All fields are required" });
// // //   }

// // //   const sql = "INSERT INTO users (seatNumber, email, department, password, role) VALUES (?, ?, ?, ?, ?)";
// // //   db.query(sql, [seatNumber, email, department, password, role || "student"], (err) => {
// // //     if (err) {
// // //       console.error("Registration error:", err);
// // //       return res.status(500).json({ error: "Registration failed" });
// // //     }
// // //     res.status(201).json({ message: "User registered successfully" });
// // //   });
// // // };

// // // // =============================
// // // // LOGIN USER
// // // // =============================
// // // const loginUser = (req, res) => {
// // //   const { seatNumber, password } = req.body;

// // //   if (!seatNumber || !password) {
// // //     return res.status(400).json({ error: "All fields are required" });
// // //   }

// // //   const sql = "SELECT * FROM users WHERE seatNumber = ?";
// // //   db.query(sql, [seatNumber], (err, result) => {
// // //     if (err) return res.status(500).json({ error: "Login failed" });
// // //     if (result.length === 0) return res.status(401).json({ error: "Invalid seat number or password" });

// // //     const user = result[0];
// // //     if (user.password !== password) return res.status(401).json({ error: "Invalid seat number or password" });

// // //     const token = jwt.sign(
// // //       { id: user.id, role: user.role, seatNumber: user.seatNumber },
// // //       JWT_SECRET,
// // //       { expiresIn: JWT_EXPIRES }
// // //     );

// // //     res.status(200).json({ message: "Login successful", token, user: { id: user.id, role: user.role, seatNumber: user.seatNumber } });
// // //   });
// // // };

// // // // =============================
// // // // FORGOT PASSWORD (SEND OTP)
// // // // =============================
// // // const forgotPassword = async (req, res) => {
// // //   console.log("Request body:", req.body);

// // //   const { email } = req.body;
// // //   if (!email) return res.status(400).json({ error: "Email is required" });

// // //   // Check if user exists
// // //   db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
// // //     if (err) return res.status(500).json({ error: "Server error" });
// // //     if (result.length === 0) return res.status(404).json({ error: "Email not found" });

// // //     // Generate OTP
// // //     const otp = Math.floor(100000 + Math.random() * 900000).toString();
// // //     otpStore[email] = { otp, expires: Date.now() + 5 * 60 * 1000 }; // 5 min expiry

// // //     // Send email using Gmail App Password
// // //     const transporter = nodemailer.createTransport({
// // //       service: "gmail",
// // //       auth: {
// // //         user: process.env.EMAIL_USER,        // tumhara Gmail
// // //         pass: process.env.EMAIL_APP_PASS,    // 16-char App Password
// // //       },
// // //     });

// // //     const mailOptions = {
// // //       from: process.env.EMAIL_USER,
// // //       to: email, // ✅ user ke email par OTP send hoga
// // //       subject: "UOK Digital Flow - Password Reset OTP",
// // //       text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
// // //     };

// // //     transporter.sendMail(mailOptions, (err, info) => {
// // //       if (err) {
// // //         console.error("Email error:", err);
// // //         return res.status(500).json({ error: "Failed to send OTP" });
// // //       }
// // //       console.log("OTP sent:", info.response);
// // //       res.status(200).json({ message: "OTP sent to email" });
// // //     });
// // //   });
// // // };

// // // // =============================
// // // // RESET PASSWORD USING OTP
// // // // =============================
// // // const resetPassword = (req, res) => {
// // //   const { email, otp, newPassword } = req.body;

// // //   if (!email || !otp || !newPassword) {
// // //     return res.status(400).json({ error: "All fields are required" });
// // //   }

// // //   if (!otpStore[email]) return res.status(400).json({ error: "No OTP found for this email" });
// // //   if (otpStore[email].otp !== otp) return res.status(400).json({ error: "Invalid OTP" });
// // //   if (otpStore[email].expires < Date.now()) {
// // //     delete otpStore[email];
// // //     return res.status(400).json({ error: "OTP expired" });
// // //   }

// // //   const sql = "UPDATE users SET password = ? WHERE email = ?";
// // //   db.query(sql, [newPassword, email], (err) => {
// // //     if (err) return res.status(500).json({ error: "Password reset failed" });

// // //     delete otpStore[email];
// // //     res.status(200).json({ message: "Password reset successful" });
// // //   });
// // // };

// // // module.exports = { registerUser, loginUser, forgotPassword, resetPassword };
// // // controllers/authController.js
// // const db = require("../config/db");
// // const jwt = require("jsonwebtoken");
// // const nodemailer = require("nodemailer");

// // // JWT Secret & Expiry
// // const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// // const JWT_EXPIRES = "1h";

// // // =============================
// // // REGISTER USER
// // // =============================
// // const registerUser = (req, res) => {
// //   const { seatNumber, email, department, password, role } = req.body;

// //   if (!seatNumber || !email || !department || !password) {
// //     return res.status(400).json({ error: "All fields are required" });
// //   }

// //   // Password strength validation
// //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
// //   if (!passwordRegex.test(password)) {
// //     return res.status(400).json({ error: "Password must be 6-20 characters long, include letters and numbers" });
// //   }

// //   // Check for duplicate seatNumber or email
// //   const checkSql = "SELECT * FROM users WHERE seatNumber = ? OR email = ?";
// //   db.query(checkSql, [seatNumber, email], (err, result) => {
// //     if (err) return res.status(500).json({ error: "Database error" });
// //     if (result.length > 0) {
// //       return res.status(400).json({ error: "Seat Number or Email already exists" });
// //     }

// //     // Insert user if no duplicate
// //     const sql = "INSERT INTO users (seatNumber, email, department, password, role) VALUES (?, ?, ?, ?, ?)";
// //     db.query(sql, [seatNumber, email, department, password, role || "student"], (err) => {
// //       if (err) {
// //         console.error("Registration error:", err);
// //         return res.status(500).json({ error: "Registration failed" });
// //       }
// //       res.status(201).json({ message: "User registered successfully" });
// //     });
// //   });
// // };

// // // =============================
// // // LOGIN USER
// // // =============================
// // const loginUser = (req, res) => {
// //   const { seatNumber, password } = req.body;

// //   if (!seatNumber || !password) {
// //     return res.status(400).json({ error: "All fields are required" });
// //   }

// //   const sql = "SELECT * FROM users WHERE seatNumber = ?";
// //   db.query(sql, [seatNumber], (err, result) => {
// //     if (err) return res.status(500).json({ error: "Login failed" });
// //     if (result.length === 0) return res.status(401).json({ error: "Invalid seat number or password" });

// //     const user = result[0];
// //     if (user.password !== password) return res.status(401).json({ error: "Invalid seat number or password" });

// //     const token = jwt.sign(
// //       { id: user.id, role: user.role, seatNumber: user.seatNumber },
// //       JWT_SECRET,
// //       { expiresIn: JWT_EXPIRES }
// //     );

// //     res.status(200).json({
// //       message: "Login successful",
// //       token,
// //       user: { id: user.id, role: user.role, seatNumber: user.seatNumber }
// //     });
// //   });
// // };

// // // =============================
// // // FORGOT PASSWORD (SEND OTP)
// // // =============================
// // const forgotPassword = async (req, res) => {
// //   const { email } = req.body;
// //   if (!email) return res.status(400).json({ error: "Email is required" });

// //   db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
// //     if (err) return res.status(500).json({ error: "Server error" });
// //     if (result.length === 0) return res.status(404).json({ error: "Email not found" });

// //     // const otp = Math.floor(100000 + Math.random() * 900000).toString();
// //     // const expires = Date.now() + 5 * 60 * 1000; // 5 min expiry
// //     const otp = Math.floor(100000 + Math.random() * 900000).toString();
// //     const expires = new Date(Date.now() + 5 * 60 * 1000); // JS Date object


// //     // Store OTP in database
// //     const upsertOtpSql = `
// //       INSERT INTO otp_store (email, otp, expires)
// //       VALUES (?, ?, ?)
// //       ON DUPLICATE KEY UPDATE otp = ?, expires = ?
// //     `;
// //     db.query(upsertOtpSql, [email, otp, expires, otp, expires], (err) => {
// //       if (err) return res.status(500).json({ error: "Failed to store OTP" });

// //       // Send email
// //       const transporter = nodemailer.createTransport({
// //         service: "gmail",
// //         auth: {
// //           user: process.env.EMAIL_USER,
// //           pass: process.env.EMAIL_APP_PASS,
// //         },
// //       });

// //       const mailOptions = {
// //         from: process.env.EMAIL_USER,
// //         to: email,
// //         subject: "UOK Digital Flow - Password Reset OTP",
// //         text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
// //       };

// //       transporter.sendMail(mailOptions, (err, info) => {
// //         if (err) {
// //           console.error("Email error:", err);
// //           return res.status(500).json({ error: "Failed to send OTP" });
// //         }
// //         res.status(200).json({ message: "OTP sent to email" });
// //       });
// //     });
// //   });
// // };

// // // =============================
// // // RESET PASSWORD USING OTP
// // // =============================
// // const resetPassword = (req, res) => {
// //   const { email, otp, newPassword } = req.body;
// //   if (!email || !otp || !newPassword) {
// //     return res.status(400).json({ error: "All fields are required" });
// //   }

// //   // Password strength validation
// //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
// //   if (!passwordRegex.test(newPassword)) {
// //     return res.status(400).json({ error: "Password must be 6-20 characters long, include letters and numbers" });
// //   }

// //   const sql = "SELECT * FROM otp_store WHERE email = ? AND otp = ?";
// //   db.query(sql, [email, otp], (err, result) => {
// //     if (err) return res.status(500).json({ error: "Database error" });
// //     if (result.length === 0) return res.status(400).json({ error: "Invalid OTP" });

// //     const otpData = result[0];
// //     if (otpData.expires < Date.now()) {
// //       return res.status(400).json({ error: "OTP expired" });
// //     }

// //     // Update password
// //     const updateSql = "UPDATE users SET password = ? WHERE email = ?";
// //     db.query(updateSql, [newPassword, email], (err) => {
// //       if (err) return res.status(500).json({ error: "Password reset failed" });

// //       // Delete OTP after use
// //       db.query("DELETE FROM otp_store WHERE email = ?", [email], (err) => {
// //         if (err) console.error("Failed to delete OTP after reset:", err);
// //       });

// //       res.status(200).json({ message: "Password reset successful" });
// //     });
// //   });
// // };

// // module.exports = { registerUser, loginUser, forgotPassword, resetPassword };
// // controllers/authController.js
// const db = require("../config/db");
// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");

// // JWT Secret & Expiry
// const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
// const JWT_EXPIRES = "1h";

// // =============================
// // REGISTER USER
// // =============================
// const registerUser = (req, res) => {
//   const { seatNumber, email, department, password, role } = req.body;

//   if (!seatNumber || !email || !department || !password) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   // Password strength validation
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
//   if (!passwordRegex.test(password)) {
//     return res.status(400).json({ error: "Password must be 6-20 characters long, include letters and numbers" });
//   }

//   // Check for duplicate seatNumber or email
//   const checkSql = "SELECT * FROM users WHERE seatNumber = ? OR email = ?";
//   db.query(checkSql, [seatNumber, email], (err, result) => {
//     if (err) return res.status(500).json({ error: "Database error" });
//     if (result.length > 0) {
//       return res.status(400).json({ error: "Seat Number or Email already exists" });
//     }

//     // Insert user if no duplicate
//     const sql = "INSERT INTO users (seatNumber, email, department, password, role) VALUES (?, ?, ?, ?, ?)";
//     db.query(sql, [seatNumber, email, department, password, role || "student"], (err) => {
//       if (err) {
//         console.error("Registration error:", err);
//         return res.status(500).json({ error: "Registration failed" });
//       }
//       res.status(201).json({ message: "User registered successfully" });
//     });
//   });
// };

// // =============================
// // LOGIN USER
// // =============================
// const loginUser = (req, res) => {
//   const { seatNumber, password } = req.body;

//   if (!seatNumber || !password) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   const sql = "SELECT * FROM users WHERE seatNumber = ?";
//   db.query(sql, [seatNumber], (err, result) => {
//     if (err) return res.status(500).json({ error: "Login failed" });
//     if (result.length === 0) return res.status(401).json({ error: "Invalid seat number or password" });

//     const user = result[0];
//     if (user.password !== password) return res.status(401).json({ error: "Invalid seat number or password" });

//     const token = jwt.sign(
//       { id: user.id, role: user.role, seatNumber: user.seatNumber },
//       JWT_SECRET,
//       { expiresIn: JWT_EXPIRES }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: { id: user.id, role: user.role, seatNumber: user.seatNumber }
//     });
//   });
// };

// // // =============================
// // // FORGOT PASSWORD (SEND OTP)
// // // =============================
// // const forgotPassword = (req, res) => {
// //   const { email } = req.body;
// //   if (!email) return res.status(400).json({ error: "Email is required" });

// //   db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
// //     if (err) return res.status(500).json({ error: "Server error" });
// //     if (result.length === 0) return res.status(404).json({ error: "Email not found" });

// //     // Generate OTP and expiry
// //     const otp = Math.floor(100000 + Math.random() * 900000).toString();
// //     const expires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

// //     // Store OTP in MySQL
// //     const upsertOtpSql = `
// //       INSERT INTO otp_store (email, otp, expires)
// //       VALUES (?, ?, ?)
// //       ON DUPLICATE KEY UPDATE otp = ?, expires = ?
// //     `;
// //     db.query(upsertOtpSql, [email, otp, expires, otp, expires], (err) => {
// //       if (err) return res.status(500).json({ error: "Failed to store OTP" });

// //       // Send email
// //       const transporter = nodemailer.createTransport({
// //         service: "gmail",
// //         auth: {
// //           user: process.env.EMAIL_USER,
// //           pass: process.env.EMAIL_APP_PASS,
// //         },
// //       });

// //       const mailOptions = {
// //         from: process.env.EMAIL_USER,
// //         to: email,
// //         subject: "UOK Digital Flow - Password Reset OTP",
// //         text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
// //       };

// //       transporter.sendMail(mailOptions, (err) => {
// //         if (err) return res.status(500).json({ error: "Failed to send OTP" });
// //         res.status(200).json({ message: "OTP sent to email" });
// //       });
// //     });
// //   });
// // };

// // // =============================
// // // RESET PASSWORD USING OTP
// // // =============================
// // const resetPassword = (req, res) => {
// //   const { email, otp, newPassword } = req.body;
// //   if (!email || !otp || !newPassword) {
// //     return res.status(400).json({ error: "All fields are required" });
// //   }
// // =============================
// // FORGOT PASSWORD (SEND OTP)
// // =============================
// const forgotPassword = (req, res) => {
//   const { email } = req.body;
//   if (!email) return res.status(400).json({ error: "Email is required" });

//   db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
//     if (err) return res.status(500).json({ error: "Server error" });
//     if (result.length === 0) return res.status(404).json({ error: "Email not found" });

//     // Generate OTP and expiry (5 minutes)
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const expires = new Date(Date.now() + 5 * 60 * 1000)
//       .toISOString()
//       .slice(0, 19)
//       .replace("T", " "); // MySQL DATETIME format

//     // Store OTP in DB
//     const upsertOtpSql = `
//       INSERT INTO otp_store (email, otp, expires)
//       VALUES (?, ?, ?)
//       ON DUPLICATE KEY UPDATE otp = ?, expires = ?
//     `;
//     db.query(upsertOtpSql, [email, otp, expires, otp, expires], (err) => {
//       if (err) {
//         console.error("OTP DB error:", err);
//         return res.status(500).json({ error: "Failed to store OTP" });
//       }

//       // Send email
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_APP_PASS,
//         },
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "UOK Digital Flow - Password Reset OTP",
//         text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
//       };

//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.error("Email error:", err);
//           return res.status(500).json({ error: "Failed to send OTP" });
//         }
//         res.status(200).json({ message: "OTP sent to email" });
//       });
//     });
//   });
// };

// // =============================
// // RESET PASSWORD USING OTP
// // =============================
// const resetPassword = (req, res) => {
//   const { email, otp, newPassword } = req.body;
//   if (!email || !otp || !newPassword) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   // Password strength validation
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
//   if (!passwordRegex.test(newPassword)) {
//     return res.status(400).json({ error: "Password must be 6-20 characters long, include letters and numbers" });
//   }

//   const sql = "SELECT * FROM otp_store WHERE email = ? AND otp = ?";
//   db.query(sql, [email, otp], (err, result) => {
//     if (err) return res.status(500).json({ error: "Database error" });
//     if (result.length === 0) return res.status(400).json({ error: "Invalid OTP" });

//     const otpData = result[0];
//     if (new Date(otpData.expires) < new Date()) {
//       return res.status(400).json({ error: "OTP expired" });
//     }

//     // Update password
//     const updateSql = "UPDATE users SET password = ? WHERE email = ?";
//     db.query(updateSql, [newPassword, email], (err) => {
//       if (err) return res.status(500).json({ error: "Password reset failed" });

//       // Delete OTP after use
//       db.query("DELETE FROM otp_store WHERE email = ?", [email], (err) => {
//         if (err) console.error("Failed to delete OTP after reset:", err);
//       });

//       res.status(200).json({ message: "Password reset successful" });
//     });
//   });
// };


//   // Password strength validation
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
//   if (!passwordRegex.test(newPassword)) {
//     return res.status(400).json({ error: "Password must be 6-20 characters long, include letters and numbers" });
//   }

//   const sql = "SELECT * FROM otp_store WHERE email = ? AND otp = ?";
//   db.query(sql, [email, otp], (err, result) => {
//     if (err) return res.status(500).json({ error: "Database error" });
//     if (result.length === 0) return res.status(400).json({ error: "Invalid OTP" });

//     const otpData = result[0];
//     if (new Date(otpData.expires) < new Date()) {
//       return res.status(400).json({ error: "OTP expired" });
//     }

//     // Update password
//     const updateSql = "UPDATE users SET password = ? WHERE email = ?";
//     db.query(updateSql, [newPassword, email], (err) => {
//       if (err) return res.status(500).json({ error: "Password reset failed" });

//       // Delete OTP after use
//       db.query("DELETE FROM otp_store WHERE email = ?", [email], (err) => {
//         if (err) console.error("Failed to delete OTP after reset:", err);
//       });

//       res.status(200).json({ message: "Password reset successful" });
//     });
//   });
// };

// module.exports = { registerUser, loginUser, forgotPassword, resetPassword };
// controllers/authController.js
const db = require("../config/db");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// JWT Secret & Expiry
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const JWT_EXPIRES = "1h";

// =============================
// REGISTER USER
// =============================
const registerUser = (req, res) => {
  const { seatNumber, email, department, password, role } = req.body;

  if (!seatNumber || !email || !department || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Password strength validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: "Password must be 6-20 characters long, include letters and numbers" });
  }

  // Check for duplicate seatNumber or email
  const checkSql = "SELECT * FROM users WHERE seatNumber = ? OR email = ?";
  db.query(checkSql, [seatNumber, email], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length > 0) {
      return res.status(400).json({ error: "Seat Number or Email already exists" });
    }

    // Insert user if no duplicate
    const sql = "INSERT INTO users (seatNumber, email, department, password, role) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [seatNumber, email, department, password, role || "student"], (err) => {
      if (err) {
        console.error("Registration error:", err);
        return res.status(500).json({ error: "Registration failed" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

// =============================
// LOGIN USER
// =============================
const loginUser = (req, res) => {
  const { seatNumber, password } = req.body;

  if (!seatNumber || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "SELECT * FROM users WHERE seatNumber = ?";
  db.query(sql, [seatNumber], (err, result) => {
    if (err) return res.status(500).json({ error: "Login failed" });
    if (result.length === 0) return res.status(401).json({ error: "Invalid seat number or password" });

    const user = result[0];
    if (user.password !== password) return res.status(401).json({ error: "Invalid seat number or password" });

    const token = jwt.sign(
      { id: user.id, role: user.role, seatNumber: user.seatNumber },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, role: user.role, seatNumber: user.seatNumber }
    });
  });
};

// =============================
// FORGOT PASSWORD (SEND OTP)
// =============================
const forgotPassword = (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ error: "Server error" });
    if (result.length === 0) return res.status(404).json({ error: "Email not found" });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Create expiry in local time (5 minutes from now)
    const expires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    const mysqlExpires =
      expires.getFullYear() + "-" +
      String(expires.getMonth() + 1).padStart(2, "0") + "-" +
      String(expires.getDate()).padStart(2, "0") + " " +
      String(expires.getHours()).padStart(2, "0") + ":" +
      String(expires.getMinutes()).padStart(2, "0") + ":" +
      String(expires.getSeconds()).padStart(2, "0");

    // Store OTP in DB
    const upsertOtpSql = `
      INSERT INTO otp_store (email, otp, expires)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE otp = ?, expires = ?
    `;
    db.query(upsertOtpSql, [email, otp, mysqlExpires, otp, mysqlExpires], (err) => {
      if (err) {
        console.error("OTP DB error:", err);
        return res.status(500).json({ error: "Failed to store OTP" });
      }

      // Send email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "UOK Digital Flow - Password Reset OTP",
        text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Email error:", err);
          return res.status(500).json({ error: "Failed to send OTP" });
        }
        console.log("OTP sent:", info.response);
        res.status(200).json({ message: "OTP sent to email" });
      });
    });
  });
};


// =============================
// RESET PASSWORD USING OTP
// =============================
const resetPassword = (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Password strength validation
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
  if (!passwordRegex.test(newPassword)) {
    return res.status(400).json({
      error: "Password must be 6-20 characters long, include letters and numbers",
    });
  }

  // Fetch OTP from DB
  const sql = "SELECT * FROM otp_store WHERE email = ? AND otp = ?";
  db.query(sql, [email, otp], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length === 0) return res.status(400).json({ error: "Invalid OTP" });

    const otpData = result[0];
    const now = new Date();
    const otpExpiry = new Date(otpData.expires); // convert MySQL DATETIME to JS Date

    if (otpExpiry < now) {
      // Delete expired OTP
      db.query("DELETE FROM otp_store WHERE email = ?", [email], (err) => {
        if (err) console.error("Failed to delete expired OTP:", err);
      });
      return res.status(400).json({ error: "OTP expired" });
    }

    // Update user password
    const updateSql = "UPDATE users SET password = ? WHERE email = ?";
    db.query(updateSql, [newPassword, email], (err) => {
      if (err) return res.status(500).json({ error: "Password reset failed" });

      // Delete OTP after successful reset
      db.query("DELETE FROM otp_store WHERE email = ?", [email], (err) => {
        if (err) console.error("Failed to delete OTP after reset:", err);
      });

      res.status(200).json({ message: "Password reset successful" });
    });
  });
};



module.exports = { registerUser, loginUser, forgotPassword, resetPassword };
