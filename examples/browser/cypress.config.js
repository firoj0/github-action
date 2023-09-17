const { defineConfig } = require('cypress')
const os = require('os')

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        console.log('before launching browser')
        console.log(browser)

        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args = launchOptions.args.map((arg) => {
            if (arg === '--headless=new') {
              return '--headless'
            }
            return arg
          })
          console.log('chrome launch args:')
          console.log(launchOptions.args.join(os.EOL))
        }
        return launchOptions
      })

      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    },
    supportFile: false,
    video: false
  },
})
