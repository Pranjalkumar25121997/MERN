let str = "abhinav";

if(str[0] === 'a' && str.length>3){
    console.log("A good String");
}

let num = 12;

if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
    console.log("Safe");
}else{
    console.log("unsafe");
}
// Output :- "Safe"