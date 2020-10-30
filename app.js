var cube = document.getElementById('cube');
var Score = document.getElementById('Score');
var Timer = document.getElementById('time');
var Rscore= 0;
var Rtime= 15;
var Interval= 300;

var dro= setInterval(start, Interval);

cube.addEventListener('click', function() {


    var PosX = Math.floor(Math.random() * 400);
    var PosY = Math.floor(Math.random() * 500);
    var Rscale = Math.floor(Math.random() * 100);
   
    Rscore++;
    Score.textContent='Score' + ' ' +  Rscore;
    Rtime+=3;
    Timer.textContent='Time' + ' ' + Rtime;
    if(Rscale<10) {
        Rscale=20;


        cube.style.width = Rscale + 'px';
        cube.style.height = Rscale + 'px';
    }



    cube.style.marginLeft = PosX + 'px';
    cube.style.marginTop = PosY + 'px';
    cube.style.width = Rscale + 'px';
    cube.style.height = Rscale + 'px';
    


}) 


function start() {
    
    Rtime--;
    Timer.textContent= 'Time' + ' '+ Rtime;

    if(Rtime == 0){
        lose();
    }
   
}

function end () {

}
function lose () {
    Swal.fire('You Lose :)'+ ' ' + 'Your score is' + ' ' + Rscore);
    clearInterval(dro);

}



document.querySelector('#restart').addEventListener('click', () =>{
    window.location.reload(true);
})















