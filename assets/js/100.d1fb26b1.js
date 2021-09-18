(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{685:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("面对计算密集型的任务，除了多进程，就是分布式计算，如何用 Python 实现分布式计算呢？ 今天分享一个很简单的方法，那就是借助于 "),a("a",{attrs:{href:"https://github.com/ray-project/ray",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ray"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"什么是-ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ray"}},[s._v("#")]),s._v(" 什么是 Ray")]),s._v(" "),a("p",[s._v("Ray 是基于 Python 的分布式计算框架，采用动态图计算模型，提供简单、通用的 API 来创建分布式应用。使用起来很方便，你可以通过装饰器的方式，仅需修改极少的的代码，让原本运行在单机的 Python 代码轻松实现分布式计算，目前多用于机器学习。")]),s._v(" "),a("p",[s._v("Ray 的特色：")]),s._v(" "),a("p",[s._v("1、提供用于构建和运行分布式应用程序的简单原语。")]),s._v(" "),a("p",[s._v("2、使用户能够并行化单机代码，代码更改很少甚至为零。")]),s._v(" "),a("p",[s._v("3、Ray Core 包括一个由应用程序、库和工具组成的大型生态系统，以支持复杂的应用程序。比如 Tune、RLlib、RaySGD、Serve、Datasets、Workflows。")]),s._v(" "),a("h2",{attrs:{id:"安装-ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-ray"}},[s._v("#")]),s._v(" 安装 Ray")]),s._v(" "),a("p",[s._v("最简单的安装官方版本的方式：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -U ray\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ray[default]'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果是 Windows 系统，要求必须安装 "),a("code",[s._v("Visual C++ runtime")])]),s._v(" "),a("p",[s._v("其他安装方式见"),a("a",{attrs:{href:"https://docs.ray.io/en/master/installation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"使用-ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-ray"}},[s._v("#")]),s._v(" 使用 Ray")]),s._v(" "),a("p",[s._v("一个装饰器就搞定分布式计算：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ray\nray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" x\n\nfutures "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("futures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [0, 1, 4, 9]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("先执行 "),a("code",[s._v("ray.init()")]),s._v("，然后在要执行分布式任务的函数前加一个装饰器 "),a("code",[s._v("@ray.remote")]),s._v(" 就实现了分布式计算。装饰器 "),a("code",[s._v("@ray.remote")]),s._v(" 也可以装饰一个类：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ray\nray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n\n\ncounters "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ntmp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("increment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" counters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ntmp2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("increment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" counters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ntmp3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("increment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" counters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nfutures "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" counters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("futures"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [3, 3, 3, 3]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("当然了，上述的分布式计算依然是在自己的电脑上进行的，只不过是以分布式的形式。"),a("strong",[s._v("程序执行的过程中")]),s._v("，你可以输入 "),a("code",[s._v("http://127.0.0.1:8265/#/")]),s._v(" 查看分布式任务的执行情况：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtyg2mz7odj61i20u043002.jpg",alt:""}})]),s._v(" "),a("p",[s._v("那么如何实现 Ray 集群计算呢？ 接着往下看。")]),s._v(" "),a("h2",{attrs:{id:"使用-ray-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-ray-集群"}},[s._v("#")]),s._v(" 使用 Ray 集群")]),s._v(" "),a("p",[s._v("Ray 的优势之一是能够在同一程序中利用多台机器。 当然，Ray 可以在一台机器上运行，因为通常情况下，你只有一台机器。但真正的力量是在一组机器上使用 Ray。")]),s._v(" "),a("p",[s._v("Ray 集群由一个头节点和一组工作节点组成。 需要先启动头节点，给 worker 节点赋予头节点地址，组成集群：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtyfbqpob9j60kq08o0t402.jpg",alt:""}})]),s._v(" "),a("p",[s._v("你可以使用 Ray Cluster Launcher 来配置机器并启动多节点 Ray 集群。 你可以在 AWS、GCP、Azure、Kubernetes、阿里云、内部部署和 Staroid 上甚至在你的自定义节点提供商上使用集群启动器。")]),s._v(" "),a("p",[s._v("Ray 集群还可以利用 Ray Autoscaler，它允许 Ray 与云提供商交互，以根据规范和应用程序工作负载请求或发布实例。")]),s._v(" "),a("p",[s._v("现在，我们来快速演示下 Ray 集群的功能，这里是用 Docker 来启动两个 Ubuntu 容器来模拟集群：")]),s._v(" "),a("ul",[a("li",[s._v("环境 1: 172.17.0.2 作为 head 节点")]),s._v(" "),a("li",[s._v("环境 2: 172.17.0.3 作为 worker 节点，可以有多个 worker 节点")])]),s._v(" "),a("p",[s._v("具体步骤：")]),s._v(" "),a("h4",{attrs:{id:"_1-下载-ubuntu-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载-ubuntu-镜像"}},[s._v("#")]),s._v(" 1. 下载 ubuntu 镜像")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker pull ubuntu\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-启动-ubuntu-容器-安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动-ubuntu-容器-安装依赖"}},[s._v("#")]),s._v(" 2. 启动 ubuntu 容器，安装依赖")]),s._v(" "),a("p",[s._v("启动第一个")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -it --name ubuntu-01 ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动第二个")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -it --name ubuntu-02 ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("检查下它们的 IP 地址：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker inspect -f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{ .NetworkSettings.IPAddress }}"')]),s._v(" ubuntu-01\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.2\n$ docker inspect -f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{ .NetworkSettings.IPAddress }}"')]),s._v(" ubuntu-02\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后分别在容器内部安装 python、pip、ray")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3-pip\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ray\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_3-启动-head-节点和-worker-节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动-head-节点和-worker-节点"}},[s._v("#")]),s._v(" 3. 启动 head 节点和 worker 节点")]),s._v(" "),a("p",[s._v("选择在其中一个容器作为 head 节点，这里选择 172.17.0.2，执行：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ray start --head --node-ip-address "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("默认端口是 6379，你可以使用 "),a("code",[s._v("--port")]),s._v(" 参数来修改默认端口，启动后的结果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtylg02q1jj60u013m0y102.jpg",alt:""}})]),s._v(" "),a("p",[s._v("忽略掉警告，可以看到给出了一个提示，如果要把其他节点绑定到该 head，可以这样：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ray start --address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.17.0.2:6379'")]),s._v(" --redis-password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5241590000000000'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在另一个节点执行上述命令，即可启动 worker 节点：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtylh33staj60z90u00yl02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("如果要关闭，执行：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("ray stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_4、执行任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、执行任务"}},[s._v("#")]),s._v(" 4、执行任务")]),s._v(" "),a("p",[s._v("随便选择一个节点，执行前面的脚本，修改下 ray.init() 函数的参数：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" collections "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Counter\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ray\n\nray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.17.0.2:6379'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" _redis_password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5241590000000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''This cluster consists o    f\n    {} nodes in total\n    {} CPU resources in total\n'''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cluster_resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CPU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Return IP address.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gethostbyname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nobject_ids "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nip_addresses "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("object_ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tasks executed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ip_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num_tasks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ip_addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'    {} tasks on {}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num_tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ip_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("执行结果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtyljgpdubj610c0d40th02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("可以看到 172.17.0.2 执行了 4751 个任务，172.17.0.3 执行了 5249 个任务，实现了分布式计算的效果。")]),s._v(" "),a("h2",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("有了 Ray，你可以不使用 Python 的多进程就可以实现并行计算。今天的机器学习主要就是计算密集型任务，不借助分布式计算速度回非常慢，Ray 提供了简单实现分布式计算的解决方案。官方文档提供了很详细的"),a("a",{attrs:{href:"https://docs.ray.io/en/master/auto_examples/overview.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("教程和样例"),a("OutboundLink")],1),s._v("，感兴趣的可以去了解下。")]),s._v(" "),a("p",[s._v("如果有帮助，不妨随手一个关注，每天学点 Python 技术。有问题也可以留言讨论。")])])}),[],!1,null,null,null);t.default=e.exports}}]);