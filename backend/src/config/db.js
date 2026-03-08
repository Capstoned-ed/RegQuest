import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect((err) => {
    if(err) {
        console.error("DB Connection failed.", err)
        return
    }
    console.log("DB Connected successfully.")
})

export default db;
