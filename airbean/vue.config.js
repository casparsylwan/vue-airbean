module.exports = {
    devServer: {
      proxy: {
        '^/backendAirBean': {
          target: 'http://localhost:8081/',
          logLevel:'debug'
        }
      }
    }
  }