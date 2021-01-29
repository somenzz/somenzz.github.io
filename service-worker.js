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
    "revision": "adf79c9ac601dd82203bfd8210048146"
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
    "url": "assets/js/36.ca86a7c5.js",
    "revision": "a8046c50c95b3174a2e6d87fb3d28e93"
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
    "url": "assets/js/app.406b7bfc.js",
    "revision": "368ff553e45020f6c4127323a80aa268"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "700d1a995feaf428cb4a77488bcd5b27"
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
    "revision": "60e2da5ab07a1e75387e795940acf0de"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "d5a1335414159f8dd35f69fe0d457787"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "1684f115d2581ca214d2ba5211b87e21"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "774377bbbc641b9646276901c54b4a23"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "7c917fbd940669d2976f8819943e774e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "466d520c51483227ff263f8793b21215"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "ba96db246523b895c9fb8c00e38d8db7"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "68040f74b6e876d9259b2017fa92acfb"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "588f52f695aeca5c0e078cee5d38df35"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "35869bf23b838adb8b4bc1af811aaeb0"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "cf9aa224b773b16709b3c5ae9b9c6793"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "fac2cd4ee8294f38d5c0902609886a5d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "d1847df9340217519f8e53078b2acac2"
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
    "revision": "d7413d5ba0ac2194f098980e5acae69f"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "4c1e847849b80b62f9a7130d45289353"
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
    "revision": "5c5f556cca0ca0f4fbcf3d9bd12473df"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "8a90ab06bf11750bef5908e4a03f2571"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "dc1d5364042296f4d3b209990e4f973a"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "e52781bd17ad7c868db0c361cae33e67"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "6aa61a2437ba3b56c4301e9cd701e440"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "2d656622db29f621fc417cb76369c26e"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "22c6b2482849ee6a3fc60f88a62191f7"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "f554d2c4d748ff94cb9a403313abe3ec"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "42497698475c73a252840669d8a41359"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "6581f153c987fae741d01ebd7402d313"
  },
  {
    "url": "tag/https/index.html",
    "revision": "31393f4b191f00db7066f63da8965f2e"
  },
  {
    "url": "tag/index.html",
    "revision": "602cd7847eaa76ea208c77ab952304ff"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "85743980f273621e537a6911c8a45864"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "705f98ef0136df909e4b5f48c26f9dde"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "0400c616775b91b94aee29ca406a9136"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "90cf618fee7b14dba040112b5408a0db"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "607b7dd061435b5573408dc0e5732161"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "3c880a83319484a080916a61e74569f7"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "f45b82c368675b60de577a706578219e"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "47b893fad68973e4150a82834a8a5e6a"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "ce7637548f065ee349ae388dfe405b14"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "f33d11a51a69c72abaf2c8ecd8cf87e7"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "ece5a01608e1b08e8c66b47686bee5cd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3b3b6878343104463d0ab02e4e56296f"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "4f37f6c397ee0a063d07d64bc5e4b6d4"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "68ff4fc6b7a1810a0e2ac2c24c4338f7"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "9f08477945bccde33bbdf8f5f29cf03f"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "c3e7c8d099858535784734d53687c984"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "e2f995ce9099f10ea6a3b8efca4748fb"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "216e87d6081948532987287ca97c00b4"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "a48974b314fbd2286ada1f2a5862cc12"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "d4476fe353ccab5279a146566135cbf4"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "754b271f6cd2d99b5aea577cd6605879"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "a4dae56d5211dfe2e20ce30ef468ac01"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "660a0b8aed78e672d5e67f076d87af81"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "8d7f20df917789676d5180e7b59b55a0"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "b73c2ac96612141d9d42abc21d89eaf5"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "16c330014a84ff3411cb47906f818c44"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "656b406ff4019538ccdb9af630a9eacf"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "cf28e898b98e54c76d2999e452fec8a3"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "fc879c510f146e17b6661708ac5664c6"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "3865797c7f8413de533377a84d371bfd"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "d3e0ebdcf0ef5be10869b8db38ea6c5d"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "38e9ecdbe3e58240f2e57d0fac14752e"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "396bd6eab5a213e5d7815b848bc2155c"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "70a63cff691e48e638688f15cebbb266"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "b7ebf8b02fdffb9e46328e65274f1907"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "20a23e52fd2eee41f11e409bf498e40b"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b0f620a04cbd9031b1d1082801d50bae"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "4a983345db1677166c1a056b83580e90"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "ae3d6859ccfdbb4ad12a3600c9d083ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "f5a5f0099e4f1968882adec45ad059b9"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "471c084b3bec254c248d815fb9d18de1"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "70a0e543224aaa47e5961318ca396aba"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "6182a4f959dd3f1e2153cb03772fb4c1"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "acc61f63116483a80a56f1f95c71b8e4"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "9abdf5b6a7cf4adf922f38747de156ab"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "c12e3ebeb10fe338a268032cebac35cc"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "6f0b5843f22d6d6a3a0d7a446d01c654"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "a743dd12487fdbf3eff44a1e35d0f5cc"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "d9d5b8a50c0412c4773d4d78b59fcd7a"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "37522330f8ff248bf5351721317af753"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "5795f19e5ba47273ae284577d391e01d"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "75a6d7da521d80d4b7dd295131b08206"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "24e7a243eeaec71aa180194fbe1b375e"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "625dc54bfe5889a71ae041a61f629b5c"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "750bca58ff1f817f904e0a80f59c9c20"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "73c6364c14fd70e934e84937ace654f0"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "068d8188e5494b2d3d832794dd4454ce"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "6974633a7b86c8a0028e048216a0577e"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "173206f0d0a8346ea7b2a205dc0bed80"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "98708a5a45e6215995fe6bedcaea98f8"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "9513d96389d3c5ccfff3429a3b555420"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "3c77e5d9b534332a040b28f7b62d7a2b"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "41f61796ec95585b8150bf8cda254859"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "0d2610be99369ba621f98ad04f6c185b"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "eded60050b82a4f8c293fbb24c99cf8c"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "84b453ac81317564b650d121d4f9d9d7"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "cbc15b3f26026b99ce973e29eb093785"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "dcb498a97ff39e6945fc06b0e5a5c4a8"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "2698aa56dd5658a125bfc213f26dc49c"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "be0c73233552cec863de2a7a1e08ac97"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "e9cc0df693b87ff817c9b7009019b0f6"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "c605560a847c1cf85df50f5eb4cd4db0"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "65bb88534f3528e68cba0e45868f9382"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "94d3a265cf0e28601e40f3b6326c023c"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "721db3ea8727551e1a59540837fe13da"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "04d2bebc6026000851fa367929abd28d"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "179affca1a086abcd3e7acdef08cfce9"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "ce3faf6ad1bd728da116c104e439f54b"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "d5de53463908e55822176857ba8ce844"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "0bd1fc8559e247becfd6cb6fb71a268c"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "78788ae2c6888893e0479a269fe82beb"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "a9e6f76f052987d738a30fbaba4f5cc4"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "93a9e0f8523a75fff8fc7d46af312b05"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "1e90bd3cb554e3bdba89a014c2079ee1"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "be69c0a09e986df92d7a7bad80efc8b9"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "d8b9d291228e54de3e34660d93b426a4"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "2f405e07b4dc8ad50b20ab14e414dedb"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "b789551422cd43cbb48dd3c481106e0b"
  },
  {
    "url": "views/index.html",
    "revision": "fca5deac40ef898c6a9f82356059d98f"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "08b4b84c3c5fcda2524edae2513dc836"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "b3fcb09c7148ebfaa9a8c6bd79a293db"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "666718d1309686846808f403d21c3b0c"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "66ed70b6ef7ec569e78dfdc44b153e9e"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "06b71c92852c17da700d822a488c07ff"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "53c3119e9318bcd2aaccedeee8c3820e"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "97d8b4f6b9807c4931431324ab3c7768"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "a7ac9a1f59227f33042ec66a73ba3092"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "a1d75e6ea0f143c4a8717c48f5dae1f9"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "be186b69dba8f55706b88995acdc60aa"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "eef70e27bcc39c4d0313e96a77a23599"
  },
  {
    "url": "web-scraper.html",
    "revision": "75d8da3626bdc8553aa3871765ce7596"
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
