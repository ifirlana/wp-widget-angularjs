# Define
myControllers = angular.module 'myControllers', []

# greetings

myControllers.controller 'GreetingController', ['$scope',
 ($scope) ->
  $scope.greeting = "Hello World"
]

