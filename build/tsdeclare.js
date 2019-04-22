const path = require('path')
const vm = require('vm')

const vbox = new vm.SandBox(
    {
        "pegjs": require('pegjs')
    },
    name => require(name)
)

module.exports = function (fibjs_src, target) {
    const gen_ts_type = require('./gen_ts_type');
    const defs = vbox.require( path.resolve(fibjs_src, './tools/idlc'), __dirname);

    console.log(`would write *.d.ts to ${target}`)
    gen_ts_type(defs, target);
}