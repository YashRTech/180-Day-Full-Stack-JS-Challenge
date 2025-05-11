let dog = 'snickers';

function logDog() {
  console.log(dog);     // Here this logs the value on global dog variable.
}

function go() {
  let dog = 'sunny';     // instead of this if we reassign the dog variable means ` dog = "sunny" ` then it will log "sunny" because it changes the global variable and this is what logDog() logs.
  logDog();      // When we call this it actually logs the value of that global "dog" variable because here we define new "dog" variable whose scope is only in this function.
}

// go();



const Formatter = (function() {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const timesRun = [];

  const makeUppercase = (text) => {
    log("Making uppercase");
    timesRun.push(null);
    return text.toUpperCase();
  };

  return {
    makeUppercase,
    timesRun,
  }
})();

console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.makeUppercase("tomek"));
console.log(Formatter.timesRun.length);