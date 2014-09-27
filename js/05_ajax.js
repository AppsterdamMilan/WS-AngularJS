// Carico il modulo $http
function filmCtrl($scope,$http){

	$scope.reverse = false;
	$scope.cosa = 'order';

	$scope.carica = function(){
		// Effettuo chiamata
		$http.get('data/movies.json')
			// Esito positivo
			.success(function(response,status){
				console.log(response,status);
				$scope.episodes = response;
			})
			// Esito negativo
			.error(function(response,status){
				console.log(response,status);
			});
	}

	$scope.ordina = function(campo){
		$scope.cosa = campo;
		if(campo === $scope.cosa){
			$scope.reverse = !$scope.reverse;
		}
	}

}