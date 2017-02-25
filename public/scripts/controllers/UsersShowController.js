angular
  .module('flashy')
  .controller('UsersShowController', UsersShowController);

UsersShowController.$inject = ['$http', '$routeParams'];

function UsersShowController($http, $routeParams){
  var vm = this;

  //REQUESTS TO GET A USER BY ID (USER SHOW, USER'S DECK INDEX)
  $http.get("/api/users/" + $routeParams.id)
    .then(function userShowSuccess(json){
    console.log(json);
    vm.user = json.data;
    }, function userShowError(err){
    console.log('There was an error getting your user dawg', err);
    });

  //REQUESTS A USER EDIT (USER UPDATE, ABILITY TO REROUTE TO DECK SHOW)
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
