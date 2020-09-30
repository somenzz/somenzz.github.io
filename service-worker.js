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
    "revision": "b340badac91347c78cb36802b01d367b"
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
    "url": "assets/js/13.017c60e0.js",
    "revision": "5146e9418093f1028e219af10cc1bfa4"
  },
  {
    "url": "assets/js/14.fb6d4e91.js",
    "revision": "fc9c2a75b27e355ce922621a7af67701"
  },
  {
    "url": "assets/js/15.8e77ca83.js",
    "revision": "bb8d3f78ed6b5139d936d2deca6aaf7c"
  },
  {
    "url": "assets/js/16.55d9e490.js",
    "revision": "7caf270078e3cb620b0d798508e186fb"
  },
  {
    "url": "assets/js/17.f14d90ea.js",
    "revision": "9ceb8cd8071a99590d533f830fc61506"
  },
  {
    "url": "assets/js/18.a50a6400.js",
    "revision": "29dfabb2215711feed7987702f03dec3"
  },
  {
    "url": "assets/js/19.54cc0486.js",
    "revision": "406e6bc56d85795997e0228934d33d56"
  },
  {
    "url": "assets/js/20.797bcff3.js",
    "revision": "0a7e706a00c160dce2c0f24b6a08864f"
  },
  {
    "url": "assets/js/21.a8007257.js",
    "revision": "cab8d74e97be00f4d2fee9649097caa9"
  },
  {
    "url": "assets/js/22.06c60296.js",
    "revision": "b06f09096db317a76654bdd1f3349e52"
  },
  {
    "url": "assets/js/23.a08bd596.js",
    "revision": "038707646d44ef6dae72b528ed4ddfde"
  },
  {
    "url": "assets/js/24.2a59ab79.js",
    "revision": "5ba03e6e36cb1326ab602f47ec4534e5"
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
    "url": "assets/js/27.702c5fc0.js",
    "revision": "05e0d935983288d407ed022ab721b80a"
  },
  {
    "url": "assets/js/28.66990449.js",
    "revision": "7e6028e160a12a3f40be4bce4a25e6b3"
  },
  {
    "url": "assets/js/29.91413e02.js",
    "revision": "86d5b0683ca416fa2a6fc55c556d5d83"
  },
  {
    "url": "assets/js/30.c5ce23df.js",
    "revision": "4571cfc72f7ff3e6ddf1f50cd512be42"
  },
  {
    "url": "assets/js/31.cf2a17b8.js",
    "revision": "06e48747d633e418a6d9b197489e99a9"
  },
  {
    "url": "assets/js/32.aab356c6.js",
    "revision": "9a5dd789e9304280e92d9b84e520679e"
  },
  {
    "url": "assets/js/33.4609a455.js",
    "revision": "0f9d05ca3535672dfb27170e067d341e"
  },
  {
    "url": "assets/js/34.4f278724.js",
    "revision": "5ecd69b0c1ffd7e546b473d23fba38b6"
  },
  {
    "url": "assets/js/35.c1654c88.js",
    "revision": "13a90a7008c07ea6006939ebda19cb49"
  },
  {
    "url": "assets/js/36.95b952c7.js",
    "revision": "319d6e9f6e006e862c525a7c9673f548"
  },
  {
    "url": "assets/js/37.ee621f83.js",
    "revision": "b61e87fe5ff32e2ce65f2cb1fc829293"
  },
  {
    "url": "assets/js/38.f678951f.js",
    "revision": "57cf39133c8487507b4cc8ac7db65da0"
  },
  {
    "url": "assets/js/39.671b8135.js",
    "revision": "386e5145121b79d4dd8b4f7a1fad8fd6"
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
    "url": "assets/js/41.3e9c1893.js",
    "revision": "9d1b5ea68140c5d980a7c22c25a1b8bd"
  },
  {
    "url": "assets/js/42.aa9a84bf.js",
    "revision": "370da575b4807f436f2b217d24210572"
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
    "url": "assets/js/50.e7b24384.js",
    "revision": "09d75f537f5abce46d77e181b90e2ca7"
  },
  {
    "url": "assets/js/51.ac92c4cd.js",
    "revision": "2697ee50a8d19ae80498603f991715b0"
  },
  {
    "url": "assets/js/52.a08b3c15.js",
    "revision": "68f5d04b61a20313f3a7948285175fe1"
  },
  {
    "url": "assets/js/53.2dcf582f.js",
    "revision": "a9c1b7e7612521a73926d85609a7cd30"
  },
  {
    "url": "assets/js/54.ba00d400.js",
    "revision": "2a180aa6ad6b788b66cfa8e7838a8d40"
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
    "url": "assets/js/8.96b2df32.js",
    "revision": "fd4f3a0d80aeb376f663aa16022df8fa"
  },
  {
    "url": "assets/js/9.afbfc1fb.js",
    "revision": "489af26615e46cd0d55da5408223102f"
  },
  {
    "url": "assets/js/app.421d9f38.js",
    "revision": "86f25c4f8542264a931280f67e8731e1"
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
    "revision": "3166eab3d68f7c67d807e00a51db8406"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "b5e086e96293f3db5bfcd0a12e9d322c"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "5b84f5f9faffd9db409ce43b3c9d8498"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "dde69a3be7c6b1f03b589a4c2ff25e7d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "68323530b330b2b2cfb9e43f77c97d68"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "2e246d2cf9fd61e3d9e9a3fe830d0b9a"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "31bcef3684bd0aa436ebe6f21cbc49f4"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "221e76d5512aad9725b1b96f443fc45a"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "a48712efdbe563f753eb24b06083e7c5"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "0374dc1ff0b228a36a097a697d954baf"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "80de04ed1bf2835c2c7b7209de2803d3"
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
    "revision": "8a847ee02b6c68a6d77aa800d33909dc"
  },
  {
    "url": "tag/index.html",
    "revision": "8e8847a7fcc3647c98f25fed1ff14480"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "42d56a5817f7968b561b37e6cd73c5e4"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "fb683e315f460eaaa6341ea388364fc7"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "1af11b11c96b63b38166fafbd173d049"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "717b70c1d37478ef1d75df5158a0a4b5"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "4cfa36658e45a5211e3e40df89667fd9"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "e4352e4990750e108f163c1a08f004c6"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "55e867644f8564a05dac654791d14c6a"
  },
  {
    "url": "tags/https/index.html",
    "revision": "ba56b0298c2338b21e1cf44838b8d336"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "54ab8851de22906232a9130c84d00729"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "0f70a782e9c37d600bebc56c58a42c1b"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "6c64738ed5969aa6e089a3ee0e47b8b0"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "159f957b00bd169d4746f6ba47423133"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "575b78d3328808cbe02ebe8537ad00bc"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "5ada9d0ea14a1eb52cd1c50a882d8bc1"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "2c31b564387d0b4f16fdc940b1b88b54"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "335a81e9ea6dd3cff97a7398203f25f7"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "0f5fc048ae11b198e3eadaddd96e6f1d"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "21aa2ee247266d08517b82dcf5e90b0b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4083b4aa7eb74bb943d68643167ddbbc"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "e0bcc34e520f4ac2d738f695fc9f3aa8"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "834721fe1a761985a25788323c28d74a"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "f85371ffabcddfbf35e69bc671614836"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "6886b576118b4994d853ce350dd57cf7"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "215f62dbad73043adaeef1e78f2a3534"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "d789d6f76fcf9e676bdf09665f8dbf4e"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "ec3e8aa48e34e9cae43bd3177838f198"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "016f251d1e672dfcf943f8566f360c3a"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "a442988548af351de4802cc6aa709837"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "ff915903aa27e32c8ae61d33c7214c07"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "5fd41dbb8a1397b8dc80f5a7419a72fc"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "fcae2200f1f7bbd43585c7d4f011c378"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "d0c0be5556e54ce81fa9eeec16858439"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "ba036af0a4097ce6ba5cc0c70bda0407"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "fbbb5bded2b5dc3bd1765f108b15db1f"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "1b5bf8938f8a8134dd1b7eab1997bc4c"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "758a5664f1318d776f606fb40b61dd0d"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "b21547ff6fa9312e8f3420367b153f21"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "3283ec3d816b54cd3376c9d10c695c3c"
  },
  {
    "url": "timeline/index.html",
    "revision": "877dbb78d8b9df17655fb213fe592255"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "aa1b87d999e179ad89f6a640ade1f5f6"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "2aec002972ba9892c35658f6bbefc1b3"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "9a53555901f20e3e5aa9ab6a521ec27a"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "7fb08d7ac173d79dcaa03ef6cee1ace5"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "ce7bf75801dac12b84f51704a8f43be8"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "56dba2241f289b49f0345bf2d394ae72"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "6d47de93eb0daf7443e951afe2818f3d"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "099f8af8be4927903fb05fa7baee8060"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "a2a1f939b6c5131e50985d8c626218f2"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "35f0d56e074064ca6381c6f351dbb564"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "99cbaa417bf156128ecba44ff6bed6a2"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "35b1748a2a5291ac4b907070a263a2b3"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "16d8c2c8f7fd3e204c34e68a13d402b4"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "06a56e98f01ca2fee1eddaa3e0fbdb07"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "0a572561f58b9f9f5855b57e1086ef21"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "3f80db3ebe9e1d2809c9e787f47c380c"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "325a9e34a79ab7ca7f24e1f449553bee"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "1efff2d63af08d2477bc75320f2e2039"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "04051e2ca7eda6ad365486a48c70e09c"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "b376627a0d34ef18f43e0e688d173e61"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "99e6503097d5cee814d961d9ab579179"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "fef1cb39e29d12eb8f31c0f388fafc8e"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "4ed2db45175e844f7b8f6dd024e9f6cd"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "5524e824bf1a18e9d633321328cbc9a2"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "f999047ee685a5111b008de4dbc9172f"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "09cc29809fada520e7b5e67b7c000061"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "9e28f2122ba5c7f8e72304ee765b0d41"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "01dac4085025f5dee1ce4ec46beacf0d"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "abb4e6c33a57e0697a95384fa5cb3b23"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "8fd59cd8ef8d807f52873aa59c2aba80"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "8e13b4f58c3bf931486a9abfaaa0a465"
  },
  {
    "url": "views/index.html",
    "revision": "953cb031e5f3ad7223d1b13929c2e3e2"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "85179ac109bcd452141bd5a89b8b0894"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "f34c3fd31c5b15714d723ef7a655aaae"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "82728f0460a0cba9810ac2b6ee85690f"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "103492dcf16e9922acdba43e51c9ccdf"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "ed44098d857a38f78bc66db817c95602"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "8fb97a4e08dd934eccc3d172c10c7032"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "f66ae8c25412335b2d5de8fd73414a75"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "ff8edd5d691f8fe2239b710a0c01b5f0"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "fa9d6e5125bd10559c1d93999da8ec76"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "b01dd4af1c2102def1d94a7257e8e545"
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
