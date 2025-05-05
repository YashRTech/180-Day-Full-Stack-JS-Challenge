//! Links to all Questions :- https://javascript.info/prototype-inheritance#tasks

//! 1. Which values are shown in the process?
// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // true

// delete rabbit.jumps;

// console.log(rabbit.jumps); // null

// delete animal.jumps;

// console.log(rabbit.jumps); // undefined

//! 2. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
//! Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};
// console.log( pockets.pen ); // 3
// console.log( bed.glasses ); // 1
//? In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

//? For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe.

//! 3. If we call rabbit.eat(), which object receives the full property: animal or rabbit?
let animal = {
  eat() {
    this.full = true;
  },
};
let rabbit = {
  __proto__: animal,
};

rabbit.eat();
//? rabbit will receive the full property because of "this" keyword
//? The method rabbit.eat is first found in the prototype, then executed with this=rabbit.


//! 4. Why are both hamsters full?  Must check this question throw below link:
//? https://javascript.info/prototype-inheritance#why-are-both-hamsters-full
