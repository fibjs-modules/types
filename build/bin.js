const fs = require('fs')
const path = require('path')
const tsdeclare = require('./tsdeclare')

let installedNodeModules = path.resolve(__dirname, '../../../')
if (!installedNodeModules || !installedNodeModules.endsWith('node_modules'))
    installedNodeModules = null

const fibjs_src = installedNodeModules || process.env.FIBJS_SRC
const target = process.env.FIBJS_TYPES_TARGET || path.resolve(__dirname, '../DefinitelyTyped/declare/');

if (!fibjs_src || !fs.exists(fibjs_src))
    throw `fibjs source location ${fibjs_src} invalid, set property value to environment variable \`FIBJS_SRC\`.`

const idl_src = path.resolve(fibjs_src, './idl/zh-cn');

if (!fs.exists(idl_src))
    throw `fibjs idl source location ${idl_src} invalid.`

tsdeclare(fibjs_src, target);