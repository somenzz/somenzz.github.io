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
    "revision": "3368061d2c630738132740048c7baae4"
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
    "url": "assets/js/12.953a59ed.js",
    "revision": "c98e1cd6f8c2f73d3613dafa554d6ae5"
  },
  {
    "url": "assets/js/13.f5cfd093.js",
    "revision": "242b709936768edb740368b5457f0042"
  },
  {
    "url": "assets/js/14.8f0aec76.js",
    "revision": "752ae881cbeb10d95a7f6d84bfccb90a"
  },
  {
    "url": "assets/js/15.6a456965.js",
    "revision": "e45cb685b3e767e31d6960728f783a66"
  },
  {
    "url": "assets/js/16.d45c4c1f.js",
    "revision": "635b28e5f5130e23e5338fe70c1d00cf"
  },
  {
    "url": "assets/js/17.ce3be270.js",
    "revision": "d6351da45c4d2d48bc096899cc28c27c"
  },
  {
    "url": "assets/js/18.28276ad8.js",
    "revision": "e03fb2e1bda0ba20f7b200d7e16d5da7"
  },
  {
    "url": "assets/js/19.29695a12.js",
    "revision": "d59823d5c3ffcb7d46b3b2b051085916"
  },
  {
    "url": "assets/js/20.e315d088.js",
    "revision": "50df93803b45c384e93f11bb9a8ff01a"
  },
  {
    "url": "assets/js/21.a08b5c11.js",
    "revision": "df53422cb57abab214a8728f2c94780a"
  },
  {
    "url": "assets/js/22.dc68a746.js",
    "revision": "a65fffd0e56496f26545cb92f62901e9"
  },
  {
    "url": "assets/js/23.cac3013b.js",
    "revision": "a057e12c64b09983b47354181bf4ce87"
  },
  {
    "url": "assets/js/24.36d417a9.js",
    "revision": "ac9ad712ee0fd2793d0c2a4ab967c566"
  },
  {
    "url": "assets/js/25.6c99f046.js",
    "revision": "87fb28cd141eb7c6c70d00768bccd422"
  },
  {
    "url": "assets/js/26.8106da52.js",
    "revision": "ab414200099bc4a0c7d070a0de85cd9d"
  },
  {
    "url": "assets/js/27.ad821d2c.js",
    "revision": "f42197fca64b3704164a05cae335ca65"
  },
  {
    "url": "assets/js/28.bd7f987e.js",
    "revision": "5cc6ef923e86e5773bd829e452b1dbc0"
  },
  {
    "url": "assets/js/29.7994915a.js",
    "revision": "e4430e91a8d612c7a9bf66ae4f3d3b81"
  },
  {
    "url": "assets/js/3.64157d4b.js",
    "revision": "d237e59c747a74ce792691ff74331f64"
  },
  {
    "url": "assets/js/30.df71998f.js",
    "revision": "89f4bbe4df14003101e8600e3f4a473b"
  },
  {
    "url": "assets/js/31.6158e6d8.js",
    "revision": "606bcf54005c31f3cc6963ac1c0c8963"
  },
  {
    "url": "assets/js/32.babe7563.js",
    "revision": "c5f59b659e9838fc7a358ccb7788216c"
  },
  {
    "url": "assets/js/33.23fa6c27.js",
    "revision": "9fddfbd365f0fddba26efd0a312252d7"
  },
  {
    "url": "assets/js/34.6392b139.js",
    "revision": "b105d1ff08879f69ccb91a2dfa84add4"
  },
  {
    "url": "assets/js/35.39ad8251.js",
    "revision": "e3a9efb5d97cc937c294181caad999b9"
  },
  {
    "url": "assets/js/36.6a1f7413.js",
    "revision": "5b28feecdf1bf3c22bf58e5f186066cc"
  },
  {
    "url": "assets/js/37.ff844e33.js",
    "revision": "93eaf5c8c98c149288a18245ffa9a9fd"
  },
  {
    "url": "assets/js/38.289d8412.js",
    "revision": "424d5fc891f28b2689f3a81c1542cbaf"
  },
  {
    "url": "assets/js/39.38cc6de1.js",
    "revision": "2955fd161af16be724c608504bb8ad1f"
  },
  {
    "url": "assets/js/4.dab4d0e6.js",
    "revision": "bcf462dc8302c96863f9eed1e209e982"
  },
  {
    "url": "assets/js/40.5ea5065a.js",
    "revision": "447511a6d6c96d71263850d336df5b54"
  },
  {
    "url": "assets/js/41.d6d66b16.js",
    "revision": "01d3b4de0223dcefaca19dbdcf366080"
  },
  {
    "url": "assets/js/42.f529d0f2.js",
    "revision": "e391694a3cfdaeb5c216d9a7659a63d5"
  },
  {
    "url": "assets/js/43.75b636ef.js",
    "revision": "0c6b8c0c5f36c96be54f1f57a8edaa70"
  },
  {
    "url": "assets/js/44.c4f5a34e.js",
    "revision": "340c4b2df167f1ef9564c3b6efcc7409"
  },
  {
    "url": "assets/js/45.93d48ff3.js",
    "revision": "f5a933f3ffc19ae426a74ab974913966"
  },
  {
    "url": "assets/js/46.36a705c4.js",
    "revision": "b1245440f2e46611c4ac2e8409434a65"
  },
  {
    "url": "assets/js/47.24efbd57.js",
    "revision": "db9f3e72a422f8514c492b023aad2d60"
  },
  {
    "url": "assets/js/48.217cdaff.js",
    "revision": "2084bd8b3d79eec35f637a33a6d02199"
  },
  {
    "url": "assets/js/49.396895cb.js",
    "revision": "b4b0b9f4b9a9c37f35b3519f6b6d5694"
  },
  {
    "url": "assets/js/5.8d151761.js",
    "revision": "3d3897bf9745d2c0f69d44ae4049dd3d"
  },
  {
    "url": "assets/js/50.18755600.js",
    "revision": "4f568fbdcf4c8f67e132b5c64773c8ca"
  },
  {
    "url": "assets/js/51.9f7e3bac.js",
    "revision": "e9a87f7bcd0183b98c9d200c26437933"
  },
  {
    "url": "assets/js/52.7804f9a6.js",
    "revision": "8229e4a5b56278a8e20f3917c38c4ae4"
  },
  {
    "url": "assets/js/53.1b5eb296.js",
    "revision": "ec9040ad377d3e1c21f09dcc34930382"
  },
  {
    "url": "assets/js/54.1b54cec2.js",
    "revision": "b7c21d030cd328a4d1259819a84c3574"
  },
  {
    "url": "assets/js/55.9d61cca2.js",
    "revision": "6bf5b0da9d3807bd3e12a9aaf7a04c9b"
  },
  {
    "url": "assets/js/56.2e83f7f6.js",
    "revision": "d2edc58c06b0223944514b0b168a846d"
  },
  {
    "url": "assets/js/57.828e3521.js",
    "revision": "f5d40d2ce42269b26e769a22a108c204"
  },
  {
    "url": "assets/js/58.18f99701.js",
    "revision": "e5a5bde0bfb12beba6f532453be08237"
  },
  {
    "url": "assets/js/59.b3e94904.js",
    "revision": "aefc4ffde9b04d1a1d9fef24c49b30d1"
  },
  {
    "url": "assets/js/6.a801029a.js",
    "revision": "d1415cc3bea0e956b20646c4dc946f4e"
  },
  {
    "url": "assets/js/60.46a3f874.js",
    "revision": "67fa925c59a5324d38709ac34d0d0347"
  },
  {
    "url": "assets/js/61.d6510ed3.js",
    "revision": "d7f267032e12868d122ee70892bc5f4e"
  },
  {
    "url": "assets/js/62.a9f36457.js",
    "revision": "5b3387d0a2301ef14f7c6678d481a3bf"
  },
  {
    "url": "assets/js/63.14920af0.js",
    "revision": "650e7b05671eb4693a3971f2d117abc7"
  },
  {
    "url": "assets/js/64.a9aae3f7.js",
    "revision": "6ae067568f6856e373a54041ecc7f458"
  },
  {
    "url": "assets/js/65.4becb1b4.js",
    "revision": "8030f6485686b60b7aa4b40716c092a5"
  },
  {
    "url": "assets/js/66.771407ba.js",
    "revision": "fcf54d96fad0ada60d07a7c2c0c4bf44"
  },
  {
    "url": "assets/js/67.adba7acd.js",
    "revision": "d28b42f9c543f7eff3b85dfb4d4bcb03"
  },
  {
    "url": "assets/js/68.f4b3f3aa.js",
    "revision": "7cdebb8017885edd73af8aa59b6cb4d2"
  },
  {
    "url": "assets/js/69.764980b5.js",
    "revision": "c71fae833319497b52f52787b4d34fa0"
  },
  {
    "url": "assets/js/7.393c2a89.js",
    "revision": "9bc0aa25cb05029122ff0d4b9f206762"
  },
  {
    "url": "assets/js/70.6cb701f2.js",
    "revision": "be4ed833b37da694b37f72950bbd9abc"
  },
  {
    "url": "assets/js/71.a6a869c1.js",
    "revision": "b228577122c24fb58fcac1f8aca2d4d9"
  },
  {
    "url": "assets/js/72.b197a9b3.js",
    "revision": "b4edbdc6a813fa1b520054d69d30cd05"
  },
  {
    "url": "assets/js/73.a664d40d.js",
    "revision": "e1f2e316b06ed62119d2b3ac0a976512"
  },
  {
    "url": "assets/js/74.aa0c929d.js",
    "revision": "e406bec1000fded35ab74c11789a5f2a"
  },
  {
    "url": "assets/js/75.02b41d09.js",
    "revision": "aeae3d898e740e6aa367f9a191e0c128"
  },
  {
    "url": "assets/js/8.f5adbd57.js",
    "revision": "6a82fbf741e703391b0f731828a4c90c"
  },
  {
    "url": "assets/js/9.0c615a99.js",
    "revision": "854d608b519e96d1978fcc60090927fe"
  },
  {
    "url": "assets/js/app.474c5f85.js",
    "revision": "7fb685e02056e25f33800263f51a3256"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "694163dcf87f61874aef06c6817050ce"
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
    "revision": "9df0c2c035e00a36b487696ca1b15d8d"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "97c30dea2a0bb65bfe2b9f049e38b5f8"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "c28e59a085b21cd1b56cdf165a3bb26a"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "1c3b92145d45611b6bd2d07b242c70c2"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "fa9c960b0e801d9f46a1aaa093243d2b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c62e75de34f62940db6ee58ce79efc30"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "d18632aec1fc6c7aefa538b116546195"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "987fa1f19f678e064fcf1c7dff24a369"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "8982b6eb5ee190200d867adc324b0cb5"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "4f992ef1f23dde866d7d54025e2ef234"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "8f9fd0b1815e8e0c2443726d6e7407df"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "c59bc30e834d3d5fab5d5863990dff12"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "5338e0268f29c25952664f18925b39ef"
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
    "revision": "d242736559ff0969be98a49bef879453"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "cd559514de0f74c8fcb9bfdb238e2b83"
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
    "revision": "a0a37160b9fede5359b1961dfa6bd86d"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "5cfe69aae7180be3f8f0fbc47c899f8e"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "33dd9ae022a8f5aca3e56cebd63fcec2"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "6ffc06193f27edf2eaceb3dd62928f29"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "071b46e19b238dc798245e4a37fb407e"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "ea12a81f9f78d44db0c960d5235148e1"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "dbea48bfdeb6721da1688da435a1706a"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "1b896df1957753f10b91701e1eb02b23"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "a7f5741945b1a3aacabe0b6c254bae4d"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "941936541d440fae3d1989b2c585d59c"
  },
  {
    "url": "tag/https/index.html",
    "revision": "4236a8c25349b13d0c6f5aa772954f59"
  },
  {
    "url": "tag/index.html",
    "revision": "7de0a3a76fd27fdbd669564e77a9d717"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "893e6355cea20e8e232ce2e612805f7f"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "d9a841394abe8a47219543aa77100c4f"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "bdbdfa9f78edbe6e8bea8a6965724ae5"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "a3e87574e81398c404dd2d8288436fe3"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "e827a026925a2e9c0bc022d2f289c324"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "af19e1e6294e7c9718ca7d5f4b3b4ebb"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "fedeb55e7b14e951234d02bd595369ef"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "d33816a773fbabfaa8c73adba21f99ba"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "002eabd0e44def08e0cdf64904d79e56"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "18312eda8f1dba2daed4bb264feec044"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "bff56ec0fc984e2765728e473d6c3a94"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "be769c2056f8639586f2395be3a2d522"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "43ccab391b6570c798e22dc298b6f783"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "a9704c6403852aaa228183097bbcdfb7"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "c06048926c2172456c1d3d185d0bed31"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "bba05ff46df72046aecad4e3f3a1be2f"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "f57359b664e7dc95367055b5a421b91f"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "e2b549a5e88b511d38e5047c65d5f8e5"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "50772f1386c221e712ca6179995d0705"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "13db5ae3810d9aff120cb5170d43275d"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "138ba1dba9b981b00a26d29ea3fb43fc"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "8d5b72ba50894ec5af8364131de1e15b"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "80fbac68df58fe6324a4f456298ce5cb"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a05bad098d0fb240da901eea21f3f94c"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "19e54e6131c033bcc71f0531deb0f1ba"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "e4831ecd276df6642487ecbac4dea43c"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "5ce95893045de47da51951c16a6bff51"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "262065e217239a1897aa74fe7be98ef0"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "c31a82d1025f8f722c2757a779ad0bfc"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "4b533c116c2e9b2417b4f6e71fd34b64"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "e7a339062315f5bd20e7693b7e459839"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "4991fc9a27617ec06c33a31594bbc904"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "25f2f276f5e886e9a77f9d448cfea776"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "8254c0918cb1929d6602806e1d11ebf5"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "9dbcfb2a65910b6366ec1d56e0b6ce8e"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "ae09c47b1b3cb209ed15942ae4ec8366"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a8da098e7bb07f3526acbc7c08060e2c"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "7a296308eda55859ee82b02ec1ee9390"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "666eabb7a43136cb5959cdb30af32907"
  },
  {
    "url": "timeline/index.html",
    "revision": "a4a0ba541286ea10cc85b3859ff5e0ed"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "63401b0ec6f422831cb1f6bd1e20a39d"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "ada351c2be8647430733410ada780823"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "715bb8b54650b4a0ddf9afb88a356288"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "5d96cb01581b510a1a6b45138e7d64d5"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "af4f8cea8112ee475a23d1e3a22724da"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "2e99004b42cbe999501d1fe6580fa9b2"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "91cf0cc7828c289af7c5e316850512f4"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "0f0e966e573a2b77939d5734c87c3f57"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "7e5879913afe77e91063b25f5d0de1b1"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "2f00945b7ed94c465c618ea56475f311"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "3f9193534afd48c02f702903aa58168a"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "9dbbb7117eddf9be7bd9c11ed3d22975"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "254efcf70b8f6fe4ffb9c6c8bc042296"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "5f181e52c589b12d877d853e95770762"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "eb2a1c01fcdcdd7802b31892ff3a2b3c"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "64146fc0b109cc11f70f7e79ded6225f"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "bde64cbf2ae7692210a92a88a1dd0eff"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "8661b473a1a9608ad04fa6d8ab414e4e"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "11aa82da59b94a09ba424ec085f079bf"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "a1bf24ddbfbcc5d81d5fa7b4be5310a5"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "7b27cfa72be0c5720688688e530ee965"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "f6bd138aa7216548ed50b56e916a0059"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "21d9c6fc87156b2abccb5c5456fc0ce0"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "e073494d1b1c3ec94cd647155f4c4c5d"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "28e44360107dcefe6aed1c53298b91ee"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "24c5ee03cdb74dd71691338274be868b"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "ec125981c6911e989f7ee6e90c8de169"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "8a282deb3c487c3b3cb4618f35d2f592"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "df21b9f1b0a257add0557aabbfc416d5"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "0c8ba4adde225c761a8ba82e52bd8341"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "5ca9c6b6523a0ed55e1a2d9129af90a1"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "a185a4843135ef1091dc96650b1add5d"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "626c500c66fea1f693cabf7e96020e66"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "62773f98a7538f3f43077f5c4bd28bf4"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "c6e777e6dc40a5223290e5597b9323ca"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "cd69cbcbaa44e65b670169f759a7fe94"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "71602e2a6456941eed0526cc529fb241"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "8c90aa4808a00573203082859f550237"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "cf4f84516eed15280da8db4f6b748d84"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "68afa936144c4506194d56c099de1229"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "be22676e166ea306ca516aca8f3d6545"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "d63733ac42603a7580faaf357b49fd93"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "97d3acf613d753816b77c5e7a9d3a510"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "341fd007cb63672ff7b698e8cd03c7e4"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "d4b19c459a2ed2a35a677b1cdbdeb324"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "268b997fad51e9fde262d40176c208fa"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "e6727c6ce191a953aa98ce715c355caf"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "3e22d4ddc7b0f55a39936424e4aceaec"
  },
  {
    "url": "views/index.html",
    "revision": "ae7c372483e6db84d3fa6d129e4a9fb7"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "02a53371e112f988433d80df4d202251"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "5dc7a25beb02ab610667c7e74e4f367d"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "b1d75dec164647be745152629c33be78"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "ab444de9c15e4da8346c5fd7595a48cc"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "95329345d8ec912a59c2f9ea5e3c2738"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "7c64d53b165d36275556ca48af6e1c38"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "8a051eb7137388af1e382cc32bc81cd6"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "4e669d186cd527588c109e728b852cba"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "c2e0e2fb55da714a20071e4332b7fb3c"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "f0f74643a043f499dbd86fc51b26a7db"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "bfe30bf3878645e13430b30e85b79837"
  },
  {
    "url": "web-scraper.html",
    "revision": "247c63f1edcbac61bf80b9f30e47c145"
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
