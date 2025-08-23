const playbtn=document.querySelector("#play");
const forward=document.querySelector("#forward");
const back=document.querySelector("#back");
const audio= document.querySelector("#audio");
const audiocontainer=document.querySelector("musicdiv");
const volvalue=document.querySelector("#voln");
const vol=document.querySelector("#volslider");
const volval=document.querySelector("#volval")
const currentTimeElement=document.querySelector(".currtime");
const totalTimeElement=document.querySelector(".totaltime");
const seekbar=document.querySelector("#progress");
const musicname=document.querySelector("#musicname")
const source=document.querySelector("#audiosource")
const Eimage=document.querySelector("#EquiImage")
const playlistbutton=document.querySelector("#playlistbutton")
const musicList=document.querySelector("#playlistbox")
var songs=["audio\\Chandragupta bgm.mp3","audio\\Flute music of krishna hai vistaar.mp3","audio\\Shiv Tandav Strotam.mp3",
"audio\\Yada Yada hi dharmasaya.mp3","audio\\Shri Krishna Govind hare Murari.mp3",'audio\\Kaliya naag dance theme.mp3',
"audio\\Mahabali Maharudra (RaagJatt.com).mp3"]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('loaded',()=>{
    if(window.innerWidth<=1000){
        document.getElementById("musicbox").style.width=window.innerWidth;
        document.getElementById("musicbox").style.height='75vh';
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        
    }
})
window.addEventListener('resize',()=>{
    if(window.innerWidth<=1000){
        document.getElementById("musicbox").style.width=window.innerWidth;
        document.getElementById("musicbox").style.height='75vh';
        console.log(window.innerWidth)
        console.log(window.innerHeight)
    }
    else{
        document.getElementById("musicbox").style.width=window.innerWidth;
        document.getElementById("musicbox").style.height='50vh';
        console.log(window.innerWidth)
        console.log(window.innerHeight)
    }
})



//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Change Track ////////////////////////////////////////////////


forward.addEventListener("click",()=>{
    changetrack(songs[Math.floor((songs.length)*(Math.random()))])
})
back.addEventListener("click",()=>{
    changetrack(songs[Math.floor((songs.length)*(Math.random()))])
})
function changetrack(song){
    togglePlayPause();
    source.setAttribute('src',song)
    audio.load();
    togglePlayPause();
   
}
audio.addEventListener("timeupdate",()=>{
    while(audio.currentTime==audio.duration)
    {
        changetrack(songs[Math.floor((songs.length)*(Math.random()))])
    }
    
})


////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////----Play Pause operation----////////////////////////////////////

playbtn.addEventListener("click" , togglePlayPause)
audio.addEventListener("click",togglePlayPause) 
Eimage.addEventListener("click",togglePlayPause)
function togglePlayPause(){
    
    if(audio.paused==true)
    {
        audio.play()
        playbtn.innerHTML="pause"
        playbtn.title="Pause"
        Eimage.setAttribute("src","images/playing.gif");  
        
    }
    else{
        audio.pause()
        playbtn.innerHTML="play_arrow"
        playbtn.title="Play"
        Eimage.setAttribute("src","images/static music img.jpg");
        
    }   
}

/////////////////////////////////////////////////////////////////
////////////////////////////// Change Source///////////////
playbtn.addEventListener("click",changesource)
Eimage.addEventListener("click",changesource)

function changesource(){
    if(audio.paused==true)
    {
        Eimage.setAttribute("src","images/static music img.jpg");
    }
    else
    {
        Eimage.setAttribute("src","images/playing.gif");
    }
}
/////////////////////////////////////////////////////////////////
///////////////////////----Volume----////////////////////////////

volvalue.addEventListener("click",toggleMute)

