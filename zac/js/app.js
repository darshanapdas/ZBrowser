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
                        //route for television
			.when('/television', {
				templateUrl : 'partials/television.html',
				controller  : 'televisionController'
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
			})
                        //route for books page
			.when('/books', {
				templateUrl : 'partials/books.html',
				controller  : 'booksController'
			})
                        //route for games page
			.when('/games', {
				templateUrl : 'partials/games.html',
				controller  : 'gamesController'
			})
                        //route for music page
			.when('/music', {
				templateUrl : 'partials/music.html',
				controller  : 'musicController'
			})
                        //route for draw page
			.when('/draw', {
				templateUrl : 'partials/draw.html',
				controller  : 'drawController'
			})
			//route for tv partial page1
			.when('/tvp1', {
				templateUrl : 'partials/tvpartial1.html',
				controller  : ''
			})
			
			.when('/tvp2', {
				templateUrl : 'partials/tvpartial2.html',
				controller  : ''
			})
			
			.when('/tvp3', {
				templateUrl : 'partials/tvpartial3.html',
				controller  : ''
			})
	});


	

	

