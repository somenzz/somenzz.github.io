(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{264:function(t,v,_){t.exports=_.p+"assets/img/PythonSeven.97c2521e.jpg"},392:function(t,v,_){"use strict";_.r(v);var a=_(4),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近一段时间在业余时间帮朋友做了个小型的信息管理系统，主要功能：用户用户登录、注册、信息维护、业务数据的增删改查，首页信息展示，模型关联关系等。麻雀虽小，但五脏俱全，这个系统从前端到后端，到服务器的生产部署，完全由自己独立完成，让这个因疫情而百无聊赖的春节充实了不少。")]),t._v(" "),a("p",[t._v("开发工作基本完成后，我却感到一阵空虚，有时候到达目的地，还不如在旅途中，真怀念那段和 Vue、Django rest framework 相伴的夜晚，他们带给我百思不解的郁闷和拍案叫绝的惊喜。上线前需要接受渗透测试，说是今天给结果，导致我昨晚做梦都在想渗透的结果到底是什么。")]),t._v(" "),a("p",[t._v("结果出来后，打开一看，一半是出乎意料，一半是意料之中，将一件事情做好是真不容易，学习无止境，代码无休止。今天就分享一下漏洞及自己想到的对策。")]),t._v(" "),a("h2",{attrs:{id:"高危一：开启了不安全的-http-方法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高危一：开启了不安全的-http-方法。"}},[t._v("#")]),t._v(" 高危一：开启了不安全的 HTTP 方法。")]),t._v(" "),a("p",[t._v("什么是不安全的 HTTP 方法？我搜索了很多资料，都没有讲清楚为什么是不安全的，大体上是这个意思：看起来像是会修改服务器端数据或文件的方法称作不安全的 HTTP 方法。HTTP通常有GET、POST、DELETE、OPTIONS、PUT、PATCH 五种，当然也有拓展。我们将 PUT、DELETE 这种明显含有上传和删除文件权限的方法称作不安全的 HTTP 方法。")]),t._v(" "),a("p",[t._v("我个人觉得，方法安不安全看使用者个人，你可以使用 POST 方法删除服务器资源，也可以使用 DELETE 方法删除服务器资源，只要加入权限控制，就是安全的，网上说的可以直接上传 jsp 文件挂马，我只能说这服务器就是测试用的，真正上线使用的，谁会允许任意用户上传任意类型的文件。")]),t._v(" "),a("p",[t._v("漏洞危害：攻击者可能利用此漏洞在 WEB 服务器上传、修改、删除脚本和文件，从而达到网页篡改，控制服务器的目的。")]),t._v(" "),a("p",[t._v("修复建议：如果服务器不需要支持 WeDAV，就禁用此功能，或者禁用不安全的 HTTP 方法。")]),t._v(" "),a("p",[t._v("我是不会禁用的，REST 风格的 API 是我的最爱，我可以加入严格的权限控制，而不会禁用如此优雅的 HTTP 方法，尽管他看起来不安全。")]),t._v(" "),a("h2",{attrs:{id:"高危二：开启了-options-方法。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高危二：开启了-options-方法。"}},[t._v("#")]),t._v(" 高危二：开启了 OPTIONS 方法。")]),t._v(" "),a("p",[t._v("服务器如果开启了 OPTIONS 方法，你用 OPTIONS 方法请求服务器，服务器会返回它允许的 HTTP 方法。")]),t._v(" "),a("p",[t._v("漏洞危害：攻击者可能利用 OPTIONS 方法获取服务器支持何种 HTTP 请求，进而准备进一步攻击。")]),t._v(" "),a("p",[t._v("修复建议：禁用 OPTIONS 方法。")]),t._v(" "),a("p",[t._v("这个没什么好说的，自己开发的 API 还不知道支持哪种方法吗？禁用就行了。")]),t._v(" "),a("h2",{attrs:{id:"高危三：任意用户注册。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高危三：任意用户注册。"}},[t._v("#")]),t._v(" 高危三：任意用户注册。")]),t._v(" "),a("p",[t._v("现在我明白了很多网站注册流程的繁琐了，各种奇葩的验证码，信息填写，就是为了防止机器人注册的。虽然我设置了邮箱验证码，但只有四位数字，容易被暴力破解。")]),t._v(" "),a("p",[t._v("漏洞危害：验证码可通过暴力破解，造成任意用户注册。")]),t._v(" "),a("p",[t._v("修复建议：增加到 6 位数字字母混合的验证码，缩短验证码的时效性。")]),t._v(" "),a("h2",{attrs:{id:"中危一：用户枚举漏洞。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中危一：用户枚举漏洞。"}},[t._v("#")]),t._v(" 中危一：用户枚举漏洞。")]),t._v(" "),a("p",[t._v("用户登录时，用户存在和不存在服务器返回的结果不一样，黑客可以利用这一点来进行用户名枚举。看到这点我是有点惊呆的，如果返回结果一样，前端怎么判断用户是否是注册用户呢？不过我利用这一点，查到了老赖的身份证号码，见前文：只有名字，如何查到老赖的身份证号？")]),t._v(" "),a("p",[t._v("漏洞危害：攻击者进行信息搜集和用户名搜集工作利用此漏洞可轻松实现。")]),t._v(" "),a("p",[t._v("修复建议：")]),t._v(" "),a("p",[t._v("1、对涉及用户信息的 API 访问进行频次限制。")]),t._v(" "),a("p",[t._v("2、登录操作应该设定有效的验证码机制。")]),t._v(" "),a("p",[t._v("3、限制单个 IP 的尝试次数。")]),t._v(" "),a("h2",{attrs:{id:"低危一：x-frame-options-未配置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低危一：x-frame-options-未配置。"}},[t._v("#")]),t._v(" 低危一：X-Frame-Options 未配置。")]),t._v(" "),a("p",[t._v("漏洞危害：服务器没有返回 X-Frame-Options 响应 header，这意味着该网站可能面临 clickjacking attack（点击劫持攻击）的风险。X- Frame-Options HTTP 响应头可用于指示是否应允许浏览器在框架或 iframe 内呈现页面。点击劫持，clickjacking，也被称为 UI-覆盖攻击。它是通过覆 盖不可见的框架误导受害者点击。虽然受害者点击的是他所看到 的网页，但其实他所点击的是被黑客精心构建的另一个置于原网 页上面的透明页面。这种攻击利用了 HTML 中 "),a("code",[t._v("<iframe>")]),t._v(" 等标签的透明属性。")]),t._v(" "),a("p",[t._v("修复建议：在 web 容器上进行配置，添加 X-Frame-Options 响应头。配置参考：https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options")]),t._v(" "),a("p",[t._v("这个以前不知道，学习了。")]),t._v(" "),a("h2",{attrs:{id:"低危二：用户口令暴力破解漏洞。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低危二：用户口令暴力破解漏洞。"}},[t._v("#")]),t._v(" 低危二：用户口令暴力破解漏洞。")]),t._v(" "),a("p",[t._v("漏洞危害：攻击者如果通过构造社会工程学字典+分布式暴力破解节点，可大大增加暴力破解成功的可能性。可能导致后台被恶意控制、用户数据泄露。")]),t._v(" "),a("p",[t._v("修复建议：1、对涉及用户信息的 API 访问进行频次限制。2、增加有效的验证码机制。")]),t._v(" "),a("p",[t._v("这个说的对，我准备采用方法一， 对登录 API 访问进行频次限制")]),t._v(" "),a("p",[t._v("就这些了，第一次被渗透测试，还是挺新鲜的。经验教训就是在一开始就要考虑所开发的程序的安全问题，如果网站没有什么重要数据，仅仅展示，或者内网使用，效率优先，相反如果公网访问，必须考虑安全问题。")]),t._v(" "),a("p",[t._v("开发网站的人也写写爬虫，写爬虫的人也要学学开发网站，相互理解一下彼此的良苦用心。")]),t._v(" "),a("p",[t._v("关注微信公众号：Python七号，像玩游戏一样学习 Python。")]),t._v(" "),a("p",[a("img",{attrs:{src:_(264),alt:""}})])])}),[],!1,null,null,null);v.default=e.exports}}]);