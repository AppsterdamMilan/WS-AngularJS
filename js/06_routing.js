// Definisco il modulo principale
var app = angular.module('miaApp',['ngRoute']);

// Configurazione
app.config(['$routeProvider',
	function($routeProvider){

		// Setto le rotte, abbinando parziale a controller
		$routeProvider
            .when('/home',
            {
                templateUrl: 'partials/home.html',
                controller: 'partialCtrl'
            })
            .when('/user',
            {
                templateUrl: 'partials/user.html',
                controller: 'partialCtrl'
            })
            .when('/msg',
            {
                templateUrl: 'partials/contact.html',
                controller: 'partialCtrl'
            })
            // nel caso nessuna rotta è settata
            .otherwise({ redirectTo: '/home' });

	}]);


// Controllers
app.controller('mainCtrl',['$scope','$location',
	function($scope,$location){

		// Per settare la classe active
		$scope.current = function(location){
			if(location == $location.path()){
				return true;
			}
		}

	}]);

app.controller('partialCtrl',['$scope',
	function($scope){

		console.log('tutto ok');

	}]);