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
    "revision": "677bf85b7f0f513dc7b34989b6806486"
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
    "url": "assets/js/17.65c0efa2.js",
    "revision": "a02167372b1bc5211f33d109ec539e35"
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
    "url": "assets/js/36.197c357b.js",
    "revision": "07bb935172d10daf44cf2ec955d9a43d"
  },
  {
    "url": "assets/js/37.f0c39d5f.js",
    "revision": "0a2a33adc53eec7ddfd588e3ef80f741"
  },
  {
    "url": "assets/js/38.22a09bd5.js",
    "revision": "0627158652969b34343c45c360f993a0"
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
    "url": "assets/js/app.fdab9c5c.js",
    "revision": "8d06699fa03408c7d1c28c3e813ec853"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "86a673813830473a3c288cbe79f1b09d"
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
    "revision": "493bde149c20402d7954633ac6d96be9"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "6c11cad3bdfc320d753c20465dc7a40a"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "fedc8668ad8367f6cc58802b1c961457"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "7bbfdd57578a48c5beb6a4f4abe9751e"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "eeafe8cd2c0d2ad9fd74c57ced994bde"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3959d80c42a6cab34b271a0ce38c935e"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "340afcadaa5ff01ffc5f68ef93f3ed6f"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "dd8f7f2bc9c5b587c180f92aed7f7754"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "d55b314d5e9dc9413306390c35abdf81"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "0ef99f8d1bc54794f3256e6767994173"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "32fd895d7122b6a647b16a855318f13a"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "561d47f6738c6f8b3e52586a20db894e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "2262bf70f40c7db0f90e22418c17a59b"
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
    "revision": "cf939797222939d6b949aa86064e017d"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "10551afd2cd715932d6216c9f1e6463f"
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
    "revision": "b8152a51a24f8e8f6677226017bf629d"
  },
  {
    "url": "tag/Async/index.html",
    "revision": "79abe8f7fa341c5c9a3c49f96b956107"
  },
  {
    "url": "tag/AWD/index.html",
    "revision": "d09be0bc2e8fac418ac82654a9a7949f"
  },
  {
    "url": "tag/db2/index.html",
    "revision": "165a1746a09f758d28bfd4d2afa2d667"
  },
  {
    "url": "tag/django-rest-framework/index.html",
    "revision": "9ec25838fc027ea58bb1ac11aa7b8c1c"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "fcfc0ce091cbe3f553f5158cde682e96"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "3a295832cec36e5b004f9e867a66e305"
  },
  {
    "url": "tag/eval/index.html",
    "revision": "fc8b3980e4070c2ae49a8d9e6607cd5f"
  },
  {
    "url": "tag/fastapi/index.html",
    "revision": "c38d9457cd4eba0a08b90cb6bc891cab"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "c9bc2cc93b98ae99bb7925ca470687bb"
  },
  {
    "url": "tag/https/index.html",
    "revision": "e38946b8b23c2aa0faf376c641ea013e"
  },
  {
    "url": "tag/index.html",
    "revision": "51cd2b5d93090c03339c15423f5efcd9"
  },
  {
    "url": "tag/iTerm2/index.html",
    "revision": "486bc97291016a6edbda58d3c6ecca5a"
  },
  {
    "url": "tag/Let's Encrypt/index.html",
    "revision": "1469b6dfa815e1b7fe4e021a0e1e5962"
  },
  {
    "url": "tag/Mac App/index.html",
    "revision": "d92938c3ab484a47b738bba252f0ffb6"
  },
  {
    "url": "tag/MacBookPro/index.html",
    "revision": "f200466ad5dfda88d5a0a28c1d3e9c88"
  },
  {
    "url": "tag/metaclass/index.html",
    "revision": "111df99f4d349973dc3b6ae5cae81dd4"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "4d93bc80b37fad0b03329e5d0bf4be90"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "a7bb6f4ac6080b5ccc613dc136cac09b"
  },
  {
    "url": "tag/Python更新/index.html",
    "revision": "1028e9ca619ee35ea25edbdc1bd06a17"
  },
  {
    "url": "tag/Python编程/index.html",
    "revision": "3ad1f4b487651d9af872c1da86fb4499"
  },
  {
    "url": "tag/RSA/index.html",
    "revision": "14d7e1a18743bb6d8719cf1c79717508"
  },
  {
    "url": "tag/uvicorn/index.html",
    "revision": "15f562321940405fc94f688132317d8b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "300840f4947bc7d1a1904a8f527188be"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "72dc629466f6a8c992374f637caddfe6"
  },
  {
    "url": "tag/webscoket/index.html",
    "revision": "086f7d3813f3b93dc6c0197ee18bb639"
  },
  {
    "url": "tag/Web开发/index.html",
    "revision": "4c6047fcbf099c72b55012889c6c6206"
  },
  {
    "url": "tag/最大公共子序列/index.html",
    "revision": "b9d3f9dfdfeb80d4bc836bd89c26871b"
  },
  {
    "url": "tag/最小编辑距离/index.html",
    "revision": "3a891ea028891dc7d0bcece2bd5690af"
  },
  {
    "url": "tag/前端框架/index.html",
    "revision": "37f8e98706b8bfd445995875529407ce"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "0719639fffe463fa55ac2a4113e73986"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "65899ff117d365c554d3171b372e35a1"
  },
  {
    "url": "tag/同时内外网/index.html",
    "revision": "27fc7b79a74b8568d952259a7797e354"
  },
  {
    "url": "tag/垃圾回收/index.html",
    "revision": "b9e3c6b5f29872c316066f3b3251736f"
  },
  {
    "url": "tag/实用技能/index.html",
    "revision": "84ef7c27b07d668355328ea7400068f2"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "f2288195975feffa4990b07f5a10e344"
  },
  {
    "url": "tag/左耳听风/index.html",
    "revision": "ed1dc836c89adf2562020a13d2b932b4"
  },
  {
    "url": "tag/并发/index.html",
    "revision": "1ee8a04104d009cde3c87125be1b6760"
  },
  {
    "url": "tag/异步/index.html",
    "revision": "f6b1963ed3f78016ef4dafa17a4e5fc4"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "353959e631d97ff55be3caf08bd81454"
  },
  {
    "url": "tag/极客时间/index.html",
    "revision": "9a159d43753c74ff12b50c5e19e47db4"
  },
  {
    "url": "tag/比特币/index.html",
    "revision": "638a2eb02e793b95feab25bd5cc0939e"
  },
  {
    "url": "tag/渗透测试/index.html",
    "revision": "2ae4b2ec93720c6dd36bdb30d4d2e4fc"
  },
  {
    "url": "tag/游戏开发/index.html",
    "revision": "612731ca264469a797259436e516efb0"
  },
  {
    "url": "tag/爬虫/index.html",
    "revision": "f6982fda8ce1a0c98fa044a9f19010a9"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "1f659d1a2eda8ab777aa843926dc89a5"
  },
  {
    "url": "tag/编程/index.html",
    "revision": "f81d6f2d95bcf7d5ca6a9f77b4f2690f"
  },
  {
    "url": "tag/编程技巧/index.html",
    "revision": "3ed3d2c37179933fa0ad356d89c6fb2a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "620fc2bcb939e67d89bff52e7bea16be"
  },
  {
    "url": "tag/赚钱思维/index.html",
    "revision": "c2161560d21da8463b253e40cb69c0ed"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "1cbcc2610437fac38bafcdb0a57d398c"
  },
  {
    "url": "timeline/index.html",
    "revision": "abda05dafbe4e791b24c29a86c26c192"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "aa96b38d6ea749d8bcf14008a4eeea77"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "261287acef5107769121ae24f17bb0b1"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "fbd258b5be25c4cf070f46dd8f0f7466"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "8b2c95ff90ff91cb7bb117f4d46ead19"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "612d192908aef9f411447b3053fd712a"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "03cf1144b060564b9f4eb721df6082dd"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "4fdcf95633e8703ff62a47954bfe57ea"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "2dc1098b527a0422db834bc6d0133b32"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "c8405952222a70bcf46c9c98be1fc4ed"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "807c39c1764aa230e16a9952b094d5d7"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "ac47bb92c2dd617dcbd47b925a6196c5"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "60ad58036815c3bd1d8282db497d6df2"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "bf99603b9040516e83b4ce6a99eb64c4"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "1e951df27f213d08f468dbab6a2581fd"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "1e7ebfb2ee0e24be8fb19a3e2b6cd3ed"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "b3f6569d38e849db8e8789cb212d13db"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "d961649017de87a2fc1501c4990a8dd4"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "bd1cc9150aa56108cf7b4bbc8c599740"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "5b1870bcd0974bbbc9c45bbadbe02498"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "e2beb197e6f79b994e00186be11bf3a5"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "6dcda2fac314891b4d98fa8c614e7274"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "653de10b45cd9bbe490b84abd613ca1d"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "f362818a3407cbc01e306e360b276326"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "26341ed8cd2ac71bf751b7ab606f33c6"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "0a6fbf4224534f90a6d99ec0a9b59e12"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "76f49935db46e17d174936b51279bb5d"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "2c929628510946db13f60fc2a463a6e6"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "8e9df04e27c6be16c7f570ec61bdbf31"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "6a75b99d0f554229219c6bdfedce664a"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "39b4031b0e0f0d707abf8a89a7b625b1"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "11a33c15f2de503265b739a1eca6f31e"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "d93220e4de6dd39bdc0fbd8333d02156"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "aabdba65fa76997b765722a9fbe57cd5"
  },
  {
    "url": "views/articles/2020/15个Python游戏小项目.html",
    "revision": "b5baa787c39b7d72341de372c84323c1"
  },
  {
    "url": "views/articles/2020/2020原创整理.html",
    "revision": "a05288e61b2ce27b7a8acc3e8fc51244"
  },
  {
    "url": "views/articles/2020/do-not-use-credit-card.html",
    "revision": "8de97e08bcec1232a8ae93520e5aaf31"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "9a43acf4caf9143f34562684f216281c"
  },
  {
    "url": "views/articles/2020/gui.html",
    "revision": "34306b0c9cd561383a62ac54cdd42f16"
  },
  {
    "url": "views/articles/2020/hypothesis.html",
    "revision": "fb9c758032ee37d6ac4babeab3902703"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "dab6ab5570a8f740f77a7dba6fb82896"
  },
  {
    "url": "views/articles/2020/Python_interesting_features.html",
    "revision": "0973fe9a264663a2d5bd92c29b2f451e"
  },
  {
    "url": "views/articles/2020/Python3.10新特性.html",
    "revision": "a908ac2fda79e754f3790b38aeb4f5fe"
  },
  {
    "url": "views/articles/2020/suppress.html",
    "revision": "0e3111a8919da80435598b39ab56f7ff"
  },
  {
    "url": "views/articles/2020/办公环境下如何同时访问内网网.html",
    "revision": "89cd4fc4623e5f48962a0d004af127f0"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "3be659175d70b58f710b64c24f5a8153"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "bae72f7f2de5ec2aa6f8e3719bf7f976"
  },
  {
    "url": "views/articles/2021/auto-deploy-blog.html",
    "revision": "0b0403a778ca094a7ca03dbcd59a28f2"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "1bc45341a199d84715d62257aeca527f"
  },
  {
    "url": "views/index.html",
    "revision": "3d79832362cd00d8c4cf644d6270129c"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "370787fb5b36817215712e01a59a7a32"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "1ec445a54d7165d7a2cba6c3cfdeb411"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "b30fbd448bb7686f46d72bc0512f1567"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "af15c20dc8807465c90125448badfd5a"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "1676f70ccd1b2456d9defb9cc599031b"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "8d34a4b78158974b53f2a3034e94b293"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "73969545e3b699d09f47a5c461cc6d3a"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "176f26c58a2f15105618fee9304643f6"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "c58857fc7f71b281e1c9513ad478aef0"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "224618bac6d31047a8c64f6f7a1ba529"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "3d30d25b4ec9687ed2254193ae3a2393"
  },
  {
    "url": "web-scraper.html",
    "revision": "6690f56dc13bddc06ca018ba9f899213"
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
