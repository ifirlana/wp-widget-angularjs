# Define
youControllers = angular.module 'youControllers', []

# greetings

youControllers.controller 'GreetingController1', ['$scope',
 ($scope) ->
  $scope.greeting = "ikhlas"
]

