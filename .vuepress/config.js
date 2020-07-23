sidebar = [
   {
     title: 'La Promotion',
     collapsable: true,
     children: [
       'accompagnement',
       'planning',
       'outils-promotion',
       'tiers-lieu'
     ]
   },
  {
    title: 'Programme EIG',
    collapsable: true,
    children: [
      'programme-eig',
      'ecosysteme',
      'ingenerie-programme',
      'reseau-eig'
    ]
  },
    {
    title: 'Ressources',
    collapsable: true,
    children: [
      'referentiels',
      'design',
      'developpement',
      'opensource-licences',
      'opendata',
      'algorithmes-publics',
      'securite'
    ]
  },
     {
     title: 'Bonnes pratiques',
     collapsable: true,
     children: [
      'accueil-eig',
      'preparation-defi',
      'mesure-impact',
      'concevoir',
      'prototyper',
      'ouvrir-publier',
      'communication',
      'documentation-defis',
      'perennisation-defis'
     ]
   },
]

module.exports = {
  theme: 'gouv-fr',
  title: 'Documentation EIG',
  description: "Cette documentation agrège les détails et ressources pratiques du programme Entrepreneurs d'Intérêt Général à destination de la communauté EIG",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
    logo: '/images/logo-eig.svg',
    docsDir: ".",
    repo: 'entrepreneur-interet-general/dig',
    repoLabel: 'Dépôt Git',
    editLinks: true,
    editLinkText: 'Modifier cette page',
    nav: [
      { text: 'Site web', link: 'https://entrepreneur-interet-general.etalab.gouv.fr' },
    ]
  }
}
