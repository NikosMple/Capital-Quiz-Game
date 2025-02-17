import express from "express";
import env from "dotenv";
import db from "./db/db.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

env.config();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.EXPRESS_PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/api/quiz", async (req, res) => {
    const continent = req.query.continent;
    try {
        const query = continent
            ? "SELECT * FROM quiz_questions WHERE continent = $1;"
            : "SELECT * FROM quiz_questions;";
        const params = continent ? [continent] : [];
        const result = await db.query(query, params);
        res.json(result.rows);
    } catch (err) {
        console.error("❌ Failed to fetch questions:", err);
        res.status(500).json({ error: "Failed to fetch questions" });
    }
});

app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
});
