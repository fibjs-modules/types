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
     * @description 加载一个 DER 格式的撤销证书，可多次调用
     *      @param derCrl DER 格式的撤销证书
     *     
     */
    load(derCrl: Class_Buffer): void;

    /**
     * @description 加载一个 PEM 格式的撤销证书，可多次调用
     *      @param pemCrl PEM 格式的撤销证书
     *     
     */
    load(pemCrl: string): void;

    /**
     * @description 加载一个 PEM/DER 格式的撤销证书，可多次调用
     *      @param filename 撤销证书文件名
     *     
     */
    loadFile(filename: string): void;

    /**
     * @description 导出已经加载的撤销证书
     *      @return 以数组方式导出撤销证书链
     *     
     */
    dump(): any[];

    /**
     * @description 清空已经加载的撤销证书
     *     
     */
    clear(): void;

}

