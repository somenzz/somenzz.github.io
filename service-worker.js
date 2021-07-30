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
    "revision": "c08ae8bbf15914d7e94951e292fbef81"
  },
  {
    "url": "404.html",
    "revision": "521c13056b924320dad78e5302665b20"
  },
  {
    "url": "algo-backtracking-restoreIpAddresses.html",
    "revision": "2b04841e2461f7d6fbb980bcee3a5bda"
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
    "url": "assets/js/app.508bfebb.js",
    "revision": "a800627c36ad1257893ec1e5256dce63"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "0f0a2ad534ddbd6e9bbc46cd75f86289"
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
    "revision": "14af6e486de109249a28db1c438ff457"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "1ff24fc8cccb54ae91c17ce0166264df"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "732ab93567dd9b493a8f38339aff0be6"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "1fa8a645c49a71cf5bbd61ea824c0c6c"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "f50fcdb3c14991bf4f8416fdff91c0e6"
  },
  {
    "url": "categories/Python/page/5/index.html",
    "revision": "cea1da0114cc9ecb9bd248885c312877"
  },
  {
    "url": "categories/Python/page/6/index.html",
    "revision": "aae1e1e743cb17a25a3bc07e38090946"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "01c4766852bab0110d5c84a9d7b95e1e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "faf0a606b58062460b7e72a2476459f1"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "0757ec3b2e044568b3b2a2120008ac5f"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "f70ae678566859feeefe6911687d7a83"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "515b461b2d8a68d7098234d40ab08d0d"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "6929ef700746365cedfab1d263c8ea72"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "284bbe1f51fe757e39f73dbd1c8c9b0b"
  },
  {
    "url": "categories/电影/index.html",
    "revision": "a2bcfe609ec10e730e24cb6db987dc23"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "23057600a5a043cb09d34620083422b0"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "3a43fa0ae022f1ca4d67873ee34e1837"
  },
  {
    "url": "choosing-between-django-flask-fastapi.html",
    "revision": "36ad775a172fe4684c1a547471e9f885"
  },
  {
    "url": "coveralls/index.html",
    "revision": "3d7690eddb3cf7c5e9ee097806911413"
  },
  {
    "url": "database-sync.html",
    "revision": "13f937ae17f1bf9fb04056f6b0908fbe"
  },
  {
    "url": "design-and-implement-a-custom-interface-alarm-rule-function.html",
    "revision": "a7ed6d32d6ae2b4b51093ea351b6679a"
  },
  {
    "url": "design-principle-in-python.html",
    "revision": "b28446f9626aa2b7bf085deabd739ed1"
  },
  {
    "url": "django-graphql-api.html",
    "revision": "c1ce3711faf12ebcd47cbcffd86077d5"
  },
  {
    "url": "django-interview-questions.html",
    "revision": "112f01b1e87380fb653f69cf8ba9ac18"
  },
  {
    "url": "do-not-use-print-any-more.html",
    "revision": "53a2aa559510fe4dc8b97309c3ddf660"
  },
  {
    "url": "douyin-video-download.html",
    "revision": "e6be69b2978f30804f792290c113f3c5"
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
    "revision": "2319c614f65405a91032ef7e5b059863"
  },
  {
    "url": "hello-GraphQL.html",
    "revision": "1dad4534ce7109a4e9da3643da353239"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "7e8caa70a72a02c10bd5130d74f34ea9"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "improve-python-performance-by-lazy-attribute.html",
    "revision": "6c32e62403748e6866e70b7b023675e6"
  },
  {
    "url": "index.html",
    "revision": "58553e125ed3de19c8c8146f8e097251"
  },
  {
    "url": "interview-questions.html",
    "revision": "eb549d277f4a3738b454b88688a014cc"
  },
  {
    "url": "not-use-recursion-in-python.html",
    "revision": "6d958616748c79cfab9d61a8fbc57438"
  },
  {
    "url": "pathlib-is-better.html",
    "revision": "a7a1ea06b04c325bad03a44f086fb6e0"
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
    "revision": "48718e1bfc3b5faf450cac3f2395d6b9"
  },
  {
    "url": "Python-can-be-faster-than-c++.html",
    "revision": "ea8c382af8dbc097306c1b38c2b90d50"
  },
  {
    "url": "python-command-line.html",
    "revision": "cf356f050659c58fe374888ba1206ffd"
  },
  {
    "url": "python-email-on-exception.html",
    "revision": "5e681eeb2c42073dfba152c9f8ebc385"
  },
  {
    "url": "python-gui.html",
    "revision": "62e05c8fb166b1c140d872acbadd1428"
  },
  {
    "url": "Python-play-with-browser.html",
    "revision": "ae3978a765f28834c68acb04dfea0990"
  },
  {
    "url": "Python-play-with-chart.html",
    "revision": "dab8e3a570e7eb21ffe5d911656910b3"
  },
  {
    "url": "Python-play-with-email.html",
    "revision": "b508cf8d733354ee25b5561abda9c81a"
  },
  {
    "url": "Python-play-with-Excel.html",
    "revision": "c1dea832966e9f14773014087c36e98c"
  },
  {
    "url": "Python-play-with-pdf.html",
    "revision": "6a0874bc854115440f23a400dd0ee0b2"
  },
  {
    "url": "Python-play-with-PPT.html",
    "revision": "1a251507d799e607fa67132e2e12eaf9"
  },
  {
    "url": "Python-play-with-Word.html",
    "revision": "34fa4e6a0f4d507625298c7d289f2d4d"
  },
  {
    "url": "python-receive-email.html",
    "revision": "512efd0f4075c795c57dfab261c2db19"
  },
  {
    "url": "Python-startup.html",
    "revision": "def12ddbf7d60d954f3c14d9bdc669a9"
  },
  {
    "url": "search-socail-media-account.html",
    "revision": "fb9d50a6bee0676e916bb4b0eee4662e"
  },
  {
    "url": "share-movie-download-url.html",
    "revision": "de08e26353cfe36103e2f29acbdfd32f"
  },
  {
    "url": "share-python-program-with-people-who-don’t-know-Python.html",
    "revision": "c276fd1c0652d7cbc7986b5c59091d8e"
  },
  {
    "url": "system-design-pastebin.html",
    "revision": "4bc7f55fbb77d3e59cc62eeaa2667291"
  },
  {
    "url": "tag/abstractmethod/index.html",
    "revision": "158216f9e55aaf5883a219f96421277b"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "35216a34a6479e113d4ca1ca2d75c9ea"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "b311297e6b33dd9995fe3e1556ea50b1"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "90bdefa39afc1d1ce154ae3c3b599a1b"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "b31e1ff47754754795bc009cfc60081f"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "68ac2ddbb11b7266d7a9fd8739e3d017"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "99a9710917ea598d43f69527d3858cec"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "3f1a2291d415a68649cf6d5160bc7edb"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "1d80cbc27d54d493277efbf388fd0140"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "c385d059f0c250b9921b941c3594e291"
  },
  {
    "url": "tag/GraphQL/index.html",
    "revision": "f6a7a4ce62f95b6e3011b12d55012018"
  },
  {
    "url": "tag/https/index.html",
    "revision": "afad9c317a56a3cb5f0228157c1194ee"
  },
  {
    "url": "tag/icecream/index.html",
    "revision": "caa47484d5fe6c69d4fc9f44d0fccce4"
  },
  {
    "url": "tag/index.html",
    "revision": "e0ed625fc655b408070696f641b0cc21"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "784ca61b06f5500500e5f678504cbb77"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "2a07a8f90c597d0b5d7c827ad2af02e6"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "149b468adaeeddfc182bff168a21f591"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "67501cc611233ad96a057fed6da53d3a"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "ccba37b9862565b0986aac025563898c"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "0456369b4f6535d0564dd5019653f34e"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "fbab9745242195a9223625daeb341ccf"
  },
  {
    "url": "tag/Numba/index.html",
    "revision": "32bd3c56588bb0922c16d5b48220f23d"
  },
  {
    "url": "tag/pathlib/index.html",
    "revision": "62afbcb577483a99a55cf7da09ca3501"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "a3165e329a87c0589aed5d94bf7d86b0"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "ca8a28d7f96f4d6c56e25f200bc0c911"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "a9ce9a9063fe885b65c18aa065c16628"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "be1b1d19de72e17450659a0292b8825e"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "8fb0d8254c5a4c71392b6e82d9b75bff"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f54771286336415d6a3c59680149ec19"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "36b921450f0a60d8d18c8733ad14813e"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "47a8ddc2a77c5224cdad5c13aa77ff00"
  },
  {
    "url": "tag/Web/index.html",
    "revision": "cb7263c7d8b9aaed439bdf096b5f3a34"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "927a43600931258b16396c8100044f5d"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "8ec842773791f539381d3d8198ce7ac0"
  },
  {
    "url": "tag/人人影视/index.html",
    "revision": "1be71a0a03ab8ad14470eb2cc98dc5b0"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "4d724ff7e27edd4ad0cdc048087fbc67"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "2e92cfadffef0ceab38bba514da43e27"
  },
  {
    "url": "tag/分治思想/index.html",
    "revision": "0faade0fe7ba04223d426aaa764fe556"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "d629c3fdbd9d60656948f97db3045865"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "3ad9d5db92a27ec15eb12553afe62b69"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "df83d24c1c0948dabeadec633ed1bc8c"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "02e88a155454f313e6cd5495eed3b21d"
  },
  {
    "url": "tag/命令行/index.html",
    "revision": "c4619546b1d4ee4f878e4eb5bc9eb91a"
  },
  {
    "url": "tag/回溯思想/index.html",
    "revision": "f018a21e08ca94509f83079f06a2e817"
  },
  {
    "url": "tag/图形界面/index.html",
    "revision": "607b2f51a93d1593af14135df05c59a4"
  },
  {
    "url": "tag/图片处理/index.html",
    "revision": "f9a9d4d57e089c2323c7f3418104e316"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "32d8487ef9814152f26f9f7b17ba0186"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "e81fab8c41ae8604c87d1544fc934743"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "ec083f5e06b4bbb3509842e774df5cee"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "8cad2d6a5dfabc4a75ef8330f65d6a2e"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "e9f664fe19bf65e3cc7d5e19290d11e1"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "c71fb5a41d51737e32ac196a1b104fe8"
  },
  {
    "url": "tag/懒属性/index.html",
    "revision": "93525aa3ba84a2359748eaecd0a2170e"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "edb6e33d8ee82027d2030c311c81ce6c"
  },
  {
    "url": "tag/抖音/index.html",
    "revision": "ad9bf1c19462a877cbed65523368b08d"
  },
  {
    "url": "tag/操作 Excel/index.html",
    "revision": "4daa74a6c2680d4a92c5a9959b2ec2e4"
  },
  {
    "url": "tag/操作 PPT/index.html",
    "revision": "e999e8133244cf8604ced263349a2e5d"
  },
  {
    "url": "tag/操作 Word/index.html",
    "revision": "d42ae2e478ea3535fefc7b3019ad4823"
  },
  {
    "url": "tag/操作图表/index.html",
    "revision": "2835d396982292af96411ded3737088a"
  },
  {
    "url": "tag/操作浏览器/index.html",
    "revision": "10db9703d29a074b4203a041e9729177"
  },
  {
    "url": "tag/操作邮件/index.html",
    "revision": "357a0eba1b81946ba219a41c397d8cbb"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "f8b140f73fcc41b70b37c18942f153e7"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "b5a6f4f10004e0531633056f19be62ef"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "c5b4d4fa14d8e2238bda4944f482c66b"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "3c7da76fe8119c15574bb27301467e6e"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "a78d76970bc856ffa07b66b54d9b90da"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "73507009db62c41bbc5c90d7c046d070"
  },
  {
    "url": "tag/电子邮件/index.html",
    "revision": "84a2fb1c351cb2344c6821596d5d37a8"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "41ab7c05f44009568d89711e0439ea6a"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "28d8d9cd1a34621b0be2502039cea757"
  },
  {
    "url": "tag/系统设计/index.html",
    "revision": "0ce3a58403af4895d35dcbfd73d00344"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "66437832121d497bcc6166138ea73bf5"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "98a72528d1d4cc7d8ff32d2e6dd2a25f"
  },
  {
    "url": "tag/解晰pdf/index.html",
    "revision": "f9f10e019166f6feb75cbe937443844e"
  },
  {
    "url": "tag/设计原则/index.html",
    "revision": "7b902be12ecf13aa3bee8813015c9221"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "84619f935ed227d928f6c3da6e4700cd"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "6b72025535d9cbcacd7b62f5003ef290"
  },
  {
    "url": "tag/起步/index.html",
    "revision": "8a10ff670cb9465cd951947937d52863"
  },
  {
    "url": "tag/轮子/index.html",
    "revision": "1f25ac1447a46f5603cbfac24ffa70b7"
  },
  {
    "url": "tag/闭包/index.html",
    "revision": "2062d8e661d658798c16a0e27a0ef6dc"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "087b22dd11473e84978c6b66e788f12e"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f4ce2e1fdf736c47f5605fb27d16ff09"
  },
  {
    "url": "the-bug-of-npm.html",
    "revision": "be20c6788716b89474d48c4925514560"
  },
  {
    "url": "timeline/index.html",
    "revision": "33f38c57114aa2150ff03e42522c321f"
  },
  {
    "url": "unique-binary-search-trees.html",
    "revision": "87686f7c3c553892f5bf41d5c0aeac10"
  },
  {
    "url": "use-github-action-in-console.html",
    "revision": "f0cdf6e3c4509d9ca3d6203c7f4e4e12"
  },
  {
    "url": "userfull-library.html",
    "revision": "28115858976eebbe94c3d11a5bda4683"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "4e92096baf215de3a2a5d75bb99687ca"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "1eb9495dfa1f08208bf8a80f55df36a6"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "60c23c52938948cf286e2c12da6470f5"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "b2285081c0c8dfad536db53fa07ed30c"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "2850f726926f602525f08c21fcbdb72e"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "d28cc1ed874cfdc6aa974faff242c207"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "56cc121f73789d1e3b0b3fdd059d0956"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "fbfa827859d9dae371acf1c6436377b8"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "e4595cc0ab23007f92b8c84b490b75e4"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "676372d03f2da11cca5cc16def3bd1e6"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "1f87b8ef498e895677a8c6ead3f48653"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "ff4f1c0a755592dc876b6e04b5b5fd36"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "0250c3350d989139171f829968723666"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "17a3b5cf977548816169f091610da9eb"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "19d4ba5d034f971be873f140197707c6"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "a4a57c69b65cd96a4f1f721e07fb9b3e"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "0eeab04021f86bab17de19d4427d20fb"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "ab6b7a32310842430630a635b74fd8b3"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "4d9c0a8858c6ec2e3ba6e3b97a04f184"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "f2328cc9efaf600ed5eaf9f4c9a4e54f"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "02f09a010140b4b51014448d98346163"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "c24bc2aa1d8e0b5ffe5224c9ac7f8ae5"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "68392af48f8217ddf369e6d80bcd1222"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "c97ca5414bbf2d1933e39b6fd8b76978"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "6372fd64a728134b57f199fb27eaa8e0"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "2a2977aa56c1e9759a684878e0c744f4"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "70bbf7951731810ca60b6e7ef178e2a4"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "49d132c93174cdb3b5d40743b0671dac"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "e697874aa5a0c482890658d433a21081"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "72f755dd9e11123a3ac775470f6896ff"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "99e943bc50b36879147aa1e29a11fba0"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "7369916265d0731041f930052f6aa760"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "90fa2b608401563febc80dc5c39b2f33"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "cab57a1fb6de697be33507659419aeb5"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "6641f8c7001b14881627c7bd36ac4661"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "347e8f4856413b94215a2824b609b56a"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "89918396d86fb38a3a48324753bcb323"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "63cfb229099c461fc04128ef3d12e35d"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "aaa0d42088229e2c4cd73c82fc4b97e3"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "74e25a7eae96aa3a1ff11807dd37bfba"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "d39460e49920902e2c8da04db339aece"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "062f082789734f1a0f52709af0b99782"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "3d9072b90fbe33cd92b52944f427ee65"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "6f2775f14c72c20132a9fbd552671bfd"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "10b98244cf6adb17a7691c64c5ad7d0a"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "9997ce0cfd8b3800b5b3bb2d9daaa20f"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "f17dcac0005454e52ea98d5b7b299d68"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "1ff06d1713a80ac6e56c27b5e14f42b0"
  },
  {
    "url": "views/index.html",
    "revision": "829c4cf5501440485284f3fb173eba0c"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "77d66ccd7c348873b890ab4da8811a5f"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "07f4225558658306510407a5b88ef17f"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "cbc699a4fe2e62b1ddb32424d2feb1d4"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "0d87033d809efe602f4b709dda6f3237"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "4bc007092a13ad278fdb78455fed3f65"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "9ccecab6fada709d78d85f52d7e0ef4a"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "12c6debf07d0932ef312a6d6ecf28030"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "7d848e088d2c9c5121fb570bd78c79e3"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "5587c66c2f8360fa21ed907e7e824e2f"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "1d119bda0ba2c962d54cef7845e32513"
  },
  {
    "url": "vue-graphql-api.html",
    "revision": "f084491f558ca13d001181bd084b1ea8"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "32586067e2efeeba1ab5f0a645aaef4d"
  },
  {
    "url": "web-scraper.html",
    "revision": "8fb260b1a9ede763c25c240de11a0d5d"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "b055eee29a87652dd7d453b56b17c764"
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
