'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:UserRegistrationsCtrl
 * @description
 * # UserRegistrationsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('sbAdminApp')
  .controller('UserRegistrationsCtrl', ['$scope', function ($scope) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
      .then(function(){
        $auth.submitLogin({
          email: $scope.registrationForm.email,
          password: $scope.registrationForm.password
        });
      });
    };
  }]);
