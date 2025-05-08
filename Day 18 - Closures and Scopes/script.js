function x() {
  let a = 19;
  function y() {
    console.log(a);
  }
  a = 25;

  return y; // Here function y is returned, and actually it returned with its lexical scope. Important thing here the variables under this function does not come with its value they comes with their references which means,
  // Here "a" does not pointing to value "19" but actually it is reference to variable "a" which means if we change value of variable "a" later its value will also change in function y().
  // As a result here value of "a" will be "25" stored in function y()
}
let z = x();
// z();

function r() {
  let c = 160;

  function x() {
    let a = 19;
    function y() {
      console.log(a, c);
    }
    a = 25;

    y();
  };
  x();
}

r();
