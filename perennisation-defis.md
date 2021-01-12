# Pérenniser les défis

Comment bien préparer et assurer la pérennisation des défis.

[[toc]]

## Qu’entend-on par pérenniser ?

:::tip Lexique
**Pérennisation** : le défi continue à exister après la fin de son accompagnement par le programme EIG.  
**Mise en production** : l’outil bénéficie d’un lancement officiel et/ou est intégré dans des processus de maintenance et de développement pérennes.  
:::  

À la fin des 10 mois, les défis EIG se trouvent souvent à des stades différents, du fait des contextes divers dans lesquels ils sont relevés.

Le terme “pérennisation” englobe ainsi plusieurs cas de figure non exclusifs :
- **S’assurer que les livrables développés pendant le défi seront maintenus**, comme pour Prédisauvetage (EIG 2) ou b@liseNAV (EIG 2).  
- **Continuer à faire évoluer des outils déjà mis en production et utilisés pendant le défi**. C’est le cas des défis cartAV (EIG 1), Archifiltre (EIG 2), intégré à l’incubateur du Ministère des Affaires sociales en mars 2019, et Social Connect (EIG 2).  
- **Mettre les livrables en production après la fin du défi**. La version beta de la plateforme MN/Lab, développée dans le cadre du défi Gobelins pour mettre en ligne les collections du Mobilier National, a été lancée en avril 2019, soit 6 mois après la fin du défi.   
- **Aller plus loin que le défi initial**, en mobilisant le potentiel de réutilisation des livrables par d’autres administrations ou en les faisant passer à l’échelle. Parmi eux, on compte l’outil de croisement de bases de données matchID (EIG 1), devenu un outil mutualisé entre les ministères, notamment grâce au soutien d’Etalab et de la DINUM. Quant au défi Signaux Faibles (EIG 2), développé en Bourgogne-Franche-Comté, il est passé à l’échelon national en avril 2019, sous l’impulsion de la mentor du défi, Stéphanie Schaer.  

