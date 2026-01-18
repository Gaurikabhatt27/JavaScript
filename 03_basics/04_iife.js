// Immediately Invoked Function Expressions (IIFE)

// Prevents from the problem of global scope
// To remove the pollution of global scope, we use iife

(function chai(){
    // named iife
    console.log(`DB connected`);
})();

( (name) => {
    // unnamed iife
    console.log(`DB connected TWO ${name}`);
})('Gaurika')

// iife