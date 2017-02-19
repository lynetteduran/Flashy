console.log("Sanity Check: JS is working!");

$(document).ready(function(){

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
});
