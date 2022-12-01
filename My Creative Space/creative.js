var music - document.getElementById("music")
var icon = document.getElementById("icon")
 
icon.onclick = function(){
  if (music.paused){
    music.play();
    icon.src ="pause.png";
  } else {
     music.pause();
    icon.src ="play.png";
  }
}
  
