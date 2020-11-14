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
    "revision": "d8223e4ad14efa44abac713b732f6f60"
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
    "url": "assets/js/1.8dfdb017.js",
    "revision": "aa6765b77cd492722baee01b0198dd5c"
  },
  {
    "url": "assets/js/10.805663db.js",
    "revision": "c7d0a849143cd361034d98ca2175de91"
  },
  {
    "url": "assets/js/11.c2ed9543.js",
    "revision": "6a28def1d86be36a6f2f86e0532cac08"
  },
  {
    "url": "assets/js/12.501155e8.js",
    "revision": "a15b9210df73f3d4eb663ada7e622dee"
  },
  {
    "url": "assets/js/13.179f14b3.js",
    "revision": "4cba94a38c80f8ada462f8cfdd567d43"
  },
  {
    "url": "assets/js/14.9e6b1702.js",
    "revision": "6f121bdd7f67d01a8bf71b722d8f2d5b"
  },
  {
    "url": "assets/js/15.fa397e3b.js",
    "revision": "1fda5f77be6a3f89ea9dfe2bbf88db98"
  },
  {
    "url": "assets/js/16.a17dc8fd.js",
    "revision": "1c49aa885ac3cd954e7775fb3ad2a938"
  },
  {
    "url": "assets/js/17.a22ef221.js",
    "revision": "2e8f5feb95881a0e5ad6f3a189df469e"
  },
  {
    "url": "assets/js/18.e919abcf.js",
    "revision": "7abb67c7e62e95c453ec3f468a65cc6e"
  },
  {
    "url": "assets/js/19.88215ba9.js",
    "revision": "271118915d1974c481f5196b95dfd461"
  },
  {
    "url": "assets/js/20.bd247135.js",
    "revision": "dd5804c920fd8920ea1f1dcb3881540e"
  },
  {
    "url": "assets/js/21.24bccf23.js",
    "revision": "5f2915396fbc33f8751a818f29cdf7dc"
  },
  {
    "url": "assets/js/22.5e09fa7d.js",
    "revision": "eed59b2f49a999dd7d2c870c0c9ae357"
  },
  {
    "url": "assets/js/23.495ef2aa.js",
    "revision": "fa30631ebddcc270d79601c8f0263e7f"
  },
  {
    "url": "assets/js/24.c2eb970d.js",
    "revision": "adfb38db5b27ea6a6cf48b270653558d"
  },
  {
    "url": "assets/js/25.088c9350.js",
    "revision": "7352f0e0f86a3b5ad1dba4bcb8937d8c"
  },
  {
    "url": "assets/js/26.63cab72e.js",
    "revision": "9fc07c926df68efdd8f22f497b51a072"
  },
  {
    "url": "assets/js/27.80d38c04.js",
    "revision": "6499e66256c8cf6aa3accf63bd19f338"
  },
  {
    "url": "assets/js/28.6c6ad536.js",
    "revision": "ad4f08b41763aa2c480c82753aa55dca"
  },
  {
    "url": "assets/js/29.919e47c4.js",
    "revision": "e55ce9017b0489b3c131ea00793d88f0"
  },
  {
    "url": "assets/js/30.e4caca8f.js",
    "revision": "a8e12afdda4c47c096bdea080c9374c7"
  },
  {
    "url": "assets/js/31.bfeb9380.js",
    "revision": "9ebad717f992f0dd377c5722edfb3f3b"
  },
  {
    "url": "assets/js/32.3a632e9f.js",
    "revision": "f1d66f5f20c142e3f21ec3205fd8c112"
  },
  {
    "url": "assets/js/33.b9e989ed.js",
    "revision": "4d533a69270a0507e5243054835a83a4"
  },
  {
    "url": "assets/js/34.49ec2926.js",
    "revision": "13e1c3308b4a1644cbb1aee23638aff2"
  },
  {
    "url": "assets/js/35.c91ab07c.js",
    "revision": "916708ae87d08dd4e494c0b08269bd07"
  },
  {
    "url": "assets/js/36.6621a7d7.js",
    "revision": "2a283c8026b9091d6560ad083bb4a1a3"
  },
  {
    "url": "assets/js/37.483db1e5.js",
    "revision": "a1ccb7680a817fec7083b2cc3b613833"
  },
  {
    "url": "assets/js/38.0a62703f.js",
    "revision": "d72e81ff8dd752b90fea4967bef36d62"
  },
  {
    "url": "assets/js/39.f887bfbb.js",
    "revision": "be18f28db0d6bbeffbc5a9ef7ed5c538"
  },
  {
    "url": "assets/js/4.b8867e1c.js",
    "revision": "f6b1d4be6c340dd4cc949044d15e6f68"
  },
  {
    "url": "assets/js/40.2045460d.js",
    "revision": "e1e3dae37893302bd50cf774d821df71"
  },
  {
    "url": "assets/js/41.b12b1bfb.js",
    "revision": "63454784c7b1de59a6d08c4a41b650ea"
  },
  {
    "url": "assets/js/42.d5a88658.js",
    "revision": "efb4a41e516f632723ff85830c08424d"
  },
  {
    "url": "assets/js/43.a9e506af.js",
    "revision": "84d73a1d12cea2f57bdc01b425236633"
  },
  {
    "url": "assets/js/44.2b8ce750.js",
    "revision": "0c0e28300be6b11d5b13247f28b3ceb6"
  },
  {
    "url": "assets/js/45.5c2ba86a.js",
    "revision": "5330154805ba090c034b0316a52e752d"
  },
  {
    "url": "assets/js/46.9729f481.js",
    "revision": "2daaffa9919953cf731e53544cfa844a"
  },
  {
    "url": "assets/js/47.72db7d99.js",
    "revision": "4e9c7a46f5019087afb95950add9fc98"
  },
  {
    "url": "assets/js/48.5706a85d.js",
    "revision": "29d354d8cce15a5732b893429ddde678"
  },
  {
    "url": "assets/js/49.b8bbea0c.js",
    "revision": "bd139d8603484e683658ad2e904e0d77"
  },
  {
    "url": "assets/js/5.3dd4408b.js",
    "revision": "3252d915789c5b91b053c01aae787efd"
  },
  {
    "url": "assets/js/50.949d8a18.js",
    "revision": "91d8769c7d9f2afef908ee610ace10c3"
  },
  {
    "url": "assets/js/51.462ca75c.js",
    "revision": "887e85ffdbb84ca8d21d722fefe52796"
  },
  {
    "url": "assets/js/52.f81a3c41.js",
    "revision": "0089b9083dadfeecba3c6dbf0b5c31d4"
  },
  {
    "url": "assets/js/53.48ae2e0a.js",
    "revision": "53ff30b1a9b5f06f989f96e5e88b226d"
  },
  {
    "url": "assets/js/54.977ddc47.js",
    "revision": "7a533c8a30a0404cdece8af6034f2cc6"
  },
  {
    "url": "assets/js/55.65eaef2b.js",
    "revision": "007ff1386e0b5d4d6275b19227b20d0a"
  },
  {
    "url": "assets/js/56.647f261a.js",
    "revision": "f058d335356f783c9a2db72428a26a86"
  },
  {
    "url": "assets/js/57.da0f683c.js",
    "revision": "baaec54daf454fca44d8f58933276955"
  },
  {
    "url": "assets/js/58.56a5d6a1.js",
    "revision": "6c2c8cda76f1f27eb02ea48442c04f69"
  },
  {
    "url": "assets/js/59.7540cfc2.js",
    "revision": "eccc17edb18f26351fc014ed30a1f0fb"
  },
  {
    "url": "assets/js/6.a0cc0e83.js",
    "revision": "43563c7c0d4fad90cca3f576fbd3237d"
  },
  {
    "url": "assets/js/60.bee8a859.js",
    "revision": "071a4a7d2420bc2406e83b031f672068"
  },
  {
    "url": "assets/js/61.707c92aa.js",
    "revision": "717ca790db6213e91209375dafe2db8e"
  },
  {
    "url": "assets/js/62.09bf7ec2.js",
    "revision": "cdf2062257fbe32b7f24c4a348424363"
  },
  {
    "url": "assets/js/63.288b566b.js",
    "revision": "9197a563ef0698fdd2c0cb097fadef54"
  },
  {
    "url": "assets/js/7.62460f35.js",
    "revision": "3012f08211b4f1c19015c8af41859f0d"
  },
  {
    "url": "assets/js/8.96b2df32.js",
    "revision": "fd4f3a0d80aeb376f663aa16022df8fa"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.67d2da5c.js",
    "revision": "35ddf9141d35876473f9d9a9c46f3f09"
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
    "revision": "0cc08da58617533c48c6ded0030fca39"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "594519978f51a26f439a5bf8dc446575"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "d5ecdeaad373239a80f1458b7d3f5c79"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "6fc6ff874f1a82f0bc588732a619d167"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "ce1ba6dad31b664ac6da2366392f4c4a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1a18603905aaddf92bf769b031b46c64"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "d0dd3335e0a114ff5bfb69d52c7902ea"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "6db4181df989a353e4bb811f56a11bcb"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "24abc7f210d39a2e5ef93c4af79b4a96"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "49603423ad852876ce9cbefc1ecf4676"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "f3fbfb95d44f5c60ac0ad2cfcc403e9b"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "9286aa3749c797f61ac9c5335bb81aa2"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "707a273752f28927a1d11166b58214be"
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
    "revision": "0f8055c0b28b8866ce36b1cd4bc2ee0b"
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
    "revision": "000f351acaa705191f44c1f94d31e4fb"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "64ad6e1f899468928fa9f0756ab587b8"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "a2dbc739af3a7bc2fe36484c0458ecbc"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "b10ff4fd1b1a18af5272412b911ef952"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "7179adeb947d7719191193d74fa3d309"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "b40d1980b9f4e9ef307eea3d34899c90"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "ecdbc87028c8e682d5ff3de3f8cbb421"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "55064414eec6050f23a8eb44fba1ae78"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "322b72566f5c3ddf180c8721a0802658"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "a2608bc14536e5a05df121d2d6860abc"
  },
  {
    "url": "tags/https/index.html",
    "revision": "20960f7601a1151a326c4a57109ef77c"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "d008b462267d5560eb5c9cf258295bad"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "818cff23f472b580aa9b0c2a99917fca"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "6871cd9ed281f7e484025636f2973649"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "afb96bf8411a1a043ccdbc13f65aac5d"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "053862f99bae150dd8759160f8641c46"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "04d63ace0ccede44726059bf7eaa0202"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "c1476cbe9354b7f9ec6074cf68edcef6"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "6c810b95f9fcf91fb0eb6783f908b356"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "565d1519beb325202a948f75f258561c"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "7616ac77da212ebb75b57e115c63ff3c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "16ab09ea73e2696502cf0226a1461e8e"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "86898e2207f50731348c107c9518ba23"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "aee70fd4bca8ccc3a7b6ef431a057454"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "3ca714f21127708fb72fa808524c8735"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "eea824cd0718ccbc9d881e31c156a82f"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "473c244c3ad5a5bf2d79622c772ad82d"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "43554a9104b7e428111abed8f08c85b2"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "db5bf3fe2941c0d45bd790ab9b54bf8b"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "52844b868fdeb88f90a79642b9b16576"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "c958b23e7df5726ec0be5e7a746d8190"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "314ae6a394789601a005b43b8f3aa3ad"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "88ace8cef01526568d603787387fd0e0"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "7e27da09462f77b6ee9b18d95e8df5a3"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "e448ff4f8c566680fbdc6da8ab7308b6"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "4d9f7ef43b8fd745e4f7d546336456e9"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "350da5c07518e53b392daa89daed4157"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "ef155efb74776d50ced7ba9d5e286c50"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "afadc8c9ce5af83431f96a4d8abfcd11"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "ccbf0ea936afa458cbc89d0fe152617a"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "5dfe4c10c025ba9f9e660e83f5b773fd"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "fe71c92fdc7c02b54a813cdc76f7e084"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "4f841eb9a8e2848cb0541624ee0a0c04"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "7b6d0053e3bf43bdd7c54c81a48b6ea6"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "e45e5a6019be53670ce37d55ca1ccbc9"
  },
  {
    "url": "timeline/index.html",
    "revision": "0faf9505a86f7de0588978ce56ca65dd"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "50fa406068534280d034674b6a9104b2"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "7d235aa7a637ef6cbc118225d9280b7f"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "649f3528b541e7a4f2a306832bf722a6"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "5e69b81a8d2eb74016caead9a17b975a"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "aca3f75c3cff00cf07206a520b156a58"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "1abc6693e26a4efc7300762367614eb6"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "ccd7066f23dcae6b9f5fbeb721a40765"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "ebc7895afeed0c64deb0c5c0558a446b"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "5caf314449a08a1fd1cde0b251287ef1"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "50e50e460fd32ccafea28fd0bacb940b"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "6522c19ed6a39ab98f8739688b6a43ea"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "caa1f6c9a926c411c416989007e63a99"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "f8b9316a2edee9cfe5e507b483599701"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "f413c71e6400227213a980349b94357b"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "205e726ca8a56830089ebbd8bb0682f5"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "d8b38f1ea81db8dd9e82512ae1b36f0f"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "23822634328a73f899207bb510a4b027"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "f6319d57a23cf65def445470e22171df"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "67e943b3ffd13b0f11301ca1eed64131"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "8216c8ae111a35d3f4d5f32c13ae201c"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "b5bc9f4b79fe7cf6f6a2c73bb58a7612"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "2a83c17cfae247ff66e82ee3e9ff4cf2"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "cded381fc6d65cef465db1d15e9fd6c8"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "db951258273e7871ce1715c015c4980b"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "e47ce925130e176dbf99a2aa9db703f0"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "65ef429ccb140e2334f6cfca150f0cb5"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "fda0c1a615246fb149f91064e87817fb"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "efd4fc07da7f152c18ac99c6aa439dfe"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "d83e5ba85f56c9c5ce5ca68ef58c9f57"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "49d4fdd7c9a115d8f113dfe998aa17b4"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "7ef033063c0baf3f8b64e94fa21dbc47"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "4b198d9846178f089654df2d5cc6a59f"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "5101a98b52f2016012acee9bafa530d8"
  },
  {
    "url": "views/articles/2020/15-pygame-projects.html",
    "revision": "be34183747ba71c985d2f985b75e296d"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "bcda8967a6bb14f7a9feb5cedf02589f"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "0d3ad8b1af6897dbd7322bc425820039"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "5910e7dcb0bb6a2bf089ff460b6f3d85"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "81aaab1b76dd554e09b9616a3d8ca0b6"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "231e4b8ee42b27512281614fb1190541"
  },
  {
    "url": "views/index.html",
    "revision": "9d9c07a51ea74753daf62e82b40e9199"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "ac915ba21df753fa67ff24e05b0e528e"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "d2354c42c7ac4620a40785f7b8322cce"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "a05455bc5a7448b62e8d58489b805446"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "6a35a9666cec0ffe682c551a777ca1c4"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "180256092c2304f4931b7252291a35c4"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "78b4de81f0e9f34b530cbbf236ac3bac"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "f0fd466a10c7fcad33c2d0cd7091a0b3"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "1b6c0c99ca56c127e5135f8d41b294c9"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "f68f02df6968f4b106a2eb2b82718bd7"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "be11ab4ce3663d2ba3fee8dbd676dd67"
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
