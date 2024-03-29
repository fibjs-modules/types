/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/**
 * @description 64位整数对象
 * 
 *  创建方法：
 *  ```JavaScript
 *  var n = new Int64(123);
 *  ```
 *  
 */
declare class Class_Int64 extends Class_object {
    /**
     * @description Int64 构造函数
     *      @param num 初始化的值
     *     
     */
    constructor(num?: number);

    /**
     * @description Int64 构造函数
     *      @param hi 高32位数
     *      @param lo 低32位数
     *     
     */
    constructor(hi: number, lo: number);

    /**
     * @description Int64 构造函数
     *      @param num 初始化的值
     *     
     */
    constructor(num: Class_Int64);

    /**
     * @description Int64 构造函数
     *      @param num 数字字符串
     *      @param base 数字字符串的编码方式，可以接受 2-16, 32, 64，默认为 10，为 10 时自动识别 0x 编码
     *     
     */
    constructor(num: string, base?: number);

    /**
     * @description 高 32 位数值 
     */
    hi: number;

    /**
     * @description 低 32 位数值 
     */
    lo: number;

    /**
     * @description 将 Int64 内的数值与给定数值比较大小
     *      @param num 指定比较的数值
     *      @return 返回 1 表示 Int64 内的数值比指定数值更大，0 表示相等，-1 表示更小
     *     
     */
    compare(num: Class_Int64): number;

    /**
     * @description 将 Int64 内的数值左移相应的位数，此操作不影响 Int64 原有数值
     *      @param bits 指定移动的位数
     *      @return 返回包含移位以后数值的对象
     *     
     */
    shiftLeft(bits: number): Class_Int64;

    /**
     * @description 将 Int64 内的数值右移相应的位数，此操作不影响 Int64 原有数值
     *      @param bits 指定移动的位数
     *      @return 返回包含移位以后数值的对象
     *     
     */
    shiftRight(bits: number): Class_Int64;

    /**
     * @description 将 Int64 内的数值与给定的数值进行按位 and 操作，此操作不影响 Int64 原有数值
     *      @param num 指定运算的数值
     *      @return 返回包含预算以后数值的对象
     *     
     */
    and(num: Class_Int64): Class_Int64;

    /**
     * @description 将 Int64 内的数值与给定的数值进行按位 or 操作，此操作不影响 Int64 原有数值
     *      @param num 指定运算的数值
     *      @return 返回包含预算以后数值的对象
     *     
     */
    or(num: Class_Int64): Class_Int64;

    /**
     * @description 将 Int64 内的数值与给定的数值进行按位 xor 操作，此操作不影响 Int64 原有数值
     *      @param num 指定运算的数值
     *      @return 返回包含预算以后数值的对象
     *     
     */
    xor(num: Class_Int64): Class_Int64;

    /**
     * @description 将 Int64 内的数值与给定的数值进行加操作，此操作不影响 Int64 原有数值
     *      @param num 指定运算的数值
     *      @return 返回包含预算以后数值的对象
     *     
     */
    add(num: Class_Int64): Class_Int64;

    /**
     * @description 将 Int64 内的数值与给定的数值进行减操作，此操作不影响 Int64 原有数值
     *      @param num 指定运算的数值
     *      @return 返回包含预算以后数值的对象
     *     
     */
    sub(num: Class_Int64): Class_Int64;

    /**
     * @description 将 Int64 内的数值与给定的数值进行乘操作，此操作不影响 Int64 原有数值
     *      @param num 指定运算的数值
     *      @return 返回包含预算以后数值的对象
     *     
     */
    multi(num: Class_Int64): Class_Int64;

    /**
     * @description 将 Int64 内的数值与给定的数值进行除操作，此操作不影响 Int64 原有数值
     *      @param num 指定运算的数值
     *      @return 返回包含预算以后数值的对象
     *     
     */
    div(num: Class_Int64): Class_Int64;

    /**
     * @description 比较当前对象与给定的对象是否相等
     *      @param expected 制定比较的目标对象
     *      @return 返回对象比较的结果
     *     
     */
    equals(expected: Class_object): boolean;

    /**
     * @description 转换成数字类型
     *       @return 返回转换后的数字
     *      
     */
    toNumber(): number;

    /**
     * @description 转换成字符串类型
     *       @param base 字符串进制数，可以接受 2-16, 32, 64，默认为 10
     *       @return 返回转换后的字符串
     *      
     */
    toString(base?: number): string;

}

