"use strict"

const addEvents = function(elem,type,callback){
    if(elem.length>1){
        for(let i =0;i<elem.length;i++){
            elem[i].addEventListener(type,callback)
        }
    }
    else{
        elem.addEventListener(type,callback);
    }
}


const navbar = document.querySelector("[data-navbar]")
const navbarLinks = document.querySelectorAll("[data-nav-link]")
const navbarToggler = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = ()=>{
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("active")
}
addEvents(navbarToggler,"click",toggleNavbar);

const closeNavbar = ()=>{
    navbar.classList.remove("active")
    overlay.classList.remove("active")
    document.body.classList.remove("active")
}
addEvents(navbarLinks,"click",closeNavbar)

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEvents(window, "scroll", activeElemOnScroll);
