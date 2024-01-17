let butt=document.getElementsByTagName("button");
let res=document.getElementById("result");

for(i=0;i<butt.length;i++){
    butt[i].onclick=function(){
        let i=this.innerText;
        updateDisplay(i);
    }
}

function updateDisplay(input){
    let currentDis=res.innerText;
    if(currentDis=="0"){
        if(input!="C" && input!="DEL" && input!="="){
            res.innerText=""
            res.innerText+=input;
        }
    }
    else{
        if(input=="DEL"){
            res.innerText=currentDis.substring(0,currentDis.length-1);

        }
        if(input=="C"){
            res.innerText="0"
        }
        if(input!="C" && input!="DEL" && input!="="){
            res.innerText+=input;
        }
        if(input=="="){
            let dis=res.innerText;
            res.innerText=eval(dis);
        }
    }
}