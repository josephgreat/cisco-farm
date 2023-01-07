const userModal = document.querySelectorAll('.user_modal');
const userModalContainer = document.querySelector('.user_modal .container');
const loginModalBtn = document.querySelector('#login');
const signupModalBtn = document.querySelector('#sign_up');
const loginLink = document.querySelector('#login_link');
const signupLink = document.querySelector('#signup_link');

loginModalBtn.onclick = () => {
    userModal[0].classList.remove('hidden')
}
signupModalBtn.onclick = () => {
    userModal[1].classList.remove('hidden')
}
loginLink.onclick = () => {
    userModal[1].classList.add('hidden');
    userModal[0].classList.remove('hidden');
}
signupLink.onclick = () => {
    userModal[0].classList.add('hidden');
    userModal[1].classList.remove('hidden')
}

userModal.forEach(modal => {
    modal.onclick = (e) => {
        if (e.target.classList.contains('overlay')) modal.classList.add('hidden');
    }

})

