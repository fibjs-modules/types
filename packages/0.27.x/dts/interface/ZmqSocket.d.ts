/// <reference path="../_import/_fibjs.d.ts" />
/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description ZeroMQ 套接口对象
 *  
 */
declare class Class_ZmqSocket extends Class_object {
    /**
     * @description ZmqSocket 对象构造函数
     *      @param type 指定 socket 类型，缺省为 zmq.PAIR
     *      
     */
    constructor(type: number);

    /**
     * @description 绑定指定地址和端口
     *      @param addr 指定绑定的地址，如："tcp://*:3000"
     *      
     */
    bind(addr: string): void;

    /**
     * @description 连接到指定地址的服务器
     *      @param addr 指定连接的地址，如："tcp://*:3000"
     *      
     */
    connect(addr: string): void;

    /**
     * @description 接收一个数据包
     *      @return 返回接收到的数据包
     *      
     */
    recv(): Class_Buffer;

    recv(callback: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 发送一个数据包
     *      @param data 指定发送的数据包
     *      
     */
    send(data: Class_Buffer): void;

    /**
     * @description 关闭当前 socket 
     */
    close(): void;

    /**
     * @description 查询当前 socket 类型 
     */
    readonly type: number;

}

