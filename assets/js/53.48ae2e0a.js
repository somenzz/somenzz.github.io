(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{409:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("之前做数据仓库的运维，上线部署时需要处理很多任务的依赖关系，所谓任务，就是一个一个 shell 脚本或者存储过程等批处理任务，他们之间是有依赖关系的，由于数据仓库的任务超级多，约 3000 多个任务，这么多的任务是无法使用一张有向无环图来表示，因此依赖关系除了使用直观的有向连线来配置，还使用了隐藏式的配置，就是依赖关系无法使用有向线条来直观的看到。")]),s._v(" "),a("p",[s._v("既然看不到，就有可能出现循环依赖而不自知，只要有可能，就一定会有人犯错，不是你就是他，不是今天就是未来某一天，这就是墨菲定律。这不，我就经历过。")]),s._v(" "),a("p",[s._v("调度平台是先进数通的 MoiaControl V5，这是我用过的最好的调度平台了，之前用过 ETlplus，Airflow。但 MoiaControl 中出现循环依赖并不提示，会导致第二天的任务不会跑批，影响数据的时效性。假如你正准备面试先进数通这家公司，说你可以给该产品增加一项检查循环依赖的功能，我想那一定是个加分项。")]),s._v(" "),a("p",[s._v("那问题来了，如何编码检查任务依赖关系是否有循环依赖？")]),s._v(" "),a("p",[s._v("答案很简单，就是构造一个有向图，进行拓扑排序，如果拓扑排序后没有未访问的点，那就没有环，否则就有环。")]),s._v(" "),a("p",[s._v("下面，我用 Python 来演示这一解决过程，带你彻底掌握拓扑排序。")]),s._v(" "),a("p",[s._v("首先，我们需要借助一种数据结构来表示有向图，使用方便即可，这里，我使用字典来表示，比如表达 a->b, a->c, c->d 这样的依赖关系，我们可以构造字典 edges = { 'a':{b,c},'c':{d} } 来表示。字典的键表示前驱任务，值是一个集合，表示依赖前驱的任务集合。这样的字典可以借助于标准库的 collections 来快速初始化：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("edges "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultdict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("仅保存边是不够的，我们还需要保存顶点，这可以借助一个集合，它可以自动去重，后面看是否所有的任务节点都参与了拓扑排序，就靠它了。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edges "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultdict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nvertex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("接下来就是拓扑排序的代码实现了。")]),s._v(" "),a("p",[s._v("拓扑排序一般来说有两种思路，一种是广度优先遍历，借助于先进先出的队列，一种是深度优先遍历，借助于后进先出的栈。无论哪一种思路，都与入度和出度有关。下面分别进行分析。")]),s._v(" "),a("p",[s._v("广度优先遍历比较符合人的习惯思维，从前到后逐层推进。它首先找出不被任何任务依赖的任务进入队列，哪一种任务不被任何任务依赖呢？ 比如 a->b->c ，a 就是不被任何任务依赖的任务，这样的任务有个特点，就是入度为 0，没有箭头指向的任务的入度就是 0。")]),s._v(" "),a("p",[s._v("首先，我们计算所有节点的入度，把所有入度为 0 的任务依次放入队列，然后开始循环遍历队列，取出第一个任务，记为 a，标记为已访问，同时将依赖于 a 的任务的入度都减少 1，如果减少 1 后入度为 0 的任务放入队列。继续循环，直到所有的节点都被访问。如果循环结束，仍有节点未被遍历，说明存在循环依赖，无论如何他们的入度也不可能为 0。")]),s._v(" "),a("p",[s._v("以上的思路，翻译成代码，如下所示：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" collections\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CheckCycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 顶点集合")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edges "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultdict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用字典表示有向边 如 a -> {b,c,e} 表示 b,c,e 均依赖 a")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultdict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 计算每个顶点的入度")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_edge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        添加一条边\n        """')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" from_job "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" from_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化入度为 0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" to_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化入度为0")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" from_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" to_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防止充分添加相同的边")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 入度加 1")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防止充分添加相同的边")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("can_finish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        Returns:\n            True: 表示没有环，任务可以完成\n            False: 表示有环，任务不可以完成\n        """')]),s._v("\n\n        q "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deque"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" u "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        visited "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n        possible_sequence "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            visited "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("popleft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            possible_sequence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" v "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("indegree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("f'possible sequence: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"->"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("possible_sequence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" visited "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    a->b->c\n       b->d\n       True\n    a->b->c\n       b->d->a\n       False\n    """')]),s._v("\n    check_cycle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CheckCycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("can_finish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    check_cycle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CheckCycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to_job"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("check_cycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("can_finish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br")])]),a("p",[s._v("时间复杂度和空间复杂度的分析同广度优先遍历算法，都是 O(m+n), m 是顶点数，n 是边数，不在赘述。")]),s._v(" "),a("p",[s._v("另一种方法就是深度优先遍历， 深度优先遍历则是一种逆向思维，为了简单的理解，先考虑没有环的情况，如 a->b->c-d ：从任意任务节点出发，假如是 b，一条路走到黑，遍历到最后一个节点 d ，将其入栈，同时将已经访问过的节点标记为已访问（b,c 已访问），将已入栈的节点标记为已完成（d 已完成），还没有访问过的节点标记为未访问 （a 未访问）。也就是说任何一个节点，只会有以下三种状态：")]),s._v(" "),a("ul",[a("li",[s._v("「未访问」：我们还没有访问到这个节点，使用 0 来表示。")]),s._v(" "),a("li",[s._v("「已访问」：我们访问过这个节点，但还没有回溯到该节点，即该节点还没有入栈，还有相邻的节点没有完成，使用 1 来表示。")]),s._v(" "),a("li",[s._v("「已完成」：我们访问过且回溯过这个节点，即该节点已经入栈，并且所有该节点的后续节点都出现在栈的更底部的位置，满足拓扑排序的要求，使用 2 来表示。")])]),s._v(" "),a("p",[s._v("现在回溯到 c，发现 c 已访问，且 c 的后续节点 d 已经完成，因此将 c 入栈，标记为已完成，依次类推，现在，栈底到栈顶依次为 d,c,b。然后从剩余节点 a 出发，执行同样的逻辑，a 也入栈，标记为完成，最终从栈底到栈顶为 d,c,b,a,将这些节点依次出栈，即为拓扑排序。")]),s._v(" "),a("p",[s._v("现在考虑有环的情况 a->b->c->d->b，访问到 d 时，继续访问 b 发现 b 已经被访问，说明有环，退出即可。根据上面的分析，不难写出以下深度遍历的代码：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("can_finish2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    深度优先遍历\n    Returns:\n        True: 表示没有环，任务可以完成\n        False: 表示有环，任务不可以完成\n    """')]),s._v("\n\n    visited "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("defaultdict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存每个顶点是否被访问过")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        visited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化，均未被访问过")]),s._v("\n\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模拟栈")]),s._v("\n    valid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nonlocal")]),s._v(" valid\n        visited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" to_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" visited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" visited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("to_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                valid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n        visited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("from_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" valid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" visited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(result)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" valid\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("时间复杂度即为深度优先遍历或广度优先遍历的时间复杂度，都为 O(m+n) ,其中 m 是顶点数，n 是边数，对应着任务数和任务的依赖数。")]),s._v(" "),a("p",[s._v("其实即使写不出深度优先或广度优先的代码关系也不大，只有会灵活使用就行，网上都是现成的代码，最重要的是要理解这些代码，为我所用。")]),s._v(" "),a("p",[s._v("想用代码时不必辛苦复制，公众号【Python 七号】回复「拓扑排序」获取可执行代码。")])])}),[],!1,null,null,null);t.default=e.exports}}]);