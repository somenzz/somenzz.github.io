(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{672:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("现在的 Web 服务有一个很重要的性能指标叫 QPS，QPS 的全称是 Queries Per Second 意思是“每秒查询率”，是一台服务器每秒能够相应的查询次数，是对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准。 QPS 越高，说明并发度高，服务器每秒可以服务更多的用户。")]),s._v(" "),a("p",[s._v("Python 爱好者多数会选择 Django 来开发 Web 应用。但是 Python 多线程的性能并不是很高，如何提升 Django 服务的并发性和可用性呢？ 一个很简单的办法就是负载均衡，本文分享如何为 Django 服务配置负载均衡。")]),s._v(" "),a("p",[s._v("所谓负载均衡不难理解，就是我们会有多个后端服务，一般分配在多个服务器上，前端的请求会被均衡的分配到后端的服务上，示意图如下所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwkrn5jnm3j312w0ixt99.jpg",alt:""}})]),s._v(" "),a("p",[s._v("负载均衡器接收来自客户端的请求，然后将请求转发到其中一台服务器。服务器然后将所需的 HTML 内容或资源返回给负载均衡器，然后负载均衡器将其转发回客户端。")]),s._v(" "),a("p",[s._v("有多种负载均衡器可供选择，例如 Nginx、Apache、Tomcat 和 HAProxy，你可以选择其中任何一个，但现在我将只展示如何在 Windows 上使用 Nginx。")]),s._v(" "),a("h3",{attrs:{id:"下载-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-nginx"}},[s._v("#")]),s._v(" 下载 nginx")]),s._v(" "),a("p",[s._v("首先，到 nginx 的下载地址"),a("a",{attrs:{href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginx.org/en/download.html"),a("OutboundLink")],1),s._v("，它会显示如下页面:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwkrs07njtj311h0icabi.jpg",alt:""}})]),s._v(" "),a("p",[s._v("然后点击任一版本的 Nginx，我推荐使用稳定版，但其实无所谓。下载后，将其解压缩到任何位置（在您的桌面或文档上即可）。解压后，进入刚才安装的 nginx 目录，在目录地址输入“cmd”，如下图。并且会出现命令提示符。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwkrt8a2q0j30nt0dfdge.jpg",alt:""}})]),s._v(" "),a("p",[s._v("在命令提示符下，输入“start nginx”。完成后，您可以通过打开浏览器并在 url 栏中输入“localhost”来检查 nginx 是否正常工作。如果在输入“localhost”后出现下面的屏幕，Nginx 可以正常工作。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwkrtwpr8dj311x0i93yu.jpg",alt:""}})]),s._v(" "),a("p",[s._v("一旦 Nginx 完美运行，我们就可以配置 Nginx 以将负载分配到我们的服务器，我这里用 Django 的 runserver 作为服务进行演示。")]),s._v(" "),a("h3",{attrs:{id:"配置-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx"}},[s._v("#")]),s._v(" 配置 nginx")]),s._v(" "),a("p",[s._v("进入nginx'目录，打开“conf”文件夹，然后你应该看到“nginx.conf”文件。在您熟悉的任何文本编辑器上打开它，我现在将使用 Visual Studio Code，默认情况下 nginx.conf 的内容如下所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwkrwlgwzfj311x0ka3z0.jpg",alt:""}})]),s._v(" "),a("p",[s._v("只需要注释掉 http 部分或者直接删除它，添加以下内容：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" myproject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8002")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8003")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("myproject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("这段配置的意思为 nginx 会监听本机的 80 端口，一旦有访问，就会随机分配到以下四个服务进行请求：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    server localhost:8000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server localhost:8001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server localhost:8002"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server localhost:8003"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("请确保开启 4 个终端来模拟 4 个服务，每个终端都执行这个命令，后面跟上自己的端口号：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("python manage.py runserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"配置-django"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-django"}},[s._v("#")]),s._v(" 配置 Django")]),s._v(" "),a("p",[s._v("不过你可能很想知道我这个请求到底分配给了谁，那就在 views.py 中加入这个方法：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("http "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" HttpResponse\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nginx_view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    html "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<h1>Using port "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("META"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SERVER_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<h1>"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" HttpResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后在对应的 urls.py 上配置好路径 / ，来映射到上面的视图函数:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" admin\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urls "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" path\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" nginx_view\nurlpatterns "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test_load_banlance/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nginx_view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("p",[s._v("打开浏览器，地址栏输入 localhost/story10 回车，会发现如下页面：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwksvhs5jrj30qo0aewey.jpg",alt:""}})]),s._v(" "),a("p",[s._v("然后关闭 8000 服务，再次刷新浏览器，会发现负载均衡器已经转发至 8001：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwksvwj308j30qo0983yx.jpg",alt:""}})]),s._v(" "),a("p",[s._v("是不是很酷呢？")]),s._v(" "),a("p",[s._v("如果你持续刷新，它会在剩余的服务中进行随机循环请求，也就是说每当刷新一次，就会随机换一个服务器进行请求。当然了，你可以参考 "),a("a",{attrs:{href:"http://nginx.org/en/docs/beginners_guide.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx 文档"),a("OutboundLink")],1),s._v("对这种选择后端服务的方式进行修改。")]),s._v(" "),a("h2",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("本文分享了 nginx 作为负载均衡器的最简单配置，以及如何在 Django 中检测访问的是哪一个服务，都比较简单，如果有收获还请点赞、在看、关注支持。")])])}),[],!1,null,null,null);t.default=r.exports}}]);