const scramble=(str, arr)=> {
  const res =[];
  [...str].forEach((char,i)=>{
    res[arr[i]]=char;
  });
  return res.join('');
}
console.lop(scramble("abcd",[0, 3, 1, 2])
)