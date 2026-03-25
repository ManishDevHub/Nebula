import express from "express";
import cors from "cors";
import { router } from "./routes/auth.route";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());


app.use("/api/auth", router);

app.listen(PORT, () => {
  console.log(`Auth service is running on port ${PORT}`);
});
