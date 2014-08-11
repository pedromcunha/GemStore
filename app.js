(function () {//Good habit to wrap application in a closure.
	//variables
	var app = angular.module('store', ['store-products']);
	//controllers
	app.controller('StoreController', ['$http', function($http){
		var store = this;

		store.products = [];

		$http.get('https://www.dropbox.com/s/1e71r6jc5colar7/products.json').success(function(data){
			store.products = data;
		});
	}]);

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});
	app.controller('ReviewController', function() {
		this.review = {};
		this.addReview = function (product) {
			this.review.createdOn = Date.now(); 
			product.reviews.push(this.review);
			this.review = {};
		};
	});
	
})();