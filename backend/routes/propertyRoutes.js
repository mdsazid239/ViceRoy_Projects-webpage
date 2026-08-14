const express = require("express");
const router = express.Router();

// GET /api/properties -> list all properties
router.get("/", async (req, res) => {
  try {
    // TODO: yahan database se properties fetch karni hain
    res.status(200).json({
      success: true,
      data: [],
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// GET /api/properties/:id -> single property details
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: yahan database se ek property id ke basis par fetch karni hai
    res.status(200).json({
      success: true,
      data: null,
    });
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;