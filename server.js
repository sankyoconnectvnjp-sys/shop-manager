const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname)));

app.get("/dashboard", (req, res) => res.sendFile(path.join(__dirname, "dashboard.html")));
app.get("/sales", (req, res) => res.sendFile(path.join(__dirname, "sales.html")));
app.get("/inventory", (req, res) => res.sendFile(path.join(__dirname, "inventory.html")));
app.get("/debt", (req, res) => res.sendFile(path.join(__dirname, "debt.html")));
app.get("/report", (req, res) => res.sendFile(path.join(__dirname, "report.html")));
app.get("/suppliers", (req, res) => res.sendFile(path.join(__dirname, "suppliers.html")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.listen(PORT, () => console.log(`✅ Shop Manager chạy tại port ${PORT}`));
