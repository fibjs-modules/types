/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.31.0-dev                                               *
 *   	- date	: May 28 2020 19:40:10                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */

/// <reference path="_common.d.ts" />
/// <reference path="object.d.ts" />





/** module Or Internal Object */
/**
	* @brief http 协议转换处理器
	* @detail 用以将数据流转换为 http 协议消息，创建方式：,```JavaScript,var hdlr = new mq.HttpHandler(...);,```,或者：,```JavaScript,var hdlr = new http.Handler(...);,```
	*/
/// <reference path="Handler.d.ts" />
declare class Class_HttpHandler extends Class_Handler {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置最大请求头个数，缺省为 128
	 * 
	 * 
	 * @type Integer
	 */
	
	maxHeadersCount: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 64
	 * 
	 * 
	 * @type Integer
	 */
	
	maxBodySize: number
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置服务器名称，缺省为：fibjs/0.x.0
	 * 
	 * 
	 * @type String
	 */
	
	serverName: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief http 协议转换处理器当前事件处理接口对象
	 * 
	 * 
	 * @type Handler
	 */
	
	handler: Class_Handler
	
	
	
	/**
	 * 
	 * @brief 创建一个 http 协议处理器对象，将流对象的数据转变为 http 消息对象
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * 
	 * 
	 * 
	 */
	constructor(hdlr: Class_Handler);

	/**
	 * 
	 * @brief 允许跨域请求
	 * @param allowHeaders 指定接受的 http 头字段
	 * 
	 * 
	 * 
	 */
	enableCrossOrigin(allowHeaders?: string/** = "Content-Type"*/): void;

} /** endof class */

/** endof `module Or Internal Object` */

