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
    "revision": "78c9ab989dd7edb226c1d08c31765a91"
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
    "url": "assets/js/13.564c2abc.js",
    "revision": "85019a3bd5422307e1561f06a44c0905"
  },
  {
    "url": "assets/js/14.617eb505.js",
    "revision": "3eb3fef181d39532a76898fcf492d291"
  },
  {
    "url": "assets/js/15.b4c9abfa.js",
    "revision": "6b41a04312aeb6f847ffec67ba1fb64a"
  },
  {
    "url": "assets/js/16.46e00861.js",
    "revision": "87aac76b2211acc12af7f6ee42227ef2"
  },
  {
    "url": "assets/js/17.e874d605.js",
    "revision": "ec4c98f633cf5ce2043efe4e09133073"
  },
  {
    "url": "assets/js/18.9d2eefd6.js",
    "revision": "fdb08f26baaa2d240d272a9a25935513"
  },
  {
    "url": "assets/js/19.75e771e1.js",
    "revision": "0b5078ceade2c6fdb249a66837f7a07b"
  },
  {
    "url": "assets/js/20.53150913.js",
    "revision": "507cce635bc397846d471fecc78c5d57"
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
    "url": "assets/js/23.2b7c3f51.js",
    "revision": "3b3269fa76e53d3b2b103c4d350e692b"
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
    "url": "assets/js/26.fc521f8c.js",
    "revision": "7804686a5d747ba9e3ba4e400ad190de"
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
    "url": "assets/js/30.c8bd8e38.js",
    "revision": "55d4553da15c72d11d0d9eaa29b890d7"
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
    "url": "assets/js/33.b65ea4ac.js",
    "revision": "94e0eb3f4fc85eedde362122d17a760b"
  },
  {
    "url": "assets/js/34.d47e9efa.js",
    "revision": "65daa2d9b111bedc636510e99fb2e035"
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
    "url": "assets/js/37.e123656d.js",
    "revision": "cfd009c78b6b5434f40121be9a22572c"
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
    "url": "assets/js/41.3deffa6b.js",
    "revision": "cb498064c505dd566a72308d810916d9"
  },
  {
    "url": "assets/js/42.bfdbde28.js",
    "revision": "fb5a5de4156723e06beb688da13b1d5f"
  },
  {
    "url": "assets/js/43.8a62f8bf.js",
    "revision": "670a13ac5234b5ad2cf192b5cd758a5d"
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
    "url": "assets/js/46.aa44630b.js",
    "revision": "f14bbb9285318caacf836980994c13ba"
  },
  {
    "url": "assets/js/47.e37760dd.js",
    "revision": "54c881c031db4342abf44f1d27f33939"
  },
  {
    "url": "assets/js/48.80865216.js",
    "revision": "04a92455fbf9364c46ef2cb05d973027"
  },
  {
    "url": "assets/js/49.d7bd1304.js",
    "revision": "28d262d96a9eb78e5a653365583b8cf7"
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
    "url": "assets/js/54.9b5b3b01.js",
    "revision": "a31d886bed84114375b141af4f90231c"
  },
  {
    "url": "assets/js/55.68caeabc.js",
    "revision": "761b699c6e8f737de612b0be8b7fbbf5"
  },
  {
    "url": "assets/js/56.d9a7bbad.js",
    "revision": "eb6dcbdcb84dc909d731600c8073171f"
  },
  {
    "url": "assets/js/57.46aa0d3e.js",
    "revision": "3cff84394d687cbc11136f1e1a46eeac"
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
    "url": "assets/js/app.45067e68.js",
    "revision": "6d8d4df8b65d42e7f8eddb214b45da49"
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
    "revision": "cc455f72fd40a1eff05659074b601329"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "d4e0945b637d197a53b252cadd740fc0"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "3d4bdb70d9a8b95e96bee9aa49f08a14"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "61fd581db0a0f05d4773d658accfa203"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "e63f7e29cc6d5aa2a2b4a9bc5a4cefbb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "487f410a51af2c410e83964a5335a2df"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "ee75cb5d4a7b3ad4fc13c6f1a0d9a393"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "5acfce6225bda87680369e525553c128"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "315951716e9fb789c60848d77d421faf"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "0d5736f2b7b0b417ac0efc4c4b89ebec"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "5c369ed225bb02db2dfc47874baf20fa"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "30b8e4372243b1d283e7b02a24d49955"
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
    "revision": "5f28c0b9469223ea1263cf9a41b56a6b"
  },
  {
    "url": "tag/index.html",
    "revision": "f4a156b486c7f4e8078100b753c8b5db"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "31ef0d234c40337af751ea9818c52f8b"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "5b08ffede056ab9fee4f55b18dc236b7"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "181d4149dfd12d7bc38924712b474693"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "be461ec7e454cd122bb7d5c8eb21b1d9"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "b0cc69420e8892fe436add99a3da5502"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "c3c6590c554ef58e45d0fea322c005b7"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "6edec5f427c5669e4c5e1a33b26c3300"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "d05815d9b9743a578a1ded91144bc4b8"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "e9d0503025a55b24252ea03bb15cb4e0"
  },
  {
    "url": "tags/https/index.html",
    "revision": "11bf4876f73a7530bda27cd2654404cc"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "dee905835083c863761d7bb2ce4b40b1"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "b1e23c29a50a6d554434491738deccaf"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "a1ad6024c24b6e5a72ff9de140d90ee0"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "fc5141e8498a3387452fa2ba3efee905"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "b59a641626e04ac19b205e9efc228411"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "76503c1fdd2f4267b617e33e9b0a1101"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "0d5ef13f8be217cb1a606fee665bd865"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "1af0058c02c0888c6b73a41b2a181241"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "975f9c40b433b03993ab79fb4a17c572"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "1469d5bc626b499f6315658f4ab8eef3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ff2ba99ae1c2a498a4b4fb9170b68cbb"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "f9b822aa2fc1eb56c855893165ee1ac2"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "c840c53ebbd64b95c7f74c8c3656e319"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "3468274c4e45adfdd940b0317ebb99a2"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "68af6745e662bdb8f7f9c3f12f4678bf"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "4cf16cda9e6db537e6d940b0d4102410"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "6234c422b24dfe21d7a2e37060c13110"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "c46d9a321435caf0e90f1c9bd2090f45"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "db22dae2f8f55019f4ea0f94e5034145"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "2dba28ac70743e62661ed74c772fb98f"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "499ad9f5e0f66e9a6029c75a57ce7345"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "8759792a0c307614639dcc977b4a135b"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "69cd28365bb677a3ca37d3419164fe1a"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "281e07d8674b1685d13309edf2973247"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "5ee16e58f40d7b2e1d0f54d0be95efaf"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "e3a69883a191cca268681362fd6e455b"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "eb45be2abddf563c2274305aa8321cc4"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "790e5b83dc430784d0f9184835cbefea"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "0f5f6a1a1fbf115677e3203fe861cec1"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "ee4837439eb8aa130483dc0ba0123dda"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "f8c7b4dd675cd403f88793d650079668"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "97b74e419ea43280fc33ab8d56dd1da5"
  },
  {
    "url": "timeline/index.html",
    "revision": "1da29c5dfc5fa61224afb4bd552d6fa2"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "080afe352f4b67e42e3d6038d08067c0"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "86ab6db1dac5662a25144546e5faf75c"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "c04691b3540561cbad2bb39335e2b1f3"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "7a4e3070485848f337ac1b0b9c835d0b"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "5f3612ee72d7a55f80bdd341bd3b5f83"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "309d26045562491974b4e285a1f97363"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "862c2cdd2ceb70856c170695d9798433"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "46357f39a9fd6328823a7a683d66eb99"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "c9806d9bddbf149f440d4e38dc2328ef"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "c874a86034a550826a9483d1c1a724b1"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "26d7e1e57ebe83659a3c55ede7f20913"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "39b7df3da9222a32250499fc8dec49fc"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "f73d591741c29fdabf05ccdfb8f46506"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "5e967c812c23d5b4a6c79f06ace2030a"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "5b4538e3401831571ee3eb15fdfef0d2"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "67868ee6104e2f027cebe1b09efd7665"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "de342ead3e085e4e112d36ff0b7b2811"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "d633814233edc36ce89e3ee7b4350e15"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "ce92ceebfb5c758da258449e66e0dd39"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "a7fb04ecd2660e273b5bc66628f9f185"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "fbb021b6a499a1f1791d32064ca79ee6"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "2aeaff78a6a290cced9e28a5c32d80e6"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "56f70fdeb43ae5b3a7db95c8027c0797"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "f69850ab50cd2e470d45e504a0c49dbe"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "3e487cfaa75ad1384e26a96d175dd703"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "993412531315e6f4090fb3feac59c9c7"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "4e0fc0cb46432189bce130974396ca26"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "e12e189d6413422f334979ced4051285"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "211095e97445bff2e57da94ae76fdb16"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "c65c7ef9dd284910ff70a2941e29d8c5"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "5852be2909ad7311efa57d99eee2d4fd"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "efa52621460cc9387cc70272a72b3a5f"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "6e8809c3e5e18f4654b4b38d4e67e998"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "f5a5eae5068362350b288ea4231330ce"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "c425ea2770f4a0842f5b666e51ef74d7"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "d66d81e9b4303b854b0e2b363c8c6c31"
  },
  {
    "url": "views/index.html",
    "revision": "dfcce36f4c1cd6da7f888ece6eefb620"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "da8b2556b18eedcd4f61c9c4c5cdb4ef"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "75fcdec7650eddca964db8ecad772b54"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "7d8affdb3b43b16fc7fff7417667f345"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "276221714a2d4f95876fca5303907513"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "7c32df196401ed67dd578e3eb6e1e231"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "2e0e31f403de00008ef6a744a40f6993"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "4b5a05d5622326225556a4f8b0b631bf"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "3316394dad41c5865981028c8957603e"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "5d6f60dfe020c320abd301a2efcc3335"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "da9b290568f02926d9b956cbe1df9711"
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
