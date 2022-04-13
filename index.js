document.getElementById("bill").addEventListener("input", checkText);
document.getElementById("people").addEventListener("input", checkText);

function checkText(){
    if(document.getElementById("bill").value == ""){
        calculate.disabled=true; 
        return;
    }
    if(document.getElementById("people").value == ""){
        calculate.disabled=true; 
        return;
    }
    calculate.disabled=false;
}

function calculateTip(){
var bill =document.getElementById('bill').value;
var people=document.getElementById('people').value;
var service=document.getElementById('service').value;
var tip=document.getElementById('tip');
    
var calculate=document.getElementById('calculate');
    let warning= document.getElementById('warning');
    
    let percentTip = '';
    if (service === "1 star"){
      percentTip = 0.02;
    } else if (service === "2 star"){
      percentTip = 0.05;
    } else if(service==='3 star') {
      percentTip = 0.1;
    }
    else if(service==='4 star'){
        percentTip = 0.15;
    }
    else{
        percentTip = 0.2;
    }

var tTip=(bill*percentTip)/people;
   tTip=Math.round(tTip);
    tTip.textContent=tTip;


document.getElementById('tip').innerHTML=tTip;
}
        
    document.getElementById('calculate').onclick=function(){
        calculateTip();
    }
    