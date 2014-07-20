zacApp.controller('birdsController', function($scope, $http, $location, $rootScope) {
	$http.get('data/birds.json').then(function(res) {
		$scope.birds = res.data;
		//console.log($scope.birds);
	});
    $scope.val="";
	$scope.playVideo=function(file){
		console.log("*******");
		console.log(file);
		$rootScope.video_url=file;
		$location.path("/video");
	};
});