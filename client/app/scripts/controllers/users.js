'use strict';

/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */
angular.module('sbAdminApp')
  .controller('UsersCtrl', ['$scope', 'User', function ($scope, User) {
    $scope.groups = User.query();
  }]);
