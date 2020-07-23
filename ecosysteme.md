# Écosystème DINSIC et Etalab

Ce document synthétise les différentes ressources de la DINSIC et d'Etalab et reprend les présentations du bootcamp.

[[toc]]

## Équipes Etalab 

### data.gouv.fr
La plateforme [data.gouv.fr](https://www.data.gouv.fr/) est la plateforme nationale ouverte des données publiques françaises.
Sa particularité est qu’elle est communautaire et que l’on peut aussi y publier des réutilisations de données ouvertes.
Elle a pour ambition d’être un catalogue exhaustif de l’open data en France. La plateforme moissonne donc également les portails de données des collectivités territoriales et d’autres organismes.  
La plupart des jeux de données sont bruts, mais certains font l’objet d’un traitement particulier, comme les données des [avis de la CADA](https://cada.data.gouv.fr/) ou les [données du cadastre](https://cadastre.data.gouv.fr/).   
L’équipe [data.gouv.fr](https://www.data.gouv.fr/) est également en charge du Service Public de la Donnée ([SPD](https://www.data.gouv.fr/fr/reference)) composé de neuf jeux de données de référence comme la [Base Adresse Nationale](https://adresse.data.gouv.fr/), le [Répertoire National des Associations](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/) ou encore la [Base Siren](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret-fin-le-30-avril-2019/) sur les entreprises.

**Ce que vous pouvez faire avec l’équipe data.gouv.fr :** 

L’équipe autour de data.gouv.fr vous propose son aide technique sur les questions autour des données :
-	Monter une instance de [uData](https://github.com/opendatateam/udata) (le moteur de la plateforme data.gouv.fr, un logiciel libre), faire remonter des problèmes techniques sur Python ou mongoDB ;
-	Si votre projet implique de manipuler des données, il y a peut-être des synergies possibles avec data.gouv.fr ; 
-	La stack technique utilisée par l’équipe de data.gouv.fr : Python, MongoDB.

L’équipe développe aussi un template pour des sites statiques ([disponible ici](https://template.data.gouv.fr/)), que vous pouvez utiliser.

**Ressources :** [Présentation](https://speakerdeck.com/eig2018/presentation-data-dot-gouv-dot-fr)

**Contact :** data.gouv@data.gouv.fr , via Slack @abulte

### Open data
Dans le cadre de la [Loi pour une République Numérique](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000033202746&categorieLien=id), l’équipe en charge de l’open data au sein d’Etalab propose un accompagnement aux administrations sur les sujets d’ouverture et de circulation des données. 

**Ce que vous pouvez faire avec l’équipe open data :**

-	Les contacter si vous avez des questions méthodologiques et juridiques sur l’ouverture et/ou la circulation de certaines bases de données ;
-	Les contacter si vous avez besoin d’identifier les correspondants open data ou l’AMD (administrateur ministériel des données) de votre administration ;
-	Les contacter si vous souhaitez organiser un rendez-vous au sein de votre administration pour actionner une démarche d’ouverture de données ;
-	Au sein de vos administrations, agir en éclaireurs et identifier les acteurs qui ont des besoins récurrents en termes de circulation des données.

[La présentation de l'équipe lors du bootcamp](https://speakerdeck.com/eig2018/presentation-open-data)

**Contact :** romain.tales@modernisation.gouv.fr

### Cadre légal de l'ouverture et de la circulation des données publiques

Il existe différentes catégories de documents administratifs, dont celle des documents « communicables à tous » qui nous intéresse particulièrement.     
Il est possible que vous rencontriez des problématiques juridiques au cours de la réalisation de vos défis (rédactions de CGU, ouverture de nom de domaines, questions autour des données…). Si vous rencontrez un problème de nature juridique au sein de vos administrations, notamment (mais pas limité à) la gouvernance des données, adressez-vous en premier lieu à votre direction juridique. Dans un second temps, vous pouvez vous adresser à la direction juridique de la DINSIC (en passant par l’équipe EIG à Etalab).  
Les autres institutions en lien avec les données :
-	Pour l’accès à des documents publics, se rapprocher de la [CADA](https://www.cada.fr/) et de la [publication de ses avis](https://cada.data.gouv.fr/) pour voir si le type de document a fait l’objet d’une saisie. 
-	La thématique des données personnelles est gérée par la [CNIL](https://www.cnil.fr/) 

Ressource : [Guide Open Data de la CNIL ](https://www.cnil.fr/sites/default/files/atoms/files/guide_open_data.pdf)

**Contact :** perica.sucevic@modernisation.gouv.fr

### Datascience / Administrateur Général des Données / Lab IA

Le pôle datascience accompagne les administrations dans leurs stratégies de circulation et d’exploitation des données. Ce pôle est l’équipe opérationnelle qui entoure l’Administrateur général des données ([AGD](https://agd.data.gouv.fr/la-fonction/)), dont le rôle est de coordonner l’action des ministères sur ces sujets. Le pôle datascience anime le [réseau des AMD](https://agd.data.gouv.fr/lequipe/reseau/) (Administrateurs Ministériels des Données).   
Il anime la communauté datascience de l’État via l’organisation de rencontres internes à l'administration appelées « datadrinks », lors desquelles des datascientists viennent présenter leurs projets. Plusieurs projets techniques sont également menés en interne, comme la production d’un outil générique de pseudonymisation et ou la création de simulateurs (exemple sur la [taxe d’habitation](https://www.etalab.gouv.fr/temoignage-peut-on-recoder-la-loi-lexemple-de-la-taxe-dhabitation)).  
Avec le coordinateur national à l’intelligence artificielle, le pôle datascience participe à la création du Lab IA, dont la vocation est de déployer l’IA dans l’action publique (accompagnement de projet, R&D, éthique).

**Ce que vous pouvez faire avec le pôle datascience :**

-	Poser des questions sur des jeux de données que vous ne connaissez pas en contactant Pavel Soriano ou Paul-Antoine Chevalier sur le Slack EIG ou par mail ; 
-	Pour les défis qui utilisent des techniques de NLP (_natural language processing_, ou traitement naturel du langage) : contacter Pavel si vous avez des idées de briques mutualisées ;
-	Effectuer des revues de modèles, avoir des retours sur des projets data menés par l’équipe datascience avec vos administrations d’accueil etc.

**Contact :** paul-antoine.chevalier@data.gouv.fr , pavel.soriano@data.gouv.fr ; sur Slack @Paul-Antoine


### Open gov
L’équipe Open gov représente la France au sein de l’[Open Government Partnership](https://www.opengovernmentpartnership.org). Elle travaille sur les sujets de transparence de l’administration, les accompagne sur des sujets d’ouverture comme un moyen (et non comme une fin). Elle coordonne l’élaboration, la mise en œuvre et l’évaluation du [plan d’action national](https://www.etalab.gouv.fr/plan-daction-national) pour une action publique transparente et collaborative. Celui-ci est composé de 21 engagements de la part de 13 administrations, et le programme EIG représente d’ailleurs la traduction d’un de ces engagements.  
Dans ce cadre, elle organise régulièrement les [Forums Open d’État](https://www.etalab.gouv.fr/forum-open-d-etat). Co-organisés par [Datactivist](https://datactivist.coop/) et [Vraiment Vraiment](http://www.vraimentvraiment.com/), ces événements réguliers réunissent administrations et citoyens sur des problématiques liées aux données et à la transparence, la redevabilité, la contribution citoyenne.  
De concert avec les acteurs de la Civic Tech, elle a construit et maintient une [plateforme](https://consultation.etalab.gouv.fr) permettant aux administrations de fabriquer facilement leurs consultations, à travers des outils et un accompagnement. 

**Ce que vous pouvez faire avec l’équipe Open Gov :**
-	Utiliser les outils partagés mis à disposition ;
-	Participer aux Forums Open d’État (le prochain est le 9 avril, sur la transparence de l’aide publique au développement) ;
-	Faire remonter des problématiques que vous identifiez dans vos administrations, qui pourraient mener à d’autres Forums Open d’État.

**Contact :** amelie.banzet@modernisation.gouv.fr

## Produits & méthodes Etalab - DINSIC

### beta.gouv.fr
L’incubateur de services publics numériques [beta.gouv.fr](https://beta.gouv.fr/) a pour mission de créer des solutions numériques à partir d’irritants constatés sur le terrain par des agents publics, afin d’améliorer la qualité du service public rendu. C’est en quelque sorte un dispositif miroir du programme EIG, qui sort les agents publics des administrations là où le programme EIG permet à des professionnels extérieurs d'intégrer l'administration.

Depuis sa création, près de [80 Startups d’État](https://beta.gouv.fr/startups/) ont été créées. Le service est également responsable de la [formation Alpha](https://beta.gouv.fr/alpha/), destinée aux futurs intrapreneurs et aux nouvelles Startups d’État sur la méthode de beta.gouv.fr.

La [communauté](https://beta.gouv.fr/communaute/) de beta.gouv.fr compte des profils très diversifiés, que vous pouvez contacter si vous avez des interrogations sur leurs méthodes ou si vos sujets se recoupent. De même, des coachs de beta.gouv.fr sont prêts à répondre à vos questions si vous le souhaitez. 

**Contact :** contact@beta.gouv.fr ; sur Slack @Ishan

### api.gouv.fr
Différentes API sont développées au sein de la DINSIC pour simplifier et fiabiliser l’accès à certains jeux de données publics thématiques. Le catalogue des API est disponible [ici](https://api.gouv.fr/). 

**Ressources :** [documentation sur les outils d'exposition de données publiques](https://github.com/etalab/etalab/blob/master/logiciels-libres.md#outils-dexposition-api-de-donn%C3%A9es-publiques)

**Contact :** contact@api.gouv.fr

### OpenFisca
OpenFisca est un logiciel open source qui modélise le système socio-fiscal en code informatique, auquel contribue Etalab (OpenFisca est aussi une [Startup d’Etat](https://beta.gouv.fr/)). C’est notamment le logiciel sur lequel se base le défi EIG 3 [LexImpact](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/leximpact.html).
L’équipe peut partager son expérience en médiation numérique, sur la réalisation de formations au code d’administrateurs du Sénat.

**Ressources :**
- [Open Fisca](https://fr.openfisca.org/) 
- [GitHub OpenFisca](https://github.com/openfisca/openfisca-france)
- [Présentation](https://speakerdeck.com/eig2018/presentation-openfisca-dbe56468-60a3-4762-9375-162cdf893d05)

**Contact :** contact@openfisca.org

### France Connect
Le service d’identité France Connect permet aux utilisateurs d’accéder plus simplement aux services publics en ligne, en permettant aux internautes de s'identifier sur un service en ligne par l’intermédiaire d’un compte existant (impots.gouv.fr, ameli.fr…). FranceConnect fournit au service en ligne l’identité vérifiée d’une personne physique, appelée l’identité pivot.

**Ressources :**
[France Connect](https://franceconnect.gouv.fr/)
[Twitter France Connect](https://twitter.com/_FranceConnect_) 

**Contact :** florian.delezenne@beta.gouv.fr

## Thématiques transverses 

### Qualité des services en ligne
Le service Qualité des services en ligne de la DINSIC propose différents outils pour améliorer l’accessibilité des sites internet en contact avec du public. 

**Ce que vous pouvez faire avec le service Qualité des services en ligne :**
-	S’inspirer ou utiliser les travaux du [Pidila](https://pidila.gitlab.io/), dont une checklist qui permet d’anticiper la qualité d’un site web en amont du projet, et une bibliothèque de composants HTML/CSS/JS compatibles avec les exigences de qualité et d’accessibilité.
-	Utiliser le référentiel [RGAA](https://references.modernisation.gouv.fr/rgaa-accessibilite/). 
-	L’équipe peut également mobiliser un vivier d’utilisateurs en situation de handicap afin de tester des outils et des produits. 
-	Un projet en commun autour d’un lexique a été envisagé.

**Présentation :** https://speakerdeck.com/eig2018/presentation-qualite-des-services-en-ligne 

**Contact :** benedicte.roullier@modernisation.gouv.fr

## Open source / logiciel libre
Pour toutes les questions liées aux logiciels libres et à l'open source, vous pouvez contacter le référent logiciel libre d’Etalab.

Retrouvez sa présentation lors du bootcamp [ici](https://speakerdeck.com/bluehats/les-logiciels-libres-dans-le-cadre-du-programme-entrepreneur-dinteret-general).

**Contact :** bastien.guerry@data.gouv.fr ; sur Slack @bzg

## Algorithmes publics
La question des algorithmes publics et de l’éthique est source de réflexion au sein d’Etalab.  
Dans ce cadre, Simon Chignard mène des travaux avec la [FING](https://entrepreneur-interet-general.etalab.gouv.fr/blog/2018/10/15/fing-algo.html) ([un atelier a été organisé avec les EIG l’année dernière sur ce thème](https://entrepreneur-interet-general.etalab.gouv.fr/blog/2018/10/15/fing-algo.html) et étudie différents algorithmes publics, comme [La Bonne Boîte](https://labonneboite.pole-emploi.fr/). Un partenariat a également été établi entre la DINSIC et la [chaire Innovation publique de l’ENA/ENSCI](https://www.ena.fr/L-ENA-se-presente/L-ENA-dans-l-actualite/Les-actualites-de-l-Ecole/Chaire-innovation-publique-ENA-ENSCI).

**Ce que vous pouvez faire dans le cadre du travail d’Etalab sur les algorithmes publics :**
- Un groupe de travail impliquant certains défis EIG 3 où les enjeux éthiques sont apparents (Open Justice, DataJust, Open Chronic et CibNAV) a été lancé en mars. Les autres défis EIG intéressés par un tel suivi peuvent contacter l’équipe EIG à Etalab.
-	Un atelier plus généraliste pourra être organisé pendant l’année. 

**Ressources :**
-	[« Vers des algorithmes exemplaires ? »](http://www.internetactu.net/2018/12/05/vers-des-algorithmes-exemplaires/), un article d’Hubert Guillaud de la FING, où est notamment mentionné le défi EIG 2 Signaux Faibles.
-	[Article](https://entrepreneur-interet-general.etalab.gouv.fr/blog/2018/10/15/fing-algo.html) sur le blog EIG

**Contact :** simon.chignard@data.gouv.fr
