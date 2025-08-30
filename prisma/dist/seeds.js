// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    console.log("✅ Début du seed...");
    // =======================
    // 1. Profils
    // =======================
    const adminProfil = await prisma.profil.create({ data: { name: "Admin" } });
    const formateurProfil = await prisma.profil.create({ data: { name: "Formateur" } });
    const apprenantProfil = await prisma.profil.create({ data: { name: "Apprenant" } });
    await prisma.profil.create({ data: { name: "CM" } });
    // =======================
    // 2. Profils de sortie
    // =======================
    const devWebSortie = await prisma.profilSortie.create({ data: { name: "Développeur Web" } });
    await prisma.profilSortie.create({ data: { name: "Développeur Back" } });
    // =======================
    // 3. Utilisateurs
    // =======================
    await prisma.user.create({
        data: { name: "Admin Principal", email: "admin@ecsa.com", profilId: adminProfil.id }
    });
    const formateur1 = await prisma.user.create({
        data: { name: "Formateur 1", email: "formateur1@ecsa.com", profilId: formateurProfil.id }
    });
    const apprenant1 = await prisma.user.create({
        data: { name: "Apprenant 1", email: "apprenant1@ecsa.com", profilId: apprenantProfil.id, profilSortieId: devWebSortie.id }
    });
    // =======================
    // 4. Promotions
    // =======================
    const promoP6 = await prisma.promo.create({ data: { name: "P6" } });
    const promoP7 = await prisma.promo.create({ data: { name: "P7" } });
    // =======================
    // 5. Référentiels
    // =======================
    const refDevWeb = await prisma.referentiel.create({ data: { name: "Développement Web" } });
    const refDigital = await prisma.referentiel.create({ data: { name: "Digital" } });
    // =======================
    // 6. Promo ↔ Ref
    // =======================
    await prisma.promoRef.create({ data: { promoId: promoP6.id, referentielId: refDevWeb.id } });
    await prisma.promoRef.create({ data: { promoId: promoP6.id, referentielId: refDigital.id } });
    await prisma.promoRef.create({ data: { promoId: promoP7.id, referentielId: refDevWeb.id } });
    await prisma.promoRef.create({ data: { promoId: promoP7.id, referentielId: refDigital.id } });
    // =======================
    // 7. Lier utilisateur ↔ Promo (PromoUser)
    // =======================
    await prisma.promoUser.create({ data: { userId: formateur1.id, promoId: promoP6.id } });
    await prisma.promoUser.create({ data: { userId: apprenant1.id, promoId: promoP6.id } });
    // =======================
    // 8. Lier utilisateur ↔ Referentiel (RefUser)
    // =======================
    await prisma.refUser.create({ data: { userId: formateur1.id, referentielId: refDevWeb.id } });
    // =======================
    // 9. Compétences
    // =======================
    const competenceHTML = await prisma.competence.create({ data: { name: "HTML" } });
    const competenceCSS = await prisma.competence.create({ data: { name: "CSS" } });
    // Référentiel ↔ Compétence
    await prisma.refCompetence.create({ data: { referentielId: refDevWeb.id, competenceId: competenceHTML.id } });
    await prisma.refCompetence.create({ data: { referentielId: refDevWeb.id, competenceId: competenceCSS.id } });
    // =======================
    // 10. Niveaux
    // =======================
    const niveau1 = await prisma.niveau.create({ data: { name: "N1" } });
    const niveau2 = await prisma.niveau.create({ data: { name: "N2" } });
    await prisma.niveau.create({ data: { name: "N3" } });
    // =======================
    // 11. Lier User ↔ Competence ↔ Niveau
    // =======================
    await prisma.userCompetence.create({ data: { userId: apprenant1.id, competenceId: competenceHTML.id, niveauId: niveau1.id } });
    await prisma.userCompetence.create({ data: { userId: apprenant1.id, competenceId: competenceCSS.id, niveauId: niveau2.id } });
    // =======================
    // 12. Tags et Briefs
    // =======================
    const tagFrontend = await prisma.tag.create({ data: { name: "Frontend" } });
    const tagBackend = await prisma.tag.create({ data: { name: "Backend" } });
    const brief1 = await prisma.brief.create({ data: { title: "Projet HTML/CSS", content: "Réaliser une page web complète" } });
    const brief2 = await prisma.brief.create({ data: { title: "Projet JS", content: "Réaliser un mini app JS" } });
    await prisma.briefTag.create({ data: { briefId: brief1.id, tagId: tagFrontend.id } });
    await prisma.briefTag.create({ data: { briefId: brief2.id, tagId: tagBackend.id } });
    console.log("✅ Seed terminé !");
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
