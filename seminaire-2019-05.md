# Séminaire EIG de mai 2019

## Jeudi - Ateliers de production

### Ateliers de 11h00 

#### Design review

Présents : JB, Hugo, Coline, Dorine, Nikos
* Retour et échange sur le travail/maquette de Dorine (LexImpact)
* Retour et échange sur le travail/maquette d'Hugo (KarfuR) 
* Retour et échange sur le travail/maquette de Coline (Acoss)
* Echanges des pratiques sur Figma / Sketch

#### Clinique NLP

Soufiane à un besoin pour la traduction de la plateforme (KarfuR) échange avec Valentin (Adler) répondant au besoin.
Etude de la solution XLM de facebook et installation du repo. Quelques bugs bloquants, mais résolus dans l'après-midi. Finalisation à suivre.

#### Clinique stratégie et positionnement

**Animé par Soizic**
Présents: Nicolas, Simon, Wojtek, Lucas

Fâce à des problèmes organisationnels, structurels ou "politiques" rencontrés sur la trajectoire actuelle, comment se repositionner et utiliser le positionnement d'EIG ?
- Sur ADLER, comment gérer l'arrivée d'un presta dont le logiciel vendu réalise une partie des éléments planifiés par les EIGs pour les prochaines étapes. Mise en place avec Soizic de steps pour à la fois chercher de nouveaux besoins, valoriser et génériser les projets réalisés, et se positionner (R&D vs tuning de logiciel presta, réalisation de modèles génériques pour Etalab, positionnement en interne)

#### Code Review devenu Clinique Dev

Travail pair à pair entre DataReg et Luc : Optimisation de l'algorithme de requête spatiale sur PostgreSQL:+1:

Review de code en groupe, présents : Augustin, Cristian, Erica, Sébastien

Échange sur l'organisation du code, gestion et complétion des bibliothèques et dépendances. 
Probablement des ateliers régulier à organiser (plutôt en pair à pair) pour entrer plus loin dans le code et non juste au niveau architecture globale. :+1:

#### Data Science : Arbre de Décision ou Moteur de Règles

Etude avec Antoine, Gabriel et Quentin sur la classification des navires en fonction de leur potentiel accidentogène. Les deux méthodes envisagées sont : 
- Scoring réalisé grâce à un arbre de décision
- Scoring réalisé par un système d'inférence

Réaliser l'intégralité avec un système d'inférence seraient fastidieux et entrenerait une perte d'information.

Conclusion : Utiliser l'inférence pour certains éléments (délits constatés, règles définies par les administrateurs...) et l'arbre de décision pour le reste.


### Ateliers de 14h15 

#### Bonne pratique UI / AtomicDesign / Intégration Design/Dev

Présent : Coline, Hugo, Nikos, JB

Echange de questions : 
* Devons-nous privilégier le parcours UX ou l'interface UI ?
* Quelle équilibre UX/UI devons-nous instaurer/partager aux parties prenantes ?

Liste des sujets abordés : https://app.mural.co/t/karfureig6750/m/karfureig6750/1557998268571/556c2619fd925c2f005db1b8617fec678137715e

#### Intégration continue 

**Animé par Antoine**
~10 personnes présentes
Démonstration de plusieurs cas d'usage d'intégration continue / déploiement continu par le biais de projets concrets.
Les projets CircleCI que montrés :
- https://github.com/AntoineAugusti/table-schema-to-markdown, un package Python avec de l’intégration continue sur plusieurs versions de Python
- https://github.com/AntoineAugusti/antennes-free, de la récupération et du commit de CSV avec des CRON
- https://github.com/etalab/data-codes-sources-fr, des appels à de l’API GitHub pour collecter des JSON et les push sur GitHub
- https://github.com/entrepreneur-interet-general/eig-link du lint sur des fichiers Markdown

Et la doc https://circleci.com/docs/2.0/

Potentiel après-midi automatisation au LLL pour que chacun le mette en place sur son projet

#### Atelier modélisation & analyse de graphes

Présents: Nicolas, Gabriel, Simon, Armand, Mathieu

Réflexion sur une approche de modélisation par graphes pour le défi Explocode.

Avancements sur la démonstration de cohérence scientifique de l'algorithme Mapper pour le défi Polygraphe

