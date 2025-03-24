
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    return true;
}


function validateSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }


    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    return true;
}


document.getElementById('login-form')?.addEventListener('submit', function(event) {
    if (!validateLogin()) {
        event.preventDefault();
    }
});

document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    if (!validateSignup()) {
        event.preventDefault();
    }
});
