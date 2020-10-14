# Accueillir des EIG

[[toc]]

Vous êtes mentor opérationnel d'un défi EIG et vous apprêtez à accueillir des EIG dans votre administration ? Ce guide vous propose quelques bonnes pratiques et actions à anticiper avant, pendant et après la venue des EIG.

## Avant l'arrivée des EIG

### Assurer aux EIG un accès aux données

*Ne sous-estimez pas le nombre d'obstacles qui peuvent se mettre en travers de l'accès aux données.*

Les données peuvent être accessible sous plusieurs formes :

- via une API publique ou privée ;
- via une procédure d'export d'une base de données ;
- via des fichiers accessibles à la demande.

Dans tous les cas, assurez-vous que les EIG ont accès au plus tôt aux données elles-mêmes et à toute la documentation relative à ces données (schémas de données, procédures d'utilisation des données, etc.) et toute la documentation non technique qui peut retracer l'histoire du défi (entretiens utilisateurs, maquettes, etc.)

Pour cela, vous pouvez vous appuyer [sur plusieurs alliés](#aider-les-eig-à-identifier-les-bonnes-personnes) :

- l'équipe d'Etalab pour réaliser une expertise juridique et technique si vous rencontrez des difficultés d'accès aux données, notamment s'il s'agit de données d'une autre administration ;

- au sein de votre ministère : l'administrateur ministériel des données, la direction juridique, les directions métiers qui produisent les données, les correspondants open data.

Vous pouvez profiter de la période précédant l'arrivée des EIG pour classer cette documentation et repérer les "trous dans la raquette".

### Préparer le poste de travail des EIG

*Consultez les EIG en amont sur leurs postes de travail.*

Si les EIG souhaitent travailler depuis leurs ordinateurs personnels, n'hésitez pas à les mettre en contact avec les services informatiques pour que ceux-ci permettent les connexions depuis des ordinateurs qui ne sont estampillés par l'administration.

Si les EIG travaillent depuis un poste fourni par l'administration, prévoyez ces besoins :

- Pour un designer : demandez aux EIG s'ils ont besoin de **logiciels spécifiques** pour travailler : la suite Adobe est souvent demandée par les designer.
- Pour un data scientist : demandez aux EIG de **quelle puissance de calcul** ils ont besoin sur leur machine : en général, prévoir 16 Go ou 32 Go de RAM pour des machines confortables.
- Pour un développeur web : demandez aux EIG de **quel système d'exploitation** ils ont besoin.  Les développeurs travaillent souvent avec des distributions de GNU/Linux (Ubuntu, Debian, ArchLinux, etc.) ou macOS
- Pour tous les EIG : deux écrans de 17 à 19 pouces, et si l'espace de travail est un open space, un casque audio.

Beaucoup d'EIG actuels ont émis le souhait d'avoir un budget à dépenser (notamment pour acheter des serveurs, de l'hébergement, etc.). Bien que cela soit très difficile dans l'administration, vous pouvez commencer par réfléchir à des moyens pour leur faciliter la tâche sur l'achat de petit matériel.

### Assurer aux EIG un accès ouvert à Internet

*Les EIG ont besoin d'un accès non bridé à Internet.*

« Non bridé » signifie :
- qu'il n'y a pas de démarche à effectuer pour accéder à un site web, quel qu'il soit ;
- qu'il est possible de se connecter à un serveur extérieur via les ports 22 (SSH), 21 (FTP) ou autre.

Si les données sur lesquelles les EIG travaillent ne sont accessibles que sur un réseau interne à l'administration et inaccessible depuis l'extérieur, prenez soin d'assurer par ailleurs un accès ouvert à Internet depuis au moins une autre connexion.


### Communiquer sur le programme EIG avant son démarrage

Plusieurs mentors des éditions précédentes ont insisté sur l'importance de bien communiquer sur le programme EIG avant même l'arrivée des EIG dans les services.

Le site web EIG et les guides EIG pourront servir de ressources à diffuser dans les administrations.

N'hésitez pas à mobiliser le mentor de haut niveau pour que les annonces circulent à tous les niveaux.


### Aider les EIG à anticiper la pérennisation de leur défi

*Avant même l'arrivé des EIG, il est important de synchroniser le défi avec la DSI.*

Un défi EIG qui n'est pas au minimum intégré à la feuille de route de la DSI ni à son cadre de cohérence technique est souvent un défi à risque. À la fin de la présence des EIG, le risque est que la DSI ne puisse pas intégrer et déployer les briques développées par les EIG.

Pour réduire ce risque (vous pouvez aussi consulter le post sur la [pérennisation](https://entrepreneur-interet-general.etalab.gouv.fr/posts/2018/05/24/atelier-construction-plan-actions-avec-les-dsi/)) :

- Partager avec les équipes de la DSI les orientations imaginées pour résoudre le défi ;
- Associer la DSI au recrutement des EIG ;
- Partager le calendrier et réaliser des points réguliers avec la DSI
    et les EIG.

:::tip Ressource  
Une checklist vous permettant de suivre les étapes de l'accueil des EIG est disponible [ici](https://github.com/entrepreneur-interet-general/eig-link/blob/master/docs/checklist-arrivee-EIG.pdf).
:::


## Dès l'arrivée des EIG


### Aider les EIG à identifier les bonnes personnes

*Aidez les EIG à faire connaissance en personne avec leurs futurs alliés.*

- AMD : L'administrateur ministériel des données
- COD : Le correspondant open data
- PRADA : Les personnes responsables de l'accès aux sein des administrations
- DAJ : Le directeur des affaires juridiques
- DSI : Le directeur des Systèmes d'Information
- CIL : Le correspondant informatique et libertés
- S'il existe, le référent technique du service

Une fois que vous avez identifié ces personnes, n'hésitez pas à leur présenter les EIG en personne (même de manière informelle).

Vous pouvez utiliser cet outil de [cartographie des acteurs](https://github.com/entrepreneur-interet-general/eig-link/blob/master/docs/EIG_CadrageDefi.pdf) pour identifier les parties prenantes de votre projet que les EIG devraient rencontrer.


### Aider les EIG à se familiariser avec le métier et à se faire connaître dans leur administration d'accueil

*Aidez les EIG à mesurer tôt l'impact de leur projet et à trouver rapidement leurs futurs utilisateurs.*

Quelques idées :

- Proposer aux EIG un « stage d'immersion » sur le terrain, comme cela a été fait en 2018 pour les défis « Prévisecours » ou « Prédisauvetage » (entre autres).
- Organiser la création d'une vidéo de présentation du projet pour créer de la convivialité dans l'équipe, comme cela a été fait en 2018 pour le défi Archifiltre.
- Organiser des déjeuners ou temps informels réguliers dans votre administration pour que les EIG puissent présenter leurs travaux et rencontrer d'autres équipes.
- Mettre une petite affiche d'information sur le programme / leurs profils à proximité de leur bureau, comme cela a été fait pour les défis « Gobelins » ou « Social Connect ».


### Aider les EIG et mentors à se projeter dans le programme d'accompagnement

*Le programme d'accompagnement permet aux EIG et aux mentors de se rencontrer régulièrement pour construire un collectif d'entre-aide.*

Pour plus d'informations, vous pouvez consulter [la page de présentation de l'accompagnement sur le site EIG](https://entrepreneur-interet-general.etalab.gouv.fr/accompagnement.html)

- Prendre rapidement connaissance du [calendrier des sessions d'accompagnement.](accompagnement.md)
- Comprendre comment ce calendrier se construit au fil de l'eau.
- Communiquer à l'équipe EIG d'Etalab vos besoins et idées pour enrichir ce programme d'accompagnement.


### Aider les EIG à se positionner dans le défi et instaurer des rituels

**Les EIG ne sont ni prestataires ni en complète autonomie pour décider de leur feuille de route. Ils ont également besoin de l'expertise métier des agents publics.**

La bonne marche du défi exige un **dialogue régulier** entre les mentors et les EIG : les mentors doivent faire l'effort de bien comprendre la feuille de route proposée par les EIG, et les EIG doivent communiquer clairement sur ce qu'ils font.

Ce dialogue doit se mettre en place en suivant un calendrier stable, indépendamment des sessions d'accompagnement.

Quelques bonnes pratiques :

- Un point hebdomadaire pour communiquer sur les actions - et éventuelles urgences - de la semaine ;
- Un affichage "physique" de la feuille de route à quelques mois ;
- Des formations en pair à pair.


### Trouver des soutiens dans les précédentes promotions EIG

Il est rare qu'une administration ou un défi ne présente aucun rapport avec une administration ou un défi ayant précédemment participé au programme EIG.  N'hésitez pas à contacter les EIG et mentors des promotions précédentes pour vous guider dans le bon démarrage du défi (vous pouvez trouver leurs profils sur [le site EIG](https://entrepreneur-interet-general.etalab.gouv.fr/)).


### Partager des ressources administratives entre mentors

- Modèle de notes de frais pour les EIG ;
- Formulaire d'autorisation au télétravail ;
- Contrat de confidentialité, correspondant au rappel des droits et devoirs des agents.
