/*For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

Examples

input: [0, 1, 0, 2]
paired: ^-----^
    -> [0, 1,   2]
  kept: ^
*/
const  pairZeros=(arr)=>{
  let count=0;
  return  arr.filter((val)=>{
  if (val===0){
  return count++ %2===0
  }
  return true
  })                   
}