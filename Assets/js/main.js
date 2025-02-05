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

/*===============Remove Menu Mobile=======================*/
const navLink = document.getElementById('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // remove show menu whenever we click on any nav__link
    navMenu.classList.remove('show-menu')
}
navLink.array.forEach(n => n.addEventListener('click', linkAction))  



