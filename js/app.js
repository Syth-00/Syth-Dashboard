const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    const correctUsername = "admin";
    const correctPassword = "12345";

    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        alert("✅ Login berhasil!");

    } else {

        alert("❌ Username atau password salah!");

    }

});
