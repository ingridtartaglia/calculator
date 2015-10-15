var calculator = angular.module('calculator', []);

calculator.controller('calculatorCtrl', function($scope){
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;
    $scope.operation;
    $scope.result = 0;

    $scope.clickNumber = function(number) {
        $scope.firstNumber = $scope.firstNumber * 10 + number;
        $scope.result = $scope.firstNumber;
    }

});
