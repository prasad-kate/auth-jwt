import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/users", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
