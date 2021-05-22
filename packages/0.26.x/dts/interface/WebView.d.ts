/// <reference path="../_import/_fibjs.d.ts" />
/// <reference path="../interface/EventEmitter.d.ts" />
/**
 * @description 浏览器窗口对象
 *  WebView 是一个嵌入浏览器的窗口组件，目前仅支持 windows ie。
 *  
 *  由于 WebView 内的 JavaScript 程序与 fibjs 并不在同一个引擎内，所以如果需要与宿主程序进行通讯，需要通过消息进行。
 * 
 *  WebView 用于通讯的对象是 external，external 支持一个方法 postMessage 和两个事件 onmessage、onclose。
 * 
 *  一个简单的通讯示例代码如下：
 *  ```JavaScript 
 *  // index.js
 *  var gui = require('gui');
 *  var webview = gui.open('fs:index.html');
 * 
 *  webview.onmessage = msg => console.log(msg);
 *  
 *  webview.onload = evt => webview.postMessage("hello from fibjs");
 * 
 *  webview.wait();
 *  ```
 * 
 *  index.html 的内容如下：
 *  ```html
 *  <script>
 *      external.onclose = function() {
 *      }
 * 
 *      external.onmessage = function(msg){ 
 *          external.postMessage("send back: " + msg);
 *      };
 *  </script>
 *  ```
 *   在用户窗口关闭之前，会触发 external.onclose 事件，external.onclose 可以决定是否关闭。如果 external.onclose 返回 false，则此次操作取消，否则将关闭窗口。
 * 
 *  以下的例子，会在用户点关闭后等待 5 秒后再关闭窗口。
 *  ```html
 *  <script lang="JavaScript">
 *      var bClose = false;
 *      external.onclose = function () {
 *          if (!bClose) {
 *              setTimeout(function () {
 *                  bClose = true;
 *                  window.close();
 *              }, 5000);
 *              return false;
 *          }
 *      }
 *  </script>
 *  ```
 *  上面的代码中，因为 window.close 本身也会触发 onclose 事件，所以需要增加一个开关变量，用于识别是否需要处理此次事件。
 *  
 */
declare class Class_WebView extends Class_EventEmitter {
    /**
     * @description 设置 webview 的页面 html
     * 	 @param html 设置的 html
     * 	 
     */
    setHtml(html: string): void;

    setHtml(html: string, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 打印当前窗口文档
     * 	 @param mode 打印参数，0: 快速打印; 1: 标准打印; 2: 打印预览。缺省为 1
     * 	 
     */
    print(mode?: number): void;

    print(mode?: number, callback?: (err: Error | undefined | null)=>any): void;

    /**
     * @description 关闭当前窗口 
     */
    close(): void;

    close(callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 等待当前窗口关闭	
     * 	宿主程序在创建窗口后，需要进入等待，否则随着宿主程序的退出，窗口将自动关闭。同时 wait 的调用也并不是必须的，你可以在打开窗口后处理其它业务，只需要保证程序不会自行退出即可。
     * 	
     */
    wait(): void;

    wait(callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 向 webview 内发送消息
     *      postMessage 需要在窗口加载完成后发送消息，在此之前发送的消息会丢失。因此建议在 onload 事件触发后再调用此方法。
     * 	 @param msg 要发送的消息
     * 	
     */
    postMessage(msg: string): void;

    postMessage(msg: string, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 查询和设置窗口是否显示 
     */
    visible: boolean;

    /**
     * @description 查询和绑定加载成功事件，相当于 on("load", func); 
     */
    onload: (...args: any[])=>any;

    /**
     * @description 查询和绑定窗口移动事件，相当于 on("move", func); 
     * 
     * 	 以下示例会在窗口移动时输出窗口的左上角坐标：
     * 	 ```JavaScript 
     * 	 var gui = require('gui');
     * 	 var webview = gui.open('fs:index.html');
     * 
     * 	 webview.onmove = evt => console.log(evt.left, evt.top);
     * 	 ```
     * 	
     */
    onmove: (...args: any[])=>any;

    /**
     * @description 查询和绑定窗口尺寸改变事件，相当于 on("size", func);
     * 
     *      以下示例会在窗口改变大小时输出窗口的尺寸：
     *      ```JavaScript
     *      var gui = require('gui');
     *      var webview = gui.open('fs:index.html');
     * 
     *      webview.onresize = evt => console.log(evt.width, evt.height);
     *      ```
     * 	
     */
    onresize: (...args: any[])=>any;

    /**
     * @description 查询和绑定窗口关闭事件，WebView 关闭后会触发此时间，相当于 on("closed", func); 
     */
    onclosed: (...args: any[])=>any;

    /**
     * @description 查询和绑定接受 webview 内 postMessage 消息事件，相当于 on("message", func); 
     */
    onmessage: (...args: any[])=>any;

}

