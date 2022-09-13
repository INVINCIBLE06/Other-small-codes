//let num = window.prompt("Enter the number :- ");
//alert("You number is " +num);
let num = 54778;
let NUM = num;
let len = NUM.toString().length;
let temp, ASN = 0, Sum = 0;
    while(num > 0)
    {
        temp = num % 10;
        // console.log(temp);
        num = Math.trunc(num / 10);
        // console.log(num); 
        ASN = Math.pow(temp,len);
        Sum = Sum + ASN;       
    }
// console.log(ASN);
if(NUM == Sum)
{
    console.log("It is a Armstrong number :- " +NUM);
}
else
{
    console.log("It is not a Armstong number :- " +NUM);
}



