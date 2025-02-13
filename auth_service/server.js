import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 3100;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Auth Service is working" });
});

// Routes

import Routes from "./routes/index.js";
app.use(Routes);

app.listen(PORT, () => {
  console.log(`API Server is running on PORT ${PORT}`);
});
