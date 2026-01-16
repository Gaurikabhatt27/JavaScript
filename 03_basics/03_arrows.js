const user = {
    username: "Gaurika",
    price: 10000,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Gauri"
// user.welcomeMessage()

// console.log(this);


// function coffee(){
//     let username = "Gaurika"
//     console.log(this.username);
// }
// coffee()


// const coffee = function(){
//     let username = "Gaurika"
//     console.log(this.username);
// }
// coffee()


const coffee = () => {
    let username = "Gaurika"
    console.log(this);
}
// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username:"Gaurika"}) ;


console.log(addTwo(4,5))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})