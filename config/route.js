ccDashBoard.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state('home',{
			
							url: '/home',
							controller : 'dashBoardController',
							templateUrl : 'templates/home.html'
						
				  	})
		$urlRouterProvider.otherwise('/home');
 });


	

	
