/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../module/assert.d.ts" />
/**
 * @description 测试套件模块，用以定义管理测试套件
 * 
 * 使用方法 ：
 * 
 * ```JavaScript
 * var test = require('test');
 * test.setup();
 * 
 * describe('test', () => {
 *     before(() => {
 *         // setup before the whole test
 *     });
 * 
 *     beforeEach(() => {
 *         // setup before each test
 *     });
 * 
 *     after(() => {
 *         // cleanup after the whole test
 *     });
 * 
 *     afterEach(() => {
 *         // cleanup after each test
 *     });
 * 
 *     it('case', () => {
 *         assert.ok(true);
 *     });
 * 
 *     // ignored test case
 *     xit('case', () => {
 *         assert.ok(true);
 *     });
 * 
 *     // ignored test case
 *     it.skip('case', () => {
 *         assert.ok(true);
 *     });
 * 
 *     // only test case
 *     oit('case', () => {
 *         assert.ok(true);
 *     });
 * 
 *     // only test case
 *     it.only('case', () => {
 *         assert.ok(true);
 *     });
 * });
 * 
 * // async function test
 * describe('test async', () => {
 *   it('pass case', async() => {
 *     assert.ok(true);
 *   });
 * 
 *   it('error case', async() => {
 *       throw new Error('some thing wrong!');
 *   });
 * });
 * 
 * // callback function test
 * // cannot use callback mode in jsc
 * describe('test callback', () => {
 *   it('pass case', done => {
 *     setTimeout(() => {
 *       assert.ok(true);
 *       done();
 *     }, 0);
 *   });
 * 
 *   it('error case', done => {
 *     setTimeout(() => {
 *       done(new Error('some thing wrong!'));
 *     }, 0);
 *   });
 * });
 * 
 * process.exit(-test.run(console.DEBUG));
 * ```
 *  
 */
declare module 'test' {
    /**
     * @description 定义一个测试模块，可嵌套定义
     *      @param name 定义模块名称
     *      @param block 模块初始化代码
     *      
     */
    function describe(name: string, block: (...args: any[])=>any): void;

    /**
     * @description 暂停测试的模块定义，test.setup 后可使用 describe.skip 调用
     *      @param name 定义模块名称
     *      @param block 模块初始化代码
     *      
     */
    function xdescribe(name: string, block: (...args: any[])=>any): void;

    /**
     * @description 独立测试的模块定义，test.setup 后可使用 describe.only 调用
     *      @param name 定义模块名称
     *      @param block 模块初始化代码
     *      
     */
    function odescribe(name: string, block: (...args: any[])=>any): void;

    /**
     * @description 定义一个测试项目
     *      @param name 定义项目名称
     *      @param block 测试内容
     *      
     */
    function it(name: string, block: (...args: any[])=>any): void;

    /**
     * @description 暂停测试的项目定义，test.setup 后可使用 it.skip 调用
     *      @param name 定义项目名称
     *      @param block 测试内容
     *      
     */
    function xit(name: string, block: (...args: any[])=>any): void;

    /**
     * @description 独立测试的项目定义，test.setup 后可使用 it.only 调用
     *      @param name 定义项目名称
     *      @param block 测试内容
     *      
     */
    function oit(name: string, block: (...args: any[])=>any): void;

    /**
     * @description 定义当前测试模块进入事件
     *      @param func 事件函数
     *      
     */
    function before(func: (...args: any[])=>any): void;

    /**
     * @description 定义当前测试模块退出事件
     *      @param func 事件函数
     *      
     */
    function after(func: (...args: any[])=>any): void;

    /**
     * @description 定义当前测试模块测试项目进入事件
     *      @param func 事件函数
     *      
     */
    function beforeEach(func: (...args: any[])=>any): void;

    /**
     * @description 定义当前测试模块测试项目退出事件
     *      @param func 事件函数
     *      
     */
    function afterEach(func: (...args: any[])=>any): void;

    /**
     * @description 开始执行定义的测试模块
     *      @param loglevel 指定进行测试时的日志输出级别，ERROR 时，项目报错信息集中在报告后显示，低于 ERROR 时，输出信息随时显示，高于 ERROR 时，只显示报告
     *      @return 返回测试用例统计结果，正确则返回 0，错误则返回错误个数
     *      
     */
    function run(loglevel: number): number;

    /**
     * @description 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出 
     */
    const assert: typeof import ('assert');

    /**
     * @description 初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量 
     */
    function setup(): void;

    /**
     * @description 设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75
     *      
     */
    var slow: number;

}

