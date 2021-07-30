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
    "revision": "23dba386572bfed056c0353da54b7e4d"
  },
  {
    "url": "404.html",
    "revision": "19211944732931041f5fc1e62a486618"
  },
  {
    "url": "algo-backtracking-restoreIpAddresses.html",
    "revision": "f9de60669a64c6444640ca8b75abdf28"
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
    "url": "assets/js/app.04816b84.js",
    "revision": "06541b4203ce94ab419256c102c3cbe2"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "eb88884fe8d6a02659f65ffbf6c865f8"
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
    "revision": "480cf7e72cb96f1be5d027286b3cc7f7"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "8d7017f9151412e29f1b106b40b3ccf3"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "ceb9e4532a2d3fcc05657f6a77603b07"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "a9e84ce6fcbd5389d5ab27669e37441c"
  },
  {
    "url": "categories/Python/page/4/index.html",
    "revision": "f4805c3404685b38410a30a68fb65bda"
  },
  {
    "url": "categories/Python/page/5/index.html",
    "revision": "85e4470cad95d037df07c9d0532d038c"
  },
  {
    "url": "categories/Python/page/6/index.html",
    "revision": "c35cdd8f30467666d75ae4534acffeba"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "fe9e1518dbecaa2a8678921fd33e6165"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c7e8e07c825fb9f8cf41aeb919885e11"
  },
  {
    "url": "categories/学习资源/index.html",
    "revision": "09e94e5f491c5130b2456b0a4ce677b8"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "d9aa75703f9c9865c1abe404515176fd"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "909f496af78aabe4ceea43249d42e120"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "b629115e1bc2be9fef9cf83251b682a8"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "7338aa14ad1fc8c0b1ff3b2ef4b9b81c"
  },
  {
    "url": "categories/电影/index.html",
    "revision": "59055b24adaf4f488a19a8a70c9753f8"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "31fe8c3b8ac8e478b2aa926b250a5065"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "25513f3ac10f32ce1d615148dc9d7e83"
  },
  {
    "url": "choosing-between-django-flask-fastapi.html",
    "revision": "bf26b2ac60894bb3c097a55d24c9599f"
  },
  {
    "url": "coveralls/index.html",
    "revision": "01b94b8eebf2c83b188d8c5df5d9a770"
  },
  {
    "url": "database-sync.html",
    "revision": "e294361458111510073e385fb553ff18"
  },
  {
    "url": "design-and-implement-a-custom-interface-alarm-rule-function.html",
    "revision": "194a60a7ee2b629bceca4ecf43517cba"
  },
  {
    "url": "design-principle-in-python.html",
    "revision": "6988603e0755dc8016b23131c1c08f5a"
  },
  {
    "url": "django-graphql-api.html",
    "revision": "00e2e56a65ae706b6ee2ace5e8a52bd5"
  },
  {
    "url": "django-interview-questions.html",
    "revision": "dd42b06ed4fd009bb4ed7bf18a2c71e4"
  },
  {
    "url": "do-not-use-print-any-more.html",
    "revision": "ff2c2651b5ff7768442c80f2890106db"
  },
  {
    "url": "douyin-video-download.html",
    "revision": "a5ea03d9a583ae49ce9011d10435f6ed"
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
    "revision": "f5ea35ad8f9df53da8ca2e4ce8475175"
  },
  {
    "url": "hello-GraphQL.html",
    "revision": "a50fe6e1a4870ad25a57c54f013ae271"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "30e2c6d2db96020e5b3eb8e61ed53381"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "improve-python-performance-by-lazy-attribute.html",
    "revision": "ff30aec975f3f032faab1446fdfd4a38"
  },
  {
    "url": "index.html",
    "revision": "a30b957ca59b7bb87fbfd74139efbaf0"
  },
  {
    "url": "interview-questions.html",
    "revision": "1783e6804ae906f5b3ab9849e555626f"
  },
  {
    "url": "not-use-recursion-in-python.html",
    "revision": "e4cb624acd85a917eb71c16f4c1ead2f"
  },
  {
    "url": "pathlib-is-better.html",
    "revision": "2b24ad57e141d6d6385e098ecdfc27c7"
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
    "revision": "a2024eb1df0731e1c5ecd16bf25139ee"
  },
  {
    "url": "Python-can-be-faster-than-c++.html",
    "revision": "c8325d8e4a2667741b3134f2d4b46649"
  },
  {
    "url": "python-command-line.html",
    "revision": "3bf343ccfdc86ea937c6fc9978587502"
  },
  {
    "url": "python-email-on-exception.html",
    "revision": "5e10c1f3c75fcdb6616e895f26765836"
  },
  {
    "url": "python-gui.html",
    "revision": "b1e1410206896119ec724ebb1985c139"
  },
  {
    "url": "Python-play-with-browser.html",
    "revision": "4386975f6081e094ccc3b2019556df2b"
  },
  {
    "url": "Python-play-with-chart.html",
    "revision": "9c56001972544cb0ed8d62c5c99d1f49"
  },
  {
    "url": "Python-play-with-email.html",
    "revision": "910d25a53e5efc4fd8ee6e1af0c439f4"
  },
  {
    "url": "Python-play-with-Excel.html",
    "revision": "9430156dc1b39f41f5f2efab2285f8c3"
  },
  {
    "url": "Python-play-with-pdf.html",
    "revision": "6174184d29e7f650e1eb7becb48cf37e"
  },
  {
    "url": "Python-play-with-PPT.html",
    "revision": "000a42cb407afd836b8f9703be600805"
  },
  {
    "url": "Python-play-with-Word.html",
    "revision": "e660bafd7325cbe49e0b18058f871f0e"
  },
  {
    "url": "python-receive-email.html",
    "revision": "f2c3d9c76293486fc334212e55a9b1d0"
  },
  {
    "url": "Python-startup.html",
    "revision": "55736db80bdc8baf715fcd0ca5147599"
  },
  {
    "url": "search-socail-media-account.html",
    "revision": "f5a2f8078ca453e94c86f871bdc43cde"
  },
  {
    "url": "share-movie-download-url.html",
    "revision": "97232a1a38f17d0b0f08c781c04dc724"
  },
  {
    "url": "share-python-program-with-people-who-don’t-know-Python.html",
    "revision": "28f7c008356ec4cca9750572aa3a44a3"
  },
  {
    "url": "system-design-pastebin.html",
    "revision": "c7369331724170b19e8addd1ad3a2993"
  },
  {
    "url": "tag/abstractmethod/index.html",
    "revision": "29d561858a742571b26864ce36baaacf"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "af64efd0252fc5626d1bb6d536314777"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "9f4327111a84f0e9db5b240ce4627893"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "33f7e17341b75e2aeb3da7aafb5d4510"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "f95d0b34465f7453248486e871ade1e0"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "9c841b668b51456cf961b9ac5aa8968e"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "b972911fcd165cf3cea9da17cd3422c4"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "2f24d794f09439d812d3412d9a0e57ba"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "347e97ea753d7f938d57129dfa45894e"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "ca1fdbb01df6c9a01f5a6dc9607db16c"
  },
  {
    "url": "tag/GraphQL/index.html",
    "revision": "2297d4978f34340ccd2506823f697bd9"
  },
  {
    "url": "tag/https/index.html",
    "revision": "4f25516216692aaed8f1c6f5fbe07001"
  },
  {
    "url": "tag/icecream/index.html",
    "revision": "8347464f06fc9d61c36583ef9ac16173"
  },
  {
    "url": "tag/index.html",
    "revision": "f88c863f4d8e355df805c8af947f7848"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "0a5bdb186c5408038fabe437646a418b"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "3562bc6f448ede03c85a45a2b343cc23"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "b07242d67ae426e3cc123858465a7d4e"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "43740ea49d476851b566d44dd889ba9b"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "e04c2f7cc4c98caa0d0d742cb876dd4d"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "d572e932c09dc07a6c1225ea51bdfb29"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "70adef3aa22b60dae6c4d3eeb50ad542"
  },
  {
    "url": "tag/Numba/index.html",
    "revision": "51a028f6567c721cdc9b9382541d66c7"
  },
  {
    "url": "tag/pathlib/index.html",
    "revision": "d933370c89611faffba2eef9c428a88c"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "4b7894febc9c213f4aec4b239bd2774f"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "c149c6a21b3de28d46feb58733bb4ebb"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "44f105fdeae7aa73916494861c1d929e"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "8e8e2640f24bdfe5a7ac847151e75c37"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "b950c680683d0806fc88b00a27d0bead"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3be4ae7d32348be06571d928c38ec708"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "828106c2b691320842a994965081aa9b"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "f3f293f93788569e5e90952bb716ac7e"
  },
  {
    "url": "tag/Web/index.html",
    "revision": "682d32e486ccfe5cb13b9ae2bc1a1520"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "f2e0399ac0d96bfd70bd29dc906501a7"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "be425d5a1e3787315eb92f3b207d73c3"
  },
  {
    "url": "tag/人人影视/index.html",
    "revision": "fc8bbe2f40682d0834b9a6128a537f46"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "56970965fb7e1f17e61b6a1538f62222"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "6648e3a796bd608f1e270c368af138cd"
  },
  {
    "url": "tag/分治思想/index.html",
    "revision": "ffbe9226293de880fb4d7cd26c7023b6"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "5a9826f434ebfa5c8593fd0dae9cf1c7"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "39bad6938ecb43bf99b52284b86989f4"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "b9d7b54239482f744105ba0e17a37267"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "0bf5c681cfeeaf86d462088b67324740"
  },
  {
    "url": "tag/命令行/index.html",
    "revision": "350421db0978a175c8da6ea8f9a7dbb3"
  },
  {
    "url": "tag/回溯思想/index.html",
    "revision": "ce9541023c7ccf674a2fa0a6c7562568"
  },
  {
    "url": "tag/图形界面/index.html",
    "revision": "ca3ba89cf882edb0018bd5f0afefe3e7"
  },
  {
    "url": "tag/图片处理/index.html",
    "revision": "5228607c3b2c872699e6c53b40bd7e39"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "1e288dc7d5f0d7f124f3a3f1d26f0781"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "870476fecac9795ce5d6497e8c31bd41"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "ed330ce17bcb0f40ade9cb4b0f14fe10"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "e02b89d60e127e134f6ae4d8a76dd7cb"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "6a948deec312044c65ae96b8ebbbcb52"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "a634d256ee0f55ba578ceacf284565a9"
  },
  {
    "url": "tag/懒属性/index.html",
    "revision": "69af6d15851d6bb714d5ae3839786ded"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "ed437e24fd70719b8bcee25bdddd6f22"
  },
  {
    "url": "tag/抖音/index.html",
    "revision": "218cdf8757d7babf4c37b533425909dd"
  },
  {
    "url": "tag/操作 Excel/index.html",
    "revision": "91f7dbf33986800064ba9f690fde75eb"
  },
  {
    "url": "tag/操作 PPT/index.html",
    "revision": "3e7c426ab923d264181c2e3187ac6a64"
  },
  {
    "url": "tag/操作 Word/index.html",
    "revision": "f30a84d278144858c68553caea9a6f73"
  },
  {
    "url": "tag/操作图表/index.html",
    "revision": "a663c7d97cfe3e208ef4f4cdd5e4a8aa"
  },
  {
    "url": "tag/操作浏览器/index.html",
    "revision": "7471e1617424080fe7adc15e97a3fc8f"
  },
  {
    "url": "tag/操作邮件/index.html",
    "revision": "6e47bf026da03527165a762c6888af68"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "99d05455de4b1bdc5d46c225404c2688"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "1229a72b8d1f8e592e4c97d676839d87"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "b2c9a9e138204701f298df539e9132c8"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "f7b66be3b611e41c0d8aa801fc81f9e5"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "f0d1539a73ce86e1360f8d82266f186c"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "e8f5c87d934e126a702e24a817f7cd40"
  },
  {
    "url": "tag/电子邮件/index.html",
    "revision": "435dc3982c14abf04ee3b0cd7be718e1"
  },
  {
    "url": "tag/知乎/index.html",
    "revision": "5c2770eb901d1765ae201626edda794f"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "8f5f32a1fdb1fe8a34ac0bacf0240d9f"
  },
  {
    "url": "tag/系统设计/index.html",
    "revision": "e8f2034f502bd8e85d8187db88d75b1f"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "39eb0c97b30d06bf4a987857087ee70c"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "dea9335cbdcd1e87c98a0a9848e87b38"
  },
  {
    "url": "tag/解晰pdf/index.html",
    "revision": "7b15bd01929aaede364931554a5b9463"
  },
  {
    "url": "tag/设计原则/index.html",
    "revision": "83485fd914ce3f76747696fb38315685"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2ac8511f48892566ffe51d7fe73b3c0c"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "3922b90d3ffd373bbe203becae39ea68"
  },
  {
    "url": "tag/起步/index.html",
    "revision": "9913eb1a71f38164f0ab1f15cf480e73"
  },
  {
    "url": "tag/轮子/index.html",
    "revision": "6e20cf1bd643f4c5de4885df09a6b2a2"
  },
  {
    "url": "tag/闭包/index.html",
    "revision": "a9a23470557c4178b39401c76cc70d00"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "5a7cd8990d1159b35aa89453e8fa828c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "1e38f3e4ee0c0cd95afdecd087e19010"
  },
  {
    "url": "the-bug-of-npm.html",
    "revision": "df73ffcf1062583ec22aa1683db97850"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9dcafef9ac63bbac511fd28e0aeb592"
  },
  {
    "url": "unique-binary-search-trees.html",
    "revision": "6421c8208b5e8d90105fd0bc06c7a874"
  },
  {
    "url": "use-github-action-in-console.html",
    "revision": "16fe465042aa938f6258060f3e9e20a4"
  },
  {
    "url": "userfull-library.html",
    "revision": "93560b51c6cadd65b8730b2a4a59cffe"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "dca3942be5aa3c928ecef997fcfda915"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "96f2d9b590bb5748f606c93358715b51"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "f9f811561cff67962eedda05c7761e00"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "c33cec04d27b896f26b0888c4f510c5e"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "6f76c88407fa39ba622ea03d7539de68"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "0fa24c2d333f1847dec5347e56c86e66"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "f1b1d9cc2b51118645a2b817c6fd53a4"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "e3d826bef6f95c7ab4dc52e895bdc57b"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "aadd47072942d645d2a26958bba6883a"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "0083c678d97126b36749ea1978697b57"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "8973426b447f0b0df4c45105bbf1c920"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "dc3c8b234b36c41c89f30b2b9bf3c2f6"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "d85a4bac8530a7dd66411fa13635b57e"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "7a19dab2a1f5f2b9a2433367e390f2ee"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "a022a03de63fe625a287e55b6239d777"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "4d010f3abec0f6f6b4f09110a54e7a50"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "106b9d7ebb436494011276336cc8fb56"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "44415e9e07847f6829fd2a7133b6290f"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "682946922d175a8cb6062dd47329192f"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "bf90833a9dd58c5144fcff30224ced1b"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "814e9310df183d53d9bb874f1fe37dbd"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "efd4259144bf0749ef4a89008cadd296"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "729704138fb18b419afe581d9d9ec685"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "667ac65058a03e011545f6ba0b140d5c"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "9fb3c5d8234be55e7833dffefca71f78"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "5ed357acfbcc6a8c9fdc8aec2a8263fd"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "809acb99aba9a4101125a72ff9b6b79a"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "7a0f03e3310f536bdb039aa9f762a9de"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "4aee164dfb44af1d0e508649ca447925"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "8fc77df0b3b866501b485f6d2d484dd0"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "c7e9169f9430a29d423a3e4ad43e9080"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "5cbc418295e64f89a4871deb3f139bd3"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "d701d00607095adf100d9dbb924cd5a0"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "45dd49f491a5f43afa90b649174166c4"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "97861c019da4199cc8ec71ae0acde86d"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "ea22770766aaa345c33679cd0b7529ee"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "c2efa6d29256aeb4b2dfec7033c332de"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "7d079fa70b03e2cc497ab6522794d80c"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "bc0775fa558a5787fdfdba7de2cf3d98"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "2c3d30459dacb6a81fc858ac1ce40ad7"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "a61636570c42732edf7db32dec889d64"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "54857d4118110ba1bc1ea6a501cdd117"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "16ee9975040e3308b0673b08d2722297"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "22a79f9b41fed563de5bb7cb1d43b3d0"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "710a3a8cbc0dde8044ca79ea459d9932"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "63cf062bf89b447f6e2d4b4fba6ff5bd"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "61402589c7c616606e2c84b32303c812"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "f71b38272d969c26ffc7d1595ee4ada8"
  },
  {
    "url": "views/index.html",
    "revision": "f45094b3b499b4385fc8c54a924c9550"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "89bcfe562f34ed96b02ae283459343af"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "0447d586aa665240295a4d57ccc22170"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "ce3f3b507fd7fe513a5531e5293140e6"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "3ae19545af3a7e7df7a07c41d654aea6"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "bed863783c9629a609689e5b67ee5264"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "5e71ad102eaf7df25519dd04c8866cdf"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "4c87de6872d05df029939f2a10103d36"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "565221622f7524eb287e0f86f4d55027"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "90f854735470511913b05fe1aa4084cd"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "5d727ffceb4755b20a0058e286ff6aac"
  },
  {
    "url": "vue-graphql-api.html",
    "revision": "3d51ba3c1f6c22fd8d4b68fd77d46fec"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "be1c49d55a929633cb3f58793a609626"
  },
  {
    "url": "web-scraper.html",
    "revision": "7c9c4866c09c3fd588fcbcc38309ff05"
  },
  {
    "url": "zhihu-video-download.html",
    "revision": "d3f9ee8cb689eb12879e5c442ba1faf5"
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
