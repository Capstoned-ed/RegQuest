import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res, next) => {
    try {
        const {full_name, email, password} = req.body;
        if(!full_name || !email || !password) {
            res.status(400);
            throw new Error("All fields are required.");
        }

        const user = await User.findOne({
            
        })

        const [existingUsers] = await db.execute(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (existingUsers.length > 0) {
            res.status(400);
            throw new Error("User already exists.");
        }

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        const [result] = await db.execute(
            'INSERT INTO users (full_name, email, password) VALUES(?, ?, ?)',
            [full_name, email, hashedPassword]
        );

        const newUserID = result.insertId;
        const jwt_token = jwt.sign({ id:newUserID }, process.env.JWT_SECRET, {
            expiresIn : process.env.JWT_EXPIRY, 
        });

        res.status(201).json({
            message: "User registered successfully.",
            user: {
                id: newUserID,
                full_name, full_name,
                email: email,
                role: "user",
            },
            jwt_token
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            res.status(400);
            throw new Error("Please provide email and password."); 
        }

        const [users] = await db.execute (
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        const user = users[0];

        if(user &&(await bcrypt.compare(password, user.password))) {
            const jwt_token = jwt.sign({id:user.user_id}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRY,
            })

            res.status(200).json ({
                message: "Login successful",
                user: {
                id: user.user_id,
                full_name: user.full_name,
                email: user.email,
                role: user.role,
            }, 
            jwt_token
        });
        } else {
            res.status(401);
            throw new Error("Invalid email or password.");
        }
    } catch (error) {
        next(error);
    }
};