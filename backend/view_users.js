import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const viewData = async () => {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: {
            rejectUnauthorized: false
        }
    });

    console.log('Fetching users from Aiven...');

    try {
        const [rows] = await pool.execute('SELECT * FROM users');
        
        if (rows.length === 0) {
            console.log('--- 📭 The users table is currently empty! ---');
        } else {
            console.log('\n--- 👥 USERS TABLE DATA ---');
            console.table(rows);
        }

    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    } finally {
        await pool.end();
        process.exit();
    }
};

viewData();
