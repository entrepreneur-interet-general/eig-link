# Sécurité des produits

Les projets EIG sont le plus souvent exposés à un niveau de risque faible lors de la mise en service initiale : il s'agit en effet de valider la pertinence du produit en le testant auprès d'un petit nombre d'usagers, puis de procéder à un déploiement par vagues successives.

Pour une équipe dont l’objectif est de livrer rapidement de la valeur à ses
utilisateurs, une évaluation pertinente du risque est obtenue en considérant simultanément le nombre d’usagers et le risque encouru par chacun,
pour déterminer une exposition globale au risque. Ainsi, la prise en compte des enjeux de sécurité par une équipe agile se veut continue (tout au long de la construction et de l’amélioration du service) et pragmatique puisqu’elle priorise les efforts en fonction du risque réel et assume l’existence de risques résiduels.

## Les bases de l'appréciation des risques
:::danger Principe clé
On protège la valeur métier par l'identification de risques et l'application de mesures.
:::

Un besoin de sécurité est un niveau d'exigences opérationnelles relatives à un élément de valeur métier pour un critère de sécurité donné :
- **Disponibilité** : propriété d'accessibilité au moment voulu par les personnes autorisées ;
- **Intégrité** : les données sont exactes et complètes ;
- **Confidentialité** : les informations ne sont divulguées qu'aux personnes autorisées ;
- **Preuve** : les traces de l'activité du système sont opposables en cas de contestation.

On regroupes ces principes sous l'acronyme DICP.

::: tip Exemple
L’application « Le TAXI », c’est la garantie d’un chauffeur professionnel (intégrité) et d’applications agréées respectueuses de la vie privée (confidentialité).
:::

L’identification des mesures de sécurité à appliquer résulte d’un processus d’identification et d’évaluation des risques.

::: tip Exemple
En tant qu’attaquant, je divulgue des données personnelles que j’ai récupérées en compromettant la base de données de l’application utilisateur.
:::

La mise en place de mesures de sécurité lors du développement du produit va permettre  de répondre à ces besoins de sécurité.

::: tip Exemple
L’utilisation de HTTPS entre l’application mobile du client et le serveur central garantit l’authentification et la confidentialité de l’échange sur Internet.
:::

## Qu'est-ce qu'un risque ?
### Définition

Un risque est un scénario combinant un événement redouté sur une valeur métier et un ou plusieurs scénarios de menaces visant des composants du SI présentant des vulnérabilités. On lui associe une criticité qui correspond à l'estimation de sa gravité et de sa vraisemblance.

### Représentation

Dans une démarche agile, un risque est représenté par :
- la réalisation d’un scénario de menaces
  - provoquant un événement redouté
    - sur une valeur métier ayant
      - des besoins sécurité et
      - des impacts engendrés en cas de non respect de ces besoins,
  - en exploitant une vulnérabilité d’un composant du produit.

::: tip Exemple
En tant qu’attaquant, j’empêche les clients de demander un taxi en inondant le serveur applicatif par une attaque par déni de service (*DoS*). Ceci conduit à un impact préjudiciable sur l’image et la crédibilité du gestionnaire du service, voire une perte de clients.
:::

### Exemples
Chaque besoin de sécurité identifié constitue le point de départ pour
décrire un ou plusieurs événements redoutés susceptibles de compromettre la valeur d’usage.

| Événements redoutés | Impacts métier | Gravité |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------------|
| Le système ne répond pas | Expérience utilisateur dégradée :point_right: perte de clients | Modérée |
| Un opérateur de taxis émet de fausses positions | Qualité de service dégradée :point_right: perte de clients | Modérée |
| Un taxi fait une course d'approche en pure perte | Perte de confiance et d'adhésion des taxis :point_right: désengagement aboutissant à une réduction de l'offre des taxis | Très élevée |

### Actions associées

Un risque peut être traité (mise en place de mesures de sécurité), transféré (assurance, produit complémentaire) ou accepté (résiduel). En dernier recours, un risque peut également être évité (refus ou suspension d’une évolution).

## L'atelier d'analyse de risque
> Cette section est un résumé de la méthode proposée par l'ANSSI que vous pouvez consulter dans [les ressources](#ressources).

Pour les équipes agiles, l’équipe doit se réunir, à intervalles réguliers, pour
discuter des risques numériques qui peuvent impacter les usagers de son service ou produit et décider de la meilleure manière de traiter ces risques.

Le périmètre est fixé : on inclus ce qui engage la responsabilité de l’équipe et de sa hiérarchie, on exclut ce qui relève éventuellement d’autres acteurs.

Pour amorcer un atelier, vous pouvez proposer le cadrage suivant :
>Un mois après le lancement du produit, vous découvrez avec horreur un article dans la presse nationale qui fait état d’une énorme faille de sécurité exploitée avec succès. Quels scénarios de menaces possibles vous viennent à l’esprit ?

Cet exercice permet de concentrer l’attention des participants sur les enjeux et besoins de sécurité les plus importants tout en amorçant la discussion.

