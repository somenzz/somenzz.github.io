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
    "revision": "63b6c9e966b2612d5f7a373f66d3f9c7"
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
    "url": "assets/js/12.455399ae.js",
    "revision": "cbda1bdb424d9d6a367b873becfa21bb"
  },
  {
    "url": "assets/js/13.bf5a4ecc.js",
    "revision": "c26132126ede3884f627995c30a483b3"
  },
  {
    "url": "assets/js/14.8fde7425.js",
    "revision": "67bc9b291662d78e26b69688d7d672b6"
  },
  {
    "url": "assets/js/15.afc8795e.js",
    "revision": "0a3a7cd724a041f5863592a9625998d8"
  },
  {
    "url": "assets/js/16.8803b719.js",
    "revision": "853b7dde015916c6d657e38e754efe08"
  },
  {
    "url": "assets/js/17.4825c92b.js",
    "revision": "2cf1fde49e5d76d9126e13afad4a2e73"
  },
  {
    "url": "assets/js/18.ca4c20fd.js",
    "revision": "f46c058955b94536bc06a8c5203b50ef"
  },
  {
    "url": "assets/js/19.88ecd945.js",
    "revision": "cfe50b8c818f51c6f24f4e24caae357e"
  },
  {
    "url": "assets/js/20.09e73d3a.js",
    "revision": "d9a231361cd387b239374a7a4c26fda5"
  },
  {
    "url": "assets/js/21.17bbff66.js",
    "revision": "8282f5b4dc28033736de08863f852910"
  },
  {
    "url": "assets/js/22.63eae216.js",
    "revision": "95337d5139ad1eb92860881ad294a421"
  },
  {
    "url": "assets/js/23.e6b24f9b.js",
    "revision": "67579fe8ff728d46d8482a30ef147f11"
  },
  {
    "url": "assets/js/24.3fadc5b1.js",
    "revision": "88e3d52362d96e3e8dcb635819f27ed0"
  },
  {
    "url": "assets/js/25.4f0ad491.js",
    "revision": "7691d1a1e795437a0762f3e0e4d5e886"
  },
  {
    "url": "assets/js/26.1a74f9c9.js",
    "revision": "abaa5ebd3d29603676aadf21ca321aba"
  },
  {
    "url": "assets/js/27.36c18472.js",
    "revision": "4ad1695e1ab5a6d2e471f8bb118cd55d"
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
    "url": "assets/js/33.d2310d99.js",
    "revision": "de9a099bb118192e0dd1b0daf15374b5"
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
    "url": "assets/js/36.7d526c73.js",
    "revision": "fbea6283eccb49fa3e495d2eb2835c4c"
  },
  {
    "url": "assets/js/37.3a018f10.js",
    "revision": "067374f53fc9191ca2ac9625ad2b4e48"
  },
  {
    "url": "assets/js/38.6cdd582c.js",
    "revision": "694aec8dfa79248531f426f4754e386b"
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
    "url": "assets/js/40.a3ca63a8.js",
    "revision": "042c9147094f19038da91473880db83d"
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
    "url": "assets/js/43.2bf71b34.js",
    "revision": "7d3fcea9a99e7f83424c08e19fcf8890"
  },
  {
    "url": "assets/js/44.95b89f60.js",
    "revision": "af0f8094c896935e1c370e0cdcef2ec6"
  },
  {
    "url": "assets/js/45.e53604b6.js",
    "revision": "4b46d37357faf187f09bf1e519ef3e51"
  },
  {
    "url": "assets/js/46.d2910567.js",
    "revision": "16a278e5b0c1d70819cfcf3033820e23"
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
    "url": "assets/js/53.90c4acbe.js",
    "revision": "0d76d8e4232859b4e00599cae5e06d98"
  },
  {
    "url": "assets/js/54.a06e2710.js",
    "revision": "5b31fb82bb06a17219c32f8a766d1aa2"
  },
  {
    "url": "assets/js/55.3e794162.js",
    "revision": "7e95df453864516573539908c9fb7713"
  },
  {
    "url": "assets/js/56.32d83a4a.js",
    "revision": "4050fdd3cd0f605b2880695e21ccac64"
  },
  {
    "url": "assets/js/57.b0c127a4.js",
    "revision": "e67a6bd3257fa741fd76e653f1882d37"
  },
  {
    "url": "assets/js/58.6a272a8a.js",
    "revision": "1507ed3c2f224e0a2a06b245ccd3d400"
  },
  {
    "url": "assets/js/59.94eb7586.js",
    "revision": "3f806f273cfceb3dcb88d35da12f7e71"
  },
  {
    "url": "assets/js/6.c3845513.js",
    "revision": "bb02c80adcf1b4c04be150d19890bf26"
  },
  {
    "url": "assets/js/60.ad8d40ab.js",
    "revision": "2351b95aa25ecad0939e081e0a6ba1e1"
  },
  {
    "url": "assets/js/61.82fef87e.js",
    "revision": "1b149b8d3a00e730345b43ab1276e1c6"
  },
  {
    "url": "assets/js/62.d4048893.js",
    "revision": "02bb6c5f4e48b6fbbc6e3ebd60bcc4f8"
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
    "url": "assets/js/app.19bd381d.js",
    "revision": "d35be392271ce59b0d688d75663ea598"
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
    "revision": "4306bc547c25b3ca99d3e1b6fa380e35"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "d19b78112f487bf398653267a6bb0993"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "e1e661bfa6d6736828269efcfa3ce9af"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "3689d63c3265db612ea9887c4ea03456"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "7d68379eea5f9af783e25865574e2869"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a88d6feff29164f15cb440306233b2f2"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "52e40b67d3dc5164d7604336306f94e3"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "40bcc96fe882c32b7f7ccf2f3469483e"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "a13e3236817bd35c84e678d4fbcc512a"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "0c8e46a645cf788a83c43d758ece11ce"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "cd3801d8d97729e123c3d5faa2c1bc7f"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "250e4275d731e95b8718459f0fb6970e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "c03befac3b61fd24596816e6214c6703"
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
    "revision": "09ac931268fa3a0c1fa4782aacdd1f29"
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
    "revision": "53f292f9b9ae2fc10472ca60ba1c65bc"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "c3dfb79d9a7dd4a76e217a172b93ba8e"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "72586e2e0358039627337b3080dee4dc"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "19bd59e3af2ff8321112a6b5ff83c9ca"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "0aba8194b45b72f1b59bedd3684bde45"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "ff183e9dad2cacdbcb9d76d128ce6251"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "227273d827a3ee351e36f5448f6e79c2"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "a8c4de097cad9d710827ec237a67a127"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "977364fe1d554e16cb320c8217b35d04"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "62eecf13fac52d5623bff59a29214bdb"
  },
  {
    "url": "tags/https/index.html",
    "revision": "68b05e4c3358f6cea14ce38c34fedebb"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "5c1e82dd1d73a4128325ec1458839217"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "ed5f358f428fea56c88e8484e90071c4"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "72878875687555b38d9880d62557a93d"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "fdf31c2cd9edd063f689c7e6220de9a4"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "748b719b66c3075711e4d926ef14da5b"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "1c6cae090f6e3d3b85100e80072416cd"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "3f78a07cca91dba10d7c3259482a7521"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "f7af91418ea51857434bc0f5891a19a1"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "58148bbe2e4fab8b9636c520e4e18823"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "1dfb29038007a8534e62df0929e58047"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8f555f9109a125eb4515b7f41b8c6553"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "f547579b084105f9d815e52d73c71357"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "0a8b0a5af27cd8b15df4b1a4ea5c7a98"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "06a4f53ea7cd2ebbaa7d26d4a53098b1"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "e5f33f086a52526b3f3b8af176b82b1c"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "e8abb5edad35e0cd21932c7e236570c9"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "6ac516dfb261e40e4b0084b6c02f8004"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "2ffe9e7812e08856a3a6f0992bce4455"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "a2f244f2e1a6646f332acee57f5fd61f"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "9074811400de6db82b8589015b85f03e"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "d9717f77f1891c4b790268c6b4b28aed"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "257c246c4a3f89bcf0c8461f41518d30"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "5ea315c978c81e8d26e4c773ed380de2"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "97b9094962f2e12767cae1d5e42e5abd"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "02b98305ffb34c15560a951545a89c98"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "ee90dac0b54b1ddb7d15341b9a2e2a3b"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "513afa61b183d2059e85bfb9f9645516"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "e7fc7960408bb884977048bdcc2fc9a4"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "3503e192a81c866f65b646a806accf5e"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "b7fae55a917edd1a4602d6f043e358fb"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "2247d55b7da826b39325d1d5b02d5fea"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "5f18585db4158b37c10bdfcf41bdf101"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "85d9bc10b3e41787dbda757763742fc0"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a895c5b978b7b67117ea047213c7bc7"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "addd40fc134dc3f780df274e846b594f"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "1a7477e370be079c2eee91851423d777"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "74dd25bd408b72493411cb85cceb56f5"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "63075d6c5e16d7e70129d6c57bd61fa3"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "145b85b6b7db9383a6e5dab9c2a55bdf"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "7a9b898c89687930e0e45c12d18ce5e4"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "a17f36fa83bc3faf13e9da3fdea305e6"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "b3d82336e8ddd9a25586de5ce36c80d1"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "032b5579022172bc5dbfc78c8d002b76"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "0cf990b87206348746554dd9d4e78cc2"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "2e34549f3fd1262dd9696395e6f0569d"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "56d6b3371e7fb20baa55553905b5c7b8"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "ed35263cb30fbe95e7a63a54d5c370d0"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "2ca4c8ba797b53eafd4e6ba9c56b7c84"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "c9c0c6fc97dcd9c146068b695d4041d6"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "a8e69cbb252ca939cd1c1dc48afb823e"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "cc25a46be502f6451980da17a354d6a4"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "398369bc0cd8aa55e55e3e56383dfd61"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "351df459f259ebf9154d0e218c606cb7"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "9e7ed120036708877463335a6f8107b0"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "07e08fcf9af944e60aebf95cdc1efc97"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "d1f94994f9cc274ecb66921b5057bcbc"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "8f267634d1a5ffa4cf086a6664799332"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "64dfda7e9c4d7eaa5c19ae1f26cee26e"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "d567912f7bcdfbb4e35515508ec88d48"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "5795a206b3b4b3756e9258ba7f15e372"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "51a369738381846dc960cb44edacf8e8"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "a87e5aec6ebe73a0eeab4c7171d186f8"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "73636231c38df47a49b0daadaa1fb066"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "3655dd63f0f2de9acbfa06ac5d9485e7"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "85aba28ea2d26ece4a1462c3628f4b65"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "8d17c496199701a887e6f25b28029241"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "fcf92e5e8a6658a7449fceae02e5ee7a"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "29b9f9fc0bbca9418e8ce69d4212ae0e"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "e278af3541c0b08c8f6d28e8d5f59a7e"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "879f51fe6d81bbe4e16ae96f2f8e17b5"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "c01822cad5e5f8e186c3b7d8e7bdb79e"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "b6f433e77d6d6fbbcb9191c267cb073d"
  },
  {
    "url": "views/index.html",
    "revision": "52daa1358d2fe2f92c060b4d08dfd5e5"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "514f7feed5b0658b72f600e078b23e36"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "f26ac9850403bad65072c6dc0703752b"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "e5e60060b7289695a4170f8b9f739ad9"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "7553da0896a4c53824dac968689af5cc"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "07d7873d3e0ec1568a7b89b0e0187c2e"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "cbfbc47e9f25ef0fffc34593154ee120"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "fbd0fc52001a7a06ac4b2ce0f4633324"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "c8526aece7337e8183ec5bcee7202ee0"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "ecaa602645a9bcbc5f56e5be2bc17b63"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "c94c84ab213a243db60bcdfac72dcd7e"
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
