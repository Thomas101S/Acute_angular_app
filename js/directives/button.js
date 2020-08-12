app.directive("append", function(){
	return {
		restrict: "E",
		scope: {
			ls: "="
		},
		templateUrl: "js/directives/button.html"
	}
})