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
    "revision": "96b0a8f28e69c1253ef7179695145f26"
  },
  {
    "url": "404.html",
    "revision": "2f394d1c93f887fee08d1dc6da58d8b7"
  },
  {
    "url": "algo-backtracking-restoreIpAddresses.html",
    "revision": "4ccdc5f5b75684f2e9bdf12a67cfbe29"
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
    "url": "assets/js/63.497a13d0.js",
    "revision": "f4e1ff69dd656558eca0d5d0f23136bb"
  },
  {
    "url": "assets/js/64.323cb9d6.js",
    "revision": "52019e8ea7c615ac59ce6ac69ae25fca"
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
    "url": "assets/js/app.8a1b99ce.js",
    "revision": "703b6a6609fba4c7217278962b4eac35"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "a820f8d5d883d2c5ef447f22967f6b81"
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
    "revision": "6afa8f940ef89ad9c06112124e762634"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "c087faf274b9ce73468b8b616dc91390"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "a11fd810b14cc4ca57605c93415b983d"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "9856d46c9f1bc2f6525bec116b5a5faa"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "02333dae7b6963cec343cecfe02d612a"
  },
  {
    "url": "categories/Python/page/5/index.html",
    "revision": "92eab3b6b75d07559a4f8346ce63d855"
  },
  {
    "url": "categories/Python/page/6/index.html",
    "revision": "1035e35dab9fc4a749c3d314462876d6"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "b327ffd199a85d1e6d602f470e332c42"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c5827a98a9f7414e63d3b2b6b0e72e9e"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "f36c08227bfc6e35060c57fa09d4c42b"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "adc90652c52c310c872ab9391f124e79"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "1ae9f45dd38592f873062abecccaf202"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "da95329f8d47c5bcad7c5988ed4d8340"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "dd82df0fa11ce29fbf99ddc7d19df5ba"
  },
  {
    "url": "categories/电影/index.html",
    "revision": "336d4ec906135ade4fa68423a8147cbb"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "bd2c3f23a9557207459aa62abf7540d2"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "579e295b0ebf5c75aabbb3bd86a592cd"
  },
  {
    "url": "choosing-between-django-flask-fastapi.html",
    "revision": "da4e4cace2feb5137c14d18f159c78be"
  },
  {
    "url": "coveralls/index.html",
    "revision": "6b8e90fbe7b37b401f3734226cfea620"
  },
  {
    "url": "database-sync.html",
    "revision": "6ae652f1ddaae0ac91b97584deef160e"
  },
  {
    "url": "design-and-implement-a-custom-interface-alarm-rule-function.html",
    "revision": "89ded1f97fd6c633c088ae0ae58438fd"
  },
  {
    "url": "design-principle-in-python.html",
    "revision": "a5c791650e9ed42d6881c631252b9e88"
  },
  {
    "url": "django-graphql-api.html",
    "revision": "3e82ee243b21591ab9b29afacd2fee58"
  },
  {
    "url": "django-interview-questions.html",
    "revision": "aa2e532342e92b8c2137cb3625e821a6"
  },
  {
    "url": "do-not-use-print-any-more.html",
    "revision": "f4c45a0235d8ee5ab8f7c0a082e626d8"
  },
  {
    "url": "douyin-video-download.html",
    "revision": "e6fb483b0faff9e58100e1fd8efdd9c5"
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
    "revision": "22904f9e624bbc28d39b140d3b80f111"
  },
  {
    "url": "hello-GraphQL.html",
    "revision": "dcc1b1d49fdf938af73f4f88a82fc0a2"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "b2a35d3134d895ff66717c88a60e835b"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "improve-python-performance-by-lazy-attribute.html",
    "revision": "5296c8a2ab15b5edb5946ff30dfb45a2"
  },
  {
    "url": "index.html",
    "revision": "6d4cc662bf7773dca1bc045df3007082"
  },
  {
    "url": "interview-questions.html",
    "revision": "78e9a70e80720a845d835439cfa1dc26"
  },
  {
    "url": "not-use-recursion-in-python.html",
    "revision": "379ecb99e496f265db8b7729f4aa270e"
  },
  {
    "url": "pathlib-is-better.html",
    "revision": "e149fc536c106aa04abb6f4a868ee413"
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
    "revision": "c0896de1870e40cbd518ae94f737faa0"
  },
  {
    "url": "Python-can-be-faster-than-c++.html",
    "revision": "091d0eeade3c84899b382043959a9b20"
  },
  {
    "url": "python-command-line.html",
    "revision": "8aa9dcd91299e402d3fc43ab6325ae23"
  },
  {
    "url": "python-email-on-exception.html",
    "revision": "3f1ac6cd3ea76654bcf4ae5fc78a1618"
  },
  {
    "url": "python-gui.html",
    "revision": "67c433f4b3537ee076ca32e922ebfcc8"
  },
  {
    "url": "Python-play-with-browser.html",
    "revision": "d9d4c54196814d04efeaf468ee3771c2"
  },
  {
    "url": "Python-play-with-chart.html",
    "revision": "dc8ad9234ec4a710291a3c3708a60b36"
  },
  {
    "url": "Python-play-with-email.html",
    "revision": "66d883ee001fe9cbd8a152849f70e875"
  },
  {
    "url": "Python-play-with-Excel.html",
    "revision": "4d0e8307f826c3f01b7c7f78267db5a7"
  },
  {
    "url": "Python-play-with-pdf.html",
    "revision": "40e43bac5bd9f5d521aceedc2d15de93"
  },
  {
    "url": "Python-play-with-PPT.html",
    "revision": "22c13debe61f239eb86a049b52612d36"
  },
  {
    "url": "Python-play-with-Word.html",
    "revision": "531872c54e9f453b88a64508327be994"
  },
  {
    "url": "python-receive-email.html",
    "revision": "cb2cf4031480b2f8b74eaa8daafcf434"
  },
  {
    "url": "Python-startup.html",
    "revision": "9eb9dd5dc7316d40e63a2c0e395aca28"
  },
  {
    "url": "search-socail-media-account.html",
    "revision": "3b53825fe55c8775f18655d94dec84ce"
  },
  {
    "url": "share-movie-download-url.html",
    "revision": "d15e65d41df652b84e79ca40563c0687"
  },
  {
    "url": "share-python-program-with-people-who-don’t-know-Python.html",
    "revision": "1b6dbc1ca0f2189d34cededb10774ab9"
  },
  {
    "url": "system-design-pastebin.html",
    "revision": "9cbfabff9d72097b82785cb15ab8f633"
  },
  {
    "url": "tag/abstractmethod/index.html",
    "revision": "88edf5b059a4c60d1eb0a35f4511ab63"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "163a3e945e2f6b0210ebf984bb1290e6"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "8404f28facf19e8b4ac4ecdaff9958ee"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "d7ea1502edcac08490ad7c65f14ae252"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "18d969a218399b274643e3355c6e16c2"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "279c26d46f86accee5b3a581c59dbb5c"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "19d97d354973d6c16dd974fc5feb5439"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "e73225e53535b1c5643f724af41f05c4"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "dc300392c1b1c6d60817701ae99162e7"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "51c00c4e2285e3cf88d92e6983535a6a"
  },
  {
    "url": "tag/GraphQL/index.html",
    "revision": "aa5347ecbbd0b6f46e462d2fd77e0a3c"
  },
  {
    "url": "tag/https/index.html",
    "revision": "f43e2e7a246083a4f813d7f8e4a9a3cf"
  },
  {
    "url": "tag/icecream/index.html",
    "revision": "765c7147f72729e3c142351f7b4fb79f"
  },
  {
    "url": "tag/index.html",
    "revision": "4f1c6df8563284f19a45511cc7f551ad"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "7d4f799292d969fd2fab4268106e8aa2"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "28357250c8896892fbf6bb11e07e0a57"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "35b760d489222d51252a15251862ea56"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "de35092e081e5afe713a0624daf97756"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "1ae574b7e619ba9ab81dd1d5ffd9e3c9"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "7178824064901836a10ffefdae8988f7"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "7363a92ddb7a17bcc761ceceec9518ec"
  },
  {
    "url": "tag/Numba/index.html",
    "revision": "b7fc9dba25a3e22882101edaddcbc899"
  },
  {
    "url": "tag/pathlib/index.html",
    "revision": "6aee6c4939fe10413963604da3c21254"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "ef1df56f3fc65c6c400d3f0879d194af"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "2ca5313ff92af26960770c7ea665d5c2"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "e83786721d7c29649334630579f88628"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "ef3a610e3490ab6b91bedf09f81d930d"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "de2b50916aa1dcae73ad488b128387bf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "63419e5e4dfaec5ad7553da90fd2ede7"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "5c0efec8057d3cd35adafce5a857e7f9"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "8df25aaf288325a72f7899f30bd17b65"
  },
  {
    "url": "tag/Web/index.html",
    "revision": "c5249d8d1e555f1e15ce388b438b855e"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "fd71983815d1a85bfe85d69e3a68cb9d"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "c13a85157425f64c81ed4390cd25ae0c"
  },
  {
    "url": "tag/人人影视/index.html",
    "revision": "003541770cdf872275f9c94f9ab8a8a9"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "bcd42e633392d7ebdf91fd04fb336439"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "f706e0c4fbe431b00996619e003c74f0"
  },
  {
    "url": "tag/分治思想/index.html",
    "revision": "f4b5908801198424b64b1e8d33676171"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "e0d5587a20b7ad013c51c198e1a6285f"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "64d99ad079899e10620da51216ac1dfa"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "711ce1deea3c6225a9e6d84bf843bb02"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "5ae0931072aa20e45ec79c097e19dbe7"
  },
  {
    "url": "tag/命令行/index.html",
    "revision": "02d1d3b72aba6c3e05dd9ef58ce14215"
  },
  {
    "url": "tag/回溯思想/index.html",
    "revision": "b70badd23ebeb710e6acf9cde9800b72"
  },
  {
    "url": "tag/图形界面/index.html",
    "revision": "d3c7c094e302f4c5fc807cfb5d742b55"
  },
  {
    "url": "tag/图片处理/index.html",
    "revision": "79078d3ba1b161c0f2c5afe10444eaea"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "78490b404237e013123ed98d20719b7a"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "06af696b2edde13fdadcb9aa5047eab2"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a92bf1506b0b299bf760497d51e7f9c1"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "2e19d5981a85bdc80ada7da896efac64"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "eb7250c4336fab57d2b29c6b7d8a1204"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "2a4f9925492014868627a87672a8fa48"
  },
  {
    "url": "tag/懒属性/index.html",
    "revision": "d688b5be1378043d948761420bb2a6b9"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "75ce3a2f60f105cc580ba5355398f380"
  },
  {
    "url": "tag/抖音/index.html",
    "revision": "e7302b4d54322e0b7218f47fd682fd6d"
  },
  {
    "url": "tag/操作 Excel/index.html",
    "revision": "148f2e51bc9f246bc6d14dea1a6ab361"
  },
  {
    "url": "tag/操作 PPT/index.html",
    "revision": "3a5a52523337810cb40dd42f86617378"
  },
  {
    "url": "tag/操作 Word/index.html",
    "revision": "011aa7593fcc8002a9206e908910011e"
  },
  {
    "url": "tag/操作图表/index.html",
    "revision": "51e181a6dff4de187c7f12decbbc2ec0"
  },
  {
    "url": "tag/操作浏览器/index.html",
    "revision": "4ddebecb915541bb489de87683198aa2"
  },
  {
    "url": "tag/操作邮件/index.html",
    "revision": "75fe84fd98612e124409ee94eeddf0a7"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "da766400e93d34e56317bd6600986b36"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "cdd6e452b9d39906762f247f3a0d0325"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "c3988a42b966b7c71871931311ef9491"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "63f6211d42e27b21d3b509d720e27590"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "fd20abe4ddc36f654251161ffc7099d6"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "fc1c1e2562bb83201a309429f270ccde"
  },
  {
    "url": "tag/电子邮件/index.html",
    "revision": "82c513fe4a315ae1205b0ccc344d391d"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "f1190fdf80e47cfcaf1f5e2926e550ba"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "00fe2e9f777344f6ee66d060091b6f94"
  },
  {
    "url": "tag/系统设计/index.html",
    "revision": "d0b72507c7c885b41898128b73e97154"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "d7d9b927ba7d13179998ba48a18d2996"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "0ac3a2506660e6cf615d04d27bb4ee3c"
  },
  {
    "url": "tag/解晰pdf/index.html",
    "revision": "16aac9ec6f90ae0741245dc9e6782fe8"
  },
  {
    "url": "tag/设计原则/index.html",
    "revision": "8aea54b3701a88fa7e7d418ed7836839"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "e06d590c4bf3b6f7ef10cac9bb223892"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "2032b81ef085bbadec851be1abd21bb3"
  },
  {
    "url": "tag/起步/index.html",
    "revision": "33fccb4d819fd5e8363af32770b9b7bc"
  },
  {
    "url": "tag/轮子/index.html",
    "revision": "ac1d0972888d4188fe54ea330adfa8fe"
  },
  {
    "url": "tag/闭包/index.html",
    "revision": "28303b97d3582caf5079e0cf9517aa24"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "82b61127e08f72949d13af58a1efa676"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "45233e9bc30536d0eeda815fe95d10e2"
  },
  {
    "url": "the-bug-of-npm.html",
    "revision": "eb1bd3d8261346224b9a08b43f9f1d37"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c8fd8a260ac340d0593e9be3b674f65"
  },
  {
    "url": "unique-binary-search-trees.html",
    "revision": "48fbea372f75e789c270f25f4709b910"
  },
  {
    "url": "use-github-action-in-console.html",
    "revision": "1a966708d2915c258cf5f437bc3124a9"
  },
  {
    "url": "userfull-library.html",
    "revision": "ce8c8e5144faaa889dc516ee1dd08664"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "06c8f958021c94f8aedb6f6434e044f4"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "829468700a86157ee2a3ac013adc762f"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "67a0903494a52fb18ac5004a5e1ee36a"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "9dbbd7adad253b3598713f639fe0f380"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "de80d0542bcbf719475805b335968baf"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "79957a8cade85d975b4d3d118e5eb377"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "431cdfef2c9e362b765fecf7bdce931b"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "6aea221caada05bd0f18df9634dc3be2"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "527d019e94e7cd5b0039c2f233d52936"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "149b495becb7aa00fe7b5b47ba4ad72f"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "78d3fbf78b63b1936ab7bd72880c0899"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "a4143acece234927e4729c7544a21db9"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "28749ed584a338232a388d55a9b4d9ea"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "d90168ae6893b8cbdb2f454c0ae5d4b8"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "c6796a885fa9e0879a6506d4045132d1"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "423ae1910184e23b8e9b6f61dc601a60"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "0494656eda6d4f822413e915fd4388df"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "412a5ed420400d9aa4264c1a9db2fe0c"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "5ab9a917d66f13ec5f36172ae78393bd"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "28502f14cbcd84b15a8bded54aa14d59"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "7ee4584bd53ed70e2726be1998719883"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "18d7765ac0bec69b460a970be2c96151"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "e7ac333f6cc18dcf3c665da44292ec55"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "fcc4fb22b70c62b9c46009bc0eb2bf5a"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "44d7b35043fd129f071509cc23e5644a"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "0d876eab294d910c6e4e32666af2cc30"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "b7c6bbe14c9a207ae0a7df97adc671ef"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "af06fb83714d1600dbb06077eb52a983"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "9ca9b40b525a3e02959d87a8f2aa5903"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "0e0a6d1cfb47b88b5d01cfea09c0a95a"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "7abf59e3e063ccd51b2d7f0ca2b374f1"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "0baff74066cfc0d73ef6ece05752db91"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "497ad012474399efafc8df2e69d4ec5c"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "3623af666dfa05d021aeadfc9d1246f0"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "7a6936486e803647565244ef16dde0d2"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "19a85a21435752c4bc37ea9d9d4e6b96"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "d57494bb2583d33b629acf9c87c0dd6e"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "3c90471ec15ce02c4de2ac300490a93a"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "01631fa4022b30fb5fbcc63437ee12b5"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "393f741d826f6f2babaf7797cfd78237"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "b9f420931716eb490e701243c3f50e5e"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "10a8a8d2ee6d58483a06f32d5d5c073a"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "d83e98174a58172780f1e95c584ae0c7"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "04f1c72a5eb459946896698995cee820"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "517fc201afc4f38881bab7349dee417b"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "5601d176663829aace91ad6c02b0559f"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "99c324614a163e9c6eecc8f4de1e2b24"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "9a1d06a297a364cdbbaa2105e265305b"
  },
  {
    "url": "views/index.html",
    "revision": "6a5887621b701dcc43e99f57f61678d1"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "3316f2a1e62202fe4a1ec7ebc8dac52e"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "568f7d2f070c5803cc063a33ec01b24a"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "f82a5726a82a7bb3c3a5a8a5fcdd4c7f"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "0dcc4d0b4e8053aaab45f0736621ce24"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "5ade7cb9bf64818f8978325dc78d6c6c"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "5d3070e7ef8beb27801fc0f1c1f978b6"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "749ec13aa770ff1c87a6d279f7872327"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "078db2a59e455c5cbaa12057fe8a56fd"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "09d8cc9d374f07274de12ccf183e2aa4"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "1d4a6a4787be4635b7e0e17b9ac3f07a"
  },
  {
    "url": "vue-graphql-api.html",
    "revision": "ec2050bd9038d097682c1a0672f4dc27"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "a01882a8983e53628639a892f99911da"
  },
  {
    "url": "web-scraper.html",
    "revision": "445ea3fb5192a39414c042c10ab2b9e1"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "95d2553592721890faee0c1e60882bb0"
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
