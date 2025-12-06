console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ===

console.log("2" === 2);



// *********************************************************************************
// STACK AND HEAP

let myYoutubename = "Gaurikabhatt27"
let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let user = {
    email : "user@gmail.com",
    upi : "user123@ybl"
}


userTwo = user
userTwo.email = "github@google.com"

console.log(user.email);
console.log(userTwo.email);

