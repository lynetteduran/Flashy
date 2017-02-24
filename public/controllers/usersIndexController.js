angular
  .module('flashy', [])
  .controller('UsersIndexController', UsersIndexController);

UsersIndexController.$inject = ['$http'];

function UsersIndexController($http){
  var vm = this;
  vm.newUser = {};
  vm.users = [];

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

  //REQUESTS A USER EDIT (USER UPDATE)
  vm.editUser = function(user){
    $http.put("/api/users/" + user._id, user)
      .then(function userEditSuccess(res){
        console.log('edited: ', res);
      }, function userEditError(res){
        console.log('Error editing your data man', res);
      });
  }

  //REQUESTS A USER DELETION (USER DESTROY)
  vm.deleteUser = function(user){
    $http.delete("/api/users/" + user._id)
      .then(function userDeleteSuccess(res){
        var index = vm.users.indexOf(user);
        console.log('index is: ' + index);
        vm.users.splice(index,1);
        console.log('successfully deleted following user: ', res);
      }, function userDeleteError(res){
        console.log('There was an error deleting the user dude', res);
      });
  }
}
