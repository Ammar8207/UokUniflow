const db = require("../db");

// Get all notifications
exports.getNotifications = (req, res) => {
  const query = "SELECT * FROM notifications ORDER BY createdAt DESC";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Create a new notification
exports.createNotification = (req, res) => {
  const { title, message } = req.body;
  if (!title || !message)
    return res.status(400).json({ error: "Title and message are required" });

  const query = "INSERT INTO notifications (title, message, createdAt) VALUES (?, ?, NOW())";
  db.query(query, [title, message], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Notification created", notificationId: result.insertId });
  });
};
