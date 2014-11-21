zacApp.controller('televisionController', function($scope,$window) {
	console.log("television");
	$scope.icons = [{id:'Educational', imgurl:'./img/tvp1.png', partial: '#tvp1'},
                         {id:'Fun', imgurl:'./img/tvp2.jpg', partial: '#tvp2'},
                         {id:'Cartoon', imgurl:'./img/tvp3.jpg', partial: '#tvp3'}]
}); 

