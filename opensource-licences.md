# Comprendre les licences libres

[[toc]]

## Des licences pour les logiciels et les contenus

La « culture libre » mobilise deux types de ressources : le *code source* de logiciels et des *contenus autres* (textes, images, etc.)

Lorsqu’on évoque les licences libres, on pense spontanément à celles qui couvrent les *logiciels libres*, mais certaines licences Creative Commons sont aussi des licences libres.

Par exemple : le noyau Linux est publié sous licence libre GPLv2 et les contenus de Wikipédia sont publiés sous licence Creative Commons by-sa 3.0.

Etalab a publié une licence qui peut couvrir aussi bien les logiciels que les contenus, la Licence Ouverte 2.0 ([PDF](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf)).

## Les quatre libertés garanties par les licences libres

Les licences libres sont des *contrats* passés entre l’auteur d’un logiciel et un utilisateur, celui-là accordant à celui-ci ces quatre libertés :

- la liberté **d'utiliser** le logiciel ;
- la liberté **de copier** le logiciel ;
- la liberté **d'étudier** le logiciel ;
- la liberté **de modifier** le logiciel et de redistribuer les versions modifiées.

Ce principe est commun à *toutes* les licences libres.


## Les deux grandes familles de licences libres

Il y a deux grandes familles de licences libres :

- les licences dites « **copyleft** », qui garantissent que les versions redistribuées du logiciel (modifié ou non) sont publiées avec les mêmes garanties sur les libertés de l’utilisateur ;
- les licences dites « **permissives** », qui permettent à des versions redistribuées du logiciel (modifié ou non) d’être publiées sous des conditions ne garantissant pas les quatre libertés fondamentales de l’utilisateur.

La licence copyleft la plus connue est la licence [GNU GPL](https://fr.wikipedia.org/wiki/Licence_publique_g%C3%A9n%C3%A9rale_GNU) (General Public license).

Les licences permissives connues sont les licences [BSD](https://fr.wikipedia.org/wiki/Licence_BSD), [MIT](https://fr.wikipedia.org/wiki/Licence_MIT), [Apache](https://fr.wikipedia.org/wiki/Licence_Apache).

Les deux institutions de référence pour l’évaluation des licences libres sont la [Free Software Foundation](https://fr.wikipedia.org/wiki/Free_Software_Foundation) et l’[Open Source Initiative](https://opensource.org/).

## Quelques exemples

- Le cadriciel [Bootstrap](https://getbootstrap.com/) est publié sous licence MIT.
- Le logiciel [openssh](https://www.openssh.com/) est publié sous licence BSD.
- Le noyau [Linux](https://www.linux.org/) est publié sous GPLv2.
- Le serveur [HTTP](https://httpd.apache.org/) du projet Apache est publié sous licence Apache.
- Les logiciels du projet [GNU](https://www.gnu.org/) sont généralement publiés sous GPLv3+.


## Choisir une licence libre pour vos codes sources

Vous êtes dans l’un de ces trois cas :

1. Vous contribuez à un logiciel libre existant.
2. Vous fourchez (*forkez*) un logiciel libre existant.
3. Vous écrivez un nouveau logiciel libre.

Nous ne nous intéressons pas aux fourches « techniques », celles où le fait de fourcher ne sert qu’à pouvoir envoyer des correctifs sur le logiciel parent.

Quel enjeu de licence pour chacun des trois cas ?

- **Vous contribuez à un logiciel libre existant :** La loi pour une République Numérique autorise les agents publics à contribuer à des logiciels libres existant. Si vous êtes dans ce cas, veuillez vous référer à la [Politique de Contribution Open source](https://www.numerique.gouv.fr/publications/politique-logiciel-libre/). Les administrations sont en train de se familiariser avec cette politique : n’hésitez pas à faire part de vos remarques à votre administration.
- **Vous fourchez (*forkez*) un logiciel libre existant :** si le logiciel parent est sous licence copyleft, votre version modifiée sera sous la même licence (ou sous une autre licence copyleft compatible) ; si le logiciel parent est sous licence permissive, vous pouvez publier votre version sous la licence permissive ou copyleft que vous voulez, l’usage courant étant d’utiliser la même licence que le logiciel parent. Par exemple : vous fourchez un thème Bootstrap publié sous licence MIT. L’usage courant est de publier votre version sous licence MIT. Vous pouvez aussi publier votre thème sous la licence copyleft GNU GPLv3, à condition d’indiquer quelles sont les parties héritées, couvertes par la MIT, et quelles sont les parties nouvelles, couvertes par la GNU GPLv3.
- **Vous écrivez un nouveau logiciel libre :** le choix entre une licence permissive ou copyleft se fera selon votre stratégie et/ou selon les choix faits par d’autres logiciels similaires écrits dans le même langage.

Pour le détail sur la compatibilité des licences voir [ce tableau](https://vvlibri.org/fr/guide-de-lauteur-libre-gerer-des-licences-differentes-compatibilites-de-licences/tableau-de) et ces [explications](https://www.gnu.org/licenses/license-compatibility.fr.html) de la FSF.

À noter que la question de la licence libre se pose au moment de la *publication* de votre code.

## Les licences autorisées pour l’administration publique

Etalab publie [la liste des licences autorisées](https://www.data.gouv.fr/fr/licences) pour les données publiques et les codes sources produits et publiés par les administrations publiques.

Si vous avez des questions sur les licences de vos données publiques, contactez [Romain Talès](mailto:romain.tales@modernisation.gouv.fr), référent open data à Etalab.

Si vous avez des questions sur les licences de votre projet logiciel, contactez [Bastien Guerry](mailto:opensource@data.gouv.fr), référent logiciels libres à Etalab.

