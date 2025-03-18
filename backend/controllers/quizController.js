import {db} from "../db/db.js";

export const getQuizQuestions = async (req, res, next) => { 
    const continent = req.query.continent;
    try {
        const query = continent
            ? "SELECT * FROM quiz_questions WHERE continent = $1;"
            : "SELECT * FROM quiz_questions;";
        const params = continent ? [continent] : [];
        const result = await db.query(query, params);
        res.json(result.rows);
    } catch (err) {
        next(err); 
    }   
};