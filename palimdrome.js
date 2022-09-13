// A palindromic number is a number that remains the same when its digits are reversed.
let org = 212;
let num = org;
let temp = 0;
let rev = 0;
while( num > 0 )
{
    temp = num % 10;
    rev = rev * 10 + temp;
    num = parseInt(num / 10);
    console.log(temp);
    console.log(rev);
}
console.log(rev);
console.log(num);
if(org == rev)
{
    console.log("It is a palimdrome number");
}
else
{
   console.log("It is not a palimdrome number ");
}