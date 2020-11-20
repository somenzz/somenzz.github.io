(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{394:function(t,v,_){"use strict";_.r(v);var s=_(4),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("锁，其实很好理解，每个人都在自己的房屋上安装有锁，你拥有了锁，房屋只有你能独占，别人不能访问。数据库中的锁也一样，只不过更加细分。")]),t._v(" "),_("p",[t._v("db2 中基本的锁有两类：")]),t._v(" "),_("ul",[_("li",[t._v("排他锁（X锁），也叫写锁，当某行数据正在被修改时，其他进程不能再读取或修改")]),t._v(" "),_("li",[t._v("共享锁（S锁），也叫读锁，当某行数据正在被读取时，其他进程修改")])]),t._v(" "),_("h2",{attrs:{id:"db2-事务的隔离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#db2-事务的隔离"}},[t._v("#")]),t._v(" db2 事务的隔离")]),t._v(" "),_("p",[t._v("锁的这种机制都是为事务隔离来服务的，这里就不得不说下什么是"),_("strong",[t._v("事务")]),t._v("，事务就是数据库管理系统执行过程一组数据库操作，是一个逻辑单位，事务就是要保证一组数据库操作，要么全部成功，要么全部失败。可以简单地这样理解：事务就是一组 SQL 语句，以 begin（start） transaction 开始，以 commit 或 rollback 结束。 commit 表示提交，将事务中所有对数据库的更新写会到磁盘的物理数据库中，事务正常结束。 rollback 表示回滚，即在事务运行的过程中发生了某种故障，事务不能继续进行，系统将事务中对数据库的所有以完成的操作全部撤消，滚回到事务开始的状态。")]),t._v(" "),_("p",[t._v("那么为什么要进行事务隔离呢？这个问题可以反过来理解，如果不隔离，会有以下三种现象：")]),t._v(" "),_("p",[t._v("1、脏读。就是事务读取了其他事务未提交的数据，"),_("RouterLink",{attrs:{to:"/views/articles/2018/db2_memory.html"}},[t._v("上一篇文章《一条SQL语句提交后，db2都做了什么？》")]),t._v("中提到，数据库中增删改都是在缓冲区中进行的，查询操作也是优先去缓冲区中查找，如果读取了未提交时数据可能是不正确的，因为未提交的数据随时有可能回退，一旦回退，读取的数据肯定是无效的。")],1),t._v(" "),_("p",[t._v("举个例子：假如你给我转账 1 个亿，然后我查询自己的账户余额，这里有两个事务：事务B：我的账户余额增加 1 个亿，你的账户余额减少 1 个亿。事务A：读取我的账户余额为 1 个亿。时间点如下所示：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("时间点")]),t._v(" "),_("th",[t._v("事务A")]),t._v(" "),_("th",[t._v("事务 B")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("A开始")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("查询账户余额为 0")]),t._v(" "),_("td",[t._v("B开始")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("转账给 A 1 亿，A账户增加 1 亿")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("查询账户余额为 1 亿")]),t._v(" "),_("td",[t._v("B账户余额减少 1 亿")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("B 提交")])])])]),t._v(" "),_("p",[t._v("在时间点 3 处，事务 B 还未提及，事务 A 就读取到了 1 个亿，这时其实并不能认为我已经有 1 个亿，因为事务 B 可能失败而回退。")]),t._v(" "),_("p",[t._v("2、幻读。就是读取了其他事务已提交的数据，但第一次未读取到的数据，第二次读取到了。也可以这样理解，一个事务第一次查询的结果集，被其他事务插入了新行并提交给数据库，导致第二次查询出现了第一次查询没有出现的结果集，在某些情况下，这是合理的，举例子理解如下：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("时间点")]),t._v(" "),_("th",[t._v("事务A")]),t._v(" "),_("th",[t._v("事务 B")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("A开始")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("查询账户余额为 1 亿")]),t._v(" "),_("td",[t._v("B开始")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("提现 1 亿")]),t._v(" "),_("td",[t._v("转账给 A 1 亿 并提交")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("查询账户余额仍 1 亿")]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("p",[t._v("第一次查询我的账户余额为 1 亿，但是取走之后第二次查询还是 1 亿，好像出现了幻觉，因此叫幻读，原因就是第二次读取到了事务 B 已提交的数据，提交的数据并未修改第一次的查询结果，还是插入了新的数据。这种情况下合理的。")]),t._v(" "),_("p",[t._v("3、不可重复读。与幻读有像似之处，就是读取了其他事务已提交的数据，事务内第一次读取到的数据，第二次读取不到了，也可以这样理解，一个事务第一次查询的结果集，被其他事务更新了，并提交给数据库，导致第二次查询不到了，因此叫不可重复读，这样会导致原先做出的决定由于条件的更改而产生偏差 ，但有时候这种情况是也合理的，举例子如下：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("时间点")]),t._v(" "),_("th",[t._v("事务A")]),t._v(" "),_("th",[t._v("事务 B")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("A开始")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("查询账户余额为 1 亿")]),t._v(" "),_("td",[t._v("B开始")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("准备提现")]),t._v(" "),_("td",[t._v("老婆转走账户 A 的 1 亿，并提交")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("再查询账户余额为 0")]),t._v(" "),_("td",[t._v("-")])])])]),t._v(" "),_("p",[t._v("由于实际应用场景非常复杂，不同的业务要求的隔离级别也不一样，因此在进行数据库开发时一定要考虑事务的隔离级别，否则会出大问题。")]),t._v(" "),_("p",[t._v("db2 有避免以上三种现场对应的隔离级别 (其他数据库也有对应的级别，名称可能不一样，请注意对比 )，如下所示：")]),t._v(" "),_("p",[t._v("（是表示允许，否表示不允许）")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("隔离级别")]),t._v(" "),_("th",[t._v("脏读")]),t._v(" "),_("th",[t._v("不可重复读")]),t._v(" "),_("th",[t._v("幻读")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("未提交读（Uncommitted Read）")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("游标稳定性（Cursor Stability）")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("读稳定性（Read Stability）")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("可重复读（Repeatable Read）")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("否")])])])]),t._v(" "),_("p",[t._v("表格里的的内容可能记不住，但是只要理解了，就好记忆。如果还不是很理解，请看关于这 4 个隔离级别的说明：")]),t._v(" "),_("p",[t._v('1、未提交读（Uncommitted Read）\ndb2 "select * from xxx with ur" 里的 with ur 是什么意思，到这你可能就明白了，ur 就是 Uncommitted Read，即未提交读的隔离级别，允许脏读，不加行锁，作用就是在 select 的时候，不需要对 update 的数据进行等待。\n可以在 shell 里测试下\nshell窗口1')]),t._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#+c 表示不自动提交")]),t._v("\ndb2 +c "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"insert into sometable values('value1')\"")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("shell窗口 2")]),t._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##脏读")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from sometable where col "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value1'")]),t._v(' with ur"\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("shell窗口 3")]),t._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##游标稳定性 with cs")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from sometable where col "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value1'")]),t._v(' "\n')])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br")])]),_("p",[t._v("可以在窗口2 中看到结果，窗口 3 中是没有结果的。")]),t._v(" "),_("p",[t._v('2、游标稳定性（Cursor Stability）\ndb2 "select * from xxx with cs ", 这里的 with cs 也可以不写，因为默认的隔离级别就是这种，这种隔离级下，在一个事务中，结果集中只有正在被读取的那一行(游标指向的行)将被加上NS锁（什么是 NS 锁，下文有），其他未被处理的行上不被加锁。这种隔离级只能保证正在被处理的行的值不会被其他并发的程序所改变。')]),t._v(" "),_("p",[t._v("3、读稳定性（Read Stability）")]),t._v(" "),_("p",[t._v("如果使用这种隔离级，在一个事务中所有被读取过的行上都会被加上NS锁，直到该事务被提交或回滚，行上的锁才会被释放。这样可以保证在一个事务中即使多次读取同一行，得到的值不会改变。但是，如果使用这种隔离级，在一个事务中，如果使用同样的搜索标准重新打开已被处理过的游标，则结果集可能改变。(可能会增加某些行，这些行被称为幻影行(Phantom))，对应幻读。这是因为 RS 隔离级别并不能阻止通过插入或更新操作在结果集中加入新行。")]),t._v(" "),_("p",[t._v("4、可重复读（Repeatable Read）")]),t._v(" "),_("p",[t._v("是最严格的隔离级别，如果使用这种隔离级，在一个事务中所有被读取过的行上都会被加上 S 锁，知道该事务被提交或回滚，行上的锁才会被释放。这样可以保证在一个事务中即使多次读取同一行，得到的值不会改变。另外，在同一事务中如果以同样的搜索标准重新打开已被处理过的游标，得到的结果集不会改变。重复读相对于读稳定性而言，加锁的范围更大。")]),t._v(" "),_("p",[t._v("对于读可靠性，应用程序只对符合要求的所有行加锁，而对于重复读，应用程序将对所有被扫描过的行都加锁。例如，如果一个应用程序对一个表中的 10000 行数据进行扫描，最终找到了 100 条符合搜索条件的结果行。如果该应用程序使用的是读可靠性隔离级，应用程序将只对这符合条件的 100 行加锁;如果该应用程序使用的是重复读隔离级，应用程序将对被扫描过的 10000 行都加锁。")]),t._v(" "),_("p",[t._v("更多关于db2 锁的实际操练请移步 "),_("a",{attrs:{href:"https://www.ibm.com/developerworks/data/library/techarticle/dm-0511bond/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding locking in DB2 Universal Database"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"db2-的锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#db2-的锁"}},[t._v("#")]),t._v(" db2 的锁")]),t._v(" "),_("p",[t._v("DB2 支持对表空间，表，行，索引（大型机里支持对数据页）的锁定。通常考虑表锁与行锁。")]),t._v(" "),_("p",[_("strong",[t._v("加锁策略")]),t._v("：\n加表锁：表中所有的行都受到同等程度的影响。\n加行锁：如果加锁的范围针对的是表及下属的行，在在对表加锁后，还要在相应的数据行上加锁。")]),t._v(" "),_("p",[_("strong",[t._v("表锁")]),t._v("见下表：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称缩写")]),t._v(" "),_("th",[t._v("全名")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("IN")]),t._v(" "),_("td",[t._v("无意图锁（Intent Node），不需要行锁")]),t._v(" "),_("td",[t._v("拥有者可以读取包括其他事务未提交数据在内的所有数据，但不能对表中的数据作出修改")])]),t._v(" "),_("tr",[_("td",[t._v("IS")]),t._v(" "),_("td",[t._v("意图共享锁（Intent Share），需要行锁配合")]),t._v(" "),_("td",[t._v("拥有者可以在拥有相应行上的S锁时可以读取该行的数据，但不能修改数据")])]),t._v(" "),_("tr",[_("td",[t._v("IX")]),t._v(" "),_("td",[t._v("意图排他锁（Intent eXclusive），需要行锁配合")]),t._v(" "),_("td",[t._v("拥有者可以在拥有相应行上的X锁时可以修改该行的数据")])]),t._v(" "),_("tr",[_("td",[t._v("SIX")]),t._v(" "),_("td",[t._v("共享并且意图排他锁（Share with Intent eXclusive），需要行锁配合")]),t._v(" "),_("td",[t._v("拥有者可以读取表中的任何数据，如果在相应的行上可以获得X锁，可以修改该行。SIX的获取比较特殊，当程序拥有IX锁时请求S锁，或者在已经拥有S锁的时候请求IX锁时产生")])]),t._v(" "),_("tr",[_("td",[t._v("S")]),t._v(" "),_("td",[t._v("共享锁（Share），不需要行锁配合")]),t._v(" "),_("td",[t._v("可以读取表上的任何数据，如果表上被加了S锁，表上的数据只能被读取而不能做出任何修改")])]),t._v(" "),_("tr",[_("td",[t._v("U")]),t._v(" "),_("td",[t._v("更新锁（Update），不需要行锁配合")]),t._v(" "),_("td",[t._v("拥有者可以读取表中的任何数据，如果升级为X锁，则可以更改表中的任何数据，该锁是等待对数据进行修改的一种中间状态")])]),t._v(" "),_("tr",[_("td",[t._v("X")]),t._v(" "),_("td",[t._v("排他锁（eXclusive），不需要行锁配合")]),t._v(" "),_("td",[t._v("拥有者可以读取或者修改表中的任意数据，如果加上了X锁，除了未提交读事务外，其他程序都不能对表进行任何读取或者修改")])]),t._v(" "),_("tr",[_("td",[t._v("Z")]),t._v(" "),_("td",[t._v("超级排他锁（Super eXclusive），不需要行锁配合")]),t._v(" "),_("td",[t._v("该锁一般不是由 DML 产生，而是由Drop,Alter或者创建删除索引时产生的，加上Z锁后，所有程序（包括未提交读程序）都不能对表进行读取或者修改")])])])]),t._v(" "),_("h2",{attrs:{id:"对-db2-意图锁的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对-db2-意图锁的理解"}},[t._v("#")]),t._v(" 对 db2 意图锁的理解")]),t._v(" "),_("blockquote",[_("p",[t._v("牛老师的注释：对于 IN、IX、IS 和 SIX 这些意图锁，我们可以这样理解：严格来说他们并不是一种锁，而是存放表中行锁的信息。举个通俗的例子，我们去住一个酒店。可以把整个酒店比喻成一张表，每个房间是一个行。当我们预定一个房间时，就对该行（房间）添加 X 锁，但是同时会在酒店的前台对该行（房间）做一个信息登记（旅客姓名、住多长时间等）。大家可以把意图锁当成这个酒店前台，它并不是真正意义上的锁，它维护表中每行的加锁信息，是共用的。后续的旅客通过酒店前台来看哪个房间是可的，那么，如果没有意图锁，会出现什么情况呢，假设我要住房间，那么我每次都要到每一个房间看看这个房间有没有住人，显然这样做的效率是很低下的。其实，最早的 DB2 版本是没有意图锁的，但这对并发影响很大，后来就增加了意图锁。所有的数据库（Oracle、Infomix 和 Sybase）都有意图锁的实现机制。")])]),t._v(" "),_("p",[t._v("DB2 支持的"),_("strong",[t._v("行锁")]),t._v("如下所示：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称缩写")]),t._v(" "),_("th",[t._v("全名")]),t._v(" "),_("th",[t._v("需要表锁最低级别")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("S")]),t._v(" "),_("td",[t._v("共享锁（Share）")]),t._v(" "),_("td",[t._v("IS")]),t._v(" "),_("td",[t._v("该行正在被读取，其他程序只能执行读操作")])]),t._v(" "),_("tr",[_("td",[t._v("U")]),t._v(" "),_("td",[t._v("更改锁（Update）")]),t._v(" "),_("td",[t._v("IX")]),t._v(" "),_("td",[t._v("某个程序正在读取并有可能修改该行，其他程序只能读取该行")])]),t._v(" "),_("tr",[_("td",[t._v("X")]),t._v(" "),_("td",[t._v("排他锁（eXclusive）")]),t._v(" "),_("td",[t._v("IX")]),t._v(" "),_("td",[t._v("该行正在被某个程序修改，其他程序不能访问该行")])]),t._v(" "),_("tr",[_("td",[t._v("W")]),t._v(" "),_("td",[t._v("弱排他锁（Weak eXclusive）")]),t._v(" "),_("td",[t._v("IX")]),t._v(" "),_("td",[t._v("一行被插入表后，该行会加上 W 锁，只有锁的拥有者可以修改该行，与 X 锁的不同在于该锁与 NW 锁兼容")])]),t._v(" "),_("tr",[_("td",[t._v("NS")]),t._v(" "),_("td",[t._v("下一键共享锁（Next Share）")]),t._v(" "),_("td",[t._v("IS")]),t._v(" "),_("td",[t._v("拥有者与其他程序都可以读取该行，但不能进行修改，当程序处于RS或者CS隔离级别下时，该锁可以代替S锁")])]),t._v(" "),_("tr",[_("td",[t._v("NX")]),t._v(" "),_("td",[t._v("下一键排他锁（NexteXclusive）")]),t._v(" "),_("td",[t._v("IX")]),t._v(" "),_("td",[t._v("一行的数据被插入到索引或者从索引被删除时，该行的下一行会被加上 NX 锁，锁的拥有者可以读该行的数据但不能修改。该锁与 X 锁类似，但与 NS 锁兼容")])]),t._v(" "),_("tr",[_("td",[t._v("NW")]),t._v(" "),_("td",[t._v("下一键弱排他锁（NextWeak eXclusive）")]),t._v(" "),_("td",[t._v("IX")]),t._v(" "),_("td",[t._v("一行的数据被插入到索引时，该行的下一行会被加上NW锁，锁的拥有者可以读但不能修改该行的数据，与X锁及 NX 锁类似，但与W锁以及 NS 锁兼容")])])])]),t._v(" "),_("h2",{attrs:{id:"db2-锁转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#db2-锁转换"}},[t._v("#")]),t._v(" db2 锁转换")]),t._v(" "),_("p",[t._v("当程序向数据库请求它已经加锁的对象上面的锁的时候，数据库会比较对象上现在的锁与所请求的锁的模式，如果所请求的锁级别更高，则把现在的锁升级为请求的锁。")]),t._v(" "),_("p",[t._v("锁级别比较：")]),t._v(" "),_("ul",[_("li",[t._v("表锁：IN < IS < S< IX< U< X< Z")]),t._v(" "),_("li",[t._v("行锁：S< U< X")])]),t._v(" "),_("p",[t._v("有一个特殊例子是，如果持有 S 锁请求 IX 锁，或者持有 IX 锁请求 S 锁，锁转换结果为 SIX 锁。")]),t._v(" "),_("h3",{attrs:{id:"db2-锁升级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#db2-锁升级"}},[t._v("#")]),t._v(" db2 锁升级")]),t._v(" "),_("p",[t._v("DB2里有两个参数，LOCKLIST 与 MAXLOCKS:")]),t._v(" "),_("ul",[_("li",[t._v("LOCKLIST 表示数据库分配的"),_("strong",[t._v("用来储存锁列表的空间大小")]),t._v("，")]),t._v(" "),_("li",[t._v("MAXLOCKS表示程序最大允许"),_("strong",[t._v("占用锁列表大小")]),t._v("的百分比，")])]),t._v(" "),_("p",[t._v("当超过这个百分比的时候，就会进行锁升级，因此增大这两个参数的值可有效避免锁升级，但会占用更多内在空间，比如")]),t._v(" "),_("div",{staticClass:"language-sh line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[t._v("$ db2 get db cfg"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -i lock\n Max storage "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" lock list "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4KB"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOCKLIST"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("200000")]),t._v("\n Percent. of lock lists per application       "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MAXLOCKS"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n Interval "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" checking deadlock "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ms"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DLCHKTIME"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n Lock "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sec"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                        "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOCKTIMEOUT"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v("\n Block log on disk full                "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BLK_LOG_DSK_FUL"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NO\n Block non logged operations            "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BLOCKNONLOGGED"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NO\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br")])]),_("p",[t._v("这里 LOCKLIST 占用的内存大小为 200000*4/1024=781.25 MB\n单个应用的锁最高可占用 468.75MB 的内存。DB2 会在一个程序锁定过多行的时候，会把锁定多行变更为锁定整个表，升级为表锁，从而降低内存占用。")]),t._v(" "),_("p",[t._v("DLCHKTIME 默认为 10000 ms 也即 10s，是检查死锁的频率，即每 10 秒检查是否有死锁发生。如果有列锁，数据库会中止发生死锁的某个应用程序（通常为所做工作最少的那个应用程序），这会释放这个应用程序所持有的所有的锁，并允许别的应用程序继续工作，DB2 将向被终止的应用程序的 SQLCA 发送描述性的错误信息。")]),t._v(" "),_("p",[t._v("LOCKTIMEOUT，可以设置这个参数的值来设定遇到锁阻塞后的等待时间，如果超过这个时间，数据库会自动回滚该事务。")])])}),[],!1,null,null,null);v.default=a.exports}}]);