// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   logMe() {
//     console.log(`Hello ${this.name}`);
//     }
    
//     static id() {               // "static" keyword prevents access to this method
//         console.log("myId")
//     }
// }

// let yash = new User("Yash Tiwari");

// yash.logMe();

// class Admin extends User{            // Now "Admin" has access to all methods of "User" and this is called inheritance
//     constructor(name, email, pass) {
//         super(name)
//         this.email = email;
//         this.pass = pass;
//     }

//     isAdmin() {
//         console.log(`I (${this.name}) am Admin MY email ${this.email}`)
//     }
// }

// let ram = new Admin("Ram", "abc@gmail.com", "123")
// ram.isAdmin()
// ram.logMe();




//! Anonymous class
// let User = class {
//   sayHi() {
//     console.log("Hi!");
//   }
// };
// let hari = new User()
// hari.sayHi()

//! Named class
// let Admin = class AdminClass {
//   sayHi() {
//     console.log("Hello Admin");
//   }
// };
// let krish = new Admin();
// krish.sayHi()


//! Getters and Setters in Class
// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 3) {
//       console.log("Name too short");
//     } else {
//       this._name = value;
//     }
//   }
// }

// let u = new User("Raj");
// console.log(u.name); // Raj
// u.name = "Al";       // Name too short


//! inheritance extends and super keyword.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak(); // call parent method
//     console.log(`${this.name} barks`);
//   }
// }

// let d = new Dog("Tommy");
// d.speak();
// Tommy makes a sound
// Tommy barks


//! Private Fields (#)
// class User {
//   #secret = "hidden";

//   showSecret() {
//     console.log(this.#secret);
//   }
// }

// let user = new User();
// user.showSecret(); // hidden
// user.#secret;       //❌ Error: private field  