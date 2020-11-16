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
    "revision": "973948255adfdb7597c506ea6c06384c"
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
    "url": "assets/js/14.88c3c48a.js",
    "revision": "b7cdce848dd62c5222125682b654ea16"
  },
  {
    "url": "assets/js/15.f321a22a.js",
    "revision": "98118898e3fe1a14b175609ff09b8963"
  },
  {
    "url": "assets/js/16.011120ce.js",
    "revision": "7f08e8c47dce78aec334d9e85ed9c882"
  },
  {
    "url": "assets/js/17.5b047891.js",
    "revision": "fb74952dc215c74449a39f30bc37fa78"
  },
  {
    "url": "assets/js/18.2bfac7a1.js",
    "revision": "73fc5bf797ecfa697f9eb417155c4e56"
  },
  {
    "url": "assets/js/19.8cf45728.js",
    "revision": "f90157ecd02a9aa634b4a1e7a3701cbc"
  },
  {
    "url": "assets/js/20.29143b65.js",
    "revision": "712021d9a40ff8e14d19034544807938"
  },
  {
    "url": "assets/js/21.45fda80d.js",
    "revision": "3df646ec591d8e6fd38fac54c9f1c971"
  },
  {
    "url": "assets/js/22.b0af5b75.js",
    "revision": "975a6e09f65bbad13cc3c22fcc1da118"
  },
  {
    "url": "assets/js/23.4fc74ab5.js",
    "revision": "9be7f08364be8276217fa705007b7037"
  },
  {
    "url": "assets/js/24.03f18f08.js",
    "revision": "6b914c5b366f5cefa962b261274bcda6"
  },
  {
    "url": "assets/js/25.c6b3092b.js",
    "revision": "c7fe9c94d503a7efe84735f9277d5466"
  },
  {
    "url": "assets/js/26.edb37e8e.js",
    "revision": "b162ea71619d92414b4ea5bced029d44"
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
    "url": "assets/js/30.5ccf5c17.js",
    "revision": "8df0f3f9856cedd4a00ac198ff3fd1aa"
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
    "url": "assets/js/33.3a2e7656.js",
    "revision": "13a5c6669b69d8f06adcfd17eb5a9a16"
  },
  {
    "url": "assets/js/34.2840860b.js",
    "revision": "92806c5834ae5be8cf1c48ffe358c728"
  },
  {
    "url": "assets/js/35.04b9df0c.js",
    "revision": "b96df9dfd4bddfbb401bd49b8e26c016"
  },
  {
    "url": "assets/js/36.fa025ad1.js",
    "revision": "6e78c4f1da14d34685b5c6ab568b9620"
  },
  {
    "url": "assets/js/37.b9f72bf1.js",
    "revision": "78b781e862686d344ceefc54070126d3"
  },
  {
    "url": "assets/js/38.b9cd73a7.js",
    "revision": "3453143723359a247247a1aaff866663"
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
    "url": "assets/js/40.a1ca4cea.js",
    "revision": "0fbba796e6ea0350b35afa235e397aa5"
  },
  {
    "url": "assets/js/41.adfa49c8.js",
    "revision": "0698ac5b12e7e97dd3b050f6e81f9ab6"
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
    "url": "assets/js/45.34d2d10f.js",
    "revision": "c5c805129bbe532158b6a1cbc3fd6969"
  },
  {
    "url": "assets/js/46.d1137bf2.js",
    "revision": "2849f6442ef0bd5ecacd93cd41ff53c8"
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
    "url": "assets/js/57.308be2dc.js",
    "revision": "7d3c3fb85604dec5a2d7e02219a5a965"
  },
  {
    "url": "assets/js/58.303e0572.js",
    "revision": "3685150ccc6d86063e0a51839ab82fe4"
  },
  {
    "url": "assets/js/59.ca4ca2d9.js",
    "revision": "7de3e8634f76693b45dd15d4cd81f0bf"
  },
  {
    "url": "assets/js/6.01a6a45b.js",
    "revision": "5311e527126b5409da0aff932a2a88ec"
  },
  {
    "url": "assets/js/60.c695b00f.js",
    "revision": "28b5a8758b42630e399bd6fe8222f4f6"
  },
  {
    "url": "assets/js/61.c634e032.js",
    "revision": "6d3654339f449e18070506d64dc12d36"
  },
  {
    "url": "assets/js/62.0b6666e8.js",
    "revision": "fbc03f941b471e92900e10b3ba268ad2"
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
    "url": "assets/js/8.cb6a7c50.js",
    "revision": "b504592c461ea76cbd43b09c86b80fe3"
  },
  {
    "url": "assets/js/9.2d211279.js",
    "revision": "8ac98f44cc5c8ea9f6b077403f7c35bd"
  },
  {
    "url": "assets/js/app.e50e0f98.js",
    "revision": "4cccfde131db7a7cf6cffb71989965ad"
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
    "revision": "f81191e6ae5d4794e5eb3a715bba44bf"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "2eb4d9f9f12674a18efcd2f5c0542cc5"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "623266668264285d0bf1c307c5575146"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "454d2b57e4df681b22813a8345eb5945"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "a0b1c669a286c8c46a4e0d4906e60357"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "de076d68769715625201f6ad85e92c38"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "9f6b75b462f9266e93b710232449dd98"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "b44b8603265790d242b2daa1edbd92ec"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "a10b762cf84399e0f93d8d4b6b9838c5"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "8b1bb8b0997317bdc8de5b10b7e00c3a"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "0a35d01f6dd1a3336ba9b4ef25e9f5c2"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "dd1bf6e750b703df6868633701e730e9"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "ea6ac5c18f3c8fb9c36bad82acb76b17"
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
    "revision": "ad5d38f6aa174f9885a6abe534953992"
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
    "revision": "a78dbaa9afdca86dee07c76c45a81814"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "5a49282d9b6dcecf86f46afc42de58d6"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "557b5b80561c061713ebec2246e1569c"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "5865b870876a172afad1ffbd719a65b7"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "d8031b93d7fbb81a3ad8bfae4e37bd82"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "0a9c46eb6b687eadace7974ec3fd7d69"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "9a329df22da04a5be6be53a94128dd7e"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "83e0ff7c49971055414a5be483364b98"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "6efe476a4f77a051617c488f959714ec"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "6a19fd330af3fc09a20e67c4636b28f8"
  },
  {
    "url": "tags/https/index.html",
    "revision": "4557c5060c61af604732701d372f380f"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "f34fc2f653d65237050c3dbde6d270b0"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "b53b399196a3a4a6cbf6ffa08a1deffd"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "f33cba241a0995ca5759c85a5f42a7cf"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "024642f164cc1e331e4cb73eb8df5ea6"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "b00f4dcc52aa86ccf3334eb94831c1a6"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "92c1a944ecf802f09d490c88a1ff36d1"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "13aad6c57750b703aaa06096d84abe1b"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "22cb0d58fb03863c13ee2b5e96f19eca"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "5a6066e67af9096f1619607e2a5af4b7"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "c8f23b1fa962a2fe7df9b310b644bdf0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "781d3948fcf62f32124f1a5906b72450"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "615218657401c5bcfd82aca76571cb36"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "455eb18729e54ae82a2530926929567d"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "6d73758fc83094a0dbf208738f29b11f"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "d08801a26e7f35dcea70b706ab75b374"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "1cb7d946d48684e01f6ba604da00bd8c"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "dae5fb94ba47f614f7af39a4042a6426"
  },
  {
    "url": "tags/同时内外网/index.html",
    "revision": "9481f0474e293c8ab8b4c4ab74abeaf3"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "878e6f283afc32a4157ebbc63fd349ad"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "c5a84bc53ad023fb4be1719212bdadf2"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "93081c571d6087e1d946538fe2b65855"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "ff9f976372d6912945d1c2a93e5ac84b"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "b685954d973bc497781eb84a85694e90"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "46e410747befff201ecab755070cf1de"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "fc5ad27056b564dbb430a25b0ff9edb9"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "6c9ed3ceb18676844e2eb553b9bb3766"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "a9287a57039b404d12f6173a3340b452"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "c6a5607cf564bb4664f75fd050ee4fba"
  },
  {
    "url": "tags/游戏开发/index.html",
    "revision": "9f0975d71aa5697939668a978ca2a77b"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "7b96668caf50f00d091ae2d1561eec7f"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "09b1d548d6dadf270ab1c6607fcbce66"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "833de6cd9eaca3dc1337bb9c40e15896"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "dfc6772442e4fb26fc8f2f7e0b59f6e8"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "aa69382483e4c6ad71f81e9edb50b326"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "5f2428874cd1e27a7a76e8c54fdea522"
  },
  {
    "url": "timeline/index.html",
    "revision": "91cc2dea24b159ec888b73a729a4292b"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "50d55c90d1c91ae04147174957bdab8b"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "43914e281a3460ccc468515e9a8f7c8f"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "8103e159e6d91a29fb9d7d51d61f7d50"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "6ba7a1a423d739da40af21730c309a76"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "841871f8b91ece134e0052d7024be5fa"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "f8f1ce866372e0aaa5b986938693659f"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "26175c2cb26259d236bc90b994337ed8"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "9b506ab64071c431d4040465bd77a255"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "336714e65daca8049079cf68ffbc56e1"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "3eb26e8e20e1998c9afcb7977055073b"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "d66de61e6f413132896a6df3f3ad913b"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "d67f0c976d8a89928f91a5e2caecb1c7"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "618eeba863afce92a4e26728dc3affb4"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "bc6d7132c792afecd597d72ffd555488"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "a6e644bbc1d71c9b7db21940f9950999"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "8e209eafbc5f3d2cb14bb19a928fde79"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "304861061ebf093d6eb50dc4f38575a0"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "f2c5fbb1399ee364de74df4395477e82"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "c13ed60a0d223ee9b5b9d772dd42d718"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "d92362c51729b4b97f99c551b46b576c"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "68ba24cf6bd301aef6c5822049e4990a"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "ec1d826544304c85fb323892ec139ca2"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "3d1b55c1f608a9843353b564b439fe1e"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "bd351708664a27fc3097c085e9dd46a9"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "5d85a5c1928a88c51101e288fb60c3b2"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "671141a3533d5421faac8f2c01af276a"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "f9bbd8ecd6a5a4b0aa3ebff577cd0957"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "c928cb4d82b07623bc0c84cb23d8eee9"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "76b8d3f92f3cd10733999db13bbc6b97"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "2dfa30890b865f8ae0cf53b6226738a5"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "462763fe12914ac1bedf1039e0abca36"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "529c11e5631a76894bdda2720a01368d"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "5014d74b940d967418df47f6b5786ad2"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "46a3456d601b595898bf6cc25c8ca7e0"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "923c6bf68ac6f7bd4c9c5ef83d45872c"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "0029726ab3a7ff477ed0bc97e7416786"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "824fca6b827fe0d6035c8843cf30701c"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "19e29c326f4f293f9163b234105977bb"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "a1ce4bd6360578d3a5f4210a214a0e03"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "4a410ac3e62ef50cadf7d743b0ac7a7e"
  },
  {
    "url": "views/index.html",
    "revision": "539c3b5b6db328de7207caec3309ef1f"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "3de831fd0c9c40ec196f6acea311da34"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "9475fa219512bc678662aa52b8aaeaa5"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "fbf49ebcaefb2e33d5edc187517c5725"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "4bc05156ea41aea8c5a8766d292ed863"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "30a3fb7ad43d258e04766c0df938ac9e"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "7f8dd6561df1d2cc0a43c4b2e7c05955"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "ebf34d5f0737cb27558e56b9b2125501"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "4b4b6a8912df23be83168120adc4f761"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "028333306434eac2f2d70f23aff8cc08"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "9737486fd392df8d8ceb6b73d6b392a4"
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
