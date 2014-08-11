(function () {//Good habit to wrap application in a closure.

	var app = angular.module('store', [ ]),
		gems = [
		{ 
			name: 'Ruby',
			price: 100.99,
			description: 'Very red. The 99 cents is because of tax.',
			canPurchase: true,
			soldOut: true,
			image: "https://cdn.tutsplus.com/net/uploads/legacy/966_essentialReading/images/rubylang.png"
		},
		{ 
			name: 'Crystal',
			price: 200,
			description: 'Clear as Crystal',
			canPurchase: true,
			soldOut: true,
			image: "http://img1.wikia.nocookie.net/__cb20111023030345/finalfantasy/images/b/b6/Dissidia_-_Bartz_Crystal.png"
		},
		{ 
			name: 'Diamond',
			price: 500,
			description: 'You better be saving up or else it turns to coal.',
			canPurchase: true,
			soldOut: true,
			image: "http://www.adelerjewelers.com/wp-content/uploads/2012/08/diamond.png"
		}
	];

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
})();