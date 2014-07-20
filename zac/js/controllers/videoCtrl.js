zacApp.controller('videoController', function($scope, $http, $location, $routeParams, $sce, $rootScope) {
	
	/*$scope.playVideo=function(file){
		$location.path("/video");
	};*/
	console.log($routeParams.video_url);
	/*$scope.video_url = $sce.trustAsResourceUrl($routeParams.video_url);*/
	
	$scope.url = $sce.trustAsResourceUrl($rootScope.video_url);
	
});