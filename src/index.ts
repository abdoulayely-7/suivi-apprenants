import express from "express";
import profileRoutes from "./routes/profileRoutes.js";
import useRoutes from "./routes/useRoutes.js"

const app = express();
app.use(express.json());

app.use("/profiles", profileRoutes);
app.use("/users", useRoutes);

app.listen(3000, () =>   console.log("Server running on http://localhost:3000"));
