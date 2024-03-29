/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/BufferedStream.d.ts" />
/**
 * @description 子进程对象
 * 
 *  ```JavaScript
 *  var process = require("process");
 *  var sub = process.open("ls");
 *  ```
 *  
 */
declare class Class_SubProcess extends Class_object {
    /**
     * @description 杀掉当前对象指向的进程，并传递信号
     *       @param signal 传递的信号
     *      
     */
    kill(signal: number): void;

    /**
     * @description 等待当前对象指向的进程结束，并返回进程结束代码
     *       @return 进程的结束代码
     *      
     */
    wait(): number;

    wait(callback: (err: Error | undefined | null, retVal: number)=>any): void;

    /**
     * @description 查询当前对象所指向的进程是否存在指定名称的窗口，仅限 windows
     *       @param name 窗口名称
     *       @return 窗口存在则返回窗口的 rect，否则返回 undefined
     *      
     */
    findWindow(name: string): any;

    /**
     * @description 读取当前对象指向的进程的 id
     *      
     */
    readonly pid: number;

    /**
     * @description 读取当前对象指向的父进程的 id
     *      
     */
    readonly ppid: number;

    /**
     * @description 读取当前对象指向的进程的标准输入对象
     *      
     */
    readonly stdin: Class_BufferedStream;

    /**
     * @description 读取当前对象指向的进程的标准输出对象
     *      
     */
    readonly stdout: Class_BufferedStream;

}

