function getNum(n) {
  let numArr = new Array(n);
  for (let i = 0; i < n; i++) {
    numArr[i] = Math.floor(Math.random() * 9);
  }
  return numArr;
}

function winCondition(arr) {
  let total = arr.reduce((sum, el) => {
    return sum + el;
  });
  return total;
}

export { getNum, winCondition };
