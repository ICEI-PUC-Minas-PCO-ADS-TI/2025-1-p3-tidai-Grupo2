document.addEventListener('DOMContentLoaded', function () {
            const loginForm = document.querySelector('.login-section');
            const dashboard = document.querySelector('.dashboard');
            const loginButton = document.querySelector('.submit-btn');

            loginButton.addEventListener('click', function (event) {
                event.preventDefault();
                loginForm.style.display = 'none';
                dashboard.style.display = 'block';
            });
        });
