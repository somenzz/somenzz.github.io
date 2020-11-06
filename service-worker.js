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
    "revision": "112dc3181ed5bc1d803558dc5d4435bd"
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
    "url": "assets/js/15.4095b50a.js",
    "revision": "c16c000539c358420c9b0fcd7e8584ea"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.49c60703.js",
    "revision": "bd94572863883152a82d5a14af449ad3"
  },
  {
    "url": "assets/js/18.fc962aae.js",
    "revision": "8b22012f379c15462a1402fc904a0f4b"
  },
  {
    "url": "assets/js/19.d25788c3.js",
    "revision": "0187d44e48a0902f429d12dae81c857c"
  },
  {
    "url": "assets/js/20.09e73d3a.js",
    "revision": "d9a231361cd387b239374a7a4c26fda5"
  },
  {
    "url": "assets/js/21.f30ccc09.js",
    "revision": "53cb04db799b6353c5c2a4c1b7f10f11"
  },
  {
    "url": "assets/js/22.43fc5516.js",
    "revision": "ebcb84dde687614c951656134ec48620"
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
    "url": "assets/js/28.aed3c041.js",
    "revision": "87e51c7aa26ff93a91cf0b6f13310016"
  },
  {
    "url": "assets/js/29.9284249d.js",
    "revision": "e946e53e4fde871e1c1c2a8cf0935fcc"
  },
  {
    "url": "assets/js/30.4613a8c9.js",
    "revision": "deabf049c3a9a57b61f6e597a9cf76e0"
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
    "url": "assets/js/33.d27cec2d.js",
    "revision": "7fc8e10e9fe7535020f045141ba8490e"
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
    "url": "assets/js/36.d29b8ded.js",
    "revision": "3458e9e583f6f640c9e05812b72cd902"
  },
  {
    "url": "assets/js/37.78db009c.js",
    "revision": "4c0be2e02a46b19971fdd3ded1c98c96"
  },
  {
    "url": "assets/js/38.6cdd582c.js",
    "revision": "694aec8dfa79248531f426f4754e386b"
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
    "url": "assets/js/40.58d016e6.js",
    "revision": "75fcde896fa1de392328b3784719b22a"
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
    "url": "assets/js/43.495cd9b0.js",
    "revision": "53ae379278edf9bcda6c787482072554"
  },
  {
    "url": "assets/js/44.95b89f60.js",
    "revision": "af0f8094c896935e1c370e0cdcef2ec6"
  },
  {
    "url": "assets/js/45.3195387e.js",
    "revision": "20aad91a67e1e2beca99b3f6b2d14f39"
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
    "url": "assets/js/49.4959ed5a.js",
    "revision": "b9d5617bd5fd9e472282bac53ee7c006"
  },
  {
    "url": "assets/js/5.a0cf09f1.js",
    "revision": "bb12c292b21978df449d337e690c33a5"
  },
  {
    "url": "assets/js/50.63ae56bd.js",
    "revision": "2bd85065ce22378c8caa51403f2aabc0"
  },
  {
    "url": "assets/js/51.b3dcbba2.js",
    "revision": "e48235f1b38347a1c1dd74ff1f619c2a"
  },
  {
    "url": "assets/js/52.19cfc3b8.js",
    "revision": "b2132a50fd20ed8f80922f0674e43abf"
  },
  {
    "url": "assets/js/53.90c4acbe.js",
    "revision": "0d76d8e4232859b4e00599cae5e06d98"
  },
  {
    "url": "assets/js/54.9b5b3b01.js",
    "revision": "a31d886bed84114375b141af4f90231c"
  },
  {
    "url": "assets/js/55.d8f5fc22.js",
    "revision": "1c6495653008f0771dcbef8a0bdb2cdc"
  },
  {
    "url": "assets/js/56.32d83a4a.js",
    "revision": "4050fdd3cd0f605b2880695e21ccac64"
  },
  {
    "url": "assets/js/57.46aa0d3e.js",
    "revision": "3cff84394d687cbc11136f1e1a46eeac"
  },
  {
    "url": "assets/js/58.4760fe7f.js",
    "revision": "4066ab6c1d30beca1c281f26f6bbefa8"
  },
  {
    "url": "assets/js/59.3ffec8d3.js",
    "revision": "cd7ec99a30a6bc3967753e63013f554f"
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
    "url": "assets/js/8.20bfb2ad.js",
    "revision": "07767a2eb9cd8d7dbcfc014012fcd050"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.b36bf9d5.js",
    "revision": "2271303810e8215d096a19a365359d19"
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
    "url": "bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "categories/index.html",
    "revision": "f6af3b3ba5cef093943c1f64ccfc1183"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "a2da6e61e61fbb4d6707df275805629f"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "4cebc10663c4c26a39b2e9daacc17234"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "7202550737c2301340f5992303dd7d11"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "d8cead14e93708b907540c3b5622e095"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bdc59dbb0ea52fc5490cdf30a096b09d"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "89d481d6e4778fe2e2601dae957cafe8"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "8cb49b55b51c044c6ab357597c78c98c"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d619290fdaea67721ad6002ae9fdf35a"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "bf1f8a252ebd227b2309ebefeb44be19"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "13e00df9ee5cef0c2e139dbbcb868599"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "fd836c92212d6971362bb5ba5ca32d03"
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
    "revision": "0115dd4d9cfc9cc3d0ffa3673753d7ac"
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
    "revision": "89b2658f8dac8dc962d5cdb4cf06fed4"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "0fcaac273f1549aed3fa396950075f22"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "5fd7e743cf65b16b27fd51867730cef8"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "1f6b95c31b59b0b229d116187a786608"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "6205f25787aa669eec928ad1084aad15"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "ff34aadd723ec7d0d3ebda6b445882ed"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "94cca72d4f29cf87a05a6026ec28052c"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "9ea7c96dbdad13b903964560829c3f06"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "e7b21dd5009d6dcb83fe1dcfb2f5c35d"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "f5f4aa6aa56c01387f23452da29670e6"
  },
  {
    "url": "tags/https/index.html",
    "revision": "a9fa1daa3d2fd1b9fbd0b73f70931888"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "d17cd3cd773bb7243c89dcb70ff56e56"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "d8ea72356db0a2ba699776e2522be2e2"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "e1690c3a10e743081c2a72501991fbb2"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "046a07295dfb3021dc85a8de156938ed"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "98886cb6ffefefb6e48c33e11fa73f26"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "f0d473136b8c5b26c5c0b572e427d980"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "1cfe2b7561d177c7ed0e73495036fa3a"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "0be1f4657ed7b7cb19e4bfc0a998c763"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "1d036792936788f681b8c92e536b5d4f"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "93fced6ecc5b96798747d242fccf5dde"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3eea2b4df604870002ac2a55aa4f5b52"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "1d3f6ce1f4c04959575c03afb53fb123"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "148bcff0feff4ff3e25b52c7091b2c22"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "33bcdc121b01b831d0cfc1c4cea4875d"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "33b074cfdba8ac5f511da2f0266c8a4e"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "bb40747be01a805d0fd9e1b46b3ac926"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "c6737c8ecae123c2fdb6da613683c6b5"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "83471759debec1b636019d9d12d59b2e"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "35af6688a4143d98436acb39db6db214"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "313eded6f4bb32ca61c204af5b73df1e"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "78a49974c5527b8f9bb8f4404ebd7bcd"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "14fca2d03a3ee6681264276360d9c13b"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "9ef6c5ad97ee4ce017f4478317e4731d"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "6877dc010f659758b9d837f9bdf95f23"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "adbc894b189370044a1a56d1ff1b6d8c"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "f717f410d6fa80b924be6c9c48b8aa6f"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "e1d496777dfb5f6f04f6a73b166fd54b"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "dc10cfb71f04cb4390b71e860ba6a294"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "a1a6a27d875fa3349660c01f35320d21"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "206c7fc4ff452bf98ae6c4dbe24f3985"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "21c5ea529ec53dd2e95a49357bb642a4"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "3dd74eac33f635f18e2f575bffa9594b"
  },
  {
    "url": "timeline/index.html",
    "revision": "8e468e7e58fdccc109d75ac192f80385"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "593a1f3a726836ab507d3744fcaee6d7"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "dec13b0d191b2629941a65695bfe6270"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "cf8024db1b3e05692c60f68fbf9f814e"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "52604ed34817f3ae02e939174566dee5"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "295fe82da0a93c0a5be0f6c6a35a631e"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "9028784f8da777f3c0c08bd0780181de"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "6a0d2fbbbbbe79e59b05da59446b95b9"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "3003bdcc882abc326c2f8d4e7ac2203f"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "e056af88bfad1e4961b33461883b6100"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "aab9e004634b045df7232cd391e4574c"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "501b3393de304b2641db13f33ef6258d"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "f086adf6e1139e62bfeafad2dac3e565"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "f5eb544088c680b5cc473235cf3e8f81"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "137e06c8a1c7a385298ce89e3a93ebb9"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "c4e4fbec0bf4da2c2a0def6b20d8402f"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "36816c138b98fe55e793a112e9d97c8f"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "06dcd309dd5667c1b3ae98994c089b52"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "dbae55906696d784abdb922f23b1e555"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "40927851901bcf363e6469b41bbe03dc"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "722f8f7b00fa418837edac3a16eefd04"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "c4bc7861b30c1c63b7092cbcb6c98e69"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "c969ac80cd0e042ecd2b79291ef4fc71"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "be6fbf3224094b163f801f5bb358eb7d"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "67d2e73379581f5cde6a23e6a91ed484"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "3fdae42547ae62bc2d9f423c10caa32c"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "632ac56fe00694cd5da573e0dc2a6d06"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "53b7344a912f40c24ca3471273902024"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "7039c7f15c29cc8beae23e52b2261cb7"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "4a9d90fe09a94478e367c606a16d6962"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "d2ffff52b562257fd6553fe8845202c0"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "91190bdb70a9361fde01b43494e995ae"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "0e1e00123f029530ee43102c21659db9"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "4305ee51f21cd7f36d1a1b77e47e8713"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "3c7d8f0267bbda39d05c4c7793eff4a8"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "1c288a1fa879bbeb94ca1235954ed4bb"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "3fbd1675e45610adecf07df41ad371d2"
  },
  {
    "url": "views/index.html",
    "revision": "dc420124c59e29e3ebc68fc01de56133"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "66858a1c9cceca7b8077c58844eb896d"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "2374465af1f8b7d5241e938b64f4604d"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "463c82e8de69adabf4e784673632eb6b"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "019efb7ff313eb53e3594aff546f654f"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "b4316634a5428bdf6801a1eac7f43bf3"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "9726fc7eb7a8e60b74ee937aa18d9634"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "1a7b64bd22ecbae3838ec23e21760cbc"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "be22e3908e4a00633721f95734a49ed3"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "9a9caa552136e2c04d32dc48cbe04ac1"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "d7650cf71697ef9e79b05d74cb1dfc26"
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
