zacApp.controller('televisionController', function($scope,$window) {
	console.log("television");
	$scope.icons = [{id:'Educational', imgurl:'./img/tvp1.png', partial: '#tvp1'},
                         {id:'Fun', imgurl:'./img/tvp2.jpg', partial: '#tvp2'},
                         {id:'Cartoon', imgurl:'./img/tvp3.jpg', partial: '#tvp3'}]
                         
        $scope.edu_scr = [{src: 'vid1.mp4', title: ' name1', type: 'video'},
		    {src: 'vid2.mp4', title: 'name2', type: 'video'},
		    {src: 'vid3.mp4', title: 'name3', type: 'video'},
		    {src: 'vid4.mp4', title: 'name4', type: 'video'}
		  ];
		  
	$scope.cart_scr = [{src: 'vid5.mp4', title: ' name1', type: 'video'},
		    {src: 'vid6.mp4', title: 'name2', type: 'video'},
		    {src: 'vid7.mp4', title: 'name3', type: 'video'},
		    {src: 'vid8.mp4', title: 'name4', type: 'video'}
		  ];
		  
	$scope.fun_scr = [{src: 'vid9.mp4', title: ' name1', type: 'video'},
		    {src: 'vid10.mp4', title: 'name2', type: 'video'},
		    {src: 'vid11.mp4', title: 'name3', type: 'video'},
		    {src: 'vid12.mp4', title: 'name4', type: 'video'}
		  ];
}); 

