const express = require("express");
const router = express.Router();
const studentRequestsController = require("../controllers/studentRequestsController");

// Get all requests
router.get("/", studentRequestsController.getAllRequests);

// Submit a new request
router.post("/", studentRequestsController.submitRequest);

module.exports = router;
