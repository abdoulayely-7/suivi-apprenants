pour lancer le seeder executer la commande : npx prisma db seed

1️⃣ Mettre à jour la branche principale (main)

Sur chaque machine des collaborateurs :

git checkout main        # se placer sur main
git pull origin main     # récupérer les derniers changements depuis GitHub


Cela télécharge les changements récents et les fusionne avec le main local.

2️⃣ Passer sur sa branche personnelle

Chaque collaborateur doit se positionner sur sa branche :

git checkout <nom_branche>


Exemple :

git checkout abdoulaye

3️⃣ Fusionner les changements de main dans sa branche

Pour intégrer les nouveautés de main sans écraser son travail :

git merge main


Si tout se passe bien, les changements de main sont fusionnés.

Si des conflits apparaissent, Git indiquera quels fichiers doivent être résolus.

⚠️ Les conflits doivent être résolus manuellement, puis faire :

git add <fichiers_resolus>
git commit

4️⃣ Pousser la branche mise à jour sur GitHub

Après fusionner :

git push origin <nom_branche>


Cela met à jour la branche personnelle sur GitHub avec les derniers changements de main.

5️⃣ Récapitulatif rapide pour les collaborateurs
git checkout main
git pull origin main
git checkout <ma_branche>
git merge main
git push origin <ma_branche>


✅ Cela permet de garder chaque branche à jour avec main tout en continuant à travailler sur sa branche.
