var regApp = angular.module('regApp', ["ngRoute","ngSanitize","ngAnimate"]);

 
 
 regApp.controller('main', function ($scope,$location,$routeParams,$templateCache,serviceItems,$http,$timeout){

	$scope.items = serviceItems.items;
 
	

	
	
	$scope.$on("$routeChangeSuccess", function(){
        $scope.routeItemId = $routeParams["idDinamic"];
	})
 
} );

 

regApp.filter('showObj', function(){
		var count = 0;
		return function(obj){		 
			//console.log(obj,count++)
			//if( obj == 3 ){ return 'X' }else{return obj}
			return obj;
		}
	});
	
 

 
 
 

 

