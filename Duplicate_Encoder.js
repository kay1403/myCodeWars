const duplicateEncode=(word)=>{
    const neword=word.toLowerCase();
  return [...neword].map(char=>neword.indexOf(char)=== neword.lastIndexOf(char)? "(":")").join("");
}