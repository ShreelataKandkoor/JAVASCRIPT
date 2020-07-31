//GLobal Variable
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"


function fun(stuff) {
  console.log(v);
  stuff = "Reassign stuff inside function"
  console.log(stuff);
}

fun();
console.log(stuff);
