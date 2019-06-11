sidebar = [
  'animation',
  'accompagnement',
  'communication',
  'liberte-living-lab',
  'serveur',
  {
    title: 'Bonnes pratiques',
    collapsable: true,
    children: [
      ['opensource', "Open source"],
      'opensource-licences',
      'opendata',
      ['accueil-eig', "Accueillir des EIG"]
    ]
  },
]

module.exports = {
  theme: 'gouv-fr',
  title: 'Documentation EIG',
  description: "La documentation interne du programme Entrepreneurs d'Intérêt Général.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
    docsDir: ".",
    repo: 'entrepreneur-interet-general/eig-link',
    repoLabel: 'Dépôt Git',
    editLinks: true,
    editLinkText: 'Modifier cette page',
    nav: [
      { text: 'Site web', link: 'https://entrepreneur-interet-general.etalab.gouv.fr' },
    ]
  }
}
