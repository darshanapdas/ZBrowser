zacApp.controller('televisionController', function($scope, $http) {
			
			console.log('television');
			//$scope.imgPpath = "images/category/";
			$scope.clicked=true;
			$scope.list = [];
			$http.get('data/tv.json').success(function(data, status, headers, config) {
			
			  $scope.list = data.items;
				
			})
			
			.error(function(data, status, headers, config) {
			  console.log('ERROR');
			});
			
			$scope.showItems= function(name, src){
			  $scope.clicked=false;
			
			  $scope.url = [];
			  $scope.url = src;
			  console.log('showitems');
			  
			 
			}
			

});

