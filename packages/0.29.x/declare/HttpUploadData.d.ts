/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.30.0-dev                                               *
 *   	- date	: Nov 22 2019 22:42:15                                     *
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
	* @brief 包含 multipart 的一个条目数据
	* @detail 
	*/

declare class Class_HttpUploadData extends Class__object {
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据的文件名
	 * 
	 * @readonly
	 * @type String
	 */
	
	fileName: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据的类型
	 * 
	 * @readonly
	 * @type String
	 */
	
	contentType: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据的传输编码类型
	 * 
	 * @readonly
	 * @type String
	 */
	
	contentTransferEncoding: string
	
	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据部分的流对象
	 * 
	 * @readonly
	 * @type SeekableStream
	 */
	
	body: Class_SeekableStream
	
	
	
} /** endof class */

/** endof `module Or Internal Object` */

