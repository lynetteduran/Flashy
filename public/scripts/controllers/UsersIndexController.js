angular
  .module('flashy')
  .controller('UsersIndexController', UsersIndexController);

UsersIndexController.$inject = ['$http', '$window'];

function UsersIndexController($http, $window){
  console.log('before you');
  var vm = this;
  vm.newUser = {};

  //REQUESTS TO GET ALL USERS (USER INDEX)
  $http.get("/api/users")
    .then(function userIndexSuccess(res){
      vm.users = res.data;
    }, function userIndexError(res){
      console.log('There was an error getting yo data bro', res);
    });
    console.log('about to enter vm.createUser');
  //REQUESTS A NEW USER POST (USER CREATE)
  vm.createUser = function(){
    console.log('yo');
    $http.post("/api/users", vm.newUser)
      .then(function userCreateSuccess(res){
        $window.location.href = '/users/' + res.data._id;
        vm.users.push(res.data);
        console.log(res.data);

        //add code to clear text in input text field, refresh and revert to placeholder text
      }, function userCreateError(res){
        console.log('There was an error posting yourself brah', res);
      });
  }
}
