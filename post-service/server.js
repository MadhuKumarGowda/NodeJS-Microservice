import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT || 3200;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Its working" });
});

// Routes

import Routes from "./routes/index.js";
app.use(Routes);

app.listen(PORT, () => {
  console.log(`POST API Server is running on PORT ${PORT}`);
});
