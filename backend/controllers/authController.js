const db = require("../config/db");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";
const JWT_EXPIRES = "1h";

const registerUser = (req, res) => {
  const { seatNumber, email, department, password, role } = req.body;

  if (!seatNumber || !email || !department || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: "Password must be 6-20 characters long, include letters and numbers" });
  }

  const checkSql = "SELECT * FROM users WHERE username = $1 OR email = $2";
  db.query(checkSql, [seatNumber, email], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.length > 0) {
      return res.status(400).json({ error: "Seat Number or Email already exists" });
    }

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

const loginUser = async (req, res) => {
  const { seatNumber, password } = req.body;

  if (!seatNumber || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const sql = "SELECT * FROM users WHERE seatNumber = $1";
    const result = await db.query(sql, [seatNumber]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid seat number or password" });
    }

    const user = result.rows[0];
    
    if (user.password_hash !== password) {
      return res.status(401).json({ error: "Invalid seat number or password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, seatNumber: user.seatnumber },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, role: user.role, seatNumber: user.seatnumber }
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Login failed" });
  }
};

const forgotPassword = (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  // Password reset functionality here
};

const resetPassword = (req, res) => {
  const { email, otp, newPassword } = req.body;
  // Reset password functionality here
};

module.exports = { registerUser, loginUser, forgotPassword, resetPassword };