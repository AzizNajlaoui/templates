import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/test", (req, res) => {
  console.log(req.path + "visited");
  res.json({ message: "app is working" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
