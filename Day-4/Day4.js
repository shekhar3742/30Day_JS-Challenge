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

// Task-6

function fact(num){
    let f = 1;
    let j = 1;
    do{
        f = f * j ;
        j++;
    }while(j<=num)
        console.log(f);
}
fact(5);

// Task - 8 

// *
// * *
// * * *
// * * * *
// * * * * *
function printStar(num){
   
    for(let i = 1 ; i<=num ; i++){
         let row = ""
        for(let j = 1 ; j<=i ; j++){
           row = row + "*";
        }
        console.log(row)
    }
   
}

printStar(5);

// Task - 9

function Continue(num){
    let i = 1;
    do{
        
        
        if (i===5) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }while(i<=num);

}
Continue(10);


function Break(num){
    let i = 1 ;
    do{
        
        console.log(i);
        i++;   
        if (i==7){
            break;
        }  
        
    }while(i<=num);

}
Break(10);

