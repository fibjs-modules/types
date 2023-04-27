/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description msgpack是一种比 JSON 更轻量的数据交换格式，它可以将 JSON 对象序列化为二进制数据，以达到更快、更高效的数据交换效果
 * 
 *  msgpack 编码与解码模块的引用方式为
 *  ```JavaScript
 *  var encoding = require('encoding');
 *  var msgpack = encoding.msgpack;
 *  ```
 *  或者
 *  ```JavaScript
 *  var msgpack = require('msgpack');
 *  ```
 *  
 *  msgpack 模块提供了两个主要的方法用于消息处理：encode 和 decode。
 * 
 * - `encode`：以 msgpack 编码写入给定的数据`Value Message.encode(Value data)`。示例代码：
 * 
 *   ```
 *   var msgpack = require('msgpack');
 *   
 *   var data = {
 *       foo: 'bar'
 *   };
 *   var buffer = msgpack.encode(data);
 *   ```
 * 
 *   该方法首先需要传入需要写入的数据，然后将该数据保存为msgpack格式的二进制数据并返回，编码过程是非常快速的。
 * 
 * - `decode`：以 msgpack 编码解析消息中的数据`Value Message.decode()`。示例代码：
 * 
 *   ```
 *   var msgpack = require('msgpack');
 *   var data = msgpack.encode({foo: 'bar'});
 * 
 *   var unpackedData = msgpack.decode(data);
 *   ```
 * 
 *   此时解析中的数据将会是一个 json 对象`{foo: 'bar'}`，可以直接使用。
 * 
 * msgpack 模块是一种比较高效的序列化和反序列化消息数据的方式，它能够将消息数据以二进制的形式发送到对方，并且避免了文本数据传输时的字符组合和还原的效率问题，该模块非常适合在需要处理大量消息数据的场景下使用。
 *  
 */
declare module 'msgpack' {
    /**
     * @description 以 msgpack 格式编码变量
     * 	 @param data 要编码的变量
     * 	 @return 返回编码的二进制数据
     * 	 
     */
    function encode(data: any): Class_Buffer;

    /**
     * @description 以 msgpack 方式解码字符串为一个变量
     * 	 @param data 要解码的二进制数据
     * 	 @return 返回解码的变量
     * 	 
     */
    function decode(data: Class_Buffer): any;

}

