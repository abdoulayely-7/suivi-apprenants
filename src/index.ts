import express from "express";
import profileRoutes from "./routes/profileRoutes.js";
import competenceRoutes from "./routes/competenceRoutes.js";


const app = express();
app.use(express.json());

app.use("/profiles", profileRoutes);
app.use("/competences", competenceRoutes);

app.listen(3000, () =>   console.log("Server running on http://localhost:3000"));
