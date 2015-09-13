
var app = angular.module('taskApp', []);

//app.controller('taskCtrl', function($scope, $http){
//    $scope.getTasks = function(){
//    console.log("getting");
//    $http({
//        method: 'GET',
//        url: "/api/todos",
//        data: {text: 'text', complete: complete}
//    })
//        .then(function(response){
//            console.log(response);
//            $scope.tasks = response;
//        });
//}
//});

app.controller('taskCtrl', ['$scope', '$http', function($scope, $http) {
    tasks=[];

    $scope.getTasks=function() {
        console.log("getting");
        $http({
            method: 'GET',
            url: "/api/todos"
        }).then(function (response) {
            console.log(response);
            tasks.push(response.data);
            console.log(tasks);//not sure why these tasks do not display to the page
        })
    };
    //run getTasks on page load
    $scope.getTasks();


    $scope.addTask = function(taskName){
        console.log(taskName);
        $http({
            method: 'POST',
            data: {text: taskName, complete: false},
            url: "/api/todos"
        }).then(function(response){
        $scope.getTasks();
        });
    };

     $scope.removeTask = function(id){
        $http({
            method: 'DELETE',
            url: "/api/todos"
        }).then(function(response){
            $scope.tasks.splice(id, 1);
        });
    };
//
//
//    $scope.updateTask = function(){
//        $http({
//            method: 'PUT',
//            url: "/api/todos",
//        }).then(function(response){
//            $scope.tasks.complete = TRUE;
//            //add css("text-decoration", "line-through");
//        })
}]);
