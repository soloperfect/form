function validateForm() {
    var email = document.getElementById('email').value;
    
    var password = document.getElementById('password').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return;
    }

    

    // Password validation
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert(' Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number   ');
        return;
    }

    // indication
    

    alert(' successfully');
}