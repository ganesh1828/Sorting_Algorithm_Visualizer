     
function quick()
{
    c_delay=0;

    quick_sort(0,arr.length-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = arr[start] ;//make the first element as pivot element.
    div_update(divs[start],arr[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (arr[ j ] < piv)
            {
                div_update(divs[j],arr[j],"yellow");//Color update

                div_update(divs[i],arr[i],"red");//Color update
                div_update(divs[j],arr[j],"red");//Color update

                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

                div_update(divs[i],arr[i],"red");//Height update
                div_update(divs[j],arr[j],"red");//Height update

                div_update(divs[i],arr[i],"rgb(24, 226, 237)");//Height update
                div_update(divs[j],arr[j],"rgb(24, 226, 237)");//Height update

                i += 1;
            }
    }
    div_update(divs[start],arr[start],"red");//Color update
    div_update(divs[i-1],arr[i-1],"red");//Color update
    
    var temp=arr[start];//put the pivot element in its proper place.
    arr[start]=arr[i-1];
    arr[i-1]=temp;

    div_update(divs[start],arr[start],"red");//Height update
    div_update(divs[i-1],arr[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],arr[t],"rgb(59, 166, 171)");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }