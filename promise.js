function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register Here");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login Here");
      resolve();
    }, 2000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch Data From DB");
      resolve();
    }, 3000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display Data");
      resolve();
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch Data From DB");
      resolve();
    }, 3000);
  });
}

function displayData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display Data");
      resolve();
    }, 1000);
  });
}

// Callback function
function finish() {
  console.log("All Tasks Completed");
}

register().then(login).then(getData).then(displayData).then(finish).catch((err) =>{
  console.log("Error",err);
})

console.log("Start of the program");