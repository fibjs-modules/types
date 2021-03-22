/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.32.0                                                   *
 *   	- date	: Mar 20 2021 19:45:41                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */




 // give all internal defined classes as reference
/// <reference path="_common.d.ts" />

/// <reference path="Buffer.d.ts" />

/// <reference path="BufferedStream.d.ts" />

/// <reference path="Chain.d.ts" />

/// <reference path="ChildProcess.d.ts" />

/// <reference path="Cipher.d.ts" />

/// <reference path="Condition.d.ts" />

/// <reference path="DbConnection.d.ts" />

/// <reference path="DgramSocket.d.ts" />

/// <reference path="Digest.d.ts" />

/// <reference path="Event.d.ts" />

/// <reference path="EventEmitter.d.ts" />

/// <reference path="FSWatcher.d.ts" />

/// <reference path="Fiber.d.ts" />

/// <reference path="File.d.ts" />

/// <reference path="Handler.d.ts" />

/// <reference path="HeapGraphEdge.d.ts" />

/// <reference path="HeapGraphNode.d.ts" />

/// <reference path="HeapSnapshot.d.ts" />

/// <reference path="HttpClient.d.ts" />

/// <reference path="HttpCollection.d.ts" />

/// <reference path="HttpCookie.d.ts" />

/// <reference path="HttpHandler.d.ts" />

/// <reference path="HttpMessage.d.ts" />

/// <reference path="HttpRepeater.d.ts" />

/// <reference path="HttpRequest.d.ts" />

/// <reference path="HttpResponse.d.ts" />

/// <reference path="HttpServer.d.ts" />

/// <reference path="HttpUploadData.d.ts" />

/// <reference path="HttpsServer.d.ts" />

/// <reference path="Image.d.ts" />

/// <reference path="LevelDB.d.ts" />

/// <reference path="Lock.d.ts" />

/// <reference path="LruCache.d.ts" />

/// <reference path="MSSQL.d.ts" />

/// <reference path="MemoryStream.d.ts" />

/// <reference path="Message.d.ts" />

/// <reference path="MongoCollection.d.ts" />

/// <reference path="MongoCursor.d.ts" />

/// <reference path="MongoDB.d.ts" />

/// <reference path="MongoID.d.ts" />

/// <reference path="MySQL.d.ts" />

/// <reference path="PKey.d.ts" />

/// <reference path="RangeStream.d.ts" />

/// <reference path="Redis.d.ts" />

/// <reference path="RedisHash.d.ts" />

/// <reference path="RedisList.d.ts" />

/// <reference path="RedisSet.d.ts" />

/// <reference path="RedisSortedSet.d.ts" />

/// <reference path="Routing.d.ts" />

/// <reference path="SQLite.d.ts" />

/// <reference path="SandBox.d.ts" />

/// <reference path="SeekableStream.d.ts" />

/// <reference path="Semaphore.d.ts" />

/// <reference path="Service.d.ts" />

/// <reference path="Smtp.d.ts" />

/// <reference path="Socket.d.ts" />

/// <reference path="SslHandler.d.ts" />

/// <reference path="SslServer.d.ts" />

/// <reference path="SslSocket.d.ts" />

/// <reference path="Stat.d.ts" />

/// <reference path="StatsWatcher.d.ts" />

/// <reference path="Stream.d.ts" />

/// <reference path="StringDecoder.d.ts" />

/// <reference path="TcpServer.d.ts" />

/// <reference path="Timer.d.ts" />

/// <reference path="UrlObject.d.ts" />

/// <reference path="WebSocket.d.ts" />

/// <reference path="WebSocketMessage.d.ts" />

/// <reference path="WebView.d.ts" />

/// <reference path="Worker.d.ts" />

/// <reference path="X509Cert.d.ts" />

/// <reference path="X509Crl.d.ts" />

/// <reference path="X509Req.d.ts" />

/// <reference path="XmlAttr.d.ts" />

/// <reference path="XmlCDATASection.d.ts" />

/// <reference path="XmlCharacterData.d.ts" />

/// <reference path="XmlComment.d.ts" />

/// <reference path="XmlDocument.d.ts" />

/// <reference path="XmlDocumentType.d.ts" />

/// <reference path="XmlElement.d.ts" />

/// <reference path="XmlNamedNodeMap.d.ts" />

/// <reference path="XmlNode.d.ts" />

/// <reference path="XmlNodeList.d.ts" />

/// <reference path="XmlProcessingInstruction.d.ts" />

/// <reference path="XmlText.d.ts" />

/// <reference path="ZipFile.d.ts" />

/// <reference path="object.d.ts" />


/** module Or Internal Object */
/**
	* @brief 子进程管理模块
	* @detail 引用方式：,```JavaScript,var child_process = require("child_process");,var child = child_process.spwan("ls");,```,,对于同时使用 nodejs 的用户, 需注意,- fibjs 的 `child_process.exec(command, args)` 和 nodejs 的同名 api 功能类似, 但在 windows 上, 并不会自动将 cmd.exe 作为 command 参数的执行环境;,- fibjs 的 child_process.[spawn|exec|execFile|run] 是同步/回调一体的 async 风格函数:,  - 如果最后一个参数不是函数, 则是同步的,  - 如果传递了函数作为最后一个参数, 则是异步的;,- fibjs 的 child_process.[exec|execFile] 的返回结果是一个对象, 该对象和 nodejs 同名 api 返回的对象**完全不相同**,- fibjs 的 `child_process.run` 在 nodejs 中没有对应 API
	*/