function toggleMute(){

    audio.muted=!audio.muted

        if(audio.muted==true || audio.volume==0)
    {

        volvalue.innerHTML="volume_off"
        volvalue.title="Click to Unmute"
        volval.innerHTML="0";
        vol.value="0"

    }

    else if ((audio.volume>0 && audio.volume<=0.66)){

        volval.innerHTML=Math.round((audio.volume)*100);
        vol.value=Math.round((audio.volume)*100)
        volvalue.innerHTML="volume_down"
        volvalue.title="Click to Mute"
    }
    else{

        volval.innerHTML=Math.round((audio.volume)*100)
        vol.value=Math.round((audio.volume)*100)
        volvalue.innerHTML="volume_up"
        volvalue.title="Click to Mute" 
     } 
    
    
}
vol.addEventListener("input",e =>{
    audio.volume=(e.target.value)/100
    audio.muted=e.target.value===0
    volval.innerHTML=Math.round((audio.volume)*100)
    if(vol.value==0 || volval==0){
        volval.innerHTML="Muted"
        volvalue.innerHTML="volume_off"
        volvalue.title="Click to Unmute"
    }
    else if ( vol.value>0 && vol.value<=66){

        volval.innerHTML=Math.round((audio.volume)*100);
        volvalue.innerHTML="volume_down"
        volvalue.title="Click to Mute"
    }
    else{
        
        volval.innerHTML=Math.round((audio.volume)*100);
        volvalue.innerHTML="volume_up"
        volvalue.title="Click to Mute"
   }
})



function volpm(vvalue){
    
    audio.volume+=vvalue/100
    vol.value=(audio.volume)*100
    volval.innerHTML=(vol.value)

    if(volval.innerHTML=="0")
   {
        volvalue.innerHTML="volume_off"
        volvalue.title="Click to Unmute"

   }
    else if ( (volval.innerHTML>0 && volval.innerHTML<=66)){

        volvalue.innerHTML="volume_down"
        volvalue.title="Click to Mute"

    }
   else{
        volvalue.innerHTML="volume_up"
        volvalue.title="Click to Mute"
   }

}
/////////////////////////////////////////////////////////////////
/////////////////--------ProgressBar-----------////////////////////

audio.addEventListener("loadeddata",()=>{
    seekbar.setAttribute("max",(audio.duration));

    var songadd=source.getAttribute('src')
    songname= songadd.slice(6) 
    musicname.innerHTML=songname
})
audio.addEventListener("timeupdate",()=>{
    seekbar.value=(audio.currentTime)
    if(audio.currentTime==audio.duration)
    {
        togglePlayPause()
    }
})
    
seekbar.addEventListener("input",e => {
    audio.currentTime=(e.target.value);
    
})
///////////////////////////////////////////////////////////////////
/////////////////--------Duration-----------////////////////////

audio.addEventListener("loadeddata",()=>{
    totalTimeElement.textContent=formatDuration(audio.duration)
    
})
audio.addEventListener("timeupdate",()=>{
    currentTimeElement.textContent=formatDuration(audio.currentTime)
    
})
const leadingZeroFormatter=new Intl.NumberFormat(undefined,{
    minimumIntegerDigits:2
})
function formatDuration(time){
    const sec=Math.floor(time%60)
    const min=Math.floor(time/60)%60
    const hr=Math.floor(time/3600)
    if(hr===0)
    {
        return`${min}:${leadingZeroFormatter.format(sec)}`
        
    }
    else{
        return `${hr}:${leadingZeroFormatter.format(min)
        }:${leadingZeroFormatter.format(sec)}`
    }
}

function skip(duration){
    
    audio.currentTime+=duration
}
///////////////////////////////////////////////////////////////////
////////////////////////// Playlist Display block none///////////////////
playlistbutton.addEventListener("hover",()=>{
    if(window.innerWidth<=700)
    {
        playlistbutton.style.display="block"
        musicList.style.display="none"   
    }
    else{
        playlistbutton.style.display="none"
        musicList.style.display="flex"
    }
})
window.addEventListener("resize",()=>{
    if(window.innerWidth<=700){
        playlistbutton.style.display="block"
        musicList.style.display="none"
    }
    else{
        playlistbutton.style.display="none"
        musicList.style.display="flex"
    }
})
document.addEventListener("loaded",()=>{
    if(window.innerWidth<=700){
        playlistbutton.style.display="block"
        musicList.style.display="none"
    }
    else{
        playlistbutton.style.display="none"
        musicList.style.display="flex"
    }
})
/////////////////////////////////////////////////////////////////////////
document.addEventListener("keydown", e =>{
    switch(e.key.toLowerCase()){
        case " ":
        case "p":
        case "f10":
            togglePlayPause()
            changesource()
            break
        case "m":
            case "AudioVolumeMute":
                toggleMute()
                break 
        case "arrowleft":
            case "j":
                skip(-5)
                break
        
        case "arrowright":
            case "l":
                skip(+10)
                break 
        case "arrowup":
            case "AudioVolumeUp":
                volpm(1)
                break
        case "arrowdown":
            case "AudioVolumeDown":
            case "DOM_VK_VOLUME_DOWN":
                volpm(-1)
                break         
    }   
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
