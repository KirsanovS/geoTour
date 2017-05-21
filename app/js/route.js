regApp.config(function($routeProvider){
	$routeProvider.when('/main',
	{
		templateUrl:'tamplates/main.html',
		controller:'main'
	});

	$routeProvider.when("/tour/:idDinamic", 
	{
		templateUrl: "tamplates/add2.html",
		controller:'main'
	});
	$routeProvider.when("/form", 
	{
		templateUrl: "tamplates/form.html",
		controller:'form'
	});
	$routeProvider.otherwise( 
	{
		redirectTo: '/main'
	});
}) ; 