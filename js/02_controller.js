
// Definisco un controller e gli passo come unico argomento il contesto
function eventiCtrl($scope){

	// Modello di dati
	$scope.prodotti = [
		{"prezzo": 100 , "nome": "Prodotto X"},
		{"prezzo": 42 , "nome": "Prodotto Y"},
		{"prezzo": 213 , "nome": "Prodotto Z"},
	]

	$scope.aggiungi = function(){
		$scope.prodotti.push({
			"prezzo": Math.round(Math.random() * 500),
			"nome": "Prodotto " + Math.round(Math.random() * 15)
		});
	}

}