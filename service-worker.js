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
    "revision": "247c5dd79d3aa80e3479410777d3c24d"
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
    "url": "assets/js/12.2767a9ac.js",
    "revision": "088c38c4b090dedc4ce8ef189b60258e"
  },
  {
    "url": "assets/js/13.bf5a4ecc.js",
    "revision": "c26132126ede3884f627995c30a483b3"
  },
  {
    "url": "assets/js/14.b250ca16.js",
    "revision": "cfccc1e46501eea3d7085d1b170e7528"
  },
  {
    "url": "assets/js/15.afc8795e.js",
    "revision": "0a3a7cd724a041f5863592a9625998d8"
  },
  {
    "url": "assets/js/16.a17dc8fd.js",
    "revision": "1c49aa885ac3cd954e7775fb3ad2a938"
  },
  {
    "url": "assets/js/17.f660f0a7.js",
    "revision": "5ae879b91bcdffb0639bdf454a97a503"
  },
  {
    "url": "assets/js/18.d43f90a5.js",
    "revision": "c602592fea236fe70085af1dd6e71284"
  },
  {
    "url": "assets/js/19.20f967ca.js",
    "revision": "0acf24a469e9582119340382f14fbd08"
  },
  {
    "url": "assets/js/20.147d8525.js",
    "revision": "2241172bcc4f8c9fe11eb2a5c7e213d3"
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
    "url": "assets/js/23.489d5f2a.js",
    "revision": "eee3fdb663ab607bea21aa4a9cfea599"
  },
  {
    "url": "assets/js/24.3c60efc8.js",
    "revision": "e911af5d7515f2688fffc11776680c06"
  },
  {
    "url": "assets/js/25.54a25cf5.js",
    "revision": "f2db357a4bb794cc53d26c1d0db9f8da"
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
    "url": "assets/js/29.91413e02.js",
    "revision": "86d5b0683ca416fa2a6fc55c556d5d83"
  },
  {
    "url": "assets/js/30.c5ce23df.js",
    "revision": "4571cfc72f7ff3e6ddf1f50cd512be42"
  },
  {
    "url": "assets/js/31.8c22f8ea.js",
    "revision": "ec2dc2c8cb00f599c339690fd4e7fc22"
  },
  {
    "url": "assets/js/32.aab356c6.js",
    "revision": "9a5dd789e9304280e92d9b84e520679e"
  },
  {
    "url": "assets/js/33.c4e2d700.js",
    "revision": "4e62f4f03b4cb9dc465cb7d0e3cd96d6"
  },
  {
    "url": "assets/js/34.4f278724.js",
    "revision": "5ecd69b0c1ffd7e546b473d23fba38b6"
  },
  {
    "url": "assets/js/35.6006b5c7.js",
    "revision": "ea6322b20049173e8f0d868340169f94"
  },
  {
    "url": "assets/js/36.200f81bf.js",
    "revision": "212f0a2011d470a294a014f73e0f84a8"
  },
  {
    "url": "assets/js/37.952a4774.js",
    "revision": "9fa36b67d290f6ece281d1efce8c8a75"
  },
  {
    "url": "assets/js/38.84d4efd3.js",
    "revision": "7376d81178bf4c64a8bbb751e2bff2e9"
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
    "url": "assets/js/40.c516bb96.js",
    "revision": "2ce98c33fab2eb9c0eb0434c40bb78a1"
  },
  {
    "url": "assets/js/41.fcf7b1a9.js",
    "revision": "9a4c2ccb8eef7928ea4094df87579c89"
  },
  {
    "url": "assets/js/42.aa9a84bf.js",
    "revision": "370da575b4807f436f2b217d24210572"
  },
  {
    "url": "assets/js/43.976317e1.js",
    "revision": "987de711d8c94ef137fb107d43ec7961"
  },
  {
    "url": "assets/js/44.e58002c6.js",
    "revision": "5f333c67cbd0e8eaa8d74913634dbe79"
  },
  {
    "url": "assets/js/45.41dee853.js",
    "revision": "39b9cba03b2700fc879da4dc9829bc7d"
  },
  {
    "url": "assets/js/46.b588121c.js",
    "revision": "375cb903b010284c7ab28cc80a33df46"
  },
  {
    "url": "assets/js/47.0916bde0.js",
    "revision": "153a7885f1fc1fc5cd4d6d84f90df3bc"
  },
  {
    "url": "assets/js/48.bda54319.js",
    "revision": "fdabfa6578e7fc8f7ff431e4b7265a20"
  },
  {
    "url": "assets/js/49.bb641027.js",
    "revision": "8a4d1100b34e0102ae189125089be1a2"
  },
  {
    "url": "assets/js/5.418474b6.js",
    "revision": "c48475e0447f9416fc5d2fb6bdd33330"
  },
  {
    "url": "assets/js/50.f9b7fe48.js",
    "revision": "9b9a01dd3a820a4a7910cf5ae7ea5608"
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
    "url": "assets/js/53.04188c29.js",
    "revision": "e3b7fb5c59b573adfc25fc8451bcf5e5"
  },
  {
    "url": "assets/js/54.54cccea5.js",
    "revision": "993ab1943273a7c55fc73bc18e6565c2"
  },
  {
    "url": "assets/js/55.89defb10.js",
    "revision": "662e1b0ed2277afdea36ee64afa6167a"
  },
  {
    "url": "assets/js/56.5c99ae22.js",
    "revision": "671a1d9837bbba066f36169b2f6440e6"
  },
  {
    "url": "assets/js/57.1d168a96.js",
    "revision": "ab8ae546f357b2e3a89c26b474fc3a05"
  },
  {
    "url": "assets/js/58.fab349ea.js",
    "revision": "f76ea0545c871a6264bb3d4317a16a7a"
  },
  {
    "url": "assets/js/59.0cbef901.js",
    "revision": "92d17ed8147c9e849b8fc941af04167c"
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
    "url": "assets/js/8.96b2df32.js",
    "revision": "fd4f3a0d80aeb376f663aa16022df8fa"
  },
  {
    "url": "assets/js/9.afbfc1fb.js",
    "revision": "489af26615e46cd0d55da5408223102f"
  },
  {
    "url": "assets/js/app.143402af.js",
    "revision": "ca45003bd9ee111d016cb4d2643349f2"
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
    "revision": "072a7360d94892ac8e4300820b31b591"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "b7e7c75841febee98d6f051af6de4be3"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "758ceafe2e342e00b58ad04ebaece8f1"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "ae7c80df305a22b1907746c62263d438"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "fb5e643e6f314e79b645696990676974"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "491a2e4941c1082ed531deb8e849a6dd"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "c12016a8464655c07f6e032de01850c7"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "d3a7704a85c9789dbee83c330106ca37"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "f8bd2fd7d7f30a640372e70c03c32173"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "7f2e3625829198785c52b1ed5ad9e956"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "efe37b8bb58f8613781f7c54767f5c99"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "565483d21d0de119c21367de6413b428"
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
    "revision": "4edefd65ae7564a0d6e36c0305bc64a3"
  },
  {
    "url": "tag/index.html",
    "revision": "b75bf37020843a8969aa8417e03aad83"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "cf1c351f0bc6e61e977871c9e4620a6b"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "04f785e2c11993311290ccff2f1d8d38"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "26a9f1851636d03e3d551f5ea7e71406"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "adaa757a43b53d2e1a6621afa5b2eca7"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "a5a2e68337c6771c2f6acc46cf792ded"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "3e7192e0d6c85689f91e0e41c7dbedc7"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "ec498ee5f208e79a695903d397a43175"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "3604a29e9b69e212fc3838353add15a6"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "3a10d1b074e535301137cc4f53da038d"
  },
  {
    "url": "tags/https/index.html",
    "revision": "57687caf1430178a553a04e4774d8712"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "10e6368e0c5818bd697bc31096445d26"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "7145493ce960509885ca4b06a84b9979"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "72ba883fa16538ccaec7769ed89759d0"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "f0592c5845034df01c4765a46a9e5f1c"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "dac0f0cc0d9ff9371494451451d0ac38"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "4c5562b4df39d3ec44d2b7f9c0909476"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "390aad69562bdbc15579d45dc729458d"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "aed29ee349af62beccb6826953551b13"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "cf919e4d6dfaaad7f899e4977cb11c9a"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "4b8fd5546929df3a0b74e99724da66e4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "83a367b56a7f3286d0701280ad4e6f2e"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "0f4be851ef2d1f6b3e217196c3767688"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "77f2b00fb646e56a428a8fe4acc1690c"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "8db9ae7983cc702826bb1a00dfda07cf"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "16cb8257ef3ce999b48406ebf5816e2e"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "3bd66becf27753679f9ca6d5b943555c"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "68b3da889506d47acc30fceb1ff20cbe"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "a63f9d69e7cfd1d37421e4d827e7ab93"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "8b5d81dcbf3c7ad627c7bf83f37766aa"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "1886425668bc4d8f12daa4fc91484f98"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "eded4af1471547133075d7541ce0aebf"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "507c86e45cf4eb02d1ddb1d0cb1664bb"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "385dd3f264f035fcc202afe6fb658a0f"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "bbbf696d801f385e7d8dda9477c3581f"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "f9b7c1490176d90907e152cf58e9fe0c"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "cdecebcda111839ed6ecfa85d5220352"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "e1f028c18297146149aaa1ab70cdebda"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "e1e0bd9028bc029ae71fac6549ad3de8"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "17aa5fa2377a1965c10241c855f45cb2"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "5b529a9b488620a50ad5e13bae92d9af"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "3238288ee44d92bdd1bf4dac8e20f846"
  },
  {
    "url": "timeline/index.html",
    "revision": "03b3aea48850509d752c52872e47ea0b"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "99e9b672bb81de287403f5661744eac1"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "b617e0d0aca696a524a044b0cd5930e7"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "af083afc50c83a1ea6727ed1f07be720"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "6bc26160d299a0fb4c99f9286b297779"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "886169a7e1489be9f37d77a132222d33"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "343011c138fe86b8c9344d95b11524d6"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "e16e3d93d2be3a52f5f87a734352a98e"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "ef9b486e435525870835bf968c3d0f49"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "7f5b9ff07e4c501dca2dcdbd9d93f17b"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "90adb4102a4639e5f5b20ba9bfd36fd6"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "3e7fa267190df07785ebc47d292d32b7"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "b4e3bacf387638237838392948c6c8e4"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "ff0b0edd617f99e0467610e10dfc0473"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "54e41eaac2fcd7933c51f76838470972"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "2812939d1005615a1520aa0a45b4d1cd"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "f9ff0abb07ac133a20b09a3b63bba4bc"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "bdbe81a4f97babc22a83908609843609"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "9f809e016ab0569992410166cbe5557f"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "7644747089c29d3d9b7c75805f360111"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "42879d3275b294acb560624f6c00f2f1"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "769b6ad722c86efc237d0d5cf17953e8"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "b293fb26454852beffa7de6c8a067e1b"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "3855358a9184aefaeda98c38e5a8eab8"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "32584cdecf4cb5da3fc989d7a280c87a"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "f19722d9105d1da864dc87ef3c2f65a9"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "5ecce37093bb7ec944c851a0530e6fbd"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "e2dd2c7aea72ab6978288f2de3532183"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "ce7b8c7aa387ee98f40c9a4a7ae71699"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "9d12dce9d35bfd62b4536df09243c8dc"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "ab8acb53772ccf81456e83722062eb14"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "1ff99ebc739eaa644404d2c980363c07"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "f072684fc7158ce28e5a50260cab9412"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "e10ebae38bca0b810d1b1fa5d39d9dfd"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "4e93fd0ce2aa427b343c072750e53266"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "fcf512ec69705f67ffda939332451508"
  },
  {
    "url": "views/index.html",
    "revision": "a386bb89b4767a1e8ac5902004706753"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "935062dca41064b9475f659cdd908b4e"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "0866433c661b86ce4a70912c98a1828b"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "811e57b1c0e90bb2188d6f7996eca267"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "e9252e00dc15e5d26f32a54baf40983f"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "72b67cf63ffbf5a009563e495cc3cb5e"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "e44e186c3d4eeb53221700a15caa396a"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "6d82ef96a9ee09261f190e5f2f118056"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "126d28bd7c530d5c123b1cd48c439df2"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "2570de15f0a9ab2a56d99367585778de"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "5de7cc7a48ce410a9f570e20d952293a"
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
