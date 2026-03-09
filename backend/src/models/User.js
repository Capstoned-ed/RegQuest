import db from "../config/db.js";

const User =  {
    findByEmail: async (email) => {
        const [rows] = await db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        return rows[0];
    },

    findById: async (id) => {
        const [rows] = await db.execute (
            'SELECT user_id, fname, lname, email, role FROM users WHERE user_id = ?',
            [id]
        );
        return rows[0];
    },

    create: async (userData) => {
        const {fname, lname, email, password} = userData;
        const [result] = await db.execute(
            'INSERT INTO users (fname, lname, email, password) VALUES(?, ?, ?, ?)',
            [fname, lname, email, password]
        );
        return result.insertId;
    }
};

export default User;