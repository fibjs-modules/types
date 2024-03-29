/// <reference path="../../dts/_import/index.d.ts" />
/**
 * @description punycode 国际化域名转换模块
 * 
 *  Punycode 是由 RFC 3492 定义的主要用于国际化域名的字符编码方案。因为 URL 中主机名限制只能是 ASCII 字符，包括非 ASCII 字符的主机名必须使用 punycode 算法转化为ASCII。
 * 
 *  使用方法：
 *  ```JavaScript
 *  var punycode = require('punycode');
 *  ```
 *  
 */
declare module 'punycode' {
    /**
     * @description 将一个 Unicode 字符串转化为等价的只含有 ASCII 字符的 Punycode 字符串
     * 	 @param domain 给定Unicode 字符串
     * 	 @return 返回编码后的只含有 ASCII 字符的 Punycode 字符串
     * 	 
     */
    function encode(domain: string): string;

    /**
     * @description 将一个 Punycode 字符串转化为等价的 Unicode 字符串
     * 	 @param domain 给定Unicode 字符串
     * 	 @return 返回解码后的 Unicode 字符串
     * 	 
     */
    function decode(domain: string): string;

    /**
     * @description 转换一个代表了一个域名的Unicode字符串为一个只含有 ASCII 字符的字符串。只有代表了域名的部分的非 ASCII 字符串会被转换。也就是说，如果你调用了一个已经被转换为ASCII的字符串，也是没有问题的。
     * 	 @param domain 给定Unicode 字符串
     * 	 @return 返回编码后的 ASCII 字符串
     * 	 
     */
    function toASCII(domain: string): string;

    /**
     * @description 转换一个代表了一个域名的Punycode字符串为一个Unicode字符串。只有代表了域名的部分的Punycode字符串会被转换。也就是说，如果你调用了一个已经被转换为Unicode的字符串，也是没有问题的。
     * 	 @param domain 给定 ASCII 字符串
     * 	 @return 返回解码后的 Unicode 字符串
     * 	 
     */
    function toUnicode(domain: string): string;

}

