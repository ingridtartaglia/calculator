var calculator = angular.module('calculator', []);

calculator.controller('calculatorCtrl', function($scope){
    $scope.firstNumber = 0;
    $scope.secondNumber = null;
    $scope.operation;
    $scope.result = 0;

    $scope.clickNumber = function(number) {
        $scope.firstNumber = $scope.firstNumber * 10 + number;
        $scope.result = $scope.firstNumber;
    }

    $scope.clickOperation = function(operation) {
        $scope.operation = operation;
    }

});
