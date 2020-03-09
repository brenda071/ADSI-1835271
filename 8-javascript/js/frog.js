//buttons
var btnPlay     = document.getElementById('btn-play');
var btnCredits  = document.getElementById('btn-credits');
var btnBack     = document.getElementById('btn-back');
var btnTry      = document.getElementById('btn-try');
//game
var screens     = document.getElementsByClassName('screen');
var cars        = document.getElementsByClassName('car');
var frog        = document.getElementById('frog');

var lives       = document.querySelectorAll('ul li.heart.active');;
//Sounds
var sMenu       = document.getElementById('sound-menu');
var splay       = document.getElementById('sound-play');

//Play
btnPlay.onmouseover = function(){
    this.classList.add('animated', 'heartBeat', 'infinite');
}
btnPlay.onmouseout = function(){
    this.classList.remove('animated', 'heartBeat', 'infinite');
}
btnPlay.onclick = function(){
    game.screenTo(0, 1);
}

//Credits
btnCredits.onclick = function(){
    game.screenTo(0, 2);
}
btnCredits.onmouseover = function(){
    this.classList.add('animated', 'heartBeat', 'infinite');
}
btnCredits.onmouseout = function(){
    this.classList.remove('animated', 'heartBeat', 'infinite');
}

//Back
btnBack.onmouseover = function(){
    this.classList.add('animated', 'heartBeat', 'infinite');
}
btnBack.onmouseout = function(){
    this.classList.remove('animated', 'heartBeat', 'infinite');
}
btnBack.onclick = function(){
    game.screenTo(2, 0);
}

//Try
btnTry.onmouseover = function(){
    this.classList.add('animated', 'heartBeat', 'infinite');
}
btnTry.onmouseout = function(){
    this.classList.remove('animated', 'heartBeat', 'infinite');
}
btnTry.onclick = function(){
    window.location.replace('08-game.html');
}

//Object Game
var game = {
    postLeft:400,
    postTop:486,
    start: function(){
        // this.activeSound();
        this.moveFrog();
        this.renderCars();
        this.randomCars();
    },
    activeSound: function(){
        sMenu.pause();
        sMenu.currentTime = 0;
        sMenu.play();
    },
    moveFrog: function(){
        document.onkeydown = function(event){
            // console.log(event.keyCode);
            //left
            if(event.keyCode == 37){
                if(game.postLeft>80){
                    game.postLeft -= 60;
                    frog.style.left = game.postLeft+'px';
                }
                game.jumpFrog();
            }
            //right
            if(event.keyCode == 39){
                if(game.postLeft<730){
                    game.postLeft += 60;
                    frog.style.left = game.postLeft+'px';
                }
                game.jumpFrog();
            }
            //up
            if(event.keyCode == 38){
                if(game.postTop>60){
                    game.postTop -= 60;
                    frog.style.top = game.postTop+'px';
                }
            }
                game.jumpFrog();
            //down
            if(event.keyCode == 40){
                if(game.postTop<=480){
                    game.postTop += 60;
                    frog.style.top = game.postTop+'px';
                }           
                game.jumpFrog();
            }
        }        
    },
    randomCars: function(){
        var lt = -100;  //left
        var tp = 490;   //top
        var rt = 0;     //rotate
        var tm = 70;    //time
        var dr = 'r';   //direction

        // var lt = 810;
        // var tp = 480;
        // var tt = 0;
        for(var i = 0; i < cars.length; i++){
            let rndcar = Math.round(Math.random()*5);
            if(i == 3){
                lt = 810;
                tp -= 60;
                rt = 180;
                dr = 'l';
            }   
            tp -= 60;
            tm -= 10;
            cars[i].style.top   = tp+'px';
            cars[i].style.left  = lt+'px';
            cars[i].style.transform  = 'rotate('+rt+'deg)';
            cars[i].classList.add('car'+rndcar);
            this.moveCars(cars[i], tm, dr);
        }
        // game.moveCars(cars[i], 1000);
        // var car = Math.round(Math.random()*5);
        // cars[0].classList.add('car'+car)
    },
    renderCars:function(){
        for(var i=0; i<6; i++){
            let div = document.createElement('div');
            div.setAttribute('class','car');
            screens[1].appendChild(div);
        }
    },
    changeColorCar:function(car){
        let rndcar = Math.round(Math.random()*5);
        car.classList.remove('car0','car1','car2','car3','car4','car5');
        car.classList.add('car'+rndcar);
    },
    moveCars: function(car, tme,dir){
        let posL = -100;
        let posR = 810;

        setInterval(function(){
            game.checkCollide(car,frog);
            if(dir == 'r'){
                if(posL < 810){
                    posL += 10;
                    car.style.left = posL+'px';
                } else {
                    posL = -100;
                    game.changeColorCar(car);
                }
            }else{
                if(posR > -100){
                    posR -= 10;
                    car.style.left = posR+'px';
                } else {
                    posR = 810;
                    game.changeColorCar(car);
                }
            }
        }, tme);
    },
    jumpFrog: function(){
        frog.classList.add('animated','heartBeat');
        setTimeout(function(){
            frog.classList.remove('animated','heartBeat');
        },360)
    },
    screenTo: function(start, final){
        screens[start].classList.remove('bounceInUp');
        screens[start].classList.add('bounceOutDown');

        setTimeout(function(){
            screens[start].classList.remove('bounceOutDown');
            screens[start].classList.add('hide');
            screens[final].classList.remove('hide');
            screens[final].classList.add('animated','bounceInUp');
            // screens[0].classList.remove('hide');
            // screens[0].classList.add('screen-play');
            // screens[0].classList.add('bounceInUp');
        },800)
    },
    checkLives:function(){
        var lives   = document.querySelectorAll('ul li.heart.active');
        let nlives  = lives.length;
        lives[nlives-1].classList.remove('active');
            
        if(nlives < 2){
            // snPlay.pause();
            // snPlay.currentTime = 0;
            // alert('Game Over');
            // setTimeout(function(){
            //     window.location.replace('08-game.html');
            // },20);
            game.screenTo(1,3);
        } 
    },
    resetFrog: function(){
        this.postLeft   = 400;
        this.postTop    = 486;
        frog.style.left = this.postLeft+'px';
        frog.style.top = this.postTop+'px';
    },
    checkCollide: function(car,frog){
        cartop    = car.offsetTop;
        carleft   = car.offsetLeft;
        carright  = Number(car.offsetLeft) + Number(car.offsetWidth);
        carbottom = Number(car.offsetTop)  + Number(car.offsetHeight);

        frogtop    = frog.offsetTop;
        frogleft   = frog.offsetLeft;
        frogright  = Number(frog.offsetLeft) + Number(frog.offsetWidth);
        frogbottom = Number(frog.offsetTop)  + Number(frog.offsetHeight);

        if (carright  > frogleft   && 
            carleft   < frogright  && 
            cartop    < frogbottom && 
            carbottom > frogtop ) {
                screens[1].classList.remove('bounceInUp');
                screens[1].classList.add('shake');
                setTimeout(function(){
                    screens[1].classList.remove('shake');
                },500);
                
                this.resetFrog();
                this.checkLives();
            
        } 
    }
    
};

game.start();