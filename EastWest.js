// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
// // pseudocode 
// 1.Go through the list of arrays 
// 2.check number of elements present in the array 
// 3. if the number of elements not equal to 10 return false 
// 4.count the number of each direction 
// 5.if number of south equals to number of north and if number of north equals to the number of south return true 

function inValidWalk(walks){
    let N=0
    let S=0
    let E=0
     let W=0;
    
    let walkInTime = false 
    if (walkInTime.length!==10){
        return false;
    }
    for(let i=0;i<walks.length; i++){
        let CurrVal = walks[i]
            if( CurrVal ===N){
                N++

            }
            if (CurrVal===S){
                S++;
            }
            if (CurrVal===W){
                    W++
            }
            if (CurrVal===E){
                E++
            }
        }
        if (N===S && E===W){
            return true;

        }
        return false ;
    }
    console.log(inValidWalk(N,W,E,S,N,W,E,S,N,W))


