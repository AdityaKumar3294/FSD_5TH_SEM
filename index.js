// let a = 34;
// console.log("a = " + a);

// var a = 34;
// if (a > 10) {
//   var a = 40;
//   console.log("Hi a inside the block: " +a);
// }
// console.log("Hi a outside the block: " +a);

// let a = 34;
// if (a > 10) {
//   let a = 40;
//   console.log("Hi a inside the block: " +a);
// }
// console.log("Hi a outside the block: " +a);

// function sum(a, b) {
//   return a+b;
// }
// console.log(sum(230, 30));

// const sum = (a, b) =>{ return a+b };
//  console.log(sum(230, 30));
//  const data = function(msg) {
//   return "Hello, I am using JS " +msg;
//  }
//  console.log(data("and Node"));

//  //IIFE - Immediately Invoked Function Expression
//  (() => {console.log("Hey.. using and calling IIFE")})();

//callback function
// function sum(a,b) {
//   return a+b;
// }

// function sumWithMsg(clbk, msg) {
//   const result = clbk(2,6);
//   console.log("Hey, Your result = " +result + " and msg = " +msg);
// }

// sumWithMsg(sum, "Aditya");

function login(msg, error) {
  if (error) {
    console.log("Error is" + error);
  }
  else {
    console.log(msg);
  }
}

function loginHandler (username, password, clbk) {
  if (username === "admin" && password === "1234") {
    clbk("success", null);
  }
  else {
    clbk(null, "Username or password is incorrect");
  }
}
loginHandler("admn", "1234", login);