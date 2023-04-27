/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/DbConnection.d.ts" />
/**
 * @description MySQL 对象是用于操作 MySQL 数据库的类,
 * 
 * 下面是一个使用 MySQL 对象的示例。
 * 
 * ```JavaScript
 * var db = require('db');
 * 
 * var conn = db.openMySQL('mysql://root:password@localhost/test');
 * 
 * // call execute method to insert data
 * var res = conn.execute("insert into user(username, password) values ('testuser', '123456')");
 * console.log(res);
 * 
 * // call execute method to query data
 * res = conn.execute("select * from user where username = 'testuser'");
 * console.log(res);
 * 
 * conn.close();
 * ```
 * 以上示例中，首先我们利用 db.openMySQL 方法创建一个 MySQL 的连接对象并指定连接信息。
 * 然后我们使用 execute 方法向我们提前准备好的 user 数据表中添加一个新的用户，之后我们再调用 execute 方法查询刚刚创建的用户记录。
 * 最终我们调用 close 方法关闭链接对象，并完成了我们的 MySQL 操作。
 * 
 */
declare class Class_MySQL extends Class_DbConnection {
    /**
     * @description 数据库连接接收缓存尺寸 
     */
    rxBufferSize: number;

    /**
     * @description 数据库连接发送缓存尺寸 
     */
    txBufferSize: number;

}

