const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        console.log('executing "after:run"');
        console.log('whole object: ', results)
        if (results) {
          console.log('found results')
          console.log('cypressVersion', results.cypressVersion)
          console.log('totalDuration', results.totalDuration)
          console.log('totalFailed', results.totalFailed)
          console.log('totalPassed', results.totalPassed)
          console.log('totalPending', results.totalPending)
          console.log('totalSkipped', results.totalSkipped)
          console.log('totalSuites', results.totalSuites)
          console.log('totalTests', results.totalTests)
        }
      })
    },
    supportFile: false,
  },
})
