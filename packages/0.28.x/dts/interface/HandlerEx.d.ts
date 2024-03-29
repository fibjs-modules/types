/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Handler.d.ts" />
/// <reference path="../interface/Stats.d.ts" />
/**
 * @description 扩展消息处理器接口 
 */
declare class Class_HandlerEx extends Class_Handler {
    /**
     * @description 设置错误处理器
     * 
     *      使用方式：
     *      ```JavaScript
     *      hdlr.onerror({
     *          "404": function(v)
     *              {
     *                  ...
     *              },
     *          "500": new mq.Routing(...)
     *      })
     *      ```
     *      @param hdlrs 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     *      
     */
    onerror(hdlrs: FIBJS.GeneralObject): void;

    /**
     * @description WebSocket 协议转换处理器当前事件处理接口对象 
     */
    handler: Class_Handler;

    /**
     * @description 查询 WebSocket 包协议转换处理器的工作状态
     * 
     *       返回的结果为一个 Stats 对象，结构如下：
     *       ```JavaScript
     *       {
     *           total : 1000,    // 总计处理的请求
     *           pendding : 100,  // 当前正在处理的请求
     *           request : 10,    // 新建的请求
     *           response : 10,   // 发送的响应
     *           error : 100      // 发生的错误
     *       }
     *       ```
     *      
     */
    readonly stats: Class_Stats;

}

