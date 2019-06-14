# Infrastructure

[[toc]]

Le programme EIG propose des ressources pour que les EIG, quel que soit leur environnement de travail, accède aux outils dont ils ont besoin. Ils disposent notamment :

- d'un serveur pour déployer des containers et des machines virtuelles
- d'un serveur d'applications web déployables via Cloudron
- d'un serveur d'applications R Shiny
- d'un accès à des comptes AWS

## Serveur Proxmox VE

Voir la [documentation détaillée](serveur.md).

## Serveur d'applications web via Cloudron

[Cloudron](https://cloudron.io) est un logiciel libre permettant de transformer un serveur GNU/Linux en service de déploiement d'applications web à la volée.

Etalab dispose d'un compte Cloudron sur une machine légère (2 Go) et propose aux EIG qui en aurait besoin de déployer des applications dans [la liste des applications disponibles](https://cloudron.io/store/index.html) via Cloudron.

Si vous souhaitez déployer une application via Cloudron, contactez les EIG Link.

Le serveur cloudron est sauvegardé tous les jours par un envoi de l'archive sur une instance AWS S3.

## Applications R sur `shiny.eig-forever.org`

`shiny.eig-forever.org` est un serveur dédié aux applications développées en `R`.

Si vous souhaitez déployer une application R, contactez les EIG Link.

Cette instance de 2 Go est sauvegardée par *snapshot* une fois par jour.

## Amazon Web Services (AWS)

Amazon Web Service (AWS) propose toute une gamme d'outils pour les développeurs. Le programme EIG dispose de crédits limités. Si vous avez besoin d'un service AWS, contactez les EIG Link qui vous créeront une instance `IAM`.


## Synthèse des services

| Fournisseur | URL | RAM | Service | Statut | Description | Backup |
|---|---|---|---|---|---|---|
| OVH | eig.etalab.gouv.fr:8006 | 32 Go | Proxmox| Prod | Déploiement containers / VM | Copie manuelle 1j => eig-apps.org |
| DigitalOcean | eig-apps.org| 2 Go | Cloudron | Test | Déploiement applications web | 1j => S3 |
| Vultr | shiny.eig-forever.org | 1 Go| Shiny serveur | Test| Déploiement applications R | 1j (snapshot)|
| AWS | | | EC2| Dépannage ad hoc | Amazon Web Services| |
