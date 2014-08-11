(function () {//Good habit to wrap application in a closure.
	//variables
	var app = angular.module('store', [ ]),
		gems = [
		{ 
			name: 'Ruby',
			price: 100.99,
			description: 'Very red. The 99 cents is because of tax.',
			canPurchase: true,
			soldOut: true,
			image: "https://cdn.tutsplus.com/net/uploads/legacy/966_essentialReading/images/rubylang.png",
			reviews: [
				{
					stars: 5,
					body: "Wow Such an amazing product.",
					author: "happyCustomer@ranomail.com"
				}
			]
		},
		{ 
			name: 'Crystal',
			price: 200,
			description: 'Clear as Crystal',
			canPurchase: true,
			soldOut: true,
			image: "http://img1.wikia.nocookie.net/__cb20111023030345/finalfantasy/images/b/b6/Dissidia_-_Bartz_Crystal.png",
			reviews: [
				{
					stars: 5,
					body: "This is an amazing product, very beautiful.",
					author: "john@gmail.com"
				},
				{
					stars: 2,
					body: "This is not a quality product!",
					author: "madGuy@gmail.com"
				}
			]
		},
		{ 
			name: 'Diamond',
			price: 500,
			description: 'You better be saving up or else it turns to coal.',
			canPurchase: true,
			soldOut: true,
			image: "http://www.adelerjewelers.com/wp-content/uploads/2012/08/diamond.png",
			reviews: [
				{
					stars: 1,
					body: "Terrible Product, what were they thinking. So expensive.",
					author: "jeffmilligan@gmail.com"
				},
				{
					stars: 5,
					body: "If I could I would rate this higher than 6!!",
					author: "randy_orton@gmail.com"
				}
			]
		}
	];
	//controllers
	app.controller('StoreController', function(){
		this.products = gems;
	});

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
	//directives
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
})();