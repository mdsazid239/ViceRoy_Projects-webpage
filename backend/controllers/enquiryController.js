const db = require("../config/db");

const createEnquiry = async (req, res) => {
  try {
    const { name, mobile, email } = req.body;

    console.log("Enquiry received:", {
      name,
      mobile,
      email,
    });

    // =========================
    // VALIDATION
    // =========================

    if (!name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, mobile and email are required.",
      });
    }

    const cleanName = name.trim();
    const cleanMobile = mobile.trim();
    const cleanEmail = email.trim();

    if (!/^[0-9]{10}$/.test(cleanMobile)) {
      return res.status(400).json({
        success: false,
        message: "Mobile number must be 10 digits.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email.",
      });
    }

    // =========================
    // INSERT INTO DATABASE
    // =========================

    const sql = `
      INSERT INTO enquiries
      (name, mobile, email)
      VALUES (?, ?, ?)
    `;

    const [result] = await db.execute(sql, [
      cleanName,
      cleanMobile,
      cleanEmail,
    ]);

    console.log("Enquiry saved successfully. ID:", result.insertId);

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
      error: error.message,
    });
  }
};

module.exports = {
  createEnquiry,
};