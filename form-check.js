//form data
document.getElementById("l-form").addEventListener("submit", function(event) {
    event.preventDefault();
var firstname= document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;
    var email = document.getElementById("user-mail").value;
    var password = document.getElementById("user-password").value;

    var pageToOpen = 'm-page.html';
    window.location.href = pageToOpen; 
    
    window.alert("sucessfully signed-up");
});


