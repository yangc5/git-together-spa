"use strict";angular.module("sbAdminApp").controller("GroupsCtrl",["$scope","Group",function($scope,Group){$scope.groups=Group.query()}]);