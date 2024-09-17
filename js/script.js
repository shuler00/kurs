document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Prosta walidacja loginu i hasła
    if (username === "admin" && password === "shuler") {
        // Przekierowanie do strony po zalogowaniu
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Niepoprawna nazwa użytkownika lub hasło.";
    }
});
