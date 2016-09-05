'use strict';

angular.module('myApp.viewStock', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewStock', {
    templateUrl: 'view_viewStock/viewStock.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);