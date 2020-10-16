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
    "revision": "c23eb4f5b05d0b17d00c1f38ed4c9bd5"
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
    "url": "assets/js/13.564c2abc.js",
    "revision": "85019a3bd5422307e1561f06a44c0905"
  },
  {
    "url": "assets/js/14.47bba4d0.js",
    "revision": "662a5541d8cf21d0c5c3d247cf025a47"
  },
  {
    "url": "assets/js/15.fff2b5f0.js",
    "revision": "25f2d0ad3ecf918ecb346c4d0b9b6914"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.dc980702.js",
    "revision": "c410563643a9d75f64c1bfb2389eef93"
  },
  {
    "url": "assets/js/18.b409168e.js",
    "revision": "de40c62ac458ad73dd46a066a725f1d3"
  },
  {
    "url": "assets/js/19.54cc0486.js",
    "revision": "406e6bc56d85795997e0228934d33d56"
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
    "url": "assets/js/22.f8d8f5a0.js",
    "revision": "67fb1745b9593be39cabcf45d4db2122"
  },
  {
    "url": "assets/js/23.2a6c87af.js",
    "revision": "d57e9dacdc8c239db8d7a517c562c2e4"
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
    "url": "assets/js/27.5363d0a2.js",
    "revision": "db70ea184209df5e2d95e1aa3dca5e13"
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
    "url": "assets/js/33.4609a455.js",
    "revision": "0f9d05ca3535672dfb27170e067d341e"
  },
  {
    "url": "assets/js/34.a19cae3f.js",
    "revision": "7502b7cabd3f9e649e18fc04ed773f97"
  },
  {
    "url": "assets/js/35.2d4ab48e.js",
    "revision": "8a2deb724194390a7642aa4f43e3507a"
  },
  {
    "url": "assets/js/36.95b952c7.js",
    "revision": "319d6e9f6e006e862c525a7c9673f548"
  },
  {
    "url": "assets/js/37.f92d2c79.js",
    "revision": "183fcb4796be7014fe07a8752d55c584"
  },
  {
    "url": "assets/js/38.c17dc8b5.js",
    "revision": "a04e1b50f254b6981b2eea10941dd888"
  },
  {
    "url": "assets/js/39.47b69703.js",
    "revision": "c37c32d3ff9b2a3058bca51fdc68b25e"
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
    "url": "assets/js/41.4845c810.js",
    "revision": "d57122c72010c67309c974dbd9079c36"
  },
  {
    "url": "assets/js/42.dd47a40c.js",
    "revision": "d9920c6c0a2c517aef20ba5de4d1155b"
  },
  {
    "url": "assets/js/43.933bd265.js",
    "revision": "faec2282bef90a2567b30a101eec4ff7"
  },
  {
    "url": "assets/js/44.67ae725b.js",
    "revision": "4da261783e42063a3c1e0a391b9d7df3"
  },
  {
    "url": "assets/js/45.178f6a49.js",
    "revision": "dd86c35036b388be9d9f87879428e7bc"
  },
  {
    "url": "assets/js/46.65aedd20.js",
    "revision": "03db643f75c3276a1449e69821d4b669"
  },
  {
    "url": "assets/js/47.0916bde0.js",
    "revision": "153a7885f1fc1fc5cd4d6d84f90df3bc"
  },
  {
    "url": "assets/js/48.062ae49e.js",
    "revision": "60dbf97d25902cee094533eba823fc10"
  },
  {
    "url": "assets/js/49.acad96d7.js",
    "revision": "e136b982cb03832a28f7082fb032b2e2"
  },
  {
    "url": "assets/js/5.418474b6.js",
    "revision": "c48475e0447f9416fc5d2fb6bdd33330"
  },
  {
    "url": "assets/js/50.c9d73b88.js",
    "revision": "445849a3a1e1bee47a13d221516ba692"
  },
  {
    "url": "assets/js/51.b1238887.js",
    "revision": "7d2d5afd045d0f8293cf91e00c0b9c2d"
  },
  {
    "url": "assets/js/52.f5a4b0f2.js",
    "revision": "c082f72a99300c18da541d124afc06b9"
  },
  {
    "url": "assets/js/53.d3e12c9b.js",
    "revision": "1ffc78ae0353f0c877b7c6d3654a9c6b"
  },
  {
    "url": "assets/js/54.db85e74c.js",
    "revision": "427a165d32c3f7999bb1f829d3c20368"
  },
  {
    "url": "assets/js/55.9b049c07.js",
    "revision": "000f781bd39a0544f4cd1bd2643c169b"
  },
  {
    "url": "assets/js/56.9aa05db2.js",
    "revision": "0dc86577460fd14c4e1050a64f3bf154"
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
    "url": "assets/js/8.043e69b1.js",
    "revision": "163db8dd5c4f7ccdb68e25047d8d2d5e"
  },
  {
    "url": "assets/js/9.afbfc1fb.js",
    "revision": "489af26615e46cd0d55da5408223102f"
  },
  {
    "url": "assets/js/app.566d6a7e.js",
    "revision": "592c52f3c1a553f4c4c08c0dff30cf80"
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
    "revision": "bb58dcd5ae44fff8ee7cad0416b4c2c4"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "bb145443e5d8f13fa879ed83ed7026e4"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "274f14701b4d9dfe35d5d6a9c7c699c5"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "8b7ac2681c5d1f7de421a94faf91e51d"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "27de47a1ce05336adcc53a7aebd49cf8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8c9171294fe4e2dc90642eee57f7da3a"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "59580678f01758b01cb8e424102ad250"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "a16455951879dc4fea6e7986bae29663"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "1dddb7b1e60c3f1a1b1835075a8264f3"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "41f70d49b9491f9080b986d5011e1457"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "7199e5c5fc9b766c387d0636d2e929ad"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "15a70582f3ea2f03d263808b8c638417"
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
    "revision": "d7050785a2849fc747be0f996085fc70"
  },
  {
    "url": "tag/index.html",
    "revision": "f8f9a00155f4bd74f1bb21c8eab691fd"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "21ae65bcba0e569cde698a1dc3ea05f0"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "7ceebfe35bb4c023464cafc00094ac76"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "433ac3c82fcc833321baa0cd7bcaa08d"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "aefc8f21447f3b4bc0da8f47c4cd3a70"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "6ce24295ce7c5771f31b88d2c2e6e635"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "d454521a0c4ce8899aad5b47245b2944"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "d7466378e00ddc81543c874886e3b853"
  },
  {
    "url": "tags/https/index.html",
    "revision": "852f4c3fd932d41ecc5fdd612cab9c24"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "552671d570ebd86587cbbcad4ff53b5a"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "b5842d3d465c764b37049992495e630a"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "f735f1848be4f7e52e29ad567f4cd717"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "2819c980e3f932bae7b36d151a4f27ab"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "5c5e4473314a5b6513f4a3051ccbd85e"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "f759249210f46bc6994c6b6605af63bd"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "503b82d0b130d1a5f45d2a97a4ed30d9"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "731d4547889fd78194db55c3e5b9eeab"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "22b10c9c4ff6627dd577d6545effca64"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "f1068b41b0e4440c19e98adbfe55e25c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c5c2a5de6dd6e49372bdd2136cb077bc"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "81fb0a5dd14ea9a79ef772b5f46dd0f0"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "6b533c9c44c6f46a4102b55a48b14b4f"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "ca1e433bcbc4db57f4ab5bebda9cef22"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "b8d2b81158103078dcf011a2e9e6f96e"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "3dcd5e963bcd6280f96b4f523cd615b3"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "5996a26b184ef6103fe4dfb93028c1b2"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "c858af8daa43dd9d54c8808a5a8eda5f"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "e608b02d623f59e26970f86879fba377"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "ad30ee3700d53769de6eff0373ef14eb"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "0d85d8903f40ebb1262ad02db2dac457"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "ae921f288f16b8297a3b3a19e49ad063"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "3607e00ce7b18426624cb358690d9e8d"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "0d73ba620d2f3b9debb66008d920e489"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "617ed6bc463978bdac36a74bdf5e6558"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "9c8530aaedb5528a00ef1f603be06006"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "80edeb63963616f88f85c584a0755725"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "07cac8d15eb67301390ea1ff7a42b447"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "b30d2f7ce67c87c28fa39258f2e5ea48"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "4ed3bb0481b4ee0f28db645d8d8861ca"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "e52eaa2b51fce57a1c3cefe3c92f2ca0"
  },
  {
    "url": "timeline/index.html",
    "revision": "becaf4c01df638736460abc6baf14269"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "c961ebdaf486df602a98a99187e12449"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "7037dc5b7d7b7de82f435c3cc162ef9c"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "a6a6703086f4781a80814bd9014851a6"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "5c4e5d0f658e390f1281ed7f35f8a232"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "36fff552a274736e0fd4b13359ad6b16"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "c0d60e1512a4f754950f7465f6d33fd7"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "08806d58de6a028cccbb107b6c898233"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "0172fd281344318a47dffd17314de762"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "8eceadbfbf60ed25f55e33a7dd93eef7"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "6d8c63889d1491e1440196a15f472d5e"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "221ce5157d83ff45b3d694de1d80342e"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "8575dd700d167b20c0a0cf8f8ac61b4a"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "d3836a378dd5b3e08a01bbe4ca994bb2"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "17abb68e378fc8f0626d900377471fbf"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "63685fad819efbcda34579d802f49981"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "72cc5014257c97e6635f128a436fae42"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "0ab9eb34b2cdc18c815c8ace09aa8fc5"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "d7596ebf6e222dc5ae5b1112c0daacad"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "a6372403418b7e00acb916647d320d77"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "aafb318608dad5122747b8827e085ff3"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "3c9a036ba4d9b62e9aa88d7102957193"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "d072facd641da271ab0c46d088ba48c2"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "6c6323be570dfc6d5aa43d6f9115ec8f"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "c9f950c20be322ffd5b634f4fd930171"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "ef0705574b2997eb5172b7f2912c5050"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "edd6f18378c42ef365703b91be0c993e"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "f4b6c3db411ff219fb17df52923bfb54"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "2ce1688c3b59d0059fbecd436ae55e5b"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "ba156dde352b08052b1a477fcf1191ad"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "484639679a857e58f78ab61467566c3a"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "b71251e5127dc332dbe3095a9ce6279b"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "34231cf744b2d0c235b169006504b8c7"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "3897a698e162561e569e91ca9bc7f11d"
  },
  {
    "url": "views/index.html",
    "revision": "8caa3ddbbff4f927c18f1a2debddb57f"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "683c71f2054e76896765c6ac3e30421c"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "9f66db8b24c1a71d2840b6013900570a"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "f626a4c38a94dd47b21d4db5b4c69b59"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "390c5d1c9ada11e0faacbc90fb34506a"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "204ec281a640aa3351fabe0abe91689f"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "371016fdfbba8f48d7d2fb45e45733a1"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "f9dfd1576ab033bb1ad04d7a91b5dfdc"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "1e9f146efcd7544ce7f84d50afeeccb2"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "92eb54403c890f8773d52907b5da9b18"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "955f9e3fd201607814fc022118836c6d"
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
