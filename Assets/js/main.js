/*================Show hidden Y ====================== */
const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle')
            navClose = document.getElementById('nav-close')

/* ====================Check for constant availability===================*/ 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    } )
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}