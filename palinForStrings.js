// var str = 'malayalam';
// if(str.split('').reverse().join('')==str){
//     console.log("str is a pallindrome.");
// }
// else{
//     console.log("str is not a pallindrome");
// }
let str='Malayalam',x=0,rev = [];
function palin(s){
    rev[x]=s[s.length-1-x];
    x++;
    if(x<s.length) {
        palin(s);
    }
    if(rev.join('')===s){
        return str + " is a pallindrome";
    }
    else{
        return str + " is not a pallindrome";
    }
}
console.log(palin(str.toLowerCase()));