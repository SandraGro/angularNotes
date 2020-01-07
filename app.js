angular.module("App",['main']);

angular.module("main",[]);

 angular.module("main").controller("mainController",function($scope){
    var data = "roger";
    $scope.data = "that";
});