app.controller("myCtl", ["$scope", function($scope){
	$scope.movies = {
		title: "Hello World! I am a robot from the future and I am here to see what your favorite movies are.",
		list: ["movie1", "movie2", "movie3"]
}
	$scope.books = {
		title: "Hello again! What are your favorite books?",
		list: ["80 Days Around the World", "The Hobbit", "The Outsiders"]
	}
	$scope.flavors = {
		title: "Last questions, what are your favorite icecream flavors?",
		list: ["Mint Chocolate Chip", "Vanilla Bean", "Cookies and Cream"]
	}

	$scope.addItem = function(ls, item){
		ls.list.push(item)
	}
}])
