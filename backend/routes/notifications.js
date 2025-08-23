const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Get all notifications
router.get("/", notificationController.getNotifications);

// Create a notification
router.post("/", notificationController.createNotification);

module.exports = router;
