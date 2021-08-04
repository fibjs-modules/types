/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/**
 * @description 文件的基础信息对象
 * 
 *   Stat 对象通过 fs.stat, File.stat, fs.readdir 查询，不可独立创建
 *  
 */
declare class Class_Stat extends Class_object {
    /**
     * @description 文件名称 
     */
    readonly name: string;

    /**
     * @description 文件尺寸 
     */
    readonly size: number;

    /**
     * @description 文件权限，Windows 不支持此属性 
     */
    readonly mode: number;

    /**
     * @description 文件最后修改时间 
     */
    readonly mtime: Date;

    /**
     * @description 文件最后访问时间 
     */
    readonly atime: Date;

    /**
     * @description 文件创建时间 
     */
    readonly ctime: Date;

    /**
     * @description 文件拥有者的id 
     */
    readonly uid: number;

    /**
     * @description 文件所属的组id 
     */
    readonly gid: number;

    /**
     * @description 查询文件是否有写入权限
     *      @return 为 true 则有写入权限
     *      
     */
    isWritable(): boolean;

    /**
     * @description 查询文件是否有读权限
     *      @return 为 true 则有读权限
     *      
     */
    isReadable(): boolean;

    /**
     * @description 查询文件是否有执行权限
     *      @return 为 true 则有执行权限
     *      
     */
    isExecutable(): boolean;

    /**
     * @description 查询文件是否隐藏
     *      @return 为 true 则隐藏
     *      
     */
    isHidden(): boolean;

    /**
     * @description 查询文件是否是目录
     *      @return 为 true 则是目录
     *      
     */
    isDirectory(): boolean;

    /**
     * @description 查询文件是否是文件
     *      @return 为 true 则是文件
     *      
     */
    isFile(): boolean;

    /**
     * @description 查询文件是否是符号链接
     *      @return 为 true 则是符号链接
     *      
     */
    isSymbolicLink(): boolean;

    /**
     * @description 查询文件是否是内存文件
     *      @return 为 true 则是内存文件
     *      
     */
    isMemory(): boolean;

    /**
     * @description 查询文件是否是 Socket
     *      @return 为 true 则是 Socket
     *      
     */
    isSocket(): boolean;

}

