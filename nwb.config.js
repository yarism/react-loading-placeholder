module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactLoadingPlaceholder',
      externals: {
        react: 'React'
      }
    }
  }
}
