//Calculator Theme
var btnTheme    = document.getElementById('theme');
var calc        = document.getElementsByClassName('calc');
var dispMath    = document.getElementById('displayMath');
var dispAns     = document.getElementById('displayAnswer');
var memAns      = null;
// var theme = false

//Buttons
var btn0 = document.getElementById('btn-22');
var btn1 = document.getElementById('btn-17');
var btn2 = document.getElementById('btn-18');
var btn3 = document.getElementById('btn-19');
var btn4 = document.getElementById('btn-13');
var btn5 = document.getElementById('btn-14');
var btn6 = document.getElementById('btn-15');
var btn7 = document.getElementById('btn-9');
var btn8 = document.getElementById('btn-10');
var btn9 = document.getElementById('btn-11');

//Buttons(Actions)
var btnClear    = document.getElementById('btn-5');
var btnDel      = document.getElementById('btn-6');
var btnPlus     = document.getElementById('btn-20');
var btnSubs     = document.getElementById('btn-16');
var btnPro      = document.getElementById('btn-12');
var btnDiv      = document.getElementById('btn-8');
var btnPow      = document.getElementById('btn-4');
var btnParL     = document.getElementById('btn-1');
var btnParR     = document.getElementById('btn-2');
var btnDot      = document.getElementById('btn-23');
var btnMod      = document.getElementById('btn-21');
var btnAns      = document.getElementById('btn-7');
var btnRq       = document.getElementById('btn-3');
var btnEqual    = document.getElementById('btn-24');

//Booleans
var allowOper   = false;

//Events
btnTheme.onclick = function(){
    calc[0].classList.toggle('dark');
    // if(theme){
    //     alert("Hola");
    //     calc.classList.remove('dark');
    // }else {
    //     alert("adios");

    //     calc.classList.add('dark');
    // }
    // theme = !theme;
}

function setValueInDisplay(val){

    if(dispMath.value.length <= 30){
        // alert(val.constructor.name);
        if (val.constructor.name == "Number"){
            allowOper = true;
            dispMath.value += val;
        }else{
            if(allowOper){
                dispMath.value += val;
            }
            allowOper = false;
        }        
    }
}

btn0.onclick = function(){
    setValueInDisplay(0);
}
btn1.onclick = function(){
    setValueInDisplay(1);
}
btn2.onclick = function(){
    setValueInDisplay(2);
}
btn3.onclick = function(){
    setValueInDisplay(3);
}
btn4.onclick = function(){
    setValueInDisplay(4);
}
btn5.onclick = function(){
    setValueInDisplay(5);
}
btn6.onclick = function(){
    setValueInDisplay(6);
}
btn7.onclick = function(){
    setValueInDisplay(7);
}
btn8.onclick = function(){
    setValueInDisplay(8);
}
btn9.onclick = function(){
    setValueInDisplay(9);
}
//Actions

btnClear.onclick = function(){
    // dispMath.innerHTML = "";
    dispMath.value = "";
}
btnDel.onclick = function(){
    // dispMath.innerHTML = dispMath.value.slice(0,-1);
    dispMath.value = dispMath.value.slice(0,-1);
}
btnPlus.onclick = function(){
    setValueInDisplay('+');

}
btnSubs.onclick = function(){
    setValueInDisplay('-');
}
btnPro.onclick = function(){
    setValueInDisplay('*');
}
btnDiv.onclick = function(){
    setValueInDisplay('/');
}
btnParL.onclick = function(){
    setValueInDisplay('(');
}
btnParR.onclick = function(){
    setValueInDisplay(')');
}
btnDot.onclick = function(){
    setValueInDisplay('.');
}
btnMod.onclick = function(){
    setValueInDisplay('%');
}
btnAns.onclick = function(){
    // if(memAns != null){
    //     dispMath.value = memAns;
    // }else{
        if(dispAns.value.length > 0){
            memAns = dispAns.value;
            dispAns.value = '';
            dispMath.value = memAns;
            memAns = '';
        } 
    // }
    
}
// btnRq.onclick = function(){
    // setValueInDisplay('%');
    
// }
// btnPow.onclick = function(){
//     setValueInDisplay('^');
// }
btnEqual.onclick = function(){
    dispAns.value = eval(dispMath.value);
    dispMath.value = '';
}

document.onkeyup = function(evt){
    // if(evt.keyCode == 96){
        //     setValueInDisplay(0);
    // }
    console.log(evt.keyCode);

    switch (evt.keyCode)
    {
        case 96: 
            setValueInDisplay(0);
            break;
        case 97: 
            setValueInDisplay(1);
        break;
        case 98: 
            setValueInDisplay(2);
        break;
        case 99: 
            setValueInDisplay(3);
        break;
        case 100: 
            setValueInDisplay(4);
        break;
        case 101: 
            setValueInDisplay(5);
        break;
        case 102: 
            setValueInDisplay(6);
        break;
        case 103: 
            setValueInDisplay(7);
        break;
        case 104: 
            setValueInDisplay(8);
        break;        
        case 105: 
            setValueInDisplay(9);
        break;
        case 107: 
            setValueInDisplay("+");
        break;
        case 109: 
            setValueInDisplay("-");
        break;
        case 106: 
            setValueInDisplay("*");
        break;
        case 111: 
            setValueInDisplay("/");
        break;
        case 8: 
            dispMath.value = dispMath.value.slice(0,-1);

        break;
        case 13: 
            dispAns.value = eval(dispMath.value);
            dispMath.value = '';
        break;
        case 110: 
            setValueInDisplay('.');
        break;
        case 46: 
            dispMath.value = "";
            break;
        case 65: 
            if(dispAns.value.length > 0){
                memAns = dispAns.value;
                dispAns.value = '';
                dispMath.value = memAns;
                memAns = '';
            }
        break;
        case 222: 
            setValueInDisplay("(");
        break;
        case 191: 
            setValueInDisplay(")");
        break;
        
    }
}

