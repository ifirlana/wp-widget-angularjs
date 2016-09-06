'use strict';

angular.module('myApp.viewStock', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewStock', {
    templateUrl: 'view_viewStock/viewStock.html',
    controller: 'ViewStockCtrl'
  });
}])

.controller('ViewStockCtrl', ['$scope',function($scope) {
	console.log("* ViewStockCtrl");
	//alert("yoo");
	//fake data 
	var data_stock = [
		{"name" : "apple set 12pcs","quantity" : 3, "attributes" : [{"type" : "food"}, {"package" : "plastics"}]},
		{"name" : "Orange set 6pcs", "quantity" : 4,"attributes" : [{"type" : "food"}]},
		{"name" : "Viar Motor Cycle 150cc", "quantity" : 1, "attributes" : [{"type" : "vehicle"}, {"status" : "collateral"}]},
		{"name" : "Toyota Altis 2016 Black v110", "quantity" : 3,"attributes" : [{"type" : "vehicle"}]}];
	$scope.data_stock = data_stock;
	$scope.message = "this is stock view";
}]);