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
    "revision": "c549f96ed552e1e90fe61a77720d4622"
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
    "url": "assets/js/14.617eb505.js",
    "revision": "3eb3fef181d39532a76898fcf492d291"
  },
  {
    "url": "assets/js/15.c697da7e.js",
    "revision": "fd36b1c0f51fe0b41383be623a327c89"
  },
  {
    "url": "assets/js/16.9a2dd39f.js",
    "revision": "e8ceeefd195b875d509c5caf7b5f292d"
  },
  {
    "url": "assets/js/17.a5327b65.js",
    "revision": "f3bacd436c22690dde1b4d8c37348585"
  },
  {
    "url": "assets/js/18.3d2cf294.js",
    "revision": "c90925181b9348659ac242eb09b51a59"
  },
  {
    "url": "assets/js/19.ba89b48c.js",
    "revision": "c2e81c76e85a570bedad2e3b0dc04cc6"
  },
  {
    "url": "assets/js/20.86c0208e.js",
    "revision": "d96925f2477fb6e79fffba9be958ce9c"
  },
  {
    "url": "assets/js/21.f6838a3a.js",
    "revision": "ad5d7c39d3d3baa10e59c89a8ecb3e64"
  },
  {
    "url": "assets/js/22.d5638b9b.js",
    "revision": "7fa08506a31d7d8c7ef88e68b4b5eddb"
  },
  {
    "url": "assets/js/23.2b7c3f51.js",
    "revision": "3b3269fa76e53d3b2b103c4d350e692b"
  },
  {
    "url": "assets/js/24.19f3106b.js",
    "revision": "c5d7dc74195013fc1549feb9e9b4d950"
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
    "url": "assets/js/28.d50788a5.js",
    "revision": "db1bf37998d2670e7876da3c3e2df756"
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
    "url": "assets/js/33.ae5574d9.js",
    "revision": "3b8376a438e3e877b2f9cc3e8f965f2f"
  },
  {
    "url": "assets/js/34.f30b3a34.js",
    "revision": "d6cd211982bcf0e26814f8b871b77544"
  },
  {
    "url": "assets/js/35.13a356b7.js",
    "revision": "64d007efe6dd2284348b8874592a01b8"
  },
  {
    "url": "assets/js/36.d29b8ded.js",
    "revision": "3458e9e583f6f640c9e05812b72cd902"
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
    "url": "assets/js/39.a7e56481.js",
    "revision": "e2089ce1cb53358ad8108178cc160b3c"
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
    "url": "assets/js/41.9f9955ed.js",
    "revision": "f4fe321c687f9ccfc828aab2bfe9edfd"
  },
  {
    "url": "assets/js/42.bfdbde28.js",
    "revision": "fb5a5de4156723e06beb688da13b1d5f"
  },
  {
    "url": "assets/js/43.5737356b.js",
    "revision": "a8748470d6bcffb6d22685f88aee8e18"
  },
  {
    "url": "assets/js/44.95b89f60.js",
    "revision": "af0f8094c896935e1c370e0cdcef2ec6"
  },
  {
    "url": "assets/js/45.1c704aa0.js",
    "revision": "7036bd785aa65197c48c6a5506922916"
  },
  {
    "url": "assets/js/46.aa44630b.js",
    "revision": "f14bbb9285318caacf836980994c13ba"
  },
  {
    "url": "assets/js/47.23ff77df.js",
    "revision": "0ac4d35e1cd275b7402885d682c612d1"
  },
  {
    "url": "assets/js/48.6f6cc35b.js",
    "revision": "6305f3fe29f5be855ec780b3552af795"
  },
  {
    "url": "assets/js/49.fd68bed4.js",
    "revision": "f85e09b7911409f3e1726d53cce21f10"
  },
  {
    "url": "assets/js/5.a0cf09f1.js",
    "revision": "bb12c292b21978df449d337e690c33a5"
  },
  {
    "url": "assets/js/50.9a73635a.js",
    "revision": "95a66e1f8c06c9445fac67eb57c41cc1"
  },
  {
    "url": "assets/js/51.4a261247.js",
    "revision": "bf811de3c360c38890778b4e595b5d91"
  },
  {
    "url": "assets/js/52.b7f6a71e.js",
    "revision": "0cad468e7c234597646477fbc86f6fd4"
  },
  {
    "url": "assets/js/53.d57f1d9d.js",
    "revision": "b5c100f423f33a20240d62154561c671"
  },
  {
    "url": "assets/js/54.2c97af7a.js",
    "revision": "78db8d08f32950e4f79de33b0efa259e"
  },
  {
    "url": "assets/js/55.89e98e85.js",
    "revision": "f26aafdcbf0babe5cf11d03a4e46e9dd"
  },
  {
    "url": "assets/js/56.32d83a4a.js",
    "revision": "4050fdd3cd0f605b2880695e21ccac64"
  },
  {
    "url": "assets/js/57.a7631d62.js",
    "revision": "a1c5ae5197471c092417a9225be52b36"
  },
  {
    "url": "assets/js/58.b1d992fe.js",
    "revision": "aea5c7fa5d38dc710069c7256c37d9f4"
  },
  {
    "url": "assets/js/59.5906a6a9.js",
    "revision": "9d4bdf2c7db2c7a5f068b19a5a35d61e"
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
    "url": "assets/js/8.96b2df32.js",
    "revision": "fd4f3a0d80aeb376f663aa16022df8fa"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.3f0b2e77.js",
    "revision": "2f35dccf8a2fed27d5ea134429a90117"
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
    "revision": "855f246697508646d233af6a6cd5902c"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "0377a288aaa01a4f0f9ec33ccb021a6c"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "34c4bb98409b3f14f5dc26d540629f83"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "2fd087f15849c16e6bf1e5ab7075ac21"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "9924dab231f1c78376da9bc465e5d920"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ccc469d69d7b729927656248d8512805"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "150af94716a0e1a3da8678e84f3b8269"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "e6e3ad95c5cfec1c08acd8f342dd661c"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d89bf53a6ed2e1314341df9dd7a2b5c2"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "c9f9fe7001635823809afc77bf78814a"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "f88eab354407b652ed7e0a96284d69f1"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "71695a519a3bb42c9f6ce31cbaa71053"
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
    "revision": "73fcf373d17eceb01ece01fba046952e"
  },
  {
    "url": "tag/index.html",
    "revision": "e07ce8afa55c617792832ede803200b9"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "3e67dc5443a534307b81134a1fa6e686"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "bf73e5e8facaa063d46dd2ef1c92d925"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "38b9acb093cfcf74e20263e984fcd245"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "d1970a00139a9659b5f45261afb7d1be"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "37d7da2a74e08f4fd1d766293b54aef9"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "f20554ccd9b957281e9d67910bc85dd5"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "1cd604c86d1096e6f73caea9cd5c1a22"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "82944531f632df1ff221e268d4ba0a27"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "a970c2a639f93b332007962eeaec0769"
  },
  {
    "url": "tags/https/index.html",
    "revision": "45e83400b648e42493e2367adafbb5da"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "70a2635e5655c6cd1e58d193ea8e8f43"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "89e3ebd139669a6cb3041ae677edab24"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "322bac2b8967a41749e4f95f31e342a7"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "60c05528ef696adc6162444bb0a12b6f"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "f64d4f8d93a2c9df8f18d559218054ab"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "c358a1177752f15543cf56743c414fed"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "43c9d8292263c85acc5f1c2df1e8541e"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "0911aa6cd1252425aa0d46582eec944d"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "64f81a80718008899fd58404c492fb52"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "decbcb5382b73005a5492bcd81f46905"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b7f3419e693eb92b44948655228dc384"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "d9279473f1251b364fc19983fdc7cf1d"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "12cdefc6673cf6aad6176fb736829af1"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "51d7e0a0796e516cf8b4beb3b694798d"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "0c2b9fa29ab00ad418848916f4ecd77b"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "0627837faba1f3544c8c78dc2d4fd710"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "1439cab14f3fc9b903c102734f65971a"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "e974da240d82ebf492bcf845392bb247"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "4ba4069107c6fac00cfb04e8d0242275"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "c706809ddcf7c67b5ebc59eba7b5354f"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "a054ad6cdf202436b2db584e8064ace3"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "327439c9df3a99af9fd5c72251a9177a"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "34a5d3a0d6b106d9296822c257df8a6b"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "127fed8cec2aa95ce39f7dd46f75b90b"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "66f5047d6469c06d38c51169d18c78fb"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "3d4413e07250f995fd4ce5e73ab421e2"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "1f6b07677c41d52a786d24c799a562a3"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "5b535a93ca8c92d4622b7b613fd0ac2f"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "6335edf74e9cd53c3282c28fb7b1c7b4"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "8a7caa207707a4204024807aacf5bf16"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "cda0c1b866acd371d015987250769c41"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "7b2411d1ab34ff671319e531d4e22223"
  },
  {
    "url": "timeline/index.html",
    "revision": "2e5715914fa4421b2726ab0e9d158a4b"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "f2f09759a635583677c92ff1563f2ace"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "bd90df14a2b11b9dec26f20239430bee"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "5ab4c27b442dac861852dd33cd9cb78c"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "efeb0247f799b9e61e86edcf0e1684bf"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "0169fbade91e5dd006bb1d39a540c561"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "c5d622be09140742ddccdf4574611fa0"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "2056cb4edde855fc1097dedafab64dfb"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "54ea1c64476d8c1b052c0630be6de488"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "e7efbd29a45d7ac4a4b44a44b2947d34"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "89ff4000f36aa0648f076f8d7ac58571"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "364b994ea7d55db00253152ed927212b"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "40b1fcdd743a11f6f742850e5624f6f8"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "5ea4aad0760fab2490cb6c8c8f803749"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "10aa5dba623a0a704d68dec650fe190c"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "328ce5e38689782769de1a54c29c203e"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "0e17430d7ca5bc222ad5d3dcf0f3fdfe"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "f942cf256a8541274366af0e77ac0fe9"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "e38031aee07ade9b38e5308ebf6f8fe1"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "6a1b6e1824cf1fb60edd998380369f97"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "d1e7f8a6f11bd1d725953d48a53e4fb6"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "755c6f168dc6d1c9f7204b25220fade6"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "f0ef5a546ea6165ba0bc387043872eeb"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "5047d5846382b021d15d1c9b0ad25da8"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "50a3fe51a194d4ba3e7e773e38bdf906"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "7ddde0bf525338267582cc9742339e22"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "4adc4a27a13143022353f76ca9cde4b3"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "4e881ee17f097408d43c217281b62d7a"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "04635a7b2187ffb7cd1c4a5177dccad7"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "4668c14b9ea8025d502fe30eb589fe5d"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "134b69255bfeed7334e2068b7c8cccd5"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "ac405c620fd79c78f56fe2f6f4531557"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "43c8b75037b56994115cb82bf0fceb6a"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "8fb166c3e57c48adbc6aaa305cd67505"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "80fb212e052cb626e8af44d23f714c09"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "4167651f027ff0deb5acf4aa3b5146f5"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "60e47064a1a720a925d52da2b302fdf0"
  },
  {
    "url": "views/index.html",
    "revision": "287b2376711a54b5089528c35cc72fb7"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "c74d3892c5ee4f6facf553c02e6dbbf7"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "a50de6b42b051dd15facfa58cac98c01"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "a1ccf1634149293cbadd9e0d009fed65"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "6c8a57555e86d0682ebb22a1c708038c"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "6dd4d9fdf132ff464093471676892aec"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "fe40302e07327c6a90634350c55c18f7"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "d8815868eb86f67f6a263c7c1f38b6cc"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "fb97c5aaee77e05f86123bdff6dbe1d8"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "0babd075b48ea7bc59984c411dbf57a3"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "dfe4249893984fcf2c0e4af5587e43da"
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
