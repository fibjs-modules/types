/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Handler.d.ts" />
/// <reference path="../interface/X509Cert.d.ts" />
/// <reference path="../interface/PKey.d.ts" />
/**
 * @description ssl 协议转换处理器
 * 
 *  用以将数据流转换为 ssl 流协议。SslHandler 是对 SslSocket 的封装，用于构建服务器，逻辑上相当于：
 *  ```JavaScript
 *  var ss = new ssl.Socket(crt, key);
 * 
 *  function(s){
 *     var s1 = ss.accept(s);
 *     hdlr.invoke(s1);
 *     s1.close();
 *  }
 *  ```
 *  
 */
declare class Class_SslHandler extends Class_Handler {
    /**
     * @description SslHandler 构造函数，创建一个新的 SslHandler 对象
     * 
     *     certs 格式为：
     *     ```JavaScript
     *     [
     *         {
     *             name: "fibjs.org",
     *             crt: [X509Cert object],
     *             key: [PKey object]
     *         },
     *         {
     *             name: "*.fibjs.org",
     *             crt: [X509Cert object],
     *             key: [PKey object]
     *         }
     *     ]
     *     ```
     *     @param certs 服务器证书列表
     *     @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     *     
     */
    constructor(certs: any[], hdlr: Class_Handler);

    /**
     * @description SslHandler 构造函数，创建一个新的 SslHandler 对象
     *       @param crt X509Cert 证书，用于客户端验证服务器
     *       @param key PKey 私钥，用于与客户端会话
     *       @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
     *      
     */
    constructor(crt: Class_X509Cert, key: Class_PKey, hdlr: Class_Handler);

    /**
     * @description 设定证书验证模式，缺省为 VERIFY_NONE 
     */
    verification: number;

    /**
     * @description 客户端证书验证证书链
     */
    readonly ca: Class_X509Cert;

    /**
     * @description ssl 协议转换处理器当前事件处理接口对象 
     */
    handler: Class_Handler;

}

