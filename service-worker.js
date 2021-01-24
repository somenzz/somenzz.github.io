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
    "revision": "8ed393c333f2dafdedea7c5de6074a83"
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
    "url": "assets/js/1.21a02de5.js",
    "revision": "aa6765b77cd492722baee01b0198dd5c"
  },
  {
    "url": "assets/js/10.52497c54.js",
    "revision": "edf194e6365230b2687508e2ca033e4d"
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
    "url": "assets/js/15.2db14191.js",
    "revision": "4793da7c10a58fe618ca0838a517f7c3"
  },
  {
    "url": "assets/js/16.71178bed.js",
    "revision": "c1f54678903a96151f2e23d1a95cdb25"
  },
  {
    "url": "assets/js/17.7c426a41.js",
    "revision": "4cd31ebdb32068ad0383ace66aff50fa"
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
    "url": "assets/js/20.eeb21db2.js",
    "revision": "451f37dc24bbbd55bb4bcd5002e41e10"
  },
  {
    "url": "assets/js/21.78525960.js",
    "revision": "cc3b5a2c39b30e297c1620788f0f325a"
  },
  {
    "url": "assets/js/22.ca69ead1.js",
    "revision": "fe6357e41aef0e7c96a9a9e3700ee60b"
  },
  {
    "url": "assets/js/23.ed174082.js",
    "revision": "ab2a412dfb5a1be0a046573184dfc654"
  },
  {
    "url": "assets/js/24.ed11539d.js",
    "revision": "62e53927a77588bbe063d52f0ffcc537"
  },
  {
    "url": "assets/js/25.9c3292a0.js",
    "revision": "df6638a580197ee28db98b29e5ec762c"
  },
  {
    "url": "assets/js/26.e020912c.js",
    "revision": "a3a6fcf2f3a6d9adb1abc9c5aabbbbb9"
  },
  {
    "url": "assets/js/27.5f583ee6.js",
    "revision": "37bcfcd0f87d254e61a513f8c12bd2fb"
  },
  {
    "url": "assets/js/28.eabd1ff9.js",
    "revision": "c5c8d65a3f4d0b8edf7af0076c48d1bc"
  },
  {
    "url": "assets/js/29.d7877f08.js",
    "revision": "d17249208a977e6f07d44fa1cf9d0a06"
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
    "url": "assets/js/35.ff73d151.js",
    "revision": "d1ad0e401ca9198d389970623752319b"
  },
  {
    "url": "assets/js/36.6a896349.js",
    "revision": "c59382a3e52a6872405ee25d95549373"
  },
  {
    "url": "assets/js/37.dc5cd219.js",
    "revision": "40cd37b7d6fd67004d704100e0619144"
  },
  {
    "url": "assets/js/38.2d7542fb.js",
    "revision": "9ffcbf1a2bbabea745029837aa912cd3"
  },
  {
    "url": "assets/js/39.fe4f58ba.js",
    "revision": "715387f36b6ad02a034831448b028045"
  },
  {
    "url": "assets/js/4.5cb07fe8.js",
    "revision": "c109df93bd5de05b6939cf61d78f9a88"
  },
  {
    "url": "assets/js/40.9a2a72a8.js",
    "revision": "e70b2bec591bc4e3791f833f738fbf78"
  },
  {
    "url": "assets/js/41.0a687d18.js",
    "revision": "ed5da8669bca2ecf6c1f7077b6311f37"
  },
  {
    "url": "assets/js/42.8e23baf1.js",
    "revision": "41298ec3738ea8256f64c4c4756f845e"
  },
  {
    "url": "assets/js/43.a84776b9.js",
    "revision": "452444dda375d6f0afee5783cdb1031d"
  },
  {
    "url": "assets/js/44.bc31ebc6.js",
    "revision": "4ef7e257b3a5ded43d87c756ec2e2dff"
  },
  {
    "url": "assets/js/45.695a99ac.js",
    "revision": "6258a3385c665a561489c356805e037b"
  },
  {
    "url": "assets/js/46.9395800f.js",
    "revision": "6da33e8f05a506c2bc19fec407ebcc9c"
  },
  {
    "url": "assets/js/47.40274cf3.js",
    "revision": "d3e711ca47704b9f0cb5cbb53a703167"
  },
  {
    "url": "assets/js/48.50a23199.js",
    "revision": "306865850eea6c1dd7c811bbd909c9a3"
  },
  {
    "url": "assets/js/49.fe5cd111.js",
    "revision": "49a5e408871d5f93ce2d7bc2de3eef42"
  },
  {
    "url": "assets/js/5.d9fb7516.js",
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
    "url": "assets/js/54.04d26056.js",
    "revision": "f6c5bdb0fedd758ee179d7c0f012d573"
  },
  {
    "url": "assets/js/55.ac9051c6.js",
    "revision": "cdfbe7c44c2e9a2e9e5f50f70cff533c"
  },
  {
    "url": "assets/js/56.905d7253.js",
    "revision": "9645e22b7a636ff04bc1963f4989552c"
  },
  {
    "url": "assets/js/57.6f627d05.js",
    "revision": "96712f69527b8a204803fd9e29a7f803"
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
    "url": "assets/js/6.23f52f6b.js",
    "revision": "87611bca87e25f6fdf43135bb94bd73d"
  },
  {
    "url": "assets/js/60.6dc63ab8.js",
    "revision": "552d8bc67a9ce2b420f8a3fa7d5508ec"
  },
  {
    "url": "assets/js/61.4522d103.js",
    "revision": "0309f34ddc2a294a36eb38ef9d97abb0"
  },
  {
    "url": "assets/js/62.ac463709.js",
    "revision": "06b1e8415951d4607019c3b61198ada5"
  },
  {
    "url": "assets/js/63.0aff4260.js",
    "revision": "5cf4f8708a30b84ab09c9d8ff7dc396d"
  },
  {
    "url": "assets/js/64.9a76f01f.js",
    "revision": "4677e4a05a94c6c2961c7fd76a18202f"
  },
  {
    "url": "assets/js/65.986cae41.js",
    "revision": "f0470d66693db66f07edf6e0d89362bf"
  },
  {
    "url": "assets/js/66.d4068ec0.js",
    "revision": "aa566372bf8a3bab011dca89f93c5600"
  },
  {
    "url": "assets/js/67.4dfbbc5d.js",
    "revision": "16b9b8f7bab3752093d8e3c9c1e2e449"
  },
  {
    "url": "assets/js/68.7a0fd719.js",
    "revision": "fcffccdb92f4f377bd1d1be05ad6c8bd"
  },
  {
    "url": "assets/js/69.216d25c4.js",
    "revision": "60674111784d1b35bf341c6316b81f21"
  },
  {
    "url": "assets/js/7.09e99e71.js",
    "revision": "5cdfa1949a6f542c09507fb8730c74bf"
  },
  {
    "url": "assets/js/70.e91c990a.js",
    "revision": "d37fae0ed2f57945a9438d5d9df91ef8"
  },
  {
    "url": "assets/js/71.6b25fcc6.js",
    "revision": "f92c1c0ea7b27ae2ba0a6549cba74fb3"
  },
  {
    "url": "assets/js/72.d3f0ef5a.js",
    "revision": "53635c8a7fbe29b59a2601ef4e48fa2b"
  },
  {
    "url": "assets/js/73.1a3639bd.js",
    "revision": "777cd08cc5fd1f7eed5146cfb3f3230d"
  },
  {
    "url": "assets/js/8.3191ef4a.js",
    "revision": "0c78dab8e6e2f3085b43c6676396e71c"
  },
  {
    "url": "assets/js/9.242e5915.js",
    "revision": "99db76dc0f85849dfba04bbebc1f0dad"
  },
  {
    "url": "assets/js/app.d79da332.js",
    "revision": "b12fa6f529b8d3455ace7789f28642d1"
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
    "revision": "2b5864e7c7fc2e87dea0e3002b326f43"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "5dae48b0d7ca8f6e2c7a83c5caa88fcc"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "53ef54ad92ee8f1752df10b662bd959f"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "6c1265e356470855594b563f42bf924d"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "2edc83c44b410a5da4fe346197cf4320"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a50eff2f375266589ee6e0739e905e9c"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "78b68812acabfbee2f6fc02139e3a615"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2df15a52358494e4725e1ab8f12182dd"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "0db9ba572ec3a9cc5f54c5d6fd759f99"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "e603e5eee4c7bd4ab0c09221bb678b87"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "8bf8f7852ccda5815cd7cd7930e6e76b"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6eb9d765a35d935ff842fb06f1855ee6"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "0a973c0f10d5791f2cd31ae709fec833"
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
    "revision": "8e66c11e238b8342b83fcd1b1b9afe11"
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
    "revision": "5ab7f4754152eaa87753f5d6c130e5a2"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "9ec971badfd9ce88955b2200ef7848fa"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "c4071f250b0317b06e2a7e660e1d33c1"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "ec260b99889352776c5a532b81dd7a36"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "f541d2c04efe48f2a1e13fe0fab113aa"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "0b5c99315cc3032d3a391d56d0192534"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "efbd67c88534ce4e1ec4993389ae3e30"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "6359e6222abaab2d8631fb4a02f81acb"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "a374a2de0ad1c9829d3d54ea0902a1dd"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "067d71c446594624eb9db9eeb4f8a843"
  },
  {
    "url": "tags/https/index.html",
    "revision": "c851136c637ada211b0f083388e8039b"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "fef3e49fe47ebcd0db6b3fbe2b67cf78"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "a386bd7f1cf382c583d5321e689117c4"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "0ecc90d612b06f3ba7e7e86b4e5fedeb"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "5c8c5310a75675c0e426bb3668659126"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "b3f0ff7e59b48f8e5b0d5986eded4f92"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "2e35b626887a4e171d2b0464ef7364a3"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "5bff6b25cd7afdadcadfd90f53293c1a"
  },
  {
    "url": "tags/Python更新/index.html",
    "revision": "ed518e7ffb952e00daa3d4c18095394a"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "2051cf1d59e12ca1ec4d504374192004"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "8cdc6e974a347b4341f50901a6fccd72"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "73f4a73764f73d4d04db9dba01a8358b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "53a73174db269aafb54e260673e020d0"
  },
  {
    "url": "tags/Web Scraper/index.html",
    "revision": "8fb9acf9874f5d90be1569ca64e6bbdd"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "a72dd781d4e7b0a186f94e258d831bc9"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "1cd58dc53d1484b21d330bdb5c331d0c"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "3e79d7443e79cb7f4c6166084a2f6dfc"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "893fc10ebe8c40dfdf198628620a6170"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "b0adb1f5a90aa70de5db068a60ad5ab1"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "c5bd2ad426aef489dc45a703cc064a37"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "b4723ff95a2175af6f349d2fc578a7fa"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "80745cb178c1f929171ab81b6ed474f7"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "35321ee20a64c55962475965ae9dee03"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "f4108c416cd9f9f427fa57d2a1bf6a01"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "763d030d82ef5678d8d88bb77831166c"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "46e1fba9f3ca2b7b851cbe188d7ddeb2"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "0dda73d263ffa3135029dda2dde06d39"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "472d44a9631cd1f7486a2421786f0d64"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "b2c773f7f47ba49e3025284f66f318c8"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "4a9ecd97701bc5a174299041f981886d"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "cbddeca26879a30c7e867d338522b541"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "94b10d01a24ece14abe4d4cca522c32c"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "90ca4df4067579831137ee15e04be22d"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "1a655e254d365f1950a018b82d92476c"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "70f0b4e6074e346c801ef68873b2e573"
  },
  {
    "url": "tags/编程技巧/index.html",
    "revision": "49164c9ffca1b63aa34492051032b9de"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "caeecdacb9875500ff1c8e0e9159e509"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "9f938e00f1d02ebe6402783f5fc4085a"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "8933a85de67eb5e7d1878da5e3517d53"
  },
  {
    "url": "timeline/index.html",
    "revision": "c24b9b400195974c7b5c20ef592a07ec"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "5be5d7c9159aaeac386df6b100c19b33"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "034e4ae2f74ae095390628041cd2ec0f"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "4f0eb00ee951e08dcde0f2dffcb3ec33"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "80881e8f75c904d791742bf2f62d93bc"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "f17daf65fafff5398e307198769ba76b"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "06aae1d4eac902111acbd9c97e9f264e"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "13e1e727d97f02af2eba0f2692fe37a8"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "c135d7f95a0cd035b03202240db00a82"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "29757a069003ddbe814b97712951196a"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "d54137a459b61dd821eee9f28d3feb0d"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "b8e0d5166e80dffeafbeb9d944010aa5"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "227421bf559ee82fa8d85deae8112c3e"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "495672af6d0e5b4c8be399c6511589a9"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "9fec1609320d456560765329bbc09513"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "566523b7f6757b2477660c04a65d48a8"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "d63c2150ecfd533ba3c001e9a154c35e"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "f5a3852ec8c48392bd017ebf4fc1ed15"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "f8add138c3cc39e160ddf15bf22b898b"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "73b9dece866ee0ecf386fc813c71abf3"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "f342c2240dd743c126c0d2f372380074"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "db3dcf8d0a2df1b3d25d847ca5932063"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "733048c3a1094c86ec2125564d7506f7"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "70159a50f20541b99ed76efc9ab58256"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "a9df382fa581f137292724c4b150d1e1"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "fa3e01fe30c3404dd2a7fe59be74636d"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "12af2595d19923120c0ee9d9cd4d1f53"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "53df2dd1a872782766224c63e3f1eb2e"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "27062b6d7b5710d1f3249010915359af"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "d96b7e2653f8687730b7025f4033bbc9"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "62e360331a91bc843960307dfa371a1d"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "fa1596bb78e1b313b6e110b6795b5975"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "69fe05491f5ed55a6406c9c48a2fa308"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "5168dd0df0927fb1a6d3075fb3386cc6"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "3c8e8553316874c61a95aa894c73af15"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "1f9164068f589561297ee65682b2e067"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "1df147ec21b305032275ef0e35fe447b"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "5006ccb5da0a714a2c95daf61143a456"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "787dd77953d5ea239c9c3571c8a3b57b"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "0920bc4af56dfa43fd2eab89dcee3069"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "37455e0ec7a58537e8ff8ba970f8b17c"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "66b64f674799b6b69b1849994d424f2a"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "7b8a8973124d9f8c576954399a2b55c8"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "9b7ee194e8bf3e0066a5014a11e514b8"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "9d65f87ca187ed9790f336e2077a2e2d"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "46513109b8e9b7286a78406b86c8553a"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "ce5b3a720a0f9538543bfcb6c1765d1a"
  },
  {
    "url": "views/articles/2021/how-do-i-learn-python.html",
    "revision": "a9d4b1f99458b4ad0661406e68b3d02d"
  },
  {
    "url": "views/articles/2021/web-scraper.html",
    "revision": "57ffb2025368ba7dfa70a92debd14141"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "83a299d149859449e28cafbba1115c52"
  },
  {
    "url": "views/index.html",
    "revision": "c6780c55aaa6f80edfaada7ab98baab0"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "7f81a4eecbe93c688cf115e9325271ea"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "39c4099255120cbf90af5d686052d1e4"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "eda1b51b122585f1aab3b47b8b782d6f"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "082c2604bcbcad9435a843db687c73bb"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "eb38a9db5140a3aea492b5bb62b889c3"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "bc030c5655bf62bb84b90a2e28618b4d"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "97f24bf9e6315e59eb23e1bcccd68528"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "704bbd5c0f002c1e9bf0d8602c9f8686"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "d6c075d90d56da1b54b4bfb60ea002ae"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "54725bfa0e964cd96495dc6af8c1d637"
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
