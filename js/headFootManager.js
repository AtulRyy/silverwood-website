// include-header.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.footer-flag').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});
