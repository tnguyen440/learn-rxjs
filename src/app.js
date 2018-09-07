// Applying a function to a value and creating a new value is called a projection. 
// To project one array into another, we apply a projection function to each item in the array and collect the results in a new array.
var newReleases = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id: 432534, time: 65876586 }]
	},
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
];

module.exports.projectingArrays =  function () {
    videoAndTitlePairs = [];
    // For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's
	// push() method. Example: videoAndTitlePairs.push(newItem);
	// ------------ INSERT CODE HERE! -----------------------------------

    newReleases.forEach(function(release) {
        videoAndTitlePairs.push({
            id: release.id,
            title: release.title
        });
	});

	return videoAndTitlePairs;
}

// implement map()
Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the projectionFunction to each item in the array and add
		// each result to the results array.
		// Note: you can add items to an array with the push() method.
		// ------------ INSERT CODE HERE! ----------------------------
		results.push(projectionFunction(itemInArray));
	});

	return results;
	// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
};

module.exports.applyMap =  function () {
	// ------------ INSERT CODE HERE! -----------------------------------
	// Use map function to accumulate {id, title} pairs from each video.
	// ------------ INSERT CODE HERE! -----------------------------------

	return newReleases.map(function(item) {
		return {
			id: item.id,
			title: item.title
		};
	});
}

// Filtering Array
var newReleases1 = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	},
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
];

// Use forEach() to loop through the videos in the newReleases array and, 
// if a video has a rating of 5.0, add it to the videos array.
module.exports.filteringArray =  function () {
	videos = [];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate every video with a rating of 5.0
	// ------------ INSERT CODE HERE! -----------------------------------
	newReleases1.forEach(function(item) {
		if (item.rating === 5) {
			videos.push(item);
		}
	});

	return videos;
}

//  Implement filter()

Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		if (predicateFunction(itemInArray)) {
			results.push(itemInArray);
		}
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the predicateFunction to each item in the array.
		// If the result is truthy, add the item to the results array.
		// Note: remember you can add items to the array using the array's
		// push() method.
		// ------------ INSERT CODE HERE! ----------------------------
	});

	return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

// Query Data by Chaining Method Calls
//  Chain filter and map to collect the ids of videos that have a rating of 5.0
module.exports.applyFilter =  function () {
	// ------------ INSERT CODE HERE! -----------------------------------
	// Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.

	return newReleases1
		.filter(function(item) {
			if (item.rating === 5) {
				return item;
			}
		})
		.map(function(item){
			return item.id;
		});
}


var movieLists = [
	{
		name: "New Releases",
		videos: [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		]
	},
	{
		name: "Dramas",
		videos: [
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		]
	}
];

//  Flatten the movieLists array into an array of video ids
module.exports.flattenArray =  function () {
	allVideoIdsInMovieLists = [];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use two nested forEach loops to flatten the movieLists into a list of
	// video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------

	movieLists.forEach(function(list) {
		return list.videos.forEach(function(video) {
			allVideoIdsInMovieLists.push(video.id)
		});
	});

	return allVideoIdsInMovieLists;
}

// Implement concatAll()

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Add all the items in each subArray to the results array.
		// ------------ INSERT CODE HERE! ----------------------------
		return subArray.forEach(function(item) {
			results.push(item);
		});
	});

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

//  Use map() and concatAll() to project and flatten the movieLists into an array of video ids
module.exports.combineMapAndConcat =  function () {
	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and concatAll to flatten the movieLists in a list of video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------
	return movieLists.map(function(subArray){
		return subArray.videos.map(function(video){
			return video.id;
		});
	}).concatAll(function(item){
		return item;
	});
}

var newMovieLists = [
	{
		name: "Instant Queue",
		videos : [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxarts": [
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxarts": [
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		]
	},
	{
		name: "New Releases",
		videos: [
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxarts": [
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxarts": [
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
					{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		]
	}
];


// Retrieve id, title, and a 150x200 box art url for every video

module.exports.combineMapAndConcatAndFilter =  function () {
	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return newMovieLists.map(function(list) {
		return list.videos.map(function(video) {
			return video.boxarts.filter(function(boxart) {
				return boxart.width === 150 && boxart.height === 200;
			})
			.map(function(boxart) {
				return {
					if: video.id,
					title: video.title,
					boxart: boxart.url,
				};
			})
		}).concatAll()
	}).concatAll();
}
