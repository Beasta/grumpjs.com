angular.module('grump', [
  'grump.services',
  'grump.upload',
  'grump.browse',
  'grump.auth',
  'grump.token',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/browse', {
      templateUrl: 'app/browse/browse.html',
      controller: 'BrowseController'
    })
    .when('/upload', {
      templateUrl: 'app/upload/upload.html',
      controller: 'UploadController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController'
    })
    .when('/access_token=:accessToken', {
      template: '',
      controller: "TokenController"
    })
    .otherwise({
        redirectTo : '/browse'
    });
})
.run();



    