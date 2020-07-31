
var fname = prompt("Hello and Welcome. Please enter your first name:");
var lname = prompt("Please enter your last name:");
var age = prompt("how old you are?");
var height = prompt("enter how tall you are in centimeters>");
var petname = prompt("What is your pet name? ");
alert("Thank you so much for the information!");

//four Conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


//Name Conditions
if (fname[0]===lname[0]) {
  nameCond = true;
}else {
  nameCond = false;
}


//Age Conditiom
if (age>20 && age <30) {
  ageCond = true;
}else {
  ageCond = false;
}


//Height Condition
if (height >= 170) {
  heightCond =true;
}else {
  heightCond = false;
}


//Pet Condition
if (petname[petname.length-1]==="y") {
  petCond = true;
}else {
  petCond = false;
}


//Check All Conditiom
if (nameCond && ageCond && heightCond && petCond) {
  console.log("WELCOME SPY!");
}else {
  console.log("Nothing to see here");
}
