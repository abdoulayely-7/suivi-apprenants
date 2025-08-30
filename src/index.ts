import express from "express";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();
app.use(express.json());

app.use("/profiles", profileRoutes);

app.listen(3000, () =>   console.log("Server running on http://localhost:3000"));
