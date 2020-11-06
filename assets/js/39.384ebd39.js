(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{392:function(a,s,e){"use strict";e.r(s);var n=e(4),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("RSA 是地球上最重要的算法，没有之一。")]),a._v(" "),e("p",[a._v("如果没有 RSA 算法，现在的网络世界毫无安全可言，也不可能有现在的网上交易。众所周知的 ssh 协议也是基于 RSA 加密算法才能确保通讯是加密的，可靠的。\n"),a._v("\n1976年以前，所有的加密方法都使用对称加密算法：加密和解密使用同一套规则。例如：甲使用密钥 A 加密，将密文传递给乙，乙仍使用密钥 A 解密。如果密钥 A 在甲传递给乙的过程中泄露，或者根据已知的几次密文和明文推导出密钥 A，则甲乙之间的通讯将毫无秘密。")]),a._v(" "),e("p",[a._v("1976年，两位美国计算机学家 Whitfield Diffie 和 Martin Hellman，提出了一种崭新构思，可以在不传递密钥的情况下，完成解密。这被称为 Diffie-Hellman密钥交换算法 假如甲要和乙通讯，甲使用公钥 A 加密，将密文传递给乙，乙使用私钥 B 解密得到明文。其中公钥在网络上传递，私钥只有乙自己拥有，不在网络上传递，这样即使知道了公钥 A 也无法解密。反过来通讯也一样。只要私钥不泄漏，通信就是安全的，这就是非对称加密算法。")]),a._v(" "),e("p",[a._v('1977年，三位数学家 Rivest、Shamir 和 Adleman 设计了一种算法，可以实现非对称加密。算法用他们三个人的名字命名，叫做 RSA 算法。直到现在，RSA 算法仍是最广泛使用的"非对称加密算法"。毫不夸张地说，只要有计算机网络的地方，就有 RSA 算法。')]),a._v(" "),e("p",[a._v("只是以上描述并不能让你感受到 RSA 的魅力，我举一个简单的例子。")]),a._v(" "),e("p",[a._v("甲向乙发消息，要确保只有乙可以看懂，那么需要乙拥有一对密钥，既公钥和私钥。假设乙已经有了公钥（n，e) = (4757 , 101) 和私钥（n，d) = (4757 ，1601)， 公钥可以在网络上传输，泄露也没关系，私钥只有乙自己知道，不传输。")]),a._v(" "),e("h2",{attrs:{id:"加密过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加密过程"}},[a._v("#")]),a._v(" 加密过程")]),a._v(" "),e("p",[a._v('甲要向乙发送信息“中”，就要使用乙的公钥加密汉字 "中"，计算机只处理数据，汉字“中”通过 utf-8 编码为 [e4 b8 ad]，转为 10 进制为 [228,184,173]。要想使用公钥（n，e) = (4757 , 101) 加密，要求被加密的数字必须小于 n，被加密的数字必须是整数，字符串可以取 ascii 值或 unicode 值，因此将“中”字折为三个字节 [228,184,173]，分别对三个字节加密。 假设 a 为明文，b 为密文，则按下列公式计算出 b')]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a^e % n = b\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("计算 [228,184,173] 的密文如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("228^101 % 4757 = 4296\n\n184^101 % 4757 = 2458\n\n173^101 % 4757 = 3263\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("即汉字“中”（[228,184,173]）加密后得到密文 [4296，2458，3263]，如果没有私钥，神仙也无法从 [4296，2458，3263] 中解密出 [228,184,173]。")]),a._v(" "),e("h2",{attrs:{id:"解密过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解密过程"}},[a._v("#")]),a._v(" 解密过程")]),a._v(" "),e("p",[a._v("乙收到密文 [4296，2458，3263]，并用自己的私钥（n，d) = (4757 ，1601) 解密。解密公式如下： 假设 a 为明文，b 为密文，则按下列公式计算出 a")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a^d % n = b\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("密文 [4296，2458，3263]的明文如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("4296^1601% 4757 = 228\n\n2458^1601% 4757 = 184\n\n3263^1601% 4757 = 173\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v('即密文 [4296，2458，3263] 解密后得到 [228,184,173] 将[228,184,173] 再按 utf-8 解码为汉字 "中"，至此解密完毕。')]),a._v(" "),e("h2",{attrs:{id:"密钥对的生成过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#密钥对的生成过程"}},[a._v("#")]),a._v(" 密钥对的生成过程")]),a._v(" "),e("p",[a._v("你可能想知道，公钥（n，e) = (4757 , 101) 和私钥（n，d) = (4757 ，1601) 是怎么生成的，且看下面的步骤。")]),a._v(" "),e("h2",{attrs:{id:"_1、随机找两个质数-p-和-q-p-与-q-越大，越安全。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、随机找两个质数-p-和-q-p-与-q-越大，越安全。"}},[a._v("#")]),a._v(" 1、\b随机找两个质数 P 和 Q ,P 与 Q 越大，越安全。")]),a._v(" "),e("p",[a._v("比如 P = 67 ，Q = 71。计算他们的乘积 n = P * Q = 4757 ，转化为二进为 1001010010101，该加密算法即为 13 位，实际使用中的算法是往往是 1024 位 或 2048 位，位数越长，算法越难被破解。")]),a._v(" "),e("h2",{attrs:{id:"_2、计算-n-的欧拉函数-φ-n-。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、计算-n-的欧拉函数-φ-n-。"}},[a._v("#")]),a._v(" 2、计算 n 的欧拉函数 φ(n)。")]),a._v(" "),e("p",[a._v("φ(n) 表示在小于等于 n 的正整数之中，与 n 构成互质关系的数的个数。例如：在 1 到 8 之中，与 8 形成互质关系的是 1、3、5、7，所以 φ(n) = 4。 如果 n = P * Q，P 与 Q 均为质数，则")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("φ(n) = φ(P * Q)= φ(P - 1)φ(Q - 1) = (P - 1)(Q - 1)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("本例中 φ(n) = 66 * 70 = 4620，这里记为 m， m = φ(n) = 4620")]),a._v(" "),e("h2",{attrs:{id:"_3、随机选择一个整数-e，条件是-1-e-m，且-e-与-m-互质。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、随机选择一个整数-e，条件是-1-e-m，且-e-与-m-互质。"}},[a._v("#")]),a._v(" 3、随机选择一个整数 e，条件是 1< e < m，且 e 与 m 互质。")]),a._v(" "),e("p",[a._v("公约数只有 1 的两个整数，叫做互质整数，这里我们随机选择 e = 101 请注意不要选择 4619，如果选这个，则公钥和私钥将变得相同。")]),a._v(" "),e("h2",{attrs:{id:"_4、找到一个整数-d，可以使得-e-d-除以-m-的余数为-1。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、找到一个整数-d，可以使得-e-d-除以-m-的余数为-1。"}},[a._v("#")]),a._v(" 4、找到一个整数 d，可以使得 e*d 除以 m 的余数为 1。")]),a._v(" "),e("p",[a._v("即找一个整数 d，使得 (e * d ) % m = 1。 等价于 e * d - 1 = y * m ( y 为整数） 找到 d ，实质就是对下面二元一次方程求解:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("e * x - m * y =1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v('其中 e = 101，m = 4620，既 101x - 4620y =1，解这个方程可以用"扩展欧几里得算法"求解，此处省略具体过程。 总之算出一组整数解')]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(x,y) = (1601,35)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("即 d = 1601。 到此密钥对生成完毕。不同的 e 生成不同的 d，因此可以生成多个密钥对。")]),a._v(" "),e("p",[a._v("本例中公钥为 （n,e) = (4757,101)，私钥为 (n,d) = (4757,1601)，仅（n，e) = (4757,101) 是公开的，其余数字均不公开。可以想像如果只有 n 和 e，如何推导出 d，目前只能靠暴力破解，位数越长，暴力破解的时间越长。")]),a._v(" "),e("h2",{attrs:{id:"其他细节"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他细节"}},[a._v("#")]),a._v(" 其他细节")]),a._v(" "),e("p",[a._v("加密和解密的过程使用了费尔马小定理的两种等价的描述。")]),a._v(" "),e("p",[a._v("有人会问，有没有可能在已知 （n，e) 的情况下，推导出 d。")]),a._v(" "),e("p",[a._v("根据以上密钥对的生成过程：")]),a._v(" "),e("p",[a._v("如果想知道 d 需要知道欧拉函数 φ(n)")]),a._v(" "),e("p",[a._v("如果想知道欧拉函数 φ(n) 需要知道 P 和 Q")]),a._v(" "),e("p",[a._v("要知道 P 和 Q 需要对 n 进行因数分解。")]),a._v(" "),e("p",[a._v("对于本例中的 4757 你可以轻松进行因数分解，但对于大整数的因数分解，是一件很困难的事情，目前除了暴力破解，还没有更好的办法，如果以目前的计算速度，破解需要50年以上，则这个算法就是安全的。 维基百科这样描述：")]),a._v(" "),e("blockquote",[e("p",[a._v('对极大整数做因数分解的难度决定了RSA算法的可靠性。换言之，对一极大整数做因数分解愈困难，RSA算法愈可靠。假如有人找到一种快速因数分解的算法，那么RSA的可靠性就会极度下降。但找到这样的算法的可能性是非常小的。今天只有短的RSA密钥才可能被暴力破解。到2008年为止，世界上还没有任何可靠的攻击RSA算法的方式。只要密钥长度足够长，用RSA加密的信息实际上是不能被解破的。"')])]),a._v(" "),e("p",[a._v("目前已经破解的最大整数：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1230186684530117755130494958384962720772853569595334792197322452151726400507263657518745202199786469389956474942774063845925192557326303453731548268507917026122142913461670429214311602221240479274737794080665351419597459856902143413\n=\n33478071698956898786044169848212690817704794983713768568912431388982883793878002287614711652531743087737814467999489\nx\n36746043666799590428244633799627952632279158164343087642676032283815739666511279233373417143396810270092798736308917\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("即 232 个十进制位，768 个二进制位，目前被破解的最长 RSA 密钥就是 768 位。实际应用中 RSA 的密钥长度为 1024 位，重要场合 2048 位，未来半个世纪不可能破解。")]),a._v(" "),e("p",[e("strong",[a._v("参考文档：")])]),a._v(" "),e("ol",[e("li",[a._v("RSA算法原理（二）（阮一峰）（http://www.ruanyifeng.com/blog/2013/07/rsa_algorithm_part_two.html）")]),a._v(" "),e("li",[a._v("数学之美：谈谈密码学的数学原理（吴军）")])]),a._v(" "),e("p",[a._v("如果您对文章感兴趣，请微信搜索「Python七号」并关注。")])])}),[],!1,null,null,null);s.default=t.exports}}]);