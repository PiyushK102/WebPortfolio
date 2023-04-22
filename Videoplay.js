const toTop=document.querySelector(".toTop")
const ham=document.querySelector(".ham")
const nav=document.querySelector(".navButtons")
function display(element) {
    if (document.getElementById(element).style.display == "none") {
        document.getElementById(element).style.display = "flex";
        
        } 
    else {
        document.getElementById(element).style.display = "none";
    }
}
// window.addEventListener("resize",display('nav'))
// function display(element) {
//     if(window.innerWidth>=770)
//     {
//         if (document.getElementById(element).style.marginLeft == "-20vw") {
//             document.getElementById(element).style.display = "flex";
//             document.getElementById(element).style.marginLeft = "0";
//             } 
//         else {
//             document.getElementById(element).style.marginLeft = "-20vw";
//         }
//     }
//     else{
//             if(document.getElementById(element).style.marginLeft=="-50vw")
//             {
//                 document.getElementById(element).style.display = "flex";
//                 document.getElementById(element).style.marginLeft = "0";
//             }
//             else{
//                 document.getElementById(element).style.marginLeft = "-50vw";
//             }
//     }
// }