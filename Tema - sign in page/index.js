const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("formular");
const email_error = document.getElementById("email-error");
const password_error = document.getElementById("password-error");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    emailInput.classList.remove('valid', 'invalid');
    passwordInput.classList.remove('valid', 'invalid');

    if (emailInput.value === "" || emailInput.value == null) {
        email_error.innerHTML = "Please enter a valid email!";
        email_error.style.color = "red";
        emailInput.classList.add('invalid');
    } else {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailInput.value.match(emailRegex)) {
            email_error.innerHTML = "Please enter a valid email!";
            email_error.style.color = "red";
            emailInput.classList.add('invalid');
        } else {
            emailInput.classList.add('valid');
            email_error.innerHTML = "Email adreess is correct!"
            email_error.style.color = "green";
        }
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordInput.value.match(passwordRegex)) {
        password_error.innerHTML = "Password must contain 1 uppercase letter, 1 lowercase letter, and a digit!";
        passwordInput.classList.add('invalid');
        password_error.style.color = "red";
    } else {
        passwordInput.classList.add('valid');
        password_error.innerHTML = "Password is correct!"
        password_error.style.color = "green";
    }
}
);

