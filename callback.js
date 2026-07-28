function register(cb) {
  setTimeout(() => {
    console.log("Register Here");
    cb();
  }, 1000);
}

function login(cb) {
  setTimeout(() => {
    console.log("Login Here");
    cb();
  }, 2000);
}

function getData(cb) {
  setTimeout(() => {
    console.log("Fetch Data From DB");
    cb();
  }, 3000);
}

function displayData(cb) {
  setTimeout(() => {
    console.log("Display Data");
    cb();
  }, 1000);
}

// Callback function
function finish() {
  console.log("All Tasks Completed");
}

register(() => {
  login(() => {
    getData(() => {
      displayData(finish);
    });
  });
});

console.log("Start of the program");