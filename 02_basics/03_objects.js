// singleton
// object.create

// object literals

const mySym = Symbol("123@")

const JsUser = {
    name : "Gaurika",
    "full name" : "Gaurika Bhatt",
    [mySym] : "#GAuri",
    age : 19,
    location : "Punjab",
    email : "gaurika@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "gaurika@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "gaurika@microsoft.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());


