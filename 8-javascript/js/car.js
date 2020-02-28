//Atributes
var brand       = document.getElementById('brand');
var reference   = document.getElementById('reference');
var cc          = document.getElementById('cc');
var model       = document.getElementById('model');
var color       = document.getElementById('color');
//Vars Buttons
var btn_on      = document.getElementById('btn-on');
var btn_off     = document.getElementById('btn-off');
var btn_forw    = document.getElementById('btn-forw');
var btn_back    = document.getElementById('btn-back');
var btn_stop    = document.getElementById('btn-stop');
//Vars Car
var path        = document.getElementById('path');
var vehicle     = document.getElementById('vehicle');
//var Logic
var engineOn    = false;
var stopeOn     = true;


var car = {
    //Atributos
    brand: "Gemini",
    reference: "Atul",
    cc: "0.198",
    model: "2018",
    color: "blue",
    image: "imgs/car/mototaxi.png",
    //Métodos
    info: function(){
        brand.innerText             = this.brand;
        reference.innerText         = this.reference;
        cc.innerText                = this.cc+" cc";
        model.innerText             = this.model;
        color.innerText             = this.color;
        vehicle.style.backgroundImage   = "url("+this.image+")";
    },
    on: function(){
        console.log('off')
    },
    off: function(){
        console.log('off')
    },
    stop: function(){
        console.log('stop')
    },
    forward: function(){
        console.log('forward')
    },
    backward: function(){
        console.log('backward')
    }
};

car.info();

btn_on.onclick = function(){
    if(engineOn == false){
        vehicle.classList.add('on');
        engineOn = true;
    }else {
        alert("Ya encendido");
    }
    // car.on();
};
btn_off.onclick = function(){
    if(stopeOn == true && engineOn == true){
        vehicle.classList.remove('on');
        engineOn = false;
    }else {
        alert("No está encendido");
    }
    // vehicle.classList.remove('on');
    // path.classList.remove('forward');
    // car.off();
};
btn_stop.onclick = function(){
    if(engineOn == true ){
        path.classList.add('stop');
        stopOn=true;

    }else {
        alert("No está en Movimiento");
    }
    // car.stop();
};
btn_forw.onclick = function(){
    if(engineOn == true ){
        path.classList.remove('stop');
        path.classList.add('forward');

    }else {
        alert("No puede Avanzar");
    }
    // car.forward();
};
btn_back.onclick = function(){
    if(stopOn == true ){
        path.classList.add('backward');
        engineOn = true;
        stopOn=false;

    }else {
        alert("No puede Retroceder");
    }

    // car.backward();
};