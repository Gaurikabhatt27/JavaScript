// var c = 300
let a = 250

if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


// Scopes Continuation....

function one(){
    const username = "Gaurika"

    function two(){
        const website = " youtube"

        console.log(username);
    }

    // console.log(website);
    
    two();
}

// one()

if(true){
    const username = "Gaurika"

    if(username === "Gaurika"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ INTERSTING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function addOne(num){
    return num + 1;
}

console.log(addOne(5));

const addTwo = function(num){     //also known as Expression
    return num + 2;
}

console.log(addTwo(5))

// Variables in Javascript are very powerful and can hold anything. Like: Json values, functions, etc..

