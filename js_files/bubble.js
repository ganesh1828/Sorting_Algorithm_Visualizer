
function bubble()
{

    
    disabledbutton();
    

    console.log(arr);
    const buttonElement = document.getElementById('btn');
    for(var i = 0; i < arr.length; i++)
    {
        
      // Last i elements are already in place  
      for(var j = 0; j < ( arr.length - i -1 ); j++)
      {
        div_update(divs[j],arr[j],"yellow");//Color update
        if(arr[j]>arr[j+1])
            {
                div_update(divs[j],arr[j], "red");//Color update
                div_update(divs[j+1],arr[j+1], "red");//Color update

                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;  

                div_update(divs[j],arr[j], "red");//Height update
                div_update(divs[j+1],arr[j+1], "red");//Height update
            }
            div_update(divs[j],arr[j], "rgb(24, 226, 237)");//Color updat
        }
        div_update(divs[j],arr[j], "rgb(59, 166, 171)");//Color update
    }
    div_update(divs[0],arr[0], "rgb(59, 166, 171)");//Color updat
    console.log(arr);
    enablebutton();
}





