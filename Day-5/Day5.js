// Task-1

function evenodd(num){
    if(num % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
evenodd(10);
evenodd(5);

// Task-2 
function square(num){
    return num * num ;
}
console.log(square(4));

// Task-3

function maximun(num1, num2){
    if(num1 > num2){
        console.log("num1 is greater");
    }else{
        console.log("num2 is greater");
    }
}
maximun(10,15);
maximun(20,15);

// Task-4
function concatenate(str1, str2){
    return str1 + " " +  str2
}
console.log(concatenate("holla", "Divyanshu Shekhar"));

// Task-5
let sum  = (num1, num2) =>{
    return num1 + num2 ;
}
console.log(sum(6,5));

// Task-6

const  check = (str, char) =>{
   return  str.includes(char);
}
console.log(check("hello", "e"));

// Task-7

const product = (x, y=2) => {
 return x + y
}
console.log(product(5));

// Task-8

let greeting = (name, age = 20) => {
    return  `Hello ${name}  your age :  ${age} `;
}

console.log(greeting("Divyanshu", 25));

// Task-9

function x(){
    return ("Hii");
}
function y(func1 ,num){
    let result = ""
    for(let i = 1 ; i<=num ; i++){
        result = result + func1() ;
         
    }
    return result;
}
console.log(y(x, 4));

//Task-10

function xy(num){
    return num + 2 ;
}

function yx(num){
    return num - 2; 
}

function addtwofn(func1, func2, num){
    
    let result =   num + func1(num) + func2(num);
    return result ;
}
console.log(addtwofn(xy,yx,5));