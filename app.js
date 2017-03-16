angular.module('wowApp', ['ui.router']).config(
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        templateUrl: './views/home.html',
        url: '/'
      })
      .state('offer', {
        templateUrl: './views/offer.html',
        url: '/offer'
      })
      .state('lectures', {
        templateUrl: './views/lectures.html',
        url: '/lectures'
      });

  }
);
