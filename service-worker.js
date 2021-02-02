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
    "revision": "bed3afcdb2d03cb805e01e99b22af550"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bit_count.5c17b22c.png",
    "revision": "5c17b22c558cded6185bdba9dcecf17c"
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
    "url": "assets/img/dict_keys.f062aec4.png",
    "revision": "f062aec479c358437e066b3e82412bd6"
  },
  {
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
  },
  {
    "url": "assets/img/gh8.3c97d555.jpg",
    "revision": "3c97d5555379e6240a0ec61337829e5f"
  },
  {
    "url": "assets/img/insert.619f3d8f.jpg",
    "revision": "619f3d8fea8a2798ce61ea1b16fcf365"
  },
  {
    "url": "assets/img/mac_getway.8863f8bc.jpg",
    "revision": "8863f8bce6e9d5a7c05a1c7a99587d6c"
  },
  {
    "url": "assets/img/mac_net_sort.145357de.jpg",
    "revision": "145357de0ecdf4113bdc6883c4a43eeb"
  },
  {
    "url": "assets/img/memory_location.86d5419f.jpg",
    "revision": "86d5419fc7674d94f7e7928e5975eb05"
  },
  {
    "url": "assets/img/pep-0602-example-release-calendar_Nqf5bvd.83b2d83b.png",
    "revision": "83b2d83ba0b97701a6c717743f187987"
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
    "url": "assets/img/wincmd.3f189cfb.jpg",
    "revision": "3f189cfb2fb036c5ea33cef6a7533090"
  },
  {
    "url": "assets/img/windows_getway.44ec942c.jpg",
    "revision": "44ec942c96cfaffb34ae28005976e26f"
  },
  {
    "url": "assets/img/windows_yue_dian_shu.24a20413.jpg",
    "revision": "24a20413863c2d9126f0212e78e1f251"
  },
  {
    "url": "assets/img/wxh.b846c3a8.jpeg",
    "revision": "b846c3a8ceb44d360c91c455c5206039"
  },
  {
    "url": "assets/img/zip_strict.50ab885f.png",
    "revision": "50ab885f9d6438da769b1d03b8e90522"
  },
  {
    "url": "assets/js/1.75158bbb.js",
    "revision": "bd84608d4b38892ad6638f3741b9ed48"
  },
  {
    "url": "assets/js/10.fb8c2795.js",
    "revision": "6cc9edd8e338b9fbb05006e2fa93f412"
  },
  {
    "url": "assets/js/11.7b3ddffa.js",
    "revision": "4081ccf1aa0e9956bac3ae58cf3a29e5"
  },
  {
    "url": "assets/js/12.d4e5a1ed.js",
    "revision": "3485474c9d0b1522f240431c7f8bc2c3"
  },
  {
    "url": "assets/js/13.f5cfd093.js",
    "revision": "242b709936768edb740368b5457f0042"
  },
  {
    "url": "assets/js/14.de3a79cb.js",
    "revision": "bc98543d7c15b08eb6a591a937d70399"
  },
  {
    "url": "assets/js/15.7edf5333.js",
    "revision": "ca32adefb6fcb94dc841759a7c0964c2"
  },
  {
    "url": "assets/js/16.4245bf42.js",
    "revision": "e9931ec0a7ecb022b49d7c7e5323e444"
  },
  {
    "url": "assets/js/17.ce3be270.js",
    "revision": "d6351da45c4d2d48bc096899cc28c27c"
  },
  {
    "url": "assets/js/18.1add66f1.js",
    "revision": "3823fe3af52c7c0f47d6da1c167037e3"
  },
  {
    "url": "assets/js/19.5b3209ee.js",
    "revision": "fef6e1a2a675b02cb059d09d32a4b6c4"
  },
  {
    "url": "assets/js/20.a0c3e569.js",
    "revision": "0ad5ecbdc35c0c6d438293c7cca8a89d"
  },
  {
    "url": "assets/js/21.f28b0bc6.js",
    "revision": "252f25c9ae9894228b69991d4f76f784"
  },
  {
    "url": "assets/js/22.1251322a.js",
    "revision": "5ccaaefcd2d7bd1dcce581ccfb3f9275"
  },
  {
    "url": "assets/js/23.45fbf604.js",
    "revision": "45459fadeab225bc7ea441f9e1464e5b"
  },
  {
    "url": "assets/js/24.8d508bc9.js",
    "revision": "9a849a5e8ceb41dd944bc551b01be72a"
  },
  {
    "url": "assets/js/25.3539446e.js",
    "revision": "b0044e4d852bf58f18f5006f51d4d830"
  },
  {
    "url": "assets/js/26.333645ea.js",
    "revision": "77e6224fefcb092072918eb55119b6a0"
  },
  {
    "url": "assets/js/27.c541a628.js",
    "revision": "d04fc6b758e7a86b6749953a67c8c57c"
  },
  {
    "url": "assets/js/28.dea49624.js",
    "revision": "63783e90a0900b231f27b1375983ce9b"
  },
  {
    "url": "assets/js/29.ab723237.js",
    "revision": "645c6366b08c2254c6327865560781a3"
  },
  {
    "url": "assets/js/3.64157d4b.js",
    "revision": "d237e59c747a74ce792691ff74331f64"
  },
  {
    "url": "assets/js/30.2866fda7.js",
    "revision": "3f6cf637a585e1ec3d800a86cbf39c1a"
  },
  {
    "url": "assets/js/31.0ab19372.js",
    "revision": "ac39e732a76c71b0fcec6f0b1231be7a"
  },
  {
    "url": "assets/js/32.3cf96a80.js",
    "revision": "9a8943e43fa64abaa216aa61e9e09e17"
  },
  {
    "url": "assets/js/33.925483bd.js",
    "revision": "7797888dbed8ac1f3dbf8daf9047428a"
  },
  {
    "url": "assets/js/34.6392b139.js",
    "revision": "b105d1ff08879f69ccb91a2dfa84add4"
  },
  {
    "url": "assets/js/35.94f36f51.js",
    "revision": "f3e0573def38e747309c1e81ced2f43d"
  },
  {
    "url": "assets/js/36.ca86a7c5.js",
    "revision": "a8046c50c95b3174a2e6d87fb3d28e93"
  },
  {
    "url": "assets/js/37.ff844e33.js",
    "revision": "93eaf5c8c98c149288a18245ffa9a9fd"
  },
  {
    "url": "assets/js/38.44b1e570.js",
    "revision": "8c49ebec7c449fbd3b5a03d9bec3f67f"
  },
  {
    "url": "assets/js/39.afd82e18.js",
    "revision": "7bf6117aea87e15196534b815293d1b9"
  },
  {
    "url": "assets/js/4.dab4d0e6.js",
    "revision": "bcf462dc8302c96863f9eed1e209e982"
  },
  {
    "url": "assets/js/40.73ef9e58.js",
    "revision": "e5ab55153e8e2246b13f8a50b49da09c"
  },
  {
    "url": "assets/js/41.d110c87c.js",
    "revision": "f75dac2ea9000246f4ecfbf9aa627528"
  },
  {
    "url": "assets/js/42.8a57899a.js",
    "revision": "a0b8146e7d32b1b2202e6287ad408e0b"
  },
  {
    "url": "assets/js/43.cc0f831d.js",
    "revision": "260dccaaa46b90338bb16d1c27cfdf34"
  },
  {
    "url": "assets/js/44.d4985d05.js",
    "revision": "9e94fd3b7bd12c74c4766c801ba6537b"
  },
  {
    "url": "assets/js/45.36c4fa6d.js",
    "revision": "80b5dc39b859db1b74bf3fc948b65d99"
  },
  {
    "url": "assets/js/46.0225f5f4.js",
    "revision": "f02d99203977937aa0c2372e94910332"
  },
  {
    "url": "assets/js/47.fe80c8d7.js",
    "revision": "0d8f2e101e6071919842dde388d06731"
  },
  {
    "url": "assets/js/48.9101663f.js",
    "revision": "8be29a99f4bb3f2f9f56a5cbd43dfdba"
  },
  {
    "url": "assets/js/49.fc61219d.js",
    "revision": "bca69b7266c0973a33c4b2ba97abfdce"
  },
  {
    "url": "assets/js/5.8d151761.js",
    "revision": "3d3897bf9745d2c0f69d44ae4049dd3d"
  },
  {
    "url": "assets/js/50.348142ef.js",
    "revision": "43a3c62059cf5e6375ac2bd8d5f1e66b"
  },
  {
    "url": "assets/js/51.b7da9e4c.js",
    "revision": "e6a848d06ee5f858f06dd06a01cc561d"
  },
  {
    "url": "assets/js/52.64750b57.js",
    "revision": "4599420c97ff7dccd9eb9c002e08f6d1"
  },
  {
    "url": "assets/js/53.55dcd351.js",
    "revision": "5142ea961fff86287bcbed99298ea28d"
  },
  {
    "url": "assets/js/54.7459d0b8.js",
    "revision": "668f067e242fe81af5b65199405fd1d1"
  },
  {
    "url": "assets/js/55.6559eda0.js",
    "revision": "7088510d04ebd36ea9100e355faa566b"
  },
  {
    "url": "assets/js/56.49edd793.js",
    "revision": "4722c984059c53409f82f694830cdaae"
  },
  {
    "url": "assets/js/57.10fca8fe.js",
    "revision": "5b56e868f05c88c677e71e11baff2588"
  },
  {
    "url": "assets/js/58.9b5c66a6.js",
    "revision": "c291b95eee2cb1bea6c7a3cd4404b975"
  },
  {
    "url": "assets/js/59.13740740.js",
    "revision": "6d519eaacfb003f6f35cf03e1029d39b"
  },
  {
    "url": "assets/js/6.a801029a.js",
    "revision": "d1415cc3bea0e956b20646c4dc946f4e"
  },
  {
    "url": "assets/js/60.efee7676.js",
    "revision": "8b34bf0ff6eb9e25c5be3e1b37d1f4ff"
  },
  {
    "url": "assets/js/61.14b2dbde.js",
    "revision": "5faf482de1c94de87e768694b4fb2524"
  },
  {
    "url": "assets/js/62.8c208ecc.js",
    "revision": "a4b461e8e84eaa9dd995a068ea4019b2"
  },
  {
    "url": "assets/js/63.474ca2f7.js",
    "revision": "b8d35fe1756542f1e6db5f78db53d689"
  },
  {
    "url": "assets/js/64.6a27d09b.js",
    "revision": "e28e390e76c7ea5fcb929006f2266d96"
  },
  {
    "url": "assets/js/65.d529cfea.js",
    "revision": "bd078c7bd2359d3f42a83c421b63531f"
  },
  {
    "url": "assets/js/66.12989ddd.js",
    "revision": "3603ed79a163436d87b3902a37266751"
  },
  {
    "url": "assets/js/67.c44863cf.js",
    "revision": "b912f2e380d1245ed412b189a59346b6"
  },
  {
    "url": "assets/js/68.fe2b65d5.js",
    "revision": "8e7a8283ba6271c56d7ffb6290ccbb7d"
  },
  {
    "url": "assets/js/69.ea37ea93.js",
    "revision": "7ba62c304516af53e04d7f37ff48d4ec"
  },
  {
    "url": "assets/js/7.365015c6.js",
    "revision": "ef0542d828df46f273e76e6f1434cd94"
  },
  {
    "url": "assets/js/70.c9414565.js",
    "revision": "bd072ec93031b7224ac2b1d945e15137"
  },
  {
    "url": "assets/js/71.4dc1afba.js",
    "revision": "b634a1b812b7062e96dde9fa4ce321f6"
  },
  {
    "url": "assets/js/72.cd208b19.js",
    "revision": "58eb76da250865c7680d482405b4b104"
  },
  {
    "url": "assets/js/73.93409055.js",
    "revision": "e8a4f2ce74424eca5567cff9409c76ff"
  },
  {
    "url": "assets/js/74.3660f09f.js",
    "revision": "03b8e9b288eba557a7c6becb13472f20"
  },
  {
    "url": "assets/js/75.7cebf499.js",
    "revision": "5be4680eff18aba5c25ef71d50ddeafe"
  },
  {
    "url": "assets/js/76.8b79e492.js",
    "revision": "763d63a2d1f57a41aceb3b6f971c98ea"
  },
  {
    "url": "assets/js/8.9ee99084.js",
    "revision": "367f28f52c9f28dba25268a3a9bf40c0"
  },
  {
    "url": "assets/js/9.e1673aed.js",
    "revision": "f9291be28a2d3215c6bbf15bff57c7e9"
  },
  {
    "url": "assets/js/app.986157cd.js",
    "revision": "0d5ff943ed6337a23b816f6f611b4277"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "8a4395fadbb643771f5af9b0bd8bab74"
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
    "revision": "67844a5667058d88c1127e5777e8b2e9"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "08efe8821505319fa650918d67b119d9"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "1eafbb87953f19860da0fd87a01eb516"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "a4262e8ab3df311cd5444d7ebb4c9920"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "a3e333c76906578ce921eb6f75e18483"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "fac56ab77a2b9d9149af92ec7d870016"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "075912ed52575c66811409b9813ce102"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "62d2cf5a522a7ac01bd46217a9291481"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "c2499beb156e6e13956633f9a8aff6a0"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "1c3b6f1c52be953d2c4b3245a12a2b46"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "81b57649edf8c558fdad8b3896d8a358"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "468200b4217b9cec649410372035a1f2"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6aad1da0f3a98738caeb3b599b8d7f1c"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "dcc23e521459ebbb59db19bda305d45f"
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
    "url": "how-do-i-learn-python.html",
    "revision": "c214eeb96fe8da049a71beef9d753653"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "275a0ea740e9dfc1e2fffe7e9bf3ef91"
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
    "url": "tag/abstractmethod/index.html",
    "revision": "6d7aa13a0f1ac32b47cb784b5e952bed"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "3565100852b34488edbbda80316136e3"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "8206d16fdb672a7b1d7905e9bd3e7769"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "1128384c088cc670cb288e24fb2240a0"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "7cd09e0adfd1f887358c66d969166910"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "d98cb6df18019655ea8d927533ce940a"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "378a4d6ddb8cf36604f98e5cafc78c0c"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "b04b15f531356f4a6928b6c8c39f39a9"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "b7942f994d0a4f91cc37c08c1c8459a5"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "4df25c42ebc27c8d99ef81ab98100eca"
  },
  {
    "url": "tag/https/index.html",
    "revision": "cd7a3ae6625315a89b25f20729894e94"
  },
  {
    "url": "tag/index.html",
    "revision": "d380d5229b53a457e420b2b88d0584a2"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "9f9c3769ef367ecebabd74db336332af"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "7b492e6b6b4be081ddd57c7ce7e09d6c"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "2a001d5383b8aef6c5a2228b26c12867"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "5917b2350cc570f8462c9df79055f2db"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "a9f0bd95ffe556a4a1e02e3c3de4083c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "79fa2754dec50d512ea9e7d223d0c5bb"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "7d33e2cf7ed29f4088a233ac48e702fe"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "46336deb33bca7e76345f0acbc7b474f"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "8c90f15f92ea098155d5032012cea8b3"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "e79dd9515b318a6fceb02fa4b302e19b"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "e1c7f8da2b81d06dac966db29003df9c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cc30aa719be289f3e05faefd5e64c5e1"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "1584becded2e8586003ae788d194b477"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "f98a2a19b19ea6fc8d514d02c181bf8d"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "6225b4963926220ec67d69579e2e135f"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "f82759fcbf3b4968c652127f9d78f252"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "8f3c66f715abef24078d045a9496e514"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "40a27122679c2be7b0cdcb5b9cc69c5c"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "f8ab029516439acf2ed25600e93b30e6"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "e6cc859577abb348fd65153ac5e6f936"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "91e4199f9f06a3cf477ab166fa3579f4"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "656724c8d96d4768dbb80edb059a39e8"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "c123926ea921cee7fe546c987aa6b0be"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "638ac749eb4e2a1dce79b38ad44ae67d"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "2347c1f7a8076dfc399e9f6f0a0dc089"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "89ea704672a1c0503d19bb9080953fe5"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "8d885e6b1d5df40a2acb5eeb54fc402f"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "21addbf4d4463dd08f94759615e8df7b"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "57cc65707f45cdced2cb35a7ed0d3f82"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "b36422840ba797b7191b008133b892b3"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "a4af9e69cfadb827ae0dbc22b8fc8c48"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "30afff33c0b583ea439761a67dad03df"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "90a4a01b34e34bd7fd7cace5ec4af5d4"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "a792fc33d69e9108092ba820d65cc872"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "4926ad64c349e5b8df1364b592aa21fc"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "1ca418fffc4a5a97c087fd41779a5b8a"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "1ef0a4b2d0a07ae11397dffa437bdb09"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4edf22a98d1797a27f174e762e9cef64"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "6bc3c46e7639147ddba7270b79e05c7e"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "e5432bb54948e0f2f5b9d1d227846084"
  },
  {
    "url": "timeline/index.html",
    "revision": "c056e8b472d6bbe03d6ab2177d480a52"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "dbc4b2d6f9bcd82ffa218efa92b9b7c2"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "8b34038c770cb7bb84e7c15337d3e0ad"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "1851a5112ee36408b27188559ac96bb9"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "22d31def6cb7781b8c1a0e5730d6b739"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "80b4d7b749c5e0d29d2d66b91e717364"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "8aa7a9561723d0c11c0535caea2d573c"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "6d2815c510b8a5f455aaf54f5420e027"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "e577f6b1730cba94d2d3922811981f62"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "de96940f7b30fd59c595c7e3c2d1de62"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "db35e3bef078746fa08e976864a48c3b"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "c2c2cfb1c7600e259d3343e97c87cd0a"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "c79310bf7547144a172db79190e662a9"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "9784178a14f2e5deccebdae6c4de231f"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "f58cb05325ccd5333b52c3a00c3c4d42"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "97bd0e34bfa08242aab168b14ed223cd"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "d9ed7a6bb9dc99dee663a9325e53dd7a"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "11c074cc7c28c6b9e8e0fef4c95fafdb"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "7765b5d62ff572ebb892ecacb2dab473"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "73af5ada7528ad9201c719b22fefe2b4"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "8d6b819fee652ca7642169a7ecd116b0"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "c2d85fd791aa82c7786bc2c23e2ed418"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "307c4cf5d6bd55227dbe1c24de511174"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "3a5a0b345280e55c36f52376ed7f65ad"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "e9c39a98b834b3384fb57a7cb4c8ab79"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "fec46cdd645d12d8529f257d5f120760"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "df386342c460c04f7f319f0c461b9266"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "93d5f3145eaea05ee2dd71a773ce2d3d"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "0a3a788537749efb35797fbdb475f065"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "2e22e8b81e5a4ce15138189a57bad8a4"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "543b77477c123d9bbeef9b60b3bb1064"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "400de01e78f67adc2ebfed98aba55361"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "9d4a8f3d0473043f9a3f4b3dc1a6b14d"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "739801f87a3e8e1a29b82d42ab0d7f40"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "afe463c5ef9e8d8dd0a2f27677044231"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "a6eca8336063754d62b7c6d4e9d12186"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "fe688d4444265cdda4ff8cfac1426cca"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "46747d094790e238bc2fabdf3e82b8a4"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "9ba36265652426ff1afca59c13579a83"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "d6cc1a1be01b121292c84b2b254ff60d"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "6d57fb4c1b5d3c179800be5370ca5269"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "ca3b3b7066a16a60305c3fe4269faa69"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "2f27848d8b4fb7a2d48b33f005c667be"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "eadf0d6c3aa75c8a76a7609fe095e885"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "4fa899c5af92c72fa8ea2a81c0f8506d"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "97ddbdc471716523ccf55ea43de2f619"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "4a143c34c6a12d232129d85222cfd905"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "2caa2a214aadd3bd81eeac03651d633f"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "984be8155b48c16dc8c70f343b12425f"
  },
  {
    "url": "views/index.html",
    "revision": "b1b8a554684d08c0944e9f2ce2e93651"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "4740461d2cc146297b4b8513bcda7577"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "5d1086eea441333463becefc760f1a8c"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "61ee7f9cb647f0efa6307c4b0943eeeb"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "706185859ccb3e36ad29c62d9d7574e3"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "dffe116ba33918bbb61d769d63ea43a0"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "57f35aea078d3e04411e070bf8135892"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "48ef55850ff7f261e4e33d02786e3cc6"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "084c764f29f675f4686d352b95d9139a"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "a4808f02f3f4927c3e91427987e6df2f"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "4870b6ea794dcb64ec3b4322537430e2"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "54bf59234a57e75accd76c0213e0eea5"
  },
  {
    "url": "web-scraper.html",
    "revision": "20dc1b26eb252cffc387e464994208e6"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "7cc0697d858193fdeb315c6ac1cb9761"
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
