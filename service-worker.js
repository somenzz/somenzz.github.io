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
    "revision": "8fb2195aef1b9a0227c5ce202a853ef1"
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
    "url": "assets/js/14.c24981ee.js",
    "revision": "87022e7efe7d7a7e06512e37e0debc20"
  },
  {
    "url": "assets/js/15.b0d82960.js",
    "revision": "34074148a86eb443cc39cff45a09d4a9"
  },
  {
    "url": "assets/js/16.e81c0eb5.js",
    "revision": "edec856fe5c0c6389cd47f790b27c225"
  },
  {
    "url": "assets/js/17.a89b9ccf.js",
    "revision": "ed5703e31c1824ae3a1ee920fe721a92"
  },
  {
    "url": "assets/js/18.d5d866f4.js",
    "revision": "a3963bad72f7fdb944a55b9c8556b385"
  },
  {
    "url": "assets/js/19.5cc3455b.js",
    "revision": "3f488d7c21876f9c9244b22e028e3ac9"
  },
  {
    "url": "assets/js/20.66fad244.js",
    "revision": "882ddb84fcfe9242213bb65e84793652"
  },
  {
    "url": "assets/js/21.b27bb607.js",
    "revision": "555a8c9445afdf5a816678e609468723"
  },
  {
    "url": "assets/js/22.e4277147.js",
    "revision": "c147e9b3ff832c7943dc50fe45453e8c"
  },
  {
    "url": "assets/js/23.957e003b.js",
    "revision": "77b58bf2581bd7fb77efd9f9e8aed120"
  },
  {
    "url": "assets/js/24.7045b7de.js",
    "revision": "78436f91c0a32bd6a97d0684d575f5b1"
  },
  {
    "url": "assets/js/25.89957b39.js",
    "revision": "338bd26b742a7e9babae751ea17b0648"
  },
  {
    "url": "assets/js/26.d66b9c5c.js",
    "revision": "8bc00afa88cf8c2d7cb535f2cc46dd9b"
  },
  {
    "url": "assets/js/27.6dcd818a.js",
    "revision": "deff88bf5f8108f434b68deedeaa66f5"
  },
  {
    "url": "assets/js/28.054c939e.js",
    "revision": "1084d3b565e92adb2dc95e8b40121652"
  },
  {
    "url": "assets/js/29.b1d2d54c.js",
    "revision": "d65c44da64d9ac41caf04ca56e04a3b0"
  },
  {
    "url": "assets/js/30.10d7c7ca.js",
    "revision": "6b88f3abadee4df26d004791779c5021"
  },
  {
    "url": "assets/js/31.aeb18938.js",
    "revision": "2f6e5a84198ece858098e4d735024e5b"
  },
  {
    "url": "assets/js/32.e416b7a6.js",
    "revision": "0c31431d303a46e2fd4f3c2dc8a96162"
  },
  {
    "url": "assets/js/33.79ed1302.js",
    "revision": "ff09c0235cb1f657efc557f213869285"
  },
  {
    "url": "assets/js/34.d8a70dd3.js",
    "revision": "fe4ca0f7c9d8095cace0319a34829f73"
  },
  {
    "url": "assets/js/35.eec12cfe.js",
    "revision": "692bf4f0672436f02c365acc1c1b86d9"
  },
  {
    "url": "assets/js/36.fa025ad1.js",
    "revision": "6e78c4f1da14d34685b5c6ab568b9620"
  },
  {
    "url": "assets/js/37.32908d52.js",
    "revision": "0fca012ce8e40ce27484154c65afca9b"
  },
  {
    "url": "assets/js/38.919115c7.js",
    "revision": "0bc62d73fa34d8ee0e890a79ef5014d1"
  },
  {
    "url": "assets/js/39.9ae763f3.js",
    "revision": "bacf6ae2bdf2dcda17ed7dc3979faeab"
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
    "url": "assets/js/41.fd287735.js",
    "revision": "804247a32fe432ee71a2fae9dbf6eb6e"
  },
  {
    "url": "assets/js/42.9aa840d0.js",
    "revision": "1f5404106dbfcf6b3e5e056bbcbf3067"
  },
  {
    "url": "assets/js/43.16e017e5.js",
    "revision": "57d07c2f896c3c7f999759b28c7c03a8"
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
    "url": "assets/js/46.28b39c83.js",
    "revision": "10861029d57f02dc491ffee5e0e22cda"
  },
  {
    "url": "assets/js/47.14f44d74.js",
    "revision": "bd7bcd63262372bee2bf18f2b66f9f0f"
  },
  {
    "url": "assets/js/48.7f9d3275.js",
    "revision": "66c3494f7c5b32a9e4c1015be712f6fd"
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
    "url": "assets/js/50.7808d97a.js",
    "revision": "03f9004a11e9f27a1101cffb2a16a4cf"
  },
  {
    "url": "assets/js/51.2aa3ed8b.js",
    "revision": "5c293db4e5a603d72505ac012b2fbc46"
  },
  {
    "url": "assets/js/52.6ed1f788.js",
    "revision": "7e0ec00462162e4067e901d9e37afccc"
  },
  {
    "url": "assets/js/53.b2ad0dcf.js",
    "revision": "721e407fa3ab30acc2a89e5721076c25"
  },
  {
    "url": "assets/js/54.9de8a533.js",
    "revision": "6f877c846d9d8486c999602bb41a5e56"
  },
  {
    "url": "assets/js/55.83dbda8f.js",
    "revision": "9aacf2cf8a0f0822bd0a25eab59fc433"
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
    "url": "assets/js/59.4d34daa0.js",
    "revision": "a678dd23c16ae1fe736bf75a3deb1b4a"
  },
  {
    "url": "assets/js/6.01a6a45b.js",
    "revision": "5311e527126b5409da0aff932a2a88ec"
  },
  {
    "url": "assets/js/60.b394cfd4.js",
    "revision": "53b3ecd93442cf192332a9a8620296dd"
  },
  {
    "url": "assets/js/61.34eaff6a.js",
    "revision": "c6bde30844f133203fb335b5a47c338a"
  },
  {
    "url": "assets/js/62.55fd50e5.js",
    "revision": "01285d9dca22ba08acefe6ad715af1fa"
  },
  {
    "url": "assets/js/63.6e583eef.js",
    "revision": "8da1ad7753f4ed499a3a941a3d6bea51"
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
    "url": "assets/js/8.42b04cb4.js",
    "revision": "703618777fbc84307b0adec67ae0beed"
  },
  {
    "url": "assets/js/9.c76973cc.js",
    "revision": "d64a232af840b266535c2dfa3c28ba33"
  },
  {
    "url": "assets/js/app.7e33a14e.js",
    "revision": "39571b97525f99c97b3d09589afc3d48"
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
    "revision": "758f53d1116c471913e4280b0638c72a"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "81efcfa050618b440cfda2212dd967c7"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "69f1ed8a50475c3bfe8373ee6faf927d"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "0e2a34020173a4590b9e7cbb21bcd959"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "3ecbf22f030ff346f60abfe9e4adc495"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "348a35f6b632a914374d6a52d13e4d2c"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "e19d91ef57da6100e6dbf5a015930a55"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "84fdfaec3d2cb47ff5ce22697ab184c9"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8db48f69bccc77bdf6dc9ec2e18f3ff4"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "b445356f1063898c287c6e9aeb674749"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "68941ba92c52e2a25937fcbaa1adf863"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "143ceb45db9eb82a60f679ba7ab81e9b"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "3d1cd8ba80c9c1148983777286fbd548"
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
    "revision": "e5e7ec6ebf528aea2792803fef2d31a4"
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
    "revision": "957218bc5ec545821bd32b77445afaf6"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "f4ec7ad2f0211d7c933b511043e8255a"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "7962f9ba77d66632ae7d86dc1339186b"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "0662a0279ef408c7e8d0e7f0f8304986"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "19b226557880effc1e63b5efedfd328e"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "fa49fadf815fd82147936869efbd1343"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "12703c2f74db9484fb7013f50b369aab"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "4bea91032b9754daa9ee57f33196e388"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "a35904de3201068fb881647023e9c0a6"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "e65ead9b864cf6e41a99176ff661dd77"
  },
  {
    "url": "tags/https/index.html",
    "revision": "bb863f10f722e354605b4da1ddbbd505"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "9063c43ab676a2c2c6d470f13f231aad"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "673fbc8ba05f2209c926426cb8206be2"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "6abe3608011e938c4593040887f3b50c"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "a56da5eeb7f048c3d4ced34f00ed87a4"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "94adc808af6f48008fa1682f13056ff2"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "e1d9fcd1f29d02977e10529864ab4afd"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "b64390effd16e28bee2db9258710e0a4"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "eb1ebe1c7736e291f94555faf6d2f690"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "a21e829ce39dd689bb113d56b5999255"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "ec659ba893518a3d0a6526cc4c4320c9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c74518f7b3c24941902a96dd73fb96de"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "d554258c0f2d3659178e061c6fe1b449"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "81ebd2f49bb6feabf0f0db3879d8e65b"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "608bb4ab6c1d5169b4908eab32aeb1e6"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "2c9cb0cb73120c0e18ccb49f69e81698"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "5c9efdf0e5538d693c5e59db9b8fdf97"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "46549e152fb9983573e7839afd9df103"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "b0fc87c849ad4c36c9ff1d4e8eaa3eb2"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "9673bbd4fac714d911430060a0bf10c4"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "6d2cf2742a71c725c45c20b11ebffd07"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "89fd73ca51e1821c7ac698e8acbb57c9"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "c78dc752b9df7f219f27a0119315af03"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "f819f0ba328deef63502dc3eaa8fb33c"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "934663ee1d5adeeb38f53f53bbd20c71"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "c563336caca5883d76a309ffeee42532"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "b9b83d55c37f6949b7dd5ecd9c4819fe"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "4b9f93264e9732582700b87910fa895d"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "de25beaaf60761f04f197729215500fc"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "c2d8c1f29652c63e4ea0694f03763416"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "ed981af6a888905ea1482223ce46ae42"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "108ffd3d2f9a033c91e465d1c00f588e"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "42819b16adfd18a1ab8681af24b85d2a"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "a979607b516c8b97c6440fcde84af214"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "6626f79fadb8ed1242dc1372d059b97b"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "50491466ca2f2c1ad95e987a6f07f413"
  },
  {
    "url": "timeline/index.html",
    "revision": "d4f5a7b96844822d5a64ccfd8fd4abae"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "4230f38d5b024bfc528da56d6ce0cbf6"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "1329df3b160ae9e6651e4bfb56f94ab3"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "f42eeca8947c89f73dfee3d4cf0cf13a"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "33fd870dfc61cb9c9e057989aa8ce9a5"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "d5a65b0a132aaf0d46c70f20bf520be6"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "f9a24312d6afd1aefa37feda6cc373cb"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "2f2ea96a362d8473ab58c7228b476a9a"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "b17c0cc043a8907eb353f7b5cf7de4b0"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "acf3404b4d01e86dab8f2153686d9774"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "b0fa598a541382a5f9cba5319d1f987c"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "fd7e86eb28553ef4c276377bcf166922"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "22d76a7c2875a9308b7b83ea0b86a41b"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "d734b5e0b9132d9e966e1681378ef058"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "6e4252f2d6037feffe27f613588b4f5b"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "b2168ec8b622d64e5791aec5b581cf54"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "4a066ca6f9ba583c783f28407dc7ef95"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "5d670386fce358be616303f475c62f06"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "ac60bca6566e5ac8b034281576dde678"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "8e673210d4c472578039bfc7abb9f821"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "2cf431573ac1fb7c9dacbf6a87dd956c"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "c9265cca5cf08026f4f4e881191c66cd"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "3140b743cc25d688c572fd81072675da"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "dd2c8e109bd177bd84bb94ca694b8b9d"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "15a8b897fdbb592cd47c8747b0839661"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "56a800b21f95292b926a0bb87ffc9366"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "1d0961ba66ebf62d9a76354b0b60f8e8"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "e5a38c7fe32933978ce333492875dd4f"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "73266914b6fedfd12fc15ff35c471f8b"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "8378031a87576fa331125d7b01acd1ac"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "6decdee69989dfa600d2493153ca372b"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "8895d6641a76cb77c05c4319e6be0d2d"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "69c427f009a9744f1a6366254f97b2ad"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "22aaadd2db0bb787111cfe9abba1db70"
  },
  {
    "url": "views/articles/2020/15-pygame-projects.html",
    "revision": "349db2723a1a7f6efa09dadfb43b09df"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "ff05180110c0bc7c501d8dbb34b5b95a"
  },
  {
    "url": "views/articles/2020/internal_and_external_networks.html",
    "revision": "f0dc6a2c69e15a4b45fd4423c681586d"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "13a5ce461446931c4be9fdbabf678a5b"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "39f15b30d533384a65826857958facb6"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "05b6654bf57cd5124bacd2224f08da7f"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "091ce8f27bc9d4bdd26ae5d8bcdc8ccc"
  },
  {
    "url": "views/index.html",
    "revision": "033bd2baf7d3f8ea34c3cc85410a5558"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "65215334bd280f53a3bee3e20ddd6cac"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "ecd5daf365bad7a94887e2e6141a86ad"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "ecb3851d76a752e7e46570c30886c6a4"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "0b28f30b2fef1609d17789e273ed5cab"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "93e2c3b856d384f8d5afcff96ab71e44"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "6d4aac37ad05d79ba741000fef32a272"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "d0799cd243aa7a8406074839363acaa9"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "676877acb7dbae9d62ad10b687c9dfc4"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "c1a86e092357b4696036344e3f6e13cc"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "2c5cf674785cd45330ff76c65cf3edee"
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
