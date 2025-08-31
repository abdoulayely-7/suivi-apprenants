import express from "express";
import profileRoutes from "./routes/profileRoutes.js";
import promoRoutes from "./routes/promoRoutes.js";
import competenceRoutes from "./routes/competenceRoutes.js";
const app = express();
app.use(express.json());
app.use("/profiles", profileRoutes);
app.use("/promos", promoRoutes);
app.use("/competences", competenceRoutes);
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
//# sourceMappingURL=index.js.map