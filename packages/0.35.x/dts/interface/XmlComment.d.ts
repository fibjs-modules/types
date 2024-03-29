/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/XmlCharacterData.d.ts" />
/**
 * @description XmlComment 对象表示文档中注释节点的内容
 * 
 * XmlComment 节点表示 XML 文档中的注释。
 * 使用由 XmlCharacterData 接口继承的 data 属性，或使用由 XmlNode 接口继承的 nodeValue 属性，可以访问注释的内容。（即 <!-- 和 --> 之间的文本）。使用由 XmlCharacterData 接口继承的各种方法可以操作注释的内容。
 * 
 * 使用 XmlDocument.createComment() 来创建一个注释对象。
 * 
 */
declare class Class_XmlComment extends Class_XmlCharacterData {
}

