# Découvrer et intégrer votre bulloterie en ligne

> La Bulloterie est un outil ludique de mise en relation par intérêts et savoir-faire, en groupe affinitaire (bulles)

Cette outil a été conçu par Sébastien Kurt. [Voir le wiki pour comprendre : Qu'est-ce que c'est ? Comment ça marche ?](https://movilab.org/wiki/La_Bulloterie)

## Historique

De nombreuses bulloteries ont été réalisées dans le programme EIG. Pour concerver la trace des bulloteries produites, une [première implémentation de la bulloterie](https://github.com/phileas-condemine/bulloterie) a été réalisée par Philéas Condemine. Elle a pris la forme de graphe (et non de bulle). Cette application nécéssite des connaissances en R pour l'ajout de bulloterie supplémentaire. 

> [Application de visualisation des résultats de la Bulloterie (par Philéas)](https://drees.shinyapps.io/bulloterie_eig/)

Pour information, l'application affiche aléatoirement 4 compétences et ces liens.


## Intégration en ligne

Pour offrir une meilleur autonomie au utilisateur, une seconde implémentation de la bulloterie a été déployé sur l'outil [kumu.io](https://kumu.io/). Pourquoi Kumu ? Car elle offre plus de fonctionnalités de navigation, bien qu'elle reste une représentation en graphe. Kumu offre une vesion freemium satisfaisante et l'application est bien documentée.

> [Exemple de visualisation de la bulloterie EIG 3](https://kumu.io/jbledevehat/eig#eig-bulloterie)


### Création du fichier d'importation des données 

Pour intégrer la bulloterie, il est nécéssaire de créer un fichier d'importation des données. 

> [Exemple du fichier d'importation](https://github.com/entrepreneur-interet-general/eig-link/raw/master/docs/Exemple-KUMU-BulloterieEIG.xlsx)

Pour comprendre comment intégrer ces données, voir la [documentation d'importation](https://docs.kumu.io/guides/import.html). 

Pour résumé, dans votre fichier `.xlsx` d'importation des données : 
- Dans l'onglet *Elements* 
	- Ecrire dans la colone *label* les personnes, centres d'intérêt et niveaux d'intéret (expert, intéressé...)
	- Ecrire dans la colonne *type* (suivant l'exemple ci-dessus)
- Dans l'onglet *Connections*
	- Ecrire le lien entre le centre d'intérêt et le niveau d'intéret (expert, intéressé...)
	- Ecrire le lien entre le niveau d'intéret et la personne concerné

> Ajouter le nombre de liens entre les bulles afin d'ajouter du poids aux centres d'intéret/savoir-faire.	

Enfin, pour créer un graph dans Kumu : 
1. créer un compte sur la plateforme [kumu.io](https://kumu.io/),
2. créer un projet, 
3. créer une carte *stakeholder*
4. importer votre Excel à travers le bouton :heavy_plus_sign: en bas de page et cliquer sur Import. 
5. Dans les settings, paramétrer :
	- *color by* : Element type
	- *size by* : Nb liens (optionnel mais préféreable) 

> Ressource : voir la [documentation Kumu](https://docs.kumu.io/guides/import.html). 

