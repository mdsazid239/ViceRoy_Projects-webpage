// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const enquiryRoutes = require("./routes/enquiryRoutes");

// const app = express();

// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

// app.use(express.json());

// // Routes
// app.use("/api/enquiries", enquiryRoutes);

// // Health check
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Viceroy backend is running",
//   });
// });

// // 404
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found",
//   });
// });

// // Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const enquiryRoutes = require("./routes/enquiryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// =========================
// API ROUTES
// =========================

app.use("/api/enquiries", enquiryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/properties", propertyRoutes);

// =========================
// REACT FRONTEND
// =========================

// backend/server.js se ek level upar = project root
const frontendPath = path.join(__dirname, "../dist");

app.use(express.static(frontendPath));

// React Router fallback (SPA ke liye — koi bhi unmatched route index.html serve karega)
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// =========================
// SERVER
// =========================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});