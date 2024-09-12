document.addEventListener('DOMContentLoaded', function() {
    const openRegisterBtn = document.getElementById('open-register-btn');
    const closeRegisterBtn = document.getElementById('close-register-btn');
    const registerFormContainer = document.getElementById('register-form-container');

    function showRegisterForm() {
        registerFormContainer.style.display = 'flex';
    }

    function hideRegisterForm() {
        registerFormContainer.style.display = 'none';
    }

    openRegisterBtn.addEventListener('click', showRegisterForm);

    closeRegisterBtn.addEventListener('click', hideRegisterForm);
});

