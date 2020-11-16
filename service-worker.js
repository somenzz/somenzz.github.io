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
    "revision": "25e209834e2c5d79bd1e6f3b55b2775f"
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
    "url": "assets/js/14.1cd9e44f.js",
    "revision": "7d1083f751a7d36c76d1a1b202136561"
  },
  {
    "url": "assets/js/15.b0d82960.js",
    "revision": "34074148a86eb443cc39cff45a09d4a9"
  },
  {
    "url": "assets/js/16.345c661a.js",
    "revision": "42873f064ef35026a467461133898b22"
  },
  {
    "url": "assets/js/17.5b047891.js",
    "revision": "fb74952dc215c74449a39f30bc37fa78"
  },
  {
    "url": "assets/js/18.238a704b.js",
    "revision": "34b4455bff681da539d47c689f01ade7"
  },
  {
    "url": "assets/js/19.641dfd14.js",
    "revision": "99978fb3b30c5fc0b2464c8695807b74"
  },
  {
    "url": "assets/js/20.bfccc964.js",
    "revision": "f682694559ddc5ace374f70c0c9d5caf"
  },
  {
    "url": "assets/js/21.6ca539b3.js",
    "revision": "b865cde2af4b6fcbb1db25362fb3e23e"
  },
  {
    "url": "assets/js/22.9f5a5cee.js",
    "revision": "604ea324cbecdfa0cd77de1db9708337"
  },
  {
    "url": "assets/js/23.e2cc9dc3.js",
    "revision": "a19a24ab58e162d418a7a80d2bfd92c1"
  },
  {
    "url": "assets/js/24.fb221f33.js",
    "revision": "6881a1b261353efe7cb5ef89eab0a656"
  },
  {
    "url": "assets/js/25.891e45cd.js",
    "revision": "0979fb8785457017b610c87d43886161"
  },
  {
    "url": "assets/js/26.ce4fe94e.js",
    "revision": "d742bce0b8abed03d885b4c1329d1a90"
  },
  {
    "url": "assets/js/27.3c78cae4.js",
    "revision": "2bee89e65519d3433d56f01e2c3d4c15"
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
    "url": "assets/js/30.eb997d85.js",
    "revision": "979e2af9eabd4164c0a4bd283d3634d7"
  },
  {
    "url": "assets/js/31.23ae0784.js",
    "revision": "e3523fa477990f11b1bc3e8cf60ee970"
  },
  {
    "url": "assets/js/32.e416b7a6.js",
    "revision": "0c31431d303a46e2fd4f3c2dc8a96162"
  },
  {
    "url": "assets/js/33.5f5e1e61.js",
    "revision": "48e5ffd412b2ae0804d7ab423fe8e636"
  },
  {
    "url": "assets/js/34.2840860b.js",
    "revision": "92806c5834ae5be8cf1c48ffe358c728"
  },
  {
    "url": "assets/js/35.ce4a93fd.js",
    "revision": "bd7ebb518566b555df999593769f076c"
  },
  {
    "url": "assets/js/36.deacb0c0.js",
    "revision": "29c8f9e26d9ec4da98ebe5d3a09e7c0d"
  },
  {
    "url": "assets/js/37.62809e9c.js",
    "revision": "78cc1dff529d0eb99bc0fcddb7e101e2"
  },
  {
    "url": "assets/js/38.7c0bff97.js",
    "revision": "8042164fd9864082306b77a11c1c995c"
  },
  {
    "url": "assets/js/39.d1500ac0.js",
    "revision": "60e64ba5f7a05869e1ed2481f1b866d1"
  },
  {
    "url": "assets/js/4.8584deb7.js",
    "revision": "376c59ef3e1c79ee36a3d8f57d7c1eb5"
  },
  {
    "url": "assets/js/40.cb71eb5b.js",
    "revision": "3dc1c662ea317e33c3975d628267e007"
  },
  {
    "url": "assets/js/41.bf87d46d.js",
    "revision": "82d59c9c718cb90a188a33c1151fa6f3"
  },
  {
    "url": "assets/js/42.f78b2b33.js",
    "revision": "2f3b578d8290a0f41b34e3fee6c39cff"
  },
  {
    "url": "assets/js/43.69d5e786.js",
    "revision": "937b0c173af0af93a95729c19dab6359"
  },
  {
    "url": "assets/js/44.3553245c.js",
    "revision": "62bf4ae59157d721a6a6dbd9143522c1"
  },
  {
    "url": "assets/js/45.bbf652d9.js",
    "revision": "a5ec6321fd25121985532119e72f513e"
  },
  {
    "url": "assets/js/46.1bfb5699.js",
    "revision": "a773bbdc21cd926e2a0704658ea63974"
  },
  {
    "url": "assets/js/47.b2fead63.js",
    "revision": "55aad73b1e454973b6a0444d168a3691"
  },
  {
    "url": "assets/js/48.5cb24e66.js",
    "revision": "19ef7d73fff653320f4b7a9a493b222e"
  },
  {
    "url": "assets/js/49.125f6460.js",
    "revision": "94846d5a5c900550cf6f197e79578e3d"
  },
  {
    "url": "assets/js/5.ee0514d1.js",
    "revision": "b2b20b1544eb18ba0801d958fb6b90ae"
  },
  {
    "url": "assets/js/50.7808d97a.js",
    "revision": "03f9004a11e9f27a1101cffb2a16a4cf"
  },
  {
    "url": "assets/js/51.2aa3ed8b.js",
    "revision": "5c293db4e5a603d72505ac012b2fbc46"
  },
  {
    "url": "assets/js/52.61ed4d59.js",
    "revision": "307bcd32fc4f88da08271a0e83113090"
  },
  {
    "url": "assets/js/53.e4924546.js",
    "revision": "9accf9d3f5f0d8568a54ac2d9fc30399"
  },
  {
    "url": "assets/js/54.9b532ed7.js",
    "revision": "7a245dd8d372821f0f909701c72b9917"
  },
  {
    "url": "assets/js/55.0fe020d7.js",
    "revision": "85bb67d172aa859d75b7a7b563c22c5d"
  },
  {
    "url": "assets/js/56.53b7229d.js",
    "revision": "081bb72a4e6aa43281916a1b798f3990"
  },
  {
    "url": "assets/js/57.449f8964.js",
    "revision": "168b760ef5265e41de2ceb1073ea3330"
  },
  {
    "url": "assets/js/58.69eb456e.js",
    "revision": "7fc663ac48460d223a9498bc97f57e46"
  },
  {
    "url": "assets/js/59.0ecd8806.js",
    "revision": "f6a5effb06b9167b7ffc3b1943466187"
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
    "url": "assets/js/61.5dd1b518.js",
    "revision": "2288ade5c3a2ffb75fa9810f6a82e8c1"
  },
  {
    "url": "assets/js/62.ef2c9711.js",
    "revision": "5be73f08b1b6104ed87accfc3c9e8f9a"
  },
  {
    "url": "assets/js/63.754c49b0.js",
    "revision": "584d6e5dccda2094ba25a4bcfcca7753"
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
    "url": "assets/js/8.caaa832b.js",
    "revision": "2696f74d6a2e98299f4f1a7686c7938e"
  },
  {
    "url": "assets/js/9.1f0366b6.js",
    "revision": "34dcd46182559932795c718ffc5bf108"
  },
  {
    "url": "assets/js/app.2124e342.js",
    "revision": "c8bd4994c4da551c00e00745fd5ac58b"
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
    "revision": "09fe09f0be7d1f9401fee739721b8879"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "8464872794f7c59077c4f76cd2cf1bcc"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "75df223c89402f32a37167a17bcfdfd3"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "536563d27510248c78b1545455a8df49"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "ee9682a191eeef517892d1120c40eb20"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1d68832724a2bc64dd93f330ba8a47e8"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "ba27b805ec2a037b530a1b019f3519b3"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "bd732d8ab92774f0a06f2897d5172fc0"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "021797e4db5fcbc42fc0d132783c31a3"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "84fdef1717ec9462bbda8646f7c4e82b"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "644aeca53156453aebb55d2c889cc565"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "5541f46671c7f4cd86c47b25a9f3d44e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "7f754b718965c9e4ddea478e083fa170"
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
    "revision": "00bb58b3495b6b90efbfbdb05da66ba3"
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
    "revision": "f3fd2cf651a05a2367635e8cc5282ee9"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "6e0277823b8103c7b95b542d62c9594a"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "5bfaeaf3ede79871b932c9726a576de7"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "93183ef0e94736590d09eb2d23ad7abb"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "529a0967223d9fe61d36c00ce0a02626"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "8b589f6f4b310fe2f7054bd6f8e5b07a"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "0ce29309e9df2ffffed768ecaa270e3c"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "c2f7720126cd6561273b90159c747ccc"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "f7d96dacbedd4d329eb0ba62f9eb2417"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "ecec81381f8f11090e5bfb2d88f4a453"
  },
  {
    "url": "tags/https/index.html",
    "revision": "4a06a64749210d7d2c34573fc51fcbfa"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "2e80efb3ecc82a57d241f01c1ae1ea3f"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "fd9bdd213cc89311d76c0eac8a8562b7"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "e215029fb27ab58c194a974b5dce8bb9"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "f31bd9b2de3d43c84a150cdac2f84b42"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "d26f7807e32dc256f07cfa956bcc3f04"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "487315601a94126e92a06ec3a5e39077"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "ce5439c6dc09ccc395ae998dc7ec08fa"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "6876d4a7b9cb1af74306af6a962511ce"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "e28baf8af7c956cbc0cadbff45303897"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "19e18db591a0829fc9971803991d682c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1143d3453511c407bde08839938f33b4"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "2ea77343787683ecc1b2cfb5004b89b5"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "17696216659996ad362b765b4f671cc1"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "23383379665686b20b38c296ac62a58c"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "cb9b79e1b9975d9ddfebb36fcd154eea"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "685020dea8cfdecb513a1a06e1c9a251"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "864acde09803ab386d81ddaca47e161d"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "8f7cf7631b3112a9256408d83aa55536"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "5ae87291f07ad2b6b02189615ed5f726"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "f6219975fe6a1a318922c0beda380293"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "403840e38a095e6f24616c0005e72593"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "8ac0eb45868ce3265d43ff77e05b4a3e"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "6d8b6f68ab414ecefaccf710ee4642bb"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "00f63040c03b3ba80d26ebe5ad969b10"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "e336250d33e66bca1fce1df087c8c657"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "922ef0b145c8a637be0fcb1d7546f2ea"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "b5954a79902b26deb4280e4b74f26970"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "90d714be61770ba3361df6e6f43ff2fa"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "fdea9971dd9772b00e835dd4f3c2dee6"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "145e7f8730fbb9595ba34481f5e8f47b"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "32941b5becc8b4b2e74b29fe457c403a"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "8667cc554138d555addaabb5e23118fc"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "32b2fbf857f8868408c5176902f82aa3"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "9051722fcfef3ba93e3c0a2bb17027f6"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "a63fac1eb931f4f50e9b24044371a418"
  },
  {
    "url": "timeline/index.html",
    "revision": "53996cdc614e44265d870c60f0b7e605"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "5921cee062cda7c1f5b5634c0d266877"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "af06d5ff5722f19e3032fdc3631f8500"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "40eb840ed0275bda42bad40d7d651b63"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "6f2dd1b95c2de81663e829cd2928360b"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "c2a36e431b755259275cec3e103fbde7"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "a26fb9bdc0666a0e253014155c79420e"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "d3d9e37972271a5870cf3ddf20c98ca8"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "375191811511380974ba75d188b09bbd"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "1f8460ce6fdfce6757ebc308c8e22900"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "73f7bfabd32429279e6112c9d92f00b7"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "81e04556c75da6bfe58df26f566dfc48"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "e1f68211e4efb7f6f35771adbffc15d1"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "9e81dc2c5658db842dc0fb740a92bdc8"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "dd5aabe70cb336d657572a82ad894d15"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "479ea735a2ea84802d6cf10bfaddf146"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "d70ba6cd4844edb02f28ff68e269bd64"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "9a47108904d2bd8783bb09cf06ffdca4"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "46ad67e7323a0cac2d0a9f2791429ae2"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "85c5d32da21ab1a1d6169c54c74800be"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "856cb48483cee6b71a649ec7073395ac"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "3cbbee5bd48c305ba25a903e70864daf"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "7ffe7144053cecaec0fa94ff59825b5e"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "16bfc35afb74e9b328a946646069b7b0"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "168dfc8b368b85d23244f769ca99e762"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "b8b6d650b11430b574d9312a6c5657b1"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "6b554099d7cb26b922c45e81a313da93"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "1b1df883e9bc36aa91a33d45fa8d3c12"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "125b6a2f9e5a94d99148ad50d6969356"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "5bb7780d5649c4dcd79cf60b08dddbc1"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "fb0f8da01e3e24687ed926e2e3ae0f03"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "2b9c1b224b1612c79a61edf7595f6123"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "0bd49d6d6d0ad2e8eaea05d573f8804f"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "bc7af965caa81801331cf72e1bd7242a"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "6e95cb1142ce13df864bf0fd7c42f5d2"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "b2f16b81b19f5d4d7f06c6d73fb07412"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "62013c5b7ef76836ea396035568c8ffc"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "920e9cc47d8e1cea0eea6503d968def7"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "894b35492b381b1d3ce20bf2f984f612"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "d199e8f61a65177578e1bda740563c4e"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "f686c91d4278f371c64d254cb823a509"
  },
  {
    "url": "views/index.html",
    "revision": "51db92c2443dd4e479619b98a781a3d6"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "a902f07a91c44c01d79d4a77dd4972b8"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "6647a8f9dba4214a753b14d7187b4991"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "aec036d62b88f579db37e0cb2c337eb9"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "87a5327a9ff6033a43cbb7e5881f38a7"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "550f01c69d15bd8275146b0efb2b5a94"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "f44d530f219413dc23b0f03bfffc2c38"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "12139a7bba3364eb6bf16cf1748197a6"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "0036f47a6f1d7569b3ac2c86d8fe7fe8"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "6626ddd4b82d0d0012c95b8c0e943ebc"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "409ec1a13959b00d1c6a7daf883854d2"
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
