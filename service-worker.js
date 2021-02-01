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
    "revision": "ad7d0f79bf467d16380dcd6fc5085c38"
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
    "url": "assets/js/38.bb335d7c.js",
    "revision": "ad11b07df52e299d46227207e403bfdf"
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
    "url": "assets/js/app.a1e12fc9.js",
    "revision": "a5f9d6d350868f8afe146f488204d8e6"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "2b515d7113b348035c03b6f6ceed5801"
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
    "revision": "abf658c145e6347343ddc54e292a975a"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "2f4f004f16f24005f0ef15eff1125c1d"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "71703193839df4a5a194cf87027a3bce"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "390f2d204baf03307cc72de6c8f2c604"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "cdf8e637d8b36cf34644cf14451a91b2"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "a3850505c3688f7420f76e72688a46d0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3ae326e984d8ffcb09b6b542cd5de21e"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "6ca5dbf0ec711eda5cca04a4b08e05c1"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "91cddf19e9b11c72db7034dac4e34eb9"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8eb2a8a6b68f90ce23a3e0a125950500"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "fc4ecf42f95307878b27730bf35faa07"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "81a4ee4b8f4f046d75e047b5e71e7645"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "a91300564d7ba429b4e6cdc01d41015d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "c2b9b3ecbaeb1ef3a827ca1ebdf01d9b"
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
    "revision": "cf4004ddf259417e4b7c956a0d30692f"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "181dd2eebac703bb6fd2d52e217c4315"
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
    "revision": "876eaa50043ff7538361786df946c7a3"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "a356af579cc5824796f1cc227d7bd8b2"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "38708e453b1bd10a938952078e335850"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "273111357ac306a4232defd10325291d"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "0f5edee78bafade568ed84062bf67a22"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "a39acd13d3caed1064f1050c026316d6"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "083e697c27274232933b3dec192c5d80"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "cdc5018526471928a0e94565d2b4f019"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "a45b64582a9a8357b84cc651e924c470"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "cbbec05eac1a9fd5175192873d08aaba"
  },
  {
    "url": "tag/https/index.html",
    "revision": "da6207bcaa14f78bbf60fe4b6b351c6c"
  },
  {
    "url": "tag/index.html",
    "revision": "36ebbed8ce3f376b02c7217a611d522f"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "6e42cac3180909a82d9a44339a05d9e2"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "f4893882815d7a45ed6e564a3c41de8e"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "b3e5a42cd76c07fea9ee42a998b008bf"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "1d11edbdc1f35c1ec17833d3f6d5cbf6"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "d629a2fea5ed951ffeaa3ed1ff490c9d"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "7283ea730acdbc601c4c5021c0a74c25"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "f4a6e12dca1b3fee0abbc279f531fd22"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "1d5819523b80f78f333c108a4a8f81af"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "7d68a0ab98bde4a8f87e8b2d1b9b5b40"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "d6cb1394038431efbc24f4af5bada11d"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "00492732074a17e282faaf9e3c9e1e5f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "05ad4650d9ddc7a6876959a0c7cbb4a0"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "1cae4fc6627cf9c4bd164c1b63bb0f10"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "cced0ea583b243eaaefae9fca073ae0e"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "362e1a9987c49e600899e480bc44aefa"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "1a4834ba702dfa4b09c45567a35cfee6"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "26e6298d5336fc1c6afed04d3d74c1e6"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "961cefad9e54a7f491007e3be461c3f3"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "ebf41da5f0502cb23668bb33cf52012e"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "f62a83128b6b6badad34e565211373d8"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "77f3b3006064932f7bcc2773524545e3"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "75b5c59832043bf69c16697358ea355b"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "43a77e551277f2cabc2ef4afad4e9936"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "51e8262a37ab4fd5e19ba6d37ce8aac5"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "4a4ab2caa6d04339aae39bb0e1b93e50"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "0f88287fb78758d5365ba22812dab813"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "2f3a4da23dcc2c38b38fd640fbf0822f"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "3671a7f16f30ed40044f6f3ff9eadc22"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "ca94ea5b897cbb3a096fd298482250d5"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "443917c3d2d969246861ea0e1cd6b5e4"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "1ed07e7be03692aeb4050fbcf85d2f1f"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "d92666e724318c42f226a764f4ea7427"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "364dc574d1cfd76b8863c3b73c900814"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "59225215de3cf74c2f26500f80ee91b8"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "f1f8076a103d67cf0145e37a52f2674f"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "e4975a487ad6a7528ebb500f4203bb63"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "c06603a1ef1a6a4654191b2b82de56e4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "46c74b6b3bb446ab165c2e453738092b"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "94cbca47f8048b474f8980fdac1fffbb"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "db8706467a3b5348b19455e9a0a3ee2c"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a4ffce72e62a80de625183a603a0918"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "866a6983c9020fe3e3133c24886907bf"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "532c08ada084e413acc18b6976860e4d"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "3e57fa56661c5c9d5533567b56768523"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "d7cdf324d5a96a080c4ad4def1230de5"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "34a8a2affa7f88a28293e7f2e0afdcaa"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "860b9b3ebaca6e349b12219ec11f0422"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "07290a3c20a730a783f2bddf2ef80f70"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "e5ba46f36edd7ec043c6846c92a06682"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "f723804c3c164a17321b55c372014adb"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "f2e8c9e85ae799292459d4198e37c7c2"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "258c681871031d036248743035b2226a"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "802a24a5ecd98cd4ea2f935656ff691c"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "79ec1c92f34ba536808bf7ac682da6b6"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "3ee8ab7893bca9ed58199864d7fe3f3f"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "3059cbad58cb0e74e4089498d2ccc9b2"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "d27f15e6b699cecdb8f1cbb46021c49c"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "aef16aaaf2d8d17edd46a6541691a4a0"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "82ef177e202789b2925f488eb36eea0e"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "db8d10f55378a4e9569e022080e6944b"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "0183bde751d2190508d676928a1bc785"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "77925f55a2085c6c14306978c6779318"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "1fa73c4fe67059e0ed92c77d7fd2b01b"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "15a4fd77ec616ed02e09ce2f5581178e"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "c79bf5caa0efe6fb545dfc17c798453c"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "7aec7477cf78a803d632e1e042e6430b"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "11577d9c998890b2662f1a8f21bfa3c9"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "2a960ace158d4e375fd8d30e14e1f931"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "873b882568e16796bb765118c03ef77c"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "8b072f00b34175c321511b7680fafaeb"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "09c0731d2e0d95e566afc8046554e206"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "4fef5b6ff12b8b3747f5726ff323bffa"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "3b809aa91e81a520bd9c5fd3aeee1f11"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "dd03e3f144743d191d7c99cfb47fcb3b"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "5e176f71ad3e8091ddc2f649b940434c"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "2763e45d30c2b6c4d867acbe955a7075"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "f24e4e0e7af97a1aa4f25f6f5630ca67"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "cea3a78a89121794380c4f49ec61e7fb"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "190ad5c9a544672ed61851b8fd9c1b43"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "7823b5e6d013d0f6a556f8485030a102"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "b99de463ce02e56e4b257c3d65aa1012"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "d0d3a853220e5d7365802dbbb05783e5"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "1f50489c128b95a254dd26b9fb5236ef"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "4cf87adf27e989b722cffc3134e8c4b4"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "58b5443c17d654f92577081d5f87ec9a"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "cf572b7d589f12333dd148891e37d870"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "f26f17c84fed5fd933df8bec2894904f"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "7230863dee96c2c194759b8aee613ce5"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "804bc9b4cd3dfbf6b8969333a3910e75"
  },
  {
    "url": "views/index.html",
    "revision": "3332c5bf3b3f8ca467c2498444b6c49b"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "ce5cc1dfb2791e8c6579c32f9ce43388"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "d0cc6f8496843d88aeeb31ce44c77f7c"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "e8ce9d8e041f5c7609b11e2f3eb7dce0"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "3ef51939e9687850f515179facfd2df1"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "a93d203784fc38128d29243239430cf7"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "474c48918ff19ce176d5756e5c918874"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "2c70ab595d9b8267dac5f9037e03a9d5"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "f1f9b4273f43f049bc87ed2dfe02fc8f"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "57980bfea724972efd90eb65b291654e"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "8e9a477d8d330cf131a86976e9ba4f7a"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "a9336257456fb84e6c13584085c5db2c"
  },
  {
    "url": "web-scraper.html",
    "revision": "c6390f01f40f0a1a7ecff584647f14c1"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "c6490f35ecb6d3ef0e909b07630746fc"
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
