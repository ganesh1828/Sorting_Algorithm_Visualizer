function heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(divs[i],arr[i],"red");//Color update
    div_update(divs[j],arr[j],"red");//Color update

    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

    div_update(divs[i],arr[i],"red");//Height update
    div_update(divs[j],arr[j],"red");//Height update

    div_update(divs[i],arr[i],"rgb(24, 226, 237)");//Color update
    div_update(divs[j],arr[j],"rgb(24, 226, 237)");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && arr[l]>arr[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],arr[largest],"rgb(24, 226, 237)");//Color update
        }

        largest=l;

        div_update(divs[largest],arr[largest],"red");//Color update
    }

    if(r<n && arr[r]>arr[largest])
    {
        if(largest!=i)
        {
            div_update(divs[largest],arr[largest],"rgb(24, 226, 237)");//Color update
        }

        largest=r;

        div_update(divs[largest],arr[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(arr.length/2)-1;i>=0;i--)
    {
        max_heapify(arr.length,i);
    }

    for(var i=arr.length-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],arr[i],"rgb(59, 166, 171)");//Color update
        div_update(divs[i],arr[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(divs[i],arr[i],"rgb(24, 226, 237)");//Color update
        div_update(divs[i],arr[i],"rgb(59, 166, 171)");//Color update
    }
    div_update(divs[i],arr[i],"rgb(59, 166, 171)");//Color update
}