document.addEventListener('DOMContentLoaded', () => {

    const openRegisterBtn = document.getElementById('open-register-btn');
    const openLoginBtn = document.getElementById('open-login-btn');
    const closeRegisterBtn = document.getElementById('close-register-btn');
    const closeLoginBtn = document.getElementById('close-login-btn');
    const registerFormContainer = document.getElementById('register-form-container');
    const loginFormContainer = document.getElementById('login-form-container');

    function toggleForms(showForm, hideForm) {
        showForm.classList.remove('hidden');
        hideForm.classList.add('hidden');
    }

    function hideForm(form) {
        form.classList.add('hidden');
    }

    openRegisterBtn.addEventListener('click', () => {
        toggleForms(registerFormContainer, loginFormContainer);
    });

    openLoginBtn.addEventListener('click', () => {
        toggleForms(loginFormContainer, registerFormContainer);
    });


    closeRegisterBtn.addEventListener('click', () => {
        hideForm(registerFormContainer);
    });

    closeLoginBtn.addEventListener('click', () => {
        hideForm(loginFormContainer);
    });
});
