('*')
function validateSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (password.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    const numberRegex = /\d/;
    if (!numberRegex.test(password)) {
        alert("A senha deve conter pelo menos um número.");
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


document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateSignup()) {
        window.location.href = "../Home/Home.html";
    }
});