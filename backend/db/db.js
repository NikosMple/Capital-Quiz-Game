import pg from "pg";
import env from "dotenv";

env.config();

const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

db.connect((err) => {
    if (err) {
        console.error("Connection failed:", err.stack);
    } else {
        console.log("Connected to Render Database!");
    }
});

export default db;