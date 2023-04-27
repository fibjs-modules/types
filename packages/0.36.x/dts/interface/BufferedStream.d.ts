/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Stream.d.ts" />
/**
 * @description 缓存读取对象
 * 
 *  BufferedStream 对象是一个用于二进制流读取的缓存流对象。它可以对其底层流进行缓存，并提供文本读取能力。在使用 BufferedStream 对象时，只需要将待处理的流对象作为构造参数传入即可。创建方法：
 *  ```JavaScript
 *  var reader = new io.BufferedStream(stream);
 *  ```
 * 
 *  BufferedStream 继承自 Stream 对象，具有 Stream 对象的所有方法和属性。其中，stream 属性用于查询创建缓存对象时的流对象。BufferedStream 对象还支持 EOL 属性用于查询和设置行结尾标识（缺省时，posix:\"\n\"；windows:\"\r\n\"）以及 charset 属性用于查询和设置当前对象处理文本时的字符集，缺省为 utf-8。
 * 
 *  BufferedStream 对象在读取流数据时，采用分块的方式，先将数据读入到缓冲区中，再从缓冲区中获取数据，这样可以有效减少读取流数据时的网络交互次数，提高了读取效率。
 * 
 *  BufferedStream 对象还提供了 write 方法将给定的数据写入流，并在底层流对象处于写入阻塞时，等待其可以接受数据后再进行下一步操作。Flush 方法将文件缓冲区内容写入物理设备。close 方法关闭当前流对象。部分方法的具体实现可以在子类中进行实现。
 * 
 *  在使用 BufferedStream 对象时，需要注意不要将其与其他已经在使用的底层流对象混用，否则可能会导致数据重复读取或者读取错误。
 * 
 *  下面是一个使用 BufferedStream 对象读取文件内容的示例代码：
 *   ```JavaScript
 *   var fs = require('fs');
 *   var io = require('io');
 * 
 *   var filename = "test.txt";
 * 
 *   // open file
 *   var file = fs.openFile(filename);
 * 
 *   // create BufferedStream object
 *   var reader = new io.BufferedStream(file);
 * 
 *   // read file content
 *   var lines = reader.readLines();
 * 
 *   for(var i = 0; i < lines.length; i ++)
 *       console.log(lines[i]);
 * 
 *   // close file
 *   file.close();
 *   ```
 *  
 */
declare class Class_BufferedStream extends Class_Stream {
    /**
     * @description BufferedStream 构造函数
     *       @param stm BufferedStream 的二进制基础流对象
     *      
     */
    constructor(stm: Class_Stream);

    /**
     * @description 读取指定字符的文本
     *      @param size 指定读取的文本字符个数，以 utf8 或者指定的编码字节数为准
     *      @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
     *      
     */
    readText(size: number): string;

    readText(size: number, callback: (err: Error | undefined | null, retVal: string)=>any): void;

    /**
     * @description 读取一行文本，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
     *      @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
     *      @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
     *      
     */
    readLine(maxlen?: number): string;

    readLine(maxlen?: number, callback?: (err: Error | undefined | null, retVal: string)=>any): void;

    /**
     * @description 以数组方式读取一组文本行，行结尾标识基于 EOL 属性的设置，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"
     *      @param maxlines 指定此次读取的最大行数，缺省读取全部文本行
     *      @return 返回读取的文本行数组，若无数据可读，或者连接中断，空数组
     *      
     */
    readLines(maxlines?: number): any[];

    /**
     * @description 读取一个文本字符串，以指定的字节为结尾
     *      @param mk 指定结尾的字符串
     *      @param maxlen 指定此次读取的最大字符串，以 utf8 编码字节数为准，缺省不限制字符数
     *      @return 返回读取的文本字符串，若无数据可读，或者连接中断，则返回 null
     *      
     */
    readUntil(mk: string, maxlen?: number): string;

    readUntil(mk: string, maxlen?: number, callback?: (err: Error | undefined | null, retVal: string)=>any): void;

    /**
     * @description 写入一个字符串
     *      @param txt 指定写入的字符串
     *      
     */
    writeText(txt: string): void;

    writeText(txt: string, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 写入一个字符串，并写入换行符
     *      @param txt 指定写入的字符串
     *      
     */
    writeLine(txt: string): void;

    writeLine(txt: string, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 查询创建缓存对象时的流对象 
     */
    readonly stream: Class_Stream;

    /**
     * @description 查询和设置当前对象处理文本时的字符集，缺省为 utf-8 
     */
    charset: string;

    /**
     * @description 查询和设置行结尾标识，缺省时，posix:\"\\n\"；windows:\"\\r\\n\"   
     */
    EOL: string;

}

