function player(name, age) {
  if (!new.target) {
    throw Error("You must use new keyword with this function");
  }
  this.name = name;
  this.age = age;
}
// let player1 = player("Yash", "19")
// console.log(player1.name);

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
