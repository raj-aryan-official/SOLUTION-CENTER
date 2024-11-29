document.getElementById('problemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been submitted successfully!');
    event.target.reset();
});