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
    "revision": "86e1b243594e58b65efb2ae26d703668"
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
    "url": "assets/js/1.c587002c.js",
    "revision": "5f7b76968b670e661fbede5ab25a3812"
  },
  {
    "url": "assets/js/10.efbfb807.js",
    "revision": "374604fc67b1f955c093748ce05684e8"
  },
  {
    "url": "assets/js/11.c2ed9543.js",
    "revision": "6a28def1d86be36a6f2f86e0532cac08"
  },
  {
    "url": "assets/js/12.f779f9b9.js",
    "revision": "3037cb0a3ef07a454139eb52a4cb61df"
  },
  {
    "url": "assets/js/13.bf5a4ecc.js",
    "revision": "c26132126ede3884f627995c30a483b3"
  },
  {
    "url": "assets/js/14.a0adea84.js",
    "revision": "da8b052ed63f9ee467ba381724cdb571"
  },
  {
    "url": "assets/js/15.4095b50a.js",
    "revision": "c16c000539c358420c9b0fcd7e8584ea"
  },
  {
    "url": "assets/js/16.46e00861.js",
    "revision": "87aac76b2211acc12af7f6ee42227ef2"
  },
  {
    "url": "assets/js/17.dbfed848.js",
    "revision": "417d4e7ef9c4690b61ce5420ab22beb4"
  },
  {
    "url": "assets/js/18.24daa581.js",
    "revision": "afd678f2ec3f44bb2533a32c86c5b4fb"
  },
  {
    "url": "assets/js/19.d25788c3.js",
    "revision": "0187d44e48a0902f429d12dae81c857c"
  },
  {
    "url": "assets/js/20.e43321a5.js",
    "revision": "8c7af4ff6642bfbcccf9cc3593834984"
  },
  {
    "url": "assets/js/21.5ce71ef2.js",
    "revision": "d9f9a9abe00bf20e67fb7b9701697400"
  },
  {
    "url": "assets/js/22.963f757e.js",
    "revision": "c899932db8fbbecfa13f074bf4457565"
  },
  {
    "url": "assets/js/23.a9300b09.js",
    "revision": "06a50b5af80e9cc9215840c508fa30f7"
  },
  {
    "url": "assets/js/24.4fd3366d.js",
    "revision": "b37891819d2dad924cfdcfd585a5366f"
  },
  {
    "url": "assets/js/25.dbb2ff90.js",
    "revision": "1687e634c4c9dc20bc007cc557597986"
  },
  {
    "url": "assets/js/26.4ed92cc2.js",
    "revision": "4c9e37956edba1f8986f78cea8532952"
  },
  {
    "url": "assets/js/27.7bbdb6d4.js",
    "revision": "b547f404d3c6696546f45108860806d4"
  },
  {
    "url": "assets/js/28.9a6f649b.js",
    "revision": "9e8f7d6562811c526f86973f17ac6f0d"
  },
  {
    "url": "assets/js/29.a17ed341.js",
    "revision": "89e3d92bfa8a635b71d9de5dad9753b1"
  },
  {
    "url": "assets/js/30.2cc282db.js",
    "revision": "3f29f1889532a9d75b5465cd07da202f"
  },
  {
    "url": "assets/js/31.25f2fcb7.js",
    "revision": "3862fcf5de1333d65514427ddfff2796"
  },
  {
    "url": "assets/js/32.dde45eed.js",
    "revision": "141603c34debf0440a5acbc7286e4c71"
  },
  {
    "url": "assets/js/33.ae5574d9.js",
    "revision": "3b8376a438e3e877b2f9cc3e8f965f2f"
  },
  {
    "url": "assets/js/34.4f339098.js",
    "revision": "c9c518ec97d2891a5dbee1c5cd0d0db9"
  },
  {
    "url": "assets/js/35.13a356b7.js",
    "revision": "64d007efe6dd2284348b8874592a01b8"
  },
  {
    "url": "assets/js/36.7d526c73.js",
    "revision": "fbea6283eccb49fa3e495d2eb2835c4c"
  },
  {
    "url": "assets/js/37.78db009c.js",
    "revision": "4c0be2e02a46b19971fdd3ded1c98c96"
  },
  {
    "url": "assets/js/38.3804128f.js",
    "revision": "d1fefa67d46c61eebbf8e881f828fa4c"
  },
  {
    "url": "assets/js/39.a7e56481.js",
    "revision": "e2089ce1cb53358ad8108178cc160b3c"
  },
  {
    "url": "assets/js/4.df261250.js",
    "revision": "fba448b20bf9c5d6cdb52fa2a167d5b5"
  },
  {
    "url": "assets/js/40.cf06e918.js",
    "revision": "080632ab8600a3c945919e389ad8a32a"
  },
  {
    "url": "assets/js/41.f810742c.js",
    "revision": "9af5909aed347d69ac5c437190e3b127"
  },
  {
    "url": "assets/js/42.bfdbde28.js",
    "revision": "fb5a5de4156723e06beb688da13b1d5f"
  },
  {
    "url": "assets/js/43.2bf71b34.js",
    "revision": "7d3fcea9a99e7f83424c08e19fcf8890"
  },
  {
    "url": "assets/js/44.95b89f60.js",
    "revision": "af0f8094c896935e1c370e0cdcef2ec6"
  },
  {
    "url": "assets/js/45.934b0dda.js",
    "revision": "00bd9049d31c7804d6b84de65a4d1b1c"
  },
  {
    "url": "assets/js/46.c82f4ec8.js",
    "revision": "73f4e1b8dd53c7126ebce05e030b11c3"
  },
  {
    "url": "assets/js/47.82020bbe.js",
    "revision": "6c853a5809cc0fe0d2a5889ef861310b"
  },
  {
    "url": "assets/js/48.6f6cc35b.js",
    "revision": "6305f3fe29f5be855ec780b3552af795"
  },
  {
    "url": "assets/js/49.9f5a1543.js",
    "revision": "d4b6f3e2bde82dfb018e32d9e4223d93"
  },
  {
    "url": "assets/js/5.a0cf09f1.js",
    "revision": "bb12c292b21978df449d337e690c33a5"
  },
  {
    "url": "assets/js/50.928f56ce.js",
    "revision": "5365bd0c89b3e1745019b16844d47301"
  },
  {
    "url": "assets/js/51.c01efcd8.js",
    "revision": "6e25a6f08b3e9fe0699e2d8940872ea8"
  },
  {
    "url": "assets/js/52.19cfc3b8.js",
    "revision": "b2132a50fd20ed8f80922f0674e43abf"
  },
  {
    "url": "assets/js/53.43b82564.js",
    "revision": "a3de64a374e7b0da3ed608bc93b99344"
  },
  {
    "url": "assets/js/54.a06e2710.js",
    "revision": "5b31fb82bb06a17219c32f8a766d1aa2"
  },
  {
    "url": "assets/js/55.89e98e85.js",
    "revision": "f26aafdcbf0babe5cf11d03a4e46e9dd"
  },
  {
    "url": "assets/js/56.32d83a4a.js",
    "revision": "4050fdd3cd0f605b2880695e21ccac64"
  },
  {
    "url": "assets/js/57.b05a6599.js",
    "revision": "ce9c6b58c56c234c1fd4d8d35e6f6726"
  },
  {
    "url": "assets/js/58.8f4467bb.js",
    "revision": "4680c981012e1c6e20416c89489d3630"
  },
  {
    "url": "assets/js/59.b749ace9.js",
    "revision": "def742ab47065db203f332b980d3d1e2"
  },
  {
    "url": "assets/js/6.c3845513.js",
    "revision": "bb02c80adcf1b4c04be150d19890bf26"
  },
  {
    "url": "assets/js/60.e7fbc851.js",
    "revision": "81824760e725ea31a8c4a4aaac5eb57d"
  },
  {
    "url": "assets/js/7.00a49186.js",
    "revision": "4c439d7805fddab7c9784e8c48bd93ec"
  },
  {
    "url": "assets/js/8.043e69b1.js",
    "revision": "163db8dd5c4f7ccdb68e25047d8d2d5e"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.c31bd3f8.js",
    "revision": "6b3bb3eefa73d563b2d534a796d52470"
  },
  {
    "url": "assets/js/vendors~flowchart.745badf9.js",
    "revision": "55266d6a8cd8d302e1b2129228fa5fc8"
  },
  {
    "url": "banner.jpg",
    "revision": "e9d147848b3ca2991472007eb3914bb0"
  },
  {
    "url": "categories/index.html",
    "revision": "aeeb7f3819fbe2d259beef8371fd508b"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "7a6c9ca68c6a2428201d431dd8be2ad1"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "bc2e96a8a18535e79d7dda5782a6edd7"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "68a71ee1f93733bb8530e2e04b9d82ee"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "4dabeb436a950e303bcb11066254f959"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "83bdf472a97a5c364c8bcabf55da932f"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "ae03838bc30f5c32073ea7b90a6211d7"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "883bcf23bc432c3f001655c9fdcd2c4c"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "c41388acd4330669427f36a1d1e678b3"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "43b2ad1c4dc398a05a79b00f2481bea8"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "fc2940d8dd3e049d7ebbd11420beb615"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "7f2a1c24e295406b2b26c3443a4b5c10"
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
    "revision": "0884055ce591bd45f20d33c76c7fda76"
  },
  {
    "url": "tag/index.html",
    "revision": "b09b4de312c3d8d7478eea59b2b3dba3"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "6aafdd74a270f0b0d987c53d088eac10"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "40acc2500af0a1f29b9e1cae12bc6ef6"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "77b3b21cb06e09f2e1727c3db8b0819c"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "9bd72199ef6147f1eb2b4d8169d25686"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "2cc4f10b9bbc34c17723b8e823da88a2"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "4249a33c6711bf423604509999ab212d"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "1086a1fd0db7dac87dff7ace1d89310a"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "bbc03e6b791ae39eff5d4e1b3ed0080d"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "e15198b894acded204255d5f4e999f79"
  },
  {
    "url": "tags/https/index.html",
    "revision": "8f43df91b70e54bce7c4f665c739e4df"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "0651b1713167996436cf9caeea0f6202"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "dfab7479c1197b71995d0e57c5735235"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "a4c520c44ae4c0deae5e956931b6bdd5"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "b544d29241961b742b03500f061d94a4"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "37b38a62bf227ed8890d3a35a404fab2"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "63a0366945bfb3c0cfa10c98da3b2040"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "47844e470572a3dceca850e0ba3bf56d"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "cfec20f266575ebaea3d0e6516aa0b09"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "d2bb0df7018e4d8af92fb4270852ac99"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "34d815ba81a76d223b8b80df238fa316"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e599c5ab2c6fdc6e3b7b4ef086ea17b6"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "8db87f87cfca4d99a2a71b61e58bd4c5"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "7f21083cbda68e8625f6904ee01cb577"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "916e5ec5eacf9b22b0911d438f54760a"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "d1a1c3bade737ad749fb9f1a55eaf08b"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "bbbf742ecce0c510fd6a182989e434f5"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "004e34222eb8adaa9a864917e7b11380"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "3d93e66f4855fa1a20dc041aee31c59a"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "109e50e82f174f1b31c19acbaf4da87f"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "b600cee8075ecc51a97a76e00fcfc902"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "49c10167aebebf77aad7c3151e291e8b"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "d45373917a1c53e628a57ad0c9e307d2"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "91576e17992accb4e0bdd742d6aef9f5"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "d2b5f5ecc8b2ec50c6af196e460b2ef5"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "4ca105154a5e9c3e42e2c1f08390424d"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "d925277ede95f97227161215d92b0433"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "1de227fd9294e7b534195e6cf6059acf"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "081c9a1f93732d34e67713a004073f23"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "c16ba0dbe9cba2481c5228c4e90e17d0"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "9520fdb8a33f0fc5fada268285bd2048"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "c3501ae0f6082d62bf5efb9531ba180b"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "658fce0c1061b1fb208aadd602b6743b"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc84f2a093466109a3a45ec91513f0f0"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "6c48d74b88795d698bb88077064b9d47"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "9789a84bb5be531bca04380c54329bab"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "d9ba764ee858da160c2363f2117949db"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "d3be0159e29b6c347484c88fe0666004"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "7cca1669277ab24a5092aba407788bac"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "644614939a9860a753cf89b725c126c7"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "3d0590420c7bf83a9d14a0238b57acb3"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "adb339861b7100ad65588c921b8d3eef"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "018680659584f921cdb075979ae4137b"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "095410d45aec6110bfb25efc9204c62e"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "66376c19ac91726fb9b87a01a0aed6c8"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "a7bc0c3b0482ccbef6ee20e3b1da334e"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "4922844fffd69544540e0a54487ea810"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "fa35d56cf4d23a51a55b2b3474e1f40c"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "1f56c39bd5f028563be392db96ed693f"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "e1a6c1684560c3cdd7b453a99b844a20"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "a78fcccbf5bacc8172273d2f126f1610"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "5226f5799ba78ebdf2f1f8f43d98a6ce"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "b4e3cf62fb59d6ed9a0699cf68ea8549"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "768ccab764f0a8ea019c0a2e612ce15b"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "20c47ea2e05dc210801abe7bb711d12a"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "b45f97e61a4b967621b505b26a8d18a7"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "508b17e54abcfc44b5391d06fbf8bb00"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "d94ef24decc7e21474573ec11ea1ecdf"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "77cd2cae5c38d5c0ff7fc90c5fb001e0"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "17efcb78a75f8143b860e942aee8ab09"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "a6fad6c0b17c58c58399f7f2b86c4ca4"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "36ba2c91b02c8106f82e3708cfc0d6eb"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "1884d2c70dd1bf06c9e11b062e11b951"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "424cacbf51b0ca5f6a57dfe31ec76124"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "9088aaa2c68456dbc7f72d2769e9bf5d"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "7271edbc57f436565e7586cdd9d273be"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "7d3931da6d5a6d170fcad4c08b1550fa"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "60c5fa26bcd242f2e486921796f3b6aa"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "62978651c6379ff6508ce3054c6c472f"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "d54bd7b8a18bfb414cd8b4a2530edd7a"
  },
  {
    "url": "views/index.html",
    "revision": "bae2333683a2937fbc0687887ed4a76b"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "fe1fb8553b75b004888efa4e2c47841d"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "37b91a5c80aaf5ca5949616f2dd589d1"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "ae8567ba6d616c8e5496280062400f06"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "8102680758ad30324447bdfa88b8599a"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "ed67312d92a7240f3c5d61ee1bc3a8b4"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "0e75be0ce01398a839916b1b6c98a095"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "223a80395950dd72210fee7084341110"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "2dc46828d30c0118a58dd1f6f49a9631"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "1e059dad46518446ddbe2a6b41a36158"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "742098dcfddaa4c61e00e7b3425e5199"
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
