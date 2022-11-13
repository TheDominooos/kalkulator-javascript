var display=""








function updateDisplay(){
    document.getElementById('display').innerHTML=display;
}
/*
var operationType=0;
var number1=""; 
var number2="";
var display="";
var isFirstInput=true;
var result;


function numberButton(input){
    display+=input; updateDisplay()
    if(isFirstInput){
        number1+=input; alert("number1:"+number1);
    }else{
        number2+=input; alert("number2:"+number2);
        
    }
}

function operationButton(operationType){
    switch(operationType){
        case 1:{
            if (isFirstInput){
                display+="+"; updateDisplay();
                isFirstInput=false;
            }else{
                number1=Number(number1)+Number(number2);
                display=number1+"+";
                number2="";
            }
        }
    }
}
function updateDisplay(){
    document.getElementById('display').innerHTML=display;
}
*/