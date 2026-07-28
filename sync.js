function register() {
  setTimeout(() => {
    console.log("Register Here");
  }, 1000);
}
function login() {
  setTimeout(() => {
    console.log("Login Here");
  }, 2000);
}
function getData() {
  setTimeout(() => {
    console.log("Fetch Data From DB");
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log("Display Data");
  }, 1000);
}
// const start = Date.now();
// while (Date.now() - start < delay) {
//   console.log("Waiting for " + delay + " ms");
// }


register();
login();
getData();
displayData();
console.log("End of the program");
