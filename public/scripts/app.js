//ANGULAR ROUTES

angular
  .module('flashy', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider){
  $routeProvider

  .when('/', {
    templateUrl: '/templates/home/flashy-home',
    controllerAs: 'usersIndexCtrl',
    controller: 'UsersIndexController'
  })
  .when('/signup', {
    templateUrl: '/templates/home/signup',
    controllerAs: 'usersIndexCtrl',
    controller: 'UsersIndexController'
  })
  .when('/login', {
    templateUrl: '/templates/home/login',
    controllerAs: 'usersIndexCtrl',
    controller: 'UsersIndexController'
  })
  .when('/users', {
    templateUrl: '/templates/users/users-index',
    controllerAs: 'usersIndexCtrl',
    controller: 'UsersIndexController'
  })
  .when('/users/:id', {
    templateUrl: '/templates/users/users-show',
    controllerAs: 'usersShowCtrl',
    controller: 'UsersShowController'
  })
  .when('/decks', {
    templateUrl: '/templates/decks/decks-index',
    controllerAs: 'decksIndexCtrl',
    controller: 'DecksIndexController'
  })
  .when('/decks/:id', {
    templateUrl: '/templates/decks/decks-show',
    controllerAs: 'decksShowCtrl',
    controller: 'DecksShowController'
  })
  .when('/decks/:id/choose-game', {
    templateUrl: '/templates/game/choose',
    controllerAs: 'decksShowCtrl',
    controller: 'DecksShowController'
  })
  .when('/decks/:id/memory-game', {
    templateUrl: '/templates/game/memory',
    controllerAs: 'cardsIndexCtrl',
    controller: 'CardsIndexController'
  })
  .when('/decks/:id/quiz-mode', {
    templateUrl: '/templates/game/quiz',
    controllerAs: 'cardsIndexCtrl',
    controller: 'CardsIndexController'
  })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
