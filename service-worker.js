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
    "revision": "a88fa793297e89389485eafeeecc1794"
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
    "url": "assets/js/16.e5b3c113.js",
    "revision": "99bb2a0b61f78e79780af9eec6d50c81"
  },
  {
    "url": "assets/js/17.c347d906.js",
    "revision": "2d656795f10b3ca4cde4fc2494c09f66"
  },
  {
    "url": "assets/js/18.db0879ef.js",
    "revision": "b1d3581a537137cd62d9497e69e4fc2d"
  },
  {
    "url": "assets/js/19.75e771e1.js",
    "revision": "0b5078ceade2c6fdb249a66837f7a07b"
  },
  {
    "url": "assets/js/20.cad9c274.js",
    "revision": "0f50df6c73dac45f9bd21e600532cc4d"
  },
  {
    "url": "assets/js/21.431ecbcb.js",
    "revision": "88a75169f976014b4491d65f8f88f447"
  },
  {
    "url": "assets/js/22.43fc5516.js",
    "revision": "ebcb84dde687614c951656134ec48620"
  },
  {
    "url": "assets/js/23.d54bbf9b.js",
    "revision": "636ad18f832167ab54267ac7582fdfdc"
  },
  {
    "url": "assets/js/24.264962f4.js",
    "revision": "5957f9de5089208b952b8391d300e485"
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
    "url": "assets/js/31.c7cf1c81.js",
    "revision": "362a65aa57c1aa2e4631570935d78cb8"
  },
  {
    "url": "assets/js/32.a3612ef3.js",
    "revision": "c4d3e29ebdb8b4f0481c89db209db435"
  },
  {
    "url": "assets/js/33.ae5574d9.js",
    "revision": "3b8376a438e3e877b2f9cc3e8f965f2f"
  },
  {
    "url": "assets/js/34.8bcf6d20.js",
    "revision": "ac7e6aec2cdd3dfe1319b75746e02ccb"
  },
  {
    "url": "assets/js/35.80315177.js",
    "revision": "4499b6707f2f2c3b34752081240a740a"
  },
  {
    "url": "assets/js/36.e4a5a9da.js",
    "revision": "03f769c1c265ad6c63edb83a64df03d7"
  },
  {
    "url": "assets/js/37.3a018f10.js",
    "revision": "067374f53fc9191ca2ac9625ad2b4e48"
  },
  {
    "url": "assets/js/38.4a3cd4a6.js",
    "revision": "c05e6035b06e66ac037157415d80b40b"
  },
  {
    "url": "assets/js/39.f0870699.js",
    "revision": "43a2c7c22b06c8aa93d22891aac2f99f"
  },
  {
    "url": "assets/js/4.df261250.js",
    "revision": "fba448b20bf9c5d6cdb52fa2a167d5b5"
  },
  {
    "url": "assets/js/40.d3ff0fb8.js",
    "revision": "453e132f0b50190249ca3a1b961106af"
  },
  {
    "url": "assets/js/41.a6a76296.js",
    "revision": "e39715cbaededae3287a31a59972448a"
  },
  {
    "url": "assets/js/42.bfdbde28.js",
    "revision": "fb5a5de4156723e06beb688da13b1d5f"
  },
  {
    "url": "assets/js/43.07b9e394.js",
    "revision": "4ee9ebdcfacee58d347d9fa14d3fda73"
  },
  {
    "url": "assets/js/44.9d8512ea.js",
    "revision": "dab86ec00ae2e6fbea9fbb8df79bdedd"
  },
  {
    "url": "assets/js/45.85442a38.js",
    "revision": "033473d5ba6c139ae87685988bf91ca9"
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
    "url": "assets/js/48.06e44711.js",
    "revision": "5d6c3840793f80280b26da912a2c9ef2"
  },
  {
    "url": "assets/js/49.c622299f.js",
    "revision": "199eb767e451c0830e8511a2683f8699"
  },
  {
    "url": "assets/js/5.a0cf09f1.js",
    "revision": "bb12c292b21978df449d337e690c33a5"
  },
  {
    "url": "assets/js/50.5cdea07a.js",
    "revision": "bbc7c2c9674f836a6a35eaa04a918762"
  },
  {
    "url": "assets/js/51.6de8e75a.js",
    "revision": "cc1e67d16e65ff801306feab8c4b7b64"
  },
  {
    "url": "assets/js/52.407e7c71.js",
    "revision": "d8c441543c987bd40ee966e24d2f1f5c"
  },
  {
    "url": "assets/js/53.90c4acbe.js",
    "revision": "0d76d8e4232859b4e00599cae5e06d98"
  },
  {
    "url": "assets/js/54.d39a1d5d.js",
    "revision": "e4e5c2cfd733f8b77204e1ea67f35387"
  },
  {
    "url": "assets/js/55.d164d09f.js",
    "revision": "263db17d2b3c82544c56c9156c1c67c3"
  },
  {
    "url": "assets/js/56.dec94ee0.js",
    "revision": "90bb28bb3058ff33de9590d73cd8f75a"
  },
  {
    "url": "assets/js/57.b05a6599.js",
    "revision": "ce9c6b58c56c234c1fd4d8d35e6f6726"
  },
  {
    "url": "assets/js/58.6a272a8a.js",
    "revision": "1507ed3c2f224e0a2a06b245ccd3d400"
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
    "url": "assets/js/app.a21ff166.js",
    "revision": "2e6c14878ad75c79ba7bb13005a7dd57"
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
    "revision": "ec82dcd6cf2ca0212717d16fb2c34520"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "b98136aa4cba433ba4bf3a14739885e7"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "ce169c4f735be6daf19e45c1cad6ec36"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "1a12d1e02e0a120cef7c2bcaeb3778fe"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "4ccf650b4beae6fb5984b8e12e7d16c7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4ef6a4b3d5d9e1d7a165060367701ac7"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "441c7c550b4d03758854daf3d10d4e00"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "ae59149ec435556e141467cb5595ea5e"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "c5c863870b53192942145f1d2ec80176"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "415322f52b6e60f1afb6dbe059d10adc"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "ddc891f778da7b848a8b64fe97ac5931"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "6b003594d45c7cb0da0c3686875db1d6"
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
    "revision": "be958344b9996acace8c7d16633e35ae"
  },
  {
    "url": "tag/index.html",
    "revision": "5b241437efb82c2aebd11e0c3cd87a87"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "8977ad4867a4b99a7a40858f7c9bd044"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "2d5badb89059c686b565c123f0775799"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "9645673ce19949ef9ca4ccdf1f988cba"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "27ef076a58bedd2a247b19a71b426879"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "400fd92b6ef8f2aea02c306fdaa064ec"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "4efe5caa778fd3aca7c42ac44886b2ae"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "0321336e14b1ad4476d8d4a0a3b8b137"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "e4dc06c0142b3c029b30b051590f3790"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "5e10bbb238ee90347fb8be5f8d9494a5"
  },
  {
    "url": "tags/https/index.html",
    "revision": "062abf5d602ac9ca67621d26e3f60625"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "7b1573a73a02e641e9ebcac595f0202b"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "ea45ee8960929f0227f2fce2f4a06e90"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "e5e97f22996d59ba3a641e8b73c1c2e6"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "7c284ac979b5edfb7232a704c3148e37"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "31130ee5538906127199142b6736f599"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "5e26412a4aa98a8b1533ecf0f2ffdcd2"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "1a27e68ab7be4d6745fc2741fd317889"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "9b57e135dc7f39af7ebe62312b2acb98"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "df6d2438ed2599f1de1b8c7a84014337"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "e0eb5dbc23464466b24f84c6d36a8e94"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3fc73badecb7b72d45792d524f4b51f8"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "d659bce99a2dfc67e6d786d6466a5fc0"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "e2db5378869e5708d77f3bbd7dbbca68"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "06b4f77f03a0e251400e94e68e82a601"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "b82c7974ef416b0535e3712205f75de6"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "543654646fbc22321e0cc0be24d1f2cb"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "0866be3604de7d6c1271f5dbeb4efb06"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "b113329b96f4538ed783b38ca7322203"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "357434d9be9022fc4bc37c29bb509d34"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "fcbe47cba20cc0791bc70458307ca114"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "49cb3468ffd6d0c9a83b462d92bcb512"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "e166cb10753731b30d63355343f280da"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "4025ab7501c169128d87355b53e3a1ad"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "6e37d7c975c922b7b58606f7fe499e40"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "9bea39a4c62834ebcd80fc1a777b711c"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "fc2aacc9d0f664522aa3fd81949de231"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "c4177d9c7fd5951ef8501f2682a3d6ec"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "5edb49ca0371d8b0fad5784d4cc37d4d"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "ac726f8dd5839c2a142fa34e43f91ab0"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "ffb3ef3918ba2549c21208ffa7f2255c"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "ea425cd398b5752f1d7d0474da3df60c"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "5e7e84dfb8408e20db0ab3a6215177e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "657323465e7e2da3d444d52777f4ae89"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "598aa9cfd4b0ab0327c9c1947b6598d1"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "cbadac1389755ece14eb11ab8f6d0ff4"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "24432b784433bfea6b3fe30e95867d64"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "aa0215351be34e21dfcc8bb9d78a0c7d"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "71ec3bc5464a1cbc805901740fbf4396"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "7c706cf62d1e74f48c460d19689b9f68"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "a2f6813a461dd4f8d3aed34ee86d7872"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "d69e4c691c0b3d2de7ef6cb06ac83ce9"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "7b1036a89c43b1cd1b6d5e76993d66b3"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "adfbcab2656ad2f9d5f32994e7c96171"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "1f9a4c71fa707ac1f8582b1da762af5a"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "e17c210be75f6cd647719dd647749392"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "91c79d20b81b3c00579ce39c6c78bc17"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "6703557465ee2b545d20396403445599"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "d98dce3579e103908114589dddef41f1"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "310fa08ddca0f799d1f8b38ee3a3722a"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "72255c36c5290898f156180935511857"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "a100bbc026c91d5e700fde5ffc01b57d"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "80dc7039233cc34dde85103019ad276a"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "0fa81201a01de6dcc3c2627d1ea0ab6e"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "b77847d26ac459f2c097ce51d619f276"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "c28b36cc9d9350d371db5f7a74ce7c95"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "cf4923eb26a3fd329e514456c6b27721"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "8a24640792a8e54b0cf039ed02af5fca"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "ddfa93ef9768a5276d9dcd6aa5014f77"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "6e75bd7d42a3058ee2f25014bc4c288a"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "cff3f5845d3d33ec99b26e7a106cb510"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "50eb58812de6abebcec623e7f23f2014"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "3dc4fbbe0c2d257d42eb2784ed51fcf0"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "abe0f1f08d29ac5f0b2386122591aeb6"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "cf8b8f49ccb981f1150bdd876d3287dc"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "b16747b7226ddb25efde4dbb066d3a12"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "e37f710c648f0e134976258722c9fa83"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "c0af1d27cab510354def73956f7685f3"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "b0763f93871548e7b81d829743fd9316"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "1cb50c02ede394fe90ab0a237241555b"
  },
  {
    "url": "views/index.html",
    "revision": "38a49198f6da490a27bc6d22d83b4984"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "d326a888a9219600bac5e56e5bb2b296"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "eaec6a896bfa817108ff6abb815afac6"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "caa7cf0dc771be51875314a50a9ae17b"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "abe3d54ff0d904c6f5fe9d342c036086"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "30f19a793a9e863ef504c5e65d8973be"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "bbe710b8ada74cb574f7156529a8e1ff"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "c97d2d42a0c26c9d35458875dbce1fb8"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "be4ac4cb789a5fa6b7866b6759f5a236"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "bb68e224c4e995da2b897e59163c9ebf"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "c906d5f6940b309f6864467dd1738710"
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
