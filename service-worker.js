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
    "url": "12306-buy-tickets.html",
    "revision": "92a84b86b991ce4f12189a51d414ea30"
  },
  {
    "url": "404.html",
    "revision": "d8d5e83629c460b914c3227f7ed6b0d0"
  },
  {
    "url": "algo-backtracking-restoreIpAddresses.html",
    "revision": "9b5d87367e175b0283587fdd37102c7f"
  },
  {
    "url": "assets/css/0.styles.0fb938fc.css",
    "revision": "746eaa6d2a6f69cc7d02da13661219e6"
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
    "url": "assets/img/GitHub-Actions-CLI-fig12.1880e0dd.gif",
    "revision": "1880e0ddd38e5c1743cbf52dab0e32f4"
  },
  {
    "url": "assets/img/GitHub-Actions-CLI-fig9.0512d8b3.gif",
    "revision": "0512d8b367730ea69a35dae9b0e5e867"
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
    "url": "assets/js/10.f5d055d4.js",
    "revision": "cf833ad2f5614614f9e9e95fcadc9b64"
  },
  {
    "url": "assets/js/100.aa8f38c5.js",
    "revision": "c4be39b83502c19610d06fe2eb24a65a"
  },
  {
    "url": "assets/js/101.7b25245c.js",
    "revision": "1972ad26572fee6cb4e7a840160f5111"
  },
  {
    "url": "assets/js/102.4da29526.js",
    "revision": "d5197f14e119b67dada6719b424c187b"
  },
  {
    "url": "assets/js/103.2141969c.js",
    "revision": "4c34fefe52c598a0d29ff04e633ed7a4"
  },
  {
    "url": "assets/js/104.197ae680.js",
    "revision": "d2da96ddb0461bb344450dc5f0bf0973"
  },
  {
    "url": "assets/js/105.de825a7b.js",
    "revision": "4cbff7fe63deae41c3e218f61a308ab1"
  },
  {
    "url": "assets/js/106.813234ff.js",
    "revision": "2c6b730155fc1521200de2cc2b7d5225"
  },
  {
    "url": "assets/js/107.a26b17e9.js",
    "revision": "0d6fae58008e3f63d5338c92e276c0f4"
  },
  {
    "url": "assets/js/108.c5ab8fa3.js",
    "revision": "ef31f816edc56b830ea472cffa2dda53"
  },
  {
    "url": "assets/js/109.804442b8.js",
    "revision": "08d30c405914106b48e06185914f32c8"
  },
  {
    "url": "assets/js/11.eb68e47d.js",
    "revision": "ffc9dee5bce876de7765ed0d3ae37568"
  },
  {
    "url": "assets/js/110.902233d7.js",
    "revision": "6fc782e8f221806cfd967fb6be646836"
  },
  {
    "url": "assets/js/111.e42f2117.js",
    "revision": "39b9a67a5ff70bb947f4ba166f1f0fbc"
  },
  {
    "url": "assets/js/112.91ea1900.js",
    "revision": "e718f9978a248988bc0e65ed249018cc"
  },
  {
    "url": "assets/js/113.d59807ac.js",
    "revision": "ff84dad6d945e80d9122a12e8dacf401"
  },
  {
    "url": "assets/js/114.c4dadcc2.js",
    "revision": "38d42a3bc96045d14a5127e2783b3e40"
  },
  {
    "url": "assets/js/115.c6380252.js",
    "revision": "3978425efaad3933adacdcb53211d320"
  },
  {
    "url": "assets/js/116.c84fdcab.js",
    "revision": "c00e5e2835992f916ffce76c0bfd1b80"
  },
  {
    "url": "assets/js/12.c8407d7c.js",
    "revision": "294f440e5f5874e7caae96a38ad357d7"
  },
  {
    "url": "assets/js/13.fa0c366d.js",
    "revision": "1e99fd0d183ae58b8a097619f8ff5d46"
  },
  {
    "url": "assets/js/14.bd0f67df.js",
    "revision": "6aa5e4238a1016493ca6d03cebe8081a"
  },
  {
    "url": "assets/js/15.3977a1eb.js",
    "revision": "b6dda214abd5a6e476ee006000b00a92"
  },
  {
    "url": "assets/js/16.400b77e5.js",
    "revision": "06054fdbc9b715708b3877fa4cb28de1"
  },
  {
    "url": "assets/js/17.5d9257f9.js",
    "revision": "d630479c8a213c5129c3ad957b17e993"
  },
  {
    "url": "assets/js/18.0a4990cb.js",
    "revision": "37a7392ca2c8ce9386bb85a38b0081ea"
  },
  {
    "url": "assets/js/19.35100df6.js",
    "revision": "2d828ecf2370143feb8b140dd19171b3"
  },
  {
    "url": "assets/js/20.de98b1e1.js",
    "revision": "e749dfd074292eb092318050f2dd556b"
  },
  {
    "url": "assets/js/21.0d905180.js",
    "revision": "bbfccf9f926b82cc1229c5289fec836c"
  },
  {
    "url": "assets/js/22.e9257514.js",
    "revision": "bb0d484cbfc35e45ffa8d1699a4838ff"
  },
  {
    "url": "assets/js/23.1b5498b2.js",
    "revision": "3ebe175899785d6de11c2e71b916e1a5"
  },
  {
    "url": "assets/js/24.f83cbc49.js",
    "revision": "fd320ac23c60ca0180fd0c8f0d0eb700"
  },
  {
    "url": "assets/js/25.4056a14a.js",
    "revision": "4dfba15fdb48f6687779b5c9acf98733"
  },
  {
    "url": "assets/js/26.d9570274.js",
    "revision": "0baa3f6a989c42257729de1d8760d346"
  },
  {
    "url": "assets/js/27.97628988.js",
    "revision": "3aee7fbd4f1624bb82a8f81b74c5d136"
  },
  {
    "url": "assets/js/28.6982a5fc.js",
    "revision": "bd320f49c48cea520c89c97e660b0e73"
  },
  {
    "url": "assets/js/29.07afb352.js",
    "revision": "8db4330ccfa9ff4a45686f6bbce06931"
  },
  {
    "url": "assets/js/3.8e7b7be4.js",
    "revision": "9c4c2778a8d823922a03ed77f96e73e8"
  },
  {
    "url": "assets/js/30.d43be48b.js",
    "revision": "6543d1391bb7f4912e9e35bbf8a9a5ec"
  },
  {
    "url": "assets/js/31.e1d6b864.js",
    "revision": "f5ab6aac6029f979b17fbb3fb53578b8"
  },
  {
    "url": "assets/js/32.df8cb417.js",
    "revision": "68614a2678709a1172db508777fe52f0"
  },
  {
    "url": "assets/js/33.22a5412b.js",
    "revision": "f4079798eae07ec0f665e0b4fa62a374"
  },
  {
    "url": "assets/js/34.b4e2ee50.js",
    "revision": "f06a6b44d7d7f676169b59ea28571bf9"
  },
  {
    "url": "assets/js/35.73738147.js",
    "revision": "9af167801ef45dd927536da8074ac6df"
  },
  {
    "url": "assets/js/36.16e17f30.js",
    "revision": "f12ee6ebb75464db54196c5d7d077b7b"
  },
  {
    "url": "assets/js/37.4b72d8ef.js",
    "revision": "9942e5582c7ae9d0794fbaef419919c4"
  },
  {
    "url": "assets/js/38.02ad8035.js",
    "revision": "aed28398bd594b5bb5436e58c2e4c0fe"
  },
  {
    "url": "assets/js/39.9119ca45.js",
    "revision": "a3e1126fa231305487355bb7278cb76f"
  },
  {
    "url": "assets/js/4.d6412bb1.js",
    "revision": "28845dc61dcae54b996088f105eddb1b"
  },
  {
    "url": "assets/js/40.b1eb2d2d.js",
    "revision": "29ad206ffaa4fe1abe3ccc75ad07ab05"
  },
  {
    "url": "assets/js/41.c1681ed7.js",
    "revision": "41ee1d43593300f9e63b1069401259c8"
  },
  {
    "url": "assets/js/42.2cbc5996.js",
    "revision": "165c454f2fbb5c0645b9a593cb34591b"
  },
  {
    "url": "assets/js/43.075e63a8.js",
    "revision": "319d177ecc9833fd3cdaa05268ff7d4c"
  },
  {
    "url": "assets/js/44.28866a95.js",
    "revision": "58f94ac22841489d611775134f59574a"
  },
  {
    "url": "assets/js/45.25c62441.js",
    "revision": "bd3c5612f340d0dd97305ebb932c0244"
  },
  {
    "url": "assets/js/46.c7cd40c8.js",
    "revision": "74c9127ae754e36501b67ce155e09dc5"
  },
  {
    "url": "assets/js/47.cf5a5aa4.js",
    "revision": "463f3a824368f728a2d3e6c442b3685a"
  },
  {
    "url": "assets/js/48.6a3496a2.js",
    "revision": "adf7eb36cfcc39e882b3662e325dd536"
  },
  {
    "url": "assets/js/49.4230fa57.js",
    "revision": "938ba1443e566782fdcf5891280211aa"
  },
  {
    "url": "assets/js/5.bc8df8b5.js",
    "revision": "19fcbdf9bc1175b56f4aa98e9eed8fdf"
  },
  {
    "url": "assets/js/50.bb2d59c8.js",
    "revision": "e6b43e8031c2ef02b2bc8261bf9e41fd"
  },
  {
    "url": "assets/js/51.59f3253d.js",
    "revision": "3a3788ad084c40b8f8bba373a71981d4"
  },
  {
    "url": "assets/js/52.1cf3a1b5.js",
    "revision": "d78ecfdadc8723f5afa05353333eeb35"
  },
  {
    "url": "assets/js/53.27be80e1.js",
    "revision": "25e751934432814bcde90ae7c3b546e3"
  },
  {
    "url": "assets/js/54.de5ef659.js",
    "revision": "363d20efbf6ce02a8039bce5fbd70460"
  },
  {
    "url": "assets/js/55.b24a906c.js",
    "revision": "de12e70042bd7854de03a3f7a120f41a"
  },
  {
    "url": "assets/js/56.5ab0c59b.js",
    "revision": "c4bc6384633440b0fbf0d5a9aaad16dc"
  },
  {
    "url": "assets/js/57.e189f5b7.js",
    "revision": "19b1e53409ccc1dcb27c920f00cda67d"
  },
  {
    "url": "assets/js/58.b81251db.js",
    "revision": "f6b63ef3348a6a25bfee8875d6e58784"
  },
  {
    "url": "assets/js/59.9e5cbbdf.js",
    "revision": "73625f66814181f5dcbe50d03ef4c1d4"
  },
  {
    "url": "assets/js/6.cbaf45fb.js",
    "revision": "9b2573794c2084a8459b343ebaf3e72f"
  },
  {
    "url": "assets/js/60.e7ec71a7.js",
    "revision": "b739fe009d4236c45dbedd87b5d0072b"
  },
  {
    "url": "assets/js/61.a50bd0ac.js",
    "revision": "c0d03bd9106259ac34ee2d241a1ac115"
  },
  {
    "url": "assets/js/62.4e7b0648.js",
    "revision": "33930283f6dedffa19e2e4bb46ba17ce"
  },
  {
    "url": "assets/js/63.6d32ade4.js",
    "revision": "d84198df7fc3c7358153e7c4df5a5474"
  },
  {
    "url": "assets/js/64.5bea0497.js",
    "revision": "6fca162bf8e68814746d6c3de08340fb"
  },
  {
    "url": "assets/js/65.a28640c6.js",
    "revision": "e8d1834d3d66bf887856a87bcf8f4e33"
  },
  {
    "url": "assets/js/66.f83b40d3.js",
    "revision": "f408e5f96e155b051cee727e3d74a0a1"
  },
  {
    "url": "assets/js/67.72d9953c.js",
    "revision": "4c7b9eaefc67b7b20a4d859a763b9601"
  },
  {
    "url": "assets/js/68.8046e219.js",
    "revision": "71cd383603e44f2ded725ec65e217b89"
  },
  {
    "url": "assets/js/69.a311e843.js",
    "revision": "73c4c27a13ea4a3c5dc63d2ad577c019"
  },
  {
    "url": "assets/js/7.7b87d95d.js",
    "revision": "4f5fa022361178d2f32e6f88be0f0163"
  },
  {
    "url": "assets/js/70.fa2a2cb9.js",
    "revision": "49e8920bb386a034c105902dd7197efc"
  },
  {
    "url": "assets/js/71.1a4461bc.js",
    "revision": "5281f1a38d95bc4e5c31f73cb4a9a0fc"
  },
  {
    "url": "assets/js/72.b84de19a.js",
    "revision": "f9ba8bddeb0ec76308cb1cf00f36b71f"
  },
  {
    "url": "assets/js/73.dede4abb.js",
    "revision": "b0845ab35e84eef0cbe89be0d2499578"
  },
  {
    "url": "assets/js/74.f700d2a2.js",
    "revision": "b19528b7a4edbff2be8c994b6323f9a9"
  },
  {
    "url": "assets/js/75.a3134fcf.js",
    "revision": "a61dd29d9da6b18798be2194107c7c7a"
  },
  {
    "url": "assets/js/76.35230c13.js",
    "revision": "f53ae3f49bedccc47c868ce15912a44f"
  },
  {
    "url": "assets/js/77.e7959c4c.js",
    "revision": "17cee679c4a7774b27d2cb7d79809d67"
  },
  {
    "url": "assets/js/78.553fba70.js",
    "revision": "4addd47fdf3217e9c720d615c68d1297"
  },
  {
    "url": "assets/js/79.b6785140.js",
    "revision": "df4e9cf670b1b56b449fbc878fe1ac50"
  },
  {
    "url": "assets/js/8.b4354c39.js",
    "revision": "417bc84ccd04f05c53add37fd5e7f792"
  },
  {
    "url": "assets/js/80.3bedf32c.js",
    "revision": "1891206349046d08b38098ecdef4381b"
  },
  {
    "url": "assets/js/81.f6964f7c.js",
    "revision": "b99ea186128a5b5675245b164506acf0"
  },
  {
    "url": "assets/js/82.2f32ed4e.js",
    "revision": "6fa3afdfd0c5ece853135d4d39a52177"
  },
  {
    "url": "assets/js/83.bec93b6e.js",
    "revision": "055c2b981dbf35d0c4fa53a9554498f4"
  },
  {
    "url": "assets/js/84.2dd3fdb0.js",
    "revision": "e26c4269ab68bc8778d4ba49e19dbfa5"
  },
  {
    "url": "assets/js/85.69e83ea1.js",
    "revision": "6def09a36bb99cb30f0a2fdaab3ff797"
  },
  {
    "url": "assets/js/86.66321f8a.js",
    "revision": "76e21087b3ffcc821ad4ec545c38bb6d"
  },
  {
    "url": "assets/js/87.df2921a7.js",
    "revision": "225770474a4c6cacf6ade2f832ccf42a"
  },
  {
    "url": "assets/js/88.643b5993.js",
    "revision": "cb8cf8350679222cc1156c63c5eb9f34"
  },
  {
    "url": "assets/js/89.58a014ec.js",
    "revision": "f598f92f28cbb2490343bf57f43c7b39"
  },
  {
    "url": "assets/js/9.7caec222.js",
    "revision": "b52bb6ab5e02f4e53fe0ddf2fa7e9e86"
  },
  {
    "url": "assets/js/90.817fcd39.js",
    "revision": "848698fbdd1c408562e74633886ae02f"
  },
  {
    "url": "assets/js/91.1b558aa6.js",
    "revision": "038688c48b478135d6248782a49b88d8"
  },
  {
    "url": "assets/js/92.6482a825.js",
    "revision": "4bc7c55eff58e21aa2a06831f49c1a3b"
  },
  {
    "url": "assets/js/93.13d06fbb.js",
    "revision": "5bbe9cff73c3cd3f7b0b5e32ff12c8d3"
  },
  {
    "url": "assets/js/94.fe32ced7.js",
    "revision": "7a45ded03cc62a5248fb0d0a9e160318"
  },
  {
    "url": "assets/js/95.27197999.js",
    "revision": "2c19de46edf50c7d1051890d417efb45"
  },
  {
    "url": "assets/js/96.f7f75941.js",
    "revision": "a94f4d730cf372a3da6b04e764bb7320"
  },
  {
    "url": "assets/js/97.2c624941.js",
    "revision": "137b8adb243d8e16cbd1364102219219"
  },
  {
    "url": "assets/js/98.1951d67f.js",
    "revision": "5cbb74f45b88e8d6fc9ec5e6bdf38749"
  },
  {
    "url": "assets/js/99.28ed801b.js",
    "revision": "1523b41909cc397d879bec75714e1e69"
  },
  {
    "url": "assets/js/app.b2085316.js",
    "revision": "586d2cfd788d119d9dd7a12456bc558c"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "cd8c3be76be22ebac96b4249f0e0e628"
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
    "revision": "45adaa99662764e88f0a55bad3572724"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "6dc7e56bc670fc915d695af28bacadab"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "9306dab83eb4f5ad4746b958c2caf9c3"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "253deeda995192ecab63308d2bd38583"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "3263dc77c0bc0452692d6176292104c2"
  },
  {
    "url": "categories/Python/page/5/index.html",
    "revision": "0a905fe1c4c14ed9fd7ebd2cb2911317"
  },
  {
    "url": "categories/Python/page/6/index.html",
    "revision": "93cdd51c578acf269ce55009e351deaa"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "260635c2e925b8fff868327293e6e515"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2d3d52e69e24d8d1f5bc90edb0d24801"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "58dd9cbddf964f4763fd42b9b08f305a"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "e1dcf06439835ceeae0d74f306f50b54"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8c10efebc7ce904cb9d2fcb27c595333"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "53119c0ce12b08c62370217ca4474fe1"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "090820ed2dc8a59fea5dddc00a3d3417"
  },
  {
    "url": "categories/电影/index.html",
    "revision": "481f9a5cb5298f04404ac735bbd64668"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6bb150a4736381c3ffab97b4578a22da"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "4f35133f5e1cb5ff230b9508058331b9"
  },
  {
    "url": "choosing-between-django-flask-fastapi.html",
    "revision": "4e880279e008f1990ef4ecb387dff859"
  },
  {
    "url": "coveralls/index.html",
    "revision": "770bce6bb06970c21000ba0f49193409"
  },
  {
    "url": "database-sync.html",
    "revision": "d2e7675778c4463fcb667bfcddef6226"
  },
  {
    "url": "design-and-implement-a-custom-interface-alarm-rule-function.html",
    "revision": "cb15c90c4b658046230f1692750e8a42"
  },
  {
    "url": "design-principle-in-python.html",
    "revision": "5ce1d4dc21e7582f74fc1cb275c301fb"
  },
  {
    "url": "django-graphql-api.html",
    "revision": "3afde941a50ddca2e087564b9ec4395e"
  },
  {
    "url": "django-interview-questions.html",
    "revision": "52bc72c48fb8d395ab739d0dcf18ad8c"
  },
  {
    "url": "do-not-use-print-any-more.html",
    "revision": "f2025ca412eb1c46bc36e843be81b73f"
  },
  {
    "url": "douyin-video-download.html",
    "revision": "1cea16214fea321c4cb08c91f4c44f1b"
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
    "url": "headphone.html",
    "revision": "93a7b117c1de2ac8bc113f4762a4723c"
  },
  {
    "url": "hello-GraphQL.html",
    "revision": "ae4d71947a35cd957761c6405812161e"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "09a68044f1474c9c62b9672e77eb4108"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "improve-python-performance-by-lazy-attribute.html",
    "revision": "7e8f9a234599cfbdb8415f47f9768465"
  },
  {
    "url": "index.html",
    "revision": "3fb8db938fad28094aebfb7c539ef73e"
  },
  {
    "url": "interview-questions.html",
    "revision": "c9a34ab5f2a44f47a5a4e504085b844b"
  },
  {
    "url": "not-use-recursion-in-python.html",
    "revision": "24d9d09e36534ede3017b201080eb9cd"
  },
  {
    "url": "pathlib-is-better.html",
    "revision": "8113c1ffbacb7fc054446bd46de905e1"
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
    "url": "Python-automated-office-fun-with-pictures.html",
    "revision": "4ee7ad426cd5f3573ed24d6eb076bf6d"
  },
  {
    "url": "Python-can-be-faster-than-c++.html",
    "revision": "abff8a9074bf2b390c15cf369aebecbe"
  },
  {
    "url": "python-command-line.html",
    "revision": "c1cfc0faa2954bcf1afaf20a4ebe9cd2"
  },
  {
    "url": "python-email-on-exception.html",
    "revision": "ce6f9cc8d879e85cc24ab523e4be33da"
  },
  {
    "url": "python-gui.html",
    "revision": "a380d57ca26fa60795d4d4804acf3a9e"
  },
  {
    "url": "Python-play-with-browser.html",
    "revision": "c71dbfd4b4dffd59154c59ade759dc1c"
  },
  {
    "url": "Python-play-with-chart.html",
    "revision": "c04f937b158d16d87bac63461c094e1f"
  },
  {
    "url": "Python-play-with-email.html",
    "revision": "c76cb6c7db5bb94c4faf5ceba9ca8dcf"
  },
  {
    "url": "Python-play-with-Excel.html",
    "revision": "bf17f85b97638aea6af68fac86a6c071"
  },
  {
    "url": "Python-play-with-pdf.html",
    "revision": "57aee3594dd53d2757f317fa05c967a8"
  },
  {
    "url": "Python-play-with-PPT.html",
    "revision": "ef003004fade070968237e543f26e522"
  },
  {
    "url": "Python-play-with-Word.html",
    "revision": "59b264360f77ce2ba8822df678eaca3e"
  },
  {
    "url": "python-receive-email.html",
    "revision": "fb3b6c599dccf77c6a41739a8437bdd0"
  },
  {
    "url": "Python-startup.html",
    "revision": "e3d742a48790a08deff53ce23780b070"
  },
  {
    "url": "search-socail-media-account.html",
    "revision": "64688dcf78c7b3cfe84c1a8738a78bc8"
  },
  {
    "url": "share-movie-download-url.html",
    "revision": "98b186285975a0305b9fe716a5013268"
  },
  {
    "url": "share-python-program-with-people-who-don’t-know-Python.html",
    "revision": "ab799f30598bed870d62d3782c6e70c7"
  },
  {
    "url": "system-design-pastebin.html",
    "revision": "07f4a5ba7dd1e35bbecd0e31ccb8b836"
  },
  {
    "url": "tag/abstractmethod/index.html",
    "revision": "fc1b83f4bb8f541761859cd4041d8831"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "fa7e63278f9cf269f96de3eda84789c6"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "b4354d3696c30cba9f1999c764da0367"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "2f31eeff0bc1a20317aae058c49cf577"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "827a186ad6307b111e46e80a14875627"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "752ccb4d4510d7c9c7ff58ed17a0bbb2"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "2e22ca9205d199d529d7f831a30862c7"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "650f2d695d8c59c4c483a702103c27e2"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "013475574aceb6e8081e1d08291eaf3f"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "cbc38b01805126b73452175609394edc"
  },
  {
    "url": "tag/GraphQL/index.html",
    "revision": "50c7d4302a40604e76c84089c721792a"
  },
  {
    "url": "tag/https/index.html",
    "revision": "a7cb0d4aaa8039afe031a41ffabc1362"
  },
  {
    "url": "tag/icecream/index.html",
    "revision": "7cc6e77f1e4862e4bb61d64efee25aeb"
  },
  {
    "url": "tag/index.html",
    "revision": "530ee3426c9144bd48467af9904b2f3c"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "35af3c624245dc1c9f86e7f1868ea621"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "2477e941fdede40743b6259588a6e064"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "8f3f1b2e7117371f921b89c8f23034fa"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "c3f3a36f72f52d540e744aa9f049125c"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "a839656449441da0d8015778662f2a5e"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "243e84368cb40c85bfbee54dcd551ea4"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "80a61c31a379366ea41b3c1863707970"
  },
  {
    "url": "tag/Numba/index.html",
    "revision": "fb9f903728e70272d4f907a0b83a9bdf"
  },
  {
    "url": "tag/pathlib/index.html",
    "revision": "da0506ad7196882949af83a5793215ce"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "27a3da84a772fd4f1f113b40dcd64e93"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "363effec2f26edde78a85bf882f0882b"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "e558e66e79ccfa22e5d93547284567a9"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "0febda761eaabae083610301162ae2af"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "c030693dc8ac27b70ee0c88760598fb9"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b2e67ce14a3344b58cec4311f5199ca0"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "e85bf343df0da6d3900584db392b3a7e"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "370bf7d9c26e150672541f56b8cd0088"
  },
  {
    "url": "tag/Web/index.html",
    "revision": "9c5d4b6ccd5a2a45107a64371beb844d"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "5fc73aba6a0d3bdc38f6ad5dc7af7e5f"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "095c5fd6e55d9a6246533c445febd9f2"
  },
  {
    "url": "tag/人人影视/index.html",
    "revision": "4143d12efc7aaf61a48d6038a4af59fb"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "ccbaf3ce19cddf083728da1eb0297408"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "2ee32282245192b7eb1a67f838108e54"
  },
  {
    "url": "tag/分治思想/index.html",
    "revision": "6bd68c6885c2e99dbb79b75a61658c36"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "49c6a3848a1b984a14c75050597ade65"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "1c961b36bb9135e447faf42ce62c74b9"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "fc492ca8154833f469b2b1da0bd2c532"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "581e791c1e3a30f5977b858cb63e69cf"
  },
  {
    "url": "tag/命令行/index.html",
    "revision": "0273e99acb684fc2ac33c90da3550b77"
  },
  {
    "url": "tag/回溯思想/index.html",
    "revision": "2de60a2171b9073022d76aa64fdb71a1"
  },
  {
    "url": "tag/图形界面/index.html",
    "revision": "b6ab76a596694e6e6d410a27b825544f"
  },
  {
    "url": "tag/图片处理/index.html",
    "revision": "ca00fc21743fbf503ff8574f2227dcff"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "aa541f408453a9c33f253b76d7d8d0d7"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "4329641b77448132ee2d3ccbbae5b1d1"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "e4fdce5c0ca4ab7f6371d07b1003e20b"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "f7547b8ba7b18cf09b595dbec2fb7bed"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "228426c55c866e54cf38f6a26b925ff7"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "c0503914e380988cc64f4c7fe59b7fc4"
  },
  {
    "url": "tag/懒属性/index.html",
    "revision": "fa58db830521c068c19b5563167aba05"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "28f097fe15484541db5dfc3e9d635ff6"
  },
  {
    "url": "tag/抖音/index.html",
    "revision": "3372bcae31dfe02ff04f96dd5b256625"
  },
  {
    "url": "tag/操作 Excel/index.html",
    "revision": "57767604104a4db6fdbc8d3fb7f47077"
  },
  {
    "url": "tag/操作 PPT/index.html",
    "revision": "e89e5aeb7bdd3bec6980ef61790ab2cc"
  },
  {
    "url": "tag/操作 Word/index.html",
    "revision": "e09db1b38ccebea8c125778b81188470"
  },
  {
    "url": "tag/操作图表/index.html",
    "revision": "2380771c1f7ff43e36c85958459860c0"
  },
  {
    "url": "tag/操作浏览器/index.html",
    "revision": "1af9cc8fc23ea4e030227dc58fece9da"
  },
  {
    "url": "tag/操作邮件/index.html",
    "revision": "3559bfdc91a82622d7f44adbe71af9b2"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "e6cf8dca385f573e2245a3007a8ab495"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "66b8aff10b884da8dc77280962f2cee3"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "ed2b3ac75b5c8192fac1793612602db3"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "e60f09c4b7c951becc23fc30f96d4abf"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "ba4922f617e5adbbcb72045cd8ad904b"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "8e71e357b33cf98508854969c3068cff"
  },
  {
    "url": "tag/电子邮件/index.html",
    "revision": "31712cce01681148be4c455ee81f9a95"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "f1e1130899fbb620c2ec1c712f05504c"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "eb6fc1841866d944f629d7ad4fe9a88f"
  },
  {
    "url": "tag/系统设计/index.html",
    "revision": "99928fb1c066620c05ca22586c4e722d"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "8cbf5641af4a72fd335e19585fc254cc"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "3ca32dceb243b2bf30738b17c4595afe"
  },
  {
    "url": "tag/解晰pdf/index.html",
    "revision": "26589e8cd0929eb38159ed15aab32f3e"
  },
  {
    "url": "tag/设计原则/index.html",
    "revision": "37814843eb4203e0f4b609865ac358bb"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a344f8c9594d823735a6b6ad4badb165"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "78c959294ec8a5b9e033a53f6e4fa70e"
  },
  {
    "url": "tag/起步/index.html",
    "revision": "f6d5e5505408e9a216d35c98d09a3f3d"
  },
  {
    "url": "tag/轮子/index.html",
    "revision": "abe117b544c99a93d93bca28bcbb3ee0"
  },
  {
    "url": "tag/闭包/index.html",
    "revision": "3aa894efe5c8191ac0be6440dc2de26b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "537399ec0b181260ab1c9f6187e62f1c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "fd219d9aa7a429e0b1e53e6b2d702724"
  },
  {
    "url": "the-bug-of-npm.html",
    "revision": "7b0c034daa6a50aaa43090ff53026a9f"
  },
  {
    "url": "timeline/index.html",
    "revision": "596949810f638ef292dfe84aa6910bda"
  },
  {
    "url": "unique-binary-search-trees.html",
    "revision": "b1788d80db02b1175348bb3bcfeaeb47"
  },
  {
    "url": "use-github-action-in-console.html",
    "revision": "a0033cf3cda122fe97e24e287ae26b32"
  },
  {
    "url": "userfull-library.html",
    "revision": "e0e236a3e956e2a802537f7bc4c1f2a6"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "025a6d2aa1f9d15f1cd934cd16e5bab9"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "066d518d416ea36a24d21085ba125bcb"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "aee8224f9edb385c7e3cbe6abf685bcf"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "55ca2e187e591903f8c3047ae33b9df9"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "66830363a4fcbfb2b57803682cb97cdc"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "24ef2e351b94967159f0b4eda24b3c1a"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "ade818f7df33ec1f664a21e55e0be408"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "276e2ec581cc359c35ec6d4f051a24b9"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "46b1f6bfab618052e7e3e5c9453d3f8d"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "ece69894e9c7e556798215ce2d633c14"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "70fb78f466ae303393e3440842f97ccd"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "50e202fa666a8641e919eb2e0605fb11"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "87852a12158d19f5b95251e7f7ff445f"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "ddd973412dbb32fa1a0674e0a4601ae5"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "11cbc918e2726b056663a07cef0b0979"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "abdc340219fb13cd89cd30e6fb02ae46"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "0d2e45c3f3abf5ae361d86a3f7be6842"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "e38af5dba3939ba27fa9d60acdf5d938"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "5a640055bdd2803bc9d4b04561e2cff1"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "0db908d8d0bccaf9867fcd35c2a7e8fb"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "9b02bbbd69155d195de391fdba893e8b"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "93b39fe58f3ce9e874ac06735d387fe3"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "b70708cdd0647ab78ffbdc15b35d99ac"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "7afe4f10cb195d23e509d7813125db8f"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "928a08ceb22af03c66fb543814db98a3"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "2bc04104fbaf44bf4a446c27f66768ae"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "5379eeec3bc50f9710c79a9c91cc6d03"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "17a3d2a45f729a34219d8e4959f1bb1d"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "399ada1e4ef69daa20b910ca514715f1"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "a40be843233a80e99fa8064a64ac152d"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "45c2231e9a41dca436014dfb0031e067"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "6155f8331d2cfaffbca4b52cac9a1400"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "36289a31567046e861e88dc11a332dfe"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "b900793bdef8dc5a726f58e2991303bf"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "f6b70174d12ffae43a3eb1ba8a5b2a36"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "599fcf3b4232a295fd4577256ba14d44"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "dcf75687c9baf1649503f0bfcf4d200d"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "1a5c757c6c35ba9a17f2fe23605401b0"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "2ef9aaefa3921bc063dc39de18f58f19"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "4c0046214264e9bc06fb81483808ed57"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "44dbb8023c029b91df69390cf4df83ad"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "a85dc26f02790040b9d9f07b4f503e35"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "47433471dc772d1631b91e9de279b729"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "e0e6e3aecdcf2fc4b9a48e73ad3bdc02"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "8590b9e2133c9fdba6de3a514f672ce6"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "3991f8f637a1bd91e4e46361ad2edd3b"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "f9b094c9bacdcc873590b65eb5922c95"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "9f25f6e251a1077e05777bbf794b74b5"
  },
  {
    "url": "views/index.html",
    "revision": "2e2a25862c2b38046daff3567ca4a1e7"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "67c5725637b19e82a25773ab90d077af"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "9b7252450b1387a4cc2ab2ee541abfe5"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "4e10e66c2a0fad27266a53de06f53758"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "24236ab211ea82ddbd52aae43cfd73db"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "bd736727c83fbdda367497e647a4b185"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "c5290e382933e46a7c2f8e6b8127723e"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "ed4d7484bd5d2440dd3583b442ff7849"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "12ecef3b76c7e4b6a00a094046ccf8cc"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "874c194920d8a77d266f3c58b1060ded"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "bcefea2ad3c7ff85d8448a73ac732c7c"
  },
  {
    "url": "vue-graphql-api.html",
    "revision": "64eb4ba22a1ec691656c7ddde9e76213"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "a10310b05a79ff1177d53083cfc3b898"
  },
  {
    "url": "web-scraper.html",
    "revision": "74a512b922bfc19d851fa81ad13609af"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "92df0abc64c2b724b0aa0b1e2c4089bf"
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
