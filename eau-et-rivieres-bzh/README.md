# Descriptif du projet

Média : Eau et Rivières de Bretagne 
![alt text](public/img/logoMedia.png)

Sujet : Les Pesticides

Equipe :
* AGR-L'école de l'image : Clothilde CARTON, Flore FAVIER, Matthieu NOURISSON
* Audencia SciencesCom : Lara AUGIZEAU, Alexis BOISSART, Nolwenn CORRE, Angela MASSING
* Polytech'Nantes : Tristan GOMEZ, Axel JOURNE, Neil RITTNER
* Eau et Rivières de Bretagne : Etienne DERVIEUX et Jacques NEVE

# Prérequis
Pour utiliser ce projet, il sera nécessaire d'avoir Node.js et npm d'installer. Pour ce faire, aller sur le lien suivant :
https://nodejs.org/en/download/ puis téléchargez la version adaptée.

Une fois l'installation effectuée, vous pouvez vérifier qu'elle s'est bien effectuée :
* Ouvrir GitBash ou CMD où vous voulez
* Lancer `node -v` pour voir si Node.js est bien installé.
* Lancer `npm -v` pour voir si npm est bien installé.

# Installation
* Ouvrir GitBash là où vous souhaitez avoir le dépôt.
* Lancer `git clone https://github.com/NeilRittner/HyblabDDJ2018`.
* Une fois le clonage finit, lancer : `cd HyblabDDJ2018`, vous êtes alors à la racine du projet.
* Lancer `npm install` pour installer les dépendances. Cette procédure ne sera à réaliser qu'une seule fois. Vous pouvez vérifier le bon fonctionnement de cette commande avec l'apparition du dossier "node_modules" dans l'arborescence du projet.

# Lancer le Serveur en Local
* Ouvrir GitBash ou CMD à la racine du projet.
* Lancer `npm start` à la racine du projet.
* Le serveur est maintenant lancé, vous pouvez le retrouver au lien suivant : http://127.0.0.1:8080/eau-et-rivieres-bzh
* Une fois finit, vous pouvez arrêter le serveur avec `Ctrl + C`.

# Serveur de développement
Lien du site du projet : http://hyblab.polytech.univ-nantes.fr/eau-et-rivieres-bzh/

Pour accéder au serveur de développement :
* Aller sur le lien suivant : https://hyblab.polytech.univ-nantes.fr/ssh/.
* Saisir les identifiants suivants :
    * hyblab login: *eau-et-rivieres-bzh*
    * eau-et-rivieres-bzh@hyblab's password : *erbhyblab*
* Vous êtes maintenant sur le serveur de développement.

Pour mettre à jour le dépôt git du serveur :
* Arrêter le processus avec `pm2 stop EauEtRivieres`
* Aller dans le dépôt avec `cd HyblabDDJ2018`, puis mettre à jour avec `git pull`, puis sortir du dépôt avec `cd ..`.
* Relancer le processus avec `pm2 restart EauEtRivieres`.

__Remarque__ : Ne pas développer sur le serveur de développement. Développer en local avec le localhost (cf "Lancer le Serveur en Local"). Une fois les modifications finies, les ajouter au git global, puis mettre à jour le serveur de développement.

# Informations complémentaires