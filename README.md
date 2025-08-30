Cloner le projet depuis GitHub

Va sur la page GitHub du projet que tu veux récupérer.

Clique sur le bouton Code → copie l’URL (HTTPS ou SSH).

Ouvre ton terminal et tape :

git clone <URL_DU_PROJET>


Exemple :

git clone [https://github.com/utilisateur/mon-projet.git](https://github.com/abdoulayely-7/suivi-apprenants.git)


Entre dans le dossier du projet :

cd mon-projet

2️ Vérifier les branches existantes

Pour voir les branches disponibles sur le projet :

git branch -a


Les branches locales apparaissent en blanc.

Les branches distantes apparaissent en rouge avec remotes/origin/.

 Créer une branche avec ton nom


Pour créer une branche et te positionner dessus :

git checkout -b abdoulaye


Ici abdoulaye est le nom de ta branche.

L’option -b crée la branche et te place dessus directement.

4 Vérifier que tu es sur la bonne branche
git branch


La branche sur laquelle tu te trouves est indiquée avec un *.

Tu devrais voir :

* abdoulaye
  main

5️ Pousser ta branche sur GitHub

Pour que ta branche existe aussi sur GitHub :

git push origin abdoulaye


✅ Voilà ! Maintenant tu peux travailler sur ton projet dans ta branche personnelle sans toucher à la branche principale (main).
