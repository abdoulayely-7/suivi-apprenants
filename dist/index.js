import express from "express";
import niveauRoute from "./routes/niveauRoute.js";
import ProfilSortieRoutes from "./routes/ProfilSortieRoutes.js";
const app = express();
app.use(express.json());
// Route racine
app.get("/", (_req, res) => res.send("API en ligne "));
app.use("/niveau", niveauRoute);
app.use("/profilSortie", ProfilSortieRoutes);
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
//# sourceMappingURL=index.js.map