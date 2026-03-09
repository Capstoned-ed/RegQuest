import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
    let jwt_token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            jwt_token.req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(jwt_token, process.env.JWT_SECRET);

            const user = await User.findById(decoded.id)

            if(!user) {
                res.status(401);
                throw new Error("User not found.");
            }

            req.user = user;
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