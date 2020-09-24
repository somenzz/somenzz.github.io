/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5af6a0d1fcafdb13bea13720c901baf0"
  },
  {
    "url": "assets/css/0.styles.f5bbbaf3.css",
    "revision": "7a91739c4464d34069fe451e40b0f52c"
  },
  {
    "url": "assets/img/640-2.ceda1c55.jpeg",
    "revision": "ceda1c5561494dd403680570c4293cd3"
  },
  {
    "url": "assets/img/applicationShareMem.e3fcbe79.jpg",
    "revision": "e3fcbe79a33a5a6dfc1c330bcd4a4cd7"
  },
  {
    "url": "assets/img/asyncio-rand.dffdd83b4256.dffdd83b.gif",
    "revision": "dffdd83b42565922cca53f2bb2edddbc"
  },
  {
    "url": "assets/img/commit.11c42a6f.jpg",
    "revision": "11c42a6f90400e9f53162626763aad6e"
  },
  {
    "url": "assets/img/data_structure_and_algorithm_share.d4476ad4.jpg",
    "revision": "d4476ad40397c0aeddbafb8b14e72175"
  },
  {
    "url": "assets/img/data_structure_and_algorithm.d87c35a6.jpg",
    "revision": "d87c35a6f87043b479c214d723ac800c"
  },
  {
    "url": "assets/img/db2.c6d39ce3.png",
    "revision": "c6d39ce309d1b02da677f7525f2c786f"
  },
  {
    "url": "assets/img/db2MemModel.e3e6ba92.jpg",
    "revision": "e3e6ba92a4ac0b9a1329f62d85bc90c2"
  },
  {
    "url": "assets/img/db2ShareMem.7126e334.jpg",
    "revision": "7126e334b8bf8d119148b05d6b183794"
  },
  {
    "url": "assets/img/gh8.3c97d555.jpg",
    "revision": "3c97d5555379e6240a0ec61337829e5f"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/insert.619f3d8f.jpg",
    "revision": "619f3d8fea8a2798ce61ea1b16fcf365"
  },
  {
    "url": "assets/img/memory_location.86d5419f.jpg",
    "revision": "86d5419fc7674d94f7e7928e5975eb05"
  },
  {
    "url": "assets/img/PythonSeven.97c2521e.jpg",
    "revision": "97c2521efb290d13a2a0299cfe1d681a"
  },
  {
    "url": "assets/img/PythonSevenW.8dfd1dc6.jpg",
    "revision": "8dfd1dc67b9450c56f8371ab1711c0c6"
  },
  {
    "url": "assets/img/select.7b80e7ab.jpg",
    "revision": "7b80e7abfa35a8fb68c191eb9b9e9cc8"
  },
  {
    "url": "assets/img/wxh.b846c3a8.jpeg",
    "revision": "b846c3a8ceb44d360c91c455c5206039"
  },
  {
    "url": "assets/js/1.1b205fb2.js",
    "revision": "049cf99931eb2e4c313671dca63a2367"
  },
  {
    "url": "assets/js/10.b9e0928e.js",
    "revision": "be8c41483062e521b36e1be79be8411f"
  },
  {
    "url": "assets/js/11.c2ed9543.js",
    "revision": "6a28def1d86be36a6f2f86e0532cac08"
  },
  {
    "url": "assets/js/12.f9c57eb2.js",
    "revision": "c2103f078dfba893cb513960d997a5fc"
  },
  {
    "url": "assets/js/13.bf5a4ecc.js",
    "revision": "c26132126ede3884f627995c30a483b3"
  },
  {
    "url": "assets/js/14.322dcad5.js",
    "revision": "99c0e6c4696ca811d365c9e6114cf146"
  },
  {
    "url": "assets/js/15.a7fd7eb2.js",
    "revision": "22a54cd2cd795d07041c34f705289253"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.7c2796fd.js",
    "revision": "8309df1d2c0b89e1bb2d839d7bf8b0fe"
  },
  {
    "url": "assets/js/18.6f869e4a.js",
    "revision": "aeadd6dce74a502fb7e0cbc9c8246812"
  },
  {
    "url": "assets/js/19.54cc0486.js",
    "revision": "406e6bc56d85795997e0228934d33d56"
  },
  {
    "url": "assets/js/20.797bcff3.js",
    "revision": "0a7e706a00c160dce2c0f24b6a08864f"
  },
  {
    "url": "assets/js/21.de46cd36.js",
    "revision": "f82a19e83ccca059c8e334d20beb3fe1"
  },
  {
    "url": "assets/js/22.cff15ca1.js",
    "revision": "8336f7de6f20e70af97bfb465426a2cd"
  },
  {
    "url": "assets/js/23.1421a9e5.js",
    "revision": "0ee6cc065639835767a72b9725290c2d"
  },
  {
    "url": "assets/js/24.ef775d94.js",
    "revision": "c13fdc37a1184e242332db4166c211f9"
  },
  {
    "url": "assets/js/25.9fd04029.js",
    "revision": "3d390ef512b3534a34ebfc6c03db03dd"
  },
  {
    "url": "assets/js/26.48712fbb.js",
    "revision": "d627d2c459ac93ab8db072e423cfeb8c"
  },
  {
    "url": "assets/js/27.702c5fc0.js",
    "revision": "05e0d935983288d407ed022ab721b80a"
  },
  {
    "url": "assets/js/28.66990449.js",
    "revision": "7e6028e160a12a3f40be4bce4a25e6b3"
  },
  {
    "url": "assets/js/29.989d4e25.js",
    "revision": "571fc06c35773393f3b55484db2ada8a"
  },
  {
    "url": "assets/js/30.bc52a2b5.js",
    "revision": "87fd3dd52f13ab224e8d2e56eb4aa81c"
  },
  {
    "url": "assets/js/31.9f92fc72.js",
    "revision": "40031075edf46b30b214b4031d587fe6"
  },
  {
    "url": "assets/js/32.84f54a0e.js",
    "revision": "95b17716eb763f602ceb96cebbbb71b8"
  },
  {
    "url": "assets/js/33.e6fcb663.js",
    "revision": "986946020627f8ada36120c1ada67e4f"
  },
  {
    "url": "assets/js/34.01a30287.js",
    "revision": "b6cdf357daa50bb52089f379d06bdd1d"
  },
  {
    "url": "assets/js/35.31f7bb71.js",
    "revision": "aa8a7da533182fbe741389fa363ded9b"
  },
  {
    "url": "assets/js/36.7c529dd1.js",
    "revision": "472ebe78152df3015737a6b87ff0746c"
  },
  {
    "url": "assets/js/37.489caf19.js",
    "revision": "a885c0f3ab164edc1859a45e7a85ef99"
  },
  {
    "url": "assets/js/38.03c1bee8.js",
    "revision": "0c2a31136a5fcb6b6a20dcdb0a537cf4"
  },
  {
    "url": "assets/js/39.18597831.js",
    "revision": "c49da85d02e846eddef28b378b807642"
  },
  {
    "url": "assets/js/4.2209a07b.js",
    "revision": "ec35034bffece8c53e635f0e924294e9"
  },
  {
    "url": "assets/js/40.2a8a9e0d.js",
    "revision": "d24a90211d16a82c9a45a437dfde5cb6"
  },
  {
    "url": "assets/js/41.3e9c1893.js",
    "revision": "9d1b5ea68140c5d980a7c22c25a1b8bd"
  },
  {
    "url": "assets/js/42.e1273a14.js",
    "revision": "1f8e32ac76184b59d07cb1a57b7f6657"
  },
  {
    "url": "assets/js/43.d6c882d0.js",
    "revision": "cb2a3b78778841fbea002852568852e9"
  },
  {
    "url": "assets/js/44.955bff4f.js",
    "revision": "cc1e2cd107d7c15dc0874c5259ea0769"
  },
  {
    "url": "assets/js/45.3be0fc58.js",
    "revision": "ba41f80d87d1cd258a2213056c2e2d2e"
  },
  {
    "url": "assets/js/46.42d82451.js",
    "revision": "7bab107efb5b42f0839ba00733dfc8ca"
  },
  {
    "url": "assets/js/47.84f48795.js",
    "revision": "0cb8e2317977bccd6bb3113fc0d5a521"
  },
  {
    "url": "assets/js/48.bda54319.js",
    "revision": "fdabfa6578e7fc8f7ff431e4b7265a20"
  },
  {
    "url": "assets/js/49.6ddf548c.js",
    "revision": "e7463857970a59dbb81061f735a39143"
  },
  {
    "url": "assets/js/5.418474b6.js",
    "revision": "c48475e0447f9416fc5d2fb6bdd33330"
  },
  {
    "url": "assets/js/50.e1cd4d97.js",
    "revision": "bf96348d4971d0b0c9c61419d3505795"
  },
  {
    "url": "assets/js/51.68aa3a1a.js",
    "revision": "43868701fa9f217932213051b6557863"
  },
  {
    "url": "assets/js/52.8d3a0308.js",
    "revision": "ab0375a50e32fcdbb059ffa13b6fc3b2"
  },
  {
    "url": "assets/js/53.3b422982.js",
    "revision": "ff4591f5d0861c5a6482fe6b39009f43"
  },
  {
    "url": "assets/js/54.efaac134.js",
    "revision": "6774311fbdac662c453adb45037adec1"
  },
  {
    "url": "assets/js/6.608b4f85.js",
    "revision": "69a6ec93a1ba43132d0bee5bc104f8e5"
  },
  {
    "url": "assets/js/7.7071d4b4.js",
    "revision": "80287215fa8a78cc2b164cff35878d91"
  },
  {
    "url": "assets/js/8.20bfb2ad.js",
    "revision": "07767a2eb9cd8d7dbcfc014012fcd050"
  },
  {
    "url": "assets/js/9.afbfc1fb.js",
    "revision": "489af26615e46cd0d55da5408223102f"
  },
  {
    "url": "assets/js/app.7a842218.js",
    "revision": "a909c5f85f33d1b6e847f399afdc0193"
  },
  {
    "url": "assets/js/vendors~flowchart.04e65345.js",
    "revision": "944e8e977c5d4b44dba94b484c186846"
  },
  {
    "url": "banner.jpg",
    "revision": "e9d147848b3ca2991472007eb3914bb0"
  },
  {
    "url": "categories/index.html",
    "revision": "8f35d214fe0a03ed1200bd4197abae32"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "50c3512cde0c7ce29f0c76658782973c"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "9995628234e5700db18cb4acfe830658"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "38ff8d52292c3e586e5975ef203aac56"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "43d51fff80084a6325021d83b4e4dd78"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "5123f49df222b62326eaab1d0aad8fa8"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "c1984a6b8948417e5258feb1ff922520"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8d4dd8f34cbb52715bb1419e3fecc76f"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "5736249d2fda64880716a70cd21249fc"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "d043bd75d96c8a38f98bfea1118d3976"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "8c171daeb656fd35d2f393817e4a2eca"
  },
  {
    "url": "favicon.jpg",
    "revision": "912008e890e35f7be5154d3a10a1cd76"
  },
  {
    "url": "head.jpg",
    "revision": "3bf5cfaa1a22564d4ec85bd5667db3d1"
  },
  {
    "url": "head.png",
    "revision": "67379ff61af8c31d3676f12b1f13c0b5"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "e5399c7354e59afd051c9d14a1f1266d"
  },
  {
    "url": "tag/index.html",
    "revision": "7919684e6a9c46dae2d7b9bf86953055"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "a6633161745f98cdfb01e2a5ca286c44"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "0cddd42864f0812afa6674bd5b323da1"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "51376a5b45a887bb9538339e0f6cf8b8"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "cbf70cecd88da91ed8b96f5945d05ef3"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "1d13696695006be7c0e80818eeb9597e"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "37676cbeca08918f9aa67fed63f01005"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "c34075214dc56dd25d1dca620e13d157"
  },
  {
    "url": "tags/https/index.html",
    "revision": "0c6a1f554378fac72ff290d2399916d8"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "7f1ac51cbcecc16b18879f888c406ef6"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "09a5be35b371ea0b3625373cb2d56695"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "55874cbb653f9ab98a998ea5f257ba59"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "309ba24f602788415e330b39c957c4af"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "5b2346cd6bd7aa421eaec7e6397553e2"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "2856aa47bfda20227804a07ff0896afa"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "3a47cf00960b473e7294df62d43d134b"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "bdfda1b66b96341374a00a0c6a28db30"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "9cc34bfb2df0c37ac1fc1c8f185a78f5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "897cdb2d42a10f01cdde3761b24af80a"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "e09f637011a1e0d64b1d4cdca5e35f9c"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "08a0135ead6843afd5ce0ef6ea464663"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "9078e8dfaa294b6f62c3e396ac757d49"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "e6dea679981ea3acd32817aad2df3f89"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "d65b95eb457de7854f189f838e269d27"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "cd6441863f6562e3825639fe685e3607"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "47a4bd5de57dc830fb101bbe2383dbd0"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "ff921bb74130dbaa42e589b73c4c7beb"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "9b5f856b8348121b95a52ed06ce48712"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "60b7eb32640d3049e7e87e6c9a7a2cd0"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "3c7e9eb91629234b18dcce87c0f8ed48"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "0a6ad1c748c3fbfabeaa3fd2cc823f83"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "ebb58f97a3931bafdf325eb2797c59a4"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "d7fa553eacbf3498c34f254a16c3d0f0"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "73285e70a18283f534d995e2c927c8ad"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "f0e04edee5a00db3f3a4f5a6d8bf5b3e"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "3838bc7033641f37a7236ce55e5d4118"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "8e650039fb3c098a268add70198486a6"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "edb231e3557c00728df82aabb053acc2"
  },
  {
    "url": "timeline/index.html",
    "revision": "c33a54bbc91fe8b97d07dd0762858368"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "acc457fd7253a9d44cb488366ed0e9a7"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "85d6a78fa93ede6b9c896ab077c23d5b"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "490c18f977e165c815202ee164e4356c"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "d3434ed1f290ee43ed8d34f0b57a3cf4"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "d83a9ea27dde8706137760a3f33337d0"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "c57525d7c30a6669068c7489942ea88a"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "5774fd4476438d06ede4182d49826f54"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "a0a659e257c4ef246941f55981ac5f46"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "c0b11f4223b1367306220c9fc5f37cc5"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "bca78ebe8254d830a2cf50ad5a5fef50"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "b5c0dae70baff838554e9f443d53621b"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "e717128a3779cf84ea4a331167241491"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "42462ddf9a8dc1f2af08fdd2667e6103"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "b32f427d5f8233bd8dcdb9c0bb1b7a72"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "dca1bf2c7642da531e7d9eabebd0af30"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "65b78863445c4ab3073073510aebee27"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "e8cbfc81fb97574cd3074f4f54119864"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "8a2c2a6fdb536793438a4d506de5c176"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "070918c2474d03746253c59fcf60965c"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "b42bfaa5b893e47a62f358401701fa9c"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "9ef9b1371ffa895031d5b9b7c4f726a7"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "580e345251c0c0df3d51913353557b97"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "e0127c49da2c935dcd39f37461985321"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "58fcda0a2d4cc5d6b59c27eaaeea082a"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "87b20380aae2807a8e8a80b699f22a6f"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "ad0ad62154fbe2aac57a30ac25a4865e"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "8141453a1f602b34384159398a94fdbf"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "fa000fd8619fb3364055066e10fa89ae"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "820a390629064fc42caf03c4bfac6a03"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "6eab2b3a8fdb530720293041851834cb"
  },
  {
    "url": "views/index.html",
    "revision": "34618a5bc94ce3ec6c8de8743908c773"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "a42fdba79fd3c11db1d45e587ca608d8"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "d0625f7765b0c4d6a7a9bd90d81f2ab1"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "b445e623397f14a33b57a73463eb8049"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "8d174d42e1a3272612ca27750e13ea9c"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "3952a107c1ebfae8b8dea5ac6e495228"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "b63d7ff50aaaa319e27b0915c8012ef7"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "a1364bd105fe901adaa7f5775d1a7a3e"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "62f51f131a0c69333ef833fb3f18e411"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "a802c4baf3a0a3ca1bcbd0908c55a7a0"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "de7405f8c213c1498d238f280d701482"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
