document.querySelector('.showPass').addEventListener('click', () => {
    const passInput =  document.getElementById('password');
    if (passInput.getAttribute('type') === 'text') {
        document.getElementById('password').type = 'password';
    } else {
        document.getElementById('password').type = 'text';
    }
})