# Publier et réutiliser des codes sources de logiciels

[[toc]]

La [Loi pour une République Numérique de 2016](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367689&dateTexte=&categorieLien=cid) oblige les administrations à publier les documents administratifs qu'elles produisent sous licence libre. Le code source d'un logiciel est assimilé à un document administratif, donc il doit lui aussi être publié sous licence libre.

Ce document a pour vocation de guider les EIG dans la publication et la gestion de leurs projets de logiciels libres.

Il propose quelques outils pour avancer pragmatiquement : il ne prétend pas couvrir ces problématiques de façon exhaustive et n'a pas vocation à être un référentiel juridique.

## Dans quels cas ne pas publier
Tous les codes sources, documents ou données ne peuvent être publiés ou communiqués. Par exemple, on ne peut pas communiquer ou publier des éléments qui pourraient porter atteinte à la sûreté de l'Etat, à la sécurité publique, à la sécurité des personnes ou à la sécurité des systèmes d'information des administrations.

La liste des exceptions est listée dans l'[article L311-5 du Code des relations entre le public et l'administration](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367708).

**Si vous avez le moindre doute, prenez contact avec votre hiérarchie et Etalab, ne communiquez ou ne publiez rien !**

## Choisir une licence libre pour vos codes sources
Le sujet des licences peut paraître déconcertant. Choisir une licence adéquate permet à un utilisateur d'utiliser, étudier, copier et modifier le logiciel publié. Pour mieux vous aider à comprendre les licences libres et leurs familles, vous pouvez vous référer à une [page dédiée](./opensource-licences.md).

### Les licences autorisées pour l'administration publique et les points de contact

Etalab publie [la liste des licences autorisées](https://www.data.gouv.fr/fr/licences) pour les données publiques et les codes sources produits et publiés par les administrations publiques.

Si vous avez des questions sur les licences de vos données publiques, contactez [Romain Talès](mailto:romain.tales@modernisation.gouv.fr), référent open data à Etalab.

Si vous avez des questions sur les licences de votre projet logiciel, contactez [Bastien Guerry](mailto:opensource@data.gouv.fr), référent logiciels libres à Etalab.

## Où publier son code ?
Certaines administrations publiques possèdent déjà des comptes d'organisation sur des plateformes comme GitHub ou Gitlab. Vous pouvez retrouver [cette liste sur un répertoire de la DINSIC](https://github.com/DISIC/politique-de-contribution-open-source/blob/master/comptes-organismes-publics). Vous pouvez vous rapprocher de la personne responsable de l'organisation de votre administration pour être ajouté à cette organisation.

Si votre administration possède déjà une organisation, publiez en priorité vos codes sources sur cette organisation. Sinon, entamez la discussion au sein de votre administration pour créer une organisation au nom de votre administration. Enfin, le programme EIG possède l'organisation [entrepreneur-interet-general sur GitHub](https://github.com/entrepreneur-interet-general) où vous pouvez publier vos codes sources.

## Bien communiquer autour de votre code

### Soyez clair sur la maintenance

- Qui est mainteneur (le nom d'une personne et une adresse e-mail).
- Si la maintenance est *passive* (vous répondez aux questions et aux demandes d'amélioration mais vous ne travaillez pas activement sur le code) ou *active* (vous travaillez activement sur le code).

### Trouvez un nom adéquat pour votre logiciel

Éviter les noms génériques: "app", "donnees", etc.

### Ajoutez les informations essentielles à vos dépôts de code

- Une description claire en anglais ou en français
- Des tags (au moins #entrepreneur-interet-general #eig-2019 #votre-defi)
- Un lien vers un site web s'il y en a un
- Un fichier README en anglais si votre logiciel a vocation à pouvoir être utilisés par des personnes ne parlant pas le français (comme une bibliothèque générique par exemple), en français sinon
- Un fichier LICENSE avec le texte de la licence
- Un fichier CONTRIBUTING en anglais qui explique comment contribuer

### Allez droit au but dans votre fichier README

- L'auteur `© [Votre administration], [Vous]`
- Une façon de tester le logiciel
- Un point de contact avec le mainteneur
- Une indication des contributions acceptées
- La licence libre utilisée
- Pour EIG : une mention finale "Projet développé dans le cadre du programme « Entrepreneurs d'intérêt général »" avec un lien vers le [site du programme](https://entrepreneur-interet-general.etalab.gouv.fr/).

### Guider les contributeurs sur GitHub

Sur GitHub, vous pouvez ajouter un fichier `ISSUE_TEMPLATE` dont le contenu sera inséré dans les nouveaux tickets ("issues") ouverts, et `PULL_REQUEST_TEMPLATE` pour les *pull requests*.

Vous trouverez de la documentation [ici](https://help.github.com/articles/helping-people-contribute-to-your-project/).

### Rédigez une documentation utile

- Avez-vous une documentation ?
- Votre documentation est-elle rédigée en anglais ?
- Avez-vous des spécifications ou un cahier des charges ?
- Avez-vous une documentation orientée utilisateur ?
- Avez-vous une documentation orientée développeur ?
- Votre documentation explique-t-elle comment contribuer ?
- Votre documentation est-elle accessible sous des formats ouverts ?
- Analysez-vous les visites du site web de votre documentation ?
- Votre documentation est-elle publiée sur un site web ?
- Les noms de vos variables/fonctions sont-ils parlants ?
- Avez-vous des docstrings dans vos fonctions/variables ?
- Avez-vous des commentaires dans votre code ?
- Générez-vous de la documentation à partir des commentaires et/ou des docstrings de votre code ?
- Votre documentation est-elle éditée sous un système de gestion de versions ?
- Votre documentation indique-t-elle comment signaler une erreur ?
- Avez-vous testé votre documentation auprès des utilisateurs ?
- Votre documentation est-elle publiée sous licence libre ?
- Votre documentation contient-elle une section de remerciements ?
- Votre documentation contient-elle une section sur l'historique du projet ?

## Impliquer des utilisateurs et contributeurs

Il ne suffit pas de publier un logiciel sous licence libre pour en faire un « bien commun » : il faut aussi animer son développement et mobiliser une communauté de contributeurs.

### Des degrés d'ouverture des projets libres

Ci-dessous un tableau pour présenter différents « degrés » d'ouverture
de projets libres :

<table>
 <thead>
  <tr>
   <th>Degré</th>
   <th>Publié</th>
   <th>Licence libre</th>
   <th>Maintenance</th>
   <th>Versioning</th>
   <th>README</th>
   <th>Bug tracker</th>
   <th>Packaging</th>
   <th>Contribution</th>
   <th>Tests</th>
   <th>Documentation</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>-1</td>
   <td>Non</td>
   <td>?</td>
   <td>?</td>
   <td>?</td>
   <td>?</td>
   <td>?</td>
   <td>?</td>
   <td>?</td>
   <td>?</td>
   <td>?</td>
  </tr>
  <tr>
   <td>0</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>1</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>2</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>3</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>4</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>5</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>6</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>7</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td></td>
  </tr>
  <tr>
   <td>8</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

- **Publié :** votre logiciel est disponible quelque part en ligne, sans authentification ni barrière à l'accès
- **Licence libre :** la licence libre de votre logiciel est clairement indiquée
- **Maintenance :** on sait si la maintenance est active et qui la gère
- **Versioning :** le code est publié via un système de gestion de version (Git)
- **README :** votre dépôt contient un fichier README en anglais ou en français
- **Bug tracker :** vous utilisez un système de remontée et de suivi de bugs public
- **Packaging :** votre logiciel peut être installé facilement
- **Contribution :** vous indiquez clairement comment contribuer
- **Test :** votre logiciel contient une suite de tests unitaires
- **Documentation :** vous maintenez la documentation de votre logiciel


### Des règles de bonne conduite au sein d'un projet libre

Des règles simples, claires et explicites vous aident à maintenir une collaboration respectueuse et constructive au sein de votre projet.

Voir le <https://www.contributor-covenant.org> pour un exemple.

## Pourquoi ouvrir son code ?

- Pour **respecter la loi** pour une République Numérique.

- Pour être **transparent** : par exemple, si le code de votre administration met en œuvre un algorithme au sujet duquel le citoyen est en droit de demander des explications.

- Pour **contribuer aux biens communs numériques** : tous les systèmes d'information reposent directement ou indirectement sur des logiciels libres : en ouvrant son code, l'administration participe à cette mise en commun du code.

- Pour **trouver des testeurs** : en ouvrant votre code et en le rendant facile à installer, vous multipliez les possibilités de le tester.

- Pour **impliquer des développeurs extérieurs** : si vous allez au-delà de la simple mise à disposition du code sous licence libre et vous mobilisez pour construire une communauté, vous pourrez bénéficier de contributions extérieures.

- Pour **améliorer votre code** : coder « *in the open* » est une façon de se contraindre à adopter des bonnes pratiques qui touchent à la fois la technique (structurer son code, le tester) et la communication (écrire une documentation, répondre aux questions des utilisateurs, etc.)

## Les réticences à surmonter pour l'ouverture

- **« Nous allons nous faire pirater notre serveur »** Publier le code source d'une application web va permettre à d'autres de la tester et de faire remonter les éventuels problèmes de sécurité.
- **« Nous allons montrer du code sale »** Oui. Cela vous incitera à le nettoyer.
- **« Ouvrir le code va nous donner plus de travail »** Non si l'ouverture correspond au « degré zéro » de l'ouverture, à savoir la simple mise à disposition sous licence libre. Oui si votre stratégie d'ouverture implique un degré supplémentaire, avec une maintenance active.
- **« Nous allons exposer des problèmes de sécurité »** Oui, cela permet de mieux les corriger.
- **« Notre code est inutile sans certains paramètres »** Dans ce cas, les utilisateurs pourront toujours vérifier que votre code fait bien ce qu'il est supposer faire, avec ou sans la connaissance des paramètres.
- **« Nous allons exposer des données confidentielles »** Au moment de publier le code source de votre application, veillez à ne pas y laisser traîner de mots de passe ou de clefs secrètes.
- **« Nous ne pourrons plus breveter notre logiciel »** Il n'est pas possible de breveter des logiciels en Europe.
- **« Nous ne pourrons plus exploiter commercialement notre code »** Vous ne pourrez pas faire reposer votre modèle de financement sur la vente d'un logiciel fermé mais il existe de nombreux modèles économiques autour du logiciel libre.

Les réticences les plus fréquentes portent sur les problèmes de sécurité et les problèmes d'exploitation commerciale.

## Foire aux questions

- **Suis-je obligé de publier mon code source ?** Si vous êtes une administration, que votre code source ne rentre pas dans [la liste des exceptions](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000031366350&idArticle=LEGIARTI000031367708) et que vous détenez les droits d’auteur d’une application que vous développez ou faites développer, oui.
- **Je travaille dans une structure avec des habilitations de défense ou avec des missions sensibles, je ne peux rien publier ?** Non, vous pouvez communiquer ou publier tout ce qui est autorisé par la loi. Ainsi, si vous développez par exemple une bibliothèque générique d'un langage de programmation, il n'y a vraisemblablement pas de problème à la publier en ligne. Toutefois, il est nécessaire d'avoir l'accord de votre hiérarchie. Etalab peut vous conseiller sur la possibilité de publier des documents.
- **Où dois-je publier mon code source ?** En tant qu’EIG, vous avez plusieurs possibilités, à considérer dans l’ordre : (1) le compte d’organisation (sur GitHub ou ailleurs) de votre administration ; (2) le compte GitHub du programme [Entrepreneurs d'intérêt général](http://github.com/entrepreneur-interet-general) ; (3) n’importe quel autre compte d’organisation ou personnel.
- **Comment gérer les versions de mon logiciel ?** Vous pouvez utiliser la [gestion sémantique de version](https://semver.org/lang/fr/) ou tout autre système permettant de bien communiquer vos progrès avec vos utilisateurs.
- **Qui dois-je indiquer comme auteur du logiciel ?** Dans le README, vous devez indiquer `© [Votre administration], [Vous]`.
- **Où publier la licence d’un logiciel ?** Dans un dépôt, vous indiquez la licence dans le README et vous ajoutez la licence dans un fichier LICENSE à la racine du dépôt.
- **Où trouver la licence d’un logiciel ?** En général, dans un fichier LICENSE à la racine du dépôt.
- **Sous quelle licence dois-je publier la documentation ?** Vous devez la publier sous [Licence Ouverte 2.0](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf).
- **Sous quelle licence dois-je publier les graphismes de mon logiciel:** Vous devez les publier sous [Licence Ouverte 2.0](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf).
- **Puis-je modifier un logiciel sous copyleft, l’améliorer sur ma machine et ne pas publier mes améliorations ?** Oui.
- **Puis-je utiliser une licence qui n’est pas dans [les licences autorisées](https://www.data.gouv.fr/fr/licences) par décret ?** Oui mais vous devez faire une demande d’homologation de la licence envisagée auprès de `homologation.licence@data.gouv.fr`
- **Puis-je publier des contenus « libres de droits » ?** Non, « libre de droits » ne signifie rien.  Vos contenus sont soit sous droit d’auteur classique (la situation par défaut), soit sous licence libre.
- **Que signifie le plus dans GNU GPLv3+ ?** Il signifie « or later », « ou version ultérieure ».  Quand vous placez un logiciel sous licence GNU GPLv3+, tout réutilisateur peut obéir aux conditions posées par la GNU GPLv3, GNU GPLv4, etc.  Ce n’est que théorique pour l’instant, la dernière version publiée de la GPL est la v3.
- **Puis-je intégrer des éléments « libres de droits » dans mon logiciel ?** « Libre de droits » ne signifie rien.  Il y a toujours des droits associés aux contenus, que ces droits soient mentionnés ou non.  Un contenu sous licence libre n’est jamais « libre de droits ».  Donc non, vous ne pouvez pas réutiliser des contenus « libres de droits », vous devez d’abord vous renseigner sur les droits d’auteur associés aux contenus que vous voulez utiliser.
- **Est-ce qu’un logiciel peut changer de licence en cours de route ?** Oui.  Mais les versions antérieures publiées sous une licence libre X restent toujours réutilisables sous cette licence X.
- **Peut-on donner le choix aux utilisateurs de la licence ?** Oui.  Certains logiciels sont publiés sous deux licences (pratique nommée *dual licensing*).  Cela signifie que l’auteur du logiciel autorise les réutilisations sous l’une ou l’autre des licences. Par exemple, vous publiez votre logiciel en licence GPLv3+.  Cette licence impose des restrictions sur la redistribution de tout logiciel intégrant le vôtre.  Une entreprise pourrait vouloir intégrer votre logiciel dans un produit commercial, mais la GPLv3+ l’en empêche.  Vous publiez donc votre logiciel sous une licence GPLv3+ **et** une licence Apache 2.0, que vous vendez à l’entreprise, qui achète ainsi le droit de redistribuer votre logiciel dans son logiciel propriétaire.
- **Qu’est-ce que le « copyleft de compromis » ?** La Free Software Foundation a publié une licence nommée Lesser GNU Public License.  C’est une licence qui permet de redistribuer une bibliothèque logicielle dans un logiciel propriétaire.  Elle lève certaines restrictions imposées par la GPL classique, qui ne permet pas cela.  On appelle parfois cela le « copyleft faible » (vs le copyleft « fort » de la GPL.)

## Quelques ressources utiles


### Du côté de la mission Etalab

- La liste des licences libres pour l'administration : <https://www.data.gouv.fr/fr/licences>
- Un guide d'ouverture des codes sources publics : <https://github.com/etalab/ouverture-des-codes-sources-publics>
- La politique de contribution Open Source : <https://www.numerique.gouv.fr/publications/politique-logiciel-libre/>

### Ressources extérieures

- Des guides sur l'open source en général : <https://opensource.guide>
- [Open source Guidance](https://www.gov.uk/government/publications/open-source-guidance) : par le gouvernement britannique
- [18F Open Source Style Guide](https://open-source-guide.18f.gov/) : par l'agence états-unienne 18F
- Une explication des licences Creative Commons dans [cette présentation](https://www.slideshare.net/bzg/ressources-libres-pour-lducation-lesquelles-et-pourquoi-15552125) sur les ressources pédagogiques libres.
- [Sept idées reçues sur le logiciel libre](https://bzg.fr/sept-idees-recues-sur-le-logiciel-libre.html)
