var zacApp = angular.module('zacApp', ['ngRoute']);

	// configure our routes
	zacApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'partials/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/birds', {
				templateUrl : 'partials/birds.html',
				controller  : 'birdsController'
			})
            // route for video page
			.when('/video', {
				templateUrl : 'partials/video.html',
				controller  : 'videoController'
			})
			// route for the contact page
			.when('/life', {
				templateUrl : 'partials/dailyLife.html',
				controller  : 'dailyLifeController'
			});
	});

	

	

