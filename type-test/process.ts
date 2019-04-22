/// <reference types="@fibjs/types" />

/// <reference path="../test.d.ts" />

assert.ok(process.env.NODE_ENV = 'fibjs');
assert.ok(process.env.FIBJS_ENV = 'fibjs');

process.arch === 'amd64' && assert.ok(process.arch === 'amd64');
process.arch === 'arm' && assert.ok(process.arch === 'arm');
process.arch === 'arm64' && assert.ok(process.arch === 'arm64');
process.arch === 'i32' && assert.ok(process.arch === 'i32');

Array.isArray(process.argv);
assert.isFunction(process.chdir);