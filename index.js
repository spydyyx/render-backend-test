const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/convert", (req, res) => {
  const { url, format, quality } = req.body;

  res.json({
    success: true,
    message: "Request received",
    received: { url, format, quality }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
