const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("formular");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (emailInput.value === "") {
        alert("Please enter an email!");
        return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailInput.value.match(emailRegex)) {
        alert("Please enter a valid email!");
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordInput.value.match(passwordRegex)) {
        alert("Password must contain 1 uppercase letter, 1 lowercase letter, and a digit!");
        return;
    }
});

