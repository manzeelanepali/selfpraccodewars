// A list S will be given. You need to generate a list T from it by following the given process:

// 1.Remove the first and last element from the list S and add them to the list T.
//2. Reverse the list S
// 3.Repeat the process until list S gets emptied.
// 4.The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

// Example
// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]
// return T 

// pseudocode 
// 1.Make a copy of"s"
// 2. Remove first and last element at a time from array "cs"
// 3.Push the removal element in the array "t"
// 4. After removing first and last element ,reverse the leftover elements in array "cs"
// 5. If cs.length is zero return "T"else repate the step 2
//  6.return "t"

function Arrange(s) {
     let T = []
     let CopyArray= [...s]
     while(CopyArray.length>0){
T.push(CopyArray[0],[CopyArray.length-1])
let slicedArr = CopyArray.slice(1,-1)
slicedArr.reverse()


     }
  console.log(T)
    
   return T;
  }
  
  
  Arrange([1, 2, 3, 4, 5])