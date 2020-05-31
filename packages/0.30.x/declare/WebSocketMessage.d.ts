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
	* @brief websocket 消息对象
	* @detail 创建方法：,```JavaScript,var ws = require("ws");,,var msg = new ws.Message();,```
	*/
/// <reference path="Message.d.ts" />
declare class Class_WebSocketMessage extends Class_Message {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和读取 websocket 掩码标记，缺省为 true
	 * 
	 * 
	 * @type Boolean
	 */
	
	masked: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和读取 websocket 压缩状态，缺省为 false
	 * 
	 * 
	 * @type Boolean
	 */
	
	compress: boolean
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置最大包尺寸，以字节为单位，缺省为 67108864(64M)
	 * 
	 * 
	 * @type Integer
	 */
	
	maxSize: number
	
	
	
	/**
	 * 
	 * @brief 包处理消息对象构造函数
	 * @param type websocket 消息类型，缺省为 websocket.BINARY
	 * @param masked websocket 消息掩码，缺省为 true
	 * @param compress 标记消息是否压缩，缺省为 false
	 * @param maxSize 最大包尺寸，以 MB 为单位，缺省为 67108864(64M)
	 * 
	 * 
	 * 
	 */
	constructor(type?: number/** = undefined*/, masked?: boolean/** = true*/, compress?: boolean/** = false*/, maxSize?: number/** = 67108864*/);

} /** endof class */

/** endof `module Or Internal Object` */


