import express from "express";
import jwt from "jsonwebtoken";
import dashboardRoute from "../routes/dashboard";

const app = express();
const PORT = 5000;
const SECRET = "my_secret_key";

// Dummy login route to get token
app.get("/login", (req, res) => {
	const user = { id: 1, name: "Bax" }; // simulate user
	const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
	res.json({ token });
});

app.use(express.json());
app.use(dashboardRoute);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
