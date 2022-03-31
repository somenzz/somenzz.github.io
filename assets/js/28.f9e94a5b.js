(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{586:function(s,a,t){s.exports=t.p+"assets/img/mp.dd0cf373.jpg"},786:function(s,a,t){"use strict";t.r(a);var e=t(7),p=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("你好，我是 somenzz，可以叫我征哥。")]),s._v(" "),e("p",[s._v("Python 的 import 是非常直观的，但即使这样，有时候你会发现，明明包就在那里，我们仍会遇到 "),e("code",[s._v("ModuleNotFoundError")]),s._v("，明明相对路径非常正确，就是报错")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ImportError: attempted relative import with no known parent package\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("导入同一个目录的模块和不同的目录的模块是完全不同的，本文通过分析使用 import 经常遇到的一些问题，来帮助你轻松搞定 import ，据此，你可以轻松创建属于自己的包。")]),s._v(" "),e("p",[s._v("主要内容：")]),s._v(" "),e("p",[s._v("0、什么是模块（module），什么是包（package）")]),s._v(" "),e("p",[s._v("1、import 时发生了什么")]),s._v(" "),e("p",[s._v("2、什么时候用相对导入，什么时候用绝对导入")]),s._v(" "),e("p",[s._v("3、一个自定义包的例子")]),s._v(" "),e("h2",{attrs:{id:"_0、什么是模块-module-什么是包-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0、什么是模块-module-什么是包-package"}},[s._v("#")]),s._v(" 0、什么是模块（module），什么是包（package）")]),s._v(" "),e("h4",{attrs:{id:"模块-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块-module"}},[s._v("#")]),s._v(" 模块（module）")]),s._v(" "),e("p",[s._v("类比文件和目录，模块就是文件。")]),s._v(" "),e("p",[s._v("Python 文档中这样描述，一个 Python 文件就是一个模块，Python 的文件名（不带后缀.py）就是模块名。")]),s._v(" "),e("p",[s._v("一个 module 可以包含变量、函数和类，它们是该 module 定义的命名空间的一部分，因此变量的命名问题不是问题，因为两个不同的模块可以有同名的变量、函数和类。")]),s._v(" "),e("h4",{attrs:{id:"包-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包-package"}},[s._v("#")]),s._v(" 包（package）")]),s._v(" "),e("p",[s._v("类比文件和目录，包就是目录。")]),s._v(" "),e("p",[s._v("package 里面即可以有 module 也可以子包（sub-package）。 就像一个模块如何定义一个命名空间以便变量、函数和类可以在两个不同的模块中具有相同的名称一样，一个包对其组成的包和模块做同样的事情。可以通过点符号访问主包中的模块和包。")]),s._v(" "),e("p",[s._v("一个基本的 package 可以包含 sub-package、modules、"),e("code",[s._v("__init__.py")]),s._v("(Python 3.3 之后非必需)、setup.py。一个可能的 package 结构如下所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0rikso0b4j212w0ioq3r.jpg",alt:""}})]),s._v(" "),e("p",[s._v("而 setup.py 存在于你的 package 所在的主目录中，包含配置信息，如所需的依赖项、脚本和子包。 你还可以指定有关 package 的元数据，例如 package 的名称、作者、描述等。 setup.py 是 pip 用来安装你的包的文件。")]),s._v(" "),e("h2",{attrs:{id:"_1、import-时发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、import-时发生了什么"}},[s._v("#")]),s._v(" 1、import 时发生了什么")]),s._v(" "),e("p",[s._v("先举一个简单的例子，比如说同一个目录有两个文件，file1.py 和 file2.py，内容很简单，就打印各自的文件名，不同的是 file2.py 里面 import 了 file1:")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#file1.py")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is file1.py"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#file2.py")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is file2.py"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" file1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("运行 file2.py 可以得到下面的结果：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("❯ python file2.py\nThis is file2.py\nThis is file1.py\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("可以看出：")]),s._v(" "),e("ul",[e("li",[s._v("import 很直观，用谁就 import 谁。")]),s._v(" "),e("li",[s._v("import 语句就是一个普通的语句，可以放在任何位置。")]),s._v(" "),e("li",[s._v("一个文件被 import 的时候，就会被执行，其内部的类或对象将添加到其命名空间。")])]),s._v(" "),e("p",[s._v("我们还要知道 import 的搜索顺序，只需要记住一点，那就是 import 会去 sys.path 里面搜索。")]),s._v(" "),e("p",[s._v("比如我在 file2.py 的末尾添加一行代码："),e("code",[s._v("import sys; print(sys.path)")]),s._v(" 就可以打印 import 的搜索路径：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0ri9iv5zhj215k0e2n1j.jpg",alt:""}})]),s._v(" "),e("p",[s._v("可以看出 sys.path 的顺序")]),s._v(" "),e("ol",[e("li",[s._v("会先搜索执行脚本所在的路径")]),s._v(" "),e("li",[s._v("标准库")]),s._v(" "),e("li",[s._v("第三方库 site-packages")])]),s._v(" "),e("p",[s._v("关于 sys.path 需要你注意的是")]),s._v(" "),e("p",[s._v("1、在解释器环境下，sys.path[0] 就是解释器启动时所在的路径 ''")]),s._v(" "),e("p",[s._v("2、sys.path 并不会依赖当前程序的工作路径 - os.getcwd()，仅仅依赖第一个脚本所在的路径：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0ro7bwaw2j21cs0dcgmy.jpg",alt:""}})]),s._v(" "),e("p",[s._v("3、如果一个模块导入另一个模块，而后者又导入另一个模块，则第一个模块的 sys.path 是解释器搜索第二个导入语句的位置。")]),s._v(" "),e("p",[s._v("一旦模块或包被找到，就会执行该模块或包。如果包里面有初始化文件 "),e("code",[s._v("__init__.py")]),s._v("，导入的时候，会先执行 "),e("code",[s._v("__init__.py")]),s._v("。")]),s._v(" "),e("p",[s._v("然后要导入的项目就添加到了其命名空间内，我们可以通过 xx.yy 的方式来使用。")]),s._v(" "),e("h3",{attrs:{id:"_2、什么时候用相对导入-什么时候用绝对导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、什么时候用相对导入-什么时候用绝对导入"}},[s._v("#")]),s._v(" 2、什么时候用相对导入，什么时候用绝对导入")]),s._v(" "),e("p",[s._v("先看看什么是绝对导入，所谓绝对导入就是这样的形式：")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" aa\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" aa"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bb\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" aa "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("这样的方式很直观， import 会去 sys.path 查找就行了，如果遇到了 ModuleNotFoundError，思考一下为什么  sys.path 没有我们要导入的包，或者手动把这个包的路径插入到 sys.path 中去。")]),s._v(" "),e("p",[s._v("再看看什么是相对导入，所谓相对导入就是这样的形式：")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" aa\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aa "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" bb\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" yy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("也就是说相对路径中有个 . 号，用来表明要导入的模块或当前的包的相对位置。")]),s._v(" "),e("p",[s._v("举个例子，我们 pythonimportexample 目录下新建一个目录 subpackage1，在 subpackage1 内新建两个文件 file3.py、file4.py，")]),s._v(" "),e("p",[s._v("内容如下：")]),s._v(" "),e("p",[s._v("file3.py :")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is file3.py"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("file4.py")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" file3\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"This is file4.py"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("只要我们直接运行 file4.py，那是一定会报错的："),e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0srteje11j210m0didgs.jpg",alt:""}})]),s._v(" "),e("p",[s._v("Python 提示我们：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ImportError: attempted relative import with no known parent package\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("也就是说相对导入不知道父包是谁，换句话说，这是一个子包，必须让父包来调用它，直接运行这个文件是不行的，即使你在 file4.py 的目录 subpackage1 同级的目录执行该文件也是不行的，见上图。")]),s._v(" "),e("p",[s._v("但是在 file4.py 的目录 subpackage1 同级的目录作为一个 module 来执行是可以的，如下图：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0ss4z6snhj213a0bygme.jpg",alt:""}})]),s._v(" "),e("p",[s._v("换句话说，我们把 subpackage1 作为一个包来让别人用，相对导入是可以的，比如说我们在目录 subpackage1 同级的目录新建一个 file5.py 的文件，内容如下：")]),s._v(" "),e("p",[s._v("file5.py:")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" subpackage1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" file4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后，执行  python file5.py 可以看出，相对导入已经正常工作：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0ssfqzb1jj20vu07a0sz.jpg",alt:""}})]),s._v(" "),e("p",[e("strong",[s._v("结论")])]),s._v(" "),e("ul",[e("li",[s._v("如果是当做脚本文件直接运行的，使用绝对导入")]),s._v(" "),e("li",[s._v("如果是当做模块供其他文件导入，使用相对导入")])]),s._v(" "),e("h2",{attrs:{id:"_3、一个自定义包的例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、一个自定义包的例子"}},[s._v("#")]),s._v(" 3、一个自定义包的例子")]),s._v(" "),e("p",[s._v("先上一个图来看下目录及引用结构，方块的是目录，椭圆的是文件。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0stnrqt6aj20fb0gp3z8.jpg",alt:""}})]),s._v(" "),e("p",[s._v("其中包的目录下有 setup.py 和 run.py")]),s._v(" "),e("p",[s._v("run.py 导入了 file4、file5、file6。")]),s._v(" "),e("p",[s._v("file4 导入了 file3，file5 导入了 file3")]),s._v(" "),e("p",[s._v("file6 导入了 file2，file2 导入了 file1")]),s._v(" "),e("p",[s._v("现在我们来执行一下 run.py 看下效果：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h0stu88vgzj20yy0fydgq.jpg",alt:""}})]),s._v(" "),e("p",[s._v("可以看出所有相对导入都正常工作，虽然 file3 被导入了两次，但只执行了一次，说明 Python 内部已经考虑了多重导入的问题。")]),s._v(" "),e("p",[s._v("自定义包的目的就是让其他文件导入使用的，因此使用相对导入，源代码见：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://gitee.com/somenzz/code-example/tree/master/import_example",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gitee.com/somenzz/code-example/tree/master/import_example"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"最后的话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),e("p",[s._v("本文分享了什么是模块（module），什么是包（package），import 的搜索路径，也分享了相对导入和绝对导入的区别，最后举了一个非常实用的 import 例子，方便你构建自己的包。")]),s._v(" "),e("p",[s._v("如果觉得有用，还请给个在看，想学 Python 的，也可以关注下。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(586),alt:""}})])])}),[],!1,null,null,null);a.default=p.exports}}]);