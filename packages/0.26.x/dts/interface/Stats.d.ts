/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/**
 * @description 数据统计对象，用以构建应用运行时数据收集
 * 
 *  创建方法：
 *  ```JavaScript
 *  var util = require("util");
 *  var stats = new util.Stats(["begin", "end", "error"]);
 *  ```
 *  一些内部对象会提供预先定义的的统计对象
 *  
 */
declare class Class_Stats extends Class_object {
    /**
     * @description 数据统计对象构造方法
     *      @param keys 指定计数器的名称
     *      
     */
    constructor(keys: any[]);

    /**
     * @description 数据统计对象构造方法
     *      @param staticKeys 指定静态计数器的名称，静态计数器不会被 reset
     *      @param keys 指定计数器的名称
     *      
     */
    constructor(staticKeys: any[], keys: any[]);

    /**
     * @description 指定的计数器增一
     *      @param key 指定计数器名称
     *      
     */
    inc(key: string): void;

    /**
     * @description 指定的计数器减一
     *      @param key 指定计数器名称
     *      
     */
    dec(key: string): void;

    /**
     * @description 指定的计数器加指定值
     *      @param key 指定计数器名称
     *      @param value 指定数值
     *      
     */
    add(key: string, value: number): void;

    /**
     * @description 初始化计数器，除 staticKeys 指定的计数器全部清零 
     */
    reset(): void;

    /**
     * @description 查询上次 reset 到现在的运行时间
     *      @return 返回上次 reset 到现在的运行时间
     *     
     */
    uptime(): number;


}

