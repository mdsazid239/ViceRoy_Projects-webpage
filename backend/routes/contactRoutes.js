const express = require("express");
const router = express.Router();

// POST /api/contact  -> new contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    // TODO: yahan par database mein save karna hoga
    // ya email bhejna hoga (jaise enquiryRoutes.js mein hoga)
    console.log("New contact form submission:", { name, email, phone, message });

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error in contact route:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;