document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form values
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare data to be sent
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Log data to console (replace this with actual form submission logic)
    console.log('Form data:', formData);

    // Show success message
    alert('Thank you for your message!');
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
