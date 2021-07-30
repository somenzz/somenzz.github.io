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
    "revision": "fd55c4d1eeffa46f5af825d5455e2b33"
  },
  {
    "url": "404.html",
    "revision": "e4937e26266e4872e2a9a9b6f2c9b206"
  },
  {
    "url": "algo-backtracking-restoreIpAddresses.html",
    "revision": "f24f942d0b2a52369955414807053bde"
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
    "url": "assets/js/app.9e109be1.js",
    "revision": "cbfda8370c68711e96cc5cc51f7fdca8"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "eb2e503004ae8115d654f4fad1b8d32b"
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
    "revision": "578341a65c44666036915d88b494f5e5"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "bd452cd1ef048b04b2f8cd1f61453fb4"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "701adc4fc18ea8ecbdec8f7a623a47cd"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "799fbf8c8de2f53a1b67e1a53519e0b5"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "35a39e493588af1a10dd830f481eeb67"
  },
  {
    "url": "categories/Python/page/5/index.html",
    "revision": "0ea89a0022bdd24d60099d393064edd4"
  },
  {
    "url": "categories/Python/page/6/index.html",
    "revision": "3a32e5f3bf7d15611b67569a55b5e50e"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "e4686ffe7cd75467235cdac21c126e59"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ac16835870b13f5118f3a37bb5f5673b"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "c8643806c8e9abfc471d4680fcc3ff8c"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "83f7289eeb802806df7d2adf52bc8a14"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "1945c1869f55e99074b2255194805db0"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "c879fd0badc60ee4d247d23d4e793ff9"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "9e41dc6fefcc7d61a4e9bbc7fb7c4c4b"
  },
  {
    "url": "categories/电影/index.html",
    "revision": "a641743fb61259f0b5dba67b7568ea15"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "f12da17cc34d91c3aa9f8ed03d89292d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "8298108e12b6d86e6448658af8be031d"
  },
  {
    "url": "choosing-between-django-flask-fastapi.html",
    "revision": "a7cb40e99e47a0e01c1cd702d1a33477"
  },
  {
    "url": "coveralls/index.html",
    "revision": "76aa2100da66bc42aa710cce26f5e431"
  },
  {
    "url": "database-sync.html",
    "revision": "8a5acf4df70ce8c8fa1b02a7eefe226a"
  },
  {
    "url": "design-and-implement-a-custom-interface-alarm-rule-function.html",
    "revision": "51a4a20ebbc44ed53d5a3d6cc0c01928"
  },
  {
    "url": "design-principle-in-python.html",
    "revision": "4c08037695924d825b3168e81d32aa9d"
  },
  {
    "url": "django-graphql-api.html",
    "revision": "b721c8367745f41c54d2285922db33c5"
  },
  {
    "url": "django-interview-questions.html",
    "revision": "be8aadb99bce80796ba1befc0bf3f5f6"
  },
  {
    "url": "do-not-use-print-any-more.html",
    "revision": "1e47b111bfeaa4ace8bb627376f2b8a4"
  },
  {
    "url": "douyin-video-download.html",
    "revision": "2111c3fb35d95f9c82857b7e499ecd9d"
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
    "revision": "6bd832b33eeeacf7105019bbd418d99d"
  },
  {
    "url": "hello-GraphQL.html",
    "revision": "5ae57e996f8da02ed01630cceef76ac0"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "97b0239405f202f5040910f21c4b87cd"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "improve-python-performance-by-lazy-attribute.html",
    "revision": "28c02656763529cd89b1fd593b79c5d7"
  },
  {
    "url": "index.html",
    "revision": "65d5d27a254db5503bea9e6b5b48fa85"
  },
  {
    "url": "interview-questions.html",
    "revision": "fb387d884dab237f9391952d9982617e"
  },
  {
    "url": "not-use-recursion-in-python.html",
    "revision": "e42356309bed2be9ee64c9bb250099fb"
  },
  {
    "url": "pathlib-is-better.html",
    "revision": "e952bba1671f6187038f0c046e1ba699"
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
    "revision": "bbdbf30d3f2b236c4dbc30cc01b39712"
  },
  {
    "url": "Python-can-be-faster-than-c++.html",
    "revision": "1c110770c201e8539c5402aad009aba6"
  },
  {
    "url": "python-command-line.html",
    "revision": "40175f1d5f38b19d35896d1a5456c265"
  },
  {
    "url": "python-email-on-exception.html",
    "revision": "1f336ca99ec6a1a34c575957a8669726"
  },
  {
    "url": "python-gui.html",
    "revision": "793142fb5d4996188e5a7685d968ca8b"
  },
  {
    "url": "Python-play-with-browser.html",
    "revision": "460fbc1d8ecb5033c42cbb103447c5bc"
  },
  {
    "url": "Python-play-with-chart.html",
    "revision": "c7ffdd37346a28bb71f25e1dbcb9ba8d"
  },
  {
    "url": "Python-play-with-email.html",
    "revision": "e4714801ae92c6b3cd84193a06605beb"
  },
  {
    "url": "Python-play-with-Excel.html",
    "revision": "2067d16137f917b30ea499f1525da859"
  },
  {
    "url": "Python-play-with-pdf.html",
    "revision": "dfc354aece70388fae4d0eb15da13c02"
  },
  {
    "url": "Python-play-with-PPT.html",
    "revision": "363c5dbe4b00d589276a36a1eb80d75f"
  },
  {
    "url": "Python-play-with-Word.html",
    "revision": "be2c6bf2f545cdff59cf635e55a9c8f7"
  },
  {
    "url": "python-receive-email.html",
    "revision": "17e5fc02dc48bc8c19bcdd6cdba12f06"
  },
  {
    "url": "Python-startup.html",
    "revision": "dbd0ffdb90ec9bcfc854445e46f24c60"
  },
  {
    "url": "search-socail-media-account.html",
    "revision": "d226832c9c3db6883e90f8b03f9e0284"
  },
  {
    "url": "share-movie-download-url.html",
    "revision": "baf06d7c131fdba676730b53bce17027"
  },
  {
    "url": "share-python-program-with-people-who-don’t-know-Python.html",
    "revision": "8e0b2a2c1dbe0a1c3671e3e28aedbb34"
  },
  {
    "url": "system-design-pastebin.html",
    "revision": "8a7836fd0b7e9d24e32d64ceda006df9"
  },
  {
    "url": "tag/abstractmethod/index.html",
    "revision": "9786c8f2ffcc1cca97f45c4790c40482"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "b10f62c0a74874d3bd5176ca18f73b75"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "892f10e3238d30e2ef923f6716db0f8d"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "9266a2c7d904fa3ff0c21ce5281722de"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "54a1e4b6e4c3918cf0b8f4a5a977922e"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "eede80929eed7e424e30adc78c1bf967"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "a1a799d343db798299be54ae8c789be1"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "4f99875c7f24dcedb3a9067d5f01cab4"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "9935e44a07a6baaebb50af2f6284091c"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "edb99874c6073e6badb71b1b7fe8ebe4"
  },
  {
    "url": "tag/GraphQL/index.html",
    "revision": "d6536cd68a1dcc915203fc5648bf025a"
  },
  {
    "url": "tag/https/index.html",
    "revision": "abc3f3e44661310d150c46b59fd02ce2"
  },
  {
    "url": "tag/icecream/index.html",
    "revision": "d840582ee2839451c0895957a8ec9d15"
  },
  {
    "url": "tag/index.html",
    "revision": "2ad1608ca9aa395e4a8b6f0ab75a973d"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "b8a1287505253932949729900b6be022"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "775a78801c68b129e13d0d52d49efd01"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "5560ab2f8090390489e2e7d1337fff6f"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "1e8b3112215a9d52460580b1dac70732"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "d7dff06e734e3fce29c70ba08daf6b27"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "c33ec6e08c3386e2b2594dc8a562c930"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "397cb1ca86be3afb594814c602351a90"
  },
  {
    "url": "tag/Numba/index.html",
    "revision": "de76340fc56fcda74a23e120ada48f3a"
  },
  {
    "url": "tag/pathlib/index.html",
    "revision": "d256bbf16e12d01b524bdf04ce02246a"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "b98df6c9a815750a504046d87c2e059b"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "481530c0e763705b195699e738fc1095"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "827360110ea447466d6c992192e87d9b"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "fd277136bc6e7e05b148e9b9da86d0bb"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "b162bd3ff1eb2d73428e4d6c6b69583b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "12fca4616d171baf82520855ffd1a213"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0b1ceafe6a0463ab36152d023e75a8f3"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "cfa1fd90dfb181f38c5c9f78b7240b59"
  },
  {
    "url": "tag/Web/index.html",
    "revision": "f36b054198ee4d8dfd9f605fad87abd7"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "a80313e0c01ca6ce3d67bb8df41c09dc"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "a6e2a2171c483dae265a79162d861402"
  },
  {
    "url": "tag/人人影视/index.html",
    "revision": "ba773820157bcb3bcb9fa9f6efdb0da4"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "0cc94fde0f0faafbc9612ad1082357db"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "c3ecc535bddfbceb7623a5947c307d1e"
  },
  {
    "url": "tag/分治思想/index.html",
    "revision": "4af67ca34ea2a91ef5babba899b48a87"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "4390cda895e3a0f157c0f6fab3e04aba"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "1b17e9eb3474bc12190fd70244626e10"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "944b8874d5dfd4b29d94edc06eeaf72d"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "3f473bb7c94ab9fbbe500accfa646c29"
  },
  {
    "url": "tag/命令行/index.html",
    "revision": "d1eec0b7bcb235b0fb09ce041cc798c8"
  },
  {
    "url": "tag/回溯思想/index.html",
    "revision": "3711ab8c2986b4be87225d4327e91000"
  },
  {
    "url": "tag/图形界面/index.html",
    "revision": "2880d28bdf10903e8ecc1954efddb3a7"
  },
  {
    "url": "tag/图片处理/index.html",
    "revision": "3e0f643345eeddc164031afecce72f59"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "44beacd31da03a1b31286c42491ba76a"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "c7a41c37a47cf89dd2851d095a7fedb5"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "c38fbdf19f88a8dcd68a5b2d6d8a7675"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "f34dc6ae556cacc2fb880f6635a5ce14"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "ca8e6594ff2105887ed31cdd596c3064"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "ca0ca37d08a37ca5e4bb21905bbde31b"
  },
  {
    "url": "tag/懒属性/index.html",
    "revision": "bacdbb8c19990bcb1204198d378a27a4"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "091a16e2db7f34776a1b3b57429eb054"
  },
  {
    "url": "tag/抖音/index.html",
    "revision": "6d4e1e9d774db79907e61e7b8275ec50"
  },
  {
    "url": "tag/操作 Excel/index.html",
    "revision": "1a9d3179ddc705cedd7161ea0651f63a"
  },
  {
    "url": "tag/操作 PPT/index.html",
    "revision": "352b48d2bec3a2ecca326b9b75497370"
  },
  {
    "url": "tag/操作 Word/index.html",
    "revision": "fb8756fdeaa5467c8b4c1cf12d2cb0e9"
  },
  {
    "url": "tag/操作图表/index.html",
    "revision": "031abff049def66153d6249159bc598d"
  },
  {
    "url": "tag/操作浏览器/index.html",
    "revision": "cbf053a00f84ceed3bf8b4a28ec94e2d"
  },
  {
    "url": "tag/操作邮件/index.html",
    "revision": "622a98a1c0ae25b357e97541622b33a7"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "ca60a018cb2f4b27826eff95ec7ab3f1"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "dc6d50a15d5a524460faa6d2e2036dee"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "6e1e47509b8269646b37fb452bc1dae7"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "6515a5e8d60fea2f6878681de9e5073a"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "12717be3ca0523b1e439d8f990f51eb5"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "6abeb770007a784be06f6dfc821ca0e8"
  },
  {
    "url": "tag/电子邮件/index.html",
    "revision": "bcc9041de7ff7f2de9b18da60dde5f92"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "8cbd250564671c96184c9e7aad4b0552"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "81cc910d31866cf296bbd2391a8b2d8b"
  },
  {
    "url": "tag/系统设计/index.html",
    "revision": "712a2683000a2fd6a75db96ae9a489eb"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "f8d54d527212282a1d93d13f90d27ae6"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "48cdddedbaa8f8395357e9b9feecc501"
  },
  {
    "url": "tag/解晰pdf/index.html",
    "revision": "ef36cc61958539c0ea40284b6ed0c161"
  },
  {
    "url": "tag/设计原则/index.html",
    "revision": "5dd806c567c096b9a44994fbfa9dd0bd"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "cad21c04db81417ccd72b08e060eab85"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "baf21d73d0c4480d0ad7034a7bcf83fe"
  },
  {
    "url": "tag/起步/index.html",
    "revision": "d1212314b4c40233f0f2ba7546b88141"
  },
  {
    "url": "tag/轮子/index.html",
    "revision": "67b61970223c00769b26a0db62ed27db"
  },
  {
    "url": "tag/闭包/index.html",
    "revision": "d460d4b3f0ce2f3e42e4fdd5dc8b4c45"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "423389146ba092e82eef92c9fda17a43"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "bc4ba9d3f3573a74c36159a9d4100fbf"
  },
  {
    "url": "the-bug-of-npm.html",
    "revision": "07d46c2bfe6a76401ba4c002ee61c799"
  },
  {
    "url": "timeline/index.html",
    "revision": "f069040e4b0cdbc8e4319eeb2e4932d9"
  },
  {
    "url": "unique-binary-search-trees.html",
    "revision": "d68443e098f63a1884cc33639ec70602"
  },
  {
    "url": "use-github-action-in-console.html",
    "revision": "2a8e649b40ba41d198909beb19b50f10"
  },
  {
    "url": "userfull-library.html",
    "revision": "9b9536b7b59bff8754afd1baa187fcfb"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "8c1ee0067beccef4e05bc4ed15d8896a"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "95b57d7a96d522258cd21d8ed20c0941"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "78de41704a808668c5560eb6205e2e3b"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "3aaefbb070207aa8e691a40cc98db740"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "ae10dec61589fd24c426d9a4236a2477"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "cd2f982f647c70785ed5387d31174325"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "324046b845a53dd9752265cec9d6505e"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "9ad34d6c21de97eabe863d2c63d480b9"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "fa1720e26e2f887a956f42c7cffcd765"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "cd48cbc94c20c62325fb7d30d59cef8c"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "bac86aab72afe40415606a26da0d8c1b"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "6f2465676e1533756f0fd47700bd8b76"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "07fdcfa7ae8e7319d6da743750160dde"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "29c5eca9308631a6c62c75ef6a961244"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "faa38d1999c07947aa6f729894b30a86"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "939a3e6a239dad8ec29c7ddbd5e2cde6"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "e8231539de0ce0e0d2b335fbbba3e62e"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "a0ce5b9b10634717234a03bf12ade23f"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "aad143043e96499a2b468dd1aea153f7"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "190ee4bb958990aa96a3999435e00b69"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "e7cde8128e3b84d65b116747ea530970"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "4c6befb51399edbdda45618fc917c5ef"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "11e2df7d9199a0ccc97671ac017ce032"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "1c7933548048243728f72a8b3276ff39"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "eb069645b3433e7d981084df20a6313f"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "ab38cd851a0397a53786e2c09bb87c46"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "3afc0a531b7f95f60ceadf4bfa428acf"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "b6a12562330beffc9ff159e60780a7f7"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "93a5fa5fecead54602e7f3db9c3c07ee"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "d6ddcb6941e4418d6fc7fd2c1d9c82f9"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "abf5f440161d52d84c0f47335a117c98"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "f5785b626181d2ed1afa9efefc37eb94"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "5529baa484781e665053f11c300e8ec2"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "42a61ccf8c29ad65b74ced6f4d942532"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "b8a1e89388018396dac188c57e10d70a"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "b73ec5a902f3a8a3b7a32632b792f4df"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "b1796b8a1a1a7ab3160c7d882321d34f"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "001b9ed826480e3d7da6bd32e0236abc"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "7e7f1a02af78598632c7a2f99f45aa5f"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "14078bbb9224c1681364b812d04bb7c6"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "9b70ebc85b8b7ed3cf59df139c0d53db"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "c4892fa36b6854b2b63188d3e7f5999b"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "c7f460f93c9971bcb2d1f9701a8a8792"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "9b366035a55be73bcb039388c830bb6c"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "00a4f543817d7c3a202e5645e32edbe4"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "38d5ae6105515d65dc8ca78d6bbd9c41"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "b190db91119667817eaab812e97146af"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "d43eca6a453cb7f4dc3b00854ac681cb"
  },
  {
    "url": "views/index.html",
    "revision": "de1dd9a63053f9895ec266536d47e79a"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "c22eb30b8622f76d892c1152c3a3ec4f"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "ae48a0d8ca285eb644f4bb18650d4afe"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "3470559c01c7aebacac9011c4885b956"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "5b6a51d5e0b2474cd04fe54ca6cce04e"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "922603716999c667c1a33f4f89b6158a"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "39bb5710225c2235ad1a07f9de46b40a"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "68defb57aa7cd25053cacfdea46853ac"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "6ff2038486cf873ef4f6e421aa7a12cb"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "3aeb7b7ee0502b6030f935472d58fa41"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "4bcce2935605ffe2ff3ef1bb7e897173"
  },
  {
    "url": "vue-graphql-api.html",
    "revision": "d82e365c7e522f0a08be79b6e65e95eb"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "72d8b156f8ad6c0fc467666d12efb5e2"
  },
  {
    "url": "web-scraper.html",
    "revision": "8c954075f49f0ef1a7106701b3a4b4ec"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "dea68f99d2286e5d5af12454f956bf2c"
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
