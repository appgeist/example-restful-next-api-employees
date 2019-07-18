module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    [
      'transform-imports',
      {
        'mdi-material-ui': { transform: 'mdi-material-ui/${member}', preventFullImport: true },
        lodash: { transform: 'lodash/${member}', preventFullImport: true }
      }
    ],
    ['root-import', { rootPathPrefix: '~', rootPathSuffix: '.' }]
  ],
  presets: ['next/babel']
};
