export const codeSnippets = {
    primitive_data_types: {
        code: `let a = 10,b = 20.2,c = -33;
console.log(typeof a, typeof b, typeof c); // number, number, number

let str1 = "aravind", str2 = '10.2', str3 = \`abc\`;
console.log(typeof str1, typeof str2, typeof str3); // string, string

let college;
// as college variable is not intialised , by default it will be intialised with undefined
console.log(typeof college); // undefined

let b1 = true,b2 = false;
console.log(typeof b1, typeof b2); // boolean, boolean`,
        height: "320px"
    },

    non_primitive_data_types: {
        code: `let arr = [10, 20, true, "aravind", undefined];
console.log(arr[0], arr[4], arr[2]); // 10 , undefined, true
// In this the variable 'arr' internally holds the memory address  (arr = #4300)
arr[2] = 19.23;
console.log(arr); // [10, 20, 19.23, "aravind", undefined]


let obj = {name: 'aravind' , age: 22} ;
console.log(obj.name, obj.age); // "aravind", 22
console.log(obj["name"], obj["age"]); // "aravind", 22 
obj["age"] = 33 ; // updates the age to 33
console.log(obj); // {name: 'aravind', age: 33}
        `,
        height: '340px'
    },

    unary_operators: {
        code: `let x = 10; 
x++; // post increment nothing  but  x = x + 1;
console.log(x); // 11
x--; // post decrement, nothing but x = x - 1;       
console.log(x); // 10

let y = 3;
console.log(y++);// 3
console.log(y); // 4
// in post increment/decrement value will be accessed before updation.

let a = 5; 
console.log(++a); // 6
console.log(a); // 6
// in pre increment/decrement value will be updated and later be accessed.
`,
        height: '410px'
    },

    arithmatic_operators: {
        code: `console.log(2 + 3, 2 - 3, 2*3, 5/2, 2%3); //5,  -1,  6,  2.5,  2

console.log(2 + '3'); //  String(2) + '3' =>  23 , 23 
// since one operand is of string type + acts as concatenation operator by converting the other operand to String type

console.log(2 - '3'); // 2 - Number('3') => 2 - 3 => -1
// '-' operator always acts as arithmatic operator if any operand is non numeric it will internally converts into number type.

console.log(undefined - 10); // Number(undefined) - 10 => NaN - 10 => NaN

console.log(true + 3); // Number(true) + 3 => 1 + 3 => 4
// No operand is a string so '+' will act as arithmatic operator by converting non number types to number type implicitly.

console.log(10 / "2"); // 10 / Number("2") => 10 / 2 => 5
// '/' operator always acts as arithmatic operator if any operand is non numeric it will internally converts into number type`,
        height: "400px"
    },
    conditional_statements: {
        code: `if(condition1){ // condition can be of any data type
    // if the condition is a truthy value then this block of code will be executed.
}
else if(condition2){
 // if \`condition1\` is a falsy value and \`condition2\` is a truthy value then this block will be executed.
}
else if(condition3){
    // if \`condition2\`, \`condition1\` both are falsy values and \`condition3\` is a truthy value 
    // then this block will be executed
}
else {
    // if all the above conditions are failed then this block will be executed.
}`,
        height: '360px'
    },
    for_loop: {
        code: `for(intialisation; condition; updation){ 
   /*
    * intialisation: 
    *   this will be executed at the start of iterations.
    * condition:
    *   this expression is evaluated as truthy/falsy value.
    *   It gets executed after before entering into the block of code.
    *   If it's value is a falsy control exists out the for loop.
    * updation: 
    *   this expression gets executed after each iteration.
    */
}
// Example: The below for loop executes the block of code for 2 times.
for(let i = 3; i <= 5; i+=2){ 
    console.log(i); // output: 3 , 5 
}`,
        height: '430px'
    },
    while_loop: {
        code: `while(condition){
    // until the condition is a truthy value this block of code executes repetedly.
}
// Example: the below while loop executes for 2 times.
let i = 3; 
while(i <= 5){
    console.log(i); // output: 3, 5
    i += 2;
}`,
        height: '260px'
    },
    do_while_loop: {
        code: `do {
    // this will get executed atleast once.
    // from the second time onwards this block gets executed only if \`condition\` is truthy value.
}
while(condition);
// Example: Below do-while loop executes for 2 times.
let i = 3;

do {
    console.log(i); // output: 3, 5
    i += 2;
}
while(i <= 5);`,
        height: '360px'
    },
    for_in_loop: {
        code: `// Example1: for-in on Arrays
let arr = [4, 5, 3, 10];
for(let i in arr){ // iterates through keys of object
    console.log(i); // output: 0, 1, 2, 3
    // as keys of an array are numbers starting from 0 to arr.length - 1;
}

//Example2: for-in on object literals
let obj = {name: 'aravind', age: 22};
for(let i in obj){
    console.log(i);// output: 'name', 'age'
}

// Example3: for-in loop on strings
let name = "aravind";
for(let i in name){
    console.log(i); // output: 0, 1, 2, 3, 4, 5, 6
}`,
        height: '460px'
    },
    for_of_loop: {
        code: `// Example1: for-of loop on arrays.
let arr = [4, 5, 3, 10];
for(let i of arr){ // iterates through values of iterables
    console.log(i); // output: 4, 5, 3, 10
}

// for-of loop doesn't work on objects as they are not iterables.

//Example2: for-of loop on strings.
let name = "aravind";
for(let i of name){
    console.log(i); //output: 'a', 'r', 'a', 'v', 'i', 'n', 'd'
}`,
        height: '350px'
    }
}

