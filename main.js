var display=""
var isFirstInput=true;


function numberButton(number){
    display+=number; updateDisplay();
}

function operationButton(operation){
    if(isFirstInput){
        display+=operation; updateDisplay();
        isFirstInput=false;
    }else{
        calculateResult(); display+=operation; updateDisplay();
    }
    
}
function calculateResult(){
    calculation=display;
    result=eval(calculation);
    display=result; updateDisplay();
    resetCalculator(); display=result;
}


function resetCalculator(){
    display="";
    isFirstInput=true;
}

function updateDisplay(){
    document.getElementById('display').innerHTML=display;
}