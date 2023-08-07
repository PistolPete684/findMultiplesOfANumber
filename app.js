function findMultiples(integer, limit) {
  //setup new array to be returned
  let arr = [];
  //setup for loop to run through multiple
  for (let i = integer; i <= limit; i += integer) {
  //add them to the new array
    arr.push(i);
  }
  //return the new array
  return arr
}