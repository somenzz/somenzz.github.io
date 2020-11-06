(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{399:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("有时候，我感到疲倦，因为，我每修改一处代码，想要看到改动是否生效的时候，我要先 "),a("code",[s._v("Ctrl C")]),s._v(" 或 "),a("code",[s._v("Kill")]),s._v(" 进程，然后重新运行，才能看到结果，改的次数多了，不仅浪费时间，降低效率，还浪费体力。有没有办法做到修改了项目使用的源码文件后，让程序自动重新运行？")]),s._v(" "),a("p",[s._v("肯定有办法，三方库 watchdog 可以监控文件的新增，删除，和修改，可以在这些事件发生后执行相应的动作，但它不够完美：")]),s._v(" "),a("ol",[a("li",[s._v("可以对某一路径进行监听，但不能解析项目 import 了哪些文件，import 的文件不在同一路径下，需要手工配置多个路径就很麻烦，不具有通用性。")]),s._v(" "),a("li",[s._v("不能判断文件是否真正的修改，有时候只是保存下，文件内容并没有变化，此时不应该触发重启。")]),s._v(" "),a("li",[s._v("如果在统一路径，修改了项目未引用的文件，也会触发重启。")])]),s._v(" "),a("p",[s._v("直到我用了 Django，Django 的 autoreload 机制，完美的解决了上面 3 个问题，改动代码保存后可以立即看到程序的及时反馈，大大提升了 Debug 的效率，堪称神器。")]),s._v(" "),a("p",[s._v("这么好的神器，能否移植到其他项目上？")]),s._v(" "),a("p",[s._v("​能否移植，取决于 autoreload 是否与 Django 松耦合，我们先来看一下它的工作原理。")]),s._v(" "),a("h4",{attrs:{id:"_1、django-是怎么自动重载的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、django-是怎么自动重载的？"}},[s._v("#")]),s._v(" 1、Django 是怎么自动重载的？")]),s._v(" "),a("p",[s._v("用过 Django 的朋友都知道，当你执行 "),a("code",[s._v("python manage.py runserver")]),s._v(" 后，只要修改了项目用到的文件，Django 会自动重新启动服务，这种及时反馈机制，大大的方便了开发者，可以快速确认自己的修改是否正确，为测试省了不少时间。")]),s._v(" "),a("p",[s._v("从 Django(Django==3.0.4) 的源码 "),a("code",[s._v("django/core/management/commands/runserver.py")]),s._v(" 走起，执行 runserver 命令后就执行了这个函数。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""Run the server, using the autoreloader if needed."""')]),s._v("\n    use_reloader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use_reloader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" use_reloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        autoreload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run_with_reloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inner_run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("inner_run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("self.inner_run")]),s._v(" 是真正干活的，先不管它。执行命令时如果不加 "),a("code",[s._v("--noreload")]),s._v("，就会运行 "),a("code",[s._v("autoreload.run_with_reloader")]),s._v("，我们继续追踪到 "),a("code",[s._v("django/utils/autoreload.py")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run_with_reloader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SIGTERM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DJANGO_AUTORELOAD_ENV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            reloader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_reloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Watching for file changes with %s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__class__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            start_django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" main_func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            exit_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" restart_with_reloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exit_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" KeyboardInterrupt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("函数第一行 signal.SIGTERM 来捕捉用户输入 kill 指令，让程序退出并返回 0。 接下来就是判断环境变量是 DJANGO_AUTORELOAD_ENV 是否为 true，如果是，执行 start_django，否则执行 restart_with_reloader。默认设置情况下，第一次运行时，环境变量是没有设置的，因此会运行 restart_with_reloader")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("restart_with_reloader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    new_environ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" DJANGO_AUTORELOAD_ENV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_child_arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("new_environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" close_fds"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("returncode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("returncode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这里先通过 "),a("code",[s._v("get_child_arguments")]),s._v(" 获取命令及参数，再进入循环，通过 "),a("code",[s._v("subprocess.run")]),s._v(" 来运行 Django 服务，Django 运行的过程中，函数是阻塞在此处的，Django 进程运行结束返回的结果不是 3，程序直接就退出了。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("new_environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" close_fds"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("大家猜测下 Django 进程什么时候返回 3 呢？ 相信你已经猜到了，就是文件有修改时，Django 进程返回了 3，通过循环，实现重新启动的效果。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("trigger_reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s changed, reloading.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("调用这个函数的类为 StatReloader 和 WatchmanReloader，具体的细节见 "),a("code",[s._v("py37env/lib/python3.7/site-packages/django/utils/autoreload.py")])]),s._v(" "),a("p",[s._v("理解了工作原理后，就可以为我所用了。")]),s._v(" "),a("h4",{attrs:{id:"_2、autoreload-为我所用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、autoreload-为我所用"}},[s._v("#")]),s._v(" 2、autoreload 为我所用")]),s._v(" "),a("p",[s._v("好在 "),a("code",[s._v("django.utils.autoreload")]),s._v(" 和 django 其他模块是松耦合的，不需要修改代码即可可以直接移植到其他项目使用。做法很简单，只需要将 Django \b库中 utils 目录下的 autoreload.py 文件复制到自己项目的路径下，再导入使用即可。")]),s._v(" "),a("p",[a("strong",[s._v("两行代码就可以实现")]),s._v("，我这里做了个 demo：")]),s._v(" "),a("p",[s._v("demo 目录树如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("py37env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ➜  test tree\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n├── autoreload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n├── test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n└── test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" directories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" files\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("test.py 文件内容如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# filename: test.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" autoreload\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" test2\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"---------------------"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.main1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.main2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.main3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    autoreload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run_with_reloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("test2.py 文件内容如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test2.main11"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test2.main22"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test2.main33"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("运行 python test.py 后，程序打印了预期的结果，但没有退出，说明 autoreload 内部是以守护进程方式运行主函数 main。修改 test.py test2.py 的任何地方，程序都会重新运行，非常便于调试。如果只保存，未修改任何内容，则程序不会重新运行，非常智能。")]),s._v(" "),a("p",[s._v("运行结果如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main1\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main2\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main3\ntest2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main11\ntest2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main22\ntest2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main33\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main1\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main2\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main3\ntest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main4\ntest2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main11\ntest2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main22\ntest2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main33\ntest2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main44\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("视频展示："),a("a",{attrs:{href:"https://b23.tv/MAqqLK",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://b23.tv/MAqqLK"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("源代码我放在了公众号后台，如果不想动手找 Django 源码 autoreload ，可以关注「Python七号」，回复关键词 「autoreload」 下载。")])])}),[],!1,null,null,null);t.default=e.exports}}]);