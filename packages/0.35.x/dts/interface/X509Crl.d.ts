/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description x509 撤销证书对象
 * 
 *  X509Crl 对象属于 crypto 模块，创建：
 *  ```JavaScript
 *  var k = new crypto.X509Crl();
 *  ```
 *  
 */
declare class Class_X509Crl extends Class_object {
    /**
     * @description X509Crl 构造函数 
     */
    constructor();

    /**
     * @description X509Crl 构造函数,加载一个 DER 格式的撤销证书
     *      @param derCrl DER 格式的撤销证书
     *     
     */
    constructor(derCrl: Class_Buffer);

    /**
     * @description X509Crl 构造函数,加载一个 PEM 格式的撤销证书
     *      @param pemCrl PEM 格式的撤销证书
     *     
     */
    constructor(pemCrl: string);

    /**
     * @description 加载一个 DER 格式的撤销证书，可多次调用
     *      @param derCrl DER 格式的撤销证书
     *     
     */
    import(derCrl: Class_Buffer): void;

    /**
     * @description 加载一个 PEM 格式的撤销证书，可多次调用
     *      @param pemCrl PEM 格式的撤销证书
     *     
     */
    import(pemCrl: string): void;

    /**
     * @description 以 PEM 格式导出已经加载的撤销证书
     *      @param all 指定是否输出全部证书，缺省为 true
     *      @return 以数组方式导出撤销证书链
     *     
     */
    pem(all?: boolean): string;

    /**
     * @description 以 DER 格式导出已经加载的撤销证书
     *      @return 以数组方式导出撤销证书链
     *     
     */
    der(): Class_Buffer;

    /**
     * @description 清空已经加载的撤销证书
     *     
     */
    clear(): void;

    /**
     * @description 获取证书的版本 
     */
    readonly version: number;

    /**
     * @description 获取证书颁发者的可分辨名称 
     */
    readonly issuer: string;

    /**
     * @description 获取证书吊销序列号列表 
     */
    readonly serials: any[];

    /**
     * @description 获取证书的本次更新时间 
     */
    readonly thisUpdate: Date;

    /**
     * @description 获取证书的下次更新时间 
     */
    readonly nextUpdate: Date;

    /**
     * @description 获取证书链中得下一个证书 
     */
    readonly next: Class_X509Crl;

}

