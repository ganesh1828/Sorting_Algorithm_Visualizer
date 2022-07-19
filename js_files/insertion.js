
function insertion()
{
    c_delay=0;
    var array_size=document.getElementById("arr_size1").value;
    console.log("in insertion");
    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],arr[j],"yellow");//Color update

        var key= arr[j];
        var i=j-1;
        while(i>=0 && arr[i]>key)
        {
            div_update(divs[i],arr[i],"red");//Color update
            div_update(divs[i+1],arr[i+1],"red");//Color update

            arr[i+1]=arr[i];

            div_update(divs[i],arr[i],"red");//Height update
            div_update(divs[i+1],arr[i+1],"red");//Height update
    
            div_update(divs[i],arr[i],"rgb(24, 226, 237)");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],arr[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],arr[i+1],"rgb(24, 226, 237)");//Color update
            }
            i-=1;
        }
        arr[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],arr[t],"rgb(59, 166, 171)");//Color update
        }
    }
    div_update(divs[j-1],arr[j-1],"rgb(59, 166, 171)");//Color update

    
}