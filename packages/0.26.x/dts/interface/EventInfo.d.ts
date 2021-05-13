/// <reference path="../_import/_fibjs.d.ts" />
/// <reference path="../interface/object.d.ts" />
/**
 * @description 事件信息对象，用于在事件中传递信息 
 */
declare class Class_EventInfo extends Class_object {
    /**
     *  查询事件错误编码 
     */
    readonly code: number;

    /**
     *  查询事件错误信息 
     */
    readonly reason: string;

    /**
     *  查询事件类型 
     */
    readonly type: string;

    /**
     *  查询触发事件的对象 
     */
    readonly target: object;


}

