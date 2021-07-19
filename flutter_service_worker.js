'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "55f9d88b032af9279d3cabd48ea104b0",
"version.json": "22d9f5d4a412af3adcaccf61e8bc7a58",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "bf785c2b7382e5eaa69d7e325b6f6772",
"index.html": "a7725c12cf58f7c4ce3b7597465391bb",
"/": "a7725c12cf58f7c4ce3b7597465391bb",
"assets/NOTICES": "11501d69e8439124b8508c5c0d9498f4",
"assets/AssetManifest.json": "4b9c2233b87a50fcbd2476e000e64e0a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/videos/Lesson16b.mp4": "e525d74b27e3e6c9cecf2b5b2df46cba",
"assets/assets/videos/Lesson5b.mp4": "1f82eb836a5e8d324910f9e5b0ad0ba4",
"assets/assets/videos/Lesson4b.mp4": "87516dc1c499fac32734b2cd1fe59806",
"assets/assets/videos/Lesson10a.mp4": "2c5670e0a560ec482ec7510348608963",
"assets/assets/videos/Lesson2a.mp4": "84a5d3afcd542753c7d93a74f71b8bc5",
"assets/assets/videos/Lesson1b.mp4": "3e91491feda8185302800efc3ce5d9df",
"assets/assets/videos/Lesson18b.mp4": "cedf4c2bac0da55d42eb16a0e566949e",
"assets/assets/videos/Lesson19a.mp4": "43cb3ca3d7c6d6c1de43a9d4bd25976e",
"assets/assets/videos/Lesson8b.mp4": "10c2b5c270e26d83623c58c0b8303b7c",
"assets/assets/videos/Lesson12a.mp4": "fc380bb55b580466c7bd97b9867b498a",
"assets/assets/videos/Lesson16a.mp4": "427dd7f5169fbde8ed44c221905525f1",
"assets/assets/videos/Lesson20b.mp4": "fc05c404deeb4b1d70c9ac74fbf1f708",
"assets/assets/videos/Lesson7b.mp4": "e01aadacc82e226b3326bf7d887c9105",
"assets/assets/videos/Lesson19b.mp4": "8bc7cc1097506f9c0b619c45b2cddd70",
"assets/assets/videos/Lesson6a.mp4": "efb2e4c243491fcbde41cf27cb2d86f6",
"assets/assets/videos/Lesson18a.mp4": "e870421c265848b8495aa393b40add75",
"assets/assets/videos/Lesson1a.mp4": "48f1a24a79be545efd370400958a8174",
"assets/assets/videos/Lesson15a.mp4": "02346aecc950e6e6c9e3377a48f3b7c6",
"assets/assets/videos/Lesson14a.mp4": "2d7771251f4582bd39d74f01dd40c11d",
"assets/assets/videos/Lesson14b.mp4": "e63e17d980f13141ff332a57ebdd73fd",
"assets/assets/videos/Lesson20a.mp4": "6d53c61ce969be2482cfd588ccd34ee2",
"assets/assets/videos/Lesson11b.mp4": "3df8bc211dff1b9e3103fc57b93421a0",
"assets/assets/videos/Lesson13b.mp4": "d71c7414a8529a67a4fd097403698622",
"assets/assets/videos/Lesson7a.mp4": "29541c1d10ac09247502daafc6b60555",
"assets/assets/videos/Lesson4a.mp4": "e2ce15ecab9248185021ae8759bad2c6",
"assets/assets/videos/Lesson17b.mp4": "7461c15ed5c3e07e95f49e27d71d4789",
"assets/assets/videos/Lesson5a.mp4": "95c6560478558e66f3dbee44e91dfae1",
"assets/assets/videos/Lesson15b.mp4": "f9443fa3dd3a479a1da5d2c3a038fc5f",
"assets/assets/videos/Lesson6b.mp4": "48a5d08272a498bdfbb2fcda6c288a1b",
"assets/assets/videos/Lesson2b.mp4": "3393bd3f0c72afd1528319a0364f5050",
"assets/assets/videos/Lesson9b.mp4": "f3b6a4550fa1d9da8a1c3d28acc02568",
"assets/assets/videos/Lesson9a.mp4": "26ee730e41383c30a97332110d7daa34",
"assets/assets/videos/Lesson12b.mp4": "1a156a4affe5d0f751c41d2eb51e9a12",
"assets/assets/videos/Lesson11a.mp4": "cc7b7c4ab02caae961d5e56161311374",
"assets/assets/videos/Introduction.mp4": "a4bc7d18fa1a422397dcc0205d9eb8ba",
"assets/assets/videos/Lesson3a.mp4": "1cf55e601fef514035a587a11d760080",
"assets/assets/videos/Lesson17a.mp4": "258f57f0bb1476655d23687c861612c2",
"assets/assets/videos/Lesson8a.mp4": "a16752f307c047ae12d5138e6588553f",
"assets/assets/videos/Lesson10b.mp4": "4007717e0ee93acff27ca325f27db91a",
"assets/assets/videos/Lesson3b.mp4": "1683104211c7b77fcbf955ce307743fc",
"assets/assets/videos/Lesson13a.mp4": "e81f378756b688ed9b8f3826f56da7c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
