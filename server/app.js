const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const TABLES_FOLDER = path.join(__dirname, "tables");

// Enable CORS
app.use(cors());

// List all JSON files
app.get("/files", (req, res) => {
  fs.readdir(TABLES_FOLDER, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ files });
  });
});

// Get tables for a specific file
app.get("/tables/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(TABLES_FOLDER, filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    const jsonData = JSON.parse(data);
    res.json({ tables: jsonData.tables });
  });
});

// Get table information for a specific table
app.get("/table/:filename/:tableIndex", (req, res) => {
  const { filename, tableIndex } = req.params;
  const filePath = path.join(TABLES_FOLDER, filename);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    const jsonData = JSON.parse(data);
    const table = jsonData.tables[tableIndex];
    if (!table) {
      return res.status(404).json({ error: "Table not found" });
    }
    res.json({ table });
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
