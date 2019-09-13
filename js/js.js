
    var gain = 0;
    var mark = true;
    var track = 0;
    const bar_v = document.getElementsByClassName('sound_bar');
    const bar = document.getElementsByClassName('sound_progress_bar');

        var run_v = document.getElementsByClassName("run_bar");
        var run = document.getElementsByClassName("run_progress_bar");
    var file_s = document.getElementsByTagName('file');
    var time_l;

    

    
function vol_song() {
    var ctrl = document.getElementsByTagName('ctrls');
    
   if ((bar[0].clientWidth/bar_v[0].clientWidth) <= 0.05) {
       document.getElementById('audS').muted = true;
       bar[0].style.width = 0;
       } else {
           document.getElementById('audS').muted = false;
           document.getElementById('audS').volume = bar[0].clientWidth/bar_v[0].clientWidth;
       }
}
function play_song() {
    
    var butt_play = document.getElementById('is_but'); 

    if (!mark) {
    document.getElementById('audS').play();
        
    
} else {
    document.getElementById('audS').pause();
 
    }
    mark=!butt_play.checked;
}    


function duration() {
    if (mark){
        var audio = document.getElementById('audS'); 
        var xr = (run[0].clientWidth/run_v[0].clientWidth);
        run[0].style.width = ((audio.currentTime/time_l)*100)+ "%";
}
}setInterval(duration, 100);
        
function set_duration() {
    this.value = event.clientX;
    var c = this.value;
    var audio = document.getElementById('audS'); 
    var run_l = run_v[0].clientWidth
    const run_position = run[0].offsetLeft;
     if (c>=run_position & c<(run_position+run_l)) {

         run[0].style.width = ((c-run_position)/run_l)*100  + "%";
         var xr = run[0].clientWidth/run_v[0].clientWidth;
         audio.currentTime = xr * time_l;
     } 
             
 
}




function track_down() {
    track = 1;

}
function track_leave() {
    track = 3;
}
function track_up() {
    track = 2;
}
/*onmousedown onmousemove onmouseleave*/
function vol_drag() {
    this.value = event.clientX;
    var b = this.value;
    
    
    var bar_l = bar_v[0].clientWidth;
    var leng = bar_l/100; 
    const position = bar[0].offsetLeft;

if (track == 1) {
    if (b>=position & b<(position+bar_l)) {
    /*button[0].style.transform = "translateX(" + (b-ab_position) +"px)"; */
    bar[0].style.width = ((b-position)/bar_l)*100  + "%";
    } 
    if ((bar[0].clientWidth/bar_v[0].clientWidth) >= 0.95)
        bar[0].style.width = 100 +"%"; 
}
}

function deff(e) {
  var elm = e.target;
    var audio = document.getElementById('audS');  
    
        

    var song = elm.getAttribute('data-value');
        
        
            var source = document.getElementById('mp3Source');
            source.src = song; 
          audio.load();
    var butt_play = document.getElementById('is_but'); 
    butt_play.checked=true;
    mark=butt_play.checked;
    audio.volume = bar[0].clientWidth/bar_v[0].clientWidth;
        var run = document.getElementsByClassName("run_progress_bar");
      audio.addEventListener('loadedmetadata', function() {
        time_l = audio.duration;       
           var box = document.getElementsByClassName('player_box');


    box[0].style.transform = "translateY(-150px)";
    
         });
setTimeout(che, 1500);
}

function che() {
     var box = document.getElementsByClassName('player_box');
    box[0].style.transition = "transform 0.0s";
    
}
var ab_posi = 0;
var ac_posi = 0;
var turg = false;
var position_x;
var position_y;
let res;
var s;
function turn_on() {
    ab_posi = 0;
    ac_posi = 0;
    this.value = event.clientX;
    var b = this.value;
    this.value = event.clientY;
        var c = this.value;
    var alb = document.getElementsByClassName('album_m');
    position_x = alb[0].style.left;
    position_y = alb[0].style.top;
    position_x = position_x.replace('px','');
    position_y = position_y.replace('px','');
    ab_posi = b - position_x;
    ac_posi = c- position_y;
    turg = true;
}
function turn () {
    turg = false;
    var alb = document.getElementsByClassName('album_m');
    if (res_y<=50) {
        alb[0].style.top = "50px";}
    if (res_x<=0) {
        alb[0].style.left = "0px";}
}

function movement() {
    if (turg) {
        this.value = event.clientX;
        var b = this.value;
        this.value = event.clientY;
        var c = this.value;
        res_y = c-ac_posi;
        res_x = b-ab_posi;
        var alb = document.getElementsByClassName('album_m');
        
        
            alb[0].style.top = res_y + "px";
            alb[0].style.left = res_x + "px";     
        
    }
}