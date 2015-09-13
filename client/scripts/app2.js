angular.module('taskApp', [])

    .controller('taskCtrl', function($scope, $http) {
        //$scope.tasks=[{text: 'walk dog', complete: false},
        //    {text: 'clean dishes', complete: true}];

        $scope.formData = {};
        $scope.taskData = {};

        // Get all todos
        $http.get('/api/todos')
            .success(function(data) {
                $scope.taskData = data;
                console.log(data);
            })
            .error(function(error) {
                console.log('Error: ' + error);
            });
    });
    //$http.post('/api/todos', $scope.formData)
    //    .success(function(data) {
    //        $scope.formData = {};
    //        $scope.taskData = data;
    //        console.log(data);
    //    })
    //    .error(function(error) {
    //        console.log('Error: ' + error);
    //});