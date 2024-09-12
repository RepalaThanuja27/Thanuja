var display=document.getElementById("display");

 var btn=document.getElementsByClassName("btn");


for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click",buttonfun);

}



function buttonfun(e){
    var cur=e.target
    var buttonvalue=cur.innerText;
    if (buttonvalue=="="){
        var result=eval(display.value);
        display.value=result;
    }
    else{
        display.value= display.value+buttonvalue;
    }
    
}