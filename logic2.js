document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registered successfully!');
    event.target.reset();
});