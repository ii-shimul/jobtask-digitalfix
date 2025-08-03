import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET = "sk-sf654ffs64f3sdf6s54"; // demo key

export const authenticateToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

	if (!token) {
		return res.status(401).json({ message: "Access token missing" });
	}

	try {
		const decoded = jwt.verify(token, SECRET);
		(req as any).user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ message: "Invalid or expired token", err });
	}
};
