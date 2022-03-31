(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{773:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("用 Django 用的多了，在用其他语言或框架会有点吃力，因为 Django 是保姆级别的，基本上 Web 开发你能遇到的问题，都有现成的解决方案，拿来就用即可。比如说权限管理，甚至数据库里面的表都给你设计好了。 如果没有 Django，比如说你用了 Flask，或者 FastAPI，那改怎么做权限管理？你可能会说自己建立角色表、权限表，角色和权限的映射表，再为用户配置角色，为角色配置权限，最后在视图函数或拦截器上编写判断逻辑。")]),s._v(" "),a("p",[s._v("没错，逻辑基本是这样，但是实现起来非常麻烦，有没有比较简单又高效的方案呢？ 有，那就是 Casbin。")]),s._v(" "),a("h2",{attrs:{id:"casbin-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casbin-是什么"}},[s._v("#")]),s._v(" Casbin 是什么")]),s._v(" "),a("p",[s._v("Casbin 是一个强大的、高效的开源访问控制框架，其权限管理机制支持多种访问控制模型。GitHub 有 11.1 k 的星。")]),s._v(" "),a("p",[s._v("Casbin 还是一个通用的框架，支持主流的编程语言：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gym1vnulmdj31a20owdk4.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gym1wd30kcj30wi0u0te6.jpg",alt:""}})]),s._v(" "),a("p",[s._v("Casbin 可以做：")]),s._v(" "),a("ul",[a("li",[s._v("支持自定义请求的格式，默认的请求格式为 {subject, object, action}。")]),s._v(" "),a("li",[s._v("具有访问控制模型 model 和策略 policy 两个核心概念。")]),s._v(" "),a("li",[s._v("支持 RBAC 中的多层角色继承，不止主体可以有角色，资源也可以具有角色。")]),s._v(" "),a("li",[s._v("支持内置的超级用户 例如：root 或 administrator。超级用户可以执行任何操作而无需显式的权限声明。")]),s._v(" "),a("li",[s._v("支持多种内置的操作符，如 keyMatch，方便对路径式的资源进行管理，如 /foo/bar 可以映射到 /foo*")])]),s._v(" "),a("p",[s._v("Casbin 不能：")]),s._v(" "),a("ul",[a("li",[s._v("身份认证 authentication（即验证用户的用户名和密码），Casbin 只负责访问控制。应该有其他专门的组件负责身份认证，然后由 Casbin 进行访问控制，二者是相互配合的关系。")]),s._v(" "),a("li",[s._v("管理用户列表或角色列表。 Casbin 认为由项目自身来管理用户、角色列表更为合适， 用户通常有他们的密码，但是 Casbin 的设计思想并不是把它作为一个存储密码的容器，而是存储 RBAC 方案中用户和角色之间的映射关系。")])]),s._v(" "),a("h2",{attrs:{id:"casbin-如何工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casbin-如何工作"}},[s._v("#")]),s._v(" Casbin 如何工作")]),s._v(" "),a("p",[s._v("在 Casbin 中, 访问控制模型被抽象为基于 PERM (Policy, Effect, Request, Matcher) 的一个文件。 因此，切换或升级项目的授权机制与修改配置一样简单。")]),s._v(" "),a("p",[s._v("举个例子吧，编写这样一个模型配置文件 model.conf：")]),s._v(" "),a("div",{staticClass:"language-cnf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Request definition\n[request_definition]\nr = sub, obj, act\n \n# Policy definition\n[policy_definition]\np = sub, obj, act\n \n# Policy effect\n[policy_effect]\ne = some(where (p.eft == allow))\n \n# Matchers\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("你说 sub、obj、act 是啥？其实是抽象出来的东西，你可以这么理解：把 sub 当作用户角色，把 obj 当作资源对象，比如说 api 的路径，act 当作行为，比如说 get 或 post 请求。")]),s._v(" "),a("p",[s._v("这个模型配置文件就表示当请求的 sub,obj,act  等于策略中的 sub,obj,act 的时候就放行，否则拒绝。")]),s._v(" "),a("p",[s._v("现在来编写策略文件：policy.csv")]),s._v(" "),a("div",{staticClass:"language-csv line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("p, root, /api/users/confirm, GET \np, admin, /api/users/confirm, GET \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这个策略就表示如果 sub 是 root 或者 admin 的时候，就可以对 /api/users/confirm 执行 GET 请求。")]),s._v(" "),a("p",[s._v("然后在请求拦截器加上这样的判断逻辑：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" casbin\n\ne "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" casbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Enforcer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path/to/model.conf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path/to/policy.csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" 拦截器"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tsub "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里写死，实际上从 request 对象获取用户角色")]),s._v("\n\tobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/api/users/confirm"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实际上从 request 对象获取 URI")]),s._v("\n\tact "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实际上从 request 对象中获取请求方法")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("enforce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" act"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"放行"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"拒绝"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("就这，只需在拦截器加上一小段逻辑，对原有代码基本没有入侵，使用起来是不是非常简单？")]),s._v(" "),a("p",[s._v("策略的配置即可放在文件中，也可以放在数据库中，做到更为灵活的配置。")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" casbin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("casbin 还有很多高级的功能，这里说的只是最简单的一种，"),a("a",{attrs:{href:"https://casbin.org/docs/zh-CN/get-started",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("也有非常丰富的例子：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gym3f2wo21j311v0u0dmo.jpg",alt:""}})]),s._v(" "),a("p",[s._v("我也正在学习 casbin，如果觉得有帮助，还请收藏、分享给需要的朋友们。")])])}),[],!1,null,null,null);t.default=e.exports}}]);