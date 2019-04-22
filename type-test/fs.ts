/// <reference types="@fibjs/types" />

import fs = require('fs');

let input: string = ''
var fileContent = fs.readTextFile(input);

var fd = fs.open(input);
var fd = fs.open(input, 'w+', 666);
var fd = fs.open(input, 'w+', 666, function (err, fd) {
});

fs.close(fd);
fs.close(fd, function (err) {

});

var bufferedStream = fs.openTextStream(input);
var bufferedStream = fs.openTextStream(input, 'w+');
var bufferedStream = fs.openTextStream(input, 'w+', function (err, bufferedStream) {

});

var textString = fs.readTextFile(input, function (err, textString) {

});

var payloadbuf = new Buffer();
var bytes = fs.read(fd, payloadbuf);
var bytes = fs.read(fd, payloadbuf, 0);
var bytes = fs.read(fd, payloadbuf, 0, 0);
var bytes = fs.read(fd, payloadbuf, 0, 0, 0);

var output = fs.readFile<string>(input, 'utf-8', function (err, result) {
});
var uint16Output = fs.readFile<Uint16Array>(input, 'utf-8', function (err, result) {
});
var nil16Output = fs.readFile<null>(input, 'utf-8', function (err, result) {
});

var textLines = fs.readLines(input);
var textLines = fs.readLines(input, 10);

fs.writeFile(input, payloadbuf);
fs.writeFile(input, payloadbuf, function (err) {});

fs.appendFile(input, payloadbuf);
fs.appendFile(input, payloadbuf, function (err) {});

fs.setZipFS(input, payloadbuf);

var output = fs.readTextFile(input, function (err, result) {
});