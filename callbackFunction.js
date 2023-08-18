



 function callbackFunction (name,callbabackTest){
    console.log(`hey `)
    callbabackTest()

 }
 function callbabackTest(){
    console.log("checking call back test")
 }
 callbackFunction("rita",callbabackTest)
 console.log("hey there")