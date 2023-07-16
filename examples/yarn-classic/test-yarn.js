const exec = require('@actions/exec')
const semverMajor = require('semver/functions/major')

exec.exec('yarn -v')
yarnClassic = semverMajor('1.22.19')

const yarnModern = semverMajor('3.19.4')
console.log('Classic ' + yarnClassic)
console.log('Modern ' + yarnModern)
