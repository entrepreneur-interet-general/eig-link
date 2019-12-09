sidebar = [
  {
    title: 'Programme EIG',
    collapsable: true,
    children: [
      'accompagnement',
      'animation',
      'animations-eig',
      'contributions',
    ]
  },
  {
    title: 'Ressources',
    collapsable: true,
    children: [
      'ecosysteme',
      'communication-interne',
      'communication-externe',
      'supports-communication',
      'tiers-lieu',
      'serveur',
      'stack',
      'eig-link',
      'bulloterie',
      'experience-parcours-eig',
    ]
  },
  {
    title: 'Bonnes pratiques',
    collapsable: true,
    children: [
      'opensource',
      'opensource-licences',
      'opendata',
      'securite',
      'mesure-impact',
      'accueil-eig',
      'modele-note-perennisation',
      'checklist_depart',
      'design',
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
  },
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-abbr'))
    }
  }
}
