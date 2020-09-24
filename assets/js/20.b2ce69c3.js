(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{247:function(t,s,a){t.exports=a.p+"assets/img/PythonSevenW.8dfd1dc6.jpg"},399:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("并发编程是刚需，尤其是在多I/O操作时，多线程，协程，多进程三路英雄各显神通。多线程，协程属于并发操作，多进程属于并行操作，那么你是否清楚了什么是并发，什么是并行？\n")]),t._v(" "),n("h2",{attrs:{id:"并发与并行的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并发与并行的区别"}},[t._v("#")]),t._v(" 并发与并行的区别")]),t._v(" "),n("p",[t._v("借用知乎用户的回答：")]),t._v(" "),n("blockquote",[n("p",[t._v("你吃饭吃到一半，电话来了，你一直到吃完了以后才去接，这就说明你不支持并发也不支持并行。\n你吃饭吃到一半，电话来了，你停了下来接了电话，接完后继续吃饭，这说明你支持并发。\n你吃饭吃到一半，电话来了，你一边打电话一边吃饭，这说明你支持并行。\n并发的关键是你有处理多个任务的能力，不一定要同时。\n并行的关键是你有同时处理多个任务的能力。")])]),t._v(" "),n("p",[n("strong",[t._v("多线程")]),t._v("： 在 Python 里，由于有全局锁 (GIL) 的存在，并发就是多个线程轮流使用 CPU，同一时刻只一个线程在工作，操作系统会在合适的时间进行切换，由于线程的切换速度非常快，给人的感觉是多个任务都在运行。在 I/O 密集型任务场景中，线程切换后，I/O 操作仍然在进行，线程 1 在进行 I/O 操作时，线程 2 可以获得 CPU 资源进行计算，虽然增加了切换成本，却提高了效率。")]),t._v(" "),n("p",[n("strong",[t._v("协程")]),t._v("：\n协程是轻量级线程，是单线程，却可以执行并发任务，原因是协程把切换的权利交给程序员，由程序员决定在哪些环节进行切换。协程可以处理上万的并发，多线程即不可以，因为切换成本太大，会耗尽计算机资源，可以搜索下 C10K 问题。")]),t._v(" "),n("p",[n("strong",[t._v("多进程")]),t._v("： 并行，真正的同一时刻多个任务同时进行。如果想使用多核，就选多进程。")]),t._v(" "),n("p",[t._v("Python 协程标准库只有一个，即 asyncio，而支持多线程，多进程的标准库却有两个：Concurrent.futures 和 Multiprocessing。本文分享一下这两者的使用区别。先看下基本用法。")]),t._v(" "),n("h2",{attrs:{id:"multiprocessing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multiprocessing"}},[t._v("#")]),t._v(" Multiprocessing")]),t._v(" "),n("p",[t._v("Multiprocessing 即有线程池，也是进程池，简单的使用方法如下：")]),t._v(" "),n("p",[t._v("线程池：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" multiprocessing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dummy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pool "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ThreadPool\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" ThreadPool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("processes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iterable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("进程池：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" multiprocessing "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pool "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ProcessPool\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" ProcessPool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("processes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iterable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h2",{attrs:{id:"concurrent-futures"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concurrent-futures"}},[t._v("#")]),t._v(" Concurrent.futures")]),t._v(" "),n("p",[t._v("线程池：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("futures "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ThreadPoolExecutor\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" ThreadPoolExecutor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_workers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iterable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("进程池：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("futures "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ProcessPoolExecutor\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" ProcessPoolExecutor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_workers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n     executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iterable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("有没有觉得他们的使用方法简直一模一样，那么官方为何要提供这样两个标准库呢？")]),t._v(" "),n("h2",{attrs:{id:"二者区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二者区别"}},[t._v("#")]),t._v(" 二者区别")]),t._v(" "),n("p",[t._v("其实，本质区别并不大，有的也只是调用方式略有差异。")]),t._v(" "),n("p",[t._v("先有的 multiprocessing，后有的 concurrent.futures，后者的出现就是为了降低编写代码的难度，后者的学习成本较低。")]),t._v(" "),n("p",[t._v("在速度上，并无谁快谁慢之说。获得多少加速（如果有）取决于硬件，操作系统的详细信息，尤其取决于特定任务需要多少进程间通信。在后台，所有进程都依赖于相同的 OS 原语，使用这些原语的高级 API 并不是j影响速度的主要因素。接下来分享下二者的详细用法。")]),t._v(" "),n("h3",{attrs:{id:"关于-concurrent-futures"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-concurrent-futures"}},[t._v("#")]),t._v(" 关于 concurrent.futures")]),t._v(" "),n("p",[t._v("官方说 concurrent.futures 模块是更高级别的接口，主要是因为它并发和并行的代码更简单了。该模块提供以下对象和函数：")]),t._v(" "),n("ul",[n("li",[t._v("期程对象：concurrent.futures.Future")]),t._v(" "),n("li",[t._v("模块函数：concurrent.futures.wait")]),t._v(" "),n("li",[t._v("执行器对象：concurrent.futures.｛Executor,ThreadPoolExecutor,ProcessPoolExecutor}")])]),t._v(" "),n("p",[t._v("比如，Futures 中的 Executor 类，当我们执行 executor.submit(func) 时，它便会安排里面的 func() 函数执行，并返回创建好的 future 实例，以便你之后查询调用。")]),t._v(" "),n("p",[t._v("这里再介绍一些常用的函数。Futures 中的方法 done()，表示相对应的操作是否完成——True 表示完成，False 表示没有完成。不过，要注意，done() 是 non-blocking 的，会立即返回结果。相对应的 add_done_callback(fn)，则表示 Futures 完成后，相对应的参数函数 fn，会被通知并执行调用。")]),t._v(" "),n("p",[t._v("Futures 中还有一个重要的函数 result()，它表示当 future 完成后，返回其对应的结果或异常。而 as_completed(fs)，则是针对给定的 future 迭代器 fs，在其完成后，返回完成后的迭代器。")]),t._v(" "),n("p",[t._v("官方给的 ThreadPoolExecutor 例子：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("futures\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" urllib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request\n\nURLS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.foxnews.com/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.cnn.com/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://europe.wsj.com/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.bbc.co.uk/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://some-made-up-domain.com/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Retrieve a single page and report the URL and contents")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("load_url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" urllib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urlopen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("timeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We can use a with statement to ensure threads are cleaned up promptly")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("futures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ThreadPoolExecutor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_workers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start the load operations and mark each future with its URL")]),t._v("\n    future_to_url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("submit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("load_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" URLS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" future "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("futures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as_completed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("future_to_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" future_to_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("future"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" future"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" exc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%r generated an exception: %s'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%r page is %d bytes'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])]),n("p",[t._v("请注意：")]),t._v(" "),n("p",[t._v("ProcessPoolExecutor 是 Executor 的子类，它使用进程池来实现异步执行调，使用 multiprocessing 回避 Global Interpreter Lock 但也意味着，作为进程的函数只可以处理和返回可序列化的对象， "),n("code",[t._v("__main__")]),t._v(" 模块必须可以被子进程导入，这意味着 ProcessPoolExecutor 不可以工作在交互式解释器中。")]),t._v(" "),n("h3",{attrs:{id:"关于-multiprocessing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-multiprocessing"}},[t._v("#")]),t._v(" 关于 multiprocessing")]),t._v(" "),n("p",[t._v("multiprocessing 是一个用于产生进程的包，具有与 threading 模块相似 API。 multiprocessing 包同时提供本地和远程并发，使用子进程代替线程，有效避免 Global Interpreter Lock 带来的影响。因此，multiprocessing 模块允许程序员充分利用机器上的多核。可运行于 Unix 和 Windows 。")]),t._v(" "),n("p",[t._v("multiprocessing 模块还引入了在 threading 模块中没有的 API。一个主要的例子就是 Pool 对象，它提供了一种快捷的方法，赋予函数并行化处理一系列输入值的能力，可以将输入数据分配给不同进程处理（数据并行）。下面的例子演示了在模块中定义此类函数的常见做法，以便子进程可以成功导入该模块。这个数据并行的基本例子使用了 Pool ，")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" multiprocessing "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pool\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("x\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" Pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h2",{attrs:{id:"结论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),n("p",[t._v("因此，简单的并发应用，请使用 concurrent.futures，复杂些的，要自己动手实现的，请使用 multiprocessing 吧。初学者直接学习 concurrent.futures。")]),t._v(" "),n("p",[t._v("参考文档：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/concurrent.futures.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.python.org/zh-cn/3/library/concurrent.futures.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.python.org/zh-cn/3/library/multiprocessing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.python.org/zh-cn/3/library/multiprocessing.html"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("(完)")]),t._v(" "),n("p",[t._v("关注微信公众号：Python七号，像玩游戏一样学习 Python。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(247),alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);