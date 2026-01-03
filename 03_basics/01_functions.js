
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

// console.log(loginUserMessage("Gaurika"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Gaurika",
    price: 399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2, 5, 8]));
