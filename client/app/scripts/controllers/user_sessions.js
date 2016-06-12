'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:UserSessionsCtrl
 * @description
 * # UserSessionsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('sbAdminApp')
  .controller('UserSessionsCtrl', ['$scope', '$auth', '$location', '$rootScope', function ($scope, $auth, $location, $rootScope) {
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginFrom);
    };
    $scope.$on('auth:login-error', function(ev, reason){
      $scope.error = reason.errors[0];
    });
    $scope.loggedIn = $rootScope.loggedIn;
    $rootScope.$watch('loggedIn', function(){
      $scope.loggedIn=$rootScope.loggedIn;
    })

  }]);
