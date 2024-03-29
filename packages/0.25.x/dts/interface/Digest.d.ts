/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description 信息摘要对象 
 */
declare class Class_Digest extends Class_object {
    /**
     * @description 更新二进制摘要信息
     *      @param data 二进制数据块
     *      @return 返回信息摘要对象本身
     *      
     */
    update(data: Class_Buffer): Class_Digest;

    /**
     * @description 计算并返回摘要
     *      @param data 二进制数据块，此数据块将在计算前更新进摘要
     *      @return 返回摘要的二进制数据
     *      
     */
    digest(data: Class_Buffer): Class_Buffer;

    /**
     * @description 计算并返回摘要
     *       @return 返回摘要的二进制数据
     *      
     */
    digest(): Class_Buffer;

    /**
     * @description 查询当前信息摘要算法的摘要字节数 
     */
    readonly size: number;

}

