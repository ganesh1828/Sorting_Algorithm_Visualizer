function randomNumber(min, max) 
{ 
    return Math.floor(Math.random() * (max - min) + min);
} 

var speed=1000;
var arr=[];
var divs=[];
var ele=document.getElementById("bar");
var margin_size=0.2;


function vis_speed()
{
    var array_speed=document.getElementById("arr_size").value;
    switch(parseInt(array_speed))
    {
        case 1: speed=100;
                break;
        case 2: speed=1000;
                break;
        case 3: speed=10000;
                break;
        case 4: speed=100000;
                break;
        case 5: speed=1000000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;


function createarray()
{
    
    for(var i=0;i<arr.length;i++)
    {
        divs[i].remove();
    }
    vis_speed();
    ele.style.display="flex";
    var array_size=document.getElementById("arr_size1").value;
    console.log(array_size);
    console.log(array_size);
    for(var i=0;i<array_size;i++)
    {
        arr[i]=randomNumber(1, array_size);
        divs[i]=document.createElement("div")
        ele.appendChild(divs[i]);
        arr[i]=(100-arr[i]);
        divs[i].style=" margin:0% "+margin_size+"%; background-color: rgb(24, 226, 237); width:"+(100/array_size-(2*margin_size)) + "%; height:" + arr[i] + "%;";
    }
    ele.style.display="flex";
   

}
var array_size=document.getElementById("arr_size1").value;
console.log(array_size);
var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=1000;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color+ ";";
    },c_delay+=delay_time*10);
}


function disabledbutton()
{
    window.setTimeout(function(){
    document.getElementById("createarray").disabled = true;
    document.getElementById("btn").disabled = true;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").disabled = true;
    },c_delay+=delay_time*10);
}

function enablebutton()
{
    window.setTimeout(function(){
        
    document.getElementById("createarray").disabled = false;
    document.getElementById("btn").disabled = false;
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
        },c_delay+=delay_time*10);

}