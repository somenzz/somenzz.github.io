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
    "revision": "eea4ec4a05701a896cb5b96fe51935f4"
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
    "url": "assets/img/bit_count.5c17b22c.png",
    "revision": "5c17b22c558cded6185bdba9dcecf17c"
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
    "url": "assets/img/dict_keys.f062aec4.png",
    "revision": "f062aec479c358437e066b3e82412bd6"
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
    "url": "assets/img/mac_getway.8863f8bc.jpg",
    "revision": "8863f8bce6e9d5a7c05a1c7a99587d6c"
  },
  {
    "url": "assets/img/mac_net_sort.145357de.jpg",
    "revision": "145357de0ecdf4113bdc6883c4a43eeb"
  },
  {
    "url": "assets/img/memory_location.86d5419f.jpg",
    "revision": "86d5419fc7674d94f7e7928e5975eb05"
  },
  {
    "url": "assets/img/pep-0602-example-release-calendar_Nqf5bvd.83b2d83b.png",
    "revision": "83b2d83ba0b97701a6c717743f187987"
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
    "url": "assets/img/wincmd.3f189cfb.jpg",
    "revision": "3f189cfb2fb036c5ea33cef6a7533090"
  },
  {
    "url": "assets/img/windows_getway.44ec942c.jpg",
    "revision": "44ec942c96cfaffb34ae28005976e26f"
  },
  {
    "url": "assets/img/windows_yue_dian_shu.24a20413.jpg",
    "revision": "24a20413863c2d9126f0212e78e1f251"
  },
  {
    "url": "assets/img/wxh.b846c3a8.jpeg",
    "revision": "b846c3a8ceb44d360c91c455c5206039"
  },
  {
    "url": "assets/img/zip_strict.50ab885f.png",
    "revision": "50ab885f9d6438da769b1d03b8e90522"
  },
  {
    "url": "assets/js/1.8dfdb017.js",
    "revision": "aa6765b77cd492722baee01b0198dd5c"
  },
  {
    "url": "assets/js/10.52497c54.js",
    "revision": "edf194e6365230b2687508e2ca033e4d"
  },
  {
    "url": "assets/js/11.7bf31ce3.js",
    "revision": "f83d1ce402f0a2bc55219df37b157d0b"
  },
  {
    "url": "assets/js/12.f13307f7.js",
    "revision": "898d838731de43216cebf47dbe4c061f"
  },
  {
    "url": "assets/js/13.9835b474.js",
    "revision": "8e864253e7990c8dc903027a0ab3a576"
  },
  {
    "url": "assets/js/14.e83c633f.js",
    "revision": "8c793025f3c703aa2d832d6d3ea6c980"
  },
  {
    "url": "assets/js/15.caa8b587.js",
    "revision": "f29382676c0114fe333d87dd0683b88b"
  },
  {
    "url": "assets/js/16.ee31829b.js",
    "revision": "3c8af3f30d4ba70f5566c82367b1e33a"
  },
  {
    "url": "assets/js/17.fe4dc43a.js",
    "revision": "5d420009b37f081dba6246e855614492"
  },
  {
    "url": "assets/js/18.4c36e715.js",
    "revision": "54b3fe0c5641bf5266b151fcc3c3af54"
  },
  {
    "url": "assets/js/19.aa0c92de.js",
    "revision": "0d94d0e0e979f2863d18fc19534199ee"
  },
  {
    "url": "assets/js/20.fd1c6800.js",
    "revision": "d2f4cc70299cf42a33728b960568fef2"
  },
  {
    "url": "assets/js/21.65e00322.js",
    "revision": "d212def7cf4cdb7ce8bfc6b509b2f522"
  },
  {
    "url": "assets/js/22.818a2fa2.js",
    "revision": "daec33e1fe8e895878a92676de792af7"
  },
  {
    "url": "assets/js/23.63200bfe.js",
    "revision": "c13a54939048ec6d9d86d2dc5f6fda6f"
  },
  {
    "url": "assets/js/24.e0358013.js",
    "revision": "20fd77563eb3a6411d0bb509bd09add0"
  },
  {
    "url": "assets/js/25.76cc0fee.js",
    "revision": "1243accf44c27477e4628ed9be2c3b47"
  },
  {
    "url": "assets/js/26.4c6b4f6f.js",
    "revision": "7a682594069b9498ac08fe30d88e4fa4"
  },
  {
    "url": "assets/js/27.20e53ce3.js",
    "revision": "deae1d12a6eadd29d88fcf85c4aa7f35"
  },
  {
    "url": "assets/js/28.529b8ac3.js",
    "revision": "6635fbf51343750f4ecfd7916fe4ef14"
  },
  {
    "url": "assets/js/29.d6994071.js",
    "revision": "f2f5672ca3756d48d8fc1287eeeff404"
  },
  {
    "url": "assets/js/30.5f227fef.js",
    "revision": "69f1f12e83e135a20e33af1a7e5e3023"
  },
  {
    "url": "assets/js/31.8c82b6ba.js",
    "revision": "c8149511e923ccbf55fe0dc69aa8afa7"
  },
  {
    "url": "assets/js/32.51932643.js",
    "revision": "80099331387e8c1a890eb531b3e43284"
  },
  {
    "url": "assets/js/33.a42f5ef4.js",
    "revision": "ca4d5814b4fca836454fe46154b9d0d5"
  },
  {
    "url": "assets/js/34.15962a38.js",
    "revision": "727fea3fce18964efd3472a2cfdfd511"
  },
  {
    "url": "assets/js/35.b46bc294.js",
    "revision": "772a48a399b6c28168888fa44b7ac870"
  },
  {
    "url": "assets/js/36.b171d084.js",
    "revision": "3d88f25c6fc4e700285cc94a6310a8b0"
  },
  {
    "url": "assets/js/37.a8d1dfb0.js",
    "revision": "c639a55cdcfc7b74fd7e02611c826277"
  },
  {
    "url": "assets/js/38.c9006d15.js",
    "revision": "7b27d27f25e8bf71fdb92afd331aab92"
  },
  {
    "url": "assets/js/39.638fd003.js",
    "revision": "f4ab4d389c11de84c746dac7e6cfed34"
  },
  {
    "url": "assets/js/4.13fa11d5.js",
    "revision": "7e29b7a9d69914dd179afd57f585874a"
  },
  {
    "url": "assets/js/40.8dd2afca.js",
    "revision": "9e16eb2325103d3dd6c8420569320308"
  },
  {
    "url": "assets/js/41.067efa52.js",
    "revision": "90558990a793c542fe3bbc1a68452135"
  },
  {
    "url": "assets/js/42.afc2fb67.js",
    "revision": "4c1a869f96de6fde5a2d57f62217c7bd"
  },
  {
    "url": "assets/js/43.0e76547a.js",
    "revision": "c4dccb9bdddab7cbb818a4a3f4a348ac"
  },
  {
    "url": "assets/js/44.99b5d859.js",
    "revision": "c5d0be9dca6775087e77f86d9b45cedb"
  },
  {
    "url": "assets/js/45.777b2192.js",
    "revision": "fe7402f78803e2d64afa654e29ef8607"
  },
  {
    "url": "assets/js/46.825cc1d0.js",
    "revision": "7ce02037351e454d246d3498ab9cc94b"
  },
  {
    "url": "assets/js/47.b84084d1.js",
    "revision": "d2ca06ffe02ae335c021eedcb43a610b"
  },
  {
    "url": "assets/js/48.6c1058f6.js",
    "revision": "f3be6a0be73fbf67570b4823c0de34c9"
  },
  {
    "url": "assets/js/49.8d4bbd23.js",
    "revision": "d7d9f31a440809f4a707fedce7a46949"
  },
  {
    "url": "assets/js/5.ddf1fa39.js",
    "revision": "883e13c3e1cb81b28f649bfd4bfe3668"
  },
  {
    "url": "assets/js/50.a754a3dd.js",
    "revision": "a2c62634f1177e593937f5b5f9c88f24"
  },
  {
    "url": "assets/js/51.e9fb3656.js",
    "revision": "1a5ba22030df170e3af59d7946242644"
  },
  {
    "url": "assets/js/52.d734ed9f.js",
    "revision": "a0c417c06da48c791cf622e26ef2c9c0"
  },
  {
    "url": "assets/js/53.bd2c68d5.js",
    "revision": "24f88473057d08b8ef6149912600ef14"
  },
  {
    "url": "assets/js/54.a978e8b8.js",
    "revision": "5ff5b69c4b20a77818e493859763e121"
  },
  {
    "url": "assets/js/55.d25ad145.js",
    "revision": "6c980a8e47dfc54131227de34bd44f9e"
  },
  {
    "url": "assets/js/56.9226bf7a.js",
    "revision": "e3a1cc260859ea52114b8a20c7455b07"
  },
  {
    "url": "assets/js/57.aa44b14e.js",
    "revision": "f31e678715c04d32f0bb335ebc9cddd6"
  },
  {
    "url": "assets/js/58.42c2e0f7.js",
    "revision": "0eafa2b44c3936f6c11d73d7ac856e59"
  },
  {
    "url": "assets/js/59.fc38d0c7.js",
    "revision": "70f63df6bdd3d8bbffebf2b4917f8400"
  },
  {
    "url": "assets/js/6.8333824d.js",
    "revision": "a0afa66402a0295a18041b57724ea47d"
  },
  {
    "url": "assets/js/60.5aa59e51.js",
    "revision": "4aeb3bc56b4f039090c09d3ffe07573a"
  },
  {
    "url": "assets/js/61.abb82f30.js",
    "revision": "12c880ccd105a2d6e3799e6ca1cc170b"
  },
  {
    "url": "assets/js/62.7cf0e7ba.js",
    "revision": "4539bb2ff19fabba5e41b49274ef94f3"
  },
  {
    "url": "assets/js/63.b2b4bfa9.js",
    "revision": "f234af5371d6aae0038aeec2e3283d43"
  },
  {
    "url": "assets/js/64.288a191b.js",
    "revision": "ecbc0603525803d5a0f98984e12e63af"
  },
  {
    "url": "assets/js/65.7580fa4a.js",
    "revision": "77122c865aa933150048ee969ad3563a"
  },
  {
    "url": "assets/js/66.e1250343.js",
    "revision": "a24cb19e9b260a557481dc3fcd888e51"
  },
  {
    "url": "assets/js/67.08e1baa0.js",
    "revision": "4ba10bd14288a93fe8a26eb6971e5d62"
  },
  {
    "url": "assets/js/68.3e40ccaa.js",
    "revision": "9ae3c0d40737c4abacf796d7e94fa196"
  },
  {
    "url": "assets/js/7.0d700a3b.js",
    "revision": "69c27160b8d216c2111de63f983a5e50"
  },
  {
    "url": "assets/js/8.2f831f62.js",
    "revision": "11fe29f671d9a8822bd466716b1bd298"
  },
  {
    "url": "assets/js/9.9b15853f.js",
    "revision": "403cb6f7c1e90714a9bae89555d61a17"
  },
  {
    "url": "assets/js/app.5239c2c6.js",
    "revision": "e06b56be8ed2f72851c99a5e14925e85"
  },
  {
    "url": "assets/js/vendors~flowchart.61bf2bdf.js",
    "revision": "67254e7844c9e5f9b0cd54cb794d872f"
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
    "revision": "adbd54359131ec7899c43875e9a7b6bb"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "63e4c87903fe9ba6cddd05cc7b5f3d26"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "e1f79fe8715636dade69deac2dede929"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "55244c7474e2948f0a4e2feadf728cce"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "f29a0dc8bdbd123a846c3a2668968784"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "350db10a3260f4a58274c8205e4b7145"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "ce968f153ecb58eee74d17ac1297e6b6"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "395b29ab8377b82bec554406e9d1f951"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "0e300df4cdcb7926962983a4d3ac1e27"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "e00f5c98e14f710d41c4beae82124e0f"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "21614c23ca551e2cb89288e604023942"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "94e5f3b4379eb29beace1284641a1bb5"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "1c854ef22ac1e35e8b54ac3adf9ccd93"
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
    "revision": "7db883610ab4b8e5066f7ce8e5726e76"
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
    "revision": "2b8375c22642a0160c0296fc4b7ba895"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "59b0fa5d54252b50408bc96cca76ad76"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "dc6bb2f7e882b1e55bddfa57e551c73a"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "561a5d1eaccf5525f7aa0e63dd3ec4ed"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "bc189ce4eb2ad6cafd137cdb1b8ee13a"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "ebee48667ff079f6cb95ce50cdc45b9a"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "dc587a1d224235674adbc988c3eab23f"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "b14fadfd7b0a5bbe2c71a7c076835da2"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "731383426289f55769f4d7f2644af285"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "e8859b7937b75bca4644e00c9a34d7da"
  },
  {
    "url": "tags/https/index.html",
    "revision": "880bbae4c4a086c3d41771138efc624e"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "2e1642f5ece9c93fe73cb97f972b1ada"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "ea3132f5e4f75bef538100d403a2d55d"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "609f80f78062855420fc2148ed9b6bc5"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "41dbf5abf29bd638fef89db8005b8cde"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "dab24f387375b43aa73bdd8fe4c21722"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "9cccd674c3febc30218a02cbed231fd1"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "084a4bd429aeff645c0050d9ad08b704"
  },
  {
    "url": "tags/Python更新/index.html",
    "revision": "a114a7348efc821c4b186db2f291c4b3"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "16387d9e59c3d8a086d7997fdd4792f6"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "d5a04ca559df036f7297848440ad22c2"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "3c8e44b8377c4a31aa7ea68afee13860"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "28cb0963a59d4d98baca6b29bcba703b"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "a356a19d9ee699e672162254c4fac8b2"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "1bdc42341a685682c3a5588376fdb834"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "0764c2a5f5f2481d6f2ad60778da1c60"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "ed1a8b733a09c7cabab778853a4746bd"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "8d9b4e4e8978e54f6d05ce6dc79bba31"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "ecac43303a84f850ffbbb83614e274aa"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "4f46a1072f64b6dd9ffa59a485e394fc"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "0a02f018d16f33b84f34af643968abaf"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "b567fdf14a31521af702ceeeb161e2ff"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "3667bb58eb04f7b648eeeb5d3ab18ac1"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "fe6dba01c2d39121c9c64eafa20ae3f5"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "dda89a463be4dfcb6ac96156e62a1f79"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "30245197fe638206ea03c99a0d494e96"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "8a1b588255f913c3e089b84f3c11b26e"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "19d1fe4548c902a49db8b6a3b82c7fe6"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "f20b0723c218f497b617f7df27f1c418"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "c2dd869d94205e92504d6fb491855bda"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "72eb62b1d6e8fb2a8a7220da8f056ec8"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "d6899685247afd3b368145636593fb3c"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "973a6186cf38272626a9704374d2b159"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "7f2f4d64c70c922833642e574fbe6afa"
  },
  {
    "url": "tags/编程技巧/index.html",
    "revision": "8ca9c46d6af5aef2426e28c58b854d0c"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "051d5eedf5e9271be93c89093af92739"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "b32e7e6e7ec4952a44ef6ca3f182bcb3"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "d2cf508081889040b9c30bb62c3e5186"
  },
  {
    "url": "timeline/index.html",
    "revision": "96a607591b32f2bcff71dc0dfd62aa9c"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "c5226ad35ce870a5b7896a9616e24ad7"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "6092a12a0484dfcb154278eff741a6d0"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "72865bdfba0c7a07a41ce4a029d8efe4"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "4db5df27c280f5a271a1eafd0a37d357"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "17037e34bc4058033c59baf372ba6200"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "0b454de0a62f9371b9ae591523e371ac"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "6223f9c42dc14846b7f54b3c8ceda46b"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "b9f7e127217ec6791f0fc6b3e8d5c466"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "1499c205bf02aca16e1d442267f60b1c"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "92ec00fecdce85422e9edcdf848183c3"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "cc88f4de486851f4c96c11a9ecfd3591"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "c84b9d60abab0f6088f78805c4dfb371"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "31bc37ee646c5fcddd5d53901a6e3620"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "17ceec8741cce420bca38795337612bc"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "a27ec8d5197c875c70e5d703cc9b2664"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "63a9d1158db18bd8189cabfbf58e3ca0"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "ec060f93f9d1529e0fc74340e1b34e24"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "44bd4a0c0a8ba399d951dc5c43da2def"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "5333f403fd414e9df7b9ef462ab374c3"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "d834a298b4ee2bf3b3c4bd3e0d384973"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "5e905e99e87fa9894e0ec7f4e0c38db7"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "c6b712566786f0bb045f98aec5e86416"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "029bcd734c52fc52f6c724e3e445fc7f"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "11ae18e0a377bdfb1ff579eeef84234b"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "050ff4d21b4147ce7187de84c868a91f"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "322915327d5eeae17e2ecd61c99fd521"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "a19e46102b8b5054e96cd3b26c5b7188"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "cc1ad3ef94a6c3aaa8844493a4993173"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "5795f9b17b8617b4f38d261e4c928123"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "b6bfb2f84d99111c563dec4253c8ed65"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "147b4087a3489267976c99af32db78ab"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "a55fff9806f897a547062eefc1847a42"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "260adbe3a44977ca8f92048796fd31dd"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "88c5483632c14ec4636bf2c9857adde0"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "2fead177ee4df34758c24a35edb47164"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "f7aa77c48119ac6fd8912bc0f4aa7c1f"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "e48af77e43c6f99800b3d67a95dbd705"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "f3869e06063164ccef64cc9074415cd6"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "68ff47af385b06c7c840d67adf777243"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "41905295bed3c65aeb91130ab240bbc1"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "52ac3eb41042f321aa98271596186bd6"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "04aca8b9c46f629fad5c63d39d2017ec"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "c98107e8831eb49e8081558c8ecf4b79"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "8270c8f2f8b9b7fc35fc17dea81bc30d"
  },
  {
    "url": "views/index.html",
    "revision": "0b98a3571d37c574411ebfbd22268e1d"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "52be531c347d9983d4de70701d3471f4"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "0fc6af5047291444fefa7d7c11f494f0"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "d1127635112f46c7372140182f59bc3a"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "7298f4e05eb3156811c7068b098ab4fa"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "084610835708018426a8432dbe5f2821"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "38eeeb59bc65547883bef96da0cf11d5"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "86c0dfb7ccbee7419bac1e7405c31177"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "232ed91b389663c42419471918181a10"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "c5b7c464b22d65d55b4d4cc98f095d5a"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "278c2cdb60119aff3590c47151f3b457"
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
