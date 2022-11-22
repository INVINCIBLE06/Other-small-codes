function Shifting()
{
	var p,d;
	var arr = [];
	n = window.prompt("Enter the number of Value :-");
	alert("you total number are " +n);

	for(i=0; i<n; i++)
	{
		arr[i] = window.prompt('Enter the number one by one :-' +(i+1));
	}
	alert ("The array that was entered by the user was :-" +arr)

	 p = window.prompt("Enter the number of places you want to shift :-");
	alert("you total number are " +p);
	if(p > 0 && p < n)
	{
	 d = window.prompt("Enter the direction 0 is for left or 1 is for right:-");
	alert("you total number are " +d);
			//Initializing array temp with size n
			var temp = new Array(n);
			// console.log(temp)	
			let k = 0;
	if( d == 0)
	{
	
		// Storing the n - d elements of
		// array arr[] to the front of temp[]
		for (let i = p; i < n; i++) {
		temp[k] = arr[i];
		k++;
		}

		// Storing the first p elements of array arr[]
		// into temp
		for (let i = 0; i < p; i++) {
		temp[k] = arr[i];
		k++;
		}
		//Printing the temp array which stores the result
		for (let i = 0; i < n; i++) {
		console.log(temp[i]+" ");
		}
		alert ("The array that we got after shfting :-" +temp)

	}else if( d == 1 )
	{
		// Storing the n - d elements of
		// array arr[] to the front of temp[]
		for (let i = p; i < n; i++) {
		temp[k] = arr[i];
		k++;
		}

		// Storing the first d elements of array arr[]
		// into temp
		for (let i = 0; i < p; i++) {
		temp[k] = arr[i];
		k++;
		}
		//Printing the temp array which stores the result
		for (let i = 0; i < n; i++) {
		console.log(temp[i]+" ");
		}
		alert ("The array that we got after shfting :-" +temp)
	}
	else{
		window.prompt("You have a wrong choice");
	}
	}else if( p <= 0)
	{
	p = window.prompt("You have enter wrong value, Please enter the number of places you want to shift again :-");
	alert("you total number are " +p);
	}else{
	p = window.prompt(" You have enter wrong value, Please enter the number of places you want to shift again :-");
	alert("you total number are " +p);
}	
}
Shifting();

/**
 * As per me the time complexity is - O(n)
 * The first will run for taking valur from user and other will only run if the condition pass.
 */

/**
 * As per me the the space complecity is O(n to the power 3)
 * because we are storing three arrays
 * 1. actual array
 * 2. temp for that array
 * 3. after shifting array
 */