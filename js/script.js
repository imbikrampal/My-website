// Script for handling the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Extract form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data (basic validation)
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Example: Display form data in console (replace with actual form handling code)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display a success message to the user
    alert('Thank you for your message! I will get back to you soon.');

    // Clear the form
    document.getElementById('contactForm').reset();
});
