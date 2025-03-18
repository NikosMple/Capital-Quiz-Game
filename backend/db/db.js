import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); 

const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

const connectDB = async () => {
    try {
        await db.connect();
        console.log("Successfully connected to PostgreSQL!");
    } catch (err) {
        console.error("Database Connection Failed:", err.message);
        process.exit(1); 
    }
};

export { db, connectDB };
