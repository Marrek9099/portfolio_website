// Display project details when website visitors click on a specific project name

const projects = document.querySelectorAll('#projects h3')

projects.forEach( project => {
    project.addEventListener('click', function() {
       this.childNodes[0].classList.toggle('rotate');
       this.parentNode.childNodes[3].classList.toggle('visible');
    });
});
