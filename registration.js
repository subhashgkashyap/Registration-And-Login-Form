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

// Link to local database for sign up

function register_user() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    // --------- First Way to store data in local storage ---------

    localStorage.setItem('Fname', fname);
    localStorage.setItem("Lname", lname);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('Password', password);

    // --------- Second Way to store data in local storage ---------

    // localStorage.UserName = username;
    // localStorage.Password = password;

    alert("User Registered");

}