self.addEventListener("install", e => {
  console.log("FreshPod+ Service Worker Installed");
});

self.addEventListener("fetch", e => {
  // You can cache stuff here later!
});
