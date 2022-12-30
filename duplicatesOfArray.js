let array = [1, 2, 3, 4, 5, 1, 2, 3, 3, 8, 9];

function duplicatesOfArray(array) {
  let duplicates = [];
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (!duplicates.includes(currVal)) {
      duplicates.push(currVal);
    }
  }
  return duplicates;
}
console.log(duplicatesOfArray(array));
