var bck=document.createElement('div');
bck.setAttribute('style','display:flex');
bck.style.height="800px"
// bck.style.backgroundColor="brown";
bck.style.justifyContent="center";
bck.style.alignItems="center";


var calcu=document.createElement('div');
calcu.setAttribute('style','display:flex');
calcu.setAttribute('class','outerbox');
calcu.style.flexDirection="column";
calcu.style.padding="20px"
calcu.style.backgroundColor="#ffa500";

var box=document.createElement('div');
box.setAttribute('id','box');
box.style.backgroundColor="white";
box.style.border="2px solid black";
box.style.flexBasis="fit-content";
box.style.padding="10px"

box.style.width="auto";
box.style.marginBottom="15px";
calcu.append(box);

var temp="";
var forbuttons=document.createElement('div');
forbuttons.setAttribute('class','container');
var rows=document.createElement('div');

rows.setAttribute('class','row');


for(let i=1;i<=10;i++){
    if(i===10)i=0;
 var button=document.createElement('button');
 button.innerHTML=`${i}`;
 button.style.margin="10px"
 button.addEventListener('click',foo.bind(null,i), false);
 var col=document.createElement('div');
 col.setAttribute('class','col-3');
 col.append(button);
 rows.append(col);
 if(i%4===0 ||  i===0){
 if(i===0){
    var button=document.createElement('button');
    button.innerHTML=`(`;
    button.style.margin="10px"
    button.addEventListener('click',foo.bind(null,"( "), false);
    var col=document.createElement('div');
    col.setAttribute('class','col-3');
    col.append(button);
    rows.append(col); 

    var button=document.createElement('button');
    button.innerHTML=`)`;
    button.style.margin="10px"
    button.addEventListener('click',foo.bind(null," )"), false);
    var col=document.createElement('div');
    col.setAttribute('class','col-3');
    col.append(button);
    rows.append(col); 
    forbuttons.append(rows);
    var rows=document.createElement('div');
    rows.setAttribute('class','row');  
 }
 forbuttons.append(rows);
 var rows=document.createElement('div');
 rows.setAttribute('class','row');
 }
 if(i===0)break;
}


calcu.append(forbuttons);
var op;
var rows=document.createElement('div');
rows.setAttribute('class','row'); 


var button=document.createElement('button');
button.innerHTML="/";
op=" / ";
button.addEventListener('click',foo.bind(null,op), false);
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col);


var button=document.createElement('button');
button.innerHTML="*";
op=" * ";
button.addEventListener('click',foo.bind(null,op), false);
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col);

var button=document.createElement('button');
button.innerHTML="+";
op=" + ";
button.addEventListener('click',foo.bind(null,op), false);
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col);


var button=document.createElement('button');
button.innerHTML="-";
op=" - ";
button.addEventListener('click',foo.bind(null,op), false);
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col); 

forbuttons.append(rows);
   
calcu.append(forbuttons);

var rows=document.createElement('div');
rows.setAttribute('class','row'); 

var button=document.createElement('button');
button.innerHTML="=";
button.style.width="100%";
button.style.padding="2px 20px"
button.style.margin="5px";
button.addEventListener('click',()=>{operation(temp)});
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col); 


var button=document.createElement('button');
button.innerHTML="Clear";
button.style.width="auto";
button.style.margin="5px";
button.addEventListener('click',()=>{
    temp="";
    var disp=document.getElementById('box');
    disp.innerText="";
});
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col); 

var button=document.createElement('button');
button.innerHTML="<=";
button.style.width="auto";
button.style.margin="5px";
button.addEventListener('click',()=>{
    var backspace=temp.split("");
    temp="";
    var templen=backspace.length
    for(let t=0;t<templen-1;t++)temp+=backspace[t];
    var disp=document.getElementById('box');
    disp.innerText=`${temp}`;
});
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col);

var button=document.createElement('button');
button.innerHTML=".";
op=".";
button.addEventListener('click',()=>{
    temp+=".";
    var disp=document.getElementById('box');
    disp.innerText=`${temp}`;
    converter=parseFloat;
});
var col=document.createElement('div');
col.setAttribute('class','col-3');
button.style.margin="10px"
col.append(button);
rows.append(col);



forbuttons.append(rows);
calcu.append(forbuttons);
var result;


function foo(i){
    temp+=i;
    var disp=document.getElementById('box');
     disp.innerText=`${temp}`;
}

var converter=parseInt;

