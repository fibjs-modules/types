/// <reference path="../DefinitelyTyped/index.d.ts" />

import fs = require('fs');

let input: string = ''
var fileContent = fs.readTextFile(input);

var fd = fs.open(input);
var payloadbuf = new Buffer();
var content = fs.read(fd, payloadbuf, 0, 0, 0);