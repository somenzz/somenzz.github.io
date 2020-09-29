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
    "revision": "cdd6058f4a804af95f4cd6bbd2f389b9"
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
    "url": "assets/js/12.b70e054c.js",
    "revision": "33f16e9667ef6f9b7e0a542ad4406cc6"
  },
  {
    "url": "assets/js/13.bf5a4ecc.js",
    "revision": "c26132126ede3884f627995c30a483b3"
  },
  {
    "url": "assets/js/14.084d7775.js",
    "revision": "9e13117b289f264d702e566c9d78a9da"
  },
  {
    "url": "assets/js/15.712132e3.js",
    "revision": "fe4d01a2ccdd26bc09b688ab2e437dc3"
  },
  {
    "url": "assets/js/16.b9d8f7aa.js",
    "revision": "92c41f604313f88ee14701365b224360"
  },
  {
    "url": "assets/js/17.dc980702.js",
    "revision": "c410563643a9d75f64c1bfb2389eef93"
  },
  {
    "url": "assets/js/18.95178115.js",
    "revision": "5153a779a7bfadcd311c700cd2b898ec"
  },
  {
    "url": "assets/js/19.1baead58.js",
    "revision": "1fe0967852ef79d2ce9886c1c36ab79a"
  },
  {
    "url": "assets/js/20.8e4265ce.js",
    "revision": "a07d02754ed257493e59accdefefa4bf"
  },
  {
    "url": "assets/js/21.051833ba.js",
    "revision": "1fe79563709f044f2145d6d63061e353"
  },
  {
    "url": "assets/js/22.86aa9b8b.js",
    "revision": "b5adfa69dac026a652e0ab6fff64d740"
  },
  {
    "url": "assets/js/23.2a6c87af.js",
    "revision": "d57e9dacdc8c239db8d7a517c562c2e4"
  },
  {
    "url": "assets/js/24.ef775d94.js",
    "revision": "c13fdc37a1184e242332db4166c211f9"
  },
  {
    "url": "assets/js/25.6a2e515e.js",
    "revision": "3e20baa15ef8613e0c7df1c218377de3"
  },
  {
    "url": "assets/js/26.5d7fb344.js",
    "revision": "18415d690b68c26840a464257c7970aa"
  },
  {
    "url": "assets/js/27.1704ebd7.js",
    "revision": "063ca37ac8f227b456355e8b04fd0dd7"
  },
  {
    "url": "assets/js/28.98fdc2b6.js",
    "revision": "ad1d86a1c7df5222c0ebb6a46e69a75a"
  },
  {
    "url": "assets/js/29.989d4e25.js",
    "revision": "571fc06c35773393f3b55484db2ada8a"
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
    "url": "assets/js/32.984ee3f7.js",
    "revision": "2d6912e50960da00e8e78e81daadf4af"
  },
  {
    "url": "assets/js/33.c4e2d700.js",
    "revision": "4e62f4f03b4cb9dc465cb7d0e3cd96d6"
  },
  {
    "url": "assets/js/34.a19cae3f.js",
    "revision": "7502b7cabd3f9e649e18fc04ed773f97"
  },
  {
    "url": "assets/js/35.6006b5c7.js",
    "revision": "ea6322b20049173e8f0d868340169f94"
  },
  {
    "url": "assets/js/36.95b952c7.js",
    "revision": "319d6e9f6e006e862c525a7c9673f548"
  },
  {
    "url": "assets/js/37.952a4774.js",
    "revision": "9fa36b67d290f6ece281d1efce8c8a75"
  },
  {
    "url": "assets/js/38.ac5c6b50.js",
    "revision": "2472dff9d270732d7aa493c9d4f51dd1"
  },
  {
    "url": "assets/js/39.18597831.js",
    "revision": "c49da85d02e846eddef28b378b807642"
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
    "url": "assets/js/44.955bff4f.js",
    "revision": "cc1e2cd107d7c15dc0874c5259ea0769"
  },
  {
    "url": "assets/js/45.3be0fc58.js",
    "revision": "ba41f80d87d1cd258a2213056c2e2d2e"
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
    "url": "assets/js/51.68aa3a1a.js",
    "revision": "43868701fa9f217932213051b6557863"
  },
  {
    "url": "assets/js/52.271b1bee.js",
    "revision": "39ba287dc11e8c5ec0f95d818d12fbf1"
  },
  {
    "url": "assets/js/53.1b13da6c.js",
    "revision": "0cf6d97998a13b748ce0cd447605708d"
  },
  {
    "url": "assets/js/54.6055aa12.js",
    "revision": "bf25a5c883512bef711ac1f253eb17a2"
  },
  {
    "url": "assets/js/55.cd974376.js",
    "revision": "721b8595f21ebae370f5ab3cea9db2a6"
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
    "url": "assets/js/8.bc549ead.js",
    "revision": "c38ea55dff85f55278141f95c015c655"
  },
  {
    "url": "assets/js/9.afbfc1fb.js",
    "revision": "489af26615e46cd0d55da5408223102f"
  },
  {
    "url": "assets/js/app.d85c3e1a.js",
    "revision": "adec13a9331b183dbd0607f6c2e212e9"
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
    "revision": "908dbfbbbb9efd6e9190a711fbb64392"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "fd32dc21dc9d1f2bc28934d70307eecd"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "446db5a708e8f07c0bbc2ba2e67b7807"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "6c4eb3001fa549c993a37e9aae6015ba"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b1b1dfa64c0a231f8dd6f1b157e75e95"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "722ced260503a51fb7bd6b6f8b36514b"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "edf1e84cb4b4e5ebc21a1cb13a785224"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "4a3b0f751a17018644da52e67e1d170f"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "f036ac8b08ce45cdb60a46d0a2c53845"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "94d8bf70ca2e8c2fa82a91975be615a2"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "900a4f71c4545062d7f9a97692d2afcd"
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
    "revision": "0ef2f35320814c991d047db2cad40ed1"
  },
  {
    "url": "tag/index.html",
    "revision": "7db341e8204f8a61e8c525ea930730d5"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "61b74da8597ce2e54c7181dfb78a45eb"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "040b71308b5e4435121a5627b67d1174"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "505b3392c048a641083e6015701798b5"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "d41294396eca19dbaee0af3f5c72d49e"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "30642370985eaad1160de4cd42532e48"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "9c0c37fa71af94ae077e2af947d96021"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "59f12c0b5124f300c1b40a459cf75a5e"
  },
  {
    "url": "tags/https/index.html",
    "revision": "a595748f2eeb0b01473ae17640e5eca5"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "c2de1bdb6c11722eee47077b6a667e43"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "3124c49f853240887ad3e7514a754938"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "7be1c5221fa808f467c8125f707d657d"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "a535a7d857ba160424069e756cd8e864"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "12b4bd4ba5908693997d079637d624a9"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "b6dfbd9275c5457a1bd99f1bcd9e27d1"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "ab944c4fc4570c577b4bede87ad18e05"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "6ea8747ec2110486d23805f5849eed07"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "ccbc2beae1cd95f7da999546ca29a480"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "221dd4edb45fce31a816333d6d8d5774"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fbb0871a026e7a3397c84ddba4c282b2"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "83fb1adab70f0b5e3b944df0083837e4"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "13a5d8441b6a0f2289aa8ebd61f5b28e"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "e3b8e7b612df7e4c50a133fbcffa50e2"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "04b4c21d281d93645997fd46f80656a2"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "5430bdbf7ced0a9777080452a7c35f23"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "341a7acf50366446cb92dc69b94648e5"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "09d998a4514c98a48ba10ca55a16682f"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "f05ae4e19501a195a4ffd8e5513b7b68"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "457eb1d362354189df08afb6871311e8"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "fae53353edc8265e744dcfbd136208e2"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "14ed5656d0bfeb657c4dbd41e850208e"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "eaaf8e4db2342936c098cfeac3f559b3"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "932361beab5afc14f4158eac59642c03"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "d432abf342913add1d6dba721f6fb2ff"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "acfaa5607181962259d41ed4be88d8c3"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "cd897b9fdaf43da134c565885edb09c8"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "61d9d75c4959d353d115e1b2bc29eefd"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "8140cfd09d8121aab33c11a2c209794f"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "2193282c7a17804e3298b2b5fa3d04ba"
  },
  {
    "url": "timeline/index.html",
    "revision": "d40c0f04f643dd756c0a219f72d1d9eb"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "70fb8b23454ec507e81103639a631604"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "07966dd5eb03e881df7c3e23e4790330"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "4140e4d5359e317c98396fb667b3a243"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "35666bc9257e8a3027f6d3cc9132ebc8"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "f02223b5465d3b25a8c12041266ca836"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "9af0f3730f37db331df120a22069e3df"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "33af8397392320a3bf4073ba76bf78b4"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "0f34ab0264b19a5c74eea397dd0db430"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "21b6bbe0c7a54d934a6533309ffdedda"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "b813a67245362418749fac37d8ec6819"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "57d80c8bdc939a85fab496e9515f5426"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "e0fd261a7cabd37ad498ed62854bd6a8"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "a1514b8dd4445b835fd5896cec3ee6ca"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "5d6d8db1cffb6e5977ef7124cd706019"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "3236fa7ba1aff73d6a01eec5a134cb2f"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "48ea8eb39c30c284cbf8064b14dfdc8c"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "d14f2b2a092b89794df0dbb7f785c196"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "df01eb9d9dd70b8feeeee7504a8c1e8a"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "b230e1c1b465458b104bc9f0e4063361"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "98301c659d86d1692c9d320b7a9b86cc"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "63d120e5eed906b83b5202a80b00cea2"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "8769bde914ec507315389a097c30209a"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "27c9123a7225dd2a50a47d0c7f882c3d"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "de64e127d351350a8a93f684bfeebb68"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "a85575b6307085815a411ddff75f4914"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "83ea60dc88ad56eca58dd27cbce120f2"
  },
  {
    "url": "views/articles/2020/0924 copy.html",
    "revision": "dffd81f8ffe64396587776256c4b2f84"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "6a933dcd5affafff0146d47fb6e1feca"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "6e7a7a7ccf49eaa100f0906f419d5bdc"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "5063420f7082e203a572ff0633c8118b"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "c66a19d8fa65a1ab1ab62a14a5073edf"
  },
  {
    "url": "views/index.html",
    "revision": "e0939873d915462cdaf4579432810f00"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "8e571e6814308989ac6d064697daea70"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "88d3027834a985c83eac773724082e81"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "6ae64ccc82697735fc0e91dce3855494"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "332ddb8255ddfae23a152841485046f8"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "af8e48892a2fcaff282c2a0d7eefc657"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "8def1ea15f9fd57873f439de1be986a6"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "c1cc334fe1f458fe280be97fdccd215e"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "ce7e977f6194b300427af6e4b57bd74a"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "acb76faf460205e9756a0dacab879cd1"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "29aa7afae52973f3a0b8ea3c7b8f3b2c"
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
