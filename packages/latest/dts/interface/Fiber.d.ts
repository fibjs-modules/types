/// <reference path="../../dts/_import/index.d.ts" />
/// <reference path="../interface/object.d.ts" />
/**
 * @description 纤程操作对象，此对象不可直接创建
 * 
 *  使用 coroutine.start 创建纤程后，将返回此对象，用于纤程处理和纤程间通信。
 *  纤程主函数可以通过 this 访问本纤程对象，也可通过 coroutine.current 获取当前纤程。
 *  ```JavaScript
 *  function func(v1)
 *  {
 *    console.log(v1 + this.v);
 *  }
 * 
 *  var fb = coroutine.start(func,100);
 * 
 *  fb.v = 123;
 * 
 *  fb.join();
 *  ```
 * 
 *  纤程局部存储通过共享的 Fiber 对象完成，通过 coroutine.current 获取当前纤程，通过修改和查询其变量达到共享数据的目的。
 * 
 *  ```JavaScript
 *  function func()
 *  {
 *    console.log(coroutine.current().v);
 *  }
 * 
 *  coroutine.current().v = 100;
 * 
 *  func();
 *  ```
 * 
 *  纤程在创建时，会自动复制当前纤程的局部变量到新的纤程，之后，各自的局部变量的修改不会相互影响，除非变量本身为对象引用。
 * 
 *  ```JavaScript
 *  function func()
 *  {
 *    console.log(coroutine.current().v);
 *  }
 * 
 *  coroutine.current().v = 100;
 * 
 *  var fb = coroutine.start(func);
 * 
 *  coroutine.current().v = 200;
 * 
 *  fb.join();
 *  ```
 *  
 */
declare class Class_Fiber extends Class_object {
    /**
     * @description 等待纤程结束 
     */
    join(): void;

    /**
     * @description 查询纤程的唯一 id 
     */
    readonly id: number;

    /**
     * @description 查询纤程的调用纤程 
     */
    readonly caller: Class_Fiber;

    /**
     * @description 查询纤程的调用堆栈
     */
    readonly stack: string;

    /**
     * @description 查询纤程已使用的堆栈尺寸
     */
    readonly stack_usage: number;

}

