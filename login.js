// Toggle between light and dark mode

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#2C3333';
        body.style.color = 'white';
        body.style.transition = '0.5s';
    }
    else{
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '0.5s';
    }
});

// Get data from local storage

function login_user() {
    var email_id = document.getElementById('email-id').value;
    var pwd = document.getElementById('pwd').value;

    // --------- First Way to store data in local storage ---------

    var email_from_ls = localStorage.getItem('email');
    var pwd_from_ls = localStorage.getItem('Password');

    if (email_id == email_from_ls && pwd == pwd_from_ls) {
        alert("You are successfully logged in");
    } 

    else {
        alert("Invalid credentials. Please enter the credentials used at the time of registration.")
    }

}