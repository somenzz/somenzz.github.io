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
    "revision": "87553b43a56477cab50e031a8d132a22"
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
    "url": "assets/js/13.bf5a4ecc.js",
    "revision": "c26132126ede3884f627995c30a483b3"
  },
  {
    "url": "assets/js/14.0cc0c64e.js",
    "revision": "7ea846f25f801e7b072a632f8f82aa1f"
  },
  {
    "url": "assets/js/15.30075b49.js",
    "revision": "4ca09f79675268ea6e196efd72c86d5a"
  },
  {
    "url": "assets/js/16.fce91982.js",
    "revision": "bded34805ecce281d8cad23e0ead302c"
  },
  {
    "url": "assets/js/17.fddd5216.js",
    "revision": "b0d33f8ea68308f726f100599ac919ef"
  },
  {
    "url": "assets/js/18.94a358b7.js",
    "revision": "b0d0a875c0a966c1ebc3cd39716e38d0"
  },
  {
    "url": "assets/js/19.5faabfed.js",
    "revision": "f1f7cf13ee972b2b0461ddeeb35b1278"
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
    "url": "assets/js/22.f8a10079.js",
    "revision": "efc1fac18cc127bc1a0d3143760befbb"
  },
  {
    "url": "assets/js/23.25486db6.js",
    "revision": "c5cac2918fba7716bfc7030788713087"
  },
  {
    "url": "assets/js/24.4fd3366d.js",
    "revision": "b37891819d2dad924cfdcfd585a5366f"
  },
  {
    "url": "assets/js/25.dbb2ff90.js",
    "revision": "1687e634c4c9dc20bc007cc557597986"
  },
  {
    "url": "assets/js/26.72454f7d.js",
    "revision": "2f4d674ad7e829c77a504bbc92bb09a1"
  },
  {
    "url": "assets/js/27.36c18472.js",
    "revision": "4ad1695e1ab5a6d2e471f8bb118cd55d"
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
    "url": "assets/js/30.2cc282db.js",
    "revision": "3f29f1889532a9d75b5465cd07da202f"
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
    "url": "assets/js/33.d2310d99.js",
    "revision": "de9a099bb118192e0dd1b0daf15374b5"
  },
  {
    "url": "assets/js/34.4f339098.js",
    "revision": "c9c518ec97d2891a5dbee1c5cd0d0db9"
  },
  {
    "url": "assets/js/35.f2a94db9.js",
    "revision": "331cfe5c9de1de15fb86a3f7a12fa3bf"
  },
  {
    "url": "assets/js/36.7d526c73.js",
    "revision": "fbea6283eccb49fa3e495d2eb2835c4c"
  },
  {
    "url": "assets/js/37.121aaee9.js",
    "revision": "ad4887ef52ea45fd637aa048ecfb65de"
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
    "url": "assets/js/40.a3ca63a8.js",
    "revision": "042c9147094f19038da91473880db83d"
  },
  {
    "url": "assets/js/41.3deffa6b.js",
    "revision": "cb498064c505dd566a72308d810916d9"
  },
  {
    "url": "assets/js/42.d97a20cf.js",
    "revision": "23574071ec4cb3eb10b9dfebada87a91"
  },
  {
    "url": "assets/js/43.8a62f8bf.js",
    "revision": "670a13ac5234b5ad2cf192b5cd758a5d"
  },
  {
    "url": "assets/js/44.7cc0a5ef.js",
    "revision": "38e05afbf32cc2084410a223ee644104"
  },
  {
    "url": "assets/js/45.85442a38.js",
    "revision": "033473d5ba6c139ae87685988bf91ca9"
  },
  {
    "url": "assets/js/46.7ceb7a7f.js",
    "revision": "99a8bf875d88ac13a0de5d65cc65aac3"
  },
  {
    "url": "assets/js/47.ba7a8c1b.js",
    "revision": "10edeac490acb50435dd0dc8ec8367ec"
  },
  {
    "url": "assets/js/48.06e44711.js",
    "revision": "5d6c3840793f80280b26da912a2c9ef2"
  },
  {
    "url": "assets/js/49.09dd2b37.js",
    "revision": "3d3fd7215ce69715bd55c49f8bb7b953"
  },
  {
    "url": "assets/js/5.a0cf09f1.js",
    "revision": "bb12c292b21978df449d337e690c33a5"
  },
  {
    "url": "assets/js/50.5cdea07a.js",
    "revision": "bbc7c2c9674f836a6a35eaa04a918762"
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
    "url": "assets/js/55.5a7c8ed1.js",
    "revision": "3dcf4dadc11cb9d6364be4e75b4436a2"
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
    "url": "assets/js/58.b1d992fe.js",
    "revision": "aea5c7fa5d38dc710069c7256c37d9f4"
  },
  {
    "url": "assets/js/59.95b9f4ef.js",
    "revision": "26407fb9aa798a2fed8a78cba62b7dde"
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
    "url": "assets/js/8.043e69b1.js",
    "revision": "163db8dd5c4f7ccdb68e25047d8d2d5e"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.fcf2d502.js",
    "revision": "8cd67fab19770fcfa1cf927371fec215"
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
    "revision": "ec899b773e42fcc21300b4fee2b1ffa0"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "1362cdc2dec9946d7b6bfd0a0a3b3ba3"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "8bfbb6924901e4eb0c2d4de31f3c456f"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "2b066af143e963cea9ef8abd3fe80ef6"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "a0b2f9bcf4673918a9949c1abfaa2894"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8a87899b427675d65f6da75c923d4717"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "a60765b06061f787063511c2d114a2ea"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "f2afb0648bc17db823380c8f3931d8a8"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "b33ed4625aa525386697a6f39d022d2b"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "f7f2aa48af064c9122631b0f79d1281d"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "99f3ec2899d70fd12e0a736f7a14a855"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "e699614ad7991a7ce2a90f01d40b8801"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "bf3779394346857252853a44a98e1c89"
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
    "revision": "94647273447dc07cbd8768dea4a13fcd"
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
    "revision": "317560177825ad6fd69ef46903c567a8"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "2399718b0b858dd99ae32d54b2688b55"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "7664eeb2f124bddcc0fdb48219142c9e"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "89206055bc94b7166f8de0ecf3b83a1a"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "b798f480302e8ae054e4971f59d0a7c6"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "6305e533330725bb969ca1e2c2b826a2"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "45a41ed0805ebe783d2d1a19c7c3eeaa"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "ec943887a8f39ca409daaba0e4a5aae8"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "a4be60073ddc992ba118a8bb38f2af67"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "380b7560539fd7ef908ba751992f3946"
  },
  {
    "url": "tags/https/index.html",
    "revision": "b861b32ebd26482d2cc19a7a9dbc4c8c"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "a67154155b1af293a5553087611a0107"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "e97790d5108a465e691dc32756f3870d"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "0f44a3012d962d4e2892bde15e65733b"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "2533eefea0f9f8cff9bd7de153a37866"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "9c0cc589df9af3cce19d97324f6425a9"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "96f2c120f98a1082d75eda56f1073195"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "ffdb8ecf4ac7225a788b4896bcde6078"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "44bfb507bc1de0325c7d78348bf065f7"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "aed29cd0cea8207e856eb3bcee45e3bc"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "d296b768377082f40402ff725ab5a6de"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "61a7dfa2aa45f038fc660c55e9c53ce8"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "8f822aaa05b6388e38d6791449519303"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "677b0a3e6a947665e819b015a2be52ea"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "bb1c81c8a61a4a0b7009cdd42ee849ab"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "47e41be533544b0804c1a2b700e9002b"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "470ce6b3a31e1b84accd336eb3232596"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "1368e3fa6106378a9add1c574b54cd92"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "3a5cb112cd93f0ad2eac4306fd40fab2"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "b210c1a0d5f3e0cf2af9f5e8d33368e6"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "82e679dbf3dea41b25c4c65486e6304c"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "128b49620ec60b7f9f5e1003fb6ece3a"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "adc314bcc23dd37f5e939ca6a86b3424"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "3a2fa66563e99b1635827cb4789306b5"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "0e3fb0d22d9e0449e255d3e521d24ba5"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "23d6813cf3938cb115af1692af826cea"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "55893959896885414d06de8d1bcd4060"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "5c3e6a514e52c03732a4c8b4de22bcc2"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "dde2569165bdeec69fdee070f0644b4a"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "cdd32d124b6039152dea295c7a1741b6"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "2dc7cf430da1cddd23e5546827e9ae22"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "452f064308ec6a4d705ec84c7e22d678"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "63c3ac465fa0289cf756705d02542a71"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "547f02bf93af3ed330c005b373bc943b"
  },
  {
    "url": "timeline/index.html",
    "revision": "dfa3fed24f9e270c43de75a342fc440e"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "6b77c8309f30b617ade24f06f319ca80"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "4f2b15d2465137016556a2fe7a07e3ef"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "f63be3d1fcbf26c2bd959b16d27afb86"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "30d8c271544365c4600d6399fd6f9c75"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "eb9b47256d2d97564ecd80ace1bceec4"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "cbdd42dfb16161fda4ae716a5816c95c"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "5c9adcf2ac71fdec0816b89026ade1c9"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "c1844e47f56945cd78c9d2c066581d65"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "1264513fd4c219507db56340f70eef1f"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "8a73ef73669fb852f9698af4ca74a963"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "4b32bda15bfefdda9a11a410ccebbeae"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "87bc02401375cc34a70be660e835d311"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "aea2bf5e1705d2d32e8bc0fa01f72865"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "cbbcb035e2d95928ca2146105f772fb3"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "7b660606b6b148143fdf4fd7daa4b8fb"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "08f22fdaae160e617f9abbf5dde4b4c4"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "f1eac7e824efe7c9dadbb2c8ae3952d7"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "1237f2b840a3039f2eddb019b8077e7b"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "ff0e48f9f2d84ddfbd339f0b184488e9"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "4e9a11bb3497230c1e25e58b86dc65b2"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "a7726b0689707aaa354d9a938c5d99fb"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "0dc8e8558ff608a22d9f812a3be74874"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "be62779957ae9577d203cb4afbb00f99"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "e961f4e88b5328a7e5210c18869a0059"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "ca4b1b15d0aac2ac10742ca88b0a7618"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "9bbb8c517caf96a54d925a23198a0eca"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "e853f90e5e10493ba9603ab576a49a7d"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "63c7006b5793734d54f56a40229c0bea"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "d4441302aa38cf28afb672614ea692e9"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "e2a36f44bcc54d9fb04f09aadb6de03c"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "08d82ec244ae899917f386c1f0a7648c"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "f3fd0a3ebf35e3e52c90890dc70fe361"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "161283565507475fc0ef6087c10cfe2f"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "711b12122e9c71cfb0b0da1c965b2376"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "58b015d2a59f94a3c0b5ca3f1b8816d9"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "7a3e8d28413c77049be223524fbbde7e"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "0413750b173d7f85e210d061b260553b"
  },
  {
    "url": "views/index.html",
    "revision": "c84b591b3cf647e698b5b98910fb0dbe"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "fee27aa0148ba4c75e304768d5d9208a"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "2c78600a3b64ab69b9226572c7a1535f"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "be17000f3156b3482533135ad09838f5"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "e63e0d02a56894c5726ce7952af0e831"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "d89a0241e7001b13b98f2f38b29c0562"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "4e32e237d7bbe02a23c9c4e44ef261f8"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "a1aa2863830299a2a9c81a23a6eb7c90"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "35eeff15f994119415b55d08e77bc677"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "f60b56144f50efbefe0828e6a95538af"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "16798ebf38218ce0b379fb86f9a29da0"
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
