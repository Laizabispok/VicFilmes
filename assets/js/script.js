/*VARIÁVEIS NAVBAR*/
const navOpenBtn = document.querySelector("[data-menu-open]");
const navCloseBtn = document.querySelector ("[data-menu-close]");
const navBar = document.querySelector ("[data-navbar]");
const overlay = document.querySelector ("[data-overlay]");

const nav = [navOpenBtn, navCloseBtn, overlay];

for (let i=0; i < nav.length; i++){
    nav[i].addEventListener('click', function (){
        navBar.classList.toggle('active');
    })
}