function operation(temp){
    var num=temp.split(" ");
    var len=num.length;
    var iterate=0;
    var index,eachop,bracket1;
    for(iterate;iterate<len;iterate++){
        bracket1=num.indexOf("(");
        if(bracket1!==-1){
           num=Bracketof(num);
           if(num=="error"){
               result="error";
               break;
           }
           iterate=0;
           continue;
        }

        index=num.indexOf("/");
        if(index!==-1){
            num[index-1]=converter(num[index-1]);
            num[index+1]=converter(num[index+1]);
            if(!isNaN(num[index-1]) && !isNaN(num[index+1])) {
                num[index]=num[index-1]/num[index+1];
                num[index-1]=num[index+1]=num[index];
                result=num[index];
                if(!Number.isInteger(result))converter=parseFloat;
                iterate=0;
                continue;
            }else{
                num[index]="";
            }
        }

        index=num.indexOf("*");
        if(index!==-1){
            num[index-1]=converter(num[index-1]);
            num[index+1]=converter(num[index+1]);
            if(!isNaN(num[index-1]) && !isNaN(num[index+1])) {
                num[index]=num[index-1]*num[index+1];
                num[index-1]=num[index+1]=eachop=num[index];
                result=eachop;
                if(!Number.isInteger(result))converter=parseFloat;
                while(!isNaN(parseInt(num[index]))){
                    num[index]=eachop;
                    index=index-1;
                    console.log(index);
                    
                }
                iterate=0;
                continue;
            }else{
                num[index]="";
            }
        }

        index=num.indexOf("+");
        if(index!==-1){
            num[index-1]=converter(num[index-1]);
            num[index+1]=converter(num[index+1]);
            if(!isNaN(num[index-1]) && !isNaN(num[index+1])) {
                num[index]=num[index-1]+num[index+1];
                num[index-1]=num[index+1]=eachop=num[index];
                result=eachop;
                if(!Number.isInteger(result))converter=parseFloat;
                while(!isNaN(parseInt(num[index]))){
                    num[index]=eachop;
                    index=index-1;
                }
                iterate=0;
                continue;
            }else{
                num[index]="";
            }
        }

        index=num.indexOf("-");
        if(index!==-1){
            num[index-1]=converter(num[index-1]);
            num[index+1]=converter(num[index+1]);
            if(!isNaN(num[index-1]) && !isNaN(num[index+1])) {
                num[index]=num[index-1]-num[index+1];
                num[index-1]=num[index+1]=eachop=num[index];
                result=eachop;
                if(!Number.isInteger(result))converter=parseFloat;
                while(!isNaN(parseInt(num[index]))){
                    num[index]=eachop;
                    index=index-1;
                }
                iterate=0;
                continue;
            }else{
                num[index]="";
            }
        }

    }    


var resultdisp=document.getElementById('box');
     resultdisp.innerText=result; 
}
function Bracketof(num){
    count1=0;
    count2=0;
    var resultbracket=0;
    var num1=[];
    for(let i in num){
        if(num[i]=="(")count1+=1
        else if(num[i]==")")count2+=1;
    }
    if(count1!==count2)return "error";
    else{
        let bracketinside=0;
        for(let i in num){
            if(num[i]=="(")bracketinside=parseInt(i);
        }
        
        var bracketindex=0;
        
        for(let i=bracketinside;i<num.length;i++){
            num1[bracketindex]=num[i];
            bracketindex+=1;
            if(num[i]==")")break;
            
        }
        for(let i=0;i<bracketindex;i++){
            {
                index=num1.indexOf("/");
                if(index!==-1){
                    num1[index-1]=converter(num1[index-1]);
                    num1[index+1]=converter(num1[index+1]);
                    if(!isNaN(num1[index-1]) && !isNaN(num1[index+1])) {
                        num1[index]=num1[index-1]/num1[index+1];
                        num1[index-1]=num1[index+1]=num1[index];
                        resultbracket=num1[index];
                        if(!Number.isInteger(resultbracket))converter=parseFloat;
                        iterate=0;
                        continue;
                    }else{
                        num1[index]="";
                    }
                }

                index=num1.indexOf("*");
                if(index!==-1){
                    num1[index-1]=converter(num1[index-1]);
                    num1[index+1]=converter(num1[index+1]);
                if(!isNaN(num1[index-1]) && !isNaN(num1[index+1])) {
                num1[index]=num1[index-1]*num1[index+1];
                num1[index-1]=num1[index+1]=eachop=num1[index];
                resultbracket=eachop;
                if(!Number.isInteger(resultbracket))converter=parseFloat;
                while(!isNaN(parseInt(num1[index]))){
                    num1[index]=eachop;
                    index=index-1;
                    
                }
                iterate=0;
                continue;
            }else{
                num1[index]="";
            }
        }

        index=num1.indexOf("+");
        if(index!==-1){
            num1[index-1]=converter(num1[index-1]);
            num1[index+1]=converter(num1[index+1]);
            if(!isNaN(num1[index-1]) && !isNaN(num1[index+1])) {
                num1[index]=num1[index-1]+num1[index+1];
                num1[index-1]=num1[index+1]=eachop=num1[index];
                resultbracket=eachop;
                if(!Number.isInteger(resultbracket))converter=parseFloat;
                while(!isNaN(parseInt(num1[index]))){
                    num1[index]=eachop;
                    index=index-1;
                }
                iterate=0;
                continue;
            }else{
                num1[index]="";
            }
        }

        index=num1.indexOf("-");
        if(index!==-1){
            num1[index-1]=converter(num1[index-1]);
            num1[index+1]=converter(num1[index+1]);
            if(!isNaN(num1[index-1]) && !isNaN(num1[index+1])) {
                num1[index]=num1[index-1]-num1[index+1];
                num1[index-1]=num1[index+1]=eachop=num1[index];
                resultbracket=eachop;
                if(!Number.isInteger(resultbracket))converter=parseFloat;
                while(!isNaN(parseInt(num1[index]))){
                    num1[index]=eachop;
                    index=index-1;
                }
                iterate=0;
                continue;
            }else{
                num1[index]="";
            }
        }
    
                for(let i=bracketinside;i<(bracketindex+bracketinside);i++){
                    num[i]=resultbracket;
                    
                }
                
            }
        }
        
    }
    
    return(num);
    
}

bck.append(calcu);
document.body.append(bck);