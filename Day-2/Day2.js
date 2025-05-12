// Activity 1

function sum(num1, num2){
    return num1 + num2
}
console.log(sum(4,5));

function sub(num1, num2){
    return num1 - num2
}

console.log(sub(10,5));

function mul(num1, num2){
    return num1 * num2;
}

console.log(mul(5,5));

function Div(num1, num2){
       return num1 / num2 ;
 }
   
 console.log(Div(10,5));
 console.log(Div(2,5));

function Rem(num1, num2){
    return num1 / num2;
}
console.log(Rem(8,3));

// Activity 2
let x ;
console.log(x + 2);
console.log(x - 5);

// Activity 3

function compare(num1, num2){
    if(num1>num2){
        return (num1+ " " + "num1 is greater than num2" + " " + num2);
    }
    else{
        return (num2 + " " + "num2 is greater than num1" + " " + num1);
    }
}
console.log(compare(5,8));
console.log(compare(16,8));

function compareEqual(num1, num2){
    if(num1<=num2){
        return (num1 + " " + "num1 is eual or less than num2" + " " + num2);
    }
    else if(num1>num2){
         return (num1 + " " + "num1 is greater than num2" + " " + num2);
    
    }
}
console.log(compareEqual(10,10));
console.log(compareEqual(10,5));

function AssingCompare(num1, num2) {
    if(num1 == num2){
        return true ;
    }
    else{
        return false; 
    }
    
}
console.log(AssingCompare(5,"5"));

function DoubleAssingCompare(num1, num2) {
    if(num1 === num2){
        return true ;
    }
    else{
        return false; 
    }
    
}

console.log(DoubleAssingCompare(5,"5"));
console.log(DoubleAssingCompare(5,5));

// Activity 4
 function DoubleAND(color){
    if(color == 'Blue' && color != 'Red'){
        return true;
    }
    else{
        return false;
    }
 }
console.log(DoubleAND('green'));

 function DoubleOR(color){
    if(color == 'Blue' || color == 'Red'){
        return true;
    }
    else{
        return false;
    }
}

console.log(DoubleOR('Green'));
console.log(DoubleOR('Red'));
console.log(DoubleOR('Blue'));

function DoubleNot(color){
    if( color != 'Red'){
        return true;
    }
    else{
        return false;
    }
}

console.log(DoubleNot('Red'));
console.log(DoubleNot('Blue'));

// Activity 5

function pass(num){
    return  (num >= 50) ? "pass" : "fail" ;
}
console.log(pass(40));
console.log(pass(60));