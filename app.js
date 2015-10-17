var calculator = angular.module('calculator', []);

calculator.controller('calculatorCtrl', function($scope){
    $scope.firstNumber = 0;
    $scope.operation = undefined;
    $scope.result = 0;
    $scope.secondNumber = null;

    $scope.clickNumber = function(number) {
        if (!$scope.operation) {
            $scope.firstNumber = $scope.firstNumber * 10 + number;
            $scope.result = $scope.firstNumber;
        }
        else {
            $scope.secondNumber = $scope.secondNumber * 10 + number;
            $scope.result = $scope.secondNumber;
        }
    }

    $scope.clickOperation = function(operation) {
        if ($scope.secondNumber) {
            $scope.calculate();
        }

        $scope.operation = operation;
        $scope.result += ' ' + $scope.operation;
    }

    $scope.calculate = function() {
        if ($scope.operation == '+') {
            $scope.result = $scope.firstNumber + $scope.secondNumber;
        }
        else if ($scope.operation == '-') {
            $scope.result = $scope.firstNumber - $scope.secondNumber;
        }
        else if ($scope.operation == '*') {
            $scope.result = $scope.firstNumber * $scope.secondNumber;
        }
        else if ($scope.operation == '/') {
            $scope.result = $scope.firstNumber / $scope.secondNumber;
        }
        $scope.firstNumber = $scope.result;
        $scope.secondNumber = 0;
    }

    $scope.clearNumber = function() {
        $scope.firstNumber = 0;
        $scope.operation = undefined;
        $scope.result = 0;
        $scope.secondNumber = null;
    }
});
