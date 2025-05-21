'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"Favicon.png": "bc4bb41d07854e1717392c5a5928639b",
"manifest.json": "2e22c950cfcd932333b35176cc60c757",
"assets/fonts/MaterialIcons-Regular.otf": "0c57311620c3225a854bf440d0d59a8f",
"assets/assets/questions/24-25/questions.json": "7b8708a5d87cd760a745ffb3ba62e48c",
"assets/AssetManifest.bin.json": "965227ce27fa6b807a751815787eccf1",
"assets/AssetManifest.bin": "947e22c9ce177e0c46a3887f6e11c7cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "80ff855ab4b4c5bc00fab16d263278a7",
"assets/AssetManifest.json": "3c3e2d86a39ad3fa7def42e0be13d2c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"index.html": "2e7b49f568a0e74fc945f87a86a600e2",
"/": "2e7b49f568a0e74fc945f87a86a600e2",
"icons/Icon-maskable-192.png": "e5ca8e3b33894c7efe028e53a0d6eca2",
"icons/Icon-maskable-512.png": "ff011405166e74e6202ab885c1dd2083",
"icons/Icon-512.png": "a351209d5b8e54f6ab29aa4f2be49263",
"icons/Icon-192.png": "275ce38f6fd91d357dab0ea507c69d27",
"version.json": "075c0a6e5167e1b9395101746e3934c5",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "f0430bd1f3b3df60892b40c0773fa4c5",
".git/logs/HEAD": "b3f163404551f16d067906a79ec6fee3",
".git/logs/refs/remotes/origin/main": "281b01656c63dcac7b986b40664fac17",
".git/logs/refs/heads/main": "ffbccbde3505cb9a64de8d5b3d5560c2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "6d76991f21e161bbad34fba4df1c2612",
".git/refs/remotes/origin/main": "7aa7a0d917045a71683f2d960e6cdea1",
".git/refs/heads/main": "7aa7a0d917045a71683f2d960e6cdea1",
".git/COMMIT_EDITMSG": "8b8a8b353298f798e3eb8628661617b6",
".git/config": "0c681779ff61ea0d2b6fbee06e7040c6",
".git/objects/33/24b73a4e23921fa23b1d983767933f65c56736": "4bc53ba94612b53a7bbcc73e126943de",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/85/c2e5175c97eafed936bc80e7b555da975f2ce4": "e38083fe32189a77530e32dc29a7a955",
".git/objects/85/8f5cf102b41cfa7c6749d9f22fc9544ab623bb": "e97d380e80f4edbb3a72b20526b3c79b",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/34/8f800afe37bcd081d3f5ebed70fcb687d83641": "6d29ba2aad6db494ccac8d38dc649038",
".git/objects/23/d9a9ce172abea9d4913c2c2a274d869f7a5f94": "d0fcdbfae881438191c42ed270f6f62d",
".git/objects/a3/c18a95a4223a665b82e7bf2d934a361f2005cd": "3643dd61794f701fd516adeccc7ab7a6",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f6/981e4e9bebfb500c80070dd2808779258b0869": "24ab6bf2467887e4d1fd6874044507e7",
".git/objects/01/4b4b6cdeaa8f56ab8e5ecc6a53b33df778c261": "0440a1cd85298b760b2b8b8d697227c8",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b8/793930d16fe8a01b008ce87b934050af750232": "2542ea486eff2045350b2aa19f18c253",
".git/objects/6c/078c422cd6a6b7b59435cb891eed287c1dbf6b": "f6e3ae0112f8cf94cf2bb0b46bb6ea47",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/2c/63f43015e72ec64934b458d397139a65beef3a": "4fbfe83319f5a27f634c3c43b409e155",
".git/objects/2c/15c392efa5c785d4bb11f36fa201cd11402792": "fa2cc7215874b390e48821febd82397c",
".git/objects/1d/52a618d45bbaa7ff809cbf9fda6b3a989174cb": "ff9883cc353e44e686ffbe61a04a2eca",
".git/objects/4e/81eb2acaf0e101f2758c0080288c503334fe36": "86be1851f4d2bc04b20b75289d162b23",
".git/objects/93/d556c4463058a57b2bdbda76f5706bb9870252": "5196a6158e864b4cc32154b0f81cfce7",
".git/objects/4c/44823236febb2aa94d6f15263718f2593455b2": "45aa746a45f93804096e05cef5a0a252",
".git/objects/d4/48c2ebd43fde5838560b2459592dec3c51f356": "0b703a077d9d910515a421bde89125f1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/12/7045c54db734b7a2076a1e6cdf25e76b6c01ec": "0b7d695ced02a3d6eee9803f68c3f1bb",
".git/objects/3b/cbcf95f0eb50a36b92f103455aaf856d71bb19": "d9d50c918ff73879860678b76291421c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/a62fb2ea54b15202f3a17aa6340a60c53bed35": "a378f2809dd4183470547551fe284670",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/98/7f737d2c458fcac6020348ccfbd439fd98e88b": "66cb5d9f9435381cab58567b10a4b3a1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/9d/fc70ad6f02317249e10c2b3278f8eedde6a5d6": "1490635194c71e3adf06639ef8a48bcf",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/ea/22a41ded0e70d2cdbd2413f8e077f2ddbdcf1b": "810c10c8d3d8fe80928ffcff044f46c3",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/53a31a38c0545d67eba5c4e776610fdef42674": "5d572dc8be9b80d82da5badccf9d42d3",
".git/objects/f2/03af5c79de31d009a15736401393819dbac6dd": "95778240aeed21033fa688478204b882",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/78/d8e86e09b5649575470e2d4013bf8dfaeb4f4a": "a1e53216831fa031ff75727b43bbbcd6",
".git/objects/22/1b2fe96cdde7d623dca8811fb9cd93b09fd037": "b971a07084a21e73b6d7f619b6f486a0",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
"flutter_bootstrap.js": "2e3a67e9326677dc61f5269cbdcd6e1c",
"splash/img/dark-3x.png": "19c8c3ef11421801ce5db79d5b52853b",
"splash/img/dark-4x.png": "b4aeb059555e6872388a3c0070bb08a6",
"splash/img/light-3x.png": "19c8c3ef11421801ce5db79d5b52853b",
"splash/img/dark-1x.png": "529f44b2f3c12909b3232726381c902d",
"splash/img/light-2x.png": "dc821e357bd6ea0a8e2ae69e4938d45d",
"splash/img/light-1x.png": "529f44b2f3c12909b3232726381c902d",
"splash/img/light-4x.png": "b4aeb059555e6872388a3c0070bb08a6",
"splash/img/dark-2x.png": "dc821e357bd6ea0a8e2ae69e4938d45d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
