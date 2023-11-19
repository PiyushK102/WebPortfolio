const playbtn=document.querySelector("#play");
const pausebtn=document.querySelector("#pause");
const forward=document.querySelector("#forward");
const back=document.querySelector("#back");
const Video= document.querySelector("#screen");
const Videocontainer=document.querySelector("#divscreen");
const mpbtn=document.querySelector("#minip");
const fullscrbtn=document.querySelector("#fullscr");
const controls=document.querySelector("#controlscontainer");
const volvalue=document.querySelector("#voln");
const vol=document.querySelector("#volslider");
const volval=document.querySelector("#volval")
const mute=document.querySelector("#mute");
const currentTimeElement=document.querySelector(".currtime");
const totalTimeElement=document.querySelector(".totaltime");
const seekbar=document.querySelector("#progress");
const playlistbutton=document.querySelector("#playlistbutton")
const VideoList=document.querySelector("#playlistbox")
const videoname=document.querySelector("#videonamediv")
const ham=document.querySelector(".ham")
const nav=document.querySelector(".navButtons")
const hamsym=document.querySelector("#hamsym")
const closebtn=document.querySelector("#close")
const closefscreen=document.querySelector('#exitfscreen')


fullscrbtn.addEventListener("click",fullscrfunc)
closefscreen.addEventListener("click",fullscrfunc)
function fullscrfunc(){
 
    Videocontainer.style.position="fixed"
    Videocontainer.style.width="100%"
    Videocontainer.style.height="100vh"
    Video.style.width="100%"
    controls.style.width="100%"
    closefscreen.style.display="block"
    fullscrbtn.style.display="none"

}