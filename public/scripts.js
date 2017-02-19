console.log("Sanity Check: JS is working!");

var allUsers = [];

$(document).ready(function(){

  $.ajax({
    method: "GET",
    url: "/api/users",
    success: userIndexSuccess,
    error: console.log("can't get users bro"),
  });

  $('#userCreate').on('submit', function(e){
    e.preventDefault();
    var newUser = {
      userName : $('#userName').val(),
      email    : $('#email').val(),
    };

    $.ajax({
      method: "POST",
      url: "/api/users",
      data: newUser,
      success: function(data){
        console.log('new user success!' + data);
        alert(data.userName + " has been added");
      }
    });
  });

  $('#userDelete').on('submit', function(e){
    e.preventDefault();

  });
});

function renderUsers(user){
  $('#users').empty();

  var usersHtml =
  "      <fieldset>" +
  "        <div data-user-id='" + user.userName "'>" +
  "          <h4>User Name:</h4>" +
  "          <div class='user-name'>" + user.userName + "</div>" +
  "          <button id='userDelete'>Delete</button>" +
  "        </div>"
  "      </fieldset>";

  $('#users').prepend(usersHtml);
}

function userIndexSuccess(json){
  allUsers = json;
  allUsers.forEach(function(user){
    renderUsers(user);
  });
};
