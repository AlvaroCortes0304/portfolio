const menuToggle=document.querySelector(".menu-toggle")
const menu=document.querySelector(".menu")
const homeBtn=document.querySelector(".home-btn")
const aboutBtn=document.querySelector(".about-btn")
const skillBtn=document.querySelector(".skill-btn")
const contactBtn=document.querySelector(".contact-btn")
function toggle(){menu.classList.toggle("menu_visible")}
menuToggle.addEventListener("click",()=>{toggle()});homeBtn.addEventListener("click",()=>{toggle()});aboutBtn.addEventListener("click",()=>{toggle()});skillBtn.addEventListener("click",()=>{toggle()})
contactBtn.addEventListener("click",()=>{toggle()})