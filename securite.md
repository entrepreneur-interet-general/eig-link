# Sécurité des produits

Les projets EIG sont le plus souvent exposés à un niveau de risque très faible lors de la mise en service initiale : il s'agit en effet de valider la pertinence du produit en le testant auprès d'un petit nombre d'usagers, puis de procéder à un déploiement par vagues successives.

Pour une équipe dont l’objectif est de livrer rapidement de la valeur à ses
utilisateurs, une évaluation pertinente du risque est obtenue en considérant simultanément le nombre d’usagers et le risque encouru par chacun,
pour déterminer une exposition globale au risque. Ainsi, la prise en compte des enjeux de sécurité par une équipe agile se veut continue (tout au long de la construction et de l’amélioration du service) et pragmatique puisqu’elle priorise les efforts en fonction du risque réel et assume l’existence de risques résiduels.

## Les bases de l'appréciation des risques
On protège la valeur métier par l'identification de risques et l'application de mesures.

Un *besoin de sécurité* est un niveau d'exigences opérationnelles relatives à un élément de *valeur métier* pour un critère de sécurité donné :
- **Disponibilité** : propriété d'accessibilité au moment voulu par les personnes autorisées ;
- **Intégrité** : les données sont exactes et complètes ;
- **Confidentialité** : les informations ne sont divulguées qu'aux personnes autorisées ;
- **Preuve** : les traces de l'activité du système sont opposables en cas de contestation.

:::tip Exemple
L’application « Le TAXI », c’est la garantie d’un chauffeur professionnel (intégrité) et d’applications agréées respectueuses de la vie privée (confidentialité).
:::

L’identification des mesures de sécurité à appliquer résulte d’un processus d’*identification et d’évaluation des risques*.

:::tip Exemple
En tant qu’attaquant, je divulgue des données personnelles que j’ai récupérées en compromettant la base de données de l’application utilisateur.
:::

La mise en place de *mesures de sécurité* lors du développement du produit va permettre  de répondre à ces besoins de sécurité.

:::tip Exemple
L’utilisation de HTTPS entre l’application mobile du client et le serveur central garantit l’authentification et la confidentialité de l’échange sur Internet.
:::

## L'atelier d'analyse de risque
> Cette section est un résumé de la méthode proposée par l'ANSSI que vous pouvez consulter dans les ressources.

Pour les équipes agiles, l’équipe doit se réunir, à intervalles réguliers, pour
discuter des risques numériques qui peuvent impacter les usagers de son service ou produit et décider de la meilleure manière de traiter ces risques.

Le périmètre est fixé : on inclus ce qui engage la responsabilité de l’équipe et de sa hiérarchie, on exclut ce qui relève éventuellement d’autres acteurs.

Pour amorcer un atelier, vous pouvez proposer le cadrage suivant : *Un mois après le lancement du produit, vous découvrez avec horreur un article dans la presse nationale qui fait état d’une énorme faille de sécurité exploitée avec succès. Quels scénarios de menaces possibles vous viennent à l’esprit ?* Cet exercice permet de concentrer l’attention des participants sur les enjeux et besoins de sécurité les plus importants tout en amorçant la discussion.

### 

## Ressources
- [Politique de sécurité de l'Incubateur de Services Numériques de l'État français - beta.gouv.fr](https://github.com/betagouv/beta.ssi)
- [Agilité et sécurité numériques - ANSSI](https://www.ssi.gouv.fr/uploads/2018/11/guide-securite-numerique-agile-anssi-pa-v1.pdf)
