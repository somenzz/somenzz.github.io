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
    "revision": "4e9c76b81f3ab61c3e783051e162cfa8"
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
    "url": "assets/js/12.7af560bb.js",
    "revision": "b6e2e5c71a1a12c533fbfa3c08ced728"
  },
  {
    "url": "assets/js/13.179f14b3.js",
    "revision": "4cba94a38c80f8ada462f8cfdd567d43"
  },
  {
    "url": "assets/js/14.47bba4d0.js",
    "revision": "662a5541d8cf21d0c5c3d247cf025a47"
  },
  {
    "url": "assets/js/15.fff2b5f0.js",
    "revision": "25f2d0ad3ecf918ecb346c4d0b9b6914"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.7c2796fd.js",
    "revision": "8309df1d2c0b89e1bb2d839d7bf8b0fe"
  },
  {
    "url": "assets/js/18.b409168e.js",
    "revision": "de40c62ac458ad73dd46a066a725f1d3"
  },
  {
    "url": "assets/js/19.54cc0486.js",
    "revision": "406e6bc56d85795997e0228934d33d56"
  },
  {
    "url": "assets/js/20.fcbd4d1e.js",
    "revision": "5c91031ae1dcc033a207e867b81d4053"
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
    "url": "assets/js/23.2a6c87af.js",
    "revision": "d57e9dacdc8c239db8d7a517c562c2e4"
  },
  {
    "url": "assets/js/24.202ccc5e.js",
    "revision": "a670d310ae6edb2d90aa9c4790acab10"
  },
  {
    "url": "assets/js/25.c3d68718.js",
    "revision": "480bd2e8b194fbf20d1456ea1c210cb6"
  },
  {
    "url": "assets/js/26.50c1dc71.js",
    "revision": "fc1960b1210e0265d1e2f8aad6558b83"
  },
  {
    "url": "assets/js/27.1704ebd7.js",
    "revision": "063ca37ac8f227b456355e8b04fd0dd7"
  },
  {
    "url": "assets/js/28.433154e9.js",
    "revision": "d62f08c3ccd4c0ae5363e5df4e9d080a"
  },
  {
    "url": "assets/js/29.f9d49a6a.js",
    "revision": "a792e7729a55b065b3ad6c6432166440"
  },
  {
    "url": "assets/js/30.610bf108.js",
    "revision": "a8fab6ee52851fd6a384ab4ae961df55"
  },
  {
    "url": "assets/js/31.9f92fc72.js",
    "revision": "40031075edf46b30b214b4031d587fe6"
  },
  {
    "url": "assets/js/32.bb41de84.js",
    "revision": "d80dedce05784bc4493c0fd2bd35cd43"
  },
  {
    "url": "assets/js/33.a4b3fc2d.js",
    "revision": "baf691dbce6181c4771e950f483fb6e2"
  },
  {
    "url": "assets/js/34.a19cae3f.js",
    "revision": "7502b7cabd3f9e649e18fc04ed773f97"
  },
  {
    "url": "assets/js/35.4f262ee3.js",
    "revision": "890fe853aaee8c2c4efeb5e41a5f3db1"
  },
  {
    "url": "assets/js/36.7c529dd1.js",
    "revision": "472ebe78152df3015737a6b87ff0746c"
  },
  {
    "url": "assets/js/37.952a4774.js",
    "revision": "9fa36b67d290f6ece281d1efce8c8a75"
  },
  {
    "url": "assets/js/38.03c1bee8.js",
    "revision": "0c2a31136a5fcb6b6a20dcdb0a537cf4"
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
    "url": "assets/js/41.4845c810.js",
    "revision": "d57122c72010c67309c974dbd9079c36"
  },
  {
    "url": "assets/js/42.8c5cc362.js",
    "revision": "c49acb4c12544ca4248ad3774901cbb3"
  },
  {
    "url": "assets/js/43.883070cd.js",
    "revision": "97c2179d90cb4f3103a419a1821200e1"
  },
  {
    "url": "assets/js/44.67ae725b.js",
    "revision": "4da261783e42063a3c1e0a391b9d7df3"
  },
  {
    "url": "assets/js/45.178f6a49.js",
    "revision": "dd86c35036b388be9d9f87879428e7bc"
  },
  {
    "url": "assets/js/46.1b88e77a.js",
    "revision": "3c8bd6e5fccc9fe5601617fcedcb9ee9"
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
    "url": "assets/js/52.8d3a0308.js",
    "revision": "ab0375a50e32fcdbb059ffa13b6fc3b2"
  },
  {
    "url": "assets/js/53.d41e59a8.js",
    "revision": "467f272a909d3eb246314b9a2221ec3a"
  },
  {
    "url": "assets/js/54.49ad0020.js",
    "revision": "97c64a09eb29857ae583d9b3eaa09cb0"
  },
  {
    "url": "assets/js/55.a304fe75.js",
    "revision": "b5dab2a36251be6e616d17fd341f9b67"
  },
  {
    "url": "assets/js/56.9aa05db2.js",
    "revision": "0dc86577460fd14c4e1050a64f3bf154"
  },
  {
    "url": "assets/js/57.c7003b77.js",
    "revision": "8cd53600b75dfe2c044c2b6f4da7de33"
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
    "url": "assets/js/app.c6669831.js",
    "revision": "7e6fc3c7b7a23013449024764b973126"
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
    "revision": "3a64355a07af6b363de990b61905d6b5"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "7ff56949a84d49855e8197807ddf8a6c"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "d219b667c71f8502eea9009ba908a402"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "4813375ff5144214341271c936c913ad"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "7c08ed1a92e3cdc98830352cc141c94c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cf053c8c20b699de54d3ee24d4598ca3"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "85c692c59e42348c30bc143ea271888c"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "8a911797f4dd99e7820eb7186c09ba3d"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "f110c6e0ca140050e7ab3f0b9a3d24a5"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "d265542b4cadec0cc0272cba29c3b28f"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "af8c6e66ce751aba6b30970368b9c055"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "fbb05405949620c76a9d2ef556871e32"
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
    "revision": "53dc9737788603d3ca2eaaa084d26a92"
  },
  {
    "url": "tag/index.html",
    "revision": "44d16416a84c4cc5642247c1cee1cc06"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "041524732cff38522784b0fc9450d3a4"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "1f8862f0a0c28733e141af47c5ffa696"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "5808fa789796e5385f203320846f0fed"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "b8e165c65dcff29e224f4995d0135067"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "24d04c0bf37f36813b6b57c345b1a474"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "d12813d4166d28e5aa9803ead665e48c"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "2987c35556a34e6d9e0c0a7ea5755d3d"
  },
  {
    "url": "tags/https/index.html",
    "revision": "51d4c7ed6d4aa4a72adbbde96af837d0"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "7ee38ee31e185d34b05f68d3d3d2c02d"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "dbd839e9007b1b99596e9e1dc92d377b"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "4aa3e46b4cc5d28abe2edc85e4a9ca67"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "7f4ae7754fd8c4db29d6d88eb75f212d"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "29687c19c4dfd467139fe46baa4fac68"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "fb348d78fa69d775b570bab7f9a1fa67"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "3e9e8b60d576e3951cfaa5a09973f98c"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "4ba959ce8c18dc29dd837932281e4b1d"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "cddb52cfeaf2bd74dc6059459909557f"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "883f52a59d7766503c23a77ad0448324"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0881e54f24fe465e1e41be2efa06fabe"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "bb577f8e1cdbb2afc91234cc904695ff"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "3ba402e50caf1e0f1fe7aba15c9fd163"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "80441ac61046b89bb46f82258121bb68"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "0ba99fc6549bcfc0c72bfb06983636dc"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "853cf1fbc11d4a04e4c51fa0fe0b9bc1"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "a07260f83d98c46a878896634b294a2c"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "dcba45c32e7674218caf2137de5b3c00"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "769bfbd8f4dba1dcac908f41c2484dd3"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "3c775d7b613bcaf9e0d43c93a4230028"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "23fb9a26f9c5e9751bc8e643cbe733d0"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "ab57ed27efa125db3d6a75c3279353ec"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "24de26841b8dfde8eab33a60f2c04685"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "5f6347ed5389e9fb4aee1c3fea332cb9"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "da43104a79827ed4ae6d2989533be776"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "5c3b8e7844e92bf6a642a4f9feec1d28"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "a169509beb176a498ee2612ea800f41a"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "7aa6854bd57f0b1674b1f1e5b7b98cfc"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "dfd658ec90bdae6a49fbd74d3b8d8ea5"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "1cd3a87fc447ebc7c671fdf214bcc136"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "f55ab46752b265fe8c948bb2748f1f17"
  },
  {
    "url": "timeline/index.html",
    "revision": "c5ccb664ad10eb7d127306c4c46d3236"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "c936f0e86bf192aa2faa948fed1eaffb"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "793f58a3c92f30f3080953aa36f827c5"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "2219b357e7eee921eefc1ecede2e3636"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "3f8d81311f7fc4954c1ddf4b951d694c"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "e1ef2db999e1d6adf31270ee0d0870b7"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "ac43d28eaa242bba66b5be856cc1b981"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "f87a056eab35221fb505c3b53037c6a1"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "62ea2b6615831d32c3b396889051f1f9"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "ee82a84057a55290348a6e941d72901c"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "d03b3157f24b194da4b1e222f6204766"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "22cc9cbd84c21c02a67094fae6076e1d"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "d1309550c41089175ac4cc4b96e783cb"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "64cdaf06d917893011c06735c0df7068"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "9ad76e9739e3bc1877da38c6b568563d"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "d84a236d0d8dfad1dfb72fede9aaf7ff"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "70795c44b11a8aa20a1c3a050e6f6875"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "5ff7f53696937b684da7faa2bfe5ff30"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "f9b28adf20ec955ad704a4571942d75e"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "ebcdde6188cbed944052c95db9f0af38"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "5b111c6c0488e41f0bf01a6c75079b1e"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "836dfe917edef12b227e843a0edacab3"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "3d52c45d7b54f3f9eaf90d270e45706e"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "67e04fc774c5a4c6dd908b09a5987f45"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "639473096faaefb6affb0c4a1c7b99d1"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "6d49fe16034b9411a9496b9c54ea9b70"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "ab26ade458ba15eae9aa07e5566be951"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "8b82c95eb8b17b36cdf12704deb9c6aa"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "5476a5a11dee3b67ed7c1d39130b4917"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "c470b7dc4c6687d9ab27c777ddef1531"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "fa542f1abab90412bd61070a97a33c91"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "fe1957b9c531a9575b4edbae2e2aa0cc"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "f6a60e8d85a1615e685334bb51b2ffae"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "2899a08a6a8e70defb3ecf5b6589e390"
  },
  {
    "url": "views/index.html",
    "revision": "1a2e662461595736267e154b7882988e"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "3ae7ff1aa334f1c36012299b6f39ffee"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "8fee28651ed1d6484a4d0174e2a14188"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "90a8b9e4ba4ca394298adf8990cd1874"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "a9d0dd82d6ed913324f80d0801cda031"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "599e07a7955ccec9697e465c8b493da5"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "04f5678bdaefd8e255c4600c37b98e17"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "6915dabf6617878ee52687084e0464ab"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "ff2bae06a19ae5364c50b6879242b24a"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "4c3b5417b29fe95a013e5f60e333203f"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "5fcae18f9aae0db750114ab6225f2d3c"
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
