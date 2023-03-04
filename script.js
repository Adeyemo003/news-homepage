const cover = document.querySelector(".cover")
const menu = document.getElementById("nav-toggle")
const navBar = document.querySelector("nav")
const heaDer = document.querySelector("header")

menu.addEventListener ('click', function(){
    let style = cover.classList
    style.toggle('covering')
    navBar.style.zIndex = 999
    heaDer.classList.toggle('header-dark')
})