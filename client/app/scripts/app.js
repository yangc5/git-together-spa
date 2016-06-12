'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'angular-loading-bar',
    'ng-token-auth'
  ])
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl: '/api'
    });
  })
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.groups',{
        templateUrl:'views/pages/groups.html',
        url:'/groups',
        controller: 'GroupsCtrl'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login',
        controller: 'UserSessionsCtrl'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
  }])
  .factory('Group', ['$resource', function($resource) {
  return $resource('/api/groups/:id.json', null, {
    'update': { method:'PUT' }
  });
}])
  .run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
      $location.path('/');
    });
}]);
