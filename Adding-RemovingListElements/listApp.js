var listApp = angular.module('listApp', []);
	listApp.controller('listCntrl', function ($scope) {
	$scope.listElements = ['Fijita', 'Apple', 'Orange', 'Tomatoes'];

	$scope.removeElet = function(Element) {
		var i = $scope.listElements.indexOf(Element);
		$scope.listElements.splice(i,1);
	};

	$scope.addElet = function() {
		$scope.listElements.push($scope.enteredElet);
		$scope.enteredElet = '';
	};

});
