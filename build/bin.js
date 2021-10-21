const fs = require('fs')
const path = require('path')
const semver = require('semver')

if (!fs.copy) {
    fs.copy = fs.copyFile
}

const { mkVersionPkg } = require('./utils')
const gen_types = require('./gen_types')

let installedNodeModules = path.resolve(__dirname, '../../../')
if (!installedNodeModules || !installedNodeModules.endsWith('node_modules'))
    installedNodeModules = null

let fibjs_version = process.env.FIBJS_VERSION
let fibjs_committish = process.env.FIBJS_COMMIT

if (!fibjs_version)
    fibjs_version = console.readLine("no FIBJS_VERSION set, input version you wanna set: ")

if (!fibjs_version)
    throw `fibjs version required, set property value to environment variable \`FIBJS_VERSION\`.`


if (fibjs_version === 'latest') {
    fibjs_version = [
        semver.major(fibjs_committish),
        semver.minor(fibjs_committish),
        semver.patch(fibjs_committish),
    ].join('.');
    
    const package_target = mkVersionPkg(fibjs_version, true)
    gen_types(fibjs_committish, package_target);
} else if (!semver.valid(fibjs_version)) {
    throw `fibjs version invalid, set property value to environment variable \`FIBJS_VERSION\`.`
} else {
    const package_target = mkVersionPkg(fibjs_version)
    gen_types(fibjs_committish, package_target);
}
