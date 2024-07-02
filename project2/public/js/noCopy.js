document.addEventListener('DOMContentLoaded', function() {
    var downloadButtons = document.querySelectorAll('.download-button');

    downloadButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var imageURL = this.getAttribute('data-src');
            window.location.href = imageURL;
        });
    });
});