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
    "revision": "bcb93db3e7fe87a5470e45fde56735a8"
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
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
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
    "url": "assets/js/10.544602c8.js",
    "revision": "ad451b70266dddc15dcea4ae1e40977d"
  },
  {
    "url": "assets/js/11.be576c66.js",
    "revision": "059c6d73de777e1746b87d363e0a0ae9"
  },
  {
    "url": "assets/js/12.2187a314.js",
    "revision": "0b4ec4f7c208c01d3841337948bbfad0"
  },
  {
    "url": "assets/js/13.4bd15230.js",
    "revision": "7b2b4f0dff955ecb66af63e5f33646c3"
  },
  {
    "url": "assets/js/14.73842ab6.js",
    "revision": "ea29385259b5d11f1b22d4e47dc29d55"
  },
  {
    "url": "assets/js/15.d383923e.js",
    "revision": "5a8433331c7aa769722d1d3418d4f237"
  },
  {
    "url": "assets/js/16.11eccafd.js",
    "revision": "4fe7b5a79422438d74c0f4e5ea28f899"
  },
  {
    "url": "assets/js/17.9af77497.js",
    "revision": "790bd3550e22c94dde51d7df5db8bc7d"
  },
  {
    "url": "assets/js/18.1e4e368c.js",
    "revision": "127b82e4887c1a66f574d3075e5c0869"
  },
  {
    "url": "assets/js/19.31435f36.js",
    "revision": "235ac692f18d9a8298c85bfdf225efb0"
  },
  {
    "url": "assets/js/20.b1189dba.js",
    "revision": "c0b03e561fec07fdb0d3e660352ed275"
  },
  {
    "url": "assets/js/21.65e00322.js",
    "revision": "d212def7cf4cdb7ce8bfc6b509b2f522"
  },
  {
    "url": "assets/js/22.ca69ead1.js",
    "revision": "fe6357e41aef0e7c96a9a9e3700ee60b"
  },
  {
    "url": "assets/js/23.d3893ada.js",
    "revision": "c5d1f462ef6420b76f61dc31b46a57e1"
  },
  {
    "url": "assets/js/24.33100804.js",
    "revision": "632e302f6650c234f0d89b98a7f1140d"
  },
  {
    "url": "assets/js/25.3836fed5.js",
    "revision": "e46b6a66966d9793dcab606037689f6d"
  },
  {
    "url": "assets/js/26.1d4c28be.js",
    "revision": "d4f21614226bf78212fcb471416ce8b9"
  },
  {
    "url": "assets/js/27.5c9bdb62.js",
    "revision": "7d292eb98aba63fec5230ef5f44cdad7"
  },
  {
    "url": "assets/js/28.92a285c6.js",
    "revision": "5196e2423a56659f95e3df9cadf6cd92"
  },
  {
    "url": "assets/js/29.6bc012e1.js",
    "revision": "93482b7b4b979164c155d15866c49a3a"
  },
  {
    "url": "assets/js/30.0200ca14.js",
    "revision": "ca40b5af61d65df86df90370d0bbea55"
  },
  {
    "url": "assets/js/31.e76db31e.js",
    "revision": "8b40489850cfb5bf0060e1b90ef381d1"
  },
  {
    "url": "assets/js/32.f27bdb68.js",
    "revision": "a8823ea9701fed6e38b91ecdd29ac3a9"
  },
  {
    "url": "assets/js/33.622195b4.js",
    "revision": "506ea32dd6755a7c607305d500ba20fd"
  },
  {
    "url": "assets/js/34.e36a173e.js",
    "revision": "650b483e1fa81fc19461c620f56b4212"
  },
  {
    "url": "assets/js/35.0fcbb9c9.js",
    "revision": "291893b0ed06c99ec7bc972909ec7006"
  },
  {
    "url": "assets/js/36.817495f6.js",
    "revision": "922cbac72399a6b90810708130ce6c14"
  },
  {
    "url": "assets/js/37.88350ed7.js",
    "revision": "be6d6822b8b4ace5c5d30409b220dc95"
  },
  {
    "url": "assets/js/38.1172242f.js",
    "revision": "ae14454e8f8f6acaeeb4ccbed9121d79"
  },
  {
    "url": "assets/js/39.fe4f58ba.js",
    "revision": "715387f36b6ad02a034831448b028045"
  },
  {
    "url": "assets/js/4.4d32e994.js",
    "revision": "c109df93bd5de05b6939cf61d78f9a88"
  },
  {
    "url": "assets/js/40.87b2b539.js",
    "revision": "db5610772737506a2ff8e59a677a6d13"
  },
  {
    "url": "assets/js/41.0a687d18.js",
    "revision": "ed5da8669bca2ecf6c1f7077b6311f37"
  },
  {
    "url": "assets/js/42.c2c5a2f3.js",
    "revision": "38d7817ba65991bc8957373c638b1943"
  },
  {
    "url": "assets/js/43.e9c6c0c3.js",
    "revision": "e65f9e1a284abf53ee9016dadc54a47c"
  },
  {
    "url": "assets/js/44.68c0a300.js",
    "revision": "622acc6acf657b7a6236c942cb4d0223"
  },
  {
    "url": "assets/js/45.3260cdda.js",
    "revision": "94fe49acf11ac7939862851d9712645a"
  },
  {
    "url": "assets/js/46.fc681f7c.js",
    "revision": "0e8f7576c6013ffc4ffa27db333374ba"
  },
  {
    "url": "assets/js/47.144f3797.js",
    "revision": "442790725bfc8e89f91bbd3f006bbcde"
  },
  {
    "url": "assets/js/48.10bcc137.js",
    "revision": "cc88c2c97370819e0a87458964514f3c"
  },
  {
    "url": "assets/js/49.4f04ee73.js",
    "revision": "befa0b26fce691f2914bf879cf9a2073"
  },
  {
    "url": "assets/js/5.e8ae2c9a.js",
    "revision": "23bd40108bd8a88b1abfc1ed82ff5e43"
  },
  {
    "url": "assets/js/50.3a4940e7.js",
    "revision": "562db306b4c500358e1bddfbe60714ad"
  },
  {
    "url": "assets/js/51.80bf5328.js",
    "revision": "0598ed5a410d19fba0bcc8f90ef121ad"
  },
  {
    "url": "assets/js/52.d4198d4f.js",
    "revision": "6f6b3ee093080bf410038af9f5bdc4b3"
  },
  {
    "url": "assets/js/53.282a44c3.js",
    "revision": "38377bb360833f1fb4659ba2a6a13ec4"
  },
  {
    "url": "assets/js/54.ea5fab2f.js",
    "revision": "ecb66f2ad0f240984a48c94373bb1244"
  },
  {
    "url": "assets/js/55.25d00ce9.js",
    "revision": "67b7fc8a6fb1a8e343a3dcec09d6e3e5"
  },
  {
    "url": "assets/js/56.fddc6015.js",
    "revision": "c542dfb48927293f972ae2a1afbee475"
  },
  {
    "url": "assets/js/57.f6cb75f8.js",
    "revision": "f2f9c9c3a90dfdb24a5bfce7b8685164"
  },
  {
    "url": "assets/js/58.63c089d1.js",
    "revision": "6f3c8c4f3dd9b167c968b9f212392b12"
  },
  {
    "url": "assets/js/59.60d82dc0.js",
    "revision": "9fa097c3add9d99cb7e8c670feea7ef4"
  },
  {
    "url": "assets/js/6.6642d6ce.js",
    "revision": "87611bca87e25f6fdf43135bb94bd73d"
  },
  {
    "url": "assets/js/60.5b3f1057.js",
    "revision": "68aefe20c29544659287b69c6993502d"
  },
  {
    "url": "assets/js/61.722ff9fd.js",
    "revision": "1bcab7e5d4a57cff8810460286cc657d"
  },
  {
    "url": "assets/js/62.e93901da.js",
    "revision": "60af35420f4eeccf5f6c5d39501aac56"
  },
  {
    "url": "assets/js/63.5f9c4e20.js",
    "revision": "ced13bffb6c6e41d28df4f4fd83a1513"
  },
  {
    "url": "assets/js/64.dc79016d.js",
    "revision": "1fba4e675786632c41c109e3d915c69e"
  },
  {
    "url": "assets/js/65.bd4d9193.js",
    "revision": "a2bdcacbee34729c8c7e556fc2905584"
  },
  {
    "url": "assets/js/66.d4068ec0.js",
    "revision": "aa566372bf8a3bab011dca89f93c5600"
  },
  {
    "url": "assets/js/67.f77bb97a.js",
    "revision": "367a6231f2c4ba8011d71ded4e412d7d"
  },
  {
    "url": "assets/js/68.03f0261d.js",
    "revision": "97fff0cb6a9a66b98e9a38fc06e0a0dc"
  },
  {
    "url": "assets/js/69.468da885.js",
    "revision": "8f114889eb7ecccd92766207dbb339cf"
  },
  {
    "url": "assets/js/7.09e99e71.js",
    "revision": "5cdfa1949a6f542c09507fb8730c74bf"
  },
  {
    "url": "assets/js/70.295c8205.js",
    "revision": "4fb80a441b560a4784e458b089e354c0"
  },
  {
    "url": "assets/js/71.50e3647b.js",
    "revision": "b5d8c3d361597ee7c48c2bcb9a146913"
  },
  {
    "url": "assets/js/72.97b9e9d4.js",
    "revision": "4188276b76c8a67ab791c4e467456150"
  },
  {
    "url": "assets/js/8.400c241a.js",
    "revision": "5ca29bcf6178bd61ae5e168730bcf0f2"
  },
  {
    "url": "assets/js/9.9b15853f.js",
    "revision": "403cb6f7c1e90714a9bae89555d61a17"
  },
  {
    "url": "assets/js/app.0aef0a3f.js",
    "revision": "de98ddabaa4a87a3035f4ef85c2eb979"
  },
  {
    "url": "assets/js/vendors~flowchart.5391431f.js",
    "revision": "6c0b4ff8a2df1da7c576c736ebfea715"
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
    "revision": "4bb40f099a9992234dc77d88c4f1fbd4"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "47f5f4e58629b5d2bfe4934a527e2fd8"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "f6c4b23c5723c5539b5072072566c353"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "a032e8d7f63e6df33ce118be02bec3f7"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "8c21bd131d267a25d59c651d496c34d5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "474bedc80bc05e0d0ea38f7d57f61b82"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "2edc57c77c8e83262e5ea68e66715fac"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "81d5934d977d26db53b986c17eff4c63"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "f158906dedbb99aa73974291e0823b95"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "427d737c25de0bc0c75cee99a89142db"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "7178612d8c2d6b6de2de15339bf0e098"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "8cda5d7d39f6719e8d5cc96f7bf94cde"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "b8783b95363872a71ec8d7e9187e9c6a"
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
    "revision": "d31978edc930aca9ce528a3d4d7eeb75"
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
    "revision": "96fd0ff4d53b50278571086863d6301d"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "1303b4baa835d3890b222eea86ede41c"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "30966a1df6a19ed99efc70c36aaf363d"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "41205dad44f7272f6fa4830682bcf800"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "e5e41417a40e3402cc59f1cc72ebc7c9"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "d65921e4b02f0d0380054a7ee2cbd6d5"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "8bd93ec81461789fb18ee1d0365fed04"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "a39fbc02cd8c64c8a2083d673305ea89"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "84bd7d3504e3ee0705a63534551a220c"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "e3b68d515aef4f73013f06ccd103d615"
  },
  {
    "url": "tags/https/index.html",
    "revision": "54aedd4c75534c5f0c1df7c3f11ce912"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "915426c11b9aeb6f8f27aadd76d55e73"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "b53b3990ccc83529501bb8f96945d3a4"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "14f029b27f0f2d9a814fd84611bc7da1"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "6b9112548c276df621e9bb8fa578a655"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "8f712c1805686a8e3dd06a773218f2d8"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "a6a2c46a56c947de66fbe0beea7069b6"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "3efabf0822bdae07a4fea4252c20cd9d"
  },
  {
    "url": "tags/Python更新/index.html",
    "revision": "71eb1c9cf9a23a2d23a22fe343f66ae8"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "2152d74934bb675896f138d8204f7844"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "18d7a38265b68fbe5ffecdb17798d5f4"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "c2d1054fe2cb105aa195f90fd51acb48"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "25a74159a8f6e91ce4501741f02faea7"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "633fe651c5f5612b72a559ba7c6f9513"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "42e53d3cdc4aefcc583bec793e9dad39"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "01a95e395a5c6f57e191c1583fc09ac8"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "70ddde4617f6d38cf4a8a93086b6361b"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "8aa0fd653488cd4ffc7d4f2edfeedd56"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "40d0092db635f954231b40a322b9a132"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "f6b3442de0cd95cb48145027b40713b6"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "ff25af19628f026cacaa662a13740154"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "76302849307fb3169a09b0be08401a53"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "1a23867b31013fc9145eaf692ddbdd4f"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "c7aec20e183e69a1886a3e7e2eb4acbe"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "cb1b0e677656127b4bb3535c6e693733"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "9dd68b5ea3912bcb516496c6956d2372"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "5d263792df23dfa2fedd3b0049b21521"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "9b7bcaa8d5b24b8fbc23dcb90971ea11"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "c18a17ba4286939c87e31fd6e9593708"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "2c20aad08945622da55f7418fea6c9e9"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "2e32bdec7f58c05b486bea3fec177ba8"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "30262728e3e73fb5694171b8f24f1c34"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "e9a61d0220abdeed64f8534c6d285a8e"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "b80a00a5466e976e1c22ead107573c66"
  },
  {
    "url": "tags/编程技巧/index.html",
    "revision": "80248b537c6d3d5e178c14f7bfb03dd3"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "930578fadb94d7607ae5b3c8d76a7a0d"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "d2fb1276a4f50f408c80cc39303d47e9"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "dd1b3e295de17585720745595518f039"
  },
  {
    "url": "timeline/index.html",
    "revision": "8e62a3c85853c605d01c7913f132ce72"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "41a16c3359c7cf67ecdc0ab2e0198720"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "fb37ff962d8375eb3feeeda8163203f9"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "5d920d40e5b37b3fd5e52c696e620f15"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "65935df92ec64ff9aa5335acf2924041"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "3d3963cd8386d9ebff781f167aba7bc8"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "28b574e5bafa16c61719ae677441b73c"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "f91d95f047702760d2faed12983b2ffb"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "1a767fb0f96415b3e2f035c61f9321d9"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "6c777bcff9e296dcbb444acdd4186623"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "ccde210819a1caa20328d8d44a9007b0"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "4fee430b12adfab257a1ebf2e7210ad1"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "d873bae33575b37987894064286546fc"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "ae9d5fd6a4993c51c82bd305ea01a359"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "f1ac0bf9b8cd06e9fc645a36f0eb12a3"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "fcff9ef84da869ad4dc1a8a8e145df6f"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "88a84477b10defd28408c38f9ca1a396"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "2c13657f8e30ed83a7ba6d557a9ec6ce"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "92fcbac0ed4c9ccffc72540a17bd2359"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "bf66ced1d82305af23143d363d28150c"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "222a33bf59aa362a8ddd9dd4ccbd0b03"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "1a1cffbd71054fdc329bae4edabaaa73"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "afebd00e17b3f5da258ab3f8dfe03480"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "54eec9de8b8f1b79af8967b34b98e374"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "853bdbb89a484bc9e17e3f3aa6422070"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "80098abe3f12189986fffc55a588cc52"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "a84c4cf24b8b73ccdac919d03ad8d7a1"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "19f5719274e9a3b357629d5a3cc042c9"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "273fb924989ab3e458ee096ac9e276aa"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "03f5681335afb4d748a9fa2b12bcb38b"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "8c18cc27c7c833bc466d40778c7c128a"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "ac559f63fd1ed801fd75e7bb712c6ca4"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "336d68e9a375cf87356107d78f203b7a"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "90b96ec6ea86c1856cb9da49c582ccd5"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "879ce5ed1c7fe3eb94f6c2a012c8bd94"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "11dee74bff9cfa81329c65e0af67f1c8"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "4a2ec3df737a2d1386b1743a7cd726ca"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "033bb676d0a7243b6c201498c5fa0313"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "157782874289c661154320244c78cd3f"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "44d8a53162b8d2f8368d87f8f0267b02"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "e1dfaa198fd885977a0f599e647843cd"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "db8e9a349781088d2d1ea393614e5536"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "3eaa6c39432e6e14c5d034f2ebb9571a"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "72651818d047dc0a4f9daf010a0a7947"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "9d14658e0fb26c994998ae041ebc78d5"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "b15019fef2c31bf54f6d1df28dcfd53a"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "0e59c01f5502af6d4f01a339fabb5978"
  },
  {
    "url": "views/articles/2021/how-do-i-learn-python.html",
    "revision": "f97870f3f61e5147be946a07b99cb6c0"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "8a8cc940c4ada865e4ef3fb01f03042b"
  },
  {
    "url": "views/index.html",
    "revision": "f138fd034202ccc75ff570bb4a85d582"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "34e5b992da5c5bc520e96505740ed15c"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "e41ef57893be11a7f2f0c355e8f92724"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "a787768f52d430ff156fbd29d944ee7d"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "8f7c67fe8b558afb329e7df23551f3de"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "4f8c404312e063faf5411ddc86c00abe"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "a0037167a93152ffa056a42db2445e22"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "7f295145223aefd8f687e84cf562212e"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "9726b4dad07c6b200dc6bb1b44a42d5e"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "29860623963f91d44e0a9f82b05a6fd8"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "19698dafdaa632bcbcfbaee35bf27aa6"
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
