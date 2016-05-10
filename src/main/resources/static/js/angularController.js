var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
         redirectTo: '/index.html'
      }).
      when('/error', {
        redirectTo: '/index.html'
      }).
      when('/page2', {
              redirectTo: '/page2.html'
            }).
      otherwise({
        redirectTo: '/index'
      });
  }]);

         mainApp.controller('studentController', function($scope) {
            $scope.student = {
               firstName: "John",
               lastName: "Smith",

               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });