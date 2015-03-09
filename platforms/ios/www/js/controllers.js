angular.module('starter.controllers', [])

.controller('ServicioCtrl', function($scope,$http) {
  

  $http.get("http://lobsterlink.comli.com/api.php")
    .success(function(response){
      $scope.servicio = response;
      console.log(response);
    });
    
  $scope.doRefresh = function() {
      $http.get("http://lobsterlink.comli.com/api.php")
    .success(function(response){
      $scope.servicio = response;
    });
    $scope.$broadcast('scroll.refreshComplete');
    $scope.$apply()
  };

})

.controller('UploadCtrl', function($scope,$http,$state) {

	$scope.formData = {};
	$scope.receta = [];


	$scope.processForm = function(receta){
		$http({
  			method  : 'POST',
  			url     : 'http://lobsterlink.comli.com/apiupload.php',
  			data    : {
  						nombre: receta.nombre,
        				recetatexto: receta.recetatexto
  						},
  			headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
  		})
		.success(function(data){
      $state.go('tab.servicio',{
        clear: true
      });
			console.log(data);
		})
	};
});
/*
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})*/

