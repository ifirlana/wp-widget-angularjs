var myControllers;

myControllers = angular.module('myControllers', []);

myControllers.controller('GreetingController', [
  '$scope', function($scope) {
    return $scope.greeting = "Hello World";
  }
]);

var myApp;

myApp = angular.module('myApp', ['myControllers', 'youControllers']);
