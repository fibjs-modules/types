/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/TcpServer.d.ts" />
/// <reference path="../interface/Handler.d.ts" />
/// <reference path="../interface/Stats.d.ts" />
/**
 * @description http 服务器对象
 * 
 *  http 服务器对象是将 TcpServer 和 HttpHandler 组合封装的对象，方便快速搭建服务器，逻辑上相当于：
 *  ```JavaScript
 *  var svr = new net.TcpServer(addr, port, new http.Handler(function(req){
 *     ...
 *  }));
 *  ```
 * 
 *  创建方法：
 *  ```JavaScript
 *  var http = require("http");
 *  var svr = new http.Server(80, function(req){
 *      ...
 *  });
 *  ```
 *  
 */
declare class Class_HttpServer extends Class_TcpServer {
    /**
     * @description HttpServer 构造函数，在所有本机地址侦听
     *     @param port 指定 http 服务器侦听端口
     *     @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     *    
     */
    constructor(port: number, hdlr: Class_Handler);

    /**
     * @description HttpServer 构造函数
     *     @param addr 指定 http 服务器侦听地址，为 "" 则在本机所有地址侦听
     *     @param port 指定 http 服务器侦听端口
     *     @param hdlr http 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     *    
     */
    constructor(addr: string, port: number, hdlr: Class_Handler);

    /**
     * @description 设置错误处理器
     * 
     *    使用方式：
     *    ```JavaScript
     *      hdlr.onerror({
     *          "404": function(v)
     *                  {
     *                      ...
     *                  },
     *          "500": new mq.Routing(...)
     *      })
     *    ```
     *    @param hdlrs 指定不同的错误的处理器，key 是错误号，value 是处理器，可以是内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     *    
     */
    onerror(hdlrs: FIBJS.GeneralObject): void;

    /**
     * @description 允许跨域请求
     *      @param allowHeaders 指定接受的 http 头字段
     *      
     */
    enableCrossOrigin(allowHeaders?: string): void;

    /**
     * @description 查询和设置是否允强制使用 gzip 压缩输出，缺省为 false 
     */
    forceGZIP: boolean;

    /**
     * @description 查询和设置最大请求头个数，缺省为 128 
     */
    maxHeadersCount: number;

    /**
     * @description 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 64 
     */
    maxBodySize: number;

    /**
     * @description 查询和设置服务器名称，缺省为：fibjs/0.x.0 
     */
    serverName: string;

    /**
     * @description 查询 http 协议转换处理器的工作状态
     * 
     *     返回的结果为一个 Stats 对象，结构如下：
     *     ```JavaScript
     *     {
     *         total : 1000,    // 总计处理的请求
     *         pendding : 100,  // 当前正在处理的请求
     *         request : 10,    // 新建的请求
     *         response : 10,   // 发送的响应
     *         error : 100,     // 发生的错误（不计入 404）
     *         error_400 : 10,  // 发生的请求错误
     *         error_404 : 12,  // 文件未找到的数量
     *         error_500 : 2    // 内部处理错误
     *     }
     *     ```
     *    
     */
    readonly httpStats: Class_Stats;

}

