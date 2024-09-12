document.addEventListener('DOMContentLoaded', () => {
    const openRegisterBtn = document.getElementById('open-register-btn');
    const openLoginBtn = document.getElementById('open-login-btn');
    const closeRegisterBtn = document.getElementById('close-register-btn');
    const closeLoginBtn = document.getElementById('close-login-btn');

    const registerFormContainer = document.getElementById('register-form-container');
    const loginFormContainer = document.getElementById('login-form-container');

    openRegisterBtn.addEventListener('click', () => {
        registerFormContainer.classList.remove('hidden');
        loginFormContainer.classList.add('hidden');
    });

    openLoginBtn.addEventListener('click', () => {
        loginFormContainer.classList.remove('hidden');
        registerFormContainer.classList.add('hidden');
    });

    closeRegisterBtn.addEventListener('click', () => {
        registerFormContainer.classList.add('hidden');
    });

    closeLoginBtn.addEventListener('click', () => {
        loginFormContainer.classList.add('hidden');
    });
});
