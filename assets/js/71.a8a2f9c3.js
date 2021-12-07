(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{648:function(l,v,_){"use strict";_.r(v);var e=_(7),a=Object(e.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("p",[l._v("大家好，我是征哥，改善最高频要素，可以从根本上改善生命体的生活质量，对程序员来讲，编辑代码就是高频要素，要改善这一点，就要用最擅长编辑的工具，这一点非 Vim 莫属。此外，Vim 还是一个通用工具，一通百通，Linux 和 Mac 自带 Vim，很多 IDE，如 VSCode、PyCharm、Idea、Eclipse 也都有 Vim 插件。 可以说 Vim 是最好的编辑器，它非常地难学，但是却不可思议地好用，即使难，也可以通过两周的刻意练习，很快的掌握。")]),l._v(" "),_("p",[l._v("如果你想以最快的速度学习人类史上最好的文本编辑器 Vim 吗，看这个就够了。")]),l._v(" "),_("p",[l._v("本次视频不会列举所有的命令，只是列举那些最有用的命令。非常适合新手练习入门 Vim。")]),l._v(" "),_("p",[l._v("先说明，不要期望你能在 3 天内把 Vim 练得比别的编辑器更有效率。")]),l._v(" "),_("p",[l._v("接下来我们循序渐进。")]),l._v(" "),_("h2",{attrs:{id:"第一-先学会打开、保存、退出。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一-先学会打开、保存、退出。"}},[l._v("#")]),l._v(" 第一，先学会打开、保存、退出。")]),l._v(" "),_("p",[l._v("认识 Vim 的 Normal 模式和 Insert 模式。")]),l._v(" "),_("p",[l._v("启动后即进入 Normal 模式。可以用 h l j k 来移动光标")]),l._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[l._v("     j\n\n h       l\n\n     k\n")])]),l._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[l._v("1")]),_("br"),_("span",{staticClass:"line-number"},[l._v("2")]),_("br"),_("span",{staticClass:"line-number"},[l._v("3")]),_("br"),_("span",{staticClass:"line-number"},[l._v("4")]),_("br"),_("span",{staticClass:"line-number"},[l._v("5")]),_("br")])]),_("p",[l._v('dd  :  删除当前行，并把删除的行存到剪贴板里(其实叫匿名寄存器"",相当于""dd)')]),l._v(" "),_("p",[l._v("i  :  Insert 模式，按 ESC 回到 Normal 模式.")]),l._v(" "),_("p",[l._v("x  :  删当前光标在的一个字符。")]),l._v(" "),_("p",[l._v('p  :  粘贴(其实从匿名寄存器粘贴，相当于""p)')]),l._v(" "),_("p",[l._v(":wq  :  存盘 + 退出 (:w 存盘, :q 退出)   （:w 后可以跟文件名）")]),l._v(" "),_("h2",{attrs:{id:"第二-渐入佳境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二-渐入佳境"}},[l._v("#")]),l._v(" 第二，渐入佳境")]),l._v(" "),_("h3",{attrs:{id:"各种插入模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#各种插入模式"}},[l._v("#")]),l._v(" 各种插入模式")]),l._v(" "),_("p",[l._v("i  :  在光标前插入")]),l._v(" "),_("p",[l._v("a  :  在光标后插入")]),l._v(" "),_("p",[l._v("o  :  在当前行后插入一个新行")]),l._v(" "),_("p",[l._v("O  :  在当前行前插入一个新行")]),l._v(" "),_("p",[l._v("cw  :  替换从光标所在位置后到一个单词结尾的字符")]),l._v(" "),_("h3",{attrs:{id:"简单的移动光标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单的移动光标"}},[l._v("#")]),l._v(" 简单的移动光标")]),l._v(" "),_("p",[l._v("0  :  数字零，到行头")]),l._v(" "),_("p",[l._v("$  :  到本行行尾")]),l._v(" "),_("p",[l._v("^  :  到本行第一个不是blank字符的位置（所谓blank字符就是空格，tab，换行，回车等）")]),l._v(" "),_("p",[l._v("g_  :  到本行最后一个不是blank字符的位置")]),l._v(" "),_("p",[l._v("/pattern  :  搜索 pattern 的字符串（注：如果搜索出多个匹配，可按 n 到下一个,N到上一个）")]),l._v(" "),_("h3",{attrs:{id:"拷贝-粘贴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拷贝-粘贴"}},[l._v("#")]),l._v(" 拷贝/粘贴")]),l._v(" "),_("p",[l._v("yw  :  拷贝一个单词单词单词单词单词")]),l._v(" "),_("p",[l._v("y2w  :  拷贝两个单词 天上 人间 天上 人间 天上 人间")]),l._v(" "),_("p",[l._v("p/P 粘贴，p 是表示在当前位置之后，P 表示在当前位置之前")]),l._v(" "),_("p",[l._v("yy/Y  :  拷贝当前行")]),l._v(" "),_("p",[l._v('"+yy 拷贝当前行到系统粘贴板 （'),_("code",[l._v('"+')]),l._v(" 为系统粘贴板寄存器)")]),l._v(" "),_("p",[l._v('"+p 粘贴系统粘贴板的内容到当前位置之后。')]),l._v(" "),_("h3",{attrs:{id:"撤销-重做"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#撤销-重做"}},[l._v("#")]),l._v(" 撤销/重做")]),l._v(" "),_("p",[l._v("u  :  undo")]),l._v(" "),_("p",[l._v("Ctrl+r:  redo")]),l._v(" "),_("h3",{attrs:{id:"打开-保存-退出-改变文件-buffer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#打开-保存-退出-改变文件-buffer"}},[l._v("#")]),l._v(" 打开/保存/退出/改变文件(Buffer)")]),l._v(" "),_("p",[l._v(":w  :  存盘")]),l._v(" "),_("p",[l._v(":e "),_("code",[l._v("<path/to/file>")]),l._v("  :  打开一个文件")]),l._v(" "),_("p",[l._v(":saveas "),_("code",[l._v("<path/to/file>")]),l._v("  :  另存为 "),_("code",[l._v("<path/to/file>")])]),l._v(" "),_("p",[l._v(":x， ZZ 或 :wq  :  保存并退出 (:x 表示仅在需要时保存，ZZ不需要输入冒号并回车)")]),l._v(" "),_("p",[l._v(":q!  :  退出不保存 :qa! 强行退出所有的正在编辑的文件，就算别的文件有更改。")]),l._v(" "),_("p",[l._v(":bn 和 :bp  :  你可以同时打开很多文件，使用这两个命令来切换下一个或上一个文件。")]),l._v(" "),_("h2",{attrs:{id:"第三、还可以更好-更快"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三、还可以更好-更快"}},[l._v("#")]),l._v(" 第三、还可以更好，更快")]),l._v(" "),_("h3",{attrs:{id:"重复之前的命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重复之前的命令"}},[l._v("#")]),l._v(" 重复之前的命令")]),l._v(" "),_("p",[l._v(".  :  (小数点) 可以重复上一次的命令")]),l._v(" "),_("p",[l._v("N"),_("command",[l._v("  :  重复某个命令 N 次")])],1),l._v(" "),_("p",[l._v("下面是一个示例，找开一个文件你可以试试下面的命令：")]),l._v(" "),_("p",[l._v("2dd  :  删除2行")]),l._v(" "),_("p",[l._v("3p  :  粘贴文本3次")]),l._v(" "),_("p",[_("code",[l._v("100ihello ESC ESC")]),l._v(" :  会写下 100 个 hello")]),l._v(" "),_("p",[l._v("hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello")]),l._v(" "),_("p",[l._v(".  :  (小数点) 可以重复上一次的命令\n3.  :  重复 3 次 “hello”\nhello hello hello")]),l._v(" "),_("h3",{attrs:{id:"快速移动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速移动"}},[l._v("#")]),l._v(" 快速移动")]),l._v(" "),_("p",[l._v("你要让你的光标移动更有效率，你一定要了解下面的这些命令，千万别跳过。")]),l._v(" "),_("p",[l._v("Ctrl f  :  向下翻一页")]),l._v(" "),_("p",[l._v("Ctrl b  :  向上翻一页")]),l._v(" "),_("p",[l._v("NG  :  到第 N 行 （注：注意命令中的G是大写的，另我一般使用 : N 到第N行，如 :137 到第137行）")]),l._v(" "),_("p",[l._v("gg  :  到第一行。（注：相当于1G，或 :1）")]),l._v(" "),_("p",[l._v("G  :  到最后一行。")]),l._v(" "),_("p",[l._v("按单词移动：")]),l._v(" "),_("p",[l._v("w  :  到下一个单词的开头。")]),l._v(" "),_("p",[l._v("e  :  到下一个单词的结尾。")]),l._v(" "),_("p",[l._v("如果你认为单词是由默认方式，那么就用小写的 e 和 w。默认上来说，一个单词由字母，数字和下划线组成")]),l._v(" "),_("p",[l._v("如果你认为单词是由 blank 字符分隔符，那么你需要使用大写的 E 和 W。")]),l._v(" "),_("p",[l._v("下面，让我来说说最强的光标移动：")]),l._v(" "),_("p",[_("code",[l._v("%")]),l._v(" : 匹配括号移动，包括 (.()()...), {...}, [...]. （注：你需要把光标先移到括号上）")]),l._v(" "),_("p",[_("code",[l._v("*")]),l._v(" 和 "),_("code",[l._v("#")]),l._v(":  匹配光标当前所在的单词，移动光标到下一个（或上一个）匹配单词（*是下一个，#是上一个）")]),l._v(" "),_("p",[l._v("hello world hello world hello world hello world")]),l._v(" "),_("p",[l._v("上面这三个命令对程序员来说是相当强大的。")]),l._v(" "),_("h3",{attrs:{id:"更快的操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#更快的操作"}},[l._v("#")]),l._v(" 更快的操作")]),l._v(" "),_("p",[l._v("你一定要记住光标的移动，因为很多命令都可以和这些移动光标的命令连动。很多命令都可以写成下面的形式：")]),l._v(" "),_("p",[_("start",{attrs:{position:""}},[_("command",[_("end",{attrs:{position:""}})],1)],1)],1),l._v(" "),_("p",[l._v("例如 0y$ 命令意味着：")]),l._v(" "),_("p",[l._v("0  :  先到行头")]),l._v(" "),_("p",[l._v("y  :  从这里开始拷贝")]),l._v(" "),_("p",[l._v("$  :  拷贝到本行最后一个字符")]),l._v(" "),_("p",[l._v("你可可以输入 ye，从当前位置拷贝到本单词的最后一个字符。")]),l._v(" "),_("p",[l._v("你也可以输入 y2/foo 来拷贝当前位置到第二个 “foo” 之间的字符串。")]),l._v(" "),_("p",[l._v("命令 y，也可以替换为：")]),l._v(" "),_("p",[l._v("d (删除 )")]),l._v(" "),_("p",[l._v("v (可视化的选择)")]),l._v(" "),_("p",[l._v("gU (变大写)")]),l._v(" "),_("p",[l._v("gu (变小写)")]),l._v(" "),_("p",[l._v("可视化选择是一个很有意思的命令，你可以先按 v，然后移动光标，你就会看到文本被选择，然后，你可能 d，也可以是 y，也可以变大写等")]),l._v(" "),_("h2",{attrs:{id:"第四、使用-vim-高级特性。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第四、使用-vim-高级特性。"}},[l._v("#")]),l._v(" 第四、使用 Vim 高级特性。")]),l._v(" "),_("h3",{attrs:{id:"快速跳转"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速跳转"}},[l._v("#")]),l._v(" 快速跳转")]),l._v(" "),_("p",[l._v("fa  :  到下一个为a的字符处，你也可以fs到下一个为s的字符。")]),l._v(" "),_("p",[l._v("t,  :  到逗号前的第一个字符。逗号,可以变成其它字符.")]),l._v(" "),_("p",[l._v("3fa  :  在当前行查找第三个出现的a。a,a,a,a")]),l._v(" "),_("p",[l._v("F 和 T  :  和 f 和 t 一样，只不过是相反方向。")]),l._v(" "),_("p",[l._v('还有一个很有用的命令是 dt"  :  删除所有的内容，直到遇到双引号—— "。')]),l._v(" "),_("h3",{attrs:{id:"区域选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区域选择"}},[l._v("#")]),l._v(" 区域选择")]),l._v(" "),_("p",[l._v("在 Visual 模式下，这些命令很强大，其命令格式为")]),l._v(" "),_("p",[_("code",[l._v("<action>a<object>")]),l._v(" 和 "),_("code",[l._v("<action>i<object>")])]),l._v(" "),_("p",[l._v("action可以是任何的命令，如 d (删除), y (拷贝), v (可以视模式选择)。")]),l._v(" "),_("p",[l._v("object 可能是： w 一个单词， W 一个以空格为分隔的单词， s 一个句字， p 一个段落。也可以是一个特别的字符：\"、 '、 )、 }、 ]。")]),l._v(" "),_("p",[l._v('假设你有一个字符串： (map (+) ("foo")). 光标在双引号处。')]),l._v(" "),_("p",[l._v('vi"  :  会选择 foo.')]),l._v(" "),_("p",[l._v('va"  :  会选择 "foo".')]),l._v(" "),_("p",[l._v('vi)  :  会选择 "foo".')]),l._v(" "),_("p",[l._v('va)  :  会选择("foo").')]),l._v(" "),_("p",[l._v('v2i)  :  会选择 map (+) ("foo")')]),l._v(" "),_("p",[l._v('v2a)  :  会选择 (map (+) ("foo"))')]),l._v(" "),_("h3",{attrs:{id:"块操作-c-v-表示-ctrl-v"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#块操作-c-v-表示-ctrl-v"}},[l._v("#")]),l._v(" 块操作: "),_("code",[l._v("<C-v>")]),l._v(" （表示 Ctrl + v）")]),l._v(" "),_("p",[l._v("块操作，典型的操作： 0 "),_("code",[l._v("<C-v> <C-d>")]),l._v(" I-- [ESC]")]),l._v(" "),_("div",{staticClass:"language-python line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-python"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[l._v('# print("hello world")')]),l._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[l._v('# print("hello world")')]),l._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[l._v('# print("hello world")')]),l._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[l._v("print")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[l._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[l._v('"hello world"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[l._v(")")]),l._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[l._v("print")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[l._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[l._v('"hello world"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[l._v(")")]),l._v("\n")])]),l._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[l._v("1")]),_("br"),_("span",{staticClass:"line-number"},[l._v("2")]),_("br"),_("span",{staticClass:"line-number"},[l._v("3")]),_("br"),_("span",{staticClass:"line-number"},[l._v("4")]),_("br"),_("span",{staticClass:"line-number"},[l._v("5")]),_("br")])]),_("p",[l._v("在 Windows 下的 Vim，你需要使用 "),_("code",[l._v("<C-q>")]),l._v(" 而不是 "),_("code",[l._v("<C-v>")]),l._v(" ，"),_("code",[l._v("<C-v>")]),l._v(" 是拷贝剪贴板。")]),l._v(" "),_("p",[l._v("在 Insert 模式下，你可以输入一个词的开头，然后按 "),_("code",[l._v("<C-p>")]),l._v(" 或是 "),_("code",[l._v("<C-n>")]),l._v("，自动补齐功能就出现了。")]),l._v(" "),_("p",[l._v("Windows")]),l._v(" "),_("h3",{attrs:{id:"宏录制-qa-操作序列-q-a"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#宏录制-qa-操作序列-q-a"}},[l._v("#")]),l._v(" 宏录制： qa 操作序列 q, @a, @@")]),l._v(" "),_("p",[l._v("QA 把你的操作记录在寄存器 a。 于是 @a 会replay被录制的宏。 @@ 是一个快捷键用来 replay 最新录制的宏。")]),l._v(" "),_("p",[l._v("示例：让 Vim 输入 1 到 100")]),l._v(" "),_("p",[l._v("在一个只有一行且这一行只有“1”的文本中，键入如下命令：")]),l._v(" "),_("p",[l._v("qaYp"),_("code",[l._v("<C-a>")]),l._v("q :")]),l._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[l._v("qa 开始录制\nYp 复制行.\n<C-a> 增加1.\nq 停止录制.\n")])]),l._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[l._v("1")]),_("br"),_("span",{staticClass:"line-number"},[l._v("2")]),_("br"),_("span",{staticClass:"line-number"},[l._v("3")]),_("br"),_("span",{staticClass:"line-number"},[l._v("4")]),_("br")])]),_("p",[l._v("@a  :  在 1 下面写下 2")]),l._v(" "),_("p",[l._v("@@  :  在 2 正面写下 3")]),l._v(" "),_("p",[l._v("现在命令行键入 100@@ 会创建新的100行。")]),l._v(" "),_("p",[l._v("如果觉得有帮助，请点赞、转发，关注公众号「Python七号」，每天学习一个小技术。")])])}),[],!1,null,null,null);v.default=a.exports}}]);