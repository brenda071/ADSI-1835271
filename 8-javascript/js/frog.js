var btnPlay = document.getElementById('btn-play');
var btnCredits = document.getElementById('btn-credits');

btnPlay.onmouseover = function(){
    this.classList.add('animated', 'bounceIn', 'infinite');
}
btnPlay.onmouseout = function(){
    this.classList.remove('animated', 'bounceIn', 'infinite');
}
btnCredits.onmouseover = function(){
    this.classList.add('animated', 'bounceIn', 'infinite');
}
btnCredits.onmouseout = function(){
    this.classList.remove('animated', 'bounceIn', 'infinite');
}