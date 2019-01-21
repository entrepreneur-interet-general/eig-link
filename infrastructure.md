Le programme EIG propose des ressources pour que les EIG, quel que soit leur environnement de travail, accède aux outils dont ils ont besoin.  Ils disposent notamment :

- d'un serveur pour déployer des containers et des machines virtuelles
- d'un serveur d'applications web déployables via Cloudron
- d'un serveur de déploiement d'application à la volée
- d'un serveur d'applications R Shiny
- d'un accès à des comptes AWS


# Serveur Proxmox VE

Voir la [documentation détaillée](serveur.md).


# Serveur d'applications web via Cloudron

[Cloudron](https://cloudron.io) est un logiciel libre permettant de transformer un serveur GNU/Linux en service de déploiement d'applications web à la volée.

Etalab dispose d'un compte Cloudron sur une machine légère (2GO) et propose aux EIG qui en aurait besoin de déployer des applications dans [la liste des applications disponibles](https://cloudron.io/store/index.html) via Cloudron.

Si vous souhaitez déployer une application via Cloudron, envoyez un mail aux EIG Link.

Le serveur cloudron est sauvegardé tous les jours par un envoi de l'archive sur une instance AWS S3.


# Applications R sur `shiny.eig-forever.org`

`shiny.eig-forever.org` est un serveur d'applications développées en `R`.

Si vous souhaitez déployer une application R, envoyez un mail aux EIG Link.

Cette instance de 2GO est sauvegardée par *snapshot* une fois par jour.


# Amazon Web Services (AWS)

Amazon Web Service (AWS) propose toute une gamme d'outils pour les développeurs.  Le programme EIG dispose de crédits limités.  Si vous avez besoin d'un service AWS, envoyez un mail aux EIG Link qui vous créeront une instance `IAM`.


# Synthèse des services

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />
<col  class="org-left" />
<col  class="org-left" />
<col  class="org-left" />
<col  class="org-left" />
<col  class="org-left" />
<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">Fournisseur</th>
<th scope="col" class="org-left">URL</th>
<th scope="col" class="org-left">RAM</th>
<th scope="col" class="org-left">Service</th>
<th scope="col" class="org-left">Statut</th>
<th scope="col" class="org-left">Description</th>
<th scope="col" class="org-left">Backup</th>
</tr>
</thead>

<tbody>
<tr>
<td class="org-left">OVH</td>
<td class="org-left">eig.etalab.gouv.fr:8006</td>
<td class="org-left">32GO</td>
<td class="org-left">Proxmox</td>
<td class="org-left">Prod</td>
<td class="org-left">Déploiement containers / VM</td>
<td class="org-left">Copie manuelle 1j => eig-apps.org</td>
</tr>


<tr>
<td class="org-left">DigitalOcean</td>
<td class="org-left">eig-apps.org</td>
<td class="org-left">2GO</td>
<td class="org-left">Cloudron</td>
<td class="org-left">Test</td>
<td class="org-left">Déploiement applications web</td>
<td class="org-left">1j => S3</td>
</tr>


<tr>
<td class="org-left">Vultr</td>
<td class="org-left">shiny.eig-forever.org</td>
<td class="org-left">1GO</td>
<td class="org-left">Shiny serveur</td>
<td class="org-left">Test</td>
<td class="org-left">Déploiement applications R</td>
<td class="org-left">1j (snapshot)</td>
</tr>


<tr>
<td class="org-left">AWS</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left">EC2</td>
<td class="org-left">Dépannage ad hoc</td>
<td class="org-left">Amazon Web Services</td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>

<tbody>
<tr>
<td class="org-left">Vultr</td>
<td class="org-left">eig-paas.org</td>
<td class="org-left">1GO</td>
<td class="org-left">Dokku</td>
<td class="org-left">Effacé</td>
<td class="org-left">Déploiement à la Heroku</td>
<td class="org-left">1j (snapshot)</td>
</tr>
</tbody>
</table>


# Obsolète


## Déploiement à la Heroku sur `www.eig-paas.org`

[Dokku](http://dokku.viewdocs.io/dokku/) est un logiciel libre permettant de transformer un serveur en service de déploiement d'applications web à la [Heroku](https://www.heroku.com/).

Si vous souhaitez déployer une application sur un sous-domaine de ce serveur (`mon-application.eig-paas.org`), envoyez un mail aux EIG Link.

Cette instance de 1GO est sauvegardée par *snapshot* hebdomadaire.

