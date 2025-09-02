JWT : JSON Web Token

JWT est un standard pour sécuriser la communication entre un client et un serveur. Il permet de prouver que l’utilisateur est bien authentifié sans avoir à stocker la session côté serveur.

1️⃣ Structure d’un JWT

Un JWT est composé de 3 parties séparées par des points :

header.payload.signature


Header (en-tête)
Contient le type de token et l’algorithme de signature.
Exemple :

{
  "alg": "HS256",
  "typ": "JWT"
}


Payload (données / claims)
Contient les informations sur l’utilisateur (id, rôle, email…) et la durée d’expiration.
Exemple :

{
  "userId": 123,
  "role": "admin",
  "exp": 1693680000
}


Signature
Sert à vérifier que le token n’a pas été modifié.
On la crée en combinant le header et le payload + une clé secrète.

2️⃣ Comment ça fonctionne

L’utilisateur se connecte avec email/mot de passe → /auth/login.

Le serveur vérifie les infos → si ok, il crée un JWT.

Le serveur envoie le JWT au client.

Le client stocke ce token (localStorage, cookie sécurisé…).

Pour chaque requête protégée, le client envoie le token dans l’en-tête Authorization: Bearer <token>.

Le serveur vérifie la signature → si valide, l’utilisateur est authentifié.

3️⃣ Avantages

Pas besoin de stocker les sessions sur le serveur.

Facile à utiliser sur des APIs REST.

Transportable entre serveurs différents.

4️⃣ Exemple concret de token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIiwiZXhwIjoxNjkzNjgwMDAwfQ.HsDLxj6ePn4xYwH6a7g4vV1v7aOQGhUyX5rjX7Cw6sk


Partie 1 → header encodé en base64

Partie 2 → payload encodé en base64

Partie 3 → signature