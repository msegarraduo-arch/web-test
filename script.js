
const validator = require('email-validator');
const form = document.getElementById('form');
const nombre = document.getElementById('name');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (!validator.validate(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    console.log('Form submitted with Name:', name, 'Email:', email);
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //
    if (typeof email !== 'string') {
        throw new Error('Invalid input: email must be a string');
    }
    return re.test(email.toLowerCase());
}

nombre.addEventListener('input', function(event) {
    
    const value = event.target.value;
    console.log('Name input changed to:', value);
});

//programación defensiva
//early return
