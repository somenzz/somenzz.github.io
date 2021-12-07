(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{672:function(e,n,s){"use strict";s.r(n);var t=s(7),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("我身边有搞机器学习的，也有数据科学家，Python 是他们的首选语言。 然而，他们并非每个都是经验丰富的 Python 开发人员，他们也不太可能掌握 Python 提供的所有优秀功能。 这当然是可以理解的，但同时也是不幸的。 为什么？ 因为了解语言的细节需要编写代码......")]),e._v(" "),s("p",[e._v("这就是为什么我想为提升 Python 技能的人提供一些帮助，这样你就可以编写更多出色的代码，也许会给您的伙伴或同事留下深刻印象，并从中获得更多乐趣！ 具体来说，在这篇文章中，我想谈谈如何使用 Python 中的魔术方法，写出令人惊叹的 class，让我们开始吧。")]),e._v(" "),s("h3",{attrs:{id:"什么是魔术方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是魔术方法"}},[e._v("#")]),e._v(" 什么是魔术方法")]),e._v(" "),s("p",[e._v("魔术方法首先是方法，是属于类的函数。 它们既可以是实例方法，也可以是类方法。你可以轻松识别它们，因为它们都以双下划线开头和结尾，即它们都看起来像 \t"),s("code",[e._v("__actual_name__")]),e._v("。")]),e._v(" "),s("p",[e._v("重要的是，魔术方法不可以直接调用！ 当然，你可以这样做并写一些类似 "),s("code",[e._v("YourClass().__actual_name__()")]),e._v(" 的东西，但请不要直接调用。")]),e._v(" "),s("p",[e._v("那么魔术方法是如何调用的呢？ 它们会在适当的时候被调用，比如，调用 str(YourClass()) 将调用魔术方法 "),s("code",[e._v("__str__")]),e._v(" 或 YourClass() + YourClass() 将调用 "),s("code",[e._v("__add__")]),e._v("，如果你已经实现了这两个魔术方法。")]),e._v(" "),s("p",[e._v("那么，魔法方法有什么用？ 它让我们能够编写可与 python 内置方法一起使用的类，这样写出的代码更易读和更少的冗余。")]),e._v(" "),s("p",[e._v("为了强调魔术方法的有用性，并了解在进行机器学习或数据科学时如何从使用它们中受益，让我们举一个具体的例子。")]),e._v(" "),s("h3",{attrs:{id:"实例-自定义范围的-datetime-类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例-自定义范围的-datetime-类"}},[e._v("#")]),e._v(" 实例：自定义范围的 datetime 类")]),e._v(" "),s("p",[e._v("​下面的代码展示了如何使用魔术方法编写类似于内置 range 函数的 DateTimeRange 类：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('from datetime import datetime, timedelta\nfrom typing import Iterable\nfrom math import ceil\n\n\nclass DateTimeRange:\n    def __init__(self, start: datetime, end_:datetime, step:timedelta = timedelta(seconds=1)):\n        self._start = start\n        self._end = end_\n        self._step = step\n\n    def __iter__(self) -> Iterable[datetime]:\n        point = self._start\n        while point < self._end:\n            yield point\n            point += self._step\n\n    def __len__(self) -> int:\n        return ceil((self._end - self._start) / self._step)\n\n    def __contains__(self, item: datetime) -> bool:\n        mod = divmod(item - self._start, self._step) # divmod return the tuple (x//y, x%y).  Invariant: div*y + mod == x.\n        return item >= self._start and item < self._end and mod[1] == timedelta(0)\n\n    def __getitem__(self, item: int) -> datetime:\n        n_steps = item if item >= 0 else len(self) + item\n        return_value = self._start + n_steps * self._step\n        if return_value not in self:\n            raise IndexError()\n\n        return return_value\n   \n    def __str__(self):\n        return f"Datetime Range [{self._start}, {self._end}) with step {self._step}"\n\ndef main():\n    my_range = DateTimeRange(datetime(2021,1,1), datetime(2021,12,1), timedelta(days=12))\n    print(my_range)\n    print(f"{len(my_range) == len(list(my_range)) = }")\n    print(f"{my_range[-2] in my_range = }")\n    print(f"{my_range[2] + timedelta(seconds=12) in my_range = }")\n    \n    for r in my_range:\n    \tprint(r)\n        #do_something(r)\n\nif __name__ == \'__main__\':\n\tmain()\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br")])]),s("p",[e._v("先看下运行结果：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gwv7bzuh7pj31860u0n1n.jpg",alt:""}})]),e._v(" "),s("p",[e._v("看到运行结果，你也许可以更快的理解类 DateTimeRange 的作用，代码有点多，不过别担心，我会解释。")]),e._v(" "),s("p",[e._v("总的来说，上述代码实现了六种不同的魔法方法：")]),e._v(" "),s("p",[e._v("1、"),s("code",[e._v("__init__")]),e._v(" 方法。你肯定知道，此方法主要用于初始化您的类的实例属性。在这里，我们将范围类的开始和结束与步长一起传给 DateTimeRange。")]),e._v(" "),s("p",[e._v("2、"),s("code",[e._v("__iter__")]),e._v(" 方法。for 循环或 list(DateTimeRange()) 时会调用。这可能是最重要的一个，因为它生成了我们日期时间范围内的所有元素。这个函数是一个所谓的生成器函数，它一次创建一个元素，将它交给调用者，并允许调用者处理它。它会这样做，直到到达范围的末尾。在查看 yield 关键字时，您可以轻松识别生成器函数。此语句暂停函数保存其所有状态，然后在连续调用时从那里继续。这允许您一次使用一个元素并使用它，而无需您将每个元素都放在内存中。")]),e._v(" "),s("p",[e._v("当范围比较大时，将所有内容都放在内存中会变得非常占用内存。 例如，执行 list(DateTimeRange(datetime(1900,1,1), datetime(2000,1,1)) 时会将 3184617600 个日期时间放入内存。太大了，然而 ，使用生成器您可以轻松地一一处理这些元素。")]),e._v(" "),s("p",[e._v("3、现在你已经看到它不是列表或元组。 然而，为了处理这个 DateTimeRange 类，就像它是一个列表或元组一样，我添加了另外三个神奇的方法，即 "),s("code",[e._v("__len__")]),e._v(" 、 "),s("code",[e._v("__contains__")]),e._v(" 和 "),s("code",[e._v("__getitem__")]),e._v(" 。")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("__len__")]),e._v(" ，您可以通过调用 len(my_range) 找出属于您的范围的元素数量。 例如，当迭代所有元素并想知道已经从所有可用元素中处理了多少元素时，这会变得非常有用。 它也可能告诉你，嘿，我要处理很多数据，请喝杯咖啡。")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("__contains__")]),e._v("，您可以使用 my_range 中的内置语法元素检查某个元素是否属于您的范围。 给定实现的好处在于，这是使用纯数学完成的，无需将给定元素与范围内的所有元素进行比较。 这意味着检查元素是否在您的范围内是一个恒定时间操作，不依赖于实际范围实例的大小。 同样，这对于我们在处理数据时经常看到的大范围会变得很方便。")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("__getitem__")]),e._v(" 您可以使用索引语法从对象中检索条目。 因此，可以通过 my_range[-1] 获取我们范围的最后一个元素。 一般来说，使用 "),s("code",[e._v("__getitem__")]),e._v(" 可以编写非常干净和可读的界面。")]),e._v(" "),s("p",[e._v("4、"),s("code",[e._v("__str__")]),e._v("  方法的作用是将类的实例转换为字符串。将实例转换为字符串是自动调用该方法，例如调用 print(my_range) 或 str(my_range) 时就会调用"),s("code",[e._v("__str__")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"最后的话"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[e._v("#")]),e._v(" 最后的话")]),e._v(" "),s("p",[e._v("本文分享了如何通过魔法方法编写一个非常优雅的类，魔术方法可在 Python 内置的函数或操作中自动调用，可以让我们编写出可读性，易用性更好的类，就像本文中的 DateTimeRange 类，如果觉得有帮助，还请点赞、转发、在看，感谢你的支持。")])])}),[],!1,null,null,null);n.default=a.exports}}]);