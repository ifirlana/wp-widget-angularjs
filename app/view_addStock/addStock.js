'use strict';

angular.module('myApp.addStock', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addStock', {
    templateUrl: 'view_addStock/addStock.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);