# Machines virtuelles

[[toc]]

Le serveur EIG a été installé par Etalab. C’est un serveur de 32 Go de RAM acheté auprès d’OVH avec Proxmox VE.

Il sert à :

- héberger des prototypes d’application ;
- avoir un peu de puissance de calcul à sa disposition.

Il **n’a pas** vocation à :

- héberger des applications des défis sur le long terme ;
- faire d’énorme calculs (nous n’avons que 32 Go à partager).

## Systèmes d’exploitation disponibles

Pour les containers :

- debian-9.0-standard\_9.3.1\_amd64.tar.gz
- ubuntu-16.04-standard\_16.04-1\_amd64.tar.gz
- ubuntu-18.04-standard\_18.04-2\_amd64.tar.gz

Pour les VM :

- debian-9.3.0-amd64-netinst.iso
- ubuntu-16.04.3-server-amd64.iso

## Création de ressources

### Créer un container (CT)

Voir [cette vidéo](https://vimeo.com/256433385).

Les étapes à ne pas manquer sont :

- la configuration de l’adresse IP: 192.168.0.XXX/24 avec XXX qui est l’identifiant du container donné par Proxmox
- la configuration de la passerelle: 192.168.0.254
- l’utilisation du bridge `vmbr1`


### Créer une machine virtuelle (VM)

Laissez-vous guider par Proxmox.

Les étapes à ne pas manquer sont :

- l’utilisation du bridge `vmbr1` dans la configuration de la VM dans Proxmox
- la configuration de l’adresse IP: 192.168.0.XXX/24 au moment de la configuration de votre système
- l’utilisation de 9.9.9.9 comme serveur de nom DNS

### Associer un sous-domaine à un CT/VM

Demander à Antoine en indiquant :

- le sous-domaine que vous voulez utiliser ;
- l’adresse IP du CT ou de la VM que vous voulez utiliser ;
- le port de ce CT ou de cette VM que vous voulez atteindre.

Par exemple :

    Hello Antoine,
    
    je voudrais que le sous-domaine blabla[.eig-forever.org] renvoie
    vers le port 8080 de ma VM 192.168.0.107.

Voici un [exemple de configuration nginx](https://gist.github.com/bzg/b607e2e3cad5d722c9d496aca9aa4acf) pour que le serveur de calcul redirige vers un service web hébergé sur un container ou une VM.

Si vous avez besoin qu’un port du serveur de calcul (disons le port `10222`) redirige vers un port du container ou de la VM (disons le port `22`), demander à Antoine qu’il fasse cette redirection en indiquant l’adresse IP de votre container/VM.

Voici un exemple de règle `iptables` pour la redirection:

    iptables -t nat -A PREROUTING -p tcp -d 37.187.137.47 --dport 10222 -i vmbr0 -j DNAT --to-destination 192.168.0.102:22

### Faire tourner Docker dans le container
Il faut modifier quelques lignes de configuration pour le container dans le fichier `/etc/pve/lxc/<ctid>.conf`.

```
lxc.apparmor.profile: unconfined
lxc.cgroup.devices.allow: a
lxc.cap.drop:
```

## Connexion à un CT/VM

1. Demandez à Antoine de vous créer un utilisateur sur la machine `eig.etalab.gouv.fr`
2. Créez votre container ou votre VM (ex: CT identifié par "101")
3. Sur votre machine locale, éditez le fichier ~/.ssh/config :
    ```bash
    Host eig101
       user root
       ProxyCommand ssh robert@eig.etalab.gouv.fr nc -w 1 192.168.0.101 22
    ```
   Cette configuration vous permettra de taper `~$ ssh eig101` dans un terminal et d’être connecté en tant que `root` à votre container, depuis votre connexion sur la machine `eig.etalab.gouv.fr` sous l’identifiant `robert`.
4. Vous pouvez aussi ajouter une clef publique de votre machine locale à l’utilisateur `root` du container et à l’utilisateur `robert` de la machine `eig.etalab.gouv.fr` pour ne pas avoir à taper deux mots de passe à chaque fois.

### Utiliser `sshfs` pour monter un répertoire distant

Créer un dossier sur sa machine :

    ~$ mkdir serveur_eig101

Monter le répertoire distant :

    ~$ sshfs eig101:/home/ serveur_eig101/


## Sauvegardes

### Sauvegarde de Nextcloud

Le fichier `/root/install/src/nextcloud/mariadb_docker_backup.sh` contient le script de sauvegarde de l'instance Nextcloud dans le répertoire `/root/install/src/nextcloud/backups/` et copie les fichiers dans la machine externe `root@eig-apps.org:/root/backups/`.


### Sauvegardes des VM

Les VM sont sauvegardées sur ce serveur via Proxmox.

Il n'y a pas de copie des sauvegardes des VMs sur une autre machine.

Chaque utilisateur d'une VM est responsable de sauvegarder ses données sensibles sur d'autres machines.

### Fichiers /etc
 `etckeeper` est utilisé pour la sauvegarde de /etc
