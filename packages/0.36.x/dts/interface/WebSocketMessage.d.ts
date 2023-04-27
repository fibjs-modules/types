/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Message.d.ts" />
/**
 * @description `WebSocketMessage` 是 WebSocket 协议中的一种消息类型，它封装了 WebSocket 传输协议中各类消息的数据格式和处理方式，可用于 WebSocket 客户端和服务端双方通信。
 * 
 * 类的构造函数 `WebSocketMessage` 支持指定的消息类型参数 `type`，该参数有三个可选值：
 * 
 * - `ws.TEXT`：代表文本类型的消息，内容为字符串。
 * - `ws.BINARY`：代表二进制类型的消息，内容为二进制数据。
 * 
 * 另外，还可以通过修改 `WebSocketMessage.masked` 属性指定是否需要应用掩码，通过 `WebSocketMessage.compress` 属性指定是否需要压缩。
 * 
 * 以下代码是一个 websocket 服务器的示例，当有客户端连接进来之后，服务器会把收到的消息 echo 回去给客户端：
 * ```JavaScript
 * var ws = require('ws');
 * var http = require('http');
 * 
 * var svr = new http.Server(8080, {
 *     '/websocket': ws.upgrade((conn, req) => {
 *         // emit message event
 *         conn.onmessage = e => {
 *             if (e.data.type == ws.TEXT) {
 *                 console.log(`接收到客户端发来的消息 ${e.data}`);
 *                 conn.send(e.data);
 *             } else {
 *                 console.error(`收到未知类型消息 ${e.data.type}`);
 *             }
 *         }
 *         conn.onclose = e => console.log('离开了一个客户端');
 *     })
 * });
 * svr.start();
 * ```
 * 在这个程序中，首先加载了 websocket 支持模块和内置的 http 模块，然后创建了 http 服务对象，并指定了要处理的请求路径，调用了 ws.upgrade 函数将对应路径的请求升级成 websocket 连接。
 * 创建 websocket 连接之后，服务器会自动为每个连接创建一个 ws.Socket 对象，并提供了 onopen、onmessage、onclose 等 API，用来处理当有客户端连接、收到消息以及关闭事件。
 * 在收到消息时，服务器会判断消息的类型，如果是文本类型，就会将收到的消息 echo 回去。
 * 以上是一个简单的 websocket 服务器的处理流程，适当根据实际需求进行修改即可。
 * 
 */
declare class Class_WebSocketMessage extends Class_Message {
    /**
     * @description 包处理消息对象构造函数
     * 	@param type websocket 消息类型，缺省为 websocket.BINARY
     * 	@param masked websocket 消息掩码，缺省为 true
     *     @param compress 标记消息是否压缩，缺省为 false
     * 	@param maxSize 最大包尺寸，以 MB 为单位，缺省为 67108864(64M)
     * 	 
     */
    constructor(type: number, masked?: boolean, compress?: boolean, maxSize?: number);

    /**
     * @description 查询和读取 websocket 掩码标记，缺省为 true 
     */
    masked: boolean;

    /**
     * @description 查询和读取 websocket 压缩状态，缺省为 false 
     */
    compress: boolean;

    /**
     * @description 查询和设置最大包尺寸，以字节为单位，缺省为 67108864(64M) 
     */
    maxSize: number;

}

