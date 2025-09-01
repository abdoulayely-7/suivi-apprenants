 Suivi Apprenants API
**/Endpoints disponibles**/
    /users
      et
    /tags

***/Base URL***/
http://localhost:3000

 /users
**/Méthode	URL	Description*
GET	/users	Récupère tous les utilisateurs avec profils, promos et compétences
GET	/users/:id	Récupère un utilisateur spécifique par ID
POST	/users	Crée un nouvel utilisateur
PUT	/users/:id	Met à jour un utilisateur
DELETE	/users/:id	Supprime un utilisateur

**Exemple GET /users**
[
  {
    "id": 1,
    "name": "Admin Principal",
    "email": "admin@ecsa.com",
    "profilId": 1,
    "profilSortieId": null,
    "profil": { "id": 1, "name": "Admin" },
    "profilSortie": null,
    "promoUsers": [],
    "RefUser": [],
    "userCompetences": []
  },
  {
    "id": 3,
    "name": "Apprenant 1",
    "email": "apprenant1@ecsa.com",
    "profilId": 3,
    "profilSortieId": 1,
    "profil": { "id": 3, "name": "Apprenant" },
    "profilSortie": { "id": 1, "name": "Développeur Web" },
    "promoUsers": [
      {
        "id": 2,
        "userId": 3,
        "promoId": 1,
        "promo": { "id": 1, "name": "P6" }
      }
    ],
    "RefUser": [],
    "userCompetences": [
      {
        "id": 1,
        "userId": 3,
        "competenceId": 1,
        "niveauId": 1,
        "competence": { "id": 1, "name": "HTML" },
        "niveau": { "id": 1, "name": "N1" }
      },
      {
        "id": 2,
        "userId": 3,
        "competenceId": 2,
        "niveauId": 2,
        "competence": { "id": 2, "name": "CSS" },
        "niveau": { "id": 2, "name": "N2" }
      }
    ]
  }
]

**/Données d’entrée POST /users**/
{
  "name": "Nom de l'utilisateur",
  "email": "exemple@ecsa.com",
  "password": "MotDePasse123",
  "profilId": 2,
  "profilSortieId": 1
}

**/Données d’entrée PUT /users/:id**/
{
  "name": "Nom mis à jour",
  "email": "misajour@ecsa.com",
  "profilId": 3,
  "profilSortieId": 1
}

 /***/tags***/
**Méthode	URL	Description**

GET	/tags	Récupère tous les tags avec les briefs associés
GET	/tags/:id	Récupère un tag spécifique par ID
POST	/tags	Crée un nouveau tag
PUT	/tags/:id	Met à jour un tag
DELETE	/tags/:id	Supprime un tag

/**Exemple GET /tags**/
[
  {
    "id": 2,
    "name": "Backend",
    "briefTags": [
      {
        "id": 2,
        "briefId": 2,
        "tagId": 2,
        "brief": { "id": 2, "title": "Projet JS", "content": "Réaliser un mini app JS" }
      }
    ]
  },
  {
    "id": 1,
    "name": "Frontend",
    "briefTags": [
      {
        "id": 1,
        "briefId": 1,
        "tagId": 1,
        "brief": { "id": 1, "title": "Projet HTML/CSS", "content": "Réaliser une page web complète" }
      }
    ]
  }
]

/**Données d’entrée POST /tags**/
{
  "name": "Nom du tag",
  "description": "Description du tag"
}

**/Données d’entrée PUT /tags/:id**/
{
  "name": "Nom mis à jour",
  "description": "Description mise à jour"
}

****Notes importantes****

Tous les endpoints acceptent et renvoient du JSON.

Les IDs (:id) sont des entiers correspondant à la base de données.

Les relations (profil, profilSortie, promoUsers, userCompetences) sont incluses dans les GET /users pour simplifier la lecture.