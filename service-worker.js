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
    "revision": "d036412b269c2aa826c0312c33828da2"
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
    "url": "assets/js/1.c587002c.js",
    "revision": "5f7b76968b670e661fbede5ab25a3812"
  },
  {
    "url": "assets/js/10.efbfb807.js",
    "revision": "374604fc67b1f955c093748ce05684e8"
  },
  {
    "url": "assets/js/11.c2ed9543.js",
    "revision": "6a28def1d86be36a6f2f86e0532cac08"
  },
  {
    "url": "assets/js/12.f779f9b9.js",
    "revision": "3037cb0a3ef07a454139eb52a4cb61df"
  },
  {
    "url": "assets/js/13.564c2abc.js",
    "revision": "85019a3bd5422307e1561f06a44c0905"
  },
  {
    "url": "assets/js/14.e790a64c.js",
    "revision": "26dda7c4b79909ea1e45e06a35d2a91c"
  },
  {
    "url": "assets/js/15.b4c9abfa.js",
    "revision": "6b41a04312aeb6f847ffec67ba1fb64a"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.6f0a3b71.js",
    "revision": "389e726f571c2b2a299ccf32ce73c8d1"
  },
  {
    "url": "assets/js/18.9d2eefd6.js",
    "revision": "fdb08f26baaa2d240d272a9a25935513"
  },
  {
    "url": "assets/js/19.d0e355ec.js",
    "revision": "f48e9501ceb073bc1289a22562ed6387"
  },
  {
    "url": "assets/js/20.e43321a5.js",
    "revision": "8c7af4ff6642bfbcccf9cc3593834984"
  },
  {
    "url": "assets/js/21.f30ccc09.js",
    "revision": "53cb04db799b6353c5c2a4c1b7f10f11"
  },
  {
    "url": "assets/js/22.03fe035a.js",
    "revision": "6f8afb6ed176f5e6cb6917b68a6c3534"
  },
  {
    "url": "assets/js/23.25486db6.js",
    "revision": "c5cac2918fba7716bfc7030788713087"
  },
  {
    "url": "assets/js/24.264962f4.js",
    "revision": "5957f9de5089208b952b8391d300e485"
  },
  {
    "url": "assets/js/25.f010ddb7.js",
    "revision": "a17b99e524be37d2e2b2ccee493370b6"
  },
  {
    "url": "assets/js/26.e51101f4.js",
    "revision": "1ec811517aaf14246f8c4757e9772c8b"
  },
  {
    "url": "assets/js/27.7bbdb6d4.js",
    "revision": "b547f404d3c6696546f45108860806d4"
  },
  {
    "url": "assets/js/28.9a6f649b.js",
    "revision": "9e8f7d6562811c526f86973f17ac6f0d"
  },
  {
    "url": "assets/js/29.a17ed341.js",
    "revision": "89e3d92bfa8a635b71d9de5dad9753b1"
  },
  {
    "url": "assets/js/30.c8bd8e38.js",
    "revision": "55d4553da15c72d11d0d9eaa29b890d7"
  },
  {
    "url": "assets/js/31.25f2fcb7.js",
    "revision": "3862fcf5de1333d65514427ddfff2796"
  },
  {
    "url": "assets/js/32.dde45eed.js",
    "revision": "141603c34debf0440a5acbc7286e4c71"
  },
  {
    "url": "assets/js/33.d27cec2d.js",
    "revision": "7fc8e10e9fe7535020f045141ba8490e"
  },
  {
    "url": "assets/js/34.8bcf6d20.js",
    "revision": "ac7e6aec2cdd3dfe1319b75746e02ccb"
  },
  {
    "url": "assets/js/35.c24fb782.js",
    "revision": "cde492ace777e4cd058cad4b130b09f6"
  },
  {
    "url": "assets/js/36.015ab9a2.js",
    "revision": "d89b2754c540794e8848c745cccf53d6"
  },
  {
    "url": "assets/js/37.78db009c.js",
    "revision": "4c0be2e02a46b19971fdd3ded1c98c96"
  },
  {
    "url": "assets/js/38.6cdd582c.js",
    "revision": "694aec8dfa79248531f426f4754e386b"
  },
  {
    "url": "assets/js/39.384ebd39.js",
    "revision": "dd741a7aa490cf65ccb0a9773d6da4ee"
  },
  {
    "url": "assets/js/4.df261250.js",
    "revision": "fba448b20bf9c5d6cdb52fa2a167d5b5"
  },
  {
    "url": "assets/js/40.58d016e6.js",
    "revision": "75fcde896fa1de392328b3784719b22a"
  },
  {
    "url": "assets/js/41.88873b04.js",
    "revision": "d397db3c746528253aba79297b401543"
  },
  {
    "url": "assets/js/42.21a908ed.js",
    "revision": "b3fe3d8638c00bd45a952ab2b62c76b6"
  },
  {
    "url": "assets/js/43.8a62f8bf.js",
    "revision": "670a13ac5234b5ad2cf192b5cd758a5d"
  },
  {
    "url": "assets/js/44.4cdb37d4.js",
    "revision": "9bd23957b24410032776c27533623281"
  },
  {
    "url": "assets/js/45.e53604b6.js",
    "revision": "4b46d37357faf187f09bf1e519ef3e51"
  },
  {
    "url": "assets/js/46.d2910567.js",
    "revision": "16a278e5b0c1d70819cfcf3033820e23"
  },
  {
    "url": "assets/js/47.e97d982a.js",
    "revision": "f791aa45178b6c515261bf24b17f1d7b"
  },
  {
    "url": "assets/js/48.80865216.js",
    "revision": "04a92455fbf9364c46ef2cb05d973027"
  },
  {
    "url": "assets/js/49.4959ed5a.js",
    "revision": "b9d5617bd5fd9e472282bac53ee7c006"
  },
  {
    "url": "assets/js/5.a0cf09f1.js",
    "revision": "bb12c292b21978df449d337e690c33a5"
  },
  {
    "url": "assets/js/50.928f56ce.js",
    "revision": "5365bd0c89b3e1745019b16844d47301"
  },
  {
    "url": "assets/js/51.6de8e75a.js",
    "revision": "cc1e67d16e65ff801306feab8c4b7b64"
  },
  {
    "url": "assets/js/52.19cfc3b8.js",
    "revision": "b2132a50fd20ed8f80922f0674e43abf"
  },
  {
    "url": "assets/js/53.90c4acbe.js",
    "revision": "0d76d8e4232859b4e00599cae5e06d98"
  },
  {
    "url": "assets/js/54.9b5b3b01.js",
    "revision": "a31d886bed84114375b141af4f90231c"
  },
  {
    "url": "assets/js/55.d8f5fc22.js",
    "revision": "1c6495653008f0771dcbef8a0bdb2cdc"
  },
  {
    "url": "assets/js/56.c0010f98.js",
    "revision": "f66b5d523251c3b7dbf3e9cd9e1e7bda"
  },
  {
    "url": "assets/js/57.a6ddcfe7.js",
    "revision": "1b1e817dce9b49916b5b2bba83f9e529"
  },
  {
    "url": "assets/js/58.6a272a8a.js",
    "revision": "1507ed3c2f224e0a2a06b245ccd3d400"
  },
  {
    "url": "assets/js/59.b749ace9.js",
    "revision": "def742ab47065db203f332b980d3d1e2"
  },
  {
    "url": "assets/js/6.c3845513.js",
    "revision": "bb02c80adcf1b4c04be150d19890bf26"
  },
  {
    "url": "assets/js/60.e7fbc851.js",
    "revision": "81824760e725ea31a8c4a4aaac5eb57d"
  },
  {
    "url": "assets/js/7.00a49186.js",
    "revision": "4c439d7805fddab7c9784e8c48bd93ec"
  },
  {
    "url": "assets/js/8.043e69b1.js",
    "revision": "163db8dd5c4f7ccdb68e25047d8d2d5e"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.ea595495.js",
    "revision": "b3c9dad67e7fc91c6037b5276fc9de68"
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
    "url": "categories/index.html",
    "revision": "82e39f1df4b1e451bb7ac89640653a66"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "22652a454f15859a584701528e9569ee"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "ec5d2dbb9a574062c06dc187b6a10891"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "2b937b5150b9feb2f23d0a587264a673"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "a8684c6912c97a12bf7ee357298a4550"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "755299071c688464fe7c4e0ce2aca54e"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "faf5bff48043c9ef326389786f593e40"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "bd297deaa265402e929ca977e21b3106"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "ec1370b8f148166c6935724eb5db1cc0"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "e44a57f3bc85c0ebf01c24e26ccd2d65"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "1f764964f33b0670c59f6e3dd248ed3b"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "0238596d5db132e0da6aa85f24a769aa"
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
    "revision": "122298dc016962c81cbe551f1347c74e"
  },
  {
    "url": "tag/index.html",
    "revision": "818ba819cb7388cb0e402c8d61e7c37b"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "687a58915d75c11d6bb105abb9d032b6"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "5dc410c9d5dfb44cb237bdca4368b3bc"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "7e6479c512f5616969f383be41a98af1"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "1a510ff08ac152d99258e6d811490380"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "b161303e06f918ff9241538a9208a2bc"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "be058312a3fc1d4ca919fbd746be2e23"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "e1eefd71a9f63483b1467ea00dae4c9e"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "482a25c20fdaa2c007b29d44fb016f29"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "75b0d8c63d22e4c956e91aded2f0e9da"
  },
  {
    "url": "tags/https/index.html",
    "revision": "5d6fd1eb3c4fb5025caa3d5771dc0352"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "cce4282eb3efa4e4f37723ef9efabd63"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "ead6b10b35f45ff2f6d16046aae30bfb"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "57f4730f56193d0f905e265a14e264cb"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "16ff7ce23d1cf4fbc58bac878ac0e70c"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "0b7fc1bdcfcd81aa2a6ce8d2883317ad"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "dd9f915e116769b58c7a3d49d67b90bd"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "a1f07463e5d4e9612170acefb204a6d1"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "cbea0b9d4e7f7f8e67126ac54be180d4"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "54924c18a4f23f7c3188ff9e8747b90c"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "2f1b3593f7f74c974cafccaa424d5455"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b461691a9303ecbae34fd889fbabd11d"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "549fafed31d1e134acbc6e5c6c1a8f2a"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "1f10cd89627d45454207b65d0ae954d6"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "9e6d197ec58eaeae837aaa0574781de9"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "6b7286c78a1f8a85a0e1ac20c8789078"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "dd67f950dba3c5579430a8e4b7e324e4"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "5a9e6f016b7ca84ee891432e4c590066"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "235f10e17dd3d1a39943f7eb5e3a0ed0"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "d413450dc858f070029bce0f119d8803"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "bcf8ec5c6dfde14c301af6707e45a7ab"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "7c4a6fe25472c6fda0870ce23466c534"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "d34cc5558e0c38668730562d8b24fa80"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "e3f3bd1e77cdcf36701834b373662ac4"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "2b486a9ad89aa78a6d003a72abbd0330"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "2b4f86a776914cc657611d4c1ea0374e"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "576a0e18a4ea5d943d9467b161ad16ab"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "288200c9aba4ca5770e7caf8958c8287"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "3332b88a46fc9087dd1246b7d1ab909d"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "7eb19b80370d02c0a22dfef13a080cd6"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "60e37d44c9e71e8f5db660134b8d9fa7"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "69cd1b9b5c6dd8e5c3f022ba4d8f24d7"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "259c878989d5f30e29df6a04795eb80f"
  },
  {
    "url": "timeline/index.html",
    "revision": "05784c8bb810f3932a6f9b96805b82ba"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "7ba47d08ddb41d1a41d815b3be04243c"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "9e73159e37588f59dd451e92e07e80b7"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "d3b8fd95ea29b7c7a411b5cf56244979"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "44cd8f24bffbd2bd3d1401ac2dc0e4b2"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "7ae48d19227ef428d1492a173ab810d1"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "36c9dff34debf19c49a5fff4c78d61f5"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "1379976d4b7a2ed7c6221941b305be3a"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "28eabe58533ccf4882f7b0d8d1547b01"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "89131c9f9596246aeaa1c94e7800c100"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "abf8fe57d9bf5ee210801fdadfee9ec8"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "a9f8b5d2c98c49a28b35542a5e6c9d3c"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "e9333529e0f37b36c100a258e9327bf9"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "abf744697be9e6fbb53198f42d081da4"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "ab10e26eab4e85fd94c6c2b8a1806dda"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "37405b47c6fa495439b2beced660c5a1"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "72d357a6ef335bc62640c9166a89cbcc"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "833aff06dec90b1b40ac8845d117fdec"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "5577f75019dae3931eb798dcfb7f639d"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "03f6901aef361ba062e8ea3bcc32cb42"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "5a7aa4941e08bdb7e7ee0cb75875f760"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "0a245aa37a5b9590ae7342b680344cff"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "7bf8a9d381496a816a174aaf7185ee9d"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "5dfd48091eb2a829e451f8cd6e198cbf"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "0d620adf98c6090dfc36131434d011ef"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "26a103e15957f0e2a27bccd2c4030004"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "da83e7ca4cbdd892124e7ddcfbfa32b2"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "4b32697198ccc6a08278c70000543324"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "ce2b2b659cf80501f75aed98f5c6ac73"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "99299f1fb0fc107005070a4a39e3a52c"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "63eda06d845b7113033689851230db51"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "7518878629cc17d5983209e0bb858802"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "26ccddc32ac728756d4324fbc00072b3"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "7b68d9969980322623ed594067f6f370"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "bacabeb33f93a3724cb18964a563c24b"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "360d06637d31269c53ae2b01056d3277"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "5554cf11fe9670fd73482cc3f3babcf4"
  },
  {
    "url": "views/index.html",
    "revision": "f6cc9f8a003d79d3227b2ab8a414194d"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "ce51d3f7b09d30fc9eeb213fc27a9fd3"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "898fc30e2cdc0b9eb154d5c7cdee4cb0"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "681c3ef8fdab504aec43a8d6ac9891da"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "562a11ef37008de2d3b4cf2efbedd334"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "b6b0691e665a4ca5e92f94307efc9969"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "0ba7c7972c96b35e26136a95c3d47f3d"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "e377d682c5373fc3bf014fea15918a82"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "5ac0a48b54437310dffbe5d8a22f1c61"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "a5aac642cab2501af535a955c090b794"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "361d4d013c022151a4589b8128840ca3"
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
