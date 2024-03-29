/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Stream.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description 网络套接口对象
 * 
 *  Socket 属于 net 模块，创建方法
 *  ```JavaScript
 *  var s = new net.Socket();
 *  ```
 *  
 */
declare class Class_Socket extends Class_Stream {
    /**
     * @description Socket 构造函数，创建一个新的 Socket 对象
     *      @param family 指定地址集，缺省为 AF_INET，ipv4
     *      @param type 指定协议族，缺省为 SOCK_STREAM，tcp
     *      
     */
    constructor(family: number, type: number);

    /**
     * @description 查询当前 Socket 对象的地址集 
     */
    readonly family: number;

    /**
     * @description 查询当前 Socket 对象的协议族 
     */
    readonly type: number;

    /**
     * @description 查询当前连接的对方地址 
     */
    readonly remoteAddress: string;

    /**
     * @description 查询当前连接的对方端口 
     */
    readonly remotePort: number;

    /**
     * @description 查询当前连接的本地地址 
     */
    readonly localAddress: string;

    /**
     * @description 查询当前连接的本地端口 
     */
    readonly localPort: number;

    /**
     * @description 查询和设置超时时间 单位毫秒
     */
    timeout: number;

    /**
     * @description 建立一个 tcp 连接
     *      @param host 指定对方地址或主机名
     *      @param port 指定对方端口
     *      
     */
    connect(host: string, port: number): void;

    connect(host: string, port: number, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 将当前 Socket 绑定至本地所有地址的指定端口
     *      @param port 指定绑定的端口
     *      @param allowIPv4 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统
     *      
     */
    bind(port: number, allowIPv4?: boolean): void;

    /**
     * @description 将当前 Socket 绑定至指定地址的指定端口
     *      @param addr 指定绑定的地址
     *      @param port 指定绑定的端口
     *      @param allowIPv4 指定是否接受 ipv4 连接，缺省为 true。本参数在 ipv6 时有效，并依赖于操作系统
     *      
     */
    bind(addr: string, port: number, allowIPv4?: boolean): void;

    /**
     * @description 开始监听连接请求
     *      @param backlog 指定请求队列长度，超出的请求将被拒绝，缺省为 120
     *      
     */
    listen(backlog?: number): void;

    /**
     * @description 等待并接受一个连接
     *      @return 返回接收到得连接对象
     *      
     */
    accept(): Class_Socket;

    accept(callback: (err: Error | undefined | null, retVal: Class_Socket)=>any): void;

    /**
     * @description 从连接读取指定大小的数据，不同于 read 方法，recv 并不保证读完要求的数据，而是在读取到数据后立即返回
     *      @param bytes 指定要读取的数据量，缺省读取任意尺寸的数据
     *      @return 返回从连接读取的数据
     *      
     */
    recv(bytes?: number): Class_Buffer;

    recv(bytes?: number, callback?: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 读取一个 UDP 包
     *      recvfrom 返回结果中包含以下内容：
     *        - data: 接收到的二进制数据块
     *        - address: 发送方的地址
     *        - port: 发送方的端口
     *      @param bytes 指定要读取的数据量，缺省读取任意尺寸的数据
     *      @return 返回从连接读取的数据包
     *      
     */
    recvfrom(bytes?: number): FIBJS.GeneralObject;

    recvfrom(bytes?: number, callback?: (err: Error | undefined | null, retVal: FIBJS.GeneralObject)=>any): void;

    /**
     * @description 将给定的数据写入连接，此方法等效于 write 方法
     *      @param data 给定要写入的数据
     *      
     */
    send(data: Class_Buffer): void;

    send(data: Class_Buffer, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 向给定 ip:port 发送一个 UDP 包
     *      @param data 给定要写入的数据
     *      @param host 指定目标 ip 或主机名
     *      @param port 指定目标端口
     *      
     */
    sendto(data: Class_Buffer, host: string, port: number): void;

    sendto(data: Class_Buffer, host: string, port: number, callback: (err: Error | undefined | null)=>any): void;

}

