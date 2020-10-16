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
    "revision": "fc1c5412b19d95995914751e5381106b"
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
    "url": "assets/js/12.7af560bb.js",
    "revision": "b6e2e5c71a1a12c533fbfa3c08ced728"
  },
  {
    "url": "assets/js/13.11c98a8c.js",
    "revision": "767c3fabff0a39a8f59a9e22d40af3fd"
  },
  {
    "url": "assets/js/14.fb6d4e91.js",
    "revision": "fc9c2a75b27e355ce922621a7af67701"
  },
  {
    "url": "assets/js/15.fff2b5f0.js",
    "revision": "25f2d0ad3ecf918ecb346c4d0b9b6914"
  },
  {
    "url": "assets/js/16.b9d8f7aa.js",
    "revision": "92c41f604313f88ee14701365b224360"
  },
  {
    "url": "assets/js/17.b2df9e09.js",
    "revision": "e17f7e8fe7ca706a8f31c34d248c7512"
  },
  {
    "url": "assets/js/18.e1572fc2.js",
    "revision": "3e1a130ffbb929330bb1bd556c92a19d"
  },
  {
    "url": "assets/js/19.b18d7479.js",
    "revision": "c95b5f5a26b6fabfad10c90ec5093ddd"
  },
  {
    "url": "assets/js/20.c5ed10ce.js",
    "revision": "e8836fdfbc0620cfeb062dd6f50e442d"
  },
  {
    "url": "assets/js/21.051833ba.js",
    "revision": "1fe79563709f044f2145d6d63061e353"
  },
  {
    "url": "assets/js/22.5c07a1c1.js",
    "revision": "0751dc1e87b6a10684f8eb9a4f409428"
  },
  {
    "url": "assets/js/23.a08bd596.js",
    "revision": "038707646d44ef6dae72b528ed4ddfde"
  },
  {
    "url": "assets/js/24.202ccc5e.js",
    "revision": "a670d310ae6edb2d90aa9c4790acab10"
  },
  {
    "url": "assets/js/25.9f96a951.js",
    "revision": "145a0ab4f2a9c73f5b265511af1441a3"
  },
  {
    "url": "assets/js/26.37bb5c2b.js",
    "revision": "2677a410309e86bebef4a6bae36c9018"
  },
  {
    "url": "assets/js/27.1704ebd7.js",
    "revision": "063ca37ac8f227b456355e8b04fd0dd7"
  },
  {
    "url": "assets/js/28.f468ba90.js",
    "revision": "febdfa546cce9101f55c40b913535809"
  },
  {
    "url": "assets/js/29.f0515770.js",
    "revision": "c4aaf21cc3bb9c536eb0f7d0cd821261"
  },
  {
    "url": "assets/js/30.383cf018.js",
    "revision": "045d460b3d5bac49d76fe9febb951e5a"
  },
  {
    "url": "assets/js/31.97dc6dba.js",
    "revision": "1088bd857f2db0b48afc0c81b41ea0c3"
  },
  {
    "url": "assets/js/32.cfbfaea3.js",
    "revision": "d4d08fafa19e19e039e0272370d0688f"
  },
  {
    "url": "assets/js/33.c4e2d700.js",
    "revision": "4e62f4f03b4cb9dc465cb7d0e3cd96d6"
  },
  {
    "url": "assets/js/34.fb89de0d.js",
    "revision": "a790f25b823e6b7afcffe4cc0884e410"
  },
  {
    "url": "assets/js/35.dd31255f.js",
    "revision": "c851e0952e1fdbe98d96dddd29326cf6"
  },
  {
    "url": "assets/js/36.95b952c7.js",
    "revision": "319d6e9f6e006e862c525a7c9673f548"
  },
  {
    "url": "assets/js/37.ee621f83.js",
    "revision": "b61e87fe5ff32e2ce65f2cb1fc829293"
  },
  {
    "url": "assets/js/38.f678951f.js",
    "revision": "57cf39133c8487507b4cc8ac7db65da0"
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
    "url": "assets/js/40.07a9750a.js",
    "revision": "e541ea0af717f6bb8685333a1ecd8646"
  },
  {
    "url": "assets/js/41.fcf7b1a9.js",
    "revision": "9a4c2ccb8eef7928ea4094df87579c89"
  },
  {
    "url": "assets/js/42.e7970396.js",
    "revision": "6d9b21ebddbd32de57b52aaba083b5bd"
  },
  {
    "url": "assets/js/43.883070cd.js",
    "revision": "97c2179d90cb4f3103a419a1821200e1"
  },
  {
    "url": "assets/js/44.51d35d4f.js",
    "revision": "306384425d8e03e8ddba6d80b59c045e"
  },
  {
    "url": "assets/js/45.99fc3696.js",
    "revision": "6aef8fd91ac14ebb30d899bae579eb9f"
  },
  {
    "url": "assets/js/46.65aedd20.js",
    "revision": "03db643f75c3276a1449e69821d4b669"
  },
  {
    "url": "assets/js/47.bf7b14fa.js",
    "revision": "6e91ba892a27a7ab8e4b8f4999162e09"
  },
  {
    "url": "assets/js/48.62569cb8.js",
    "revision": "450e136654685f17e6243085b08d3be5"
  },
  {
    "url": "assets/js/49.fc11ad56.js",
    "revision": "0821666b7117254aa777a7847fcfec18"
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
    "url": "assets/js/51.e09ac48d.js",
    "revision": "ab35966f6e678a68c73f2bd77d75e7b7"
  },
  {
    "url": "assets/js/52.57e6291f.js",
    "revision": "8f3a2e23c15e08d14bc02232f33c0529"
  },
  {
    "url": "assets/js/53.e59c5d9f.js",
    "revision": "37e2c236eef0bcfcc75f4a634247aa44"
  },
  {
    "url": "assets/js/54.e2c1bf0a.js",
    "revision": "49173921b908b23407709c9027967277"
  },
  {
    "url": "assets/js/55.f6fb363c.js",
    "revision": "cd6484c70b39244d6c85bd1844918d49"
  },
  {
    "url": "assets/js/56.9bc96006.js",
    "revision": "461684b574f8d9a97860a51249d01f84"
  },
  {
    "url": "assets/js/57.c7003b77.js",
    "revision": "8cd53600b75dfe2c044c2b6f4da7de33"
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
    "url": "assets/js/8.d88ce327.js",
    "revision": "2e0a2dd4d222fea1e51532a9aee39646"
  },
  {
    "url": "assets/js/9.afbfc1fb.js",
    "revision": "489af26615e46cd0d55da5408223102f"
  },
  {
    "url": "assets/js/app.a7923243.js",
    "revision": "42dff90cd849b9c0311c34ad7ea23515"
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
    "revision": "72dfba7adacc1e6ca4a1707772fba101"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "bdd6eaee993cbef89f027aa53a673e00"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "c7a0f6c0c55649cdc9e30f56f58b5d39"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "23de340f35f146ca38a1493a78e05f92"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "9a6ee75e80dddabddc2f2c56cda31a87"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2231c259fb5275c765746361e6e20168"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "cd245a40379029884e3270d4bfcb697f"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "4fd0f9536533dfa73835274b13dfd1ec"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "3e80ff60f5c4bfc282c4382cde6c9340"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "f2b031817b3b3c6941ac1739a1ffe669"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "003703480894095ef080ed126832195f"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "286a162576f5f0daad2c62694126912a"
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
    "revision": "84e54f1f92abc797f382b21089d6d0ad"
  },
  {
    "url": "tag/index.html",
    "revision": "f893b25627e6ec3252e091571676f253"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "1c8ce2fa7e98aa6ba22485424fa9fbc6"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "664214770fcd8f78152de6bcd7e653c7"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "c24e4cfca8559a34c7c8679167e134bb"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "fc15ee34c9885c78d02985819cdc1d0f"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "d98cb664489a41ea33d444bdf6241b63"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "3adcf645a1d775ee510967a32101375d"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "640c545d854acdb9ea2aa5be7f59960e"
  },
  {
    "url": "tags/https/index.html",
    "revision": "e906a90aa6f160018059982687e9c7d6"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "398f5d2eca377e402c5282ac3324aba5"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "c4e4e9781f36429b57bd115418025ad4"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "7c9bc9b02ead2156cc0669e5b143e322"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "383c861591d6a956de1be265ec9967f5"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "5a943fab8c047da8e88f92c48fbc3523"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "96e7ef18ef2ff0b4b380c684f06cdc20"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "a524cadd20a06941e8cb3a31dfb96f6a"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "7c2dad263f687f4c62c6a054f5d6a296"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "f111dcb5494072a1f7da22d0f8e6e743"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "ea7c390a6587b73ff9ad528b51e302c9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8500d9aeb8c31ad8b0c6d44e4e524ddd"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "1f23e598006e7b18d2e1d7a4a70c253f"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "d2bf85872a921ef8fe1af20698e90aae"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "b65e47bec8318fcf1f8657c13443a15c"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "80d10806b998abb280311f28b03fec5f"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "85590dd3ea70c9f1a0523edfe581112a"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "933e2b2e755278b51e7a934ec5fded2d"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "e59c8bf9415cf5eb0a5bf93d4af9cd57"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "0a575117fbf772f18a2a57feea3c60d6"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "8410a10ecb863819e42f87f77a70b51b"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "7c95b716d086f1fb2536e83aaf6b5442"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "380b909c8b13140c322a5c194b2176e5"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "c44a57dd776ce556ed1f418dbba0ffd9"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "004e41f7c648d9182ad0a284bea72ef0"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "ce77ddec0ad22d7cf7a3d0521043396c"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "366d13f6d4c051bfec3b88e53b07bbc4"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "da345213fb4a1f25e0ea7c33efe1ee7a"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "ffaf247c8671100f327c7ac76163fa36"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "22d018fc5bffd12c89c94671915181f0"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "5f96568425679231007ac68add6a0195"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "831a037c9e81f546acf20e9c126f5ef8"
  },
  {
    "url": "timeline/index.html",
    "revision": "a7659754ab21cf879d80149ca033b63c"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "134747e204b84b0eb7b7abfdb5380503"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "b6b9a5b4250612e902f4462c4ebd69fe"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "9df3f76f5ec396c7e903f1bdf4b4ad82"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "d82246d79b91ae7c783e6e22e0799e15"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "c76858beba45ce23f27089d462309d92"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "f306f0bd00648744798b133865548dd8"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "a8262a300241caa056d77fd8fc199e91"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "98b04918416c0ddecadd7acd1c7ff1c4"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "5c0506483359a59ca18d8b1ebbf19cab"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "a7f84cb41e27616fdbaa8179f6d4daba"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "de35c7dc6aeb7dc20f8b50c6e47b30d9"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "ed3d5775b5693d795b99a1234e60fb1c"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "a77cf34cde6caf5586cd7f7e51394917"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "2ec9f2e545a21a6f290d50ec477d2056"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "45949f296a2629b65ae3c461a7911550"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "4d93d50863d5dca28378bbe2c316c4de"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "5023bb4c627618b8f56459477bb69421"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "a1c9c7c79a18d348d6b819072e1374dd"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "ea42d06035cbfab50198afc30ccb36ef"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "330e8ce6d2d1f0b163bc948fe541be72"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "1c409f0b0e1852c6560738a92970697d"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "62b8e06787bdbd2ab94df6f36d4bf973"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "d58be0fca111dfa6eea2e4282bdc8629"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "4f3a7a5370aba3b4188dae597aa5d0fe"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "4ef4bd3f8732d158bc8766ec8733a624"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "0bdda5470c6ffded61c56a1b77e355bf"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "14eaa1f3c0cd0082eac5c62424f851e8"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "9719461ddc007fb159c1464feceec3fb"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "105305a0006094f5f4b4e9018778bb11"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "86f5633607e335b488b248bab9d51712"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "67626dea5ba98ea1e9c594bd5fe1a03e"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "555354519716211a4644ccecfe407126"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "710c4638c1c4a9f7b04750f0e30f2eb1"
  },
  {
    "url": "views/index.html",
    "revision": "d2264540f3034dfa8aea59ae139b7e2f"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "19318faaefe83c04dfc9e88ac026e4f9"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "651d614b04ff3583ce2d75c4682d98a2"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "a78515c460755e4b8072f3e672a31425"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "277bf17fd9fd95ea57fbf1954af3b059"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "0b1603fb3f6b11613c6cffe59ed4b23d"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "9296f94be86efaf4689d17ae5caa521c"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "12e2f5621428a622c0b8113d16947df7"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "76fbabbc1229420dbf9fe5f274dcd7c6"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "7996cd3b097375a2e8d14ca5cb9fe871"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "98a3d0926f5f145f3d3695dd0862566f"
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
