self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(e){
  var u=e.request.url;
  if(e.request.method!=='GET'||u.indexOf('firebaseio.com')>-1)return;
  e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open('rr').then(function(ch){ch.put(e.request,c);}).catch(function(){});return r;}).catch(function(){return caches.match(e.request);}));
});
