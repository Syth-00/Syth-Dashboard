const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    alert(
        "Username: " + username +
        "\nPassword: " + password
    );

});
