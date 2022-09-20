function moveZero(array) {
  let result = [];
  let result2 = [];

  for (let i = 0; i < array.length; i++) {
    let curVall = array[i];
    if (curVall !== 0) {
      result.push(curVall);
      //   console.log("hi", result);
    } else {
      result2.push(curVall);
      //   console.log("Hey h", result2);
    }
  }
  let finalRes = result.concat(result2);
  console.log(finalRes);
  return finalRes;
}
moveZero([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
