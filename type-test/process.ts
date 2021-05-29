/// <reference types="@fibjs/types" />
/// <reference path="../test.d.ts" />

import { expectType } from 'tsd';

// from EventEmitter
expectType<Function>(process.on);
expectType<Function>(process.addListener);
expectType<Function>(process.prependListener);
expectType<Function>(process.once);
expectType<Function>(process.prependOnceListener);
expectType<Function>(process.off);
expectType<Function>(process.removeListener);
expectType<Function>(process.setMaxListeners);
expectType<Function>(process.getMaxListeners);
expectType<Function>(process.listeners);
expectType<Function>(process.listenerCount);
expectType<Function>(process.eventNames);
expectType<Function>(process.emit);

assert.ok(process.env.NODE_ENV = 'fibjs');
assert.ok(process.env.FIBJS_ENV = 'fibjs');

process.arch === 'amd64' && assert.ok(process.arch === 'amd64');
process.arch === 'arm' && assert.ok(process.arch === 'arm');
process.arch === 'arm64' && assert.ok(process.arch === 'arm64');
process.arch === 'i32' && assert.ok(process.arch === 'i32');

Array.isArray(process.argv);

expectType<Function>(process.chdir);