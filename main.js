caches.open("static-files").then((cache) => {
	console.log(cache);

	// adds a resource to the cache
	// fetch("index.html").then((res) => cache.put("index.html", res));

	// adds a resource to the cache
	cache.add("index.html");
});

caches.open("static-files").then((cache) => {
	// adds several resources to the cache
	cache.addAll(["index.html", "main.js"]);
});

caches.open("static-files").then((cache) => {
	// returns the first file in the cache with this name
	cache.match("index.html").then((res) => {
		console.log(res);
	});
});

caches.open("static-files").then((cache) => {
	// returns an array with all the files in the cache with this name
	cache.matchAll("index.html").then((res) => {
		console.log(res);
	});
});

caches.open("static-files").then((cache) => {
	// deletes a resource to the cache
	cache.delete("index.html");
});

caches.open("static-files").then((cache) => {
	// returns an array with all the resources in the cache
	cache.keys().then((keys) => {
		console.log(keys);
	});
});
