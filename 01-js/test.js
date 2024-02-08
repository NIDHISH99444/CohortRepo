function sqaure(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function findResult(a,b,fn) {
    console.log(fn);
  let val1= fn(a);
  let val2= fn(b);
  return val1+val2;
}

console.log(findResult(3,4,cube));
