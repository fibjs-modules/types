/// <reference path="../DefinitelyTyped/index.d.ts" />

import vm = require('vm');

var sb = new vm.SandBox({});
var sb = new vm.SandBox({}, () => void 0);
var sb = new vm.SandBox({}, () => void 0, {});
var sb = new vm.SandBox({}, {});