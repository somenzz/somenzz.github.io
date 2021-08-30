(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{694:function(t,a,v){"use strict";v.r(a);var _=v(7),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("如果一个人在工作的时候，能够看到良质，而且感觉到它的存在，那么他就是一个懂得关心的人。如果一个人对自己所看到的和手中所做的都细致入微地关心，那么他一定有某些良质的特性。 ---《禅与摩托车维修艺术》。")]),t._v(" "),v("p",[t._v("当我读到上面这句话时我想到了编程，编程也是一门艺术，如果你在编程时能够看到良质（良质是一种境界，我肤浅的理解为如何更好的协调用户和机器资源发挥最大效率），能感觉到机器细微的反馈，那么他就是一个懂得关心的人，如果对手中的代码和机器都细致入微的关心，那么他一定有某些良质的特性。")]),t._v(" "),v("p",[t._v("最近使用 Java 写了一个支持各种数据库之间表同步的程序，与 Python 相比，同样的熟悉程度，实现同样的功能，写 Java 花的时间可能会比 Python 多一倍。为什么我还要使用 Java，一是因为 Java 是真正的跨平台，内网环境都 aix、linux 都已经有 Java 环境，但未必有 Python3。二是使用 Java 可以拓展眼界，看看同样的问题 Java 是如果解决的，后面写 Python 时能借鉴一下 Java 严谨的设计模式。")]),t._v(" "),v("p",[t._v("无论使用那种编程语言，都会面临程序出错的问题，程序出错时应该返回什么呢？ 比如错误码、NULL 值、特殊值（比如 -1）、空对象（比如空字符串、空集合）、抛出异常，这些选项，你会分别在什么情况下使用呢？理由是什么？")]),t._v(" "),v("p",[t._v("函数是代码的一个非常重要的编写单元，而函数的异常处理，又是我们在编写函数的时候，时刻都要考虑的，今天我们就聊一聊，如何设计函数在异常情况下的返回数据类型。")]),t._v(" "),v("h2",{attrs:{id:"_1、返回错误码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、返回错误码"}},[t._v("#")]),t._v(" 1、返回错误码")]),t._v(" "),v("p",[t._v("C 语言中没有异常这样的语法机制，因此，返回错误码便是最常用的出错处理方式。而在 Java、Python 等比较新的编程语言中，大部分情况下，我们都用异常来处理函数出错的情况，极少会用到错误码。在 C 语言中，错误码的返回方式有两种：一种是直接占用函数的返回值，函数正常执行的返回值放到出参中；另一种是将错误码定义为全局变量，在函数执行出错时，函数调用者通过这个全局变量来获取错误码。")]),t._v(" "),v("p",[t._v("实际上，如果你熟悉的编程语言中有异常这种语法机制，那就尽量不要使用错误码。异常相对于错误码，有诸多方面的优势，比如可以携带更多的错误信息（exception 中可以有 message、stack trace 等信息）等。")]),t._v(" "),v("h2",{attrs:{id:"_2、返回-null-值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、返回-null-值"}},[t._v("#")]),t._v(" 2、返回 NULL 值")]),t._v(" "),v("p",[t._v("在多数编程语言中，我们用 NULL 来表示“不存在”这种语义。不过，网上很多人不建议函数返回 NULL 值，认为这是一种不好的设计思路，主要的理由有以下两个。如果某个函数有可能返回 NULL 值，我们在使用它的时候，忘记了做 NULL 值判断，就有可能会抛出空指针异常（Null Pointer Exception，缩写为 NPE）。如果我们定义了很多返回值可能为 NULL 的函数，那代码中就会充斥着大量的 NULL 值判断逻辑，一方面写起来比较繁琐，另一方面它们跟正常的业务逻辑耦合在一起，会影响代码的可读性。")]),t._v(" "),v("p",[t._v("我个人觉得，尽管返回 NULL 值有诸多弊端，但对于以 get、find、select、search、query 等单词开头的查找函数来说，数据不存在，并非一种异常情况，这是一种正常行为。所以，返回代表不存在语义的 NULL 值比返回异常更加合理。")]),t._v(" "),v("p",[t._v("不过，话说回来，刚刚讲的这个理由，也并不是特别有说服力。对于查找数据不存在的情况，函数到底是该用 NULL 值还是异常，有一个比较重要的参考标准是，看项目中的其他类似查找函数都是如何定义的，只要整个项目遵从统一的约定即可。")]),t._v(" "),v("p",[t._v("如果项目从零开始开发，并没有统一约定和可以参考的代码，那你选择两者中的任何一种都可以。你只需要在函数定义的地方注释清楚，让调用者清晰地知道数据不存在的时候会返回什么就可以了。")]),t._v(" "),v("p",[t._v("再补充说明一点，对于查找函数来说，除了返回数据对象之外，有的还会返回下标位置，比如 Java 中的 indexOf() 函数，用来实现在某个字符串中查找另一个子串第一次出现的位置。函数的返回值类型为基本类型 int。这个时候，我们就无法用 NULL 值来表示不存在的情况了。对于这种情况，我们有两种处理思路，一种是返回 NotFoundException，一种是返回一个特殊值，比如 -1。不过，显然 -1 更加合理，理由也是同样的，也就是说“没有查找到”是一种正常而非异常的行为。")]),t._v(" "),v("h2",{attrs:{id:"_3、返回空对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、返回空对象"}},[t._v("#")]),t._v(" 3、返回空对象")]),t._v(" "),v("p",[t._v('返回 NULL 值有各种弊端。应对这个问题有一个比较经典的策略，那就是应用空对象设计模式（Null Object Design Pattern）。比如字符串的空对象就是 "", 数组的空对象就是 [] （Python）。')]),t._v(" "),v("p",[t._v("当函数返回的数据是字符串类型或者集合类型的时候，我们可以用空字符串或空集合替代 NULL 值，来表示不存在的情况。这样，我们在使用函数的时候，就可以不用做 NULL 值判断。")]),t._v(" "),v("h2",{attrs:{id:"_4、抛出异常对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、抛出异常对象"}},[t._v("#")]),t._v(" 4、抛出异常对象")]),t._v(" "),v("p",[t._v("前面讲了 3 种数出错的返回数据类型，但是，最常用的函数出错处理方式就是抛出异常。异常可以携带更多的错误信息，比如函数调用栈信息。除此之外，异常可以将正常逻辑和异常逻辑的处理分离开来，这样代码的可读性就会更好。")]),t._v(" "),v("p",[t._v("那么函数什么时候抛出异常，什么时后捕获异常呢，要看上层代码是否关心这个异常。关心就将它抛出，否则就直接吞掉。是否需要包装成新的异常抛出，看上层代码是否能理解这个异常、是否业务相关。如果能理解、业务相关就可以直接抛出，否则就封装成新的异常抛出。")]),t._v(" "),v("p",[t._v("不能恢复的异常应该抛出，能处理能恢复的可以吞掉，但是吞掉的异常要有办法在日志或者其它办法看到异常的原因，便于后续排查问题。异常是否要重新定义异常并抛出，不能一概而论，某些情况下，异常的值和类型本身就是接口约定中的一部分。")]),t._v(" "),v("p",[t._v("你有那些看法，不妨留言交流。")])])}),[],!1,null,null,null);a.default=e.exports}}]);