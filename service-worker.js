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
    "revision": "51703b866f9ca561772cd42b932e2613"
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
    "url": "assets/js/12.4654cb0e.js",
    "revision": "98f3fa543ba67c5738e97329ac0e5dd0"
  },
  {
    "url": "assets/js/13.017c60e0.js",
    "revision": "5146e9418093f1028e219af10cc1bfa4"
  },
  {
    "url": "assets/js/14.a0adea84.js",
    "revision": "da8b052ed63f9ee467ba381724cdb571"
  },
  {
    "url": "assets/js/15.fff2b5f0.js",
    "revision": "25f2d0ad3ecf918ecb346c4d0b9b6914"
  },
  {
    "url": "assets/js/16.55d9e490.js",
    "revision": "7caf270078e3cb620b0d798508e186fb"
  },
  {
    "url": "assets/js/17.1f4bee43.js",
    "revision": "5a51ce3b45b45ec53a5af6be111d0ee3"
  },
  {
    "url": "assets/js/18.48f829ae.js",
    "revision": "83ee2f87a31bef8100b16775f00d0572"
  },
  {
    "url": "assets/js/19.b18d7479.js",
    "revision": "c95b5f5a26b6fabfad10c90ec5093ddd"
  },
  {
    "url": "assets/js/20.091a2974.js",
    "revision": "5e5ac7b6091e2e5de3c405d35a6a2e0f"
  },
  {
    "url": "assets/js/21.37e40993.js",
    "revision": "9f64c1ce91bfc1c11bb149c25257e0a3"
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
    "url": "assets/js/30.bc52a2b5.js",
    "revision": "87fd3dd52f13ab224e8d2e56eb4aa81c"
  },
  {
    "url": "assets/js/31.cf2a17b8.js",
    "revision": "06e48747d633e418a6d9b197489e99a9"
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
    "url": "assets/js/34.25178b44.js",
    "revision": "1a9da551e82be16d4d175fb965c297b3"
  },
  {
    "url": "assets/js/35.c1654c88.js",
    "revision": "13a90a7008c07ea6006939ebda19cb49"
  },
  {
    "url": "assets/js/36.1b51dacb.js",
    "revision": "35f997b9a094a7a3c6ba15d54ffcbc7c"
  },
  {
    "url": "assets/js/37.e0072929.js",
    "revision": "1f96a0e8500b3dbf2bcdab16e2ad3918"
  },
  {
    "url": "assets/js/38.f678951f.js",
    "revision": "57cf39133c8487507b4cc8ac7db65da0"
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
    "url": "assets/js/40.e076898f.js",
    "revision": "bba3dc398c3729fcea66a4456d50fe7f"
  },
  {
    "url": "assets/js/41.6f79dd67.js",
    "revision": "1c937c5ac408da98145e273a0809b015"
  },
  {
    "url": "assets/js/42.dd47a40c.js",
    "revision": "d9920c6c0a2c517aef20ba5de4d1155b"
  },
  {
    "url": "assets/js/43.976317e1.js",
    "revision": "987de711d8c94ef137fb107d43ec7961"
  },
  {
    "url": "assets/js/44.51d35d4f.js",
    "revision": "306384425d8e03e8ddba6d80b59c045e"
  },
  {
    "url": "assets/js/45.178f6a49.js",
    "revision": "dd86c35036b388be9d9f87879428e7bc"
  },
  {
    "url": "assets/js/46.42d82451.js",
    "revision": "7bab107efb5b42f0839ba00733dfc8ca"
  },
  {
    "url": "assets/js/47.84f48795.js",
    "revision": "0cb8e2317977bccd6bb3113fc0d5a521"
  },
  {
    "url": "assets/js/48.062ae49e.js",
    "revision": "60dbf97d25902cee094533eba823fc10"
  },
  {
    "url": "assets/js/49.fc11ad56.js",
    "revision": "0821666b7117254aa777a7847fcfec18"
  },
  {
    "url": "assets/js/5.418474b6.js",
    "revision": "c48475e0447f9416fc5d2fb6bdd33330"
  },
  {
    "url": "assets/js/50.e1cd4d97.js",
    "revision": "bf96348d4971d0b0c9c61419d3505795"
  },
  {
    "url": "assets/js/51.e09ac48d.js",
    "revision": "ab35966f6e678a68c73f2bd77d75e7b7"
  },
  {
    "url": "assets/js/52.8d3a0308.js",
    "revision": "ab0375a50e32fcdbb059ffa13b6fc3b2"
  },
  {
    "url": "assets/js/53.d41e59a8.js",
    "revision": "467f272a909d3eb246314b9a2221ec3a"
  },
  {
    "url": "assets/js/54.4e8df189.js",
    "revision": "403a44836b9f1ebf38543cc741e61e0c"
  },
  {
    "url": "assets/js/55.89defb10.js",
    "revision": "662e1b0ed2277afdea36ee64afa6167a"
  },
  {
    "url": "assets/js/56.4ce7e41c.js",
    "revision": "b490b807d6a905e63782271acc45ffed"
  },
  {
    "url": "assets/js/57.e057a140.js",
    "revision": "eadcc9ba47b65738889f0fdbe45bf7b6"
  },
  {
    "url": "assets/js/58.3d6ceeca.js",
    "revision": "d671c2ab48652fea4245053c3d56c39e"
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
    "url": "assets/js/app.baf4aba2.js",
    "revision": "7ee672d7f5e0d3b857cc42bd950fded0"
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
    "revision": "94a24a693b09e5b8c6f415b601ea235b"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "7348431a16bb4057aa816dae0cf4503a"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "bcb602c5a3b3f81156c29655c3d31458"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "05d8ef20631c64689ee5b5e1fb329a2d"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "91531762ad2e1c4e280e8632ae1a7bcb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a88ce32a95c62cc75e7a324a14aad79f"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "d4cf2d1df855e7c81a85c60c1cd54cf1"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "3dc9257ebe41d238e7b22b514bdbf178"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "01afd2676922f7bddffe747b910b2aeb"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "df96536b52fb9cf9c754f86936b420ed"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6ec214be09fc4820679698cb505b072d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "f207a3638ab4df05bf74ce85f8015659"
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
    "revision": "a8d70f1b3600258ca4bf949acd31bbcb"
  },
  {
    "url": "tag/index.html",
    "revision": "13f2ba2ea0be3986b1148b8d12f11da4"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "da54cc5af4e92d9d95daa62578ec929f"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "e135216c489590c2f01574630f09e5bd"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "15f25c8b4201c4a995489aceb6319724"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "27dbea9c950835cd85258234485783de"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "4cb18c6e5290fd5080a17ccf05a168b6"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "1c90a1610b5daf0247375414843ab68e"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "7f16965f70c21e7d2b52bf634533b823"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "b0cdd06bb57434feecff22614259d8b2"
  },
  {
    "url": "tags/https/index.html",
    "revision": "94ced0585272568787c888978335a35c"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "ea8399553619dd5f7087eb01c89d92a8"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "8faa2753825a39cddc51971c3a9fa488"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "10dafebf5966e73917df93760075dec4"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "1adb42dbb527e4e14856958ef42ac1e5"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "91385f8feceb2d42bed63517890460d3"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "6a9df87ffd5593c2d6cc37786557fe61"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "f224a5b4d546083911bf58a7b9d70891"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "3c6b5ef4143986028aadb06e46eb75f4"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "a921c84801a1b4931b05fdd13608dd53"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "690bbd03c3bdf4f586ce70601b3411ce"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1644b589e0d60824255a5cc42fe95b27"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "8c536073ab0c593c9c7adc99908d03a6"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "521ab844538b9b54568010a6395aed47"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "2e59ce0ff4e5a601896b4b68661d905c"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "8c238b16e2cde97e899b069be5cff669"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "5d508e1eaca15a02fd146040ff038129"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "84281e3a4965a1a49d0019743c9784ab"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "a7d8804d3b52fae46991d8e340f4c898"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "7680deac5ae1af5341952ebc4b51694f"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "59a1c6403c16ab89a7617b73cb8d6158"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "77afde27938f60c068d23901fc913a13"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "14e6dfd34a6c4af9c7c023ff1ae869f1"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "e7190d8f1fb04affeb1aaf42f73156c8"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "0176fa61100607968bfe21694d091aaa"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "e97baea88c56f6a13734d084a5c5b7d7"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "26849e533f69aa8861dc4448b1e890c3"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "f6bbd7e95870af30f6a5b6a33c0a5907"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "dc5012737ad94be8b4c7d171ae534028"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "d940f837a73c9f50676b5af109c15ef2"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "b5088816ac8f027198373c2a009f5318"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "c631c80ca18c70be04c0482f8666d51e"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd1919037a72792401219d28160f69f8"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "9383f9fa309e709deb2f4ac2d5134bf8"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "95eb5580db21e16be2704b4c4223a0b6"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "e95785d8220b2ca52557bbc7d54df28b"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "6f06f9490587db6a3608cd23e2d13c7c"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "cfc6a32f5751983b4914328a6e26c586"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "b3f566f847ca3f155f17f176644bbc1a"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "81e2fa6de903565e8dd2c245bf02b63e"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "30a705dfcd5fdd4db52f6060849c38bb"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "a48cb8c76cc4aa1186d456423b997194"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "b7bf916dffea5979f74ae8afe1f91b31"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "faa79e1404911ac915cb6ba89b5da184"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "658038eb09efe0bda4a87dae9ad54060"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "760c7db48e5995e544e5b768b0349d99"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "84dfa8448c416ee4448e12d8969d6f8e"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "b31d1dbfeeab686d5265d04000cdee17"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "ad80186b06568f5624f10a8fa33c8f10"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "50aa1141cef556666a45f1b907a6be2a"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "73a700877f5c167b10260ede76c0e91d"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "afe64c094143cae0d72c85c501d033a8"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "26517b50e78866241056d56f62bc90fe"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "04d7cbd631fe83bb47e70da00a79293a"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "2708d984f968434375f253b0200d8478"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "dafad64feae7b55695edef95cdf14984"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "c690791895992fa6868366cde2d3fc67"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "9974a61462497f3126545dd6e32cf5c3"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "7b10c8adc10735b414964fd3788f8138"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "075407bb4c2ebc3835cd1df11af8c511"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "c2bd6e15b11242565515550f8a07ea09"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "c3a4da43e56f94e08dfbc8b65eabe739"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "5b4883e776999be755b9e3ed0a1729d1"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "cccb00a0fb48f61ac04c2049e85ccdbe"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "0a2e27fec28a674f31cef54af388926a"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "9bccc5b4ba2591d95a7943d94132bc93"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "024b833f6bb3efd6b2760e208591ad3b"
  },
  {
    "url": "views/index.html",
    "revision": "29e6ef7d82c3328a58fe20aaa402dec9"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "6180c85c24d3d34bffe77108e7fcaebf"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "b84217c940e85cf0c6720ec300515c06"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "2daba475225c2e4d01c421ec77a87e03"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "18f9fba9ddbc119cb802e7d3b2bd4327"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "8647a7f5e423e85c64ed759d2378971d"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "323f41a1ff45fad9354488f065cde2bb"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "0cafc6837bac06b342c6c918fe4511d7"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "1d3f2b126cf38963ca43e232453e73f9"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "8621dd81d8763cb25628244657e19942"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "f8248bfc07c69d02950f3256d0d2e824"
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
