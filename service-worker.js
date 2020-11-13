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
    "revision": "759e65fddf5785248a888d3c35e1b096"
  },
  {
    "url": "assets/css/0.styles.f5bbbaf3.css",
    "revision": "7a91739c4464d34069fe451e40b0f52c"
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
    "url": "assets/img/gh8.3c97d555.jpg",
    "revision": "3c97d5555379e6240a0ec61337829e5f"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/insert.619f3d8f.jpg",
    "revision": "619f3d8fea8a2798ce61ea1b16fcf365"
  },
  {
    "url": "assets/img/memory_location.86d5419f.jpg",
    "revision": "86d5419fc7674d94f7e7928e5975eb05"
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
    "url": "assets/img/wxh.b846c3a8.jpeg",
    "revision": "b846c3a8ceb44d360c91c455c5206039"
  },
  {
    "url": "assets/js/1.c587002c.js",
    "revision": "5f7b76968b670e661fbede5ab25a3812"
  },
  {
    "url": "assets/js/10.efbfb807.js",
    "revision": "374604fc67b1f955c093748ce05684e8"
  },
  {
    "url": "assets/js/11.c2ed9543.js",
    "revision": "6a28def1d86be36a6f2f86e0532cac08"
  },
  {
    "url": "assets/js/12.455399ae.js",
    "revision": "cbda1bdb424d9d6a367b873becfa21bb"
  },
  {
    "url": "assets/js/13.564c2abc.js",
    "revision": "85019a3bd5422307e1561f06a44c0905"
  },
  {
    "url": "assets/js/14.40abdf6a.js",
    "revision": "b28b3c6a6229f7d223a28e671867e02c"
  },
  {
    "url": "assets/js/15.afc8795e.js",
    "revision": "0a3a7cd724a041f5863592a9625998d8"
  },
  {
    "url": "assets/js/16.a17dc8fd.js",
    "revision": "1c49aa885ac3cd954e7775fb3ad2a938"
  },
  {
    "url": "assets/js/17.89c6e162.js",
    "revision": "f63a8bf242847fa8770164d678037744"
  },
  {
    "url": "assets/js/18.24daa581.js",
    "revision": "afd678f2ec3f44bb2533a32c86c5b4fb"
  },
  {
    "url": "assets/js/19.82495eda.js",
    "revision": "5145f6da20fdc8849a22e6546de2a731"
  },
  {
    "url": "assets/js/20.cad9c274.js",
    "revision": "0f50df6c73dac45f9bd21e600532cc4d"
  },
  {
    "url": "assets/js/21.9d261eb8.js",
    "revision": "d78b8fd61e3dd635146c99c1babe6d30"
  },
  {
    "url": "assets/js/22.982d7606.js",
    "revision": "77601d3eb2a821a17f6b9915f5b99a6f"
  },
  {
    "url": "assets/js/23.d54bbf9b.js",
    "revision": "636ad18f832167ab54267ac7582fdfdc"
  },
  {
    "url": "assets/js/24.5ec62e00.js",
    "revision": "481dd5b14e9a0a508f76fad8e933d5cc"
  },
  {
    "url": "assets/js/25.dbb2ff90.js",
    "revision": "1687e634c4c9dc20bc007cc557597986"
  },
  {
    "url": "assets/js/26.028df8c7.js",
    "revision": "a4b280f79a62601b445d3295601c0694"
  },
  {
    "url": "assets/js/27.8bbdfa42.js",
    "revision": "03665433b485858921eb70e3b9aa2dd2"
  },
  {
    "url": "assets/js/28.aed3c041.js",
    "revision": "87e51c7aa26ff93a91cf0b6f13310016"
  },
  {
    "url": "assets/js/29.9284249d.js",
    "revision": "e946e53e4fde871e1c1c2a8cf0935fcc"
  },
  {
    "url": "assets/js/30.c8bd8e38.js",
    "revision": "55d4553da15c72d11d0d9eaa29b890d7"
  },
  {
    "url": "assets/js/31.661214a7.js",
    "revision": "a9b430398eb7ebfe4a2f4c8382801788"
  },
  {
    "url": "assets/js/32.db60246d.js",
    "revision": "d58eaf83017f00ebd442a8ad99299dcb"
  },
  {
    "url": "assets/js/33.d2310d99.js",
    "revision": "de9a099bb118192e0dd1b0daf15374b5"
  },
  {
    "url": "assets/js/34.4f339098.js",
    "revision": "c9c518ec97d2891a5dbee1c5cd0d0db9"
  },
  {
    "url": "assets/js/35.8082b134.js",
    "revision": "e1950d878f810ade172a0fb81b81a4a3"
  },
  {
    "url": "assets/js/36.e4a5a9da.js",
    "revision": "03f769c1c265ad6c63edb83a64df03d7"
  },
  {
    "url": "assets/js/37.010d807d.js",
    "revision": "79dcf5d7fae971a1c9cab1486faa0303"
  },
  {
    "url": "assets/js/38.4a3cd4a6.js",
    "revision": "c05e6035b06e66ac037157415d80b40b"
  },
  {
    "url": "assets/js/39.9d39641e.js",
    "revision": "3f4e4304819fbfbff30f525abeb240e6"
  },
  {
    "url": "assets/js/4.df261250.js",
    "revision": "fba448b20bf9c5d6cdb52fa2a167d5b5"
  },
  {
    "url": "assets/js/40.cf06e918.js",
    "revision": "080632ab8600a3c945919e389ad8a32a"
  },
  {
    "url": "assets/js/41.3deffa6b.js",
    "revision": "cb498064c505dd566a72308d810916d9"
  },
  {
    "url": "assets/js/42.307bbeeb.js",
    "revision": "9de3a2484aa39c80a406b2dc60c390bc"
  },
  {
    "url": "assets/js/43.2bf71b34.js",
    "revision": "7d3fcea9a99e7f83424c08e19fcf8890"
  },
  {
    "url": "assets/js/44.7cc0a5ef.js",
    "revision": "38e05afbf32cc2084410a223ee644104"
  },
  {
    "url": "assets/js/45.85442a38.js",
    "revision": "033473d5ba6c139ae87685988bf91ca9"
  },
  {
    "url": "assets/js/46.c82f4ec8.js",
    "revision": "73f4e1b8dd53c7126ebce05e030b11c3"
  },
  {
    "url": "assets/js/47.23ff77df.js",
    "revision": "0ac4d35e1cd275b7402885d682c612d1"
  },
  {
    "url": "assets/js/48.80865216.js",
    "revision": "04a92455fbf9364c46ef2cb05d973027"
  },
  {
    "url": "assets/js/49.d7bd1304.js",
    "revision": "28d262d96a9eb78e5a653365583b8cf7"
  },
  {
    "url": "assets/js/5.a0cf09f1.js",
    "revision": "bb12c292b21978df449d337e690c33a5"
  },
  {
    "url": "assets/js/50.5cdea07a.js",
    "revision": "bbc7c2c9674f836a6a35eaa04a918762"
  },
  {
    "url": "assets/js/51.6de8e75a.js",
    "revision": "cc1e67d16e65ff801306feab8c4b7b64"
  },
  {
    "url": "assets/js/52.407e7c71.js",
    "revision": "d8c441543c987bd40ee966e24d2f1f5c"
  },
  {
    "url": "assets/js/53.90c4acbe.js",
    "revision": "0d76d8e4232859b4e00599cae5e06d98"
  },
  {
    "url": "assets/js/54.9b5b3b01.js",
    "revision": "a31d886bed84114375b141af4f90231c"
  },
  {
    "url": "assets/js/55.d8f5fc22.js",
    "revision": "1c6495653008f0771dcbef8a0bdb2cdc"
  },
  {
    "url": "assets/js/56.7d840b24.js",
    "revision": "ee9c52e609a37f73352a19da51d8f037"
  },
  {
    "url": "assets/js/57.b05a6599.js",
    "revision": "ce9c6b58c56c234c1fd4d8d35e6f6726"
  },
  {
    "url": "assets/js/58.8f4467bb.js",
    "revision": "4680c981012e1c6e20416c89489d3630"
  },
  {
    "url": "assets/js/59.21a79364.js",
    "revision": "b397bfa802ce7ac7003eb74c290c4582"
  },
  {
    "url": "assets/js/6.c3845513.js",
    "revision": "bb02c80adcf1b4c04be150d19890bf26"
  },
  {
    "url": "assets/js/60.cf8fed05.js",
    "revision": "d45ba26d5bb80de30cdecd452816601f"
  },
  {
    "url": "assets/js/61.82fef87e.js",
    "revision": "1b149b8d3a00e730345b43ab1276e1c6"
  },
  {
    "url": "assets/js/62.d4048893.js",
    "revision": "02bb6c5f4e48b6fbbc6e3ebd60bcc4f8"
  },
  {
    "url": "assets/js/7.00a49186.js",
    "revision": "4c439d7805fddab7c9784e8c48bd93ec"
  },
  {
    "url": "assets/js/8.96b2df32.js",
    "revision": "fd4f3a0d80aeb376f663aa16022df8fa"
  },
  {
    "url": "assets/js/9.cac381fe.js",
    "revision": "a86e09eea84b48c7f3a0cd49c28bebd9"
  },
  {
    "url": "assets/js/app.2eacdddd.js",
    "revision": "f99e59628170704862db763e0991e951"
  },
  {
    "url": "assets/js/vendors~flowchart.745badf9.js",
    "revision": "55266d6a8cd8d302e1b2129228fa5fc8"
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
    "revision": "5ae9f3ed62814ca71ec945642fb06983"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "26fd66e6794103a4c9adc0d87494dd18"
  },
  {
    "url": "categories/Python/page/2/index.html",
    "revision": "d0d4821ec3adc92875dbcf768c917bd3"
  },
  {
    "url": "categories/Python/page/3/index.html",
    "revision": "1e7ff56bacf1e2ed91229ef29527b078"
  },
  {
    "url": "categories/信息安全/index.html",
    "revision": "e465ef8dc17f5f83e469e6d238ab2ae7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "66ecb42c55a6ae3afcbe1ecc274f33b1"
  },
  {
    "url": "categories/好课推荐/index.html",
    "revision": "2e159cff073dfb6a000646ca62aae65a"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "7c3b39386f90224c0724c303e9bd22ba"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "35f7b374b47235b2c4f42b6d7c987da1"
  },
  {
    "url": "categories/服务器/index.html",
    "revision": "d66dfd915b54504fbd8b76840c1c584e"
  },
  {
    "url": "categories/电子书/index.html",
    "revision": "22f7fbf13583b9510290eb76c31b1b30"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "96f353c0477825f252d7d2b495ee85be"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "5e0abfc97f3ec0315698bb35976c8e5c"
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
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "a2ae8ca8fb6c44bf67b21886440bead6"
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
    "url": "tag/index.html",
    "revision": "d6e04f2eea107a3b95c0ecdd49810c73"
  },
  {
    "url": "tags/abstractmethod/index.html",
    "revision": "8216ac1cecb433052b297d9790fb3cab"
  },
  {
    "url": "tags/Async/index.html",
    "revision": "23bc72c5ca7bd752e91c3edfaf7bbf6b"
  },
  {
    "url": "tags/AWD/index.html",
    "revision": "c76d4621021632bd85520ab5d6119f6e"
  },
  {
    "url": "tags/db2/index.html",
    "revision": "11e77ff29f8eca0ec8d2ee4a172263de"
  },
  {
    "url": "tags/django-rest-framework/index.html",
    "revision": "8341faf11ec1bfedc92db63ac86bda48"
  },
  {
    "url": "tags/Django/index.html",
    "revision": "52c47fef0808e8384b5a97e0605abca4"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "7e05af8825c3fde0bb033e525534b333"
  },
  {
    "url": "tags/eval/index.html",
    "revision": "35d349ebe9ae175c32599ebf2dc227ff"
  },
  {
    "url": "tags/fastapi/index.html",
    "revision": "d97e336476fed093e9107093e0137f85"
  },
  {
    "url": "tags/https/index.html",
    "revision": "9548a24ba1987b4a6146f4bad64836ef"
  },
  {
    "url": "tags/iTerm2/index.html",
    "revision": "baaeca31a391ca6de3fba943e577a56a"
  },
  {
    "url": "tags/Let's Encrypt/index.html",
    "revision": "687c9bd3051170d020a383b097ab7ec3"
  },
  {
    "url": "tags/Mac App/index.html",
    "revision": "975c352b372d3f6f15234dadaa7f7607"
  },
  {
    "url": "tags/MacBookPro/index.html",
    "revision": "b843e3b1f6e55558fcb7d68552a9e7f5"
  },
  {
    "url": "tags/metaclass/index.html",
    "revision": "c6bac56acc1c50f8184f093b613962c8"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "32add5e1f478a1ce8b5bc30bcd87534b"
  },
  {
    "url": "tags/Python/index.html",
    "revision": "a90ee621aebc2692349061a7104e9a04"
  },
  {
    "url": "tags/Python编程/index.html",
    "revision": "c9e561000a698ab9a5afc48e7abd87e7"
  },
  {
    "url": "tags/RSA/index.html",
    "revision": "6994c2e9e556182736b7ec320b59950b"
  },
  {
    "url": "tags/uvicorn/index.html",
    "revision": "037cf5d186a1bb4f31545dbc850036f5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "258afc407a6e5c1b37af7e2cc3c98447"
  },
  {
    "url": "tags/webscoket/index.html",
    "revision": "164069a43013b7330da29470c968f77f"
  },
  {
    "url": "tags/Web开发/index.html",
    "revision": "0d35a32052e953f0455a8adb05151508"
  },
  {
    "url": "tags/最大公共子序列/index.html",
    "revision": "097fe8681db7b1a706b8d9b0e4ef4a0f"
  },
  {
    "url": "tags/最小编辑距离/index.html",
    "revision": "d9dcb17bebbaaa98032157a1fdfee925"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "2c28c9dc97d258312f714d3209da4620"
  },
  {
    "url": "tags/单元测试/index.html",
    "revision": "dbb62e08266328cabf7120f4637f18ee"
  },
  {
    "url": "tags/垃圾回收/index.html",
    "revision": "c1eecb11802dd4654a6a38f11b085df6"
  },
  {
    "url": "tags/实用技能/index.html",
    "revision": "6109666e078ab73fb20b8aec8a861a75"
  },
  {
    "url": "tags/工具/index.html",
    "revision": "53a52b4a295d7c7ea8edda9302aae86e"
  },
  {
    "url": "tags/左耳听风/index.html",
    "revision": "24a03b098693a552952edb0f0a05e3a7"
  },
  {
    "url": "tags/并发/index.html",
    "revision": "84fe7f2cc05037a8d6e75f98d1fa2928"
  },
  {
    "url": "tags/异步/index.html",
    "revision": "71d55a06841ea75f30b90086826875a3"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "51738e30e70e0f502561a5650150cd58"
  },
  {
    "url": "tags/极客时间/index.html",
    "revision": "d525a30d1289a63bec9590add4119103"
  },
  {
    "url": "tags/比特币/index.html",
    "revision": "73ca38f858b9bfd19236f38909bf8778"
  },
  {
    "url": "tags/渗透测试/index.html",
    "revision": "985178ce4ee607d93e5101dfbd78b6c3"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "e7a01d4ec1e689843f2720f798d975d0"
  },
  {
    "url": "tags/算法/index.html",
    "revision": "ef7181d44c65cbd6e2eec521199a35c7"
  },
  {
    "url": "tags/编程/index.html",
    "revision": "b45264fd46bb4861567c59d12cc826c7"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "729665c557fca3e854e84fe5b3c70c02"
  },
  {
    "url": "tags/赚钱思维/index.html",
    "revision": "14bab45ff1641c354634a063886a35ff"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "af8123534cdd62939ff2bae4c0f27f10"
  },
  {
    "url": "timeline/index.html",
    "revision": "47f293455c01e7a477bbb856cb809a08"
  },
  {
    "url": "views/articles/2018/db2_locks.html",
    "revision": "63099e7131d7562bb338aa8e5cc18379"
  },
  {
    "url": "views/articles/2018/db2_memory.html",
    "revision": "59e7628f5f807133af911b71099b07fd"
  },
  {
    "url": "views/articles/2018/why_learn_algorithm.html",
    "revision": "4bf0e78c963ea9a499e52ef0c9e3e93e"
  },
  {
    "url": "views/articles/2019/the_road_of_technology.html",
    "revision": "2a00bc24408c18ff6d462a70efc544d0"
  },
  {
    "url": "views/articles/2020/0320.html",
    "revision": "86bee4ec30b71ba20051b1879941f3df"
  },
  {
    "url": "views/articles/2020/0321.html",
    "revision": "b5c260d83089408d12e0dd2c39e8c53d"
  },
  {
    "url": "views/articles/2020/0327.html",
    "revision": "97cfe3353880182e779a5ffe7ffa060d"
  },
  {
    "url": "views/articles/2020/0331.html",
    "revision": "a23570aace753635b7649fa24922b4de"
  },
  {
    "url": "views/articles/2020/0401.html",
    "revision": "d32f69b926dc6d6c4cc7ae35537d82a3"
  },
  {
    "url": "views/articles/2020/0410.html",
    "revision": "bf22a9ccca2ae1fd5a77cd1011f57b03"
  },
  {
    "url": "views/articles/2020/0415.html",
    "revision": "b9431dadcddd6ebedd2d8e0aa7e9b636"
  },
  {
    "url": "views/articles/2020/0424.html",
    "revision": "e39ca35b17c07d35532d08fa1e622869"
  },
  {
    "url": "views/articles/2020/0425.html",
    "revision": "b072828a72dbc45fda315b96f8d13aba"
  },
  {
    "url": "views/articles/2020/0507.html",
    "revision": "57a91868cb4f883936cb876e1c0503b1"
  },
  {
    "url": "views/articles/2020/0512.html",
    "revision": "b37e3ef60e6d4dc1598948a60a732c3f"
  },
  {
    "url": "views/articles/2020/0521.html",
    "revision": "c5de5ef36b9c0c1b70b26f8cfb47314f"
  },
  {
    "url": "views/articles/2020/0525.html",
    "revision": "13248996720c45089c7787d7361e39e6"
  },
  {
    "url": "views/articles/2020/0618.html",
    "revision": "68f353a46dc4ca9ff933f1602e0c24ad"
  },
  {
    "url": "views/articles/2020/0701.html",
    "revision": "dec0d1fbf4ef121c92d8df5dbd2a186f"
  },
  {
    "url": "views/articles/2020/0709.html",
    "revision": "62cad0d4d43106157cfae57e8a47c040"
  },
  {
    "url": "views/articles/2020/0723.html",
    "revision": "7b76955d49fbb8f26382438e253a903f"
  },
  {
    "url": "views/articles/2020/0724.html",
    "revision": "4be99b7b13a7685d8395a92db9ec9a27"
  },
  {
    "url": "views/articles/2020/0812.html",
    "revision": "65da8a19782dadff3a7143ba8a8a428a"
  },
  {
    "url": "views/articles/2020/0813.html",
    "revision": "1aef97a8e5a57f8ab427177420ff46e4"
  },
  {
    "url": "views/articles/2020/0820.html",
    "revision": "4aae8ad9f70f58b15df680e561702b42"
  },
  {
    "url": "views/articles/2020/0825.html",
    "revision": "205450cc759a40ffe2969498b8be60d4"
  },
  {
    "url": "views/articles/2020/0924.html",
    "revision": "cd06ba709a46378991b0f255b370370b"
  },
  {
    "url": "views/articles/2020/0930.html",
    "revision": "2c8f13973d8dc7fa17af4a747ea5d5fd"
  },
  {
    "url": "views/articles/2020/1008.html",
    "revision": "8d4d24a2943a048b86e7c4266f9bc2f9"
  },
  {
    "url": "views/articles/2020/1016.html",
    "revision": "1ef7b7eafd950d26f6585abe4c716691"
  },
  {
    "url": "views/articles/2020/1021.html",
    "revision": "99b0f187f5cc81f25d9e6547cc3989c5"
  },
  {
    "url": "views/articles/2020/1030.html",
    "revision": "6e7b19feb8e952824d71def672ed69c3"
  },
  {
    "url": "views/articles/2020/1106.html",
    "revision": "465804b7964ebbd1be97ef216fa45ac9"
  },
  {
    "url": "views/articles/2020/first_penetration_test.html",
    "revision": "b76f1f1d767fc9ecf29b3aab90730f64"
  },
  {
    "url": "views/articles/2020/programer_make_money.html",
    "revision": "2db0e6260fe7826c1aeda9c6f840b18c"
  },
  {
    "url": "views/articles/2020/如何写出更具有Python风格的代码.html",
    "revision": "1a0d16a5945c73349fe48276ef04dfdd"
  },
  {
    "url": "views/articles/2020/生财电子书.html",
    "revision": "cfa7316e6de196981f58ba91cc6375c5"
  },
  {
    "url": "views/articles/alwaysDoImportant.html",
    "revision": "db3384f355a7814b90edbabcdff56691"
  },
  {
    "url": "views/index.html",
    "revision": "3266a8fce3581f397a2c0e76e3787194"
  },
  {
    "url": "views/python/AsyncIO.html",
    "revision": "9c8b0bd551488fd3966677f293c297b4"
  },
  {
    "url": "views/python/check_idcard.html",
    "revision": "c68bcac8dd47502f46fab35a08e8201b"
  },
  {
    "url": "views/python/concurrent_futures_vs_multiprocessing.html",
    "revision": "cb9f5a3439e970fd1508d3fb9db1cf6d"
  },
  {
    "url": "views/python/memory_manage.html",
    "revision": "0cddfbd23e31db30af87beaa7c05ec14"
  },
  {
    "url": "views/python/metaclass.html",
    "revision": "0eaf113c587c5dbefa286e249c9bb768"
  },
  {
    "url": "views/python/python_abc.html",
    "revision": "ec8fcef571760e0158079b268b141584"
  },
  {
    "url": "views/python/python_seven.html",
    "revision": "557b0732e58ca24238f4f852f7979e97"
  },
  {
    "url": "views/python/uvicorn.html",
    "revision": "d2c1848e32f5937daa216fe9bee02836"
  },
  {
    "url": "views/python/vue_drf.html",
    "revision": "5036360ed4802ad09d95195b02e55cb2"
  },
  {
    "url": "views/python/what_inspire_FastApi.html",
    "revision": "2170d5088ed8e60dc50cc5b5ebcc8101"
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
