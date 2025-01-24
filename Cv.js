const toTop=document.querySelector(".toTop")
const ham=document.querySelector(".ham")
const nav=document.querySelector(".navButtons")
const hamsym=document.querySelector("#hamsym")
const closebtn=document.querySelector("#close")
const Social=document.querySelector(".Social")
Social.addEventListener("click",()=>{
    if(document.querySelector("#socialButtons").style.display=="none"){
        document.querySelector("#socialButtons").style.display="flex"
        document.querySelector("#uparrow").style.display="flex"
        document.querySelector("#downarrow").style.display="none" 
    }
    
    else{
        document.querySelector("#socialButtons").style.display="none"
        document.querySelector("#uparrow").style.display="none"
        document.querySelector("#downarrow").style.display="flex" 
    }
})


document.addEventListener("loaded",()=>{
    if(window.innerWidth<=770){
        ham.style.display="block"
        nav.style.display="none"
    }
    
    else{
        ham.style.display="none"
        nav.style.display="flex"
    }

})
window.onscroll=function(){scrollF()};
ham.addEventListener("click",()=>{
    if(nav.style.display=="block"){
        hamsym.style.display="none"
        closebtn.style.display="block"
    }
    else if(!nav.addEventListner("click",()=>{
        ham.style.display="block"
        nav.style.display="none" 
    }
    else{
        hamsym.style.display="block"
        closebtn.style.display="none"
    }
})

ham.addEventListener("mouseenter",()=>{
    ham.style.display="block"
    nav.style.display="none" 
    hamsym.style.display="block"
    closebtn.style.display="none"

})
window.addEventListener("resize",()=>{
    if(window.innerWidth<=1000){
        ham.style.display="block"
        nav.style.display="none"
        hamsym.style.display="block"
        closebtn.style.display="none"
    }
    else{
        ham.style.display="none"
        nav.style.display="flex"
    }
})
function scrollF(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        toTop.style.display = "block";
    } 
    else {
        toTop.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function display(element) {
    if (document.getElementById(element).style.display == "none") {
        document.getElementById(element).style.display = "block";
        
        } 
    else {
        document.getElementById(element).style.display = "none";
    }
}


