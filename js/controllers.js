var warningsApp = angular.module('warningsApp', []);

warningsApp.controller('HeaderController', ['$scope', function($scope) {
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function() {
        $scope.messageText = 'This is an error!';
        $scope.isError = true;
        $scope.isWarning = false;
    };

    $scope.showWarning = function() {
        $scope.messageText = 'This is a warning!';
        $scope.isError = false;
        $scope.isWarning = true;
    }
}]);