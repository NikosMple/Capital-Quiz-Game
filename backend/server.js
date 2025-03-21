import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import quizRoutes from "./routes/quizRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import { connectDB } from "./db/db.js"; 

dotenv.config();    

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use(express.json());  
app.use(cors());

app.use("/api/quiz", quizRoutes);

app.use(errorHandler);

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});