document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "admin" && password === "1234") {
        alert("🌟 Welcome, " + username + "! Wishing you a fantastic day! 🌟");
        setTimeout(function() {
            window.location.href = "welcome.html";
        }, 1000);
    } else {
        alert("❌ Invalid Username or Password! Try again.");
    }
});
