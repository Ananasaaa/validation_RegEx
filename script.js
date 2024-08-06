document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (phone.length !== 13 || !phone.startsWith('+380')) {
       document.getElementById('phoneError').textContent = 'Phone number must start with +380 and be 13 digits long';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
    }
    console.log({
        name: name,
        message: message,
        phone: phone,
        email: email
    });
}); 

