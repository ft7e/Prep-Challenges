let arr = [{ votesTo: "ahmad" }, { votesTo: "khaled" }, { votesTo: "sameer" }];
function lmao(array) {
  let result = arr.reduce((acc, element) => {
    return acc + element.votesTo;
  });
  return result;
}

console.log(lmao(arr));
