
var app = angular.module('taskApp', []);

app.controller('taskCtrl', ['$scope', '$http', function($scope, $http){
    $scope.tasks=[{text: 'walk dog', complete: false},
        {text: 'clean dishes', complete: true}];

    $scope.getTasks = function(){
        $http({
            method: 'GET',
            url: "/api/todos"
        }).then(function(response){
            $scope.tasks = response.data.tasks;
        });
    };
    $scope.addTask = function(data){
        //var newTask=$scope.text;
        //newTask += "&complete=false";
        $http({
            method: 'POST',
            data: { text:text },
            url: "/api/todos"
        }).then(function(response){
            $scope.tasks= response.data;
            //$scope.todo.text=" "
        });
    };
}]);
//    //
//     $scope.removeTask = function(task){
//        $http({
//            method: 'DELETE',
//            url: "/api/todos"
//        }).then(function(response){
//            $scope.tasks.splice(task.id, 1);
//        });
//    };
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
//    });
