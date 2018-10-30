 var app = angular.module('app-test', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/profils', {
      templateUrl: 'profils.html',
      controller: 'MainController'
    }).
    otherwise({
      redirectTo: '/profils'
    });
  }
]);

app.controller('MainController', function($scope, $http, $window) {
  $http.get("https://demo0050088.mockable.io/simple/profils").success(function(response) {
    $scope.items = response;
	
	$scope.GetDetails = function (index) {
		        var picture = $scope.items[index].picture;
                var lastname = $scope.items[index].lastname;
                var firstname = $scope.items[index].firstname;
				var balance = $scope.items[index].balance;
				var age = $scope.items[index].age;
				var address = $scope.items[index].address;
				var email = $scope.items[index].email;
				var company = $scope.items[index].company;
                $window.alert("Last Name: " + lastname + "\nFirst Name: " + firstname + "\nBalance: " + balance + "\nAge: " + age + "\nAddress: " + address + "\nEmail: " + email + "\nCompany: " + company);
            };
  });
});
