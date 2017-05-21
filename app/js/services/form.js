regApp.controller('form', function ($scope,$location,$routeParams,$templateCache,serviceItems,$http,$timeout){
	$scope.items = serviceItems.items;
	$scope.sendForm = function(sendObj, myForm){
		 if(myForm.$valid){
			console.log(sendObj, myForm);
		 }
		 
	}
});