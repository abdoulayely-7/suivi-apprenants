import express from "express";
import profileRoutes from "./routes/profilRoutes.js";
import promoRoutes from "./routes/promoRoutes.js";
import competenceRoutes from "./routes/competenceRoutes.js";
import referentielRoutes from "./routes/referentielRoutes.js";
import useRoutes from "./routes/useRoutes.js"
import tagRoutes from "./routes/tagRoutes.js"
import niveauRoute from "./routes/niveauRoute.js";
import ProfilSortieRoutes from "./routes/ProfilSortieRoutes.js"
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/profiles", profileRoutes);
app.use("/promos", promoRoutes);
app.use("/competences", competenceRoutes);
app.use("/referentiels", referentielRoutes);
app.use("/niveaux", niveauRoute);
app.use("/profilSorties",ProfilSortieRoutes)
app.use("/users", useRoutes);
app.use("/tags",tagRoutes);

app.use("/auth", authRoutes);

app.listen(3000, () =>   console.log("Server running on http://localhost:3000"));
