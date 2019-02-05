window.addEventListener('DOMContentLoaded', function() {
    var overlayWindow = document.querySelector('#overlay');
    document.querySelector('#overlay-close-btn').addEventListener('click', function() {
        overlayWindow.style.display = 'none';
    }, false);
}, false);
