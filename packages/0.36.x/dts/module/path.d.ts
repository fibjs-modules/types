/// <reference path="../../dts/_import/index.d.ts" />
/**
 * @description path 模块是一个核心模块，它提供了一些工具函数来处理文件和目录的路径。它不会检查路径是否存在或是否是有效路径，而是只提供了处理路径的方法
 * 
 * path 模块提供的方法很多，最常用的是：
 * - join()：将给定的路径片段连接在一起，并处理成标准的路径格式。
 * - resolve()：将路径或路径片段的序列解析为一个绝对路径。
 * - basename()：返回路径中路径的最后一部分。
 * - dirname()：返回指定路径的目录名。
 * - extname()：返回路径中文件的扩展名。
 * 
 * 以下是这些方法的示例代码：
 * ```JavaScript
 * const path = require('path');
 * 
 * // connect path segments using the platform-specific separator as a delimiter,
 * console.log(path.join('/usr', 'local', 'bin'));  // output: /usr/local/bin
 * 
 * // resolve a sequence of paths or path segments into an absolute path
 * console.log(path.resolve('/foo/bar', './baz'));  // output: /foo/bar/baz
 * 
 * // return the last portion of a path
 * console.log(path.basename('/foo/bar/baz'));  // output: baz
 * 
 * // return the directory name of a path
 * console.log(path.dirname('/foo/bar/baz'));  // output: /foo/bar
 * 
 * // return the extension of the path, from the last '.' to end of string in the last portion of the path
 * console.log(path.extname('/foo/bar/baz.txt'));  // output: .txt
 * ```
 * 
 * 除了上述方法，path 模块还提供了很多其他的方法，如 normalize()、delimiter、posix、win32 等等，用于处理路径的规范化、路径分隔符、路径格式的处理等等。这些方法在实际开发中也经常用到。
 * 
 * path 模块为我们处理路径提供了很多方便的工具函数，可以使我们更加方便地处理文件和目录路径，是开发中不可或缺的工具之一。
 *  
 */
declare module 'path' {
    /**
     * @description 标准化路径，处理路径中父目录等信息
     * 
     *      @param path 给定的未处理的路径
     *      @return 返回经过处理的路径
     *      
     */
    function normalize(path: string): string;

    /**
     * @description 查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名
     * 
     *      @param path 给定查询的路径
     *      @param ext 指定扩展名，若文件名中有符合条件的扩展名，将自动取消
     *      @return 返回文件名称
     *      
     */
    function basename(path: string, ext?: string): string;

    /**
     * @description 查询路径中的文件扩展名
     * 
     *      @param path 给定查询的路径
     *      @return 返回得到的扩展名
     *      
     */
    function extname(path: string): string;

    /**
     * @description 尝试将一个对象格式化为路径
     * 
     *      pathObject 支持的参数如下：
     *      ```JavaScript
     *      {
     *         "root": "/",
     *         "dir": "/a/b",
     *         "base": "c.ext",
     *         "ext": ".ext",
     *         "name": "c"
     *      }
     *      ```
     * 
     *      @param pathObject 对象
     *      
     *      @return 返回格式化后的路径
     *      
     */
    function format(pathObject: FIBJS.GeneralObject): string;

    /**
     * @description 解析路径为路径对象
     * 
     *      @param path 路径
     *      @return 返回 pathObject 对象
     *      
     */
    function parse(path: string): FIBJS.GeneralObject;

    /**
     * @description 查询路径中的目录路径
     * 
     *      @param path 给定查询的路径
     *      @return 返回得到的目录的路径
     *      
     */
    function dirname(path: string): string;

    /**
     * @description 转换给定路径为全路径
     * 
     *      @param path 给定转换的路径
     *      @return 返回转换的全路径
     *      
     */
    function fullpath(path: string): string;

    /**
     * @description 识别给定的路径是否是绝对路径
     * 
     *      @param path 给定需要识别的路径
     *      @return 是绝对路径则返回 true
     *      
     */
    function isAbsolute(path: string): boolean;

    /**
     * @description 合并一系列路径成为一个单一路径
     * 
     *      @param ps 一个或多个相关的路径
     *      @return 返回得到的新路径
     *      
     */
    function join(...ps: any[]): string;

    /**
     * @description 合并一系列路径成为一个绝对路径
     * 
     *      @param ps 一个或多个相关的路径
     *      @return 返回得到的新路径
     *      
     */
    function resolve(...ps: any[]): string;

    /**
     * @description 求 _from 到 to 的相对路径
     * 
     *      @param _from 源路径 
     *      @param to 目标路径 
     *      @return 返回得到的相对路径
     *      
     */
    function relative(_from: string, to: string): string;

    /**
     * @description 转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。
     *     see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
     *      @param path 给定的路径。
     *      @return 返回得到的新路径
     *      
     */
    function toNamespacedPath(path?: any): any;

    /**
     * @description 查询当前操作系统的路径分割字符，posix 返回 '/', windows 返回  '\\'
     *      
     */
    const sep: string;

    /**
     * @description 查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回  ';'
     *      
     */
    const delimiter: string;

    /**
     * @description posix 实现，参见 path_posix
     *      
     */
    const posix: FIBJS.GeneralObject;

    /**
     * @description windows 实现，参见 path_win32
     *      
     */
    const win32: FIBJS.GeneralObject;

}

