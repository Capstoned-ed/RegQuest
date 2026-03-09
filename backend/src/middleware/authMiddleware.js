import jwt from "jsonwebtoken";
import db from "../config/db.js";

export const protect = async (req, res, next) => {
    let jwt_token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            jwt_token.req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(jwt_token, process.env.JWT_SECRET);

            const [users] = await db.execute(
                "SELECT user_id. full_name, email, role FROM users WHERE user_id = ?",
                [decoded.id]
            );

            if(users.length === 0) {
                res.status(401);
                throw new Error("User not found.");
            }

            req.user = users[0];
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed.");
        }
    }
    if (!jwt_token) {
        res.status(401);
        throw new Error("Not authorized, no token.");
    }
};