function validateForm() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return;
    }

    // Phone number validation
    var phoneRegex = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    if (!phoneRegex.test(phone)) {
        alert('Invalid phone number format');
        return;
    }

    // Password validation
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert(' Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number   ');
        return;
    }

    // indication
    
    alert('succesfull')
    
    
}