declare module "child_process" {
	

	module child_process {
		
		
		
		
		
		/**
		 * 
		 * @brief 用给定的命令发布一个子进程
		 * options 支持的内容如下：
		 * ```JavaScript
		 * {
		 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
		 * "stdio": Array | String, // 子进程 stdio 配置
		 * "env": {}, // 环境变量的键值对
		 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
		 * "uid": 0, // 设置用户进程的ID
		 * "gid": 0, // 设置进程组的ID
		 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
		 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
		 * }
		 * ```
		 * @param command 指定要运行的命令
		 * @param args 指定字符串参数列表
		 * @param options 指定创建参数
		 * @return 返回子进程对象
		 * 
		 * 
		 * 
		 */
		export function spawn(command: string, args: any[], options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): Class_ChildProcess;
	
		/**
		 * 
		 * @brief 用给定的命令发布一个子进程
		 * options 支持的内容如下：
		 * ```JavaScript
		 * {
		 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
		 * "stdio": Array | String, // 子进程 stdio 配置
		 * "env": {}, // 环境变量的键值对
		 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
		 * "uid": 0, // 设置用户进程的ID
		 * "gid": 0, // 设置进程组的ID
		 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
		 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
		 * }
		 * ```
		 * @param command 指定要运行的命令
		 * @param options 指定创建参数
		 * @return 返回子进程对象
		 * 
		 * 
		 * 
		 */
		export function spawn(command: string, options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): Class_ChildProcess;
	
		/**
		 * 
		 * @brief 在 shell 中执行一个命令并缓冲输出，当以回调方式执行时，函数将返回子进程对象
		 * options 支持的内容如下：
		 * ```JavaScript
		 * {
		 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
		 * "env": {}, // 环境变量的键值对
		 * "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
		 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
		 * "uid": 0, // 设置用户进程的ID
		 * "gid": 0, // 设置进程组的ID
		 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
		 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
		 * }
		 * ```
		 * @param command 指定要运行的命令
		 * @param options 指定创建参数
		 * @return 返回子进程的 stdio 输出内容
		 * 
		 * 
		 * @async
		 */
		export function exec(command: string, options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<undefined>/** = function (err: Error, result: undefined) {}*/): void;
	
		/**
		 * 
		 * @brief 直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象
		 * options 支持的内容如下：
		 * ```JavaScript
		 * {
		 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
		 * "env": {}, // 环境变量的键值对
		 * "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
		 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
		 * "uid": 0, // 设置用户进程的ID
		 * "gid": 0, // 设置进程组的ID
		 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
		 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
		 * }
		 * ```
		 * @param command 指定要运行的命令
		 * @param args 指定字符串参数列表
		 * @param options 指定创建参数
		 * @return 返回子进程的 stdio 输出内容
		 * 
		 * 
		 * @async
		 */
		export function execFile(command: string, args: any[], options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<undefined>/** = function (err: Error, result: undefined) {}*/): void;
	
		/**
		 * 
		 * @brief 直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象
		 * options 支持的内容如下：
		 * ```JavaScript
		 * {
		 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
		 * "env": {}, // 环境变量的键值对
		 * "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
		 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
		 * "uid": 0, // 设置用户进程的ID
		 * "gid": 0, // 设置进程组的ID
		 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
		 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
		 * }
		 * ```
		 * @param command 指定要运行的命令
		 * @param options 指定创建参数
		 * @return 返回子进程的 stdio 输出内容
		 * 
		 * 
		 * @async
		 */
		export function execFile(command: string, options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<undefined>/** = function (err: Error, result: undefined) {}*/): void;
	
		/**
		 * 
		 * @brief 直接执行所指定的文件并返回 exitCode，当以回调方式执行时，函数将返回子进程对象
		 * options 支持的内容如下：
		 * ```JavaScript
		 * {
		 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
		 * "env": {}, // 环境变量的键值对
		 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
		 * "uid": 0, // 设置用户进程的ID
		 * "gid": 0, // 设置进程组的ID
		 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
		 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
		 * }
		 * ```
		 * @param command 指定要运行的命令
		 * @param args 指定字符串参数列表
		 * @param options 指定创建参数
		 * @return 返回子进程的 exitCode
		 * 
		 * 
		 * @async
		 */
		export function run(command: string, args: any[], options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<number>/** = function (err: Error, result: number) {}*/): number;
	
		/**
		 * 
		 * @brief 直接执行所指定的文件并返回 exitCode，当以回调方式执行时，函数将返回子进程对象
		 * options 支持的内容如下：
		 * ```JavaScript
		 * {
		 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
		 * "env": {}, // 环境变量的键值对
		 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
		 * "uid": 0, // 设置用户进程的ID
		 * "gid": 0, // 设置进程组的ID
		 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
		 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
		 * }
		 * ```
		 * @param command 指定要运行的命令
		 * @param options 指定创建参数
		 * @return 返回子进程的 exitCode
		 * 
		 * 
		 * @async
		 */
		export function run(command: string, options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<number>/** = function (err: Error, result: number) {}*/): number;
	
	} /** end of `module child_process` */
	export = child_process
}

/** endof `module Or Internal Object` */


