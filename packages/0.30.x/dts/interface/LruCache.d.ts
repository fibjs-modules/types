/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/EventEmitter.d.ts" />
/**
 * @description LRU(least recently used) 缓存对象
 * 
 *  LruCache 用以维护一个 LRU 缓存，创建方法：
 *  ```JavaScript
 *  var util = require("util");
 *  var c = new util.LruCache(10, 100);
 *  ```
 *  
 */
declare class Class_LruCache extends Class_EventEmitter {
    /**
     * @description LruCache 对象构造函数
     *      @param size 缓存最大尺寸
     *      @param timeout 元素失效时间，单位是 ms，小于等于 0 不失效，缺省为 0
     *      
     */
    constructor(size: number, timeout?: number);

    /**
     * @description 查询容器内数值个数 
     */
    readonly size: number;

    /**
     * @description 查询和设置容器内元素失效时间，单位是 ms，小于等于 0 不失效 
     */
    timeout: number;

    /**
     * @description 清除容器数据 
     */
    clear(): void;

    /**
     * @description 检查容器内是否存在指定键值的数据
     *      @param name 指定要检查的键值
     *      @return 返回键值是否存在
     *      
     */
    has(name: string): boolean;

    /**
     * @description 查询指定键值的值
     *      @param name 指定要查询的键值
     *      @return 返回键值所对应的值，若不存在，则返回 undefined
     *      
     */
    get(name: string): any;

    /**
     * @description 查询指定键值的值，若不存在或过期，则调用回调函数更新数据
     *      @param name 指定要查询的键值
     *      @param updater 指定更新函数
     *      @return 返回键值所对应的值
     *      
     */
    get(name: string, updater: (...args: any[])=>any): any;

    /**
     * @description 设定一个键值数据，键值不存在则插入一条新数据
     *      @param name 指定要设定的键值
     *      @param value 指定要设定的数据
     *      
     */
    set(name: string, value: any): void;

    /**
     * @description 设定一个键值数据，键值不存在则插入新数据
     *      @param map 指定要设定的键值数据字典
     *      
     */
    set(map: FIBJS.GeneralObject): void;

    /**
     * @description 删除指定键值的全部值
     *      @param name 指定要删除的键值
     *      
     */
    remove(name: string): void;

    /**
     * @description 检查容器是否为空
     *      @return 容器内无数值则返回 true
     *      
     */
    isEmpty(): boolean;

    /**
     * @description 查询和绑定数据超时事件，相当于 on("expire", func); 
     */
    onexpire: (...args: any[])=>any;

}

