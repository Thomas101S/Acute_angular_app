app.directive("makelist", function(){
	return {
		restrict: "E",
		scope: {
			mylist: "="
		},
		templateUrl: "js/directives/make_list.html"
	}
})