//ANGULAR ROUTES
angular
  .module('flashy', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider){
  $routeProvider

  .when('/', {
    templateUrl: '/templates/flashy-home',
    controllerAs: 'usersIndexCtrl',
    controller: 'UsersIndexController'
  })
  .when('/signup', {
    templateUrl: '/templates/signup',
    controllerAs: 'usersIndexCtrl',
    controller: 'UsersIndexController'
  })
  // .when('/login', {
  //   templateUrl: '/templates/login',
  //   controllerAs: 'usersIndexCtrl',
  //   controller: 'UsersIndexController'
  // })
  .when('/users', {
    templateUrl: '/templates/users-index',
    controllerAs: 'usersIndexCtrl',
    controller: 'UsersIndexController'
  })
  .when('/users/:id', {
    templateUrl: '/templates/users-show',
    controllerAs: 'usersShowCtrl',
    controller: 'UsersShowController'
  })
  // .when('/decks', {
  //   templateUrl: '/templates/decks-index',
  //   controllerAs: 'decksIndexCtrl',
  //   controller: 'DecksIndexController'
  // })
  // .when('/decks/:id', {
  //   templateUrl: '/templates/decks-show',
  //   controllerAs: 'decksShowCtrl',
  //   controller: 'DecksShowController'
  // })
  // .when('/decks/:id/choose-game', {
  //   templateUrl: '/templates/choose',
  //   controllerAs: 'decksShowCtrl',
  //   controller: 'DecksShowController'
  // })
  // .when('/decks/:id/memory-game', {
  //   templateUrl: '/templates/memory',
  //   controllerAs : 'cardsIndexCtrl',
  //   controller: 'CardsIndexController'
  // })
  // .when('/decks/:id/quiz-mode', {
  //   templateUrl: '/templates/quiz',
  //   controllerAs: 'cardsIndexCtrl',
  //   controller: 'CardsIndexController'
  // })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
