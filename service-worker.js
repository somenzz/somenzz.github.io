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
    "revision": "6c8798b6e234d43437b68cba6f84aba8"
  },
  {
    "url": "assets/css/0.styles.4522ba09.css",
    "revision": "5550ee1e6646330a0e001669505cabb9"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
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
    "url": "assets/js/1.75158bbb.js",
    "revision": "bd84608d4b38892ad6638f3741b9ed48"
  },
  {
    "url": "assets/js/10.fb8c2795.js",
    "revision": "6cc9edd8e338b9fbb05006e2fa93f412"
  },
  {
    "url": "assets/js/11.7b3ddffa.js",
    "revision": "4081ccf1aa0e9956bac3ae58cf3a29e5"
  },
  {
    "url": "assets/js/12.d4e5a1ed.js",
    "revision": "3485474c9d0b1522f240431c7f8bc2c3"
  },
  {
    "url": "assets/js/13.f5cfd093.js",
    "revision": "242b709936768edb740368b5457f0042"
  },
  {
    "url": "assets/js/14.de3a79cb.js",
    "revision": "bc98543d7c15b08eb6a591a937d70399"
  },
  {
    "url": "assets/js/15.7edf5333.js",
    "revision": "ca32adefb6fcb94dc841759a7c0964c2"
  },
  {
    "url": "assets/js/16.4245bf42.js",
    "revision": "e9931ec0a7ecb022b49d7c7e5323e444"
  },
  {
    "url": "assets/js/17.ce3be270.js",
    "revision": "d6351da45c4d2d48bc096899cc28c27c"
  },
  {
    "url": "assets/js/18.1add66f1.js",
    "revision": "3823fe3af52c7c0f47d6da1c167037e3"
  },
  {
    "url": "assets/js/19.5b3209ee.js",
    "revision": "fef6e1a2a675b02cb059d09d32a4b6c4"
  },
  {
    "url": "assets/js/20.a0c3e569.js",
    "revision": "0ad5ecbdc35c0c6d438293c7cca8a89d"
  },
  {
    "url": "assets/js/21.f28b0bc6.js",
    "revision": "252f25c9ae9894228b69991d4f76f784"
  },
  {
    "url": "assets/js/22.1251322a.js",
    "revision": "5ccaaefcd2d7bd1dcce581ccfb3f9275"
  },
  {
    "url": "assets/js/23.45fbf604.js",
    "revision": "45459fadeab225bc7ea441f9e1464e5b"
  },
  {
    "url": "assets/js/24.8d508bc9.js",
    "revision": "9a849a5e8ceb41dd944bc551b01be72a"
  },
  {
    "url": "assets/js/25.3539446e.js",
    "revision": "b0044e4d852bf58f18f5006f51d4d830"
  },
  {
    "url": "assets/js/26.333645ea.js",
    "revision": "77e6224fefcb092072918eb55119b6a0"
  },
  {
    "url": "assets/js/27.c541a628.js",
    "revision": "d04fc6b758e7a86b6749953a67c8c57c"
  },
  {
    "url": "assets/js/28.dea49624.js",
    "revision": "63783e90a0900b231f27b1375983ce9b"
  },
  {
    "url": "assets/js/29.ab723237.js",
    "revision": "645c6366b08c2254c6327865560781a3"
  },
  {
    "url": "assets/js/3.64157d4b.js",
    "revision": "d237e59c747a74ce792691ff74331f64"
  },
  {
    "url": "assets/js/30.2866fda7.js",
    "revision": "3f6cf637a585e1ec3d800a86cbf39c1a"
  },
  {
    "url": "assets/js/31.0ab19372.js",
    "revision": "ac39e732a76c71b0fcec6f0b1231be7a"
  },
  {
    "url": "assets/js/32.3cf96a80.js",
    "revision": "9a8943e43fa64abaa216aa61e9e09e17"
  },
  {
    "url": "assets/js/33.925483bd.js",
    "revision": "7797888dbed8ac1f3dbf8daf9047428a"
  },
  {
    "url": "assets/js/34.6392b139.js",
    "revision": "b105d1ff08879f69ccb91a2dfa84add4"
  },
  {
    "url": "assets/js/35.94f36f51.js",
    "revision": "f3e0573def38e747309c1e81ced2f43d"
  },
  {
    "url": "assets/js/36.ca86a7c5.js",
    "revision": "a8046c50c95b3174a2e6d87fb3d28e93"
  },
  {
    "url": "assets/js/37.ff844e33.js",
    "revision": "93eaf5c8c98c149288a18245ffa9a9fd"
  },
  {
    "url": "assets/js/38.bb335d7c.js",
    "revision": "ad11b07df52e299d46227207e403bfdf"
  },
  {
    "url": "assets/js/39.afd82e18.js",
    "revision": "7bf6117aea87e15196534b815293d1b9"
  },
  {
    "url": "assets/js/4.dab4d0e6.js",
    "revision": "bcf462dc8302c96863f9eed1e209e982"
  },
  {
    "url": "assets/js/40.73ef9e58.js",
    "revision": "e5ab55153e8e2246b13f8a50b49da09c"
  },
  {
    "url": "assets/js/41.d110c87c.js",
    "revision": "f75dac2ea9000246f4ecfbf9aa627528"
  },
  {
    "url": "assets/js/42.8a57899a.js",
    "revision": "a0b8146e7d32b1b2202e6287ad408e0b"
  },
  {
    "url": "assets/js/43.cc0f831d.js",
    "revision": "260dccaaa46b90338bb16d1c27cfdf34"
  },
  {
    "url": "assets/js/44.d4985d05.js",
    "revision": "9e94fd3b7bd12c74c4766c801ba6537b"
  },
  {
    "url": "assets/js/45.36c4fa6d.js",
    "revision": "80b5dc39b859db1b74bf3fc948b65d99"
  },
  {
    "url": "assets/js/46.0225f5f4.js",
    "revision": "f02d99203977937aa0c2372e94910332"
  },
  {
    "url": "assets/js/47.fe80c8d7.js",
    "revision": "0d8f2e101e6071919842dde388d06731"
  },
  {
    "url": "assets/js/48.9101663f.js",
    "revision": "8be29a99f4bb3f2f9f56a5cbd43dfdba"
  },
  {
    "url": "assets/js/49.fc61219d.js",
    "revision": "bca69b7266c0973a33c4b2ba97abfdce"
  },
  {
    "url": "assets/js/5.8d151761.js",
    "revision": "3d3897bf9745d2c0f69d44ae4049dd3d"
  },
  {
    "url": "assets/js/50.348142ef.js",
    "revision": "43a3c62059cf5e6375ac2bd8d5f1e66b"
  },
  {
    "url": "assets/js/51.b7da9e4c.js",
    "revision": "e6a848d06ee5f858f06dd06a01cc561d"
  },
  {
    "url": "assets/js/52.64750b57.js",
    "revision": "4599420c97ff7dccd9eb9c002e08f6d1"
  },
  {
    "url": "assets/js/53.55dcd351.js",
    "revision": "5142ea961fff86287bcbed99298ea28d"
  },
  {
    "url": "assets/js/54.7459d0b8.js",
    "revision": "668f067e242fe81af5b65199405fd1d1"
  },
  {
    "url": "assets/js/55.6559eda0.js",
    "revision": "7088510d04ebd36ea9100e355faa566b"
  },
  {
    "url": "assets/js/56.49edd793.js",
    "revision": "4722c984059c53409f82f694830cdaae"
  },
  {
    "url": "assets/js/57.10fca8fe.js",
    "revision": "5b56e868f05c88c677e71e11baff2588"
  },
  {
    "url": "assets/js/58.9b5c66a6.js",
    "revision": "c291b95eee2cb1bea6c7a3cd4404b975"
  },
  {
    "url": "assets/js/59.13740740.js",
    "revision": "6d519eaacfb003f6f35cf03e1029d39b"
  },
  {
    "url": "assets/js/6.a801029a.js",
    "revision": "d1415cc3bea0e956b20646c4dc946f4e"
  },
  {
    "url": "assets/js/60.efee7676.js",
    "revision": "8b34bf0ff6eb9e25c5be3e1b37d1f4ff"
  },
  {
    "url": "assets/js/61.14b2dbde.js",
    "revision": "5faf482de1c94de87e768694b4fb2524"
  },
  {
    "url": "assets/js/62.8c208ecc.js",
    "revision": "a4b461e8e84eaa9dd995a068ea4019b2"
  },
  {
    "url": "assets/js/63.474ca2f7.js",
    "revision": "b8d35fe1756542f1e6db5f78db53d689"
  },
  {
    "url": "assets/js/64.6a27d09b.js",
    "revision": "e28e390e76c7ea5fcb929006f2266d96"
  },
  {
    "url": "assets/js/65.d529cfea.js",
    "revision": "bd078c7bd2359d3f42a83c421b63531f"
  },
  {
    "url": "assets/js/66.12989ddd.js",
    "revision": "3603ed79a163436d87b3902a37266751"
  },
  {
    "url": "assets/js/67.c44863cf.js",
    "revision": "b912f2e380d1245ed412b189a59346b6"
  },
  {
    "url": "assets/js/68.fe2b65d5.js",
    "revision": "8e7a8283ba6271c56d7ffb6290ccbb7d"
  },
  {
    "url": "assets/js/69.ea37ea93.js",
    "revision": "7ba62c304516af53e04d7f37ff48d4ec"
  },
  {
    "url": "assets/js/7.365015c6.js",
    "revision": "ef0542d828df46f273e76e6f1434cd94"
  },
  {
    "url": "assets/js/70.c9414565.js",
    "revision": "bd072ec93031b7224ac2b1d945e15137"
  },
  {
    "url": "assets/js/71.4dc1afba.js",
    "revision": "b634a1b812b7062e96dde9fa4ce321f6"
  },
  {
    "url": "assets/js/72.cd208b19.js",
    "revision": "58eb76da250865c7680d482405b4b104"
  },
  {
    "url": "assets/js/73.93409055.js",
    "revision": "e8a4f2ce74424eca5567cff9409c76ff"
  },
  {
    "url": "assets/js/74.3660f09f.js",
    "revision": "03b8e9b288eba557a7c6becb13472f20"
  },
  {
    "url": "assets/js/75.7cebf499.js",
    "revision": "5be4680eff18aba5c25ef71d50ddeafe"
  },
  {
    "url": "assets/js/76.8b79e492.js",
    "revision": "763d63a2d1f57a41aceb3b6f971c98ea"
  },
  {
    "url": "assets/js/8.9ee99084.js",
    "revision": "367f28f52c9f28dba25268a3a9bf40c0"
  },
  {
    "url": "assets/js/9.e1673aed.js",
    "revision": "f9291be28a2d3215c6bbf15bff57c7e9"
  },
  {
    "url": "assets/js/app.af93400f.js",
    "revision": "b27094d7d9beb797389859aa0f873dda"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "5019b53e350207b7caae5ec76f4e58fd"
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
    "revision": "282b8323dc16fcff9420ddacc847b22b"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "87d7a5531e7d6e4d59d85a2c8b1d9152"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "ef64e96b5d2f546a58f3beac6133fbe5"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "d5be66ed98af71df0c144eab4415511f"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "d9c1df66c387e5a43c35b50451433fe3"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "d54b70f99c18db0959f55ae2bdc31e86"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "757907582c5a5da43145d671fcac1638"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "9a9e4f92df07c787646f5d95d41a95c2"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "90a51ae193c45a1d979337058118abd8"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "ae7f3405585b2124965df4c270a3f196"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "870838d577f7cfddf54f373c13d24d08"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "451c27c9e963dc4edaed90b5f8a440f8"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "5c2d6a21bf37b52c3a5ab7805dc199ac"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "86062186ad10b06fdc62a76d7b6dd627"
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
    "url": "how-do-i-learn-python.html",
    "revision": "ab5f8f3220f282821bd43de0852a15b8"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "a4c8925a623f9e3adb4fba82e883b4ae"
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
    "url": "tag/abstractmethod/index.html",
    "revision": "0209465090c03e1e803273e78dea5509"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "e75d646907395b98769f1ac414b654f4"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "1ac78de6b5d7eab3cbdf614e785947ac"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "37606245c33a9634d87d4f59a37888c8"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "03bcb0ff454e1df220f3c570bb7fb59b"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "5a42ffcd812c5142a450052c2a1e6999"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "898d8c871aeb2e488452361e45becac2"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "e544254ef54bb12df4548a58a518af88"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "40f43731e9bb5beec7688c9898ab221a"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "cdf45d9db55b98ff073973f85c3cc185"
  },
  {
    "url": "tag/https/index.html",
    "revision": "4b812ab5bdffca9e0612fa1f012fc74f"
  },
  {
    "url": "tag/index.html",
    "revision": "0ed1a76eca7f75d4ebc4cd9a2f041f4d"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "54d2cb5db2a81c4a8e75f92ea495919d"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "d9c1f2fbc45f02c0395d153ffb130b44"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "c5b11bacc7858f9adec6cc61faefdc89"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "e89757bfc2aaa1c9f55739e4504a00fc"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "a5d88b1b8241b9c9dcda4fe753a9887c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "87eab5a9fcc41009842ac305459de6c7"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "f5f53d0ed6bde725137e49a4788e0d0b"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "da49f1fc6048aa7ddac6af84b7116af3"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "3d2fcc12b6a62bafcced8c4199a45b8d"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "2fcc5d81b5a8699ffb08b59f4b507199"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "6e364c1725d0db64db5a7b74cd0f983b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "23bd69acce460bc9cd04c23bf8fc246b"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "e629396b97671642fb55541ef35f6548"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "b294f3ff3ebdca54923c8c6402806315"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "1f4d34cf14976d57ddcf9ffaa6a6bb72"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "be6024f06ba4506a4e118389282d0cd7"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "044e9be0e10fe6bd7b051c72afb7e281"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "bea38ea48ce4399de828b8b61936d842"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "c0827094ea352d85f49bf55c9a3544e9"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "1d4d2483bbcfc4f46b2aefd6842f8a23"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "6561b3a24f0e1a989f03e2c964b67934"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "12e554b0ec4d5a8f87d9e512318cca80"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "3f90c5f11a60245d0bb9b1a60e0a54d7"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "38198b74f3b89e80c0aadb5c9a4cb12b"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "cd4eecdba92b984157a72435a9e5c955"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "7b47bf53920c73cc6b909149202441b3"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "05a552009cc78dcc03ae17eb12ac3a9b"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "405851c083755addc911918dbbae4f66"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "4a898ef15f938c489091034692b9172b"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "3205723fedf1401dfad7758dbed723c3"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "830b0664c8d45b9ec096aad08958fac9"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "1da47452520d03b1b370623e8eb1d150"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "5951bc7004d755aa73a272f91179e318"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "2c100e73cdcdd1b4279362d286a96a30"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "450b30e9626de193c08930d141ce4eaf"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "b36aae0d4a73b5f58a9fc990595c7172"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "93e36c1e3a68065a571b5f1ed8d45c9b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b932f16b047c6b1c5ad729c8b02fcab1"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "d64463e20e7609c7d6036918230160df"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "7fad2f6488777ce687b004f95dfb9854"
  },
  {
    "url": "timeline/index.html",
    "revision": "5deb311aab261e0eb3f6da56a413190d"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "2f2719ca70f0745232150608e1050143"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "18ccb1ccee658a4d942fdc0c634bb481"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "64ecbc3c33a6fa301b501d125999404f"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "1e7ef1d9279e2e37f533d9a4b176b126"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "5e475a8121478f86a88eff68b19ecf17"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "b892ef2cf89f7cb1d28ed3e4f6e9afeb"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "ca0fe9fb13f92986faece8c84fb8bcca"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "30fcad60389655bb343831a448f428be"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "dfc08986e0a65b826257c4d16d508e74"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "a6f58158fe6ad8865e946e3f4b27100e"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "554e0528c64323efa823e47d52b946c0"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "d22ac90f8c073860cfbdf589dcad9c7f"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "501a59b59016f26e8fcfc64275d47780"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "75907d4ef009429f2db9b88745068c3c"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "fba6e905ce1964c6bc0b911669c0670d"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "32bf49a3cc60d71801a83882b430d228"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "6829db2ede0013e87c8f27419f134441"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "7c26b6c9efc2476ecb50867f147ad777"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "f8c5c40129bee987624cab4e03f9a1c6"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "b1eb2c1574bb385be73bafe803f08f8d"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "a286f5aacda9de0a24e6352fd45eca5f"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "c8ce34fd377169c6d0461adbc7921d33"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "5424d091a5df22fdf804eba5a2dd27a6"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "82f603e5b8f6a919b4f0e61fd776a6ec"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "07be13af19902d2f13a147acf3766c79"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "f4b15891d5d884476e011f5b0c7bce35"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "bd6932744da8b126705ac01ff26a852e"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "1e3e4e93e49e48225c8971855fbd1020"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "c0e6a26d73081046b09c19df74587957"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "2fd5218b55abcde63c0621953de18dc2"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "7b002c7bbe1af2b20f34ef7dad9a189a"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "d36e93f1c2afff475dd382d2fc555de7"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "6ff2df37c584f98d89595612e09b5d99"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "300b91d3826ca47125fffb7dfebd33be"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "e8f440944b45ef9dd68e694c4208f6f8"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "80f0de29029d84bb6aff4aa352745e4f"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "92c13cb4ae1c1e1d6f44e07fdda8c2b6"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "bd2ad328c5b477e798bc0a2dc95cc062"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "bcd8abf401da95fad39d5a10ea58ac9b"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "99bde7b0c8dec9a1dc475bcafef9515b"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "91c4177743ec80587619c9639ba44a9e"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "6a55d4923994ae77b6baa049c48fb263"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "8f28383ac9a240e2b2059e4235942af3"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "992010a0fb0fa6bef876b26d12dd70d4"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "16b5ff5489e2579f714b753af03a7e21"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "fa3e0ffd64daabd9fb9aaa21410ff586"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "705237fdb25d7f03658d7ea7579fc994"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "bd3c69817a4e39b7b310092c0b28d556"
  },
  {
    "url": "views/index.html",
    "revision": "7c6f7ff3d08c1bfdee4af06c15bb1cbd"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "0697ffd57576f4cbf8d36c45cba6604f"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "60eaf7bb0b4d80fbe78adfb53e267534"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "5720cc1e646cc3230d0498315cd39347"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "109882c0c7c5714412dcd803f9433f73"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "9ea38e205733e8491788fd3169327a32"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "ba1b0dd0d4639498901b57c60a76e795"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "5451b7f964487ac5d6c311e084003738"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "deb10cb58fbec9327934549bf12bd7c5"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "cb6f1af5cf5fcd89d59582216ffc0ddb"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "c9ae7352326fa60fd076a3c10674b6c8"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "faa82e397252b44ac06992e8f323f63c"
  },
  {
    "url": "web-scraper.html",
    "revision": "1d7dcad6991e8f16255f91535c1ca76f"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "e6ba044e5f5459df1ba8edd6ca96023a"
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
