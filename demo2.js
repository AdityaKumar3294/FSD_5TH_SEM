function sum(...num) {
  const sum = num.reduce((x,y) => x+y, 0);
  return sum;
}
module.exports = sum;