var display=document.getElementById("display");
var naught=document.getElementById("zero");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var clear=document.getElementById("clear");
var dot=document.getElementById("dot");
var modulo=document.getElementById("modulo");
var division=document.getElementById("division");
var multiplication=document.getElementById("multiplication");
var subtraction=document.getElementById("subtraction");
var addition=document.getElementById("addition");
var equals=document.getElementById("equals");
var backspace=document.getElementById("backspace");
var operand1;
var operand2;
var operator;
var operationdone=false;

backspace.addEventListener('click',function(){
var display_str=document.getElementById("display").innerHTML;
document.getElementById("display").innerHTML=display_str.slice(0,display_str.length-1);;
});

equals.addEventListener('click',function(){
    var temp=document.getElementById("display").innerHTML;
    display.innerHTML=eval(temp);
});

addition.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    operand1=document.getElementById("display").innerHTML;
    operator="+"
    display.innerHTML+="+";
});

subtraction.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    operand1=document.getElementById("display").innerHTML;
    operator="-";
    display.innerHTML+="-";
});

multiplication.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    operand1=document.getElementById("display").innerHTML;
    operator="*";
    display.innerHTML+="*";
});

division.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    operand1=document.getElementById("display").innerHTML;
    operator="/";
    display.innerHTML+="/";
});

modulo.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    operand1=document.getElementById("display").innerHTML;
    operator="%";
    display.innerHTML+="%";
});

dot.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+=".";
});

naught.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="0";
});

one.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="1";
});

two.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="2";
});

three.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="3";
});

four.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="4";
});

five.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="5";
});

six.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="6";
});

seven.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="7";
});

eight.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="8";
});

nine.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML+="9";
});

clear.addEventListener('click',function(){
    if(operationdone==true){
        operationdone=false;
        document.getElementById("display").innerHTML="";
    }
    display.innerHTML="";
});


