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
    "revision": "09ab635e29dc4a47b51d7f8915f9b58d"
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
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
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
    "url": "assets/js/1.8dfdb017.js",
    "revision": "aa6765b77cd492722baee01b0198dd5c"
  },
  {
    "url": "assets/js/10.847a9020.js",
    "revision": "73f35838e0458f02bdd288f319f3949f"
  },
  {
    "url": "assets/js/11.be576c66.js",
    "revision": "059c6d73de777e1746b87d363e0a0ae9"
  },
  {
    "url": "assets/js/12.2187a314.js",
    "revision": "0b4ec4f7c208c01d3841337948bbfad0"
  },
  {
    "url": "assets/js/13.4bd15230.js",
    "revision": "7b2b4f0dff955ecb66af63e5f33646c3"
  },
  {
    "url": "assets/js/14.cbafd953.js",
    "revision": "8d8078d0a2198c7287d578fb32717b51"
  },
  {
    "url": "assets/js/15.62008364.js",
    "revision": "e295d5e698b4da7705c115476a72c1a0"
  },
  {
    "url": "assets/js/16.595a21ed.js",
    "revision": "25ff51a3d1e280cc67f84bb850b76ca3"
  },
  {
    "url": "assets/js/17.6546aa12.js",
    "revision": "2eacde841370a7e38ac686be27ff8a44"
  },
  {
    "url": "assets/js/18.65821732.js",
    "revision": "43042eded9deab26e50697a413307618"
  },
  {
    "url": "assets/js/19.aa0c92de.js",
    "revision": "0d94d0e0e979f2863d18fc19534199ee"
  },
  {
    "url": "assets/js/20.c51ca484.js",
    "revision": "5c82836af8fd0b1c460dae2703026eb3"
  },
  {
    "url": "assets/js/21.65e00322.js",
    "revision": "d212def7cf4cdb7ce8bfc6b509b2f522"
  },
  {
    "url": "assets/js/22.650680e6.js",
    "revision": "bc10bea693618e397fca72990350f8d2"
  },
  {
    "url": "assets/js/23.8203c206.js",
    "revision": "fdcc8172183596abff500ff5ca015d88"
  },
  {
    "url": "assets/js/24.2f64f6d1.js",
    "revision": "064de3ba3768d76c9d210aa8284de441"
  },
  {
    "url": "assets/js/25.9c3292a0.js",
    "revision": "df6638a580197ee28db98b29e5ec762c"
  },
  {
    "url": "assets/js/26.a0ee3add.js",
    "revision": "21cd95e134c32a4cf73d5e2cdf08c415"
  },
  {
    "url": "assets/js/27.5c9bdb62.js",
    "revision": "7d292eb98aba63fec5230ef5f44cdad7"
  },
  {
    "url": "assets/js/28.cf294692.js",
    "revision": "1162fe369aec05bce68cd56792d2a5ae"
  },
  {
    "url": "assets/js/29.3184ec29.js",
    "revision": "51659838417a67f370bd90f1d48f9621"
  },
  {
    "url": "assets/js/30.a909ba49.js",
    "revision": "afb3730c731e97a7e1e45102c3378ed7"
  },
  {
    "url": "assets/js/31.e3344c36.js",
    "revision": "87183569f082c25568fb2e09a113195d"
  },
  {
    "url": "assets/js/32.f27bdb68.js",
    "revision": "a8823ea9701fed6e38b91ecdd29ac3a9"
  },
  {
    "url": "assets/js/33.795db67f.js",
    "revision": "513ac8cff850019a9a2b2d0be36d429a"
  },
  {
    "url": "assets/js/34.d0449716.js",
    "revision": "6c9356b03e8d083fa93fa2c5b293d40c"
  },
  {
    "url": "assets/js/35.a0c790df.js",
    "revision": "aec99b245e7abcc40a6de726ac39919a"
  },
  {
    "url": "assets/js/36.817495f6.js",
    "revision": "922cbac72399a6b90810708130ce6c14"
  },
  {
    "url": "assets/js/37.cd29ee2f.js",
    "revision": "81794b432a73e216f31d9c63bdb68a12"
  },
  {
    "url": "assets/js/38.29c6830a.js",
    "revision": "09f83e62aae202c1450d8bd55e1386fa"
  },
  {
    "url": "assets/js/39.fe4f58ba.js",
    "revision": "715387f36b6ad02a034831448b028045"
  },
  {
    "url": "assets/js/4.4d32e994.js",
    "revision": "c109df93bd5de05b6939cf61d78f9a88"
  },
  {
    "url": "assets/js/40.9a2a72a8.js",
    "revision": "e70b2bec591bc4e3791f833f738fbf78"
  },
  {
    "url": "assets/js/41.4c3009de.js",
    "revision": "84de3d9ed74bcf2f20ef982fbdff302e"
  },
  {
    "url": "assets/js/42.a147a351.js",
    "revision": "588beb43b7f37ebbfc1cd195856f6f93"
  },
  {
    "url": "assets/js/43.14a42f85.js",
    "revision": "6e772d35871cd5b993a4c5f3aa911ed1"
  },
  {
    "url": "assets/js/44.dd2787f2.js",
    "revision": "4ca75ee3813d179fe73d6709f04e3c75"
  },
  {
    "url": "assets/js/45.695a99ac.js",
    "revision": "6258a3385c665a561489c356805e037b"
  },
  {
    "url": "assets/js/46.4c815a95.js",
    "revision": "b0a6dde79cdf255878c488da35b62c08"
  },
  {
    "url": "assets/js/47.40274cf3.js",
    "revision": "d3e711ca47704b9f0cb5cbb53a703167"
  },
  {
    "url": "assets/js/48.477aacb7.js",
    "revision": "6e7f90578eba849a7873cf819ba7ced3"
  },
  {
    "url": "assets/js/49.2ccaf1d1.js",
    "revision": "637cd4fbb96631f6f3792ded4488efe6"
  },
  {
    "url": "assets/js/5.e8ae2c9a.js",
    "revision": "23bd40108bd8a88b1abfc1ed82ff5e43"
  },
  {
    "url": "assets/js/50.033553e9.js",
    "revision": "a931b613b283ffe3f7c3623972343062"
  },
  {
    "url": "assets/js/51.fdb6c7e4.js",
    "revision": "c2c82822d4a01bece101372b60fc2ffa"
  },
  {
    "url": "assets/js/52.6b841327.js",
    "revision": "bafb45922f7edee7e0255e165a97a525"
  },
  {
    "url": "assets/js/53.d5adec32.js",
    "revision": "f88e9a945127f3396791e0cbf3c5d4b5"
  },
  {
    "url": "assets/js/54.609d465f.js",
    "revision": "c17c0d4baec120e0323fa90ce131dc5b"
  },
  {
    "url": "assets/js/55.2a7758d7.js",
    "revision": "28666bbf1321114b014672dbead9f7b0"
  },
  {
    "url": "assets/js/56.905d7253.js",
    "revision": "9645e22b7a636ff04bc1963f4989552c"
  },
  {
    "url": "assets/js/57.f6cb75f8.js",
    "revision": "f2f9c9c3a90dfdb24a5bfce7b8685164"
  },
  {
    "url": "assets/js/58.bee23369.js",
    "revision": "8cde53e778f86e3f340936536db34176"
  },
  {
    "url": "assets/js/59.60d82dc0.js",
    "revision": "9fa097c3add9d99cb7e8c670feea7ef4"
  },
  {
    "url": "assets/js/6.6642d6ce.js",
    "revision": "87611bca87e25f6fdf43135bb94bd73d"
  },
  {
    "url": "assets/js/60.7217e75c.js",
    "revision": "12c8692000cc5d5965b718d2aedcff43"
  },
  {
    "url": "assets/js/61.479c4204.js",
    "revision": "3ff4a94fd7dc7f75fb7c3f42dc17322a"
  },
  {
    "url": "assets/js/62.ac463709.js",
    "revision": "06b1e8415951d4607019c3b61198ada5"
  },
  {
    "url": "assets/js/63.b32259a3.js",
    "revision": "a48567cab83646d601819255c0aeb7f9"
  },
  {
    "url": "assets/js/64.4f324e5d.js",
    "revision": "82f886cbe1076a0f892d8299bff10fe7"
  },
  {
    "url": "assets/js/65.2f203445.js",
    "revision": "c5e22af8b2b0c06581990360ed27c54c"
  },
  {
    "url": "assets/js/66.703b6b7c.js",
    "revision": "280013406d65e2770c9a1b6cd294a285"
  },
  {
    "url": "assets/js/67.41addb8c.js",
    "revision": "eb5880c8c086d1838f9080c6d0dd813a"
  },
  {
    "url": "assets/js/68.a134f715.js",
    "revision": "bae436577f189f1b6f2a92d413e84512"
  },
  {
    "url": "assets/js/69.4fa7db85.js",
    "revision": "16d8592ce199563d62eeb89ae6909886"
  },
  {
    "url": "assets/js/7.09e99e71.js",
    "revision": "5cdfa1949a6f542c09507fb8730c74bf"
  },
  {
    "url": "assets/js/70.e94d740d.js",
    "revision": "d6c7c30b64b77199247e7cf660da4f08"
  },
  {
    "url": "assets/js/71.d348b5ed.js",
    "revision": "a4d586511e606153a71e24d2df294a28"
  },
  {
    "url": "assets/js/72.90bb588e.js",
    "revision": "c47291d702db754a8faa568460f44e30"
  },
  {
    "url": "assets/js/73.1a3639bd.js",
    "revision": "777cd08cc5fd1f7eed5146cfb3f3230d"
  },
  {
    "url": "assets/js/8.da7e7925.js",
    "revision": "08df6067dae33ee6f6b4af117a04cf48"
  },
  {
    "url": "assets/js/9.fde3d6fd.js",
    "revision": "0fab12083aebf5934e4fae17cf292053"
  },
  {
    "url": "assets/js/app.9aa36a8c.js",
    "revision": "f68f57caf964a42fb8f9928852bbc462"
  },
  {
    "url": "assets/js/vendors~flowchart.5391431f.js",
    "revision": "6c0b4ff8a2df1da7c576c736ebfea715"
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
    "revision": "243eab71fe8db3c581035a0dc0ab396a"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "ffa928837c87a3fe4a5d2e55dacd3067"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "cbbeaf856cbf127a3f4f2c6ae5437149"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "def1e7d2ba243dfa843b2e742edc6c52"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "8abf691f9f1ce5603283a0abb8a1f285"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "13ff5434465757b6e280087e56804de4"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "d8c58f88047800c177c03b6d7c0e1f25"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "276377a5f797fe9290149291b1a0e481"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "6e122f550dddc7ca3616ba5994ad2bb9"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "abdfe2bc445dfa82d0a7af6faa0ca4d4"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "18134625e92c0768460eeed6d001cbc9"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "d0c08bad4a94d54e4de1685d63ce89df"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "11e0a5a4e6facc2ddb0c23cd8879e32c"
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
    "revision": "d0d93ce0aecb0d5411124fb691de06df"
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
    "revision": "857fbfed6f5cc5222ffe6b492afd82be"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "b934606c33ec8072f1f9aa8cae57671b"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "3358e639cfe4f4a4d8ec59ed44e8a064"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "3196a41952eb34cc513142dac77b7e9e"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "c0151a43d95ca6625c662c094fea0b0a"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "ae0e02069fb214e508bdbf0fb63b2c58"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "888f99e5bd80d64db1527501ef17b272"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "8f9ba91c6e62f961cc48dd57c96fe983"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "26a83161f8339353b57785649ff921eb"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "5d719361facb6c341aab6f0250a98ef7"
  },
  {
    "url": "tags/https/index.html",
    "revision": "a65e5f26d0f880fe1881896b80881268"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "d38cb7b71a9821a9fa83301ea0e90a1a"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "e7c152297716c4df71bee14a8df2b2c4"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "3b71a66d2eb90d6bd5ab306677447d5c"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "244ceae4857aca5705c077f30a16063c"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "ce5af42e06a93b5e8ee23a74fea83f78"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "c3ad06489668250dd4cf074278fc9a3a"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "34128fb4e3a15b362e6d58f4f543a1bf"
  },
  {
    "url": "tags/Python更新/index.html",
    "revision": "b868f4c373179e129c2b53599bc6d234"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "c4f734328c81415bb391f8f1829ec12f"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "a4e15170aa98ee194def7f500ca9404f"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "ec2f11612036c8029d6925619f0bfd90"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e6f2b1c663801453474849aacd787fe4"
  },
  {
    "url": "tags/Web Scraper/index.html",
    "revision": "61d4a6339cf2a66ac9b8a472e389cc3d"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "691124fe25fccde444e43bf1c9332aea"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "b007531c7d5b5666427ec7ceb833f82e"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "66fc50a1ee1ccc75e91443b895c7ac0b"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "c170c6a7db5bfa708f0305dde3d96765"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "79c73bd1040db6aa95a513916dbf4015"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "318bdbeb5e49a98b067d7a881ad32800"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "64d18e784e4a73bc28ee2aeb6c166812"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "cbe10a2307281456f310a81ed83abeb7"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "1ffe4d2ad302a9e4065c98e1bd35d84a"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "3c5de60b5555f8426180e636bc840d81"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "13b2f3e1860e701c861d20d2ee51a7bc"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "0218cdfa6b1fe8bfd97ba5cb8ba1e32f"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "73fd5ea7279949600e8f99364e478fff"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "861d386acbb82cfae6a2f8bd14abe81b"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "d821f268da6532e91d1fb604812d05aa"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "bd5b388d57af7b4c7c8a2253e662a69f"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "179333b831d3f8c987b96e4eee98d708"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "2100c9227d2967dca74d145b2d29fb37"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "7780c8b4525ba321a2e28a87d3706a16"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "af00dfb5e1e9f0bc554b35a36d22c05e"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "f1077380c649f0b0599738e2359524f6"
  },
  {
    "url": "tags/编程技巧/index.html",
    "revision": "c8f543e49762c107fba724b315b50816"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "f11aac0a1a95022d845dac8582305f8b"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "275054d2d3916c08671f8f085c99aef1"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "30cbb7ceae3a2e3f6bc2f451015f8f0f"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd2fe87de8c2302e9be70eb84137ad34"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "ea9348c565d88ddd3e9c631b3ef326fd"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "e94ace348ae833a2fe08c0b93e00aa71"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "2777dd5b5d8bfeca67d3bc57757b4460"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "7bda20fca85389994d36f41e64fd122a"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "36e4cba165f7c5d7c62a5fb53c1b63cb"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "df880f9396d7e6e7bda14df0c0ab0c98"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "ecaed341e90e9638f13618159cf809d2"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "17e26855e0f440a85631f15ff767ca77"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "2af44a96299a8ea43dc84cf34cff7b13"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "29dca927ca4dfe1bccd2d1669fcf6f5d"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "e8786c5beb4cbbcbdb46bac1830ec159"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "0b7fe5e679f9a253b3e023831c9115db"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "70f6286983e44ee548e312697cb2b968"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "4f39ff894ed2db9a74c5c0fd16de5357"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "74e76ab3fddd7f4912a95daf17b0587a"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "aa1a11d3c3102b77305cc6162174a2bc"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "03095e59b748b13aa4bdb440e78e6727"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "0ac00a19adda322cb3f65ab92011d4b0"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "6023ca52d5aee38b456934bff25fe997"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "3282809ebadea5ed89cfac9a0a67bfbe"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "96c21c715d6b0576e768a3f780c4593d"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "5b977744e98fe2b0dc363e2d2735049d"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "62b5b1df57f140a8ab6f3260fb4d5c7a"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "82bdd5795b97ec3ec8f95bb90ba6f2b5"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "60ac7b08b534dacdf5fa68684a28a0f7"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "6cc6728417386843e8f4368075477d6b"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "a820e8a6e4bd6333994ac661494962af"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "a398e72f0ae3d66a628bddb32a9e7ae6"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "66917d5b5dd6ed3d16dfdc66154ad032"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "11bd3a34c79b995da796acec8c9417c7"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "68d16e0069247ef29022d6a54a942715"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "1e5555e1795db2f72998ad8179a9e1ad"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "7e307bf30df81e229b4888c0b44fff1a"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "5eb87e71a1019f465b63c0004e545f62"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "d483cca9e785c81c103166e233f2337c"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "75656ff77f3dc240a4ceff606998b2c1"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "18cddbcc65bec4fd2b20d4e64637aee5"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "b54e416477799fe22b083297ce0fe285"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "b5cff18a160358335d04d8f71717e0c3"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "04b9bad28e4f5eb14f399be0f2af6a8a"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "5f8227b5c4ad6f0828266aa0dd8aa60f"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "e93f8aae741e61e5a1da49e8e8d676a6"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "ce02a976f7994a6a3279b9a2aac23152"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "2517fde8c1830b53ffd492234e1bb0d5"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "608f0ee968588574a44cc99159cd9684"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "c33cd4ec40dee1da2561c229dca9d52a"
  },
  {
    "url": "views/articles/2021/how-do-i-learn-python.html",
    "revision": "e84c588e113e284c8f6c7e452b6bdc95"
  },
  {
    "url": "views/articles/2021/web-scraper.html",
    "revision": "c07a85f7a1d4148380f5739ab0e22192"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "a6d39adcc79181535cce702ad5ad0def"
  },
  {
    "url": "views/index.html",
    "revision": "605d5a6fc0faee9dbe939718e6dc8465"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "05f721a4359ec9ee8f6ef84199ebbb47"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "c154af96f73def9cb65926dc472dac48"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "b905226139fcf4348537d49b774ee9ff"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "c20c30e8ef2776542e6abeebed8c4f82"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "425a6449048a0fafe5fbf3f184d0377a"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "7d2a9829bfcb30432db3f729760a7665"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "25f4beae1f53a32d6020f59c64963e5b"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "c6fa2b1399c01de02d7ad16c1e951421"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "cf0776e0e9329a84a32cddcffd493d48"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "ae4bdb2558bf05b55642098d834d13fc"
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
