const fs = require('fs')
const path = require('path')

const semver = require('semver')
const mkdirp = require('@fibjs/mkdirp')

const { mkVersionPkg } = require('./utils')
const tsdeclare = require('./tsdeclare')

let installedNodeModules = path.resolve(__dirname, '../../../')
if (!installedNodeModules || !installedNodeModules.endsWith('node_modules'))
    installedNodeModules = null

let fibjs_version = process.env.FIBJS_VERSION

if (!fibjs_version)
    fibjs_version = console.readLine("no FIBJS_VERSION set, input version you wanna set: ")

if (!fibjs_version)
    throw `fibjs version required, set property value to environment variable \`FIBJS_VERSION\`.`

if (!semver.valid(fibjs_version))
    throw `fibjs version invalid, set property value to environment variable \`FIBJS_VERSION\`.`

let fibjs_src = installedNodeModules || process.env.FIBJS_SRC
const package_target = mkVersionPkg(fibjs_version)
const target = path.resolve(package_target, 'declare');

if (!fibjs_src)
    fibjs_src = console.readLine("no FIBJS_SRC set, input location of fibjs: ")

if (!fibjs_src || !fs.exists(fibjs_src))
    throw `fibjs source location ${fibjs_src} invalid, set property value to environment variable \`FIBJS_SRC\`.`

const idl_src = path.resolve(fibjs_src, './idl/zh-cn');

if (!fs.exists(idl_src))
    throw `fibjs idl source location ${idl_src} invalid.`

if (!fs.exists(target))
    mkdirp(target)

tsdeclare(fibjs_src, target);