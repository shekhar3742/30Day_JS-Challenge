// Task-1
function checkNum(num){
    if(num>0){
        return ("Positive")
    }else if(num == 0){
        return ("zero");
    }else{
        return ("negative");

    }
}
console.log(checkNum(5));
console.log(checkNum(-1));
console.log(checkNum(0));


// Task-2
function vote(age){
    if(age>=18){
        return ("can vote");
    }else{
        return ("can't vote");
    }
}
console.log((vote(20)));

// Task-3

function largest(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return ("num1 is largest");
    } else if(num2>num1 && num2>num3){
         return ("num2 is largest");
    }else{
         return ("num3 is largest");
    }
}
console.log(largest(18,20,21));
console.log(largest(18,20,17));
console.log(largest(18,10,11));

// Task-4
function Day(num){
    switch (num) {
        case 1:
            return ("Sunday");
            break;
        case 2:
            return ("Monday");
            break;
        case 3:
            return ("Tuesday");
            break;
        case 4:
            return ("Wednesday");
            break;
        case 5:
            return ("Thrusday");
            break;
        case 6:
            return ("friday");
            break;
        case 7:
            return ("Saturday");
            break;
        
        default:
            return("put valid number")
            break;
    }
}
console.log(Day(1));
console.log(Day(2));
console.log(Day(3));
console.log(Day(4));
console.log(Day(5));
console.log(Day(6));
console.log(Day(7));
console.log(Day(8));

// Task-5

function Score(marks){
    switch(true){
        case  marks>=90:
        return ("A");
        break;
        case  marks>=70:
        return ("B");
        break;
        case marks>=50:
        return ("C");
        break;
        case  marks>=40:
        return ("D");
        break;
        default : 
        return ("F");
        break;
 
    }
}
console.log(Score(80));

// Task-6

function EvenOdd(num){
    return (num % 2 == 0) ? "Even" : "Odd";
}
console.log(EvenOdd(5));
console.log(EvenOdd(10));

function leapyear(year){
    if((year % 4 == 0 && year % 100 != 0)|| (year % 400 ==0)){
        return (year + "-leap year")
    }else{
        return (year + "-not a leap year")
    }
}
console.log(leapyear(2008));
console.log(leapyear(2009));