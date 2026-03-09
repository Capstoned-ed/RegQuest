import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export const registerUser = async (req, res, next) => {
    try {
        const {fname, lname, email, password} = req.body;
        if(!fname || !lname || !email || !password) {
            res.status(400);
            throw new Error("All fields are required.");
        }

        if(password.length < 8) {
            res.status(400);
            throw new Error("Password should be 8 characters long.")
        }

        const existingUser = await User.findByEmail(email);

        if (existingUser) {
            res.status(400);
            throw new Error("User already exists.");
        }

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUserID = await User.create({
            fname,
            lname,
            email,
            password:hashedPassword,
        });

        const jwt_token = jwt.sign({ id:newUserID }, process.env.JWT_SECRET, {
            expiresIn : process.env.JWT_EXPIRY, 
        });

        res.status(201).json({
            message: "User registered successfully.",
            user: {
                id: newUserID,
                fname,
                lname,
                email,
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

        const user = await User.findByEmail(email);

        if(user &&(await bcrypt.compare(password, user.password))) {
            const jwt_token = jwt.sign({id:user.user_id}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRY,
            })

            res.status(200).json ({
                message: "Login successful",
                user: {
                id: user.user_id,
                fname: user.fname,
                lname: user.lname,
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