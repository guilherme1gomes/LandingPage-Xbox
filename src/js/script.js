document.addEventListener('click', function(event) {
    var menuContent = document.querySelector('.menu-content');
    var menuToggle = document.querySelector('#menu-toggle');
    
    
    if (!menuContent.contains(event.target) && event.target !== menuToggle && event.target.nodeName !== 'A') {
        menuToggle.checked = false; 
    }
});


var menuLinks = document.querySelectorAll('.menu-content a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var menuToggle = document.querySelector('#menu-toggle');
        menuToggle.checked = false; // Fecha a aba lateral
    });
});
