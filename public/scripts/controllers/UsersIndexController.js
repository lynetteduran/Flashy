angular
  .module('flashy')
  .controller('UsersIndexController', UsersIndexController);

UsersIndexController.$inject = ['$http'];

function UsersIndexController($http){
  var vm = this;
  vm.newUser = {};

  //REQUESTS TO GET ALL USERS (USER INDEX)
  $http.get("/api/users")
    .then(function userIndexSuccess(res){
      vm.users = res.data;
    }, function userIndexError(res){
      console.log('There was an error getting yo data bro', res);
    });

    //REQUESTS A NEW USER POST (USER CREATE)
    vm.createUser = function(){
      $http.post("/api/users", vm.newUser)
        .then(function userCreateSuccess(res){
          vm.users.push(res.data);
          //add code to clear text in input text field, refresh and revert to placeholder text
        }, function userCreateError(res){
          console.log('There was an error posting yourself brah', res);
        });
    }
}
