/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/EventEmitter.d.ts" />
/**
 * @description Worker 对象是用于创建子线程的对象，可以在程序中创建和处理子线程。一个 Worker 对象可以理解为一个在与主线程不同的线程中执行的 JavaScript 进程。 Worker 不与主线程共享内存，不会阻塞主线程，是一种主流的异步编程方式
 * 
 * Worker 对象的构造函数如下：
 * 
 * ```JavaScript
 * new Worker(String path, Object opts = {})
 * ```
 * 
 * 其中，path 参数指定的就是新线程的 JavaScript 文件路径。例如，可以写一个 work.js 文件，内容如下：
 * 
 * ```JavaScript
 * const { Worker } = require('worker_threads');
 * console.log('Hi from worker');
 * ```
 * 
 * 在主程序中，通过以下代码运行 work.js：
 * 
 * ```JavaScript
 * const { Worker } = require('worker_threads');
 * const worker = new Worker('path/to/work.js');
 * ```
 * 
 * 运行后，可以在主程序的控制台看到输出 "Hi from worker"。
 * 
 * 在下面的例子里，假设我们有一个长耗时计算，我们希望将它放进另一个线程去处理，同时避免在主线程中被此计算阻塞。代码如下：
 * 
 * 
 * 主线程:
 * ```JavaScript
 * const { Worker } = require('worker_threads');
 * 
 * // create a worker thread
 * const fib = new Worker(__dirname + '/fib-worker.js');
 * // receive the result from the worker thread
 * fib.onmessage = (ev) => {
 *   console.log('result: ', ev.data);
 * };
 * fib.postMessage(40);
 * console.log('main thread still working');
 * ```
 * 
 * 在这个例子中，我们通过 Worker 对象的构造函数创建了一个工作线程来处理 Fibonacci 数列的计算，主线程通过 postMessage() 方法给工作线程传递数据，并通过 onmessage 事件来获取处理结果。同时，主线程显示 'still working' 消息，以证明已将此计算任务 '委托'给了工作线程，并可以继续处理其他事情。
 * 
 * 工作线程代码样式如下：
 * 
 * ```JavaScript
 * // fib-worker.js
 * Master.onmessage = (ev) => {
 *   const n = ev.data;
 *   const result = fib(n);
 *   // Once the calculation has been completed, the result is sent back to the main thread.
 *   Master.postMessage(result);
 * };
 * function fib(n) {
 *   if (n <= 1) return n;
 *   return fib(n - 1) + fib(n - 2);
 * }
 * ```
 * 
 * 在工作线程中，我们监听了主线程通过入口参数 postMessage() 发送的消息，将指定的 Fibonacci 数列计算并通过 Master.postMessage() 方法将计算结果传送回主线程。
 * 
 * 这是一个最基础的 Worker 示例，使用 Worker 对象开发时，主线程与工作线程是完全异步的，每个 Worker 对象都是一个单独的线程，在主线程中实例化的 Worker 对象并不会产生任何阻塞。
 *  
 */
declare class Class_Worker extends Class_EventEmitter {
    /**
     * @description Worker 对象构造函数
     *      @param path 指定 Worker 入口脚本，只接受绝对路径
     *      @param opts 构造选项，暂未支持
     *      
     */
    constructor(path: string, opts?: FIBJS.GeneralObject);

    /**
     * @description 向 Master 或 Worker 发送消息，
     *      @param data 指定发送的消息内容
     *      
     */
    postMessage(data: any): void;

    /**
     * @description 查询和绑定接受 load 消息事件，相当于 on("load", func); 
     */
    onload: (...args: any[])=>any;

    /**
     * @description 查询和绑定接受 postMessage 消息事件，相当于 on("message", func); 
     */
    onmessage: (...args: any[])=>any;

    /**
     * @description 查询和绑定接受 error 消息事件，相当于 on("error", func); 
     */
    onerror: (...args: any[])=>any;

}

