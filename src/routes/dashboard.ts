import express from "express";
import { authenticateToken } from "../server/middleware/auth";

const router = express.Router();

router.get("/dashboard", authenticateToken, (req, res) => {
	res.json({ message: "Welcome to the protected dashboard!" });
});

export default router;
