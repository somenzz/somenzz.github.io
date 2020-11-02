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
    "revision": "112163e49f18b991da068f623e8175b8"
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
    "url": "assets/js/14.e790a64c.js",
    "revision": "26dda7c4b79909ea1e45e06a35d2a91c"
  },
  {
    "url": "assets/js/15.c697da7e.js",
    "revision": "fd36b1c0f51fe0b41383be623a327c89"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.668bdc1c.js",
    "revision": "cf13cd82e215d8327dc35ce6ff4b918f"
  },
  {
    "url": "assets/js/18.19e391f7.js",
    "revision": "a7d0f25e71ee1e9988325c8be5fec337"
  },
  {
    "url": "assets/js/19.16bdaa6f.js",
    "revision": "2b303073263808f47c5ac7977611bab6"
  },
  {
    "url": "assets/js/20.c5ed10ce.js",
    "revision": "e8836fdfbc0620cfeb062dd6f50e442d"
  },
  {
    "url": "assets/js/21.16b06b1c.js",
    "revision": "836e91ecdcf724b865c84cd04c8d53dd"
  },
  {
    "url": "assets/js/22.5c07a1c1.js",
    "revision": "0751dc1e87b6a10684f8eb9a4f409428"
  },
  {
    "url": "assets/js/23.a2ebfef3.js",
    "revision": "ac7de9e8290c83791b3175968d3ced3f"
  },
  {
    "url": "assets/js/24.b3f4c0c9.js",
    "revision": "35f11f01335044c736d5a05775c81d2c"
  },
  {
    "url": "assets/js/25.c3d68718.js",
    "revision": "480bd2e8b194fbf20d1456ea1c210cb6"
  },
  {
    "url": "assets/js/26.172bc6a3.js",
    "revision": "bb91a7f602fca8fc68a6646209cc709b"
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
    "url": "assets/js/29.f9d49a6a.js",
    "revision": "a792e7729a55b065b3ad6c6432166440"
  },
  {
    "url": "assets/js/30.d7f87021.js",
    "revision": "c664a80dec523ca08e53386713651391"
  },
  {
    "url": "assets/js/31.97dc6dba.js",
    "revision": "1088bd857f2db0b48afc0c81b41ea0c3"
  },
  {
    "url": "assets/js/32.aab356c6.js",
    "revision": "9a5dd789e9304280e92d9b84e520679e"
  },
  {
    "url": "assets/js/33.a4b3fc2d.js",
    "revision": "baf691dbce6181c4771e950f483fb6e2"
  },
  {
    "url": "assets/js/34.25178b44.js",
    "revision": "1a9da551e82be16d4d175fb965c297b3"
  },
  {
    "url": "assets/js/35.31f7bb71.js",
    "revision": "aa8a7da533182fbe741389fa363ded9b"
  },
  {
    "url": "assets/js/36.14fcf4d9.js",
    "revision": "c853d77715531ad22a94641da77342b1"
  },
  {
    "url": "assets/js/37.68d9960d.js",
    "revision": "f35bdcd1a32cdbf9c1ac32cdcd10673e"
  },
  {
    "url": "assets/js/38.963cb57f.js",
    "revision": "270a2879d783cf1915f079ec69608d56"
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
    "url": "assets/js/41.3e9c1893.js",
    "revision": "9d1b5ea68140c5d980a7c22c25a1b8bd"
  },
  {
    "url": "assets/js/42.aa9a84bf.js",
    "revision": "370da575b4807f436f2b217d24210572"
  },
  {
    "url": "assets/js/43.610982e0.js",
    "revision": "007b7092005c32007bfa0e1bf7c1763d"
  },
  {
    "url": "assets/js/44.122326c8.js",
    "revision": "fb6adcf4c5727edc2063e2dcc48af0b7"
  },
  {
    "url": "assets/js/45.3be0fc58.js",
    "revision": "ba41f80d87d1cd258a2213056c2e2d2e"
  },
  {
    "url": "assets/js/46.65aedd20.js",
    "revision": "03db643f75c3276a1449e69821d4b669"
  },
  {
    "url": "assets/js/47.7fa9246d.js",
    "revision": "ee9b3b82e339f290e9d157954aecbf8f"
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
    "url": "assets/js/52.cefd4c4e.js",
    "revision": "90ed861800745c7e3649620d7ef34d73"
  },
  {
    "url": "assets/js/53.8e2ffb55.js",
    "revision": "882e9271cc3b7e2c6e357d3bb28824ef"
  },
  {
    "url": "assets/js/54.e2c1bf0a.js",
    "revision": "49173921b908b23407709c9027967277"
  },
  {
    "url": "assets/js/55.a1817344.js",
    "revision": "5902550fe05bc793fb73808e474ca6db"
  },
  {
    "url": "assets/js/56.5af00f84.js",
    "revision": "d7144f687c9001a3353163d4245591e0"
  },
  {
    "url": "assets/js/57.a97eac27.js",
    "revision": "a3653600869e4695aac5c050c324815c"
  },
  {
    "url": "assets/js/58.fa27c161.js",
    "revision": "756ae313d2ff6ca63e1e6425f30052cf"
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
    "url": "assets/js/8.043e69b1.js",
    "revision": "163db8dd5c4f7ccdb68e25047d8d2d5e"
  },
  {
    "url": "assets/js/9.afbfc1fb.js",
    "revision": "489af26615e46cd0d55da5408223102f"
  },
  {
    "url": "assets/js/app.c41647b6.js",
    "revision": "a990b6d26d39ccadcbd296479264e8dd"
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
    "revision": "9f8b0cf5c996bd2ba429379935b91f92"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "e6ccbe6521d8fd034ff6878e77502f22"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "2faa4a74502771e88c6566111f0143c0"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "4c2d7076f58ab2a75fcbc93c3a100833"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "b7b3248e074eefc8b829b7e15940b304"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1dacb99e8a2c14e08d84a35157e4cd69"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "2f26a7a8ed54fed9195c9c9ab11c3f36"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "6649e54167719019bb0bbb4c00f2f4d1"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "2d09238b996d3b214964e1cf444ecc58"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "c27cf2b4deb419f7d3e68af0661b378c"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "f2b6529912d374ce3cfc9927f44b0669"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "db374bb430d5cb1c6dd52c09026a2aa0"
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
    "revision": "e04233d26b8f37f6a5778c1e20494378"
  },
  {
    "url": "tag/index.html",
    "revision": "bdb627d28b20e9cbf1810884b166732e"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "a330b3bdd29bfdb898cb4bb4bb47c46e"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "b222e5489a666e01301468191872a85d"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "49fec250ed7d6a95f7cdfe2bb42093b7"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "ffdcc2af727cafe3c1117f40b26b4a94"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "b216968dda8e63522562a4779b787af2"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "d290553a7c0bc7e75e7d4b4f4ae7ac5c"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "3086a66d7528afe16cd825269bed7d43"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "3d1c3a92248704c7728595b68258e1a7"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "fdab9cd626b9a2099220b623bd2560fa"
  },
  {
    "url": "tags/https/index.html",
    "revision": "a322a1855534cdd7f4544fc48399081c"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "8189dee16a6bec7a81d9031d122197a3"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "d516c956abe7a1207e558c1f44aaa30f"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "e0eab9eb1a2a5cd1b695a4f55410d83c"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "b162344c3a2196dd9738b9067208eca2"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "19981a3869b4b5584ced6106f02c059a"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "ea255b173bcb9cf456e520552953c005"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "7e7a33c5687ae38ac60a8c34c2e02a2e"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "e4e58dbaffc56328ed4785b4576fe6aa"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "158702716b7475c84266502d5cdda82b"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "ad05513eef8d87272a99ab6828999429"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8d534ae8fd694c23e0cf0af8672826d5"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "0025f40477016fac81fcb0bb8e1da43d"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "9810212664f98d0353121b72d83d4a0d"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "db374a73b186cf8d5ad9db7fe197a887"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "f46311445e53651c7f1784cf7d3c35bf"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "27e503174dedf58b5e865c6c9f10e70a"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "040ad26ca1a6ccdc53665d4f8360e62b"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "7c446872526f7ca7be8a496c1e126a2b"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "67cd295eaf4932911cd69ccedcf49055"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "150fcee83557100bfcab06f818d5dc90"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "703cfee4c76a17a2d69b93fc493a9e24"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "bd63ed632a6e05bf3c75909d5b92b220"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "ae61180416b1ec8dcc92577d639f08ff"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "41fed683368cea6ca90d8a05ad5fa005"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "6faa013bfa89d63cdb74b43dec855407"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "829bee65b7f04fe0889935f426696c98"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "f35ea34877917a54292895a12d2ce43a"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "ed39895587660ea9612b21564646dd32"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "163bad613ae74b8ca57944d4e3a6781f"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "bbde5b63a61ba935975a7d6195816ca2"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "f39c96da509465b8902e2531751fa4cc"
  },
  {
    "url": "timeline/index.html",
    "revision": "394831affd3b7b32a42c16218d804b3b"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "2ecdfb415f09d385fb9bd351fb0d9183"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "b549415b0f271030065d2721b3d31635"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "4a84a3bd10076c61c99d182a781c5752"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "b30e22cc72b519e56ced006a2867888a"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "2152174aa40f70b473978d5215daede5"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "27ff58b61eec50204f8e216cccd46362"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "a166f16663487f8b3c183463c90f6e8d"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "ae1d0ef54edd46523f6c33788c2ea326"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "1ea41ee09133b71b64e9576af7371ea3"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "00ddf00c1c9b635acd060d436f9d3c9a"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "54de13b9979c53a18121415041740356"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "c9434f294d1ccfd7fada00faab856d93"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "fada00c0d56c1ec09b1ea6eef126004e"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "12498216ce93ee4fcd0bb880683b295b"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "1a9cc12e76b952a7597ec2857af1ef2a"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "29ebda633c95deee81a006a6bb62ed3e"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "37f4ee6971762f8f6ebea5e9cb5989c8"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "25977d6ca8c0a41080809d980cc70227"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "4441e19e6d23be56b9f929af9c2331b3"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "8e338ec5235baee419bd2b5e53f92d41"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "0903f4a0e3cc96f50be2626c9d4ba850"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "63f562b319c138459fb41fd1ea4e0ed9"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "2e96b688c8b8fdc5da3ef52750d07751"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "483108411d6ba2ec78890bfc0fd05dbe"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "17d62ee7363a1e5dbaba7a16e95fe844"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "66969c93979c7497d510afb40708ac19"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "2dd27f3e60c51d33e636f2ef52b4cbae"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "6eeb0638fd3494b28207ae049eab1a09"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "ffc8a086ab0efcd6f4e873b18d4843ca"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "f6518287344110b4060760b4bc2c84ae"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "869dddf84b350da94a684c984013b176"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "5a78a690595352380ab4fed593b8c0d0"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "04bbdedcc7ab74f135a9d97fdb89900b"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "8ebc338c42bc410e782468c9ba17fee6"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "b6546e747de0d5bd5644f49a6ece84db"
  },
  {
    "url": "views/index.html",
    "revision": "5d2e306b3548034d36ad562376f77fd0"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "496a38e42c3addb82721043e651cdb47"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "aa4796d2c2aef0139fe1827291fcb3ac"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "f2835980dff1c85cd14e7a2427cef88c"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "c6a9fc07f66343ddb577ebdee77ddef5"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "d0b889eef70254d8a79ec1aec78287aa"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "96ff42608b2548260cc71204933530d7"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "d6fa781e895d0435b32cacadaacca23e"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "3b2324db5c65f35b8d1407973afe286c"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "8b66b65f0f2d6ee641d0baea280ec1c9"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "d8c8835aa23ec893888d5d81bbcc83b5"
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
