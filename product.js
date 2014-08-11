(function () {//Notice where closures come in handy, the app variable can be seperate from the one used in app.js
	var app = angular.module('store-products', [ ])
	app.directive('productTitle', function(){
			return {
				restrict: 'E', //or 'A' for attribute or element
				templateUrl: 'product-title.html'
			};
		});
	app.directive('productSpecifications', function() {
		return {
			restrict: 'A', //See, this one is for attributes
			templateUrl: 'product-specifications.html'
		};
	});
	app.directive('productPanels', function () {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller:function(){
				this.tab = 1;
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				this.isSelected = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

})();