// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
  $routeProvider

    // route for the homepage
    .when('/', {
      templateUrl: 'views/pages/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    })

    .when('/about', {
      templateUrl: 'views/pages/about.html',
      controller: 'aboutController',
      controllerAs: 'about'
    })

    .when('/contact', {
      templateUrl: 'views/pages/contact.html',
      controller: 'contactController',
      controllerAs: 'contact'
    });

  // Set up pretty urls
  $locationProvider.html5Mode(true);
});
