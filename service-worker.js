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
    "revision": "8ac3431d013740d430357eee298026b0"
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
    "url": "assets/js/13.bf5a4ecc.js",
    "revision": "c26132126ede3884f627995c30a483b3"
  },
  {
    "url": "assets/js/14.40abdf6a.js",
    "revision": "b28b3c6a6229f7d223a28e671867e02c"
  },
  {
    "url": "assets/js/15.e1bb0119.js",
    "revision": "e1e194c2e6053e63749829bce0dc99f8"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.766a0474.js",
    "revision": "9e02345b6b552ddf566795cea003016b"
  },
  {
    "url": "assets/js/18.58e55bbd.js",
    "revision": "5f818927743cfe6b45d85b367f0e08d4"
  },
  {
    "url": "assets/js/19.9e7e2a36.js",
    "revision": "1734e559c7713be95cde858f4d55d350"
  },
  {
    "url": "assets/js/20.ed65341e.js",
    "revision": "a7c623a067bb529a29f0eb48ea986cb3"
  },
  {
    "url": "assets/js/21.c5e431e1.js",
    "revision": "bc53b63e7de44d639904dcf966f3476d"
  },
  {
    "url": "assets/js/22.c17ad39f.js",
    "revision": "0b85cfa2f2e0bc8f3c3a9b848ce78b16"
  },
  {
    "url": "assets/js/23.da8490e6.js",
    "revision": "fdd4b2a67a689ab37be564d2a3146552"
  },
  {
    "url": "assets/js/24.a00815dd.js",
    "revision": "7e7621aecb64f8942048859958b6c9fc"
  },
  {
    "url": "assets/js/25.452cfc9d.js",
    "revision": "0a03ad869254235b055c71787cf1e941"
  },
  {
    "url": "assets/js/26.4a06a0a4.js",
    "revision": "e6bc74992f81021710f955162f091666"
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
    "url": "assets/js/29.02a7f2c0.js",
    "revision": "e4d02f9cfb84396db949f0d238ae958d"
  },
  {
    "url": "assets/js/30.5d4154ad.js",
    "revision": "b057ed1ca7a88699f136022b461f8328"
  },
  {
    "url": "assets/js/31.120def2e.js",
    "revision": "b2e51aa8cf1f5a4a43ed201453b54258"
  },
  {
    "url": "assets/js/32.45c05781.js",
    "revision": "a9f0a3b6413f13791826ff9b75ad9fe0"
  },
  {
    "url": "assets/js/33.68ad750f.js",
    "revision": "f4c52cd8f0539d4cae62a482f4901e83"
  },
  {
    "url": "assets/js/34.817c7901.js",
    "revision": "4796d9356b8742635466cd0d7f92f8ef"
  },
  {
    "url": "assets/js/35.2c390a7c.js",
    "revision": "cde59279bc44fc7434d51cedf088a5a7"
  },
  {
    "url": "assets/js/36.9b34b17f.js",
    "revision": "06eb65bc4021f13fbc44d8bcde2a2fba"
  },
  {
    "url": "assets/js/37.a8c22493.js",
    "revision": "0d39aa78e7549ccfcd2c0da73aaeb2ea"
  },
  {
    "url": "assets/js/38.417d6aa2.js",
    "revision": "22be53edb077cef70906f5cdfcfd293a"
  },
  {
    "url": "assets/js/39.ee890ea6.js",
    "revision": "1fefe6b6e77569778fcffe2a1348b490"
  },
  {
    "url": "assets/js/4.b8867e1c.js",
    "revision": "f6b1d4be6c340dd4cc949044d15e6f68"
  },
  {
    "url": "assets/js/40.680a7010.js",
    "revision": "101c14001096d40c2f2f7cbff974098f"
  },
  {
    "url": "assets/js/41.c60baedb.js",
    "revision": "3abcee30ddeaee60fb6d1d9f1385f993"
  },
  {
    "url": "assets/js/42.4096fd23.js",
    "revision": "d8e88207ae88b6969920565b6ff802a8"
  },
  {
    "url": "assets/js/43.7406c863.js",
    "revision": "319d40e86b5aff0125d9c6a4e76289df"
  },
  {
    "url": "assets/js/44.e5892858.js",
    "revision": "01daab7a193c565c3fe9e7a0adeb20f4"
  },
  {
    "url": "assets/js/45.61f7d0f5.js",
    "revision": "8ec84b25bde5291e3ac9507106d75cad"
  },
  {
    "url": "assets/js/46.b69fa730.js",
    "revision": "33f9c17f8c63964eb5e5cd89cf9b95be"
  },
  {
    "url": "assets/js/47.3a7fb08a.js",
    "revision": "995a396196c90eab2951c96be8307fc4"
  },
  {
    "url": "assets/js/48.753cec0e.js",
    "revision": "fce76b90d6d0983fdc3a0f21d75d83c8"
  },
  {
    "url": "assets/js/49.429e7bbe.js",
    "revision": "334a2f8d6c29aa17b20e3eaab083b59c"
  },
  {
    "url": "assets/js/5.3dd4408b.js",
    "revision": "3252d915789c5b91b053c01aae787efd"
  },
  {
    "url": "assets/js/50.640b3337.js",
    "revision": "7d620d1cd3825ba75624221d4929059c"
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
    "url": "assets/js/54.5b247754.js",
    "revision": "57b78bb9ec077862e0d800f4c05e7558"
  },
  {
    "url": "assets/js/55.d72767b2.js",
    "revision": "4774c937764cce6c7393d45329254108"
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
    "url": "assets/js/58.5444fdaa.js",
    "revision": "84361d10496e6918b6ce4716959391e3"
  },
  {
    "url": "assets/js/59.5e411042.js",
    "revision": "887eda0a801668276e2bd8697f94e9f7"
  },
  {
    "url": "assets/js/6.a0cc0e83.js",
    "revision": "43563c7c0d4fad90cca3f576fbd3237d"
  },
  {
    "url": "assets/js/60.8dac4cfe.js",
    "revision": "4a3e7465133b0d0c5ff4756ace303655"
  },
  {
    "url": "assets/js/61.52b7880e.js",
    "revision": "16c927d53987b0ed39e7e4b43d8b4eb2"
  },
  {
    "url": "assets/js/62.abdc30ca.js",
    "revision": "f04452e019e542472cd2afcaeb84ac7e"
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
    "url": "assets/js/8.20bfb2ad.js",
    "revision": "07767a2eb9cd8d7dbcfc014012fcd050"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.aee66ff4.js",
    "revision": "760150d9e5e0e246f29a54b61a13515d"
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
    "revision": "d4da67176a312a4a8fca38717edd4023"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "ec35175658e8550d739ab87e1172607d"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "61a87e3e961e044a483ae21e2641587f"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "216577fd4785d10c5e4e7942ce3d2f16"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "0955b7145f976a93b23dbeb8f93bb0f4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0c6de44e4494eab8495b76a5737cdd7c"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "e39fb3a7f908b016fb6b026c454e60e8"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "3848afc46a42827bee9ead966edc390c"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "6416aa84f2bee6db5dcbb6c819d2d829"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "5955edade201534b285d23564e44fb18"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "96c70821d9546b9ce0b02ce27fe9df62"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "66c150254de3bea81dec13e1b6add194"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "caecc39a977cf9d74dae50980a79cd35"
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
    "revision": "900877bbd670c12d6f37e0b9c159d853"
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
    "revision": "dd587ff1cd50c5940cbd6b1b2768338b"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "a9dd31c66d41d2f5b1ba44a106b6cbf0"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "d7fccd1d25a362478242d74475e6b0be"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "657ffd682d850c82476851410180da3b"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "5e43075fc8ca9201648499d39ec7ba49"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "df915dcc42a0a6e89afff0660d150f5b"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "ea225460e275c893b45d0e68f2e7eb82"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "eb9823a8535976c7c75f982f034305a4"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "dafc1502db1be2216076a1a1cb31e541"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "4a9bf4e43aec924a716cf7e10add85b5"
  },
  {
    "url": "tags/https/index.html",
    "revision": "94b85817653132c57e5d6184e5825d92"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "cd569a8ff5d9f410c6b4fce3208c7ef1"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "8e48cfc5eb1bc287060dec99e6d6ad35"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "1770391194e781f2a6dcf6eb789cba03"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "9726eb195d23faca2bcf70f5026237b8"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "0c83df2ff573df1d440e34ba34d268a3"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "8b6ebbffdc06546c9a7adcf896591648"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "d9e2a5d2935af85c54d94ec8e976472b"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "57155f3f832929c773d4c61f4167a5a9"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "69804e7a02282b4a567c56d7bb5e4bb8"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "0d4e2036756e3634f6fdca5c0deacd62"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a8b5beddc92b64faea6a6f4d53d528c2"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "91fdb7f28108fcfb53b5d03d37fdcbd7"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "3cae44cc7309265ee496e047f680f037"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "3e8d81698a974660451c30a5623cb70d"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "e489bed360e4c0f69bc4fd2f25f010d6"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "6eb230893759d2920d81c661eadef106"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "683e66e011cf58e4441460989fc9af9c"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "3fd151b08260f44580b0db0fb817c5de"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "a946cdc9ee214f0f260dbbc24a9319c7"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "3704342129103e9c45c880edb66df243"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "18b4ef5dd26b3794163666e54bfa0109"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "71a2271e14f34f4b1701cca1fa2d3af3"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "b3c0c48307d0151354fcf94854fcb141"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "0e4d2d769d3cbfcd094e4895b0425dc3"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "25c9afb29e6ee07ca3b1c788f71bd802"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "5328a153cad372cf78d03edd60ae3675"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "ebab6de3863469e6bda82ffb64b876fa"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "5b3a634cc70a3fa6193330176d3cbca6"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "8f094264e67b838e5482a954a6751ed4"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "c27733ac3409f54bac8eaa7930560feb"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "bdb1561b48a1b80a9c4ea5f210a73726"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "46801e16fee714e41a36988469418bd9"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "32201a927876196ed1a574a55fdb3320"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "66e480d6f84b92f33f1399eeb2430a19"
  },
  {
    "url": "timeline/index.html",
    "revision": "11eca3bf89bd7bdd092b70f3f708df96"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "58ce686c871194e40726a370eb88eb50"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "c6d4487a6a1c3e9a56d61f22cde5c45b"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "ab5b432b2b07e3a686cb9c4c133e34c1"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "c4ce0224a2b440e9ffc040d6d5c0bb1c"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "d46efc9edb64342d476674c40903682a"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "ee3b6d8c99e8aa4a6cfbafbc8e83decf"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "8018e168031932fd3d1b05d8d1323ad6"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "92c3a26643d127ade5e9bc6c5637987e"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "f8fabf77d7fc6c60213527c9a5a95c02"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "d172548eda4dc8fe417b679ed88f4a5b"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "f584060f3e869ab34104be346ee5df6d"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "632ef7b58d738f03a26ac1bcc031cd9a"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "a71dfef681d4f6a7ee6efeaecd829b41"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "687a689c18fd3413a7878a819f06e638"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "6739517cbad1056c99b94a4baa86cb86"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "116a67e44ebb53452560bc95039c1878"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "22b072d68da6c284fe6bbccde0c2ee32"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "a6f773f06d0a31c345c0505221758e5c"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "8739bdef0b3ab97db05c99126e7e2673"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "a1b2e9c55fa803de98d9d0a9c548c497"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "3c53fd19edf0f6e8a3ca6f434837c3e7"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "73f8efb866a353aee8b41b9ff2fe1b22"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "3c93e2acc2c546c2e2b62419878ecaa1"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "1f2a12969a9f30559f41dc86e6d2d3c8"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "193fdd1648db66ab1c36a84835162569"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "d4178eaf5d1906a82e7abeef70897c82"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "2f9970f90a4bb54b679ab6d2a7c82a38"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "9c815487defca7dc86d6da1f3eb37d3a"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "de655287860cd4e8458a56e80022fed2"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "290456228b2d366f8268560cf3df98f5"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "6473f7440f5f228dfd5dd1457881b0e7"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "72d92ee73c9ed877930eb1a8f88ce7b1"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "75d849559c45c5303940d97329869c9b"
  },
  {
    "url": "views/articles/2020/15-pygame-projects.html",
    "revision": "56868698de294c31cf6cee563e454ac3"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "11ea668866776320f8274666ab0f23f8"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "1943125d36f1a0fadac8c088570ff739"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "2927b84e224c022b9e4001dd2cc3ae4b"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "5beff95ebfde99831fa62bc9fc68b9d0"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "60a9a2e56ebadc5e4a8837327cfe732e"
  },
  {
    "url": "views/index.html",
    "revision": "61d3911f26af1e78b0b1f458edc6e977"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "f8446a0ca17119deb273e2e5bf008f67"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "733e5136aa140e7d215b10d5012f07f9"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "5afc4d49aae2a07320d069ad70f5479e"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "b8fffa4eee6d06fcd4feb81191c5d3aa"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "9062f4a1ee166126dad99a7bb54eecce"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "5e223c3a00cb02dfccea43cd92adc53e"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "db3628ba67c21b3ae9feebce442967e2"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "7392d3bf0087d8bead80d1a2cbe2750e"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "87d4086bc8033cd3dbba329596372799"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "af42efc4c46d8b90a44a72bb9add2ca0"
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
