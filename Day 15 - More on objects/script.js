let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

// console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

// console.log(admin.fullName); // Alice Cooper, state of admin modified
// console.log(user.fullName); // John Smith, state of user protected

//! for in loop

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys only returns own keys
// console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
// for (let prop in rabbit) console.log(prop); // jumps, then eats

// console.log(this)

const student = {
  name: "Yash",
  printName: function () {
    console.log(this.name);
  },
};
// student.printName();

const student2 = {
  name: "Ram",
};

// student.printName.call(student2);   //* Now this = student2 , First parameter of call takes value of this, which means whatever you want to set to this.

//! call apply and bind
let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};
let name2 = {
  firstName: "Yash",
  lastName: "Tiwari",
};

//* call() and apply() both methods immediately call that function
printFullName.call(name2, "Kanpur", "UP");    // takes extra arguments one by one
printFullName.apply(name2, ["Kanpur", "UP"]);  // takes extra arguments in form of array

//* bind method
let printMyName = printFullName.bind(name2, "Kanpur", "Utter Pradesh");  // bind method does not call immediately that function but save it for future use by returning new function
console.log(printMyName);
printMyName();
