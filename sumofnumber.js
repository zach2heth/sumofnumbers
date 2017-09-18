function sumFor(list) {
  let total = 0;
  for (let x = 0; x < list.length; x++) {
    total += list[x];
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let x = 0;
  while (x < list.length) {
    total += list[x];
    x++;
  }
  return total;
}

function sumRecursion(list, index) {
  if (index === 0) {
    return list[index];
  }
  return list[index] + sumRecursion(list, index - 1);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (tot, num) { return tot + num; });
}


const list = [1, 2, 3, 4];
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list, list.length - 1));
console.log(sumTheSimpleWay(list));
