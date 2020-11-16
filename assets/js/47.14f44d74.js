(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{406:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("第一次使用 Jupyter 的 terminal 之时，我就觉得这个功能非常神奇，且大有用武之地。这不，现在都流行云服务器了，在浏览器上运行个 terminal 简直成了程序员的日常。无论走到哪，打开浏览器上的 terminal，中断的现场立刻复现，你可以快速进入编码状态。这就是 web terminal 的最大的好处，让我们和实际的机器通过网络联通了。可以想象，浏览器上运行的东西只会越来越多，云文档，云端 IDE 正在流行起来。")]),s._v(" "),a("p",[s._v("Jupyter 的 terminal 我研究了下，实现原理就是 websocket，xterm.js，如果需要将这个 terminal 嵌入到自己的网站项目中，还是要深入研究下，最好自己动手实现一个，使用 websocket 可以很容易实现一个最小的 demo，效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/07/11/UQklin.gif",alt:""}})]),s._v(" "),a("p",[s._v("虽然实现了将服务器执行长命令的输出结果持续推送至浏览器，但没有实现terminal 的窗口特效，要实现这个，需要使用 xterm.js (https://github.com/xtermjs/xterm.js/), 于是我搜了下 xterm.js 的使用方法，我找到了 webssh，这是别人早已经写好的东西，正好符合我的需求，果断放弃自己实现，直接拿来使用并学习，这种感觉真好。先看两张图，可以大概看出功能点：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/07/11/UQk8zV.png",alt:"login"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/07/11/UQkJMT.png",alt:"web terminal"}})]),s._v(" "),a("p",[s._v("这个 webssh 的特点如下：支持 ssh 用户名密码登录，空密码也可以，支持公钥认证，terminal 可以全屏，调整窗口大小，自动检查服务器的默认编码并适配，这在 Jupyter 的 terminal 中是不可以的，所以对我来说是非常实用的 web 终端了。它的工作原理也非常清晰，如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("+---------+     http     +--------+    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("    +-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" browser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" webssh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------+   websocket  +--------+    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v("    +-----------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("安装和使用方法也简单，先通过 pip install webssh 进行安装，在命令行执行 wssh 即可在默认的 8888 端口启动 web terminal，也可以给定服务端的参数配置：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start a http server with specified listen address and listen port")]),s._v("\nwssh --address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.2.2.2'")]),s._v(" --port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start a https server, certfile and keyfile must be passed")]),s._v("\nwssh --certfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/path/to/cert.crt'")]),s._v(" --keyfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/path/to/cert.key'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# missing host key policy")]),s._v("\nwssh --policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("reject\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# logging level")]),s._v("\nwssh --logging"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("debug\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# log to file")]),s._v("\nwssh --log-file-prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main.log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# more options")]),s._v("\nwssh --help\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("还可以通过 url 参数来使用前端：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Passing form data (password must be encoded in base64, privatekey not supported)")]),s._v("\nhttp://localhost:8888/?hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("str_base64_encoded\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Passing a terminal background color")]),s._v("\nhttp://localhost:8888/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bgcolor=green")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Passing a user defined title")]),s._v("\nhttp://localhost:8888/?title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-ssh-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Passing an encoding")]),s._v("\nhttp://localhost:8888/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#encoding=gbk")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Passing a command executed right after login")]),s._v("\nhttp://localhost:8888/?command"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pwd\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Passing a terminal type")]),s._v("\nhttp://localhost:8888/?term"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xterm-256color\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("作者还提供来 docker，可以说非常方便了，源码也是开源的，见：https://github.com/huashengdun/webssh ，github star 1.5K，也是个优秀的个人项目。如果你也想把 terminal 搬到浏览器上，学习这个项目就足够了。")]),s._v(" "),a("p",[s._v("首发于公众号「Python七号」")])])}),[],!1,null,null,null);t.default=n.exports}}]);