export const RBAC: Record<string, Record<string, string[]>> = {
  Admin: {
    users: ["GET", "POST", "PUT", "DELETE"],
    profiles: ["GET", "POST", "PUT", "DELETE"],
    promos: ["GET", "POST", "PUT", "DELETE"],
    niveaux: ["GET", "POST", "PUT", "DELETE"],
    competences: ["GET", "POST", "PUT", "DELETE"],
    referentiels: ["GET", "POST", "PUT", "DELETE"],
    tags: ["GET", "POST", "PUT", "DELETE"],
    "profils-sortie": ["GET", "POST", "PUT", "DELETE"],
  },
  Formateur: {
    users: ["GET"],
    profiles: ["GET"],
    promos: ["GET"],
    niveaux: ["GET"],
    competences: ["GET"],
    referentiels: ["GET"],
    tags: ["GET"],
    "profils-sortie": ["GET"],
  },
  CM: {
    users: ["GET"],
    profiles: ["GET"],
    promos: ["GET"],
    niveaux: ["GET"],
    competences: ["GET"],
    referentiels: ["GET"],
    tags: ["GET"],
      profils_sortie: ["GET"],
    //"profils-sortie": ["GET"],
  },
  Apprenant: {
    // Pas d’accès aux routes de paramétrage
  },
};
