function findfreq()
{
    var arr = [], freq = [], size;
	size = window.prompt("Enter the number of element you want in your array :-");
	alert("Total Elements are : " +size);
    console.log(size);
    for(i=0; i<size; i++)
	{
		arr[i] = window.prompt('Enter the number one by one :-' +(i+1));
	}
	alert("The elements in your array are :-" +arr);
    console.log(arr);
    for(i=0; i<size; i++)
    {
        count = 1;
        for(j=i+1; j<size; j++)
        {
            /* If duplicate element is found */
            if(arr[i]==arr[j])
            {
                count++; 
                /* Make sure not to count frequency of same element again */
                freq[j] = 0;
            }
        }
        /* If frequency of current element is not counted */
        if(freq[i] != 0)
        {
            freq[i] = count;
        }
    }
    
     /*
     * Print frequency of each element
     */
        for(i=0; i<size; i++)
        {
            if(freq[i] != 0)
            {
                alert("Frequency of all elements of array :" +arr[i] +freq[i]);
                console.log(arr[i], freq[i]);
            }
        }
        return 0;
}

findfreq();