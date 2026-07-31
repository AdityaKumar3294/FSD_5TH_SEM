function sum(...num) {
  const sum = num.reduce((x,y) => (x+y));
  return sum;
}