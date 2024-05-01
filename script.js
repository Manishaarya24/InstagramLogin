document.querySelector("#links").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var username = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    
    console.log("Username:", username);
    console.log("Password:", password);
  
  });
  