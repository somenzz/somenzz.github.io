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
    "revision": "a36d8838f052c2b7890316d7d07345c2"
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
    "url": "assets/js/12.59035959.js",
    "revision": "5c4aed774d0e5dd92e70a614a0e3d493"
  },
  {
    "url": "assets/js/13.b8de9b9a.js",
    "revision": "a36380faa29c2af99f0184f98a77b171"
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
    "url": "assets/js/17.4825c92b.js",
    "revision": "2cf1fde49e5d76d9126e13afad4a2e73"
  },
  {
    "url": "assets/js/18.ca4c20fd.js",
    "revision": "f46c058955b94536bc06a8c5203b50ef"
  },
  {
    "url": "assets/js/19.d25788c3.js",
    "revision": "0187d44e48a0902f429d12dae81c857c"
  },
  {
    "url": "assets/js/20.cad9c274.js",
    "revision": "0f50df6c73dac45f9bd21e600532cc4d"
  },
  {
    "url": "assets/js/21.5ce71ef2.js",
    "revision": "d9f9a9abe00bf20e67fb7b9701697400"
  },
  {
    "url": "assets/js/22.982d7606.js",
    "revision": "77601d3eb2a821a17f6b9915f5b99a6f"
  },
  {
    "url": "assets/js/23.e6b24f9b.js",
    "revision": "67579fe8ff728d46d8482a30ef147f11"
  },
  {
    "url": "assets/js/24.3fadc5b1.js",
    "revision": "88e3d52362d96e3e8dcb635819f27ed0"
  },
  {
    "url": "assets/js/25.65eef053.js",
    "revision": "6e83dcbe2970463ba95b1444abb02e0f"
  },
  {
    "url": "assets/js/26.4ed92cc2.js",
    "revision": "4c9e37956edba1f8986f78cea8532952"
  },
  {
    "url": "assets/js/27.7bbdb6d4.js",
    "revision": "b547f404d3c6696546f45108860806d4"
  },
  {
    "url": "assets/js/28.d50788a5.js",
    "revision": "db1bf37998d2670e7876da3c3e2df756"
  },
  {
    "url": "assets/js/29.a17ed341.js",
    "revision": "89e3d92bfa8a635b71d9de5dad9753b1"
  },
  {
    "url": "assets/js/30.2cc282db.js",
    "revision": "3f29f1889532a9d75b5465cd07da202f"
  },
  {
    "url": "assets/js/31.25f2fcb7.js",
    "revision": "3862fcf5de1333d65514427ddfff2796"
  },
  {
    "url": "assets/js/32.fdd67513.js",
    "revision": "24ccba2b3953207b78cf56f3d1db4c2a"
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
    "url": "assets/js/36.7d526c73.js",
    "revision": "fbea6283eccb49fa3e495d2eb2835c4c"
  },
  {
    "url": "assets/js/37.3a018f10.js",
    "revision": "067374f53fc9191ca2ac9625ad2b4e48"
  },
  {
    "url": "assets/js/38.4a3cd4a6.js",
    "revision": "c05e6035b06e66ac037157415d80b40b"
  },
  {
    "url": "assets/js/39.f0870699.js",
    "revision": "43a2c7c22b06c8aa93d22891aac2f99f"
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
    "url": "assets/js/42.307bbeeb.js",
    "revision": "9de3a2484aa39c80a406b2dc60c390bc"
  },
  {
    "url": "assets/js/43.5737356b.js",
    "revision": "a8748470d6bcffb6d22685f88aee8e18"
  },
  {
    "url": "assets/js/44.4cdb37d4.js",
    "revision": "9bd23957b24410032776c27533623281"
  },
  {
    "url": "assets/js/45.85442a38.js",
    "revision": "033473d5ba6c139ae87685988bf91ca9"
  },
  {
    "url": "assets/js/46.c82f4ec8.js",
    "revision": "73f4e1b8dd53c7126ebce05e030b11c3"
  },
  {
    "url": "assets/js/47.4dbf9d29.js",
    "revision": "59fa116a730b7e61ece454d30ccae93c"
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
    "url": "assets/js/50.30c1f7f5.js",
    "revision": "4acbea3d328e2e858391207c94f55895"
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
    "url": "assets/js/54.a06e2710.js",
    "revision": "5b31fb82bb06a17219c32f8a766d1aa2"
  },
  {
    "url": "assets/js/55.a7facba2.js",
    "revision": "843eba4ba9be38c687f459c90f196c29"
  },
  {
    "url": "assets/js/56.98307e78.js",
    "revision": "ed8975261c1e2de4c1c91ee63340878d"
  },
  {
    "url": "assets/js/57.914836d6.js",
    "revision": "706542231aec5112f01f10bd6403ed34"
  },
  {
    "url": "assets/js/58.4760fe7f.js",
    "revision": "4066ab6c1d30beca1c281f26f6bbefa8"
  },
  {
    "url": "assets/js/59.ab989389.js",
    "revision": "a3768f9668faa022665e092710e6acd7"
  },
  {
    "url": "assets/js/6.c3845513.js",
    "revision": "bb02c80adcf1b4c04be150d19890bf26"
  },
  {
    "url": "assets/js/60.59c50d13.js",
    "revision": "2b7b36c5b2902875ffc5e52459222045"
  },
  {
    "url": "assets/js/61.78ae9ebe.js",
    "revision": "12dbf35cb1dc377c3e4ee72ea4f98b27"
  },
  {
    "url": "assets/js/7.00a49186.js",
    "revision": "4c439d7805fddab7c9784e8c48bd93ec"
  },
  {
    "url": "assets/js/8.96b2df32.js",
    "revision": "fd4f3a0d80aeb376f663aa16022df8fa"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.c48e3455.js",
    "revision": "a1a8a36ebcf1bd28c18f1eaf12fa5f08"
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
    "revision": "fa74225e9ca1cd6ba828ae06502d23f3"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "0ef32ffd2a94e7571e6b70dbc6fdf801"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "3c0aa139722e58ebdf1e54a203abe871"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "696e37f011addf6e58133de6f472c291"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "67601fb0461589f0b151465f26b35351"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9d78dc4b8cff002f4660c6f78f1246cb"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "2b6bcc1db79e710c600fff0b6d32e3cd"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "c6ff8d9289159680661e841adafb51a6"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "17e87ed752f740d4819eb4fa85cc9182"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "7477af57910e84cfb5cdc593566b9258"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "eb7799121086f7398578904d3b233fc1"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "1390e379b86aef9f82b4a7c4f149fa99"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "ccaf48cdffbfa48ca5ca8db90d33a11c"
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
    "revision": "e94e232ee8cec5b58236daaeff526eed"
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
    "revision": "c275d89f9e3fb3cca056dd9765619cbe"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "6f64d1a728e9cde1fbab3c332fc17b5f"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "45bde0d85b14e60f0fe906273ab612ec"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "3f39f590eada5ee161fef8f86167e919"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "47b89763da94e086cff4478532310014"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "afa713557e14932e264cdb8ca74b7b08"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "346a01695e8ba64bb2001e629bf6afa5"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "c722c43ad319c9638bc4dc3fca0f3f55"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "29a5cf5b54f675c7ee034758d73416a9"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "ee2ba2e7a7f950ec8fad0dbdb795942b"
  },
  {
    "url": "tags/https/index.html",
    "revision": "935e68f98bded84227cfa15a53aad29c"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "aaa5626d2c756dd986b257040b0dfec6"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "173a1599f40252082625ac9e8ac2a538"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "212e2fcead457313bbbb7dbf0b970064"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "27f751891350c324e5e116a97a8fc3b4"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "db657f18537aa212c85264912089e8df"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "b0b9110af6019029c75183410bf4f11c"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "b41e5561124cc372e4683d8b1811ae4b"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "64283bfb1d3fd81195e6ddeee4eca400"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "171449dd49bc749a2cc28db1983b5b97"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "008bfc9d115d6a1856ce387c7450c744"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "825694c23f949f95d0ace32d41154253"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "74859a9ee6a233503e005b7fe6727bbd"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "0b664678e64ab62056747b5cee8c8bd9"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "176ba1df7843256a6642adec6eec5548"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "546b69620379c4d9254da970714c47b4"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "ed4040267e716cf48df6cdd4034881b6"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "654ffea0e15a02806465ee0d7befddea"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "7cb72657c78fc2ccf3dc205ab204cb82"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "0e13ad476fed720a09b02639b63bb139"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "08fda877a558b4c2ff26241dd74ce038"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "0f2d35fb5d01423e461649dea7d59e1e"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "48a8ef9ae2ab1abdd526a5144b4e695f"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "a0cb0f0435ab8879e76ee1224d46ce05"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "b924c516e9a393390fed6247b8af7b27"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "daa5abe4a18bded5fc4aba25f01149e6"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "0aee818d101abb5f4815ed818b6cb3de"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "2d20d578c5b431ebaa588522c24487d9"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "20ea9b3a077369d197632d19c5c2acf6"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "650139e3d64f9994902ab7ef74f24425"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "b160d376553c77f42a6c7d285bebe6fe"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "1dd1c24b0e62e6cb368e38efcc9c2ee3"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "3a063c99bfbbd3d2bfb6d593f29d5e38"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "88aa6cf6c5080e14819237973f447bff"
  },
  {
    "url": "timeline/index.html",
    "revision": "f22329480bd4f8cac5f2e31535666e20"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "0ca08d06913273b5cd13c3eec044a4d8"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "601b628a54b115fb24bfc9f60ef73e94"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "be8cb152445c2083c9342c76b3e9e62c"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "71758101d93fccd045fd1ac5d323067a"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "1cef0d37e79842b9d03f907a64706bc5"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "363c1342ea3388031482788197c49a0c"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "4a3f5189aa0cef70d33285173654377c"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "29be287c098cd92bfb1b7d3704b0dfe6"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "055abfa0a636e6f0923edd4767abb664"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "c8412f00448f6cdc7eca37fdf0f99d54"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "32f14010e6cadd464fb2705194fba224"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "a07ba3a5a21639834d427db653acacb1"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "7ce0863fa713456527c27caa1a01e86b"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "367d35fc215df7bbb301729450bb6b42"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "3b13b403a628a53455ad9338a0b24640"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "2fbe2349e27ba2bb5ab33a457d71732e"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "1237591739eb9e940f7f65453688a8b1"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "75b59a6d6cd44356ace22cf11b080d3c"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "7442a3d5d877e3d2f21539bda91b7900"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "c6e732bdc5521441785c0f03e57e5a32"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "12540e67a42b5a6a2e100878039ec874"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "344c4231fe60b842b927b0055dfdd4ff"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "497c29e78f4bc794113af8a65f571089"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "8d754dc426ffdfa80fe788e4165e2568"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "4bc63c887cc835c0e766cbc4c7a8c86b"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "cc155f194620f80f769b4593b659c33d"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "2240bb375b5aa424efdc6c9d9a91b974"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "b091d350643d611536ed1228d66fae82"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "8f090d9023358d291a34854374ea313d"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "e740b0cae16411305138a82a6cb7bcd7"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "06d691f427c5cc0ee7a6706a8dab32fa"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "fdd4050015d32b735ef151e28195de2d"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "3d36916f2f9d8af8f700b3c69eb15a93"
  },
  {
    "url": "views/articles/2020/1107.html",
    "revision": "ebf31658a56ef1c3a0f04a317c9adae1"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "c7ff50bb0e9ff1c9a848d50b832499ae"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "c19a6a4e5bbe215aba75c42f503e8138"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "8e3c2edb5c68335483e5fbec44c218b4"
  },
  {
    "url": "views/index.html",
    "revision": "ec1fb7bcf364e8d160914f074757c11b"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "1f59f282e8cc42cd50866ae2b4781f1e"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "fa2b8fa25f6ba6540f4c8fd56bbb94e4"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "5308c6ef4c0084aa2b5506667f28908e"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "ac34afdda1e747872f1b6f9581bc1990"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "77ff0257f0da74b793009ff46d2aab7c"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "f1d41dbf69d4ea1f0bd17ea382900794"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "49c4a538be0e31f8309becb01dc40407"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "bc4e820f9a12bb97bb4392dab4f087d2"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "46923e77186f8389228d65b860cbc46a"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "1adb5af51c30dd76284403397a8de556"
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
