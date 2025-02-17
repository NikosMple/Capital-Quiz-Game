import pg from "pg";
import env from "dotenv";

env.config();

const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database Connection Failed:", err.stack);
    } else {
        console.log("✅ Connected to PostgreSQL!");
    }
});

export default db;
