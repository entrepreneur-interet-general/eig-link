# Accessibilité 

Initialement relatif au monde du handicap, des enfants ou des personnes âgées, l’accessibilité c’est étendu à l'ensemble des citoyens et utilisé pour désigner l'accès à de nombreux domaines :
- **physique**, la liberté de déplacement dans l’espace (mobilité) ;
- **éducatif**, le droit à une scolarisation ;
- **civique**, le droit de vote ;
- **culturel**, pouvoir développer sa culture ;
- **numérique**, adaptation des systèmes numériques, dont les sites web, aux différents types de handicap, développement d'outils spécifiques tels loupe ou clavier visuel
- ...

> « L'accessibilité numérique consiste à rendre les services de communication au public en ligne accessibles aux personnes handicapées » — RGAA 4

[[toc]]

## Comprendre le RGAA 4 

Nous sommes actuellement en **version 4 du RGAA**, qui est décrit à l'adresse suivante : [https://www.numerique.gouv.fr/publications/rgaa-accessibilite/](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)

::: tip Changement de nom du Reférentiel Général entre la version 3 et 4
RGA.A. 3 : Accessibilité pour les Administrations

RGA.A. 4 : Amélioration de l’Accessibilité 
:::

::: danger Version antérieur
Cette adresse n'est donc pas la bonne : [http://references.modernisation.gouv.fr/rgaa-accessibilite/](http://references.modernisation.gouv.fr/rgaa-accessibilite/)
:::


Le Référentiel Général d'Amélioration de l'Accessibilité (RGAA) est un document initialement pensé pour tester votre site ou service numérique a posteriori. C'est à dire lorsque celui-ci est finalisé. 

### Obligations 

Les obligations du RGAA sont :
- principalement pour les administrations ;
- quelques contenus sont exemptés (bureautiques ancien, des contenus audio et vidéo diffusés en direct…) ;
- reprenant des règles pour l'accessibilité des contenus Web (WCAG) 2.1 de niveau simple A et double A (AA) ;
- avec possible dérogation si la charge est disproportionnée (budget, effectifs…) ;
- avec évaluation/audit de la conformité à la norme de référence.

### Evolauation / Audit

Il est possible de s'auto-évaluer ou de faire appel à un tiers (expert) pour auditer la conformité à la **norme de référence**.
Cette audit abouti à une **déclaration d’accessibilité**.

Pour selon il est nécéssaire d'**échantillonner** son audit (sur les pages principales : accueil, contact, authentification, mentions légales…)

Pas adapté à l’agilité projet

### Déclaration d'accessibilité

La déclaration d'accessibilité permet de :
- Définir l'**état de conformité** (total, partiel, non-conforme)
	- Total = 100% des critères de la **norme de référence** sont respéctés
	- Partiel = +50% des critères sont respéctés
	- Non-conforme = -50% des critères
- Signaler des contenus non accessibles
- Définir les dispositifs d'assistance et de contact
- Mentionner l’appel au Défenseur des droits si nécéssaire

::: tip
Le **% des critères respectés** = Nb **critères validés** / Nb **critères applicables**

Il faut donc commencer par définir les critères applicables avant de vérifier s'ils sont valides. 
:::

### Publications

Une page « accessibilité » doit être publier et doit contenir :  
- La déclaration d’accessibilité
- Le schéma pluriannuelle de mise en accessibilité 
- Le plan d'actions de l’année

Cette page doit se nommer selon l'état de conformité :
- « Accessibilité : totalement conforme »
- « Accessibilité : partiellement conforme »
- « Accessibilité : non conforme » 

::: tip Exemples 
Une page accessibilité bien documenté : [www.service-public.fr/P10000](https://www.service-public.fr/P10000)

Page accessibilité initié : [www.etalab.gouv.fr/accessibilite](https://www.etalab.gouv.fr/accessibilite)
:::

## Critères & tests

Les critères à respecter définissent la **norme de référence**

Il existe 106 critères de contrôle RGAA (dont 50 critères de succès des niveaux A et AA de la norme internationale WCAG 2.1).

Pour vérifier ces critères il existe des tests. Et il existe en moyenne de 2,5 tests par critères.

Ces critères sont organisé par ce que l'on appelle des **thématiques** (images, cadres, couleurs, liens, tableau...).

::: tip Exemples de critères 
RGAA 1.1 — Chaque image porteuse d'information a une alternative textuelle

RGAA 1.2 — Chaque image de décoration est correctement ignorée par les technologies d'assistance 

RGAA 3.1 — L'information ne doit pas être donnée uniquement par la couleur.

RGAA 3.2 — Le contraste entre la couleur du texte et la couleur de son arrière-plan est suffisamment élevé

RGAA 4.1 —Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription

RGAA 8.5 — Chaque page comporte un titre `<title>` 

RGAA 12.1 — Chaque ensemble de pages dispose au moins de deux systèmes de navigation différents
::: 


