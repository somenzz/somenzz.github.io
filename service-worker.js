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
    "revision": "d8ce7ff023f35fe2c6966ba94a6f7185"
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
    "url": "assets/js/14.617eb505.js",
    "revision": "3eb3fef181d39532a76898fcf492d291"
  },
  {
    "url": "assets/js/15.c697da7e.js",
    "revision": "fd36b1c0f51fe0b41383be623a327c89"
  },
  {
    "url": "assets/js/16.e5b3c113.js",
    "revision": "99bb2a0b61f78e79780af9eec6d50c81"
  },
  {
    "url": "assets/js/17.ee7ffd72.js",
    "revision": "243e8d8dccc2449dc8d54f6b00869901"
  },
  {
    "url": "assets/js/18.94a358b7.js",
    "revision": "b0d0a875c0a966c1ebc3cd39716e38d0"
  },
  {
    "url": "assets/js/19.75e771e1.js",
    "revision": "0b5078ceade2c6fdb249a66837f7a07b"
  },
  {
    "url": "assets/js/20.09e73d3a.js",
    "revision": "d9a231361cd387b239374a7a4c26fda5"
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
    "url": "assets/js/23.e6b24f9b.js",
    "revision": "67579fe8ff728d46d8482a30ef147f11"
  },
  {
    "url": "assets/js/24.4fd3366d.js",
    "revision": "b37891819d2dad924cfdcfd585a5366f"
  },
  {
    "url": "assets/js/25.f010ddb7.js",
    "revision": "a17b99e524be37d2e2b2ccee493370b6"
  },
  {
    "url": "assets/js/26.e51101f4.js",
    "revision": "1ec811517aaf14246f8c4757e9772c8b"
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
    "url": "assets/js/31.ea9ff2e3.js",
    "revision": "5670bbe0c5332cc26be71cf89a167737"
  },
  {
    "url": "assets/js/32.dde45eed.js",
    "revision": "141603c34debf0440a5acbc7286e4c71"
  },
  {
    "url": "assets/js/33.99983ad7.js",
    "revision": "98110a7f2bdd237a4ab5f6c5c8e251dd"
  },
  {
    "url": "assets/js/34.d47e9efa.js",
    "revision": "65daa2d9b111bedc636510e99fb2e035"
  },
  {
    "url": "assets/js/35.88ef311b.js",
    "revision": "c057e3b78a4e355ff21424542f835874"
  },
  {
    "url": "assets/js/36.11e56ecb.js",
    "revision": "c1fe2230207f17a2d82abac94bc86ccc"
  },
  {
    "url": "assets/js/37.010d807d.js",
    "revision": "79dcf5d7fae971a1c9cab1486faa0303"
  },
  {
    "url": "assets/js/38.b4166b15.js",
    "revision": "d773cd480397b95f8c76434d409f5592"
  },
  {
    "url": "assets/js/39.9e497d4d.js",
    "revision": "71c7ccb38990a46be567535f9e318a3e"
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
    "url": "assets/js/41.88873b04.js",
    "revision": "d397db3c746528253aba79297b401543"
  },
  {
    "url": "assets/js/42.21a908ed.js",
    "revision": "b3fe3d8638c00bd45a952ab2b62c76b6"
  },
  {
    "url": "assets/js/43.8a62f8bf.js",
    "revision": "670a13ac5234b5ad2cf192b5cd758a5d"
  },
  {
    "url": "assets/js/44.4cdb37d4.js",
    "revision": "9bd23957b24410032776c27533623281"
  },
  {
    "url": "assets/js/45.85442a38.js",
    "revision": "033473d5ba6c139ae87685988bf91ca9"
  },
  {
    "url": "assets/js/46.7ceb7a7f.js",
    "revision": "99a8bf875d88ac13a0de5d65cc65aac3"
  },
  {
    "url": "assets/js/47.e97d982a.js",
    "revision": "f791aa45178b6c515261bf24b17f1d7b"
  },
  {
    "url": "assets/js/48.c157cdc2.js",
    "revision": "02c49e584c86125f5247715260586221"
  },
  {
    "url": "assets/js/49.4959ed5a.js",
    "revision": "b9d5617bd5fd9e472282bac53ee7c006"
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
    "url": "assets/js/51.6de8e75a.js",
    "revision": "cc1e67d16e65ff801306feab8c4b7b64"
  },
  {
    "url": "assets/js/52.19cfc3b8.js",
    "revision": "b2132a50fd20ed8f80922f0674e43abf"
  },
  {
    "url": "assets/js/53.dea6a7cf.js",
    "revision": "5eb5e35e7e4f33ea76396a6bb6c41586"
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
    "url": "assets/js/56.5bcc19d9.js",
    "revision": "77ad00df2d64f5830d5fb97e42e51f8e"
  },
  {
    "url": "assets/js/57.914836d6.js",
    "revision": "706542231aec5112f01f10bd6403ed34"
  },
  {
    "url": "assets/js/58.9ed0c94e.js",
    "revision": "c58c5ba36bef5929567496eb77a4a734"
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
    "url": "assets/js/app.3d2ca99e.js",
    "revision": "af69ee8a48cd4a4569b3e12c921029ac"
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
    "revision": "10ccee30a4b0c978ad73e03abb2150db"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "b6665fa67869461c1ff3aaf4bdd0dd66"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "d60f41acc9a485575219295bd85958d8"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "25ff4c68c9c410da036ec0d4086ffe16"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "aebc2dadade25be045f37175bc99cc30"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1b57793c4a8a6d190c539f80d4545a8b"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "abeba0a1ad0a1a494e14f305b1446fb9"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "c87cf597412a41d8e156dd0b6cfbbfcf"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "6c0dffd017537d523136e199a9eea6cc"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "bade2a26207561a68f4701d9467222d0"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "cc29ee7c23f59a5e5fe57f1ace63e183"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "7897701a65a4647ac0b3049ace0cc2c0"
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
    "revision": "8dae66d374095d0b43a744af4c236319"
  },
  {
    "url": "profile.jpg",
    "revision": "8abb4d329520db38750019fb27029184"
  },
  {
    "url": "profile.png",
    "revision": "2dbe574fb3b1807fa7e4df07d243d432"
  },
  {
    "url": "tag/index.html",
    "revision": "8b0335fe240c8b8318df005f60d26b5d"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "d5339ad8bb201febef102018952b369c"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "02f1c5bea6b35b9e01ac60b5a051929b"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "f1486f95bc5f944823f83c9a16430705"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "1c05ca7f16ca0f24e262b469406ab157"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "2bb538f4da6e077e24215af854255cc3"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "cbc7c05b9117691218d9344204c195b3"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "870729f10c8b408c229fe9e9ebf89c4e"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "e4d5cc460c80e6eb3739a353ef70cda7"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "8bea9598c1d60731ea69ab729b2817a2"
  },
  {
    "url": "tags/https/index.html",
    "revision": "8cb44c5e313baff1738f8fdfac1dd4dd"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "f1a0dd2fa6b97798aca1b5e888488ad9"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "0db688b86db6d2ac9b9e073ca7e13dc6"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "9df155a2bf31548f26067beb3287ff20"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "79f114b73ce1d2e0d15fddc54e2b6304"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "60bfb271e21b076f97209164079f6a6f"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "36f356779f43eedd1f42cd51fa8386c4"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "1a6616aff9e4e57e9c2d2d3d6e0550c2"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "9a763dbafe007ddb5182bac05262f8b4"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "e970600b7be2160053c585a03c0da718"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "2ba5bd70fc95bca121eaf8eb84ffe11c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3ac2cd0540f5a60e6637b0ca3dd4409a"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "ee499a7bd28d156144760604104f527a"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "6970959e6b6a7a12ce2847427a9e4aed"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "088ecc33df58626551168ca1fa66d4e0"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "b6c00c8eac58a0b6e3e63cbcc438c782"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "64f6f0c931119026023a8760380c4683"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "0fa3abb5c49b7bd002aead97fc3afa58"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "f0fd03d84d4cf698c1524166f5193ebd"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "841be31a49a2e06a72026771329738cf"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "dc317f8162255f75612594727748d120"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "674d779fa7b1d9ed7798a37d344c4521"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "92435bcf826abb9986ece595762dca0a"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "e8bddb7523571db8326664198e86fc44"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "f736cee063672010cd02496c4ecc45ce"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "193f94cf7c6b2e53677656dc7c1be65c"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "3e5a329f3195dd708ecde33c7326bbc5"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "37d5daa8086b4a375c657cd0e17203e4"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "f20f7534452742a1a57d6688a74b166b"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "b971d0ddac639fc1f6365e16928da072"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "5a6e82bc9505b3114a6967157893d582"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "61ff21fb63f287d4ce3713fb9aa479d9"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "4d2e0e99483964a7322a518549df7a21"
  },
  {
    "url": "timeline/index.html",
    "revision": "75470ec88ec3d8de443b525c5b798937"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "dbc65ef65150871a3dbc3ef552655135"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "3044d3edfa4cb76d67ca29b3829a9d1b"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "3d90b445b45f032c1f786e573d2fecbf"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "fd1fc58b92b8d27b72c16db2b41385f3"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "d81f868810d2635c775952ebae77cb7c"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "102b94d595faa1c006f1668b37a0df1d"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "eb93d9703046f845eeb15af459c2056a"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "68edf4140b4b6f5fd20393073bd9d8f7"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "2465eef8ca85081f3199f7612ef5e547"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "eace1319e22aad09b80f81f5e958955f"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "54a9664a0734328525bd9b9f50f9a6f5"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "c363bf477e35b28f4444d7daa5725c78"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "c8f5014575f422d8baefd20b4120e98c"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "87772e8e849c9641adcd1d2f1d8a88dc"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "7e4f97eb58ce70f0f15ad10ff51a3357"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "85c467b29ae969517e90b96d083e4490"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "1f56d5aa9df603520c6696717a52d9df"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "24901bb101835d267512780ff7742d97"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "848ad1442213d16daf81a50db0cdd4e3"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "3ddf826066be394fe6e3483d6e60294f"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "ea3356a9a3c530022c600aa2c5a52f9e"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "4bcc594309999db6bb0ce0429d8f5634"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "33c763ab3a8088796166a46a9b0988fa"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "2c63dad8a8985d471073dd499d72b12f"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "5db4b3022f5271081a421e4c9ca2cb9c"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "336ab53047abb78279adc2dbe3b936af"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "6944dfdbae249e4a21250180375debee"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "e4e5df283a99b04194a8ffd9b66792ea"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "9f016d84a24f514e13d3af78be2d4c93"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "a838b60966813539962d36ba1ca3891d"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "45baf9b7bca862b0441efc10fe5ef727"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "ca93b59ac47d7b92cd390de57ff0b376"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "fc773e257603b6be74b79fd1c4a79076"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "b7f2b2647df0f26c8fa794474018b52e"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "61bdba6bae3ee2a6e264fa4888c3da21"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "cd2eebfc3692e29bb2d04fca90e3d08d"
  },
  {
    "url": "views/index.html",
    "revision": "8a85189f6df6cd139399572c586a4aaf"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "e9d145b702e0b7ae909eb9374299996c"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "0ece0a76d471570fd62a9abdf1be1bb9"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "ef3ec0ccf4d391fa4188826df4c10ea8"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "97d733a807e5e484b81e06e816773303"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "b78527bf09f90551d06c2f7cd1363c56"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "2ed40127358ead2a32f6fa4cefafe36d"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "575faf4e454d1b6364a6e4ddc303e9ad"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "c2ccf3defa97e8af45f1ead84d1cd272"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "901754d1e31ab858b6f15d637b36e8d6"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "9ef6dd9c3a8d76b695565b9ec15bcff3"
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
