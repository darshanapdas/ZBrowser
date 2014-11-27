zacApp.controller('televisionController', function($scope, $http) {
			
			console.log('television');
			//$scope.imgPpath = "images/category/";
			$scope.list = [];
			$http.get('data/tv.json').success(function(data, status, headers, config) {
				  console.log('hello');
			  $scope.list = data.items;
				
			})
			
			.error(function(data, status, headers, config) {
			  console.log('ERROR');
			});
			

});

