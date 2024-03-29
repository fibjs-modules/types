/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description 流解码对象
 *  
 */
declare class Class_StringDecoder extends Class_object {
    /**
     * @description 解码器构造函数
     *      @param encoding 解码编码. 默认 'utf8'.
     *      
     */
    constructor(encoding?: string);

    /**
     * @description 将内部存留的 buffer 作为字符返回。不完整的 UTF-8 和 UTF-16 字节会尝试补全。
     *      @return 解码后的字符串.
     *      
     */
    end(): string;

    /**
     * @description 将内部存留的 buffer 作为字符返回。不完整的 UTF-8 和 UTF-16 字节会尝试补全。
     *      @param buf 需要解码的 Buffer. 在执行 end 之前，会先调用 write 将 buffer 写入。
     *      @return 解码后的字符串.
     *      
     */
    end(buf: Class_Buffer): string;

    /**
     * @description 返回一个解码后的字符串, 确保任何非完整的末尾字符被省略此次不返回，并被存储在内部供下一次的 write 或者 end 方法使用。
     *      @param  buf 需要解码的 Buffer。
     *      @return 解码后的字符串.
     *      
     */
    write(buf: Class_Buffer): string;

    /**
     * @description 内部使用。.
     *      @param buf 需要解码的 Buffer。
     *      @param offset 解码偏移量
     *      @return 解码后的字符串.
     *      
     */
    text(buf: Class_Buffer, offset: number): string;

    /**
     * @description 内部使用。.
     *      @param buf A Buffer containing the bytes to decode.
     *      @return 解码后的字符串.
     *      
     */
    fillLast(buf: Class_Buffer): string;

    /**
     * @description 内部使用。 
     */
    lastNeed: number;

    /**
     * @description 内部使用。 
     */
    lastTotal: number;

    /**
     * @description 内部使用。 
     */
    lastChar: Class_Buffer;

    /**
     * @description 解码编码.内部使用。 
     */
    encoding: string;

}

