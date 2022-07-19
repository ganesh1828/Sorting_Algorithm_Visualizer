function selection() 
{ 
    console.log(arr);
    var i,j;
    c_delay=0;
    const buttonElement = document.getElementById('btn');
    for( i = 0; i < arr.length-1; i++)
    {
        div_update(divs[i],arr[i],"red");//Color update

        // Finding the smallest number in the subarray
        let min = i;
        div_update(divs[i],arr[i],"yellow");//Color update
        for(j = i+1; j < arr.length; j++)
        {
            
            if(arr[j] < arr[min]) 
            {
                min=j; 
            }
         }
         
         if (min != i) 
         { 
             div_update(divs[i],arr[i], "red");//Height update
            
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
             div_update(divs[min],arr[min], "red");//Height update
             div_update(divs[i],arr[i], "red");//Height update
             div_update(divs[min],arr[min], "rgb(24, 226, 237)");//Height update

        }
        div_update(divs[i],arr[i], "rgb(59, 166, 171)");//Color update
        
    }
    div_update(divs[arr.length-1],arr[arr.length-1], "rgb(59, 166, 171)");//Color update
    console.log("arr");
}




