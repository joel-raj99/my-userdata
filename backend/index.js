// backend/server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 5000;


app.get("/api/users", async (req, res) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    const firstFive = data.slice(0, 10); 
    res.json(firstFive);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});
app.get("/api/todos", async (req, res) => {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const firstFive = data.slice(0, 5); 
    res.json(firstFive);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
