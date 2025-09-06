const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors({ origin: process.env.ORIGIN || "*" }));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "yourjwtsecret";

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json({ error: "Invalid/expired token" });
    req.user = payload;
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

app.use("/api/auth", authRoutes);

app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: "You have access!", user: req.user });
});

const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`✅ Server running on http://${HOST}:${PORT}`);
});