:books: _Extrait du blogpost [“Quelles suites pour les défis EIG ?”](https://entrepreneur-interet-general.etalab.gouv.fr/blog/2019/05/20/session-perennisation-defis-eig-3.html), avril 2019._

Ainsi, pérennisation ne veut pas nécessairement dire passage à l’échelle.

## Pérennisation : enjeux techniques

Le premier niveau de la pérennisation est le niveau “technique” : s’assurer avec ses interlocuteurs techniques qu’un outil sera maintenu dans le temps.

![Pyramide avec, au centre, la pérennisation, et trois autres triangles pointant vers le centre, indiquant : déploiement, fiabilisation, transmission](https://d33wubrfki0l68.cloudfront.net/132e0a03628867c8a83cc12dcffbfe66ff751461/3e598/img/blog/dsi-pyramide-perennisation.jpg)

Nous avons proposé de classer les enjeux de pérennisation selon trois axes :
- **Le déploiement (ou la mise en production)** : vers quel service se tourner pour réserver un nom de domaine ? Faut-il faire valider les briques open source sur lesquelles reposent les produits, et si oui, comment ? Mon administration propose-t-elle de faire tourner des services en production sous docker ? Etc.  
- **La transmission (ou le transfert de connaissances)** : ai-je donné tous les éléments à mon service pour qu’il gère la maintenance applicative des logiciels en place ? Ai-je donné le pourquoi et le comment de telle chaîne de traitement des données ? Est-ce que nous avons partagé nos supports de formation de telle façon qu’une autre personne pourra les reprendre ?  
- **La fiabilisation (ou résilience)** : si j’ai mis en oeuvre des méthodes de travail particulières (« agiles », mais pas que), qui est en mesure de continuer à les mettre en oeuvre ? Quelles sont les mesures à prendre si un livrable tombe en panne ? Si j’ai établi un point de contact avec des utilisateurs, qui sera le point de contact lorsque je ne travaillerai plus dans le service ? Qui sera mainteneur pour les bibliothèques logicielles que j’ai publiées sur le Web ?

:books: _Extrait du blogpost [“Pérenniser un projet EIG - retour sur le séminaire avec les DSI des ministères”](https://entrepreneur-interet-general.etalab.gouv.fr/blog/2018/05/24/atelier-construction-plan-actions-avec-les-dsi.html), mai 2018._  

Vous pouvez utiliser ces catégories pour organiser votre propre atelier de pérennisation avec votre DSI (ou les “repreneurs techniques”) de votre défi.

Au-delà des aspects techniques, plusieurs scénarios de pérennisation sont possibles pour les défis EIG, qui déterminent ensuite avec qui les aspects techniques du défi seront abordés.

## Scénarios de pérennisation

Parmi les défis, qui ont été accompagnés par le programme, on constate plusieurs cas de figure :
- **La plupart (90% pour la promotion EIG 3) dépassent le stade de “proof of concept” et sont pérennisés**, c’est-à-dire qu’ils continuent après les 10 mois du programme.     
- **Certains aboutissent à des preuves de concept et ne sont pas pérennisés dans leurs administrations**, mais les briques open source servent de base à la réalisation d’autres outils dans les administrations (exemple : Graph Explorer, développé par les EIG de Hopkins en 2018).    
- **Certains projets sont abandonnés pour des raisons techniques ou (plus souvent) organisationnelles** -cela fait aussi partie du droit à l’erreur des cadres d’innovation.  

Quand les défis sont pérennisés, il existe plusieurs cas de figure :
- **L’outil est maintenu en interne par une équipe internalisée** (exemple : le défi Open Justice à la Cour de Cassation, où deux postes de data scientists ont été créés et un EIG est resté).  
- **L’outil est maintenu en interne à travers des prestataires ou par un marché public** (exemple : le défi Karfu’R, devenu réfugiés.info).  
- **L’outil passe à un autre dispositif d’innovation** (exemple : le défi CartoBio, devenu une Startup d’Etat).  
- **L’outil est porté par d’autres administrations ou acteurs**, soit selon quelque chose de prévu dès le départ (exemple : le défi MCC Orgues), soit en trouvant des partenaires pendant le défi (exemple : le défi LexImpact, développé par la DINUM et repris par l’Assemblée nationale, ou le défi Signaux Faibles, développé en DIRECCTE au niveau régional et repris par la DGE).   

:::tip Calendrier
Beaucoup de projets “décollent” (par exemple, sont mis en production de manière pérenne) environ 6 à 8 mois après la fin des défis (janvier - mars 2020 pour les défis EIG 3, par exemple). Cela implique d’anticiper rapidement des scénarios de pérennisation.
:::  

## Comment impliquer les EIG post-défi ?

Si vous souhaitez que les EIG restent impliqués dans votre défi post-programme, plusieurs cas de figure :
- **Statut** : elles ou ils peuvent rester en tant que contractuels (se pose alors la question de la rémunération) ou en tant que prestataires ;  
- **Fréquence** : à temps plein ou à temps partiel.

Dans un premier temps, il est possible de prolonger le contrat des EIG de quelques mois.

Il est également possible, indépendamment de la place des EIG dans le projet à long-terme, de former des agents à la reprise de l’outil en interne.

## Les facteurs de pérennisation

### 1.Démontrer l’utilité de l’outil

Une fois l’utilité prouvée, il est plus simple de trouver un modèle de financement / de gouvernance en fonction des différents potentiels identifiés.

Vous pouvez démontrer l’utilité de l’outil :
- **En encourageant l’open data et l’open source** dans votre défi pour favoriser la réutilisation et la contribution.  
- **En communiquant avec les utilisateurs** pour avoir des retours et donner des arguments.   
- **En communiquant avec les parties prenantes** : ce qui implique d’avoir une démo et un pitch (d’autres actions : événements, meetups, relai dans l’écosystème spécialisé…).  

:::tip Ressource  

:books: [Billet de blog Etalab “Signaux Faibles, de l’open data camp à une politique publique fondée sur la donnée”](https://www.etalab.gouv.fr/signaux-faibles-de-lopen-data-camp-a-une-politique-publique-fondee-sur-la-donnee-recit-dun-passage-a-lechelle-reussi). 
:::  

### 2.Définir un modèle de financement/de gouvernance

Pour ce faire :
- **Documenter les coûts techniques et humains** (combien de personnes ? Quel type de profils ? Y a-t-il besoin de serveurs, de matériel spécifique ?)
- **Identifier les acteurs importants pour le projet**, y compris d’un point de vue stratégique. Parmi eux : la direction porteuse (et sa DSI), le ministère de tutelle, un autre programme d’innovation, une autre administration, une structure ad hoc, etc.

Ces parties prenantes pourront être mobilisées pour répondre aux enjeux techniques et humains du projet.

## Documents ressources

### Modèle de note stratégique de pérennisation pour un défi EIG

Ce modèle de note est une base pour vous aider à rédiger un document de mi-parcours dans l'optique de pérenniser les outils développés pendant un défi EIG.
Il propose une vision « macro » de l’état du projet et de ses suites potentielles. Il est bien sûr à adapter en fonction des interlocuteurs.
Il est particulièrement utile pour faire un point sur les besoins et opportunités identifiés et lister les scénarios de pérennisation entre lesquels arbitrer.

#### I. Contexte / travail accompli / résultats

* Présenter ici le contexte du projet, le travail accompli jusqu'ici et les premiers résultats observés.
* C’est également ici que peuvent être mentionnés les objectifs et les travaux de mesure d’impact engagés.

#### II. Ressources nécessaires et opportunités identifiées pour la suite du projet et opportunités identifiées

* Mentionner ici les **ressources techniques, humaines et financières** nécessaires pour que le projet continue à être maintenu ou pour qu’il passe à l’échelle

* Mentionner également ici les enjeux de **gouvernance et de pilotage du projet** : quelles parties prenantes doivent être impliquées ?

#### III. Scénarios / recommandations

* Idéalement, lister 3 scénarios et comment ils permettent d’apporter les ressources et de tirer profit des opportunités identifiées en II.
_Les exemples de scénarios peuvent être inspirés par les scénarios de pérennisation de défis existants -voir [notre billet de blog](https://entrepreneur-interet-general.etalab.gouv.fr/blog/2019/05/20/session-perennisation-defis-eig-3.html) sur le sujet._

* Vous pouvez lister un quatrième scénario : un scénario d'arrêt (en en précisant les conséquences).

* Si vous êtes dans une optique de négociation, vous pouvez mentionner quel scénario vous paraît le plus pertinent.

#### IV. Calendrier

* Inclure un calendrier de mise en œuvre des scénarios identifiés (ou du scénario privilégié)

### Checklist de fin du défi EIG (en prévision d'une passation)

Une page qui recense une liste non exhaustive de la documentation à rassembler ou élaborer avant la fin du projet EIG.

À adapter en fonction des besoins du défi.

#### En lien avec le début du défi
- Le rapport d'étonnement s'il a été réalisé
- Les comptes-rendus des différentes entretiens / ateliers de collecte du besoin
- La liste des personnes rencontrées : date / fonction
- La synthèse des besoins
- L'état des lieux : flux de données au sein de l'administration, architecture existante

#### En lien avec la/les applications développées
- Descriptif fonctionnel de l'application, fiche de lancement
- Le manuel utilisateur
- La documentation technique : au sein du code ou dans un document à part
- La documentation d'installation
- Le schéma d'architecture de l'application
- Les documents de formation des utilisateurs, administrateurs
- Le code (sur un dépôt ouvert ou non)
- Le planning du projet
- Les CR de réunions d'avancement

#### En lien avec la conclusion, pérennisation du défi/les perspectives
- Lister et décrire les autres projets qui pourraient être réalisés au sein de l'administration, en lien ou non avec le défi actuel
- Lister les lignes directrices, la vision/stratégie pour la suite du défi (fonctionnalités restantes à implémenter, planning etc.)

#### En lien avec la communication autour du défi
- Les documents liés aux ateliers d'information, vulgarisation réalisés : présentations, tutoriels
- Les pitchs, présentation à la hiérarchie comme en externe (Démo day, Bureau Ouvert...)
- Liens vers les articles de blog

#### Feedback du projet
- Réaliser un atelier de feedback avec son équipe et son mentor sur les 10 mois écoulés
- Communiquer sur les réalisations : auprès de sa hiérarchie, de son service, de l'administration, des interlocuteurs rencontrés lors du recueil des besoins, à l'externe (équipe communication)
