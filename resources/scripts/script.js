const p = document.querySelectorAll('#projects p')

p.forEach( p => {
    p.addEventListener('click', function() {
       this.childNodes[0].classList.toggle('rotate');
       this.parentNode.childNodes[3].classList.toggle('visible');
    });
});
