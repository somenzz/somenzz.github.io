(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{247:function(s,t,a){s.exports=a.p+"assets/img/PythonSevenW.8dfd1dc6.jpg"},405:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("一句话，多看官方英文文档，多学习基础知识，尽量使用英文关键词搜索，多使用 stackoverflow，多使用轮子。")]),s._v(" "),n("p",[s._v("下面是自问自答环节。")]),s._v(" "),n("h2",{attrs:{id:"我是怎么入门-web-开发的？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我是怎么入门-web-开发的？"}},[s._v("#")]),s._v(" 我是怎么入门 web 开发的？")]),s._v(" "),n("p",[s._v("因为运维，我入门了 Python，因为运维涉及网站上的操作，我学会了爬虫，同时也接触了开源的调度工具 Airflow，由于它的前端是 Flask 写的，进而了解到 Python 的 web 框架 Flask，Django，对比了众多 web 框架，我喜欢 Django 的 MVC 设计风格，于是跟着追梦人物的博客（链接见文末），学习了 Django，并通过简单的 web 页面实现自己工作中需要的功能。这些功能确实提高了工作效率。小成就感建立。")]),s._v(" "),n("p",[s._v("后面接触到 cmdb，于是从开源项目寻找到了到 open-cmdb（链接见文末），我被这个简洁又实用的前端界面给吸引了，于是看他是怎么实现的，它前端使用 vue，element-ui，后端使用 django，django-rest-framework，于是我又学习了 vue 和 django-rest-framework，当然，我还接触到 redis，elstatic-search，还有大名鼎鼎的 nginx。 每一个技术工具，都有值得深入研究的东西，我这里只是学习如何使用这些轮子，仅仅是使用，就已经让我大开眼界。当然学习不是一下子就学会的，而是通过很多 demo，代码，和实践练习中不断理解由浅入深。通过不断地遇到问题，解决问题，就是这样，我现在可以说我入门了 web 开发。")]),s._v(" "),n("h2",{attrs:{id:"web-开发有哪些需要加强学习的？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web-开发有哪些需要加强学习的？"}},[s._v("#")]),s._v(" web 开发有哪些需要加强学习的？")]),s._v(" "),n("p",[s._v("1、web 开发者需要先了解 http 协议，或者说要深入学习也不为过，这些知识无论从事技术的哪个方向，都用得着，是属于万变不离其宗的宗。")]),s._v(" "),n("p",[s._v("2、学习基础知识 html，javascript，css。如果觉得这些太简单，无需要学习，我建议你看看 winter 老师在极客时间的专栏《重学前端》，大多数人的知识不成体系，没有从点到线到面，等到用时发现脑子一片空白，查资料，上网搜代码，遇到坑时，从大量的问答网站上找答案，浪费了太多的时间，假如时间能重来，我会系统地学习一遍 html，javascript，css，尤其是 css，为了弄好网页的布局，花费的时间比甚至比实现一个完整的页面还多，这都是因为基础知识太弱导致。")]),s._v(" "),n("p",[s._v("3、有了基础知识后，再熟悉框架，如 Vue.js 。只所以要用框架，是为了提高开发效率。同样的，无论写哪一种代码，我们要有轮子意识，自己写代码也好，使用别人的轮子也好，尽量做到复用，软件的价值就在于复用，减少重复劳动。")]),s._v(" "),n("p",[s._v("4、学习一些设计架构方面的知识，小的方便比如为什么需要请求和响应拦截器，为什么需要路由，大的方便比如为什么要前后端分离？ 为什么要微服务？为什么要做负载均衡？")]),s._v(" "),n("p",[s._v("5、安全方面，前端的参数检查，权限控制仅仅是为了防止用户错误的输入或访问，稍微会使用浏览器的开发者工具的，都可以绕过，更别说爬虫，因此后端的权限管理，安全控制是必不可少的，缺少权限意识和安全控制，做出来的网站都是极不安全的。")]),s._v(" "),n("h2",{attrs:{id:"web-开发都踩过哪些坑？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#web-开发都踩过哪些坑？"}},[s._v("#")]),s._v(" web 开发都踩过哪些坑？")]),s._v(" "),n("p",[s._v("这里主要说下 vue，django，django-rest-framework。")]),s._v(" "),n("p",[s._v("1、前后端分离后在生产环境部署时静态资源无法访问。")]),s._v(" "),n("p",[s._v("在开发环境中，前端使用 vue，后端使用 DRF(django rest framework)，前端端口 8080，后端端口 8000，在接口调试中我们需要将 8080/api/ 的请求转发到 8000/api/ 上，使用 vue 配置文件中设置代理服务器就可以轻松转发，访问 django 的静态资源也转发一下，配置信息大致是这样的：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("    devServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        compress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        disableHostCheck"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:8000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                changeOrigin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                pathRewrite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("重写"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                     \n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/media'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:8000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                changeOrigin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                pathRewrite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/media'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/media'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("重写"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("部署在生产环境时，我们在 nginx 中设置同样的代理就行了，这并没毛病，但当你把 django 配置文件中的 DEBUG 设置为 FALSE 后，原来有 django 来驱动的静态不再由 django 来驱动了，需要 nginx 来接管。")]),s._v(" "),n("p",[s._v("遇到此问题的朋友，可以参考我的做法：")]),s._v(" "),n("p",[s._v("第一、先把所有的 static 文件，主要是 css 文件，js 文件，字体文件等收集到一起，vue 的静态文件就在 dist 目录，而 django 的静态文件需要执行以下命令先收集静态文件，主要是 django admin 后台用到的静态文件。")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("python manage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py collectstatic\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这一步会把 django 用到的静态文件全部放在"),n("code",[s._v("STATIC_ROOT")]),s._v(" 的路径，因此这个路径你可以设置成 vue 的 static 路径，这样收集后不用再手动复制到一起了。")]),s._v(" "),n("p",[s._v("第二、通过 django 上传 media 文件也由 nginx 来驱动。")]),s._v(" "),n("p",[s._v("以上两步在 nginx 的配置如下：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("media "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            autoindex on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            alias E"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gitee"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxxxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rearEnd"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("media"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("       \n\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("static "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            autoindex on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            alias E"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\gitee\\xxxxx\\frontEnd\\dist\\static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("现在我们把静态文件都由 nginx 来返回给前端了，但这其实还不够，如果用到了 DRF 的 ModelViewSet ，那么返回的文件信息是一个绝对 url，比如 "),n("code",[s._v("http://127.0.0.1:8000/media/xx/xx.file")]),s._v(", 这在本机访问是没问题的，一旦通过 web 远程访问服务器，那么 "),n("code",[s._v("http://127.0.0.1:8000/media/xx/xx.file")]),s._v(" 肯定是无法访问的，我们需要浏览器在发请求时替换为我们的域名，这一步通过在 nginx 配置文件中代理那块加上 "),n("code",[s._v("proxy_set_header Host $host;")]),s._v(" 注意这里没有 port，因为是有域名访问。")]),s._v(" "),n("p",[s._v("搞到半夜，最终效果比较满意的 nginx 的配置文件长这样（供参考）：")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root E"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\gitee\\xxxxx\\frontEnd\\dist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            try_files $uri $uri"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("media "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            autoindex on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            alias E"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gitee"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxxxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rearEnd"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("media"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("       \n\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("static "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            autoindex on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            alias E"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\gitee\\xxxxx\\frontEnd\\dist\\static"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("admin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_pass http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("admin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_pass http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header Host $host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_set_header Host $host:$server_port;")]),s._v("\n            proxy_set_header X"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For $proxy_add_x_forwarded_for"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[s._v("2、chrome 浏览器一切正常，safari 浏览器对接口报 401 错误。")]),s._v(" "),n("p",[s._v("这个问题坑了我很久，最终在 stackoverflow 上找到答案。")]),s._v(" "),n("p",[s._v('因为你的接口的 url 中少了最后一个斜杠，"/"，这里鄙视一下 safari 浏览器的弱智。')]),s._v(" "),n("p",[s._v("3、其他的都是小坑了，在 stackoverflow 基本上都可以找到答案，最好使用英文关键字检索。")]),s._v(" "),n("p",[s._v("【相关链接】：\n[追梦人物]("),n("a",{attrs:{href:"https://www.zmrenwu.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.zmrenwu.com/"),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://github.com/open-cmdb/cmdb",target:"_blank",rel:"noopener noreferrer"}},[s._v("open-cmdb"),n("OutboundLink")],1),s._v("\n(完)")]),s._v(" "),n("p",[s._v("关注微信公众号：Python七号，像玩游戏一样学习 Python。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(247),alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);