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
    "revision": "98fdcb9bb2bcb9d6e79e8dc084423449"
  },
  {
    "url": "404.html",
    "revision": "a2a1e86a16927defddcd2a767110e636"
  },
  {
    "url": "algo-backtracking-restoreIpAddresses.html",
    "revision": "9aa56f51aba40a60501dabfd631b909a"
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
    "url": "assets/js/app.9b7f6984.js",
    "revision": "a459ae66360dbe75bad0c22b01ba23b6"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "8d8477107ef19d953835a0396bb6028f"
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
    "revision": "8a04d16e73b68b5b62777b72f18ad4e4"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "3368029375c6628aec5217a9a7b8c77e"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "23fda71600a50d423ff564e06aa4774a"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "debd929c9b21e3e2f2c5069d4eca2182"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "47d2e95ef1e7cad9f7d1a298b54f1927"
  },
  {
    "url": "categories/Python/page/5/index.html",
    "revision": "05edc0a7aafe877e9608f9f0291be496"
  },
  {
    "url": "categories/Python/page/6/index.html",
    "revision": "6468973e87270e1c596f6a030d9b36b1"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "a3fa20a1c46dc2248ed63d9b68c24682"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "49ccecb22200270c10f1ddf50e73a16a"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "2de533e2ba821304943aa81f92abead6"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "bd8af5792f7f788b7702a24042b27715"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d84ee7a0f47622e57fa0b0a17d04929e"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "e1603264c263fc0f9e43ad394ec9c59f"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "220e81c5b5ee64d3cc54fde8d903124f"
  },
  {
    "url": "categories/电影/index.html",
    "revision": "9313d5f759bb3c2bda5342da252fbfa8"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "c09879dbf2077554d1617454e1785741"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "732898c7b6b7903dec72a53651fa9955"
  },
  {
    "url": "choosing-between-django-flask-fastapi.html",
    "revision": "eb957c203ed865a134f4735d9cfc16bc"
  },
  {
    "url": "coveralls/index.html",
    "revision": "b6d5e9d4dd64d82bf3a1439951577e25"
  },
  {
    "url": "database-sync.html",
    "revision": "62e205b3bae62eb450652b1f0cdd0ba1"
  },
  {
    "url": "design-and-implement-a-custom-interface-alarm-rule-function.html",
    "revision": "2faa614ffbc6a859c001035b722ad8df"
  },
  {
    "url": "design-principle-in-python.html",
    "revision": "5e3b631cb48433f9943405164f7f4aa2"
  },
  {
    "url": "django-graphql-api.html",
    "revision": "d370bc4334693bf628e81fd46edc22d6"
  },
  {
    "url": "django-interview-questions.html",
    "revision": "2bc93b23a06a04f71fb0d9083abc90e1"
  },
  {
    "url": "do-not-use-print-any-more.html",
    "revision": "24f3b8f86ba8bc7ec202e7f991c04487"
  },
  {
    "url": "douyin-video-download.html",
    "revision": "528b73c3b4ce28ec20e2b72f4c24115b"
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
    "revision": "5d477fd3e815b2adcbdfa9b800a16398"
  },
  {
    "url": "hello-GraphQL.html",
    "revision": "bfb0a6ff2cd48d540d7dd51d82faa9c2"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "a7ca4757c90f1e86dae1cea7e27e5347"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "improve-python-performance-by-lazy-attribute.html",
    "revision": "e8f17278ce5aa4515593de195e7d981c"
  },
  {
    "url": "index.html",
    "revision": "af78790be6bd7ab658b920f53d882679"
  },
  {
    "url": "interview-questions.html",
    "revision": "dd9022ced576ddad06ec28228b8b104f"
  },
  {
    "url": "not-use-recursion-in-python.html",
    "revision": "73786625117fb4a663ed6fe4653dd941"
  },
  {
    "url": "pathlib-is-better.html",
    "revision": "43e57f1f2fd53c1dee4f3fb776999faf"
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
    "revision": "0a9f4dc3e3f0389a9e76d8744d864b2b"
  },
  {
    "url": "Python-can-be-faster-than-c++.html",
    "revision": "4e581652cd417b3134aebb3debc903ca"
  },
  {
    "url": "python-command-line.html",
    "revision": "8eef58136d8bebc1db1f3fab0c24932b"
  },
  {
    "url": "python-email-on-exception.html",
    "revision": "f669ff8b20dc11e8a775b22b6928d839"
  },
  {
    "url": "python-gui.html",
    "revision": "059bdf3431d75ca27cb0dfa5e9ab044c"
  },
  {
    "url": "Python-play-with-browser.html",
    "revision": "3bc3f660c6f48ad2476cd9aa6201cdec"
  },
  {
    "url": "Python-play-with-chart.html",
    "revision": "a571eab9aedff6205148200a81ca0760"
  },
  {
    "url": "Python-play-with-email.html",
    "revision": "809f5af0009fd0ab2bef0423cc8c307b"
  },
  {
    "url": "Python-play-with-Excel.html",
    "revision": "de404d03b19947e9d3ed5900f6045494"
  },
  {
    "url": "Python-play-with-pdf.html",
    "revision": "9ddf1fbb15ae30b520fba60c7f43cb92"
  },
  {
    "url": "Python-play-with-PPT.html",
    "revision": "7d0e516b841139a48e96bece3fab457b"
  },
  {
    "url": "Python-play-with-Word.html",
    "revision": "f2923e9154198be65b33df9565b7d7af"
  },
  {
    "url": "python-receive-email.html",
    "revision": "3c7fce189f351610109edae42907261c"
  },
  {
    "url": "Python-startup.html",
    "revision": "9ae1fa43909f45d336182e7453a4d0a1"
  },
  {
    "url": "search-socail-media-account.html",
    "revision": "69113a6508837766188df6932b3e18d1"
  },
  {
    "url": "share-movie-download-url.html",
    "revision": "0aa11d51c25fb1a4edd996fb84251e3d"
  },
  {
    "url": "share-python-program-with-people-who-don’t-know-Python.html",
    "revision": "7019c041f032d100bd1d63d8d3380e23"
  },
  {
    "url": "system-design-pastebin.html",
    "revision": "9b73e84d148114159d5f401e0f9abfd3"
  },
  {
    "url": "tag/abstractmethod/index.html",
    "revision": "126a24813e474fc9b231079105271c43"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "225d0a5a3b7c82e5dc828069a6b255bd"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "203d2f2fd5e6ec67aaa8593c98382cbd"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "8960ffff038375c6b54edfe847ba4612"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "b437983d42bdd8719398a87a4dd1ec83"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "0f1035f9d7a7aaabd73f673ecbea73dd"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "3b16d34e4027640dba8667629f511896"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "617337c361cf7f0ba2f58034fd172fc6"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "bab6f06b271d980b0f8fa01058aa483e"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "0f89271b514e5dadd0aeff35935a9365"
  },
  {
    "url": "tag/GraphQL/index.html",
    "revision": "1601499b69eb0e24659e5302cb273519"
  },
  {
    "url": "tag/https/index.html",
    "revision": "f2eaab362c23dbd666cb6b68b3d9e76f"
  },
  {
    "url": "tag/icecream/index.html",
    "revision": "dd2bb03ecf86e53a4dba2171cf5b3f84"
  },
  {
    "url": "tag/index.html",
    "revision": "015dee107c65919e0dc7280ccb2d86d7"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "fd0fbcd5fc7d1581526fd16cecc3d4a4"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "11a93a3d655b93802d65e9d6d421d0cc"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "5f3ef90caee74231738b9eb1f59e1e80"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "114922ab45f0c41f6064ece46ea0ce6c"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "badd208b92046c5e502aed2c457f663c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "91627ae64bca1b82351d8e71ef3bc680"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "0c238e88da0da26b13f892ff67172d10"
  },
  {
    "url": "tag/Numba/index.html",
    "revision": "ff609a3f5ae400d8c53a2b204466cd2c"
  },
  {
    "url": "tag/pathlib/index.html",
    "revision": "68c24bc09a16dd757779ffecae553204"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "e534efe3c1472c97c2a3770c1ae021d9"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "eb148f56b9797b288e5e5d7185b3d96c"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "0f98fc88e4f5a3398f77413cca21fbfe"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "0f493bdf80f824749abe4fe0083a0b9f"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "fcdda0f048dd3868e367b8a8b9fc886a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2c3ca85205e0b2cfc1db99912a15b121"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "5dfde6c2f3f7ea8a93bf1090aedf9cf8"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "53d79d7645a124f7fbe395e2fdf7a7a5"
  },
  {
    "url": "tag/Web/index.html",
    "revision": "e83c3ac9eb6531937edcde504e3323ba"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "8af2893c3836b235bcadf247e536323e"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "d710fee49a5b01fc9b599e75ae3c3251"
  },
  {
    "url": "tag/人人影视/index.html",
    "revision": "b4327357e33ed6abd308d3ec4ca8be87"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "6f434696abefefd9c7ec8867f8ceaa71"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "2ecd12690e81e5c3712302112783e019"
  },
  {
    "url": "tag/分治思想/index.html",
    "revision": "51e4ab1fae49e7b0017a3f97700cc538"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "9680abc10c7bfb86d6d557e7d016d9ce"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "60074e6ef32db0d12c2b9246345d6ecc"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "b08b85aedee1fef7d2b644abc573249f"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "33356ba4a68b5cf01792a57979086ab4"
  },
  {
    "url": "tag/命令行/index.html",
    "revision": "fd44b8c6292b0d8d30fb613a93b2e02d"
  },
  {
    "url": "tag/回溯思想/index.html",
    "revision": "93f9ed94e261978b5423be13b1615e1f"
  },
  {
    "url": "tag/图形界面/index.html",
    "revision": "8140312b19e6826eab1c7521c024c709"
  },
  {
    "url": "tag/图片处理/index.html",
    "revision": "f38a8e33b2b8c990e5dfcfb0e5b33b75"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "eeb6c8bf77e27b1c0bbc8a96a33b9859"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "f0993a746e68c3080defe2eb018943b2"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "3de6260f0893c2c55f80d4933acdf8ea"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "a4ba444e8e58e647a62f28f780b35888"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "c46395080eb6e41618fa7fa71ad9078c"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "d5f8eb4280e75fc970fd3f3aebb285c2"
  },
  {
    "url": "tag/懒属性/index.html",
    "revision": "f1ec993987375b5918f6c657d6bf1078"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "5cb915008cfaca18aea693dba1f7a0bf"
  },
  {
    "url": "tag/抖音/index.html",
    "revision": "46d11df36eb076882044c41f2faceae2"
  },
  {
    "url": "tag/操作 Excel/index.html",
    "revision": "fbcc15c0b0944e5f166ec84188c74690"
  },
  {
    "url": "tag/操作 PPT/index.html",
    "revision": "ba300141c12d0a8cbe4172d6673b3895"
  },
  {
    "url": "tag/操作 Word/index.html",
    "revision": "66b0fa9a69ed33c59547258ef0b9c051"
  },
  {
    "url": "tag/操作图表/index.html",
    "revision": "0e4d5970050d251cdd825e2c3875ffce"
  },
  {
    "url": "tag/操作浏览器/index.html",
    "revision": "fc661d4bd36035a17101161433c90b67"
  },
  {
    "url": "tag/操作邮件/index.html",
    "revision": "df666d4d398ca0e1733943edf02cc09d"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "534ca74d3f71e73be325b2e1fa1f3cfe"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "5817288f6426d77fae7d1d1292c4ae68"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "bc17ab65268a256858e5ffb1b192251a"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "9fd0e4e372a23a60b6d8458e526f29bc"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "4c4993c03cd99404dfec8d1b6e9dff30"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "5fba9248ed471df7e80c921a39d995a1"
  },
  {
    "url": "tag/电子邮件/index.html",
    "revision": "a1aa5e09fcf9ade1bcfca87233bddf1f"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "f9bfaea5b15a231032dd4f9ceb966965"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "7c3c73ceca7a9195240f1193842e94ad"
  },
  {
    "url": "tag/系统设计/index.html",
    "revision": "c46703658dc7b7bf74ef8bfddc01b4d2"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "49825cfef032e05e44b79da13f7dec99"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "5b07d192a2b3da06f852ca7e461e2e2a"
  },
  {
    "url": "tag/解晰pdf/index.html",
    "revision": "94f1559c5e59a47fe200cc1490e1e7a5"
  },
  {
    "url": "tag/设计原则/index.html",
    "revision": "19262eb7e83573ab18ab0c95248100f1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a0f8a4ae3fd26efc0be09a8ad743ed64"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "57509851273b4e005a26896e794ed6cb"
  },
  {
    "url": "tag/起步/index.html",
    "revision": "8cf7c9a8449e10444a78149675ff48f8"
  },
  {
    "url": "tag/轮子/index.html",
    "revision": "ce36a269acdca74dff1e457a0d21d1c4"
  },
  {
    "url": "tag/闭包/index.html",
    "revision": "2700ae2d2b053ef6d91365799aefaa26"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "bbb296f0af692f0484d7c2c0c1620890"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "1db35daaef652c762e1b471ae4d8c7a5"
  },
  {
    "url": "the-bug-of-npm.html",
    "revision": "8aa1af254226f368d6c69e44e048ba14"
  },
  {
    "url": "timeline/index.html",
    "revision": "4693177723522597cad9a9bdf0935343"
  },
  {
    "url": "unique-binary-search-trees.html",
    "revision": "d5c0f864a082ce22eb31494bc35dc225"
  },
  {
    "url": "use-github-action-in-console.html",
    "revision": "e14ec25320278d2b54dc23063e647444"
  },
  {
    "url": "userfull-library.html",
    "revision": "4dce79c708a069686b79d55e17df8d8c"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "07cce3f280519a30dff61d642c80322f"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "e58d967c053a3ea8a9f785f9e7b617ea"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "e44abdeaa85d40cf634acec292785d1f"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "af9e783748b7e5fba3ec8eab1af7e724"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "5c8cc2458d86f5f4ccc16a07f25eff4a"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "9347e49fc0bb22b83f5cd5aad35daec9"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "40329602da551c7513043cbe996291a9"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "5a932d9c862c152ca4cd8884ce0f0f6b"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "73a8fd89c431850f865e97c49ae6c6f8"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "4748ba67d1db216f861aeabe7967ee47"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "70fb9ece44855cfee03ea5867670bcdc"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "ee1a5c4dc9f4bce67abef5e38a43a453"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "a123b33ac56d1674b9bc8cbd19a2a936"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "4cb0b3cc2c9e7e6a1d06fff984dd9eb9"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "8481392929356cb12ceedf09bbd859b8"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "53f7ab1a1d10c3be9eb8ba8a81d39fe9"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "7d26e4fc2e9a42e3d315905627cb3f3c"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "76a1fec49bc750652d2d844ef8278456"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "17a7bcf5c6a38b553b214fb0e923e1a8"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "48a22ec599220d2c978d618e39102738"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "4593b404c2939deebd9d95bd25c702ad"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "ca73940e87360b053c1dbb0499fe5f02"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "3d1f72911c5c5dadf07a6251436ff9d4"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "9237ee102162f8e268bb3ac2281c755a"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "be2905b8e3c3849e72cb7df3b931ee05"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "1c06c4dfaebd9add6e3deebafe57e218"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "4208fe65a497f5fc6f2ef5f39185b526"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "21a49072933affcf87ed8d228bad67ca"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "db7be4c6dcf119c19913e5371d8c4097"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "683e94fda1a51695a0e522a46b70492a"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "c708c442852d03531393493d8f507aed"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "92dbabfdabdecb9f5b2093f0138ab35e"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "d85716a606a4b356b0479625cc9e8541"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "3ba1ca5e1d81163360eb0aadb9f897de"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "1cef7cfaff3c6025ff894e77337b75b0"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "002eeae1e090cb16a07e03d059d776e0"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "e2b6ad7b416f349067005eb90dac4f02"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "ae343c0e0fa013c90a9f6ed9e7af9b0c"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "d59cbc5163a2cfd5bcca2b5b9f51c69b"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "80a520d9208a3950bb60468c24d036c3"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "715d3557efc403a82ac12f93974ca8de"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "44bcd46120367c92a022a3b9b2f7ffce"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "2d969238daf55502b826fe99b91a63e9"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "12ff75a51cd242b4665b2e0fe1ec9060"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "726e599a8d36cb2ee12daa45c8dbde93"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "cd0ce38128d3e74ff1de8b66b6bfc90b"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "941706e9d805748849ac107b0de47208"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "0350f13720818001ed18299741762170"
  },
  {
    "url": "views/index.html",
    "revision": "073087f8bc56945ab22856e64b6b4236"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "37caf4b770a76248c76d8aae2f5f3649"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "43ce2e8276a8a669b1cdd3135db6277b"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "5ddeb458585815ab6a44e66aa3f37b22"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "4972e795bc164e4c4736bdc76f03c1f6"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "ad0c1ee9af617d982ab3b10dca3e697f"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "6cf90e41c378f25dc23e608b43d32e8f"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "081bcf68e41e75d72450b54db8d978e0"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "3257c811ca5a897264560d205ac531a6"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "3fe4d00fc5438e9b42a6112555760dfd"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "952e9527ee34849e57f5bc80c9e4e6af"
  },
  {
    "url": "vue-graphql-api.html",
    "revision": "99337827cec44dc422cae7c0fef02e96"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "e236c7cb8be7fef17f928802c92817bc"
  },
  {
    "url": "web-scraper.html",
    "revision": "57999edac2819a97c48a20eaaffaa23e"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "8524be1cf923148dbea51e3dec1ca2c5"
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
