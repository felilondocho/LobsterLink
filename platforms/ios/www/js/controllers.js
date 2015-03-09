/*
    controller.js es donde estan los metodos para nuestras tabs
*/

angular.module('starter.controllers', [])

/*
    el servicioCtrl entra en nuestra base de datos y, con el api.php
    convierte la informacion en tipo json para poder ser usada en
    la tab de recetas, este proceso lo hace cada vez que se hace un
    refresh
*/
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

/*
    el UploadCtrl coge la informacion entrada en los campos de texto
    de la tab upload y la convierte en json, luego es subida al servidor
    donde apiupload.php permite guardala en la base de datos
*/
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

