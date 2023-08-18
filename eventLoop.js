// call stack 
function greeting (){
    sayHi()
    console.log("first")
}

function sayHi(){
    console.log("second")
}
console.log("third")
greeting()

