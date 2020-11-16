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
    "revision": "bfeb6b08e9ced32f86841d8b193fe17d"
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
    "url": "assets/js/1.8dfdb017.js",
    "revision": "aa6765b77cd492722baee01b0198dd5c"
  },
  {
    "url": "assets/js/10.3da738a2.js",
    "revision": "0b82f01018f0eefc8da719847086e2f8"
  },
  {
    "url": "assets/js/11.e94a796f.js",
    "revision": "1799a56e0da6ce9e4d43896b74ea898f"
  },
  {
    "url": "assets/js/12.67b2ec68.js",
    "revision": "58801618c0d9992fa52eef305f54f2da"
  },
  {
    "url": "assets/js/13.8ec73afc.js",
    "revision": "2b76a0b913b4991c830a1662420e9c96"
  },
  {
    "url": "assets/js/14.94a969d7.js",
    "revision": "9026b43f078362eb15ec135decf8e3ec"
  },
  {
    "url": "assets/js/15.f321a22a.js",
    "revision": "98118898e3fe1a14b175609ff09b8963"
  },
  {
    "url": "assets/js/16.09569a56.js",
    "revision": "da5a123d0466e282452ce0886578a762"
  },
  {
    "url": "assets/js/17.e5eef089.js",
    "revision": "b4b4524bc3413158e793e09aab2aec04"
  },
  {
    "url": "assets/js/18.238a704b.js",
    "revision": "34b4455bff681da539d47c689f01ade7"
  },
  {
    "url": "assets/js/19.f40fb3e4.js",
    "revision": "3d0f20db91e507582851c9ec145bc7ef"
  },
  {
    "url": "assets/js/20.bfccc964.js",
    "revision": "f682694559ddc5ace374f70c0c9d5caf"
  },
  {
    "url": "assets/js/21.45fda80d.js",
    "revision": "3df646ec591d8e6fd38fac54c9f1c971"
  },
  {
    "url": "assets/js/22.3fefdda6.js",
    "revision": "06fb27146b572e38c0dcdd8c0535720a"
  },
  {
    "url": "assets/js/23.e2cc9dc3.js",
    "revision": "a19a24ab58e162d418a7a80d2bfd92c1"
  },
  {
    "url": "assets/js/24.5d320e6d.js",
    "revision": "294c96e6a1f9b8c65dce5f0643fee733"
  },
  {
    "url": "assets/js/25.c6b3092b.js",
    "revision": "c7fe9c94d503a7efe84735f9277d5466"
  },
  {
    "url": "assets/js/26.d66b9c5c.js",
    "revision": "8bc00afa88cf8c2d7cb535f2cc46dd9b"
  },
  {
    "url": "assets/js/27.410dd872.js",
    "revision": "6f84962a2723140fef4f2a502e2e5b98"
  },
  {
    "url": "assets/js/28.0ba350c4.js",
    "revision": "3b7584e537ffa559c81dbb7b44641f0e"
  },
  {
    "url": "assets/js/29.b1d2d54c.js",
    "revision": "d65c44da64d9ac41caf04ca56e04a3b0"
  },
  {
    "url": "assets/js/30.91b108db.js",
    "revision": "364a2f96f0625b08576476749a9f8c6c"
  },
  {
    "url": "assets/js/31.23ae0784.js",
    "revision": "e3523fa477990f11b1bc3e8cf60ee970"
  },
  {
    "url": "assets/js/32.15d3d9f3.js",
    "revision": "84f6bb19634f122e1bb6a40006a6cb9f"
  },
  {
    "url": "assets/js/33.4b9afd7a.js",
    "revision": "0962f6018ddeaf3dc3143d4d4efbdcc4"
  },
  {
    "url": "assets/js/34.d16f670f.js",
    "revision": "076fa8acdf45bbaa9345832e885051dc"
  },
  {
    "url": "assets/js/35.ce4a93fd.js",
    "revision": "bd7ebb518566b555df999593769f076c"
  },
  {
    "url": "assets/js/36.20f8fb4e.js",
    "revision": "385e5c1caf9cfbeb790d27d67776d471"
  },
  {
    "url": "assets/js/37.62809e9c.js",
    "revision": "78cc1dff529d0eb99bc0fcddb7e101e2"
  },
  {
    "url": "assets/js/38.bdd9ab72.js",
    "revision": "d2b78f387072a2bd217410770591dc6d"
  },
  {
    "url": "assets/js/39.f88efdf1.js",
    "revision": "e0e1db9fc738c76e47ecbae4bd0f099c"
  },
  {
    "url": "assets/js/4.8584deb7.js",
    "revision": "376c59ef3e1c79ee36a3d8f57d7c1eb5"
  },
  {
    "url": "assets/js/40.a1ca4cea.js",
    "revision": "0fbba796e6ea0350b35afa235e397aa5"
  },
  {
    "url": "assets/js/41.bf87d46d.js",
    "revision": "82d59c9c718cb90a188a33c1151fa6f3"
  },
  {
    "url": "assets/js/42.e9217ada.js",
    "revision": "79246f091b04c29f1c26e781e9886b58"
  },
  {
    "url": "assets/js/43.16e017e5.js",
    "revision": "57d07c2f896c3c7f999759b28c7c03a8"
  },
  {
    "url": "assets/js/44.4515ed95.js",
    "revision": "ea3281a0a942367aa5b0a5bdc4402d7f"
  },
  {
    "url": "assets/js/45.246e4fef.js",
    "revision": "b2744c4684f60520c2acc349b0ede98b"
  },
  {
    "url": "assets/js/46.d1137bf2.js",
    "revision": "2849f6442ef0bd5ecacd93cd41ff53c8"
  },
  {
    "url": "assets/js/47.a85e605a.js",
    "revision": "f790dc6a212c0324c39dddc8e0eba35c"
  },
  {
    "url": "assets/js/48.3b12ec3d.js",
    "revision": "f963bd45ec5608b93f427077b7f2ad3a"
  },
  {
    "url": "assets/js/49.f856bd13.js",
    "revision": "663fe9a8b58d8a26aa47b083b75cb35a"
  },
  {
    "url": "assets/js/5.ee0514d1.js",
    "revision": "b2b20b1544eb18ba0801d958fb6b90ae"
  },
  {
    "url": "assets/js/50.e294c1f9.js",
    "revision": "ca0184002493d9ac7d12331889cf2008"
  },
  {
    "url": "assets/js/51.f71632c8.js",
    "revision": "4ac8495e9a73e19434187c29eb4c4733"
  },
  {
    "url": "assets/js/52.fafa73e8.js",
    "revision": "1d34722ab7e99d671c131a27ecc130cc"
  },
  {
    "url": "assets/js/53.6da9a412.js",
    "revision": "10539d1afe636c8530b693557a16e96f"
  },
  {
    "url": "assets/js/54.bc246058.js",
    "revision": "523b89e680c69438242915a77914656f"
  },
  {
    "url": "assets/js/55.567c2917.js",
    "revision": "542d88887f2f7015502c911515b34211"
  },
  {
    "url": "assets/js/56.c85b5182.js",
    "revision": "45971393891ccdda6855c5a8570f5b01"
  },
  {
    "url": "assets/js/57.cf55e62e.js",
    "revision": "b9a646ce6a098e329f8fb055ce1aa8b3"
  },
  {
    "url": "assets/js/58.303e0572.js",
    "revision": "3685150ccc6d86063e0a51839ab82fe4"
  },
  {
    "url": "assets/js/59.438abd78.js",
    "revision": "f0321805658a8ced496234fd062bf628"
  },
  {
    "url": "assets/js/6.01a6a45b.js",
    "revision": "5311e527126b5409da0aff932a2a88ec"
  },
  {
    "url": "assets/js/60.1519cc7d.js",
    "revision": "7cd90593ca54d5db5f8162a17b5792ab"
  },
  {
    "url": "assets/js/61.b1df42a0.js",
    "revision": "a599f1ecfd1572dbe43242613ae032f9"
  },
  {
    "url": "assets/js/62.10ece671.js",
    "revision": "005a6eb105502ddf2e80bd6785cda9d5"
  },
  {
    "url": "assets/js/63.b24a765f.js",
    "revision": "487e90e83af4761f808fae774694b883"
  },
  {
    "url": "assets/js/64.097fdb70.js",
    "revision": "36b0078012b6b9e480fe4b33c32ae6a0"
  },
  {
    "url": "assets/js/7.9fa224a7.js",
    "revision": "77da9956b1fe459bf52ddce4b93326d2"
  },
  {
    "url": "assets/js/8.fa08444b.js",
    "revision": "f83c068300c6fb6f26080b2b65b6772c"
  },
  {
    "url": "assets/js/9.b605518f.js",
    "revision": "56745e704e714fa3b7d4cff2e33a341e"
  },
  {
    "url": "assets/js/app.4e05e597.js",
    "revision": "21f792b1b9aaf76315d754fba6153b4d"
  },
  {
    "url": "assets/js/vendors~flowchart.3c5059e4.js",
    "revision": "c432475e0532e4a1b438f9e5297d000b"
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
    "revision": "4d54ec6c24cdb7271a6733aabe7e7dc1"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "6250d6fc4d1f4345da3693df7a1ea241"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "dd75f256c49d71fb9f6685ca61dbb196"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "6e330580b81ff3e2f741bacfb82eb60b"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "581bf8afd10a0723387e28e2092a052d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d5ca05cf183325c3dd328c03bb8e279f"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "f7a3fabf6a9c26829ffa22b439deab72"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "2fdfd3780e1388d8231a0ee0769f5363"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d8c2c510223f56a693154ba85a4adfec"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "7db2f802255fc37cf96aaabe5adb6a66"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "51f4249126ff35b87baef24a598f23a8"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "bf7df508de26dd98ee8e738bd14ae202"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "8cecf114cef222e8ae7175bf51705133"
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
    "revision": "ce62ca078108369665d5cbb90826c751"
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
    "revision": "6367cee4e96f5679f25e96024d4a728a"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "3f6d24173f4bedbf37357ce71a999e8c"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "cbf249712db77966fe5a800c33b8e986"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "b2524c6359aa843d44d7ebac064392e3"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "6be2d60cebfa0b7776ca1393fc3f3c73"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "b23183b63ebd957b99049ffe20367917"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "3930399c279c8bec3d65e9af156f4fec"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "c99eaf3840b80ce192ccbdea8ff8ff80"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "48bc6b33244c52f94200f65d2348c814"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "a01b361f05c0b7495fe21183d107f9c9"
  },
  {
    "url": "tags/https/index.html",
    "revision": "85550dbacc18daa138d0cf92fc418d73"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "19094028a027080496bb34fa56af6eb2"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "297ce92d64940e0ac1756c810a7b809a"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "0ded17fe9ba02e58d406d0d48a2ff314"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "53eddcfe9e8026ff847ec08cb83e9df1"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "018c450287e1cd149a21b017a3566b78"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "ed09fc31b62c17b5f9fde4203dd88171"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "7c0ac40c2d35eb674258b876d22a7f19"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "bf5a0dbcda26af59854b40dfe5ffb9bf"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "675efa6b0cc66bee5c3f24bb3db4f737"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "7302a62788c33045e4503440881552a0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9768de82c0df8ea4f9384a3455b6046c"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "0f2886a46e0bdcfa8eefa0a63a4906b8"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "e222bb6d32d8f14e21806e9e6256fbc9"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "bdc742dcbdb46e3afd631f34c24f4cf1"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "17f56d13df22523b21891c9324b14a05"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "8d9f0f37ad0863697488207c44d10ae4"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "47f98ad106640e3bb9a1910895d0606a"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "20003b0fe4954cc674368ca5fb8972f2"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "52571aaf20a72d182ed4bee3d962b1fd"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "5bf86a8e852e87d313ce7259ed443093"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "4cb5a19e93d0dac3cd04b648692b3dab"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "0f1ebbb181da68c055cfd4428becc12f"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "2b76112b3ba3b4a14d3b80d492b343d2"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "67004723cd6f8ad5ac18c2f7beb34ce4"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "76312aa45c3bef282f3192a5ee224b60"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "59f850c4cc30596fbb1e9f6485c69bf6"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "bb24dffb689dc64af39bf23e35b92192"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "f7c7f62ba628d292a4e1c48d9a01f3c9"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "6d40d13e2ce04cf2bd7db47aa32ee0c3"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "9b034b8f4864e9e99cef166e35f457c6"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "4f15a5207a6d43760fc5895dd8decce1"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "fc62e5e50f92a12ad341c311f6aed311"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "156a03700c724b8aabfd2f85c4396138"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "e3d4599e178c64d2a32692bb2e2bc115"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "f65a47ab9d79755665d3b8434943df79"
  },
  {
    "url": "timeline/index.html",
    "revision": "f529e47865f0fde40bccacdd3a19672c"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "3d34f2048a8c5ddbfee72c1585271b48"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "c0dba3eeaaf7ac49ef76569e4fcfe93a"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "7aa9b3619ca6b1634aa275d544b14f70"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "ae27821d98cd9a822d39b66c5babdd35"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "20d5f2f99c207033c60e43af298c0227"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "d94da18ce8053638b807e9ad5f8e1e1f"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "f6663dbda0fe1d4d4f67c1ad55dbbeb0"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "d53161c148cd171b65e35dc5c17ccf8d"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "b77096f94baf3dd61ef84950ab6b862a"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "c37b9f47f6bd233eb49b8ef3fedd60f1"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "937b38f2b74c05dcd5806218a05c9be6"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "e8b9dff4f1a55b11330dcfad70809a38"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "aee4390aa3d72db21eae635f39129466"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "14888295dbade8a90666c1356b7cfb67"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "4a55f9dff1403080c8f5b74d4e6f1893"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "79ae26e07733882df1aee7ff1398b51f"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "27793b58dfd7d5b74e01467f0f6e08b5"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "9a0ae986ed9dbac82d69f3180d95c660"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "71dd115e243e2b9a0fa2b19982962293"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "033c5c9496593d7ab2396501a9df13ef"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "e3f22f8d93d48d3d2e492c6b629cbc22"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "3a489f4efa0bad29f2076df231701fb2"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "c066044b3306379b93bba839b21ec64e"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "00469ca11283d05c76dcfc853271ede7"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "94a81c8d0b42dae6290afc962741b90b"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "0e272b4bf48ca08973a264eb8feb264e"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "8b3576fe94b19f9faf7c4f3652fefeda"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "0a18e6763fc3a6d01783a59fa1406041"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "3a7b9e273483344145d75e6199b9bd6a"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "8c58b1cba60b5787f4d3d94ab876f472"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "69c5c03cb567bdd2b76796ed411788ad"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "661094f970b0bf8f46122091ed3034fd"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "7790dde1a0c8ffc4cb5d1ce0e99a3af4"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "9af297d037dff903a52f3ca1cc1a2dbc"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "c6ed1972120903349a157c2a7b106c9a"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "a394954e57c2e40dbc46f05f2d2636a2"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "98c3bd058b178ef5c5690bf54c2e959a"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "9106e307633f062d5c35c70261d64f7c"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "aee84ed627186191f37a85fd7b78b1d7"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "4b52109616f59bbd71716aacef96061d"
  },
  {
    "url": "views/index.html",
    "revision": "9c2649308930a407f74fd20db3381dc3"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "c2b9c4b1f9f1efc78ee8a3a7b7e11c3e"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "2ffa637db44c457ec1e2013a04b3b3aa"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "b95b550a553c83d01d13324277985a94"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "494e346cab39d0c33f8be8dea265e65f"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "201b38ee88139f064663a1f187d28cf1"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "a82896ff41eedf1cb5a9263553304724"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "d986940826b564cf6b327b277eb8b6aa"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "b465c724220482468b18bbd358afd493"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "32ae3bed592590e7644e03659b0d00a6"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "2cba774defd61a7a5114b07e97046d8e"
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
