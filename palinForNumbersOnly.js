let x = 54245;
let rev = 0;
function palin (n) {
    let remainder = n%10;
    let m=parseInt(n/10);
    rev = rev*10 + remainder;
    if(m!==0) {
        palin(m);
    }
    if(x===rev){return'x is a pallindrome'}
    else {return'x is not a pallindrome'}
}
console.log(palin(x));