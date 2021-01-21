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
    "revision": "68bd74c7072ed01b48a6695999183537"
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
    "url": "assets/js/10.f0e12df7.js",
    "revision": "801d42678df995b429255cfe71fd1750"
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
    "url": "assets/js/15.da6de212.js",
    "revision": "dd48282f38503b41b4980b72faff356c"
  },
  {
    "url": "assets/js/16.11eccafd.js",
    "revision": "4fe7b5a79422438d74c0f4e5ea28f899"
  },
  {
    "url": "assets/js/17.e636696d.js",
    "revision": "42efe9b61ebf75570f096ff215688a3c"
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
    "url": "assets/js/20.bd127e8c.js",
    "revision": "17f854088f03bc616a7fefcc8f58d7fd"
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
    "url": "assets/js/24.33100804.js",
    "revision": "632e302f6650c234f0d89b98a7f1140d"
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
    "url": "assets/js/27.2cabbc3e.js",
    "revision": "144bb8d07fa8b6f7876d6492636396a1"
  },
  {
    "url": "assets/js/28.eabd1ff9.js",
    "revision": "c5c8d65a3f4d0b8edf7af0076c48d1bc"
  },
  {
    "url": "assets/js/29.3184ec29.js",
    "revision": "51659838417a67f370bd90f1d48f9621"
  },
  {
    "url": "assets/js/30.edc6deeb.js",
    "revision": "f6ba806654f2f31e59e63240385c94ae"
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
    "url": "assets/js/33.668fd53f.js",
    "revision": "4c59e05b71744ae3f8d78f4d370d9742"
  },
  {
    "url": "assets/js/34.e36a173e.js",
    "revision": "650b483e1fa81fc19461c620f56b4212"
  },
  {
    "url": "assets/js/35.0fcbb9c9.js",
    "revision": "291893b0ed06c99ec7bc972909ec7006"
  },
  {
    "url": "assets/js/36.817495f6.js",
    "revision": "922cbac72399a6b90810708130ce6c14"
  },
  {
    "url": "assets/js/37.88350ed7.js",
    "revision": "be6d6822b8b4ace5c5d30409b220dc95"
  },
  {
    "url": "assets/js/38.2d1b3223.js",
    "revision": "125484518d43d3fbb96d89b2332d4298"
  },
  {
    "url": "assets/js/39.d298898c.js",
    "revision": "ee95d46455aab2cd589ddbc317f3e62c"
  },
  {
    "url": "assets/js/4.4d32e994.js",
    "revision": "c109df93bd5de05b6939cf61d78f9a88"
  },
  {
    "url": "assets/js/40.abe8f4bb.js",
    "revision": "10dd624b89862049c54252e2a11c15ec"
  },
  {
    "url": "assets/js/41.4c3009de.js",
    "revision": "84de3d9ed74bcf2f20ef982fbdff302e"
  },
  {
    "url": "assets/js/42.861ae8fc.js",
    "revision": "dc9a24bc8cf9724d29abd34869d420fc"
  },
  {
    "url": "assets/js/43.e9c6c0c3.js",
    "revision": "e65f9e1a284abf53ee9016dadc54a47c"
  },
  {
    "url": "assets/js/44.dd2787f2.js",
    "revision": "4ca75ee3813d179fe73d6709f04e3c75"
  },
  {
    "url": "assets/js/45.3260cdda.js",
    "revision": "94fe49acf11ac7939862851d9712645a"
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
    "url": "assets/js/48.50a23199.js",
    "revision": "306865850eea6c1dd7c811bbd909c9a3"
  },
  {
    "url": "assets/js/49.fe5cd111.js",
    "revision": "49a5e408871d5f93ce2d7bc2de3eef42"
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
    "url": "assets/js/6.6642d6ce.js",
    "revision": "87611bca87e25f6fdf43135bb94bd73d"
  },
  {
    "url": "assets/js/60.5b3f1057.js",
    "revision": "68aefe20c29544659287b69c6993502d"
  },
  {
    "url": "assets/js/61.479c4204.js",
    "revision": "3ff4a94fd7dc7f75fb7c3f42dc17322a"
  },
  {
    "url": "assets/js/62.1852ba82.js",
    "revision": "8543807f52c989727ef248c4dd99feb8"
  },
  {
    "url": "assets/js/63.0aff4260.js",
    "revision": "5cf4f8708a30b84ab09c9d8ff7dc396d"
  },
  {
    "url": "assets/js/64.4f324e5d.js",
    "revision": "82f886cbe1076a0f892d8299bff10fe7"
  },
  {
    "url": "assets/js/65.3de4067e.js",
    "revision": "60f5288d3649d422893053cb87b395cb"
  },
  {
    "url": "assets/js/66.464ecca4.js",
    "revision": "c3174d0fb799a1196b9a854d33dcd6ee"
  },
  {
    "url": "assets/js/67.0f53d4f4.js",
    "revision": "494c36362ca2329fcce68172a353a732"
  },
  {
    "url": "assets/js/68.a134f715.js",
    "revision": "bae436577f189f1b6f2a92d413e84512"
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
    "url": "assets/js/70.295c8205.js",
    "revision": "4fb80a441b560a4784e458b089e354c0"
  },
  {
    "url": "assets/js/71.8b291bee.js",
    "revision": "14a60a9fcd03f2d7f7e21c0c34493954"
  },
  {
    "url": "assets/js/72.6c42fc63.js",
    "revision": "5f407e79cfe16f5c1133ba26aecbc053"
  },
  {
    "url": "assets/js/73.1a3639bd.js",
    "revision": "777cd08cc5fd1f7eed5146cfb3f3230d"
  },
  {
    "url": "assets/js/8.400c241a.js",
    "revision": "5ca29bcf6178bd61ae5e168730bcf0f2"
  },
  {
    "url": "assets/js/9.cdf45050.js",
    "revision": "be39fbd39bf4b76f182c93cc39835090"
  },
  {
    "url": "assets/js/app.65c33eab.js",
    "revision": "6e86f5677fc41dd4a1444fedbc9e14a9"
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
    "revision": "3c5b5a0f8ae1b82ed6b96178501942b1"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "a8750496ff2f6e32f0a764a0622dc2fd"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "4cf805382b433c63b58e0dfb7b7a122f"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "838ecf4e800fc2d3f86f4638365aa8c0"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "ab14aa993e942787956206644b2cd2d3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "57a277a2b3bdf413170448b0acf2ca3a"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "a7ad2602bf0363fba7f59db58091992f"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "694179e437004ccdf2d375f6b8b36d51"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "dacf51da6aaff7351a7da90f20a0b012"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "b037d6b196815cd79da01f94b8b965c1"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "aebb75b857a29569d908e0b1d654c581"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6a59cb772fdf96eff22ec4d938edf5a8"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "823efc920cc807769ccf770cc1fe7419"
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
    "revision": "5356011ac53ccbc39c9bf1e6249483bc"
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
    "revision": "6f7cfc0b6cc3344c9b35c0cfd88533e5"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "ceb47ce6d4ddb6d3950f83788a6ee82d"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "c13369572699cfbb09dac98116b92cc0"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "5486aa83306722f2ffabb9022b036abb"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "f93f8ab3cd90bbb1ecb726a6c5c10814"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "8c8581086e7b2b35921536cf388099e1"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "e1fdd498cf614cadecd8e6e01b80fc5d"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "da15b79d78ed8bc7eb91626161149290"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "9b70d810ee28021abc78475eedd16a45"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "533847914e6c0d5926dcd0254bc947fd"
  },
  {
    "url": "tags/https/index.html",
    "revision": "4f4cda33b355a3de2816c4b23a37fbaa"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "36fd1c6e54d6b8bb2ce00539e1f3fc96"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "82947818c853382bcaeb3f1603d1103f"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "bc27797a6a6520c5dd9f46becd3fbe53"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "42d37a4eb18193fd2c41266ef59e2600"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "6e776a48269a558d3b069f57d1b008d0"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "e4e3c247ae30c240f5f9ca1254709e29"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "73cd92636d7ad604abf4cb8d7710d2bb"
  },
  {
    "url": "tags/Python更新/index.html",
    "revision": "b1a8310fb44a35f684fd2c3cfb5b9741"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "2049c37c5844a9c0cd4dc60644c5d231"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "08b256b75c004fa9245527c0d608c2f5"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "d0f2d1b9749aa28554ff332441d740d9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "283e59b268490e47aa8dfe3548311450"
  },
  {
    "url": "tags/Web Scraper/index.html",
    "revision": "9ea3f8973d5950828cb1f80e11de15d5"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "840e24f419bd7c95a8e5750d58be16d3"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "0c6a356e3f83032c48a1015921831717"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "9744ad900d9a1e5242e00ca32dccfc2c"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "60651f3c439ecee33a2c03340bc1e7bb"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "4a5705a9b6a4be0ee98268bd8c60c674"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "1341d9ea7654034d84ec261bf5b5ce4a"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "7cd620c5e5453162e6678cc0d86f6952"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "e6c1d2386b761652dc05dee788454ace"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "7cc563eed20d893d64e5966e73a2ed15"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "c1121bf46741710852262ecff4c11e8e"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "7db1157de7a82e3ae94e331a28b2a567"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "3e57ce7e973e7cd379d5d5344ae972ab"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "4f605c8362ea911756f7ac17c2ad1c49"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "a759cd87302e751eaeb2506247a1583d"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "9f3d0061b59a55b3f05a57468872d003"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "8d0818f159d500d139b11ef6b645aa2d"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "4a45946e4b8fc84e2eeacae2e8b97c32"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "144048d696baa363e4a4856ce8a08f02"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "7eb12352179e09b4892c4b45566a9492"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "b87ddeba4609d61126284f0f275d72df"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "5b172c9eaee45ea6d73147bd241a1472"
  },
  {
    "url": "tags/编程技巧/index.html",
    "revision": "b4b6d0324424208296631b1c0a6baca9"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "d820b2d01207b2bc0ccec9b1a412d2b6"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "5ab83680a6306b2d6f0799ad347d859f"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "12a5d29a68b9447c44e50f6cb34a1d10"
  },
  {
    "url": "timeline/index.html",
    "revision": "565222b57639a8eca912eec17bd77376"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "f1c284811614ea72cedd03c853f386a8"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "cb68e85b2c244820129c0bd38f60603a"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "113252df80126fb7e899bda2b20618eb"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "0756fdf0512acbd2704a2bf0d93194cf"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "db30ee575e1a3276bfdf92cb68369f43"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "b1c631ebcb5c51ecf1633f369537871a"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "5ed8af44327bee35e754b7125652fd5f"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "b63dad7c2e16f3260f35c8030734f465"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "938d4f386a4d78886de786c2e2544aab"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "dc7b4b8ea84cebc5b74a57cf855840ca"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "e488f6331a5c6c6e50b7f87f941075de"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "f3caf56b80faa5209bf263b87389d2f9"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "fe3a457c750a5efc46ea30f5d70a6251"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "8e1faeb7dc48367333cf8829f75c6a00"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "7dc21a6ad54e6f3cfbc4baae38a15307"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "acfdd0dd862de76e9a0c43a597df3e50"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "7ce771b12a7dc7021ebc088ff5209cb1"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "b6935216df3bec3bea9d92281292f5cb"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "2f31e8f096ac49f56b7b0772faba20a7"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "0309d2fa6154e085f9c91c3daa717ffc"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "8f23d75a8ee1c3efc94baf0b39b07b6f"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "34550b97f029a458879ae0b6e8b09859"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "2e127928c135de22eb85ba041f917948"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "95e3dfa4a7727e5fa028f9b212436136"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "e8c95b3f27bc2cb948219a6cc3533458"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "2f6cb698873218f55a62cb2da1e7efa7"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "581aed057cff93923252a6e022f42d89"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "eae7efd395e6314ab28999c1292cf63d"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "7698862ab5e1cf7b18b560ad8b0c81b6"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "fe166f740e2c0b7f7c94e9abe00326fc"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "c186526bb2c46ae6ef1fac09bedf1de1"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "5e5b5a495c6f9db3f2fc7f20ea16d526"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "0d25a072b7d5d78f8f43a02efcfc1df6"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "fba22016f8fa5886bca678b3ea148b6f"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "fc5d9b6e34b1aadb17664154c4210ab1"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "3cbe85e0826d182f9235aaec38c08ef8"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "bb793a954665efd9164a0de2a34e5c15"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "ee3219e2407fd436e9ac7c3bde21f17d"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "383ccc874549f15078c51eb958dfb395"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "fe0e7e037c14a7004bbd6b1a1a7c7f33"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "b4a0f496197f77399386eddcb5f27f91"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "9a31bc65a06aa9bb004beb993b292bcd"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "eea5273470dcbcaed37ed17791ddf39f"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "88abac8987ba42d958936f448f56cc21"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "8e0e52e7db8fbf5b8c343e9ef56e5631"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "385dbb4b805f345bb7c5c0eadae11377"
  },
  {
    "url": "views/articles/2021/how-do-i-learn-python.html",
    "revision": "9c54658e68d9b7b2aaf466f21bb60c76"
  },
  {
    "url": "views/articles/2021/web-scraper.html",
    "revision": "092f4b439cae9053b8966561745426f2"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "f4e531de667bf0925b643ba34ef8fea4"
  },
  {
    "url": "views/index.html",
    "revision": "e1c56ca218590bfc877f12017204bb6e"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "e5b77bafd44b259f5bfdc92bb083fdbb"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "62f8129c9c06655a6dfb6f5e391aff90"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "3088dda8528f1b9864eb2bb8dd598c22"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "93ddf2b2b9535dd182f1cb02aad8797f"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "4e57b69a641f3f15b041f7ce3c133bfa"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "d91258e362073f5c97cd6d67e919716f"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "cd0f43f057d8211affdf711d206fc3a7"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "b29aefb297377374b9ca2cc52feb419c"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "b3593fe8275a53e958a56a866cd033d8"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "361a1f7ce9821049c6f822a41cd3f4d3"
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
