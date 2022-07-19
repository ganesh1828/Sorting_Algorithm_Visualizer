
function merge()
{
    c_delay=0;
    console.log(arr.length);
    merge_partition(0,arr.length-1);
    console.log("after");
    console.log(arr);
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=arr[q++];
            div_update(divs[q-1],arr[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=arr[p++];
            div_update(divs[p-1],arr[p-1],"red");//Color update
        }
        else if(arr[p]<arr[q])
        {
            Arr[k++]=arr[p++];
            div_update(divs[p-1],arr[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=arr[q++];
            div_update(divs[q-1],arr[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        arr[start++]=Arr[t];
        div_update(divs[start-1],arr[start-1],"rgb(59, 166, 171)");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],arr[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}