### Déroulement de l'atelier
L'atelier se déroule dans les conditions usuelles pour des équipes agiles :
- toute l'équipe est présente, et seulement l'équipe (éventuellement renforcée d'un animateur ou expert sécurité) ;
- la durée est limitée, quitte à programmer plusieurs ateliers ; une durée d'une heure environ est appropriée.

Le support consiste en une feuille au format paperboard ou post-it géant, structurée en canevas, avec les rubriques suivantes :
- Valeurs métier et besoins en sécurité
- Sources de menaces
- Événements redoutés
- Composants SI et leurs vulnérabilités
- Mesures de sécurité existantes
- Scénarios de menace

Chaque participant propose sur un post-it un élément destiné à l'une de ces rubriques. Les post-it sont ajoutés au canevas au fur et à mesure.

#### Valeurs métier
Pour cette rubrique, recenser les principaux processus, fonctions et données sensibles du produit et à identifier et estimer leurs besoins de sécurité (DICP).

#### Sources de menaces
Réfléchir aux origines des risques : qui ou quoi pourrait porter atteinte aux besoins de sécurité exprimés (sources humaines, environnementales, internes, externes…)

#### Événements redoutés
À partir des besoins de sécurité exprimés sur les valeurs métiers, estimer les impacts (sur les missions, sur la sécurité des personnes, financiers, juridiques, sur l'image, sur l'environnement, sur les tiers et autres) en cas de non-respect de ces besoins. Ces impacts associés aux sources de menaces susceptibles d'en être à l'origine permettent de formuler les événements redoutés.

#### Composants SI et leurs vulnérabilités
Prendre connaissance des composants du système d'information, qu'il s'agisse de biens techniques ou non techniques, supports aux valeurs métiers précédemment identifiées. On note que ces composants SI possèdent des vulnérabilités que des sources de menaces pourront exploiter, portant ainsi atteinte aux valeurs métier.

#### Mesures de sécurité existantes
Pour chaque composant SI identifié, il convient de s'interroger sur l'existence de mesures de sécurité déjà existantes ou d'ores et déjà prévues. Ces mesures peuvent être techniques ou non techniques (produit de sécurité logique ou physique, configuration particulière, mesures organisationnelles ou humaines, règles, procédures…).

#### Scénarios de menace
Identifier et estimer les scénarios qui peuvent engendrer les événements redoutés, et ainsi composer des risques. Pour ce faire, sont étudiées les menaces que les sources de menaces peuvent générer et les vulnérabilités exploitables.

### Exemple de résultat d'atelier
Vous pouvez consulter l'analyse de risque de la startup d'État [Le.Taxi](https://github.com/openmaraude/le.taxi/wiki/Analyse-des-risques).

### Exploitation de l'atelier
À l'issue de l'atelier, mettre en évidence les risques qui pèsent sur le produit en confrontant les événements redoutés aux scénarios de menaces. Estimer et évaluer également ces risques et identifier les mesures de sécurité qu'il faudra implémenter pour les traiter. Traiter les risques en spécifiant les mesures de sécurité à mettre en œuvre et en planifiant la mise en œuvre de ces mesures.

Cette étape se traduit par la rédaction et la planification des tâches. Leur implémentation, mise en évidence par des tests automatisés, est priorisée.

## Ressources
Cette page est inspirée des sources suivantes que nous recommandons pour aborder ce sujet plus en détail.

- [Politique de sécurité de l'Incubateur de Services Numériques de l'État français - beta.gouv.fr](https://github.com/betagouv/beta.ssi)
- [Agilité et sécurité numériques - ANSSI](https://www.ssi.gouv.fr/uploads/2018/11/guide-securite-numerique-agile-anssi-pa-v1.pdf)


## Glossaire :
*[DoS]: Denial of Service
*[DICP]: Indicateurs de sécurité des systèmes d'information : Disponibilité, Intégrité, Confidentialité, Preuve.
*[analyse des risques]: Sous-processus de la gestion des risques visant à identifier, analyser et à évaluer les risques.
*[besoin de sécurité]: Définition précise et non ambiguë du niveau d'exigences opérationnelles relatives à une valeur métier pour un critère de sécurité donné (disponibilité, confidentialité, intégrité…).
*[valeur métier]: Information ou processus jugé comme important pour l'organisme. On appréciera ses besoins de sécurité mais pas ses vulnérabilités.
*[événement redouté]: Situation crainte par l'organisme. Il s'exprime par la combinaison des sources de menaces susceptibles d'en être à l'origine, d'une valeur métier, du besoin de sécurité concerné et des impacts potentiels.
*[homologation de sécurité]: Validation par une autorité dite d’homologation, que le niveau de sécurité est conforme aux attentes.
*[impact]: Conséquence directe ou indirecte de l'insatisfaction des besoins de sécurité sur l'organisme et/ou sur son environnement.
*[mesure de sécurité]: Moyen de traiter un risque de sécurité de l'information.
*[risques résiduels]: Risque subsistant après le traitement du risque.
*[scénario de menaces]: Scénario décrivant des modes opératoires. Il combine les sources de menaces susceptibles d'en être à l'origine, un composant du SI, un besoin de sécurité, des menaces et les vulnérabilités exploitables pour qu'elles se réalisent.
*[source de menace]: Chose ou personne à l'origine de menaces.
*[vulnérabilité]: Caractéristique d'un composant du SI qui peut constituer une faiblesse ou une faille au regard de la sécurité des systèmes d'information.