export const functionsCodeSnippets = {
    function_declaration: {
        code: `function callme(parameter1, parameter2){
    // function's input / parameters => parameter1 and parameter2
    // function returning the sum of input values (result).
    return parameter1 + parameter2 ;
}

// The above function canbe executed by invoking it.
let result = callme(10, 20);
console.log(result); // output: 30`,
            height: "250px"
    },
    anonymous_function: {
        code: `let a = 20, b = function(param1, param2){
    // param1 and param2 are parameters.
    console.log(param1 + param2);
    console.log("inside function");
};

// 'a' is a primitive data type and 'b' is a non primitive data type.
// here a, b are two variables 'a' holds a number data type , 'b' holds a function data type.

console.log(typeof a , typeof b); // output: number, function
`,
        height: "300px"
    },
    scope_statements: {
        code: `let a = 20; // global statement
console.log("something"); // global statement
function callme(){ // variable 'callme' is present as a global statement

    let a = 10; // local statement

    let f = function(){ // variable 'f' is present inside a function so local statement.
        console.log("nested function"); // local statement
    }
}
console.log("end"); //global statement.
if(true){
    console.log("inside if"); // global statement. as it is not inside a function.
}`,
        height: '380px'
    },
    primitive_example: {
        code: `let a = 20, b = 'aravind';`,
        height: "230px"
    },
    non_primitive_example: {
        code: `let a = { // a = #100
    name: 'aravind',
    age: 22,
};
let arr = [2, 3, 4]; // arr = #300
let f = function(){ // f = #800
    console.log("this is a function");
}`,
height: "230px"
    },
    val_comparision: {
        code: `let a = 20; 
let b = 20;
console.log(a === b , a == b); 
// output: true , true`,
        height: "150px"
    },
    ref_comparision: {
        code: `let a = {name: 'aravind'} // a = #100 ;
let b = {name: 'aravind' } // c = #200;
console.log(a === b , a == b); 
// output: false, false`,
        height: "150px"
    },
    call_by_value: {
        code: `function func(a){
    // a = 10
    console.log(a); //output: 10 
}
let x = 10;
func(x);`,
        height: "220px"
    },
    call_by_reference: {
        code: `function func(obj){
    // obj = #200
    console.log(obj);
//output: {name: "aravind"} => value at address #200
}
let x = { name: "aravind" }; // x = #100
func(x); // x's value is a memory reference.`,
        height: "220px"
    },
    call_by_value_ex2: {
        code: `function func(a){
    /*
        a's value gets updated 
        with in the function.
    */
   console.log(a); // output: 20
    a = 190;
    console.log(a); // output: 190
}
let x = 20;
func(x);
console.log(x); // output: 20`,
        height: "430px",
    },
    call_by_reference_ex2: {
        code: `function func(a){
    // a = #200
    console.log(a); // {age: 22}
    /*
     This updates the 'age' property's
     value at address #200.
    */
    a.age = 23; 
    console.log(a);// {age: 23}
}
let x = {age: 22};// a = #200
func(x); // func(#200)
console.log(x); // output: {age: 23}
/*
    as the 'age' properties's value updated at #200 
    inside the function.
*/`,
        height: "430px"
    }
}