#### Atelier Moteur de recherche avec ElasticSearch

Présents: Amélie et Mathieu

Travail collaboratif sur la configuration et le mapping ElasticSearch, plus précisement sur les fonctionnalités de highlight, recherche booléenne et de suggestions de contenus.

### Ateliers de 16h00 

#### RoadMap / Backlog / Tests utilisateurs

Présents : Coline, Erica, Quentin, JB, Nikos, Mathilde, Wojtek, Sébastien, Hugo

* Hugo a présenté les outils 
    * LOOKBACK "talk to your users" - Plateforme pour tester et voir les utilisateur en webcam lors de leurs tests
    * HOTJAR (carte chaude) de votre outil en ligne
    * TEAMWEEK - Plateforme en ligne de Gantt du projet KarfuR - 
        * Intéret d'un gantt afin de rester macro et avboir une vision temporelle
* JB a présenté les outils 
    * Une note "Etude d'opportunité agile" 
        * Lien : https://pad.etalab.studio/s/Bk7Vz-Q94#
    * KANBOARD - Outil de KanBan et de Gantt utile en binome avec l'étude d'opporunité evolutive
        * Lien de l'outil : https://kanboard.etalab.studio
        * Les EIG peuvent avoir accès à l'outil
    * VIDEO [La gestion de projet agile en 2 mots](https://www.youtube.com/watch?v=3qMpB-UH9kA) (résumé rapidement par JB) 
* Nikos a présenté
    * La mise en propre de notes suite aux test utilisateurs
    * AIRTABLE  - Tableur/Couteau suisse qui peut-etre utilisé pour la création de CRM / Roadmap / Gestion des test utilisateurs, avec des vues Tableau / Kanban ...
    * VIDEO Le cours [Construisez votre roadmap produit](https://openclassrooms.com/fr/courses/5778386-construisez-votre-roadmap-produit/)


#### Atelier évaluation et stratégie de modèles NLP

Présents : Valentin, Simon

Passage en revue du modèle de reconnaissance d'entités nommées utilisées dans le projet OpenJustice, ses performances actuelles. Questionnement sur le modèle approprié pour la NER du défi d'ADLER. Passage en revue de l'utilisation du framework flAIr pour la NER.
Revue des méthodes d'évaluation de la NER, planification des next steps.

### Travail hors ateliers dans la journée

* Mathilde : relecture des notes benchmark innovation RH et évaluation de Guénolé
* Mathilde et Soizic (EIG Node) : brainstorming sur la feuille de route EIG des 12 prochains mois
* Soizic : discussions avec Amélie (Plume) -mise en contact d'Amélie et Tamkien (Etalab) et Carine (DataReg)
* Dorine, Amélie et Mathieu : Conseils sur la typographie d'affichage de texte long + code review pour correction bug. 
* Lucas (CartoBio) Design Review avec Coline sur les maquettes CartoBio
* Coline, Nikos : Airtable, Gestion des librairies sur Sketch
* Mathieur, Nikos : Echanges sur le fonctionnement Cour de Cass/Cour des comptes, echange sur le design du moteur de recherche + idéation d'un wireframe
* Sophie : création dans Github de et travail sur l'article de Soizic concernant la pérennisation et discussion intégration de Speakerdeck dans le blog


### Plénière de 17h : EIG Next / Pérennisation

REACTIONS DES EIG AUX PERSPECTIVES DE PERENNISATION
-	Possibilité de sujets/projets instigués par Etalab ? 
-	Lancer des projets qui ne sont pas portées par une seule administration, Plume pourrait s’appliquer à n’importe quelle rédaction juridique, des bases de codes similaires entre CibNav et Plume. Besoin de communiquer entre les administrations. Etalab jouerait un rôle de neutralité pour promouvoir des outils mutualisés. 
=> C’est à l’intersection de sujets de pérennisation
=> Vous pouvez venir pitcher et dire ce qu’il faut faire pour pérenniser. Un comité d’investissement pourrait décider d’investir. Il faut trouver le véhicule juridique. 
-	Point de vigilance sur l’approche multi-partenaires : on a de fait des interactions. Si ça part de deux endroits, il y a le risque que les usagers croient qu’ils ont le même usage alors que pas forcément. Risque de ne répondre à personne en fin de compte. 
=>	Question de voir comment on ne clone pas, mais comment on étend, un deuxième défi. 
-	Partir sur des projets les plus génériques possibles, que l’on puisse ensuite customiser. Avoir une série de micro-logiciels, propres, développés en interne…
-	EIG 5, c’est cool de faire des paires de personnes avec des backgrounds différents.
-	Briquiffier notre production. Antoine, ça lui parle. Le DINSIC n’est pas à fond. 
-	Vous en tant que promo, vous pourriez déposer un défi, proposer un défi aux EIG5. Une legacy qu’on aimerait bien voir porté. Les EIG pourraient être des mentors citoyens. 
-	Co-financement à maximum 50% Il y aura aussi de l’auto-financement.
-	On est en contact avec des programmes à l’international ? 
=>	Partager le benchmark de Guénolé aux EIG
=>	Les partages ont été plutôt sur l’ingénierie, plus que sur les outils produits, mais très pertinent à creuser
=>	On sera à Ottawa : EIG, civic tech taïwanaise, prototype fund…
-	Est-ce que vous avez l’impression que la méthode EIG est infusé et vous facilite la tâche ? CibNav, oui. Le passage d’Elsa et Antoine a tracé la route. Les mentors sont importants dans cela. 
=> qu’est-ce qui vous a manqué, qu’est-ce qui est essentiel, qu’est-ce qui est un bonus ? 
=> si vous voulez avoir cette réflexion avec nous, ça nous aidera
=> inviter les EIG qui veulent participer
-	Question sur le portage politique d’EIG. Est-ce que le nôtre va changer ? Adnène a saisi le DINSIC, il parle d’un programme porté par Etalab et soutenu par le président. 
-	Le programme est imaginé sur 10 mois alors que ce n’est pas le cas. Comment on montre que l’équipe continue à suivre la promotion. 
-	Dans la promo 5, 15 nouveaux défis et 5 défis lancés à accélérer. Peut plaire à la start-up nation 
-	Les EIG4 ? On aimerait que les EIG3 soient impliqués dans le onboarding. On va être accompagnés par le Laptop. Question sur l’esprit de promotion à créer. 
=>	Si les EIG ont des idées, ils peuvent participer à la réflexion
=>	La qualité de la promo EIG4 va être bonne
-	Question de la rémunération, dans le cadre de l’attractivité de l’Etat : quel rôle le 4000 euros a joué dans votre intérêt pour le programme ? A combien vous auriez dit non ?
=>	Même si le salaire est plus bas, vous pourriez prendre en charge le déménagement (quand on vient de loin)
=>	J’aurais accepté pour moins, en-dessous de 3000 je me serais posée des questions. 
=>	Je viens de thèse, vous pouviez augmenter mon salaire autant que vous vouliez.
=>	La rémunération est très valorisante pendant le programme, on se sent à part et privilégié, ça donne envie de faire des choses. J’ai envie d’être à la hauteur de ça. 
-	C’est difficile pour le passage pour travailler dans l’administration après EIG, comment gérer cela ? 
=>	Les 4000 euros c’est comme une prime de précarité, c’est accepté par les collègues parce qu’on est là pour 10 mois.
=>	Pour ceux qui ont plus d’expérience, ça pourra moins attirer les expérimentés, les en CDI. Mettre la croix sur certains profils
=>	L’attrait est une question de fond sur les grilles de salaire. Par exemple les designers n’existent pas dans l’Etat.
=>	La différence par rapport à une start-up, c’est que dans celle-là tout le monde veut que ça réussisse alors que c’est faux dans l’administration. 
=>	La récompense de ton travail est de baisser le salaire. 
=>	Parler de salaire exceptionnel permet de légitimer le programme. Permet de se placer, d’ouvrir sa gueule, de se démener pour faire plus.
-	Penser à déconcentrer le programme en régions. On a moins de contraintes du fait qu’on n’est pas PIA. Faire co-financer par deux acteurs avec des acteurs expérimentateurs. 
-	Comment se compare notre salaire par rapport à une prestation ? Equivalent coût total employeur, l’emploi coûte 2,5 fois moins cher. 
-	Il faut garder ce salaire pour le programme d’excellence. Mais dire dès le début que ce salaire ne sera pas garanti après. 
-	Organiser un OFF sur le sujet d’EIG5

Idées de "filières" : 
- métiers juridique / droit du numérique
- résilience écologique
- un pool d'EIG sur un territoire pilote dans plusieurs administration
- ...

Idées de composition de la promotion : 
- 15 nouveaux défis
- 5 à 10 défis d'anciennes promotions à accélérer ou directement interministériels (cf. stack overflow de l'Etat)

## Vendredi - Ateliers de transmission

### Ateliers de 10h

#### Démonstration

**Animé par Hugo**
Présentation/démonstration de défis avec un format de 10/15min de presentation suivi d'un échange avec les personnes présentes sur de le fond et la forme ainsi qu'un partage (questions/réponses) relatif au défi.  

Défis ayant fait sa démos :
- Plume
- CibNAV
- LexImpact

#### Atelier documentation

Lien de la restitution : https://pad.etalab.studio/EXvQR-ImRJKxn1sMVgfVDw#

#### Atelier pérennisation 

_____
![Caneva de pérennisation d'un projet](https://pad.etalab.studio/uploads/upload_82380622f50f0ffb6647054e6c8acef9.jpeg)

_____
![Présentation de la pérennisation d'un projet par Bastien Guerry](https://pad.etalab.studio/uploads/upload_9a77ad3ec8f8f2ed42c3fd35a11af901.jpeg)
_____

Défis présents : 
* IA FLASH : Victor/Cristan : https://pad.etalab.studio/bfv_nslwT3eRNvsOgLAU6Q#
* CARTOBIO : Wojtek/Lucas
* OPENJUSTICE : Mathieu Perez
* DATAREG : Carine/Thierry
* ADLER : Nicolas/Simon
* OPENCHRONIC : Viktor/Pierre-Alain
* EXPLOCODE : Armand/Mathieu : https://pad.etalab.studio/yIfsIhGsSNKEz8zrA9Lb9Q
* POLYGRAPHE : Gabriel/Luc : https://pad.etalab.studio/PeUjookbRnCE9hWZlIn9vQ

### Travail/interactions hors ateliers

- Cibnav/Plume Rédaction : planification de relecture
- Partage de bonnes pratiques et de méthode design entre DataJust et Jean-Baptiste
- EIG Node
	- Mathilde : planning mai-septembre (+ intégration EIG4)
	- Sophie/Soizic/Mathilde : brainstorming événement communauté 27/06
	- Soizic/Guénolé : relecture travaux évaluation & benchmark

### 16h - Une chose que j'ai faite / apprise grâce à un autre défi

* Soufiane : beaucoup d'aide de Valentin sur la traduction/NLP pour KarfuR. 1 ou 2 semaines de boulot en 1h ensemble. 
* Simon : Valentin a aidé pour la brique NLP du projet Adler, discussion des types de réseaux de neurones pour la reconnaissance d'entité nommées. + Soizic sur la stratégie 
* Soizic : Echange intéressant avec Coline sur les Designers d'Interet Général et la vision des designers dans l'Etat
* Cristian : discussions avec Sébastien et Erica sur l'architecture technique de l'API IA Flash
* Luc : discussions avec Thierry et Carine sur DataReg, apprentissages de la géomatique. 
* Wojtek : stratégie (Soizic), feuille de route (JB) + open data (Antoine) qui a permis de formaliser les idées et de convaincre les bonnes personnes (avec des notes !)
* Valentin : a parlé avec Soufiane et Simon.
* Gabriel : remerciement à Nicolas et Simon pour leur travail sur l'algo de Polygraphe
* Amélie : discussions avec Soizic sur la stratégique + continu + continuation des collaborations avec Mathieu Perez + Bastien sur la documentation + Hugo avec les pitchs
* Mathieu Perez : travail avec les designers + Amélie pour leurs conseils sur l'interface du moteur de recherche Open Justice + bonnes pratiques Elasticsearch avec Amélie.
* Nikos : atelier avec les designers + Mathieu Perez a donné des conseils sur l'interface de Plume
* Coline : échanges avec les designers sur les bonnes pratiques UI et les librairies pour faire garder du temps sur le design et le dev + travail avec Sophie et Bastien sur l'article de blog
* Armand : Nicolas (Adler) a ouvert de nouvelles perspectives sur l'algorithme Explocode (en utilisant les graphes) + discussion avec IA Flash sur l'architecture de leur API. 
* Nicolas : clinique stratégie (Soizic) + Gabriel 
* Sophie : Mathieu + Sébastien (communication au niveau des écoles) + Mathilde/Soizic 
* Lucas : travail avec Coline sur les maquettes de CartoBio (notamment pour mieux impliquer les équipes dans le design) + clinique stratégie (Soizic)
* Victor : atelier d'Antoine sur l'intégration continue 
* Viktor : atelier d'Antoine sur l'intégration continue, qui a permis d'avancer plus rapidement, et l'atelier pérennisation de JB. 
* Carine : atelier pérennisation avec JB qui a permis de bien se coordonner après les retours de vacances respectifs de Carine et Thierry 
* Thierry : a avancé sur un blocage de requête dans une base de données grâce à Carine et Luc (+ les organisateurs d'EIG)
* Dorine : discussions avec les designers + Amélie qui a résolu un bug en react
* Erica : "clinique dev" à reproduire en EIG off + les designers 
* Quentin : a appris des choses sur la communication/pitch grâce à Hugo + Antoine et Gabriel sur la revue des arbres de décision + l'équipe d'organisation
* Sébastien : clinique dev + design
* Pierre-Alain : le waterpolo
* JB : échanges entre designers + pistes pour faire des ateliers qui créent des liens entre les développeurs & designers + discussion avec Clément sur l'approche centrée utilisateurs qui est novatrice dans l'administration. 
* Mathilde : y a vu plus clair sur le pic de charge qui va venir avec les EIG 4 + discussion d'hier soir en plénière
* Hugo : équipe EIG Node (pérennisation du programme EIG) ; Thierry pour le pingpong + Kim pour les boules qiès, Nikos pour Figma & Sketch, retour des designers sur les interfaces, Soufiane qui a développé des features 
* Augustin : Bastien sur la documentation, organisation du château, "l'essaim d'abeilles grâce auquel j'ai beaucoup appris". 
* Antoine : belles discussions sur les défis 

## Next steps / Actions post-Séminaire 
* Formulaire de satisfaction
* Envoyer les posters de pérennisation - prévoir un **EIG-off** dédié
* Récupérer les feuilles d'atelier pérennisation
* Etalab talks
* Discuter de la salle du LLL 
* Prévoir un **EIG-off** pitch/démo >> 29 Mai

## Prototypes / outils déjà en ligne

### Open Chronic

Non publiés
- Statistiques sur les parcours de soins des malades chroniques BPCO
- Travaux sur le serveur big data internes

Animation de la communauté des utilisateurs du SNDS
- Lancement d'un [forum d'entraide](http://entraide.health-data-hub.fr/)
- Organisation d'une série de [Meetup](https://www.meetup.com/fr-FR/Health-Data-Hub/)

Documentation du SNDS
- [Schema formel](https://gitlab.com/healthdatahub/schema-snds)
- Initiation d'une [Documentation collaborative](http://documentation-snds.health-data-hub.fr/)
- Alimentation automatique et évolutions d'un [dictionnaire interactif](http://dico-snds.health-data-hub.fr/)


### CibNav

Nos outils sont mis en production sur le RIE et pas forcément accessibles à tout le monde. Néanmoins nous notons tout cela ici. 

### Plume Rédaction 

https://plume-redaction.eig-forever.org
(admin/admin4ever)

#### Outillage

* Phabricator: http://code-ciblage-test.csam.e2.rie.gouv.fr/
* AirFlow
   * Dev : http://airflow-ciblage-test.csam.e2.rie.gouv.fr/
   * Prod : http://airflow-cibnav.csam.e2.rie.gouv.fr/

#### Productions

* Redash : (dev) http://data-ciblage-test.csam.e2.rie.gouv.fr/
* Rapport mission : http://rapport-mission-dcs.din.developpement-durable.gouv.fr/
* API Navire (correspondance Immatriculation <-> information navire) : https://api-immat-navires.din.developpement-durable.gouv.fr/api