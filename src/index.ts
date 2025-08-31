import express from "express";
import competenceRoute from "./routes/competenceRoutes.js";
import niveauRoute from "./routes/niveauRoute.js";

const app = express();
app.use(express.json());

// Route racine
app.get("/", (_req, res) => res.send("API en ligne "));

 
app.use("/competence", competenceRoute);
app.use("/niveau", niveauRoute);
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
