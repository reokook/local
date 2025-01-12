document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
      var username = email.split("@")[0];
      window.location.href =
        "home.html?username=" + encodeURIComponent(username);
    }
    
  });
 

  