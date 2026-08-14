const db = require("../config/db");

const createEnquiry = async (req, res) => {
  try {
    const { name, mobile, email } = req.body;

    // Validation
    if (!name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, mobile and email are required.",
      });
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Mobile number must be 10 digits.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email.",
      });
    }

    const [result] = await db.execute(
      `
        INSERT INTO enquiries
        (name, mobile, email)
        VALUES (?, ?, ?)
      `,
      [name.trim(), mobile, email.trim()]
    );

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      enquiryId: result.insertId,
    });
  } catch (error) {
    console.error("Create Enquiry Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save enquiry.",
    });
  }
};

module.exports = {
  createEnquiry,
};