
// Button ke event handler kora:
document.getElementById('login-submit').addEventListener('click', function(){

// Email input theke input valu neya:
const emailField = document.getElementById('user-email');
const userEmail = emailField.value; 

// password input theke password neya:
const passwordlField = document.getElementById('user-password');
const userPassword = passwordlField.value; 

// Valid input check korar jonno:
if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
    // console.log('Valid User');

    // Submit button a click korle onno website page mane onno html ar page a niye jabe:
    window.location.href = 'banking.html' ;
}
});