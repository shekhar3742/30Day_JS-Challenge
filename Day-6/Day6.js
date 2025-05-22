//Task-1
const number = [1 , 2, 3,4 ,5];
console.log(number);

// Task-2
console.log(number[0]);
console.log(number[number.length - 1]);

// Task-3
number.push(6);
console.log(number);

// Task-4
number.pop();
console.log(number);

// Task-5

number.shift();
console.log(number);

// Task-6

number.unshift(7);
console.log(number);

// Task-7
console.log(number);
const  doublenumber = number.map(double);
function double(num){
    return num * 2; 
}
console.log(doublenumber);

// Task-8
console.log(number);
const evenfilter = number.filter(evenodd);
function evenodd(num){
    if(num % 2 == 0){
        return num ;
    }
}
console.log(evenfilter);

// Task-8
console.log(number);
const numberreduce = number.reduce(sum, 0);

function sum(cuurent, x){
    return cuurent + x;
}
console.log(numberreduce);


// Task-10

console.log(number);
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    
}

// Task-11
number.forEach((e)=>{
    console.log(e);
});

// Task-11

let mat_num = [[10,20,40],[11,44,77]];

console.log(mat_num);

// Task-12
console.log(mat_num[1][1]);