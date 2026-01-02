
function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("I");
    console.log("K");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);   
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // console.log("Gaurika");
    // return result;

    return num1 + num2;
    
}

const result = addTwoNumbers(4, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Gaurika"))