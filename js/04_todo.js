function todoCtrl($scope){

	$scope.tasks = [];

	$scope.aggiungi = function(){
		$scope.tasks.push($scope.nuova);
		$scope.nuova = "";
	}

	$scope.rimuovi = function(i){
		$scope.tasks.splice(i,1);
	}

}