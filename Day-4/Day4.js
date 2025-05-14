// Task-1

for(let i = 1;i<=10;i++){
    console.log(i);
}

// Task-2

for(let i = 1; i<=10; i++){
    console.log(5*i);
}

// Task-3

function sumtotal(num1){
    let sum1=0 ;
    while (num1>0) {
        sum1 = sum1 + num1 ;
        num1 = num1 - 1;
       
    }
     return sum1;
    
}

console.log(sumtotal(5));

// Task - 4

function count(num){
    while(num>0){
        console.log(num);
        num = num - 1;
    }
    
}
count(10);


// Task - 5
function dowhile(num){
let i =1 ;
do{
    console.log(i);
    i++;
} while(i<=num);
}

dowhile(20);
