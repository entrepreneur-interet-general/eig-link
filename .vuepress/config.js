sidebar = [
   {
     title: 'La Promotion',
     collapsable: true,
     children: [
       'accompagnement',
       'planning',
       'bootcamp',
       'outils-promotion',
       'tiers-lieu',
       'communication-externe',
     ]
   },
  {
    title: 'Programme EIG',
    collapsable: true,
    children: [
      'programme-eig',
      'ecosysteme',
      'ingenerie-programme',
      'reseau-eig',
    ]
  },
    {
    title: 'Ressources',
    collapsable: true,
    children: [
      'referentiels',
      'design',
      'accessibilite',
      'developpement',
      'opensource-licences',
      'opendata',
      'algorithmes-publics',
      'securite',
      'travailler-distance',
      'ecriture-inclusive',
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
      'perennisation-defis',
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
    logo: '/images/Logo EIG 2019.png',
    docsDir: ".",
    nav: []
  }
}
