const users = [
    { email: "admin@cashwise.com", password: "admin123", role: "admin" },
    { email: "usuario@cashwise.com", password: "user123", role: "user" }
];

function validateLogin() {
    const email = document.getElementById('email')?.value.trim();
    const password = document.getElementById('password')?.value;

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        alert("Email ou senha incorretos.");
        return false;
    }

    // Armazena o tipo de usuário no localStorage
    localStorage.setItem("userRole", user.role);

    // Redireciona para a tela correta
    if (user.role === "admin") {
        window.location.href = "../Alterar Administrador/AlterarA.HTML"; // Caminho da tela do admin
    } else {
        window.location.href = "../Página do Usuario/Usuario.html"; // Caminho da tela do usuário
    }

    return true;
}

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    validateLogin();
});
