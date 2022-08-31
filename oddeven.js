// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// step 1- Go through the array 
// step 2- find the list of odd and even elements in the array 
// step 3- arrange the odd numbers in the ascending order 
// step 4- re arrange the array where odds will be in the ascending order and even in the same position 







function sortArray (array){
    let oddNum = array.filter((x)=> x%2 ===1).sort((a,b)=>a-b)
    let i=0;
    let result =[]
    array.forEach(element => {
        if (element%2===0){
            result.push(element)

        }
        else {
            result.push(oddNum[i])
            i++
        }
        
    });
    console.log(result)
    return result;
}
   sortArray([12,39,45,2,3])