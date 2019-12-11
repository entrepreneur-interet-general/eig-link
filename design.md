# Références, ressources et pratiques du design dans l'administration

Ce document a pour vocation de guider les designers et les mentors ayant des designers dans leur défi dans la publication de leur production et la gestion de leur projet.

## Références numériques de l'État

En tant que designer, deux documents de référence du SI de l'État concernent directement votre travail : 

- La **[Charte Internet de l'état](http://references.modernisation.gouv.fr/charte-internet-de-letat)**, publiée en Février 2012, définit les obligations auxquelles doivent se conformer les sites web et les services en ligne des administrations centrales et des services déconcentrés de l'État (voir la [circulaire](http://circulaire.legifrance.gouv.fr/pdf/2012/02/cir_34663.pdf)). Ce document a pour principes de garantir de la cohérence et de la lisibilité entre les services numérique de l'Etat. Malheureusement, ce document est devenu obsolète avec les années. Par exemple, il ne prend pas en considération la responsivité des écrans et impose la compatibilité avec IE6.
- Le **[Référentiel général d’accessibilité pour les administrations](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)** aussi nommé **RGAA**, est mis à jour régulièrement, et découle de l'obligation d'accessibilité imposée par l'[article 47 de la loi du 11 février 2005](https://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=LEGIARTI000037388867&cidTexte=LEGITEXT000006051257) pour « l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées ». 

::: tip 
Poru plus d'information voir la page dédiée à l'**[accessibilité](accessibilite.md)**
:::

## Ressources design de l'Etat

Les ressources suivantes peuvent être utiles à la fois aux designers fraîchement arrivés dans l'administration ou les mentors cherchant à découvrir ou approfondir leur connaissance sur le design :

- La boite à outils **[Comment faire](http://comment-faire.modernisation.gouv.fr/)**  permet de découvrir les méthodes de design de service ou de politique publique. Conçu par la DITP (Direction interministérielle de la transformation publique) elle offre une appropriation de la méthode [design thinking](http://comment-faire.modernisation.gouv.fr/demarche-design/) aux services publics.
- La **[cheklist PIDILA](https://pidila.gitlab.io/checklist-pidila)** est la fusion des critères listées dans de nombreux référentiels comme la **charte internet de l'État**, le **RGAA**, mais aussi le Cerfa numérique, les bonnes pratiques Opquast, d'éco-conception et du [référentiel général d'interopérabilité](http://references.modernisation.gouv.fr/interoperabilite). L'équipe PIDILA a également d'autres ressources utiles pour la qualité et l’accessibilité des sites web de la DILA (Direction de l'information légale et administrative) en charge, entre autre, de la plateforme [service-public.fr](https://www.service-public.fr/) sur leur **[GitLab](https://pidila.gitlab.io/)**.
- La page [design d’Etalab](https://etalab.github.io/etalab/design.html) permet d'expliciter la notion de design system, contenant des exemples de **[design systems gouvernementaux](https://github.com/entrepreneur-interet-general/design-system#exemples-de-design-systems)**, et des ressources utiles aux développeurs.
- Comme son nom l'indique, le site **[template.data.gouv.fr](https://template.data.gouv.fr/)** est un template de composants UI pour l'écosystème Etalab/BetaGouv (cf. [GitHub](http://github.com/etalab/template.data.gouv.fr))

## Outils

En terme d'outils de conception d'interface utilisateur, les principaux outils utilisés par les designers du programme sont :

- [Sketch](https://www.sketch.com/), disponible en version d'essai un mois, est l'un des outils offrant le plus de ressources partagées à la fois sur [SketchAppSources](https://www.sketchappsources.com/), sur GitHub et dans de nombreux *[design systems](https://github.com/entrepreneur-interet-general/design-system)*.
- [Figma](https://www.figma.com/) est une application web qui offre l'avantage d'être disponible en ligne, combine les fonctionnalités de Sketch ainsi que d'InVision et Zeplin (version gratuite à petite échelle).
- [Adobe XD](https://www.adobe.com/fr/products/xd.html) est l'outil historique et complet du designer comportant également une version gratuite à périmètre fonctionnel réduit.

Ces principaux outils sont cités également pour les mentors afin de [préparer le poste de travail des EIG](./accueil-eig.md).

## Communauté & ressources communautaires 

Pour partager vos pratiques et vos ressources de designer il existe plusieurs espaces et moments d'échanges dans l'administration publique : 
- Le [Hub des communautés](https://www.modernisation.gouv.fr/le-hub-des-communautes), est une liste de communauté de professionnels innovants dans la transformation du secteur public dont certains ont une certaine expertise du design, comme la [communauté UX](https://www.numerique.gouv.fr/actualites/rejoignez-la-communaute-ux-services-publics-en-ligne/).
- La [CNIL a une communauté de designers et de professionnel du numérique](https://design.cnil.fr/) pour construire des parcours utilisateurs respectueux de la vie privée et des concepts du RGPD, et faisant suite au [cahier IP6 - La forme de  choix](https://linc.cnil.fr/fr/cahier-ip6-la-forme-des-choix-0).

## Ouvrir son design

La [loi pour une République Numérique de 2016](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367689&dateTexte=&categorieLien=cid) oblige les administrations à publier les documents administratifs qu'elles produisent sous licence libre. La production d'un designer est assimilée à un document administratif une fois que celui-ci est terminé. Cette production doit donc être publiée sous licence libre, comme le [code source d'un logiciel](./opensource.md).

Nous vous conseillons donc de créer et de publier sur un dépôt [GitHub de l'organisation Entrepreneurs d’intérêt général](https://github.com/entrepreneur-interet-general/) (ou une autre forge selon votre ministère) vos produtions en licence ouverte, vos recherches, documentations, productions de maquettes, prototypes, templates, logos... Exemple avec le dépôt : [Brigade Numérique](https://github.com/entrepreneur-interet-general/brigade-numerique)

### Format des données

La loi pour une République Numérique de 2016 demande également l'utilisation des formats favorisant l'interopérabilité, c'est le droit à la portabilité. Il faut donc privilégier des formats ouverts et lisibles par des machines autant que possible.

Concernant les productions des designers, il est donc préférable d'exporter son travail aux formats ouverts suivants `.svg` ou `.eps`, bien qu'il soit courant de voir des fichiers aux formats `.sketch` ou `.ai`.

### Pour les débutants de GitHub

Pour les débutants de GitHub, nous vous conseillons d'avoir l'outil [GitHub Desktop](https://desktop.github.com/) afin de *commiter* vos productions sur votre dépot.   


