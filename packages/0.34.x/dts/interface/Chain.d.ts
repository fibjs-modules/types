/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Handler.d.ts" />
/**
 * @description 消息处理器链处理对象
 * 
 *  消息处理器链处理对象用于链接一系列消息处理器，按照指定的顺序链式处理。创建方法：
 *  ```JavaScript
 *  var chain = new mq.Chain([
 *    func1, func2
 *  ]);
 *  ```
 *  
 */
declare class Class_Chain extends Class_Handler {
    /**
     * @description 构造一个消息处理器链处理对象
     *      @param hdlrs 处理器数组
     *      
     */
    constructor(hdlrs: any[]);

    /**
     * @description 添加处理器数组
     *      @param hdlrs 处理器数组
     *      
     */
    append(hdlrs: any[]): void;

    /**
     * @description 添加处理器
     *      @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     *      
     */
    append(hdlr: Class_Handler): void;

}

