// An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

// Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.


function isHollow(x){
    let preCount=0
    let midCount=0
    let postCount=0
    let zeroCounted=false  //flag
for(let i=0; i<x.length;i++){
    let currVal=x[i]
    if(currVal===0){
        midCount++
        zeroCounted =true
    }else{
        if(zeroCounted){
            postCount++
        }else{
            preCount++
        }
    }
    }
    console.log(preCount,midCount,postCount)
    if(preCount===postCount && midCount >2){
        return true
    }else{
        return false
    }
}