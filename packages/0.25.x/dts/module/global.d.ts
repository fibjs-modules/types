/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/// <reference path="../interface/Int64.d.ts" />
/// <reference path="../module/console.d.ts" />
/// <reference path="../module/process.d.ts" />
/// <reference path="../interface/Worker.d.ts" />
/// <reference path="../interface/Timer.d.ts" />
/// <reference path="../interface/Stream.d.ts" />
/**
 * @description 全局对象，所有脚本均可以访问的基础对象
 */
declare module 'global' {
    /**
     * @description 二进制数据缓存对象，用于 io 读写的数据处理，参见 Buffer 对象。
     */
    const Buffer: typeof Class_Buffer;

    /**
     * @description 64位整数对象，参见 Int64 对象。
     */
    const Int64: typeof Class_Int64;

    /**
     * @description 控制台访问对象 
     */
    const console: typeof import ('console');

    /**
     * @description 进程对象 
     */
    const process: typeof import ('process');

    /**
     * @description Worker 宿主对象，仅在 Worker 入口脚本有效 
     */
    const Master: Class_Worker;

    /**
     * @description 全局对象 
     */
    const global: FIBJS.GeneralObject;

    /**
     * @description 运行一个脚本
     *      @param fname 指定要运行的脚本路径
     *      @param argv 指定要运行的参数，此参数可在脚本内使用 argv 获取
     *      
     */
    function run(fname: string, argv?: any[]): void;

    /**
     * @description 加载一个模块并返回模块对象，更多信息参阅 @ref module
     * 
     *      require 可用于加载基础模块，文件模块。
     * 
     *      基础模块是沙箱创建时初始化的模块，引用时只需传递相应的 id，比如 require("net")。
     * 
     *      文件模块是用户自定义模块，引用时需传递以 ./ 或 ../ 开头的相对路径。文件模块支持 .js, .jsc 和 .json 文件。
     * 
     *      文件模块也支持 package.json 格式，当模块为目录结构时，require 会先查询 package.json 中的 main，未发现则尝试加载路径下的 index.js, index.jsc 或 index.json。
     * 
     *      若引用路径不是 ./ 或 ../ 开头，并且非基础模块，require 从当前模块所在路径下的 node_modules 查找，并上级目录递归。
     * 
     *      基础流程如下:
     * 
     *      ```dot
     *         digraph{
     *             node [fontname = "Helvetica,sans-Serif", fontsize = 10];
     *             edge [fontname = "Helvetica,sans-Serif", fontsize = 10];
     * 
     *             start [label="起始"];
     *             resolve [label="path.resolve" shape="rect"];
     *             search [label="从当前路径\n向上递归查找\nnode_modules" shape="rect"];
     *             load [label="加载" shape="rect"];
     *             end [label="返回" shape="doublecircle"];
     * 
     *             is_native [label="内置模块?" shape="diamond"];
     *             is_mod [label="模块?" shape="diamond"];
     *             is_abs [label="绝对路径？" shape="diamond"];
     *             has_file [label="原名存在？" shape="diamond"];
     *             has_ext [label="增加 .js 存在？" shape="diamond"];
     *             has_package [label="/package.json\n存在？" shape="diamond"];
     *             has_main [label="main 存在？" shape="diamond"];
     *             has_index [label="index.js 存在？" shape="diamond"];
     * 
     *             start -> is_native;
     *             is_native -> end [label="是"];
     *             is_native -> is_mod [label="否"];
     *             is_mod -> search [label="是"];
     *             search -> has_file;
     *             is_mod -> is_abs [label="否"];
     *             is_abs -> has_file [label="是"];
     *             is_abs -> resolve [label="否"];
     *             resolve -> has_file;
     *             has_file -> load [label="是"];
     *             has_file -> has_ext [label="否"];
     *             has_ext -> load [label="是"];
     *             has_ext -> has_package [label="否"];
     *             has_package -> has_main [label="是"];
     *             has_package -> has_index [label="否"];
     *             has_main -> load [label="是"];
     *             has_main -> has_index [label="否"];
     *             has_index -> load [label="是"];
     *             has_index -> end [label="否"];
     *             load -> end;
     *         }
     *      ```
     * 
     *      @param id 指定要加载的模块名称
     *      @return 返回加载模块的引出对象
     *      
     */
    function require(id: string): any;

    /**
     * @description 获取当前脚本的运行参数，启动 js 获取进程启动参数，run 执行的脚本获取传递的参数 
     */
    const argv: any[];

    /**
     * @description 当前脚本文件名 
     */
    const __filename: string;

    /**
     * @description 当前脚本所在目录 
     */
    const __dirname: string;

    /**
     * @description 在指定的时间后调用函数
     *     @param callback 指定回调函数
     *     @param timeout 指定延时的时间，以毫秒为单位。超过 2^31 的话,立即执行。
     *     @param args 额外的参数，传入到指定的 callback 内，可选。
     *     @return 返回定时器对象
     *     
     */
    function setTimeout(callback: (...args: any[])=>any, timeout: number, ...args: any[]): Class_Timer;

    /**
     * @description 清除指定的定时器
     *      @param t 指定要清除的定时器
     *     
     */
    function clearTimeout(t: any): void;

    /**
     * @description 每间隔指定的时间后调用函数
     *      @param callback 指定回调函数
     *      @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
     *      @param args 额外的参数，传入到指定的 callback 内，可选。
     *      @return 返回定时器对象
     *     
     */
    function setInterval(callback: (...args: any[])=>any, timeout: number, ...args: any[]): Class_Timer;

    /**
     * @description 清除指定的定时器
     *      @param t 指定要清除的定时器
     *     
     */
    function clearInterval(t: any): void;

    /**
     * @description 每间隔指定的时间后调用函数，这是个高精度定时器，会主动打断正在运行的 JavaScript 脚本执行定时器
     *      由于 setHrInterval 的定时器会中断正在运行的代码执行回调，因此不要在回调函数内修改可能影响其它模块的数据，或者在回调中调用任何标记为 async 的 api 函数，否则将会产生不可预知的结果。例如：
     *      ```JavaScript
     *         var timers = require('timers');
     * 
     *         var cnt = 0;
     *         timers.setHrInterval(() => {
     *             cnt++;
     *         }, 100);
     * 
     *         while (cnt < 10);
     * 
     *         console.error("===============================> done");
     *      ```
     *      这段代码中，第 8 行的循环并不会因为 cnt 的改变而结束，因为 JavaScript 在优化代码时会认定在这个循环过程中 cnt 不会被改变。
     *      @param callback 指定回调函数
     *      @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
     *      @param args 额外的参数，传入到指定的 callback 内，可选。
     *      @return 返回定时器对象
     *     
     */
    function setHrInterval(callback: (...args: any[])=>any, timeout: number, ...args: any[]): Class_Timer;

    /**
     * @description 清除指定的定时器
     *      @param t 指定要清除的定时器
     *     
     */
    function clearHrInterval(t: any): void;

    /**
     * @description 下一个空闲时间立即执行回调函数
     *      @param callback 指定回调函数
     *      @param args 额外的参数，传入到指定的 callback 内，可选。
     *      @return 返回定时器对象
     *     
     */
    function setImmediate(callback: (...args: any[])=>any, ...args: any[]): Class_Timer;

    /**
     * @description 清除指定的定时器
     *      @param t 指定要清除的定时器
     *     
     */
    function clearImmediate(t: any): void;

    /**
     * @description 强制要求进行垃圾回收
     */
    function GC(): void;

    /**
     * @description 进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
     * 
     *      参数 cmd 格式如下：
     *      ```JavaScript
     *      [
     *          {
     *              cmd: ".test",
     *              help: "this is a test",
     *              exec: function(argv) {
     *                  console.log(argv);
     *              }
     *          },
     *          {
     *              cmd: ".test1",
     *              help: "this is an other test",
     *              exec: function(argv) {
     *                  console.log(argv);
     *              }
     *          }
     *      ]
     *      ```
     *      @param cmds 补充命令
     *      
     */
    function repl(cmds?: any[]): void;

    /**
     * @description 进入交互模式，可以交互执行内部命令和代码，仅在启动 js 可以引用
     * 
     *      同一时刻只允许一个 Stream repl，新建一个 Stream repl 时，前一个 repl 将被关闭。
     * 
     *      参数 cmd 格式如下：
     *      ```JavaScript
     *      [
     *          {
     *              cmd: ".test",
     *              help: "this is a test",
     *              exec: function(argv) {
     *                  console.log(argv);
     *              }
     *          },
     *          {
     *              cmd: ".test1",
     *              help: "this is an other test",
     *              exec: function(argv) {
     *                  console.log(argv);
     *              }
     *          }
     *      ]
     *      ```
     *      @param out 输入输出流对象，通常为网络连接
     *      @param cmds 补充命令
     *      
     */
    function repl(out: Class_Stream, cmds?: any[]): void;

}

