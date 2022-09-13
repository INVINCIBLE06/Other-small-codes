let n = 10;
let n1 = 0;
let n2 = 1;
let nxt = 0;

console.log("Fibonacci Series :- ");

console.log(n1);
    console.log(n2);
for(let i = 1; i <= n; i++)
{
    nxt = n1 + n2;
    console.log(nxt);
    n1 = n2;
    n2 = nxt;
}