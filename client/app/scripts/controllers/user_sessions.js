'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:UserSessionsCtrl
 * @description
 * # UserSessionsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('sbAdminApp')
  .controller('UserSessionsCtrl', ['$scope', '$auth', '$location', function ($scope, $auth, $location) {
    $scope.handleLoginBtnClick = function() {
      $auth.submitLogin($scope.loginFrom);
    }
  }]);
