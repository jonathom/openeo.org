const apiVersion = '1.0.1';
const defaultVersion = 0;
const versions = [
  {
    folder: '1.0',
    path: '/documentation/1.0/',
    title: 'v1.0',
    apiTag: '1.0.1',
    processesTag: '1.0.0',
    apiVersions: [
      '1.0.0',
      '1.0.1'
    ],
    userNav: [
      {text: 'Intoduction', link: 'index.html'},
      {text: 'Glossary', link: 'glossary.html'},
      {text: 'Getting Started', items: [
        {text: 'Datacubes', link: 'datacubes.html'},
        {text: 'JavaScript', link: 'javascript/index.html'},
        {text: 'Python', link: 'python/index.html'},
        {text: 'QGIS', link: 'qgis/index.html'},
        {text: 'R', link: 'r/index.html'}
      ]},
      {text: 'Processes', link: 'processes.html'},
      {text: 'Cookbook', link: 'cookbook/index.html'},
      {text: 'Authentication', link: 'authentication.html'},
      {text: 'UDFs', link: 'udfs.html'}
    ],
    devNav: [
      {text: 'Introduction', link: 'developers/index.html'},
      {text: 'Glossary', link: 'glossary.html'},
      {text: 'Architecture', link: 'developers/arch.html'},
      {text: 'Service Providers', items: [
          {text: 'Getting Started', link: 'developers/backends/getting-started.html'}
      ]},
      {text: 'Client Developers', items: [
          {text: 'Getting Started', link: 'developers/clients/getting-started.html'},
          {text: 'Library Guidelines', link: 'developers/clients/library-guidelines.html'}
      ]},
      {text: 'API', link: 'developers/api/reference.html'},
      {text: 'Processes', link: 'processes.html'},
      {text: 'Error Codes', link: 'developers/api/errors.html'},
      {text: 'Authentication', link: 'authentication.html'},
      {text: 'UDFs', link: 'udfs.html'}
    ]
  },
  {
    folder: '0.4',
    path: '/documentation/0.4/',
    title: 'v0.4',
    apiTag: '0.4.2',
    apiFormat: 'json',
    processesTag: '0.4.2',
    apiVersions: [
      '0.4.0',
      '0.4.1',
      '0.4.2'
    ],
    userNav: [
      {text: 'Getting Started', link: 'getting-started.html'},
      {text: 'Glossary', link: 'glossary.html'},
      {text: 'Processes', link: 'processes.html'},
      {text: 'UDFs', link: 'udfs.html'}
    ],
    devNav: [
      {text: 'Introduction', link: 'developers/index.html'},
      {text: 'Glossary', link: 'glossary.html'},
      {text: 'Architecture', link: 'developers/arch.html'},
      {text: 'Service Providers', items: [
          {text: 'Getting Started', link: 'developers/backends/getting-started.html'},
          {text: 'UDFs', link: 'developers/backends/udfs.html'}
      ]},
      {text: 'Client Developers', items: [
          {text: 'Getting Started', link: 'developers/clients/getting-started.html'},
          {text: 'Library Guidelines', link: 'developers/clients/library-guidelines.html'}
      ]},
      {text: 'API', items: [
          {text: 'Specification', link: 'developers/api/reference.html'},
          {text: 'Further documentation', link: 'developers/api/index.html'}
      ]},
      {text: 'Processes', link: 'processes.html'},
      {text: 'Error Codes', link: 'developers/api/errors.html'},
      {text: 'Examples', link: 'developers/examples/'}
    ]
  }
];

module.exports = {
  title: 'openEO',
  description: 'openEO develops an open API to connect various clients to big EO cloud back-ends in a simple and unified way.',
  themeConfig: {
    apiVersion: apiVersion,
    versions: versions,
    defaultVersion: defaultVersion,
    docPath: versions[defaultVersion].path,
    logo: '/images/openeo_navbar_logo.png',
    editLinks: true,
    docsRepo: 'Open-EO/openeo.org',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'News', link: '/news/' },
      { text: 'Meet us', link: '/meet-us.html' },
      { text: 'Software', link: '/software.html' },
      { text: 'Hub', link: 'https://hub.openeo.org' },
      { text: 'Platform', link: '/platform/' },
      { text: 'User Documentation', userNav: true, items: [] },
      { text: 'Developers', devNav: true, items: [] },
      { text: 'PSC', link: '/psc.html' },
      { text: 'Contact', link: '/contact.html' }
    ],
    sidebar: 'auto'
  },
  plugins: [
    '@vuepress/register-components',
    'check-md',
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    [
      'code-switcher',
      {
        groups: {
          default: {py: 'Python', r: 'R', js: 'JavaScript'},
        }
      }
    ],
    ['vuepress-plugin-code-copy', true]
  ],
  serviceWorker: true,
  chainWebpack: (config, isServer) => {
    config.module
      .rule('js')
        .test(/\.js$/)
        .exclude.add(filePath => {
          // transpile js-commons
          if (/@openeo\/js-commons/.test(filePath)) {
            return false
          }
          return true;
        }).end()
  }
};
