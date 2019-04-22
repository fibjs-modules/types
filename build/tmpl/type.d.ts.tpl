/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: <%- (buildInfo.fibjs + '').padEnd(45, ' ') %>            *
 *   	- date	: <%- (buildInfo.date + '').padEnd(44, ' ') %>             *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */<%
	var isInterface = def.declare.type === 'interface'
	var isModule = def.declare.type === 'module' 
	var needRefObject = isInterface && def.declare.name !== 'object'
%>
<% if (needRefObject) {%>
/// <reference path="_common.d.ts" />
/// <reference path="object.d.ts" />
<% } %>

<% if (filename === 'index') { %>
/// <reference no-default-lib="true"/>

/// <reference lib="es5"/>
/// <reference lib="es6"/>
/// <reference lib="es7"/>
/// <reference lib="es2015"/>
/// <reference lib="es2016"/>
/// <reference lib="es2017"/>
/// <reference lib="es2018"/>
/// <reference lib="es2019"/>

/// <reference path="_common.d.ts" />
/// <reference path="events.d.ts" />
/// <reference path="ex_stream.d.ts" />

<% for(var i=0; i<defModuleNames.length; i++) { 
	var defName = defModuleNames[i]
%>/// <reference path="<%- defName %>.d.ts" />
<% } /** else of iteration`defModuleNames` */ %>
import _Global = require('global');
import _Process = require('process');

declare global {
	var exports: {
		[k: string]: any
	};
	var module: {
		exports: typeof exports;
	};
<% for(var i=0; i<defModules['global'].members.length; i++) {
	var member = defModules['global'].members[i]
	console.log(
		'global member', '\n',
		'memType:', member.memType, '\n',
		'name:', member.name, '\n',
		'type:', member.type, '\n',
		'async:', member.async, '\n',
	)
	if (excludedTopLevelVariablesInGlobalModule.includes(member.name)) {%>
	/** const <%- member.name %>: <%- member.type || 'null' %>; */<%
	continue;
	}%>
	const <%- member.name %>: typeof _Global.<%- member.name %><%
} /** end of iteration`defModules['global'].members` */ %>
} /** end of `declare global` */
<% } else if (filename === '_common') { /** elseif of `if (filename === '_common')` */ %>
/// <reference path="EventEmitter.d.ts" />
/// <reference path="Buffer.d.ts" />

declare namespace Fibjs {
	interface ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }

	interface AsyncCallback<T_RESP=any> {
		<T = T_RESP, T_CALLBACK_RESP = any, T_THIS = any>(this: T_THIS, err: Error, result?: T): T_CALLBACK_RESP | void
	}

    interface AnyObject {
        [k: string]: any
    }

    export interface ReadableStream extends Class_EventEmitter {
        readable: boolean;
        read(size?: number): string | Class_Buffer;
        setEncoding(encoding: string): this;
        pause(): this;
        resume(): this;
        isPaused(): boolean;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): this;
        unshift(chunk: string): void;
        unshift(chunk: Class_Buffer): void;
        wrap(oldStream: ReadableStream): this;
        [Symbol.asyncIterator](): AsyncIterableIterator<string | Class_Buffer>;
    }

    export interface WritableStream extends Class_EventEmitter {
        writable: boolean;
        write(buffer: Class_Buffer | string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(cb?: Function): void;
        end(buffer: Class_Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    export interface ReadWriteStream extends ReadableStream, WritableStream { }
}
<% } else if (filename === '_test_env') { /** elseif of `if (filename === '_test_env')` */ %>
/// <reference path="test.d.ts" />
import test = require('test')

/// <reference path="assert.d.ts" />
import _assert = require('assert')

declare global {
<% for(var i=0; i<member_fns.length; i++) { 
	var fn_in_test_mod = member_fns[i]
	var fn_name = fn_in_test_mod.name
    if (fn_name === 'run')
        continue ;
%>	const <%- fn_name %>: typeof test.<%- fn_name %>
<% } /** else of iteration`member_fns` */ %>
	const assert: typeof _assert
}
/** declare const describe: test.describe; */
<% } else if (filename === 'ex_stream') { /** elseif of `if (filename === 'ex_stream')` */ %>
/// <reference path="_common.d.ts" />
/// <reference path="events.d.ts" />

declare module "stream" {
    import * as events from "events";

    class internal extends events.EventEmitter {
        pipe<T extends Fibjs.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }

    namespace internal {
        export class Stream extends internal { }

        export interface ReadableOptions {
            highWaterMark?: number;
            encoding?: string;
            objectMode?: boolean;
            read?(this: Readable, size: number): void;
            destroy?(this: Readable, error: Error | null, callback: (error: Error | null) => void): void;
        }

        export class Readable extends Stream implements Fibjs.ReadableStream {
            readable: boolean;
            readonly readableHighWaterMark: number;
            readonly readableLength: number;
            constructor(opts?: ReadableOptions);
            _read(size: number): void;
            read(size?: number): any;
            setEncoding(encoding: string): this;
            pause(): this;
            resume(): this;
            isPaused(): boolean;
            unpipe<T extends Fibjs.WritableStream>(destination?: T): this;
            unshift(chunk: any): void;
            wrap(oldStream: Fibjs.ReadableStream): this;
            push(chunk: any, encoding?: string): boolean;
            _destroy(error: Error | null, callback: (error: Error | null) => void): void;
            destroy(error?: Error): void;

            /**
             * Event emitter
             * The defined events on documents including:
             * 1. close
             * 2. data
             * 3. end
             * 4. readable
             * 5. error
             */
            addListener(event: "close", listener: () => void): object;
            addListener(event: "data", listener: (chunk: any) => void): object;
            addListener(event: "end", listener: () => void): object;
            addListener(event: "readable", listener: () => void): object;
            addListener(event: "error", listener: (err: Error) => void): object;
            addListener(event: string | symbol, listener: (...args: any[]) => void): object;
            addListener(map: object): object;

            emit(event: "close"): boolean;
            emit(event: "data", chunk: any): boolean;
            emit(event: "end"): boolean;
            emit(event: "readable"): boolean;
            emit(event: "error", err: Error): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on(event: "close", listener: () => void): this;
            on(event: "data", listener: (chunk: any) => void): this;
            on(event: "end", listener: () => void): this;
            on(event: "readable", listener: () => void): this;
            on(event: "error", listener: (err: Error) => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;
            on(map: object): object;

            once(event: "close", listener: () => void): this;
            once(event: "data", listener: (chunk: any) => void): this;
            once(event: "end", listener: () => void): this;
            once(event: "readable", listener: () => void): this;
            once(event: "error", listener: (err: Error) => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;
            once(map: object): object;

            prependListener(event: "close", listener: () => void): this;
            prependListener(event: "data", listener: (chunk: any) => void): this;
            prependListener(event: "end", listener: () => void): this;
            prependListener(event: "readable", listener: () => void): this;
            prependListener(event: "error", listener: (err: Error) => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
            prependListener(map: object): object;

            prependOnceListener(event: "close", listener: () => void): this;
            prependOnceListener(event: "data", listener: (chunk: any) => void): this;
            prependOnceListener(event: "end", listener: () => void): this;
            prependOnceListener(event: "readable", listener: () => void): this;
            prependOnceListener(event: "error", listener: (err: Error) => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
            prependOnceListener(map: object): object;

            removeListener(event: "close", listener: () => void): this;
            removeListener(event: "data", listener: (chunk: any) => void): this;
            removeListener(event: "end", listener: () => void): this;
            removeListener(event: "readable", listener: () => void): this;
            removeListener(event: "error", listener: (err: Error) => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
            removeListener(evt: string): object;
            removeListener(map: object): object;

            [Symbol.asyncIterator](): AsyncIterableIterator<any>;
        }

        export interface WritableOptions {
            highWaterMark?: number;
            decodeStrings?: boolean;
            objectMode?: boolean;
            write?(this: Writable, chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
            writev?(this: Writable, chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
            destroy?(this: Writable, error: Error | null, callback: (error: Error | null) => void): void;
            final?(this: Writable, callback: (error?: Error | null) => void): void;
        }

        export class Writable extends Stream implements Fibjs.WritableStream {
            writable: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            constructor(opts?: WritableOptions);
            _write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
            _writev?(chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
            _destroy(error: Error | null, callback: (error: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: any, cb?: (error: Error | null | undefined) => void): boolean;
            write(chunk: any, encoding?: string, cb?: (error: Error | null | undefined) => void): boolean;
            setDefaultEncoding(encoding: string): this;
            end(cb?: () => void): void;
            end(chunk: any, cb?: () => void): void;
            end(chunk: any, encoding?: string, cb?: () => void): void;
            cork(): void;
            uncork(): void;
            destroy(error?: Error): void;

            /**
             * Event emitter
             * The defined events on documents including:
             * 1. close
             * 2. drain
             * 3. error
             * 4. finish
             * 5. pipe
             * 6. unpipe
             */
            addListener(event: "close", listener: () => void): object;
            addListener(event: "drain", listener: () => void): object;
            addListener(event: "error", listener: (err: Error) => void): object;
            addListener(event: "finish", listener: () => void): object;
            addListener(event: "pipe", listener: (src: Readable) => void): object;
            addListener(event: "unpipe", listener: (src: Readable) => void): object;
            addListener(event: string | symbol, listener: (...args: any[]) => void): object;
            addListener(map: object): object;

            emit(event: "close"): boolean;
            emit(event: "drain"): boolean;
            emit(event: "error", err: Error): boolean;
            emit(event: "finish"): boolean;
            emit(event: "pipe", src: Readable): boolean;
            emit(event: "unpipe", src: Readable): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on(event: "close", listener: () => void): object;
            on(event: "drain", listener: () => void): object;
            on(event: "error", listener: (err: Error) => void): object;
            on(event: "finish", listener: () => void): object;
            on(event: "pipe", listener: (src: Readable) => void): object;
            on(event: "unpipe", listener: (src: Readable) => void): object;
            on(event: string | symbol, listener: (...args: any[]) => void): object;
            on(map: object): object;

            once(event: "close", listener: () => void): object;
            once(event: "drain", listener: () => void): object;
            once(event: "error", listener: (err: Error) => void): object;
            once(event: "finish", listener: () => void): object;
            once(event: "pipe", listener: (src: Readable) => void): object;
            once(event: "unpipe", listener: (src: Readable) => void): object;
            once(event: string | symbol, listener: (...args: any[]) => void): object;
            once(map: object): object;

            prependListener(event: "close", listener: () => void): object;
            prependListener(event: "drain", listener: () => void): object;
            prependListener(event: "error", listener: (err: Error) => void): object;
            prependListener(event: "finish", listener: () => void): object;
            prependListener(event: "pipe", listener: (src: Readable) => void): object;
            prependListener(event: "unpipe", listener: (src: Readable) => void): object;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): object;
            prependListener(map: object): object;

            prependOnceListener(event: "close", listener: () => void): object;
            prependOnceListener(event: "drain", listener: () => void): object;
            prependOnceListener(event: "error", listener: (err: Error) => void): object;
            prependOnceListener(event: "finish", listener: () => void): object;
            prependOnceListener(event: "pipe", listener: (src: Readable) => void): object;
            prependOnceListener(event: "unpipe", listener: (src: Readable) => void): object;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): object;
            prependOnceListener(map: object): object;

            removeListener(event: "close", listener: () => void): object;
            removeListener(event: "drain", listener: () => void): object;
            removeListener(event: "error", listener: (err: Error) => void): object;
            removeListener(event: "finish", listener: () => void): object;
            removeListener(event: "pipe", listener: (src: Readable) => void): object;
            removeListener(event: "unpipe", listener: (src: Readable) => void): object;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): object;
            removeListener(evt: string): object;
            removeListener(map: object): object;
        }

        export interface DuplexOptions extends ReadableOptions, WritableOptions {
            allowHalfOpen?: boolean;
            readableObjectMode?: boolean;
            writableObjectMode?: boolean;
            read?(this: Duplex, size: number): void;
            write?(this: Duplex, chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
            writev?(this: Duplex, chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
            final?(this: Duplex, callback: (error?: Error | null) => void): void;
            destroy?(this: Duplex, error: Error | null, callback: (error: Error | null) => void): void;
        }

        // Note: Duplex extends both Readable and Writable.
        export class Duplex extends Readable implements Writable {
            writable: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            constructor(opts?: DuplexOptions);
            _write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
            _writev?(chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
            _destroy(error: Error | null, callback: (error: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: any, cb?: (error: Error | null | undefined) => void): boolean;
            write(chunk: any, encoding?: string, cb?: (error: Error | null | undefined) => void): boolean;
            setDefaultEncoding(encoding: string): this;
            end(cb?: () => void): void;
            end(chunk: any, cb?: () => void): void;
            end(chunk: any, encoding?: string, cb?: () => void): void;
            cork(): void;
            uncork(): void;
        }

        type TransformCallback = (error?: Error, data?: any) => void;

        export interface TransformOptions extends DuplexOptions {
            read?(this: Transform, size: number): void;
            write?(this: Transform, chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
            writev?(this: Transform, chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
            final?(this: Transform, callback: (error?: Error | null) => void): void;
            destroy?(this: Transform, error: Error | null, callback: (error: Error | null) => void): void;
            transform?(this: Transform, chunk: any, encoding: string, callback: TransformCallback): void;
            flush?(this: Transform, callback: TransformCallback): void;
        }

        export class Transform extends Duplex {
            constructor(opts?: TransformOptions);
            _transform(chunk: any, encoding: string, callback: TransformCallback): void;
            _flush(callback: TransformCallback): void;
        }

        export class PassThrough extends Transform { }

        export function pipeline<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: T, callback?: (err: Fibjs.ErrnoException) => void): T;
        export function pipeline<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream, stream3: T, callback?: (err: Fibjs.ErrnoException) => void): T;
        export function pipeline<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream, stream3: Fibjs.ReadWriteStream, stream4: T, callback?: (err: Fibjs.ErrnoException) => void): T;
        export function pipeline<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream, stream3: Fibjs.ReadWriteStream, stream4: Fibjs.ReadWriteStream, stream5: T, callback?: (err: Fibjs.ErrnoException) => void): T;
        export function pipeline(streams: Array<Fibjs.ReadableStream | Fibjs.WritableStream | Fibjs.ReadWriteStream>, callback?: (err: Fibjs.ErrnoException) => void): Fibjs.WritableStream;
        export function pipeline(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream | Fibjs.WritableStream, ...streams: Array<Fibjs.ReadWriteStream | Fibjs.WritableStream | ((err: Fibjs.ErrnoException) => void)>): Fibjs.WritableStream;
        export namespace pipeline {
            export function __promisify__<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: T): Promise<void>;
            export function __promisify__<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream, stream3: T): Promise<void>;
            export function __promisify__<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream, stream3: Fibjs.ReadWriteStream, stream4: T): Promise<void>;
            export function __promisify__<T extends Fibjs.WritableStream>(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream, stream3: Fibjs.ReadWriteStream, stream4: Fibjs.ReadWriteStream, stream5: T): Promise<void>;
            export function __promisify__(streams: Array<Fibjs.ReadableStream | Fibjs.WritableStream | Fibjs.ReadWriteStream>): Promise<void>;
            export function __promisify__(stream1: Fibjs.ReadableStream, stream2: Fibjs.ReadWriteStream | Fibjs.WritableStream, ...streams: Array<Fibjs.ReadWriteStream | Fibjs.WritableStream>): Promise<void>;
        }
    }

    export = internal;
}
<% } /** else of `if (filename === 'index')` */ else {%>
<% for(var i=0; i<refers.length; i++) { 
	var refClassName = refers[i]
	if(defObjects[refClassName]) {
%>
/// <reference path="_common.d.ts" />
/// <reference path="<%- refClassName %>.d.ts" />
<% } else if (false && defModules[refClassName]){%>import <%- refClassName %> from '<%- refClassName %>'<%}
%>
<% } /** end of `iteration about refers` */ %>
<% if (isModule) {%> // give all internal defined classes as reference
/// <reference path="_common.d.ts" />
<%
	for(var i=0; i<defObjectNames.length; i++) {
		var defClassName = defObjectNames[i]
%>
/// <reference path="<%- defClassName %>.d.ts" />
<% } /** end of `iteration about defObjectNames` */ %>
<% } %>
/** module Or Internal Object */
/**
	* @brief <%- def.declare.doc.descript %>
	* @detail <%- def.declare.doc.detail %>
	*/<%
	if (isInterface) {
		var className = _fns.transObjectName(def.declare.name)
		var extendClassName = _fns.transObjectName(def.declare.extend)
		var renderClassParentRef = extendClassName && extendClassName !== '_object'
%>
<% if (renderClassParentRef) {%>/// <reference path="<%- extendClassName %>.d.ts" /><%}%>
declare class <%- _fns.uglifyInternalClassName(className) %> <%- extendClassName ? `extends ${_fns.uglifyInternalClassName(extendClassName)}` : '' %> {
	<% for(var i=0; i<member_props.length; i++) {
		var memberProp = member_props[i]
		var propName = memberProp.name 
		var propType = typeMap[memberProp.type]
		propType = _fns.uglifyTypeInDefObjects(propType)

		var str = JSON.stringify(memberProp)
	%>
	/**
	 * class prop <% str %>
	 *
	 * <% var comments = memberProp.comments.split('\n'); for(var idx=0; idx<comments.length; idx++) {var comment = comments[idx].trim().replace('! @', '@') %>
	 * <%- comment %><% } %>
	 * <%- memberProp.static ? '@static' : '' %>
	 * <%- memberProp.readonly ? '@readonly' : '' %>
	 * @type <%- memberProp.type %>
	 */
	
	<%- propName %>: <%- propType %>
	<% } /** end of iteration 'member_props' */ %>
	
	<% for(var i=0; i<member_fns.length; i++) {
		var fn = member_fns[i]
		var isConstructor = fn.name === def.declare.name
		var isAsync = !!fn.async
		var fn_name = isConstructor ? 'constructor' : fn.name
	%>
	/**
	 * <% var comments = fn.comments.split('\n'); for(var idx=0; idx<comments.length; idx++) {var comment = comments[idx].trim().replace('! @', '@') %>
	 * <%- comment %><% } %>
	 * <%- fn.deprecated ? '@deprecated' : '' %>
	 * <%- fn.async ? '@async' : '' %>
	 */<%
	  var returnType = fn.type ? _fns.uglifyTypeInDefObjects(typeMap[fn.type], defObjects) : 'void'
      var asycnGeneric = isAsync && returnType === 'any' ? `<T_RESULT = ${returnType}>` : ''

	  if (isConstructor)
		returnType = ''
      else if (asycnGeneric)
        returnType = 'T_RESULT'

	  if (isAsync && fn.params)
	  	fn.params.push({
			type: `AsyncCallback<${returnType}>`,
			name: 'callback',
			default: {
				type: 'Function',
				value: `function (err: Error, result: ${returnType}) {}`
			}
		});
        
	  var paramList = _fns.params2paramList(fn.params, typeMap)
	%>
	<%- fn.static ? 'static ' : '' %><%- fn_name %><%- asycnGeneric %>(<%- paramList.join(', ') %>)<%- returnType ? `: ${returnType}` : '' %>;
<% } /** end of iteration 'member_fns' */ %>
} /** endof class */
<% } /** endof `if (isInterface)` */ 

if (isModule) { %>
declare module "<%- def.declare.name %>" {
	<% for(var i=0; i<refers.length; i++) { 
		var refClassName = refers[i]
		if(defModules[refClassName]) {%>
	import <%- _fns.getAliasNameForRefModule(refClassName) %> = require('<%- refClassName %>')<%}}%>

	module <%- def.declare.name %> {
		<% for(var i=0; i<member_constants.length; i++) {
				var constant = member_constants[i]

				var hasDefault = !!constant.default
		%>
		/**
		 * <% var comments = constant.comments.split('\n'); for(var idx=0; idx<comments.length; idx++) {var comment = comments[idx].trim().replace('! @', '@') %>
		 * <%- comment %><% } %>
		 * <%- constant.deprecated ? '@deprecated' : '' %>
		 * <%- constant.async ? '@async' : '' %>
		 */
		export const <%- constant.name %><%- hasDefault ? ` = ${constant.default.value}` : ''%>;
		<% } /** end of iteration 'member_constants' */ %>
		<% for(var i=0; i<member_props.length; i++) {
				var prop = member_props[i]

				var hasDefault = !!prop.default
				var propType = typeMap[prop.type] || 'any'

				var finalPropType = propType

				var isInternalClass = !!defObjects[propType]
				var isInternalModule = !!defModules[propType]
				if (isInternalClass) {
					finalPropType = _fns.uglifyTypeInDefObjects(propType)
				}
				if (isInternalModule) {
					finalPropType = _fns.getAliasNameForRefModule(propType)
				}
		%>
		/**
		 * <% var comments = prop.comments.split('\n'); for(var idx=0; idx<comments.length; idx++) {var comment = comments[idx].trim().replace('! @', '@') %>
		 * <%- comment %><% } %>
		 * <%- prop.deprecated ? '@deprecated' : '' %>
		 * <%- prop.async ? '@async' : '' %>
		 */
		export const <%- prop.name %>: <%- finalPropType %><%- hasDefault ? ` = ${prop.default.value}` : ''%>;
		<% } /** end of iteration 'member_props' */ %>
		<% for(var i=0; i<member_objects.length; i++) {
			var internalObj = member_objects[i]
			
			var objectName = internalObj.name
			var objectType = internalObj.type || internalObj.name
			// var str = JSON.stringify(internalObj)
			var isInternalClass = !!defObjects[objectType]
			var isInternalModule = !!defModules[objectType]
		%>
		/**
		 * <% var comments = internalObj.comments.split('\n'); for(var idx=0; idx<comments.length; idx++) {var comment = comments[idx].trim().replace('! @', '@') %>
		 * <%- comment %><% } %>
		 * <%- internalObj.deprecated ? '@deprecated' : '' %>
		 * <%- internalObj.async ? '@async' : '' %>
		 */
		<% if (isInternalClass) {%>export const <%- objectName %>: typeof <%- _fns.uglifyInternalClassName(objectType) %><%}%>
		<% if (isInternalModule) {%>export const <%- objectName %>: typeof <%- _fns.getAliasNameForRefModule(objectType) %><%}%>
		<% } /** end of iteration 'member_objects' */ %>
		
		<% for(var i=0; i<member_fns.length; i++) {
				var fn = member_fns[i]
		%>
		/**
		 * <% var comments = fn.comments.split('\n'); for(var idx=0; idx<comments.length; idx++) {var comment = comments[idx].trim().replace('! @', '@') %>
		 * <%- comment %><% } %>
		 * <%- fn.deprecated ? '@deprecated' : '' %>
		 * <%- fn.async ? '@async' : '' %>
		 */<%
		 	var isAsync = !!fn.async;
			var returnType = fn.type ? _fns.uglifyTypeInDefObjects(typeMap[fn.type], defObjects) : 'void'
            var asycnGeneric = isAsync && returnType === 'any' ? `<T_RESULT = ${returnType}>` : ''

            if (asycnGeneric)
                returnType = 'T_RESULT'

			if (isAsync && fn.params)
				fn.params.push({
					type: `AsyncCallback<${returnType}>`,
					name: 'callback',
					default: {
						type: 'Function',
						value: `function (err: Error, result: ${returnType}) {}`
					}
				});

			var paramList = _fns.params2paramList(fn.params, typeMap);
			%>
		export function <%- fn.name %><%- asycnGeneric %>(<%- paramList.join(', ') %>): <%- returnType || 'void' %>;
	<% } /** end of iteration 'member_fns' */ %>
	} /** end of `module <%- def.declare.name %>` */
	export = <%- def.declare.name %>
}
<%} /** endof `if (isModule)` */ %>
/** endof `module Or Internal Object` */

<% } /** end */